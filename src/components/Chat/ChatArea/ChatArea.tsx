// ChatArea.tsx

import React, { useEffect, useState, useRef, useCallback } from 'react';
import GetAndPlayVoice from "../../Audio/PlayAudio/GetAndPlayVoice";
import {ChatContainerStyled} from "../chat-container.styled";
import ChatBubble from "../ConversationBubbles/SpeechBubble/SpeechBubble/bubble";
import {ChatInput} from "../ChatInput/ChatInput";
import RecommendationBubble from "../ConversationBubbles/RecommendationBubble/RecommendationBubble";
import {brewerLibrary} from "../../../data/brewer-library";
import {NavLight} from "../../NavigationSimpler/NavLight";
import {BigAcross} from "../ConversationBubbles/ContentBubbles/BigAcross/BigAcrossSection";
import Typist from "../../Animated Effects/Typist/Typist";
import {formattingResponseGeneral} from "../prompts";


const ChatArea = () => {
    const [isMuted, setIsMuted] = useState<boolean>(false);

    const [apiMessages, setApiMessages] = useState<any[]>([
        {
            role: 'system',
            content: 'you are a friendly customer service worker at a boutique called Keurig.com that sells Keurig coffee machines and coffee makers. A customer comes in looking for a new coffee maker. You welcome the customer and ask them if they have a specific machine in mind or if they\'d like help deciding. '
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
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [uiMessages]); // Scroll to bottom whenever uiMessages changes
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
            body: JSON.stringify({ userInput: `${messageToSend}. ${formattingResponseGeneral}` , conversation: newApiMessages }),
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
            newUiMessages.push({ role: 'assistant', content: parsedResponse.text, recommendations: parsedResponse.recommendations, summary: parsedResponse.summary });
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

    return (
        <ChatContainerStyled className="chat-container">
            <NavLight/>
            <div className="conversation-container">
                <div>
                    <BigAcross
                        backgroundImage="/editorial/home/intro_clipped2.png"
                        mainMessage="25% Off Your Entire Order When You Bundle"
                        secondaryMessage="Buy a coffee maker and 4+ boxes of K-Cup® pods"
                        ctaLabel="Shop Coffee Makers"
                        backgroundColor="#ecd8c1"
                        actionFunction={
                        ()=>handleSend(
                            'Give 3 Keurig coffee maker recommendations to get started. Explain this offer to the customer and ask if they\'d like to take advantage of it.The they buy any coffee maker and four or more boxes of coffee they get 25% off their entire order. ask them if they would like some help finding a coffee maker or they want to browse all',
                            false)}
                        />
                        <Typist
                            speed={0.02}
                            message={"Hi, Welcome to Keurig - I'm your virtual assistant. I can help you find the perfect coffee maker and coffee for you. I can also help you with any questions you have about your Keurig machine or coffee."}
                        />
                </div>
                {messagePairs.map((pair, index) => (
                    <div key={index} className="conversation">
                        {/*{message.role === 'assistant' && <div>{`${JSON.stringify(message)}`}</div>}*/}
                        {
                            pair[1] && pair[1].recommendations.length > 0 &&
                            <div className="recommendations">
                                <RecommendationBubble
                                    recommendations={pair[1].recommendations}
                                    allProducts={brewerLibrary}
                                />
                            </div>
                        }
                        <ChatBubble
                            chat={pair[0].content}
                            response={pair[1] ? pair[1].content : null}
                            summary={pair[1] ? pair[1].summary : null}
                        />
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
            />
            <div className="bg-filler"></div>
        </ChatContainerStyled>
    );
};

export default ChatArea;
