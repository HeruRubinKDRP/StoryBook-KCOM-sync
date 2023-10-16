import React, {useState} from "react";
import KButton from "../../Kbutton/KButton";
import {iconType} from "../../Graphic/Graphic";
import {ChatInputStyled} from "./chat-input.styled";
import {AnimatedPlaceholderStyled} from "../AnimatedPlaceholderText/animated-placeholder.styled";
import AnimatedPlaceholder from "../AnimatedPlaceholderText/AnimatedPlaceholder";

export interface iChatInputProps {
    sendLabel?: string;
    onSend: (message: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userInput: string;
    iconStandard?: iconType;
}

export const ChatInput: React.FC<iChatInputProps> = (props) => {

    const [isFocused, setIsFocused] = useState(false);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onSend(props.userInput);
        }
    };

    return (
        <ChatInputStyled className="chat-input">
            <div className="controls">
                <input
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="chat-input"
                    type="text"
                    value={props.userInput}
                    onChange={props.handleChange}
                    onKeyDown={handleKeyDown}  // Add this line
                />
                {
                    !isFocused &&
                    <AnimatedPlaceholder
                        duration={3}
                        placeholders={[
                            'I want a small coffee maker, something in pink...',
                            'How can I make pumpkin spice latte myself?...',
                            'Do you have Starbucks or Dunkin pods?...',
                            'How do I clean my Keurig machine?...',
                            'Why do they roast coffee?...',
                            'How does Perks Points work?...',
                        ]}
                    />
                }
                <KButton
                    label={props.sendLabel ?? ""}
                    buttonType="primary"
                    classes="send-btn"
                    buttonWidth="fit-to-content"
                    iconStandard={props.iconStandard ?? "none"}
                    iconPlacement={"after-label"}
                    actionFunc={() => props.onSend(props.userInput)}
                    transitionType="expand-bg"
                />
            </div>
        </ChatInputStyled>
    );
};
