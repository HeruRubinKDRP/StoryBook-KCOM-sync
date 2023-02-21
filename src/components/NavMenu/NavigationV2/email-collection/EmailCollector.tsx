import {StyledEmailCollector} from "./StyledEmailCollector";
import {Interweave} from "interweave";

export interface iEmailCollector{
    emailErrorMessage : string;
    emailValidMessage: string;
    explanationText : string;
    placeHolderText : string;
    submitButtonText : string;
}

import React, { useState } from 'react';
import {isValidEmail} from "../../../_utilities/validation/validation";
import Graphic from "../../../Graphic/Graphic";
import KButton from "../../../Kbutton/KButton";
import {useResizeDetector} from "react-resize-detector";

export const EmailCollector = (props:iEmailCollector) =>{
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const {width, height, ref} = useResizeDetector({
        handleHeight: false,
        refreshMode: 'debounce',
        refreshOptions: {},
        refreshRate: 100,
        skipOnMount: false,
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setEmail(email);

        // Validate email and set error message if invalid
        if (email.length >= 3 && !isValidEmail(email)) {
            setError(props.emailErrorMessage);
        } else {
            setError('');
        }
    };


    const handleSubmit = () => {
        if(email.length >= 3 && isValidEmail(email)){
            setSuccess(true);
        }
    }


    return (
        <StyledEmailCollector className="email-collector-container" ref={ref} theme={{widthX : width}}>
            {
                !success && (
                <>
                    <div className="explanation-area">
                        <Graphic graphicName={"icon-envelope"} />
                        <Interweave className="explanation" tagName="div" content={props.explanationText} />
                    </div>
                    <div className="inputs-area">
                        <input type="email" value={email} onChange={handleChange} placeholder={props.placeHolderText} />
                        <KButton actionFunc={()=>handleSubmit()} label={props.submitButtonText} buttonType="primary" transitionType="expand-bg" buttonWidth="fit-to-content" />
                    </div>
                </>
                )
            }

            {
                success && (
                    <div className="success"><Graphic graphicName="icon-checkmark"/><p>{props.emailValidMessage}</p></div>
                )
            }
            <div className="message-area">
                {error && <div className="error"><Graphic graphicName="error-notification"/><p>{error}</p></div>}

            </div>
        </StyledEmailCollector>
    );
}




