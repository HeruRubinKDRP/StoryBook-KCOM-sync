import React, {useEffect, useState} from 'react';
import ChatBubble from "../components/Chat/ConversationBubbles/bubble";
import GetAndPlayVoice from "../components/Audio/PlayAudio/GetAndPlayVoice";

const Chat = () => {
    useEffect(() => {
        // Simulate an automatic "hello" from the user when the component mounts
        handleSend('hello', false);
    }, []);

    const [apiMessages, setApiMessages] = useState<any[]>([
        {
            role: 'system',
            content: 'you are a friendly customer service worker at a boutique called Keurig.com that sells coffee machines and coffee makers. A customer comes in looking for a new coffee maker. Ask them a question to find out about how coffee fits into their life.'
        },
        {
            role: 'system',
            content: 'You communicate at a fourth grade level.'
        },{
            role: 'system',
            content: 'try to keep responses under 400 characters.'
        },
        {
            role: 'system',
            content: 'You are friendly and warm.'
        },
        {
            role: 'system',
            content: 'When you get enough information to recommend a type of coffee maker and then suggest that if the customer tries auto-delivery coffee from us they get 25% off the coffee. Please wrap it with *AD* markers. For example: *AD* Additionally, if you purchase your coffee maker from us and buy our coffee, we can offer you a 25% discount on the coffee maker itself and 25% off the coffee. *AD*.'
        },
        {
            "role": "system",
            "content": "You are a helpful assistant specialized in recommending coffee makers. When you make a recommendation, please wrap the product name with *reco* markers. For example: *reco* Keurig K-Mini *reco*."
        },
        {
            role: 'system',
            content: 'You welcome the customer and ask them if they have a specific machine in mind or if they\'d like help deciding'
        },
        {
            role: 'system',
            content: 'You welcome the customer and ask them if they have a specific machine in mind or if they\'d like help deciding'
        }
    ]);

    const [uiMessages, setUiMessages] = useState<any[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    const handleSend = async (initialMessage?: string, showInUI: boolean = true) => {
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
            body: JSON.stringify({ userInput: messageToSend, conversation: newApiMessages }),
        });

        const data = await response.json();

        // Append model's message to chat and API conversation
        setApiMessages([...newApiMessages, { role: 'assistant', content: data.result }]);
        setUiMessages([...newUiMessages, { role: 'assistant', content: data.result }]);
        // Fetch and play voice for the assistant's message
        await GetAndPlayVoice(data.result);
        // Clear user input if it's not an initial message
        if (!initialMessage) {
            setUserInput('');
        }
    };

    return (
        <div>
            <div>
                {uiMessages.map((message, index) => (
                    //<div key={index}>{message.role}: {message.content}</div>
                    <ChatBubble
                        position={message.role === 'user' ? 'right' : 'left'}
                        key={index}
                        text={message.content}
                        // icon={message.role === 'user' ? '/user.png' : '/assistant.png'}
                        />
                ))}
            </div>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <button onClick={()=>handleSend("", true)}>Send</button>
        </div>
    );
};

export default Chat;
