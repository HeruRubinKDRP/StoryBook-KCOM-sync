import React, { useState } from 'react';
import styled from 'styled-components';
import {Container, Indicator, ValueLabel} from "./switch.styled";

export interface SwitchProps {
    leftValue: string;
    rightValue: string;
    value: boolean;
    onChange: () => void;
}





const Switch: React.FC<SwitchProps> = ({
                                           leftValue,
                                           rightValue,
                                           value,
                                           onChange,
                                       }) => {

    const [isSelected, setIsSelected] = useState(value);

    const handleClick = () => {
        setIsSelected(!isSelected);
        if(onChange){
            onChange();
        }
        console.log(isSelected)
    };


    return (
        <Container className="switch-container" onClick={handleClick}>
            <ValueLabel className={`left ${isSelected? "selected" : "" }`} >
                {leftValue}
            </ValueLabel>
            <ValueLabel className={`right ${isSelected? "" : "selected" }`}>
                {rightValue}
            </ValueLabel>
            <Indicator selected={isSelected} className="indicator"  />
        </Container>
    );
};

export default Switch;
