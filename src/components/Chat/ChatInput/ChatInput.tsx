import React from "react";
import KButton from "../../Kbutton/KButton";
import {iconType} from "../../Graphic/Graphic";

export interface iChatInputProps {
    sendLabel?: string;
    onSend: (message: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userInput: string;
    iconStandard?: iconType;
}

export const ChatInput: React.FC<iChatInputProps> = (props) => {
    return (
        <div>
            <input type="text" value={props.userInput} onChange={props.handleChange} />
            <KButton
                label={props.sendLabel ?? ""}
                buttonType="primary"
                iconStandard={props.iconStandard ?? "none"}
                actionFunc={() => props.onSend(props.userInput)}
            />
            <button onClick={() => props.onSend(props.userInput)}>Send</button>
        </div>
    );
};
