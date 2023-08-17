import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {StepContainer, StepsOutermostContainer} from "./coffee-kits.styled";
import KButton from "../Kbutton/KButton";
import {OptionSelectionItem} from "./SecondaryComponents/OptionSelectionItem";


const Button = styled.button`
  margin-top: 10px;
`;

const StepComponent: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const stepRefs = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
    ];

    useEffect(() => {
        if (stepRefs[currentStep - 1].current ) {
            stepRefs[currentStep - 1].current!.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentStep]);

    return (
        <StepsOutermostContainer>
            <StepContainer ref={stepRefs[0]}>
                <h2>Coffee Explorer Kit</h2>
                {/* Your form elements for step 1 */}
                <div className="selections-area">
                    <OptionSelectionItem
                        mainImage="3"
                        secondaryTitle="Months"
                        actionLabel=""
                        mainTitle="3"
                        description=""
                        primaryAction={() => setCurrentStep(2)}
                    />
                    <OptionSelectionItem
                        mainImage="6"
                        secondaryTitle="Months"
                        actionLabel=""
                        mainTitle="6"
                        description=""
                        primaryAction={() => setCurrentStep(2)}
                    />
                </div>

            </StepContainer>

            {currentStep >= 2 && (
                <StepContainer ref={stepRefs[1]}>
                    <h2>Step 2</h2>
                    {/* Your form elements for step 2 */}
                    {/* You can add a button to proceed to the next step or go back to the previous step if needed */}
                    <Button onClick={() => setCurrentStep(3)}></Button>
                    <Button onClick={() => setCurrentStep(3)}></Button>
                </StepContainer>
            )}

            {currentStep >= 3 && (
                <StepContainer ref={stepRefs[2]}>
                    <h2>Step 2</h2>
                    {/* Your form elements for step 2 */}
                    {/* You can add a button to proceed to the next step or go back to the previous step if needed */}
                </StepContainer>
            )}
        </StepsOutermostContainer>
    );
};

export default StepComponent;
