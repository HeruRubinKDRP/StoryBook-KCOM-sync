import React from 'react';
import {ChatBubbleStyled, ChatItemContainer} from "./bubble.styles";
import Typist from "../../../../Animated Effects/Typist/Typist";
import Image from "next/image";
import Graphic from "../../../../Graphic/Graphic";



interface ChatBubbleProps {
    icon?: string; // URL of the icon
     chat? : string;
     response? : string;
    summary?: string; // Summary of the chat bubble
}

const ChatBubble: React.FC<ChatBubbleProps> = (props : ChatBubbleProps) => {
    return (
        <ChatItemContainer>
            {
                props.summary &&
                <div className="summary">
                    <h3>
                        {props.summary ?? ""}
                    </h3>
                    <div className="divider"/>
                </div>
            }
            <div className="back-and-forth">
                {
                    props.chat && (
                    <ChatBubbleStyled className={`chat-bubble right chat`}>
                       <Graphic graphicName={"icon-user"} />
                        <div className="text">
                            <Typist speed={0.0005} message={props.chat ?? ""} showCursor={false} />
                        </div>
                    </ChatBubbleStyled>
                    )
                }
                {
                    props.response && (
                        <ChatBubbleStyled className={`chat-bubble left response`}>
                            <Graphic graphicName={"logo-keurig-circled"} />
                            <div className="text">
                                <Typist speed={0.01} message={props.response ?? ""} showCursor={false} />
                            </div>
                        </ChatBubbleStyled>
                    )
                }
            </div>
        </ChatItemContainer>
    );
};

export default ChatBubble;
