import React from 'react';
import {ChatBubbleStyled} from "./bubble.styles";
import Typist from "../../Animated Effects/Typist/Typist";


interface ChatBubbleProps {
    icon?: string; // URL of the icon
    text: string; // Text to display in the chat bubble
    position: 'left' | 'right'; // Position of the icon
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ icon, text, position }) => {
    return (
        <ChatBubbleStyled className={`chat-bubble ${position}`}>
            {icon && <img className="icon" src={icon} alt="icon" />}
            <div className="text">
                <Typist speed={"fast"} message={text} showCursor={false} />
            </div>
        </ChatBubbleStyled>
    );
};

export default ChatBubble;
