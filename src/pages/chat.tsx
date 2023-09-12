import React, {useEffect, useState, useRef, useCallback} from 'react';
import ChatBubble from "../components/Chat/ConversationBubbles/bubble";
import GetAndPlayVoice from "../components/Audio/PlayAudio/GetAndPlayVoice";
import {ChatInput} from "../components/Chat/ChatInput/ChatInput";
import {ChatContainerStyled} from "../components/Chat/chat-container.styled";

const Chat = () => {


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

        // Call Next.js API to get model's response
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: `${messageToSend}, please format your response in JSON format with conversation in a 'text' field and a 'recommendations' field. If you have enough info to make a recommendation then make array of product suggestions like this: [{"productType" : "machine", "name": "Keurig K-Mini"}, {"productType" : "machine" , "name", "Keurig K-Elite"}, {"productType" : "beverage", "name" : "French Vanilla"}], otherwise return an empty array like this: [] ` , conversation: newApiMessages }),
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
            newUiMessages.push({ role: 'assistant', content: parsedResponse.text, recommendations: parsedResponse.recommendations });
        } else {
            newUiMessages.push({ role: 'assistant', content: data.result });
        }

        // Append model's message to chat and API conversation
        setApiMessages([...newApiMessages, { role: 'assistant', content: data.result }]);
        setUiMessages(newUiMessages);
        // Fetch and play voice for the assistant's message

        await GetAndPlayVoice(parsedResponse ? parsedResponse.text : data.result);
        // Clear user input if it's not an initial message
        console.log(newUiMessages)
        if (!initialMessage) {
            setUserInput('');
        }
    }, [apiMessages, uiMessages, userInput]); // Add dependencies here

    useEffect(() => {
        // Simulate an automatic "hello" from the user when the component mounts
        handleSend('hello', false);
    }, [handleSend]);

    return (
        <ChatContainerStyled className="chat-container">
            <div className="conversation-container">
                {uiMessages.map((message, index) => (
                    //<div key={index}>{message.role}: {message.content}</div>
                    <div key={index} className="conversation">
                        <div className="recommendations">
                            {message.recommendations && message.recommendations.length > 0 &&  <>{JSON.stringify(message.recommendations)}</>}
                        </div>
                        <ChatBubble
                            position={message.role === 'user' ? 'right' : 'left'}
                            text={message.content}
                            // icon={message.role === 'user' ? '/user.png' : '/assistant.png'}
                        />
                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
            <ChatInput
                sendLabel={"Send"}
                onSend={(message) => handleSend(message, true)}
                handleChange={handleInputChange}
                userInput={userInput}
            />
        </ChatContainerStyled>
    );
};

export default Chat;
