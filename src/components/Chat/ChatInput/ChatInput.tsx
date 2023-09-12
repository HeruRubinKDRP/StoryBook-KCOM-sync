import React from "react";
import KButton from "../../Kbutton/KButton";
import {iconType} from "../../Graphic/Graphic";
import {ChatInputStyled} from "./chat-input.styled";

export interface iChatInputProps {
    sendLabel?: string;
    onSend: (message: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userInput: string;
    iconStandard?: iconType;
}

export const ChatInput: React.FC<iChatInputProps> = (props) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onSend(props.userInput);
        }
    };

    return (
        <ChatInputStyled className="chat-input">
            <div className="controls">
                <input
                    className="chat-input"
                    type="text"
                    value={props.userInput}
                    onChange={props.handleChange}
                    onKeyDown={handleKeyDown}  // Add this line
                />
                <KButton
                    label={props.sendLabel ?? ""}
                    buttonType="primary"
                    classes="send-btn"
                    buttonWidth="fit-to-content"
                    iconStandard={props.iconStandard ?? "none"}
                    actionFunc={() => props.onSend(props.userInput)}
                    transitionType="expand-bg"
                />
            </div>
        </ChatInputStyled>
    );
};
