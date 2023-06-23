import {isValidEmail} from "../_utilities/validation/validation";
import KButton from "../Kbutton/KButton";
import React, {useState} from "react";

export const OutOfStock = () => {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);

    return(
        <div className="out-of-stock">
        {showEmailInput && (
            <div className="email-input-container">
                <label htmlFor="email">Enter email address:</label>
                <div className="submit">
                    <input
                        className="email-input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (!isValidEmail(e.target.value)) {
                                setEmailError('Enter a valid email address.');
                                setSubmitDisabled(true);
                            } else {
                                setEmailError('');
                                setSubmitDisabled(false);
                            }
                        }}

                    />
                    <KButton
                        transitionType="expand-bg"
                        classes={`submit-email ${submitDisabled ? 'disabled' : ''}`}
                        buttonWidth="fit-to-content"
                        label="Submit"
                        iconStandard="none"
                        iconPlacement="after-label"
                        buttonType="primary"
                        actionFunc={() => {
                            if (!isValidEmail(email)) {
                                setEmailError('Please enter a valid email address.');
                                // Add your animation class here
                                document.querySelector('.email-error')?.classList.add('error-active');
                            } else {
                                // Handle the valid email submission here
                            }
                        }}
                    />
                </div>
                {emailError && <div className="email-error">{emailError}</div>}
            </div>
        )}
    {
        !showEmailInput && (
            <div className="cta-container">
                <KButton
                    transitionType="expand-bg"
                    classes={`cta-main ${"productType"}-cta`}
                    buttonWidth="fit-to-content"
                    label={'Notify Me'}
                    iconStandard="icon-add"
                    iconPlacement="after-label"
                    buttonType="primary"
                    actionFunc={()=>setShowEmailInput(true)}
                />
            </div>
        )
    }
</div>
    )
}