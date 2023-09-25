// ChatArea.tsx

import React, { useEffect, useState, useRef, useCallback } from 'react';
import GetAndPlayVoice from "../../Audio/PlayAudio/GetAndPlayVoice";
import {ChatContainerStyled} from "../chat-container.styled";
import ChatBubble from "../ConversationBubbles/SpeechBubble/SpeechBubble/bubble";
import {ChatInput} from "../ChatInput/ChatInput";
import RecommendationBubble from "../ConversationBubbles/RecommendationBubble/RecommendationBubble";
import {brewerLibrary} from "../../../data/brewer-library";
import {NavLight} from "../../NavigationSimpler/NavLight";
import {formattingResponseGeneral} from "../prompts";
import {ChatPage} from "../ChatPageSections/ChatPages";
import {navItems} from "../../../data/demo-nav-data";
import {Sequence} from "../Sequences/Sequence";


export interface IChatArea {
    currentRoute : string;
}

const ChatArea = (props : IChatArea) => {
    const [isMuted, setIsMuted] = useState<boolean>(false);
    useEffect(() => {
        // Check if there's a route
        if (props.currentRoute) {
            // Logic to append content related to the route into the chat
            // For demonstration, appending a system message
            const newMessage = {
                role: 'system',
                content: `At this moment, The customer is interested in the ${props.currentRoute} section and likely interested in that: ${props.currentRoute || "Not Found"}.`,
            };
            setApiMessages([...apiMessages, newMessage]);
        }
    }, [props.currentRoute]); // Dependency on route


    const [apiMessages, setApiMessages] = useState<any[]>([
        {
            role: 'system',
            content: `you are a friendly customer service worker at a boutique called Keurig.com that sells Keurig coffee machines, beverages, and accessories. A customer comes in looking to shop. You welcome the customer and ask them if they have a ${props.currentRoute} in mind or if they'd like help deciding. `
        },{
            role: 'system',
            content: 'If the customer wants help deciding on a Keurig coffee maker ask them a question to find out about how coffee fits into their life. Ask probing questions until you have enough information to recommend 1-3 coffee makers.'
        },
        {
            role: 'system',
            content: 'You communicate at a fourth grade level. You are friendly and warm.'
        },{
            role: 'system',
            content: 'try to keep responses under 300 characters.'
        },
        {
            role: 'system',
            content: 'When you get enough information to recommend a type of coffee maker and then suggest that if the customer tries auto-delivery coffee from us they get 25% off beverages and earn points towards free stuff. '
        },

    ]);
    const [uiMessages, setUiMessages] = useState<any[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null); // Create a ref

    const scrollToBottom = () => {
        console.log("scrollToBottom");
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    const handleSend = useCallback(async (initialMessage?: string, showInUI: boolean = true) => {
        setUserInput("");
        const messageToSend = initialMessage || userInput;

        // Append user message to API conversation
        const newApiMessages = [...apiMessages, { role: 'user', content: messageToSend }];
        setApiMessages(newApiMessages);

        // Append user message to UI conversation only if showInUI is true
        let newUiMessages = [...uiMessages];
        if (showInUI) {
            newUiMessages.push({ role: 'user', content: messageToSend });
            setUiMessages(newUiMessages);
        }

        console.log("handleSend");

        // Call Next.js API to get model's response
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: `${messageToSend}. ${formattingResponseGeneral(props.currentRoute)}` , conversation: newApiMessages }),
        });

        const data = await response.json();

        // Parse the assistant's response from JSON string to object
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(data.result);
            console.log("parsedResponse:", parsedResponse);
        } catch (e) {
            console.error("Failed to parse assistant's response:", e);
        }

        // Use parsed response for UI rendering
        if (parsedResponse) {
            newUiMessages.push({ role: 'assistant', content: parsedResponse.text, recommendations: parsedResponse.recommendations, summary: parsedResponse.summary, route: parsedResponse.route, sequence: parsedResponse.sequence });
        } else {
            newUiMessages.push({ role: 'assistant', content: data.result });
        }

        // Append model's message to chat and API conversation
        setApiMessages([...newApiMessages, { role: 'assistant', content: data.result }]);
        setUiMessages(newUiMessages);
        // Fetch and play voice for the assistant's message

        // Fetch and play voice for the assistant's message
        if (!isMuted) {
            await GetAndPlayVoice(parsedResponse ? parsedResponse.text : data.result);
        }

        // Clear user input if it's not an initial message
        console.log(newUiMessages)
        if (!initialMessage) {
            setUserInput('');
        }

        // Directly call scrollToBottom after updating messages
        scrollToBottom();
    }, [apiMessages, uiMessages, userInput, isMuted]); // Add dependencies here

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const messagePairs = uiMessages.reduce((acc: any[][], message, index) => {
        if (index % 2 === 0) {
            acc.push([message]);
        } else {
            acc[acc.length - 1].push(message);
        }
        return acc;
    }, []);

    const handleNavigation = async (route: string, instructions : string) => {

    }

    return (
        <ChatContainerStyled className="chat-container">
            <NavLight navItems={navItems}/>
            <div className="conversation-container">
                <div>
                    {props.currentRoute &&
                        <>
                            {/*<div className="current-route">Current Route: {props.currentRoute}</div>*/}
                            <ChatPage isMuted={isMuted} route={props.currentRoute} actionFunction={()=>handleSend(
                                'Give 3 specific Keurig coffee maker recommendations to get started. Explain this offer to the customer and ask if they\'d like to take advantage of it.The they buy any coffee maker and four or more boxes of coffee they get 25% off their entire order. ',
                                false)} />
                        </>
                    }
                </div>
                {messagePairs.map((pair, index) => (

                    <div key={index} className="conversation">
                        {/*{message.role === 'assistant' && <div>{`${JSON.stringify(message)}`}</div>}*/}
                        {
                            pair[1] && pair[1].sequence.sequenceType === "none" &&
                            <ChatBubble
                                chat={pair[0].content}
                                response={pair[1] ? pair[1].content : null}
                                summary={pair[1] ? pair[1].summary : null}
                            />
                        }
                        {
                            pair[1] && pair[1].sequence.sequenceType !== "none" &&
                            <Sequence
                                prerequisites={pair[1].sequence.prerequisites}
                                steps={pair[1].sequence.steps} />
                        }
                        {
                            pair[1] && pair[1].recommendations && pair[1].recommendations.length > 0 &&
                            <div className="recommendations">
                                <RecommendationBubble
                                    recommendations={pair[1].recommendations}
                                    allProducts={brewerLibrary}
                                />
                            </div>
                        }

                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
            <button onClick={toggleMute}>
                {isMuted ? "Unmute" : "Mute"}
            </button>
            <ChatInput
                sendLabel={"Send"}
                onSend={(message) => handleSend(message, true)}
                handleChange={handleInputChange}
                userInput={userInput}
                iconStandard="send-icon"
            />
            <div className="bg-filler"></div>
        </ChatContainerStyled>
    );
};

export default ChatArea;
