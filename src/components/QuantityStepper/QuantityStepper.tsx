import React, { useState, useCallback } from 'react';
import {QuantityStepperWrapper} from "./quantity-stepper.styled";
import KButton from "../Kbutton/KButton";
import {useResizeDetector} from "react-resize-detector";

export type StepperProps = {
    lowThreshold: number;
    highThreshold: number;
    onValueChange: (value: number) => void;
    soundFile: string;
};

const QuantityStepper: React.FC<StepperProps> = ({ lowThreshold, highThreshold, onValueChange, soundFile }) => {
    const [value, setValue] = useState<number>(0);
    const [shake, setShake] = useState<boolean>(false);

    const audio = new Audio(soundFile);

    const {width, height, ref }=useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {},
    });





    const handleIncrement = useCallback(() => {
        if (value < highThreshold) {
            setValue(prevValue => {
                const newValue = prevValue + 1;
                onValueChange(newValue);
                return newValue;
            });
        } else {
            setShake(true);
            audio.play();
            setTimeout(() => setShake(false), 500);
        }
    }, [value, highThreshold, onValueChange, audio]);

    const handleDecrement = useCallback(() => {
        if (value > lowThreshold) {
            setValue(prevValue => {
                const newValue = prevValue - 1;
                onValueChange(newValue);
                return newValue;
            });
        } else {
            setShake(true);
            audio.play();
            setTimeout(() => setShake(false), 500);
        }
    }, [value, lowThreshold, onValueChange, audio]);

    return (
        <QuantityStepperWrapper className="stepper" >
            <KButton
                transitionType="expand-bg"
                classes={`stepper `}
                buttonWidth="fit-to-content"
                label={''}
                iconStandard="icon-add"
                iconPlacement="after-label"
                buttonType="secondary"
                actionFunc={handleDecrement}
            />
            <div className={`value  ${shake ? 'shake-animation' : ''}`}  >{value}</div>
            <KButton
                transitionType="expand-bg"
                classes={`stepper `}
                buttonWidth="fit-to-content"
                label={''}
                iconStandard="icon-add"
                iconPlacement="after-label"
                buttonType="secondary"
                actionFunc={handleIncrement}
            />
        </QuantityStepperWrapper>
    );
};

export default QuantityStepper;
