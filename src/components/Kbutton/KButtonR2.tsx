import {Graphic, iconType, Igraphics} from "../Graphic/Graphic";

export interface KButtonR2{
    label : string;
}

import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
    label: string;
    icon?: JSX.Element;
    labelPosition?: 'left' | 'right';
    stretch?: boolean;
    center?: boolean;
    iconName?:  iconType;
    buttonStyle : "pill" | "rounded-rect" | "circle";
}

const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #1a73e8;
  cursor: pointer;

  ${({ stretch }) =>
    stretch &&
    css`
      width: 100%;
    `}

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}

  ${({ labelPosition }) =>
    labelPosition === 'right' &&
    css`
      flex-direction: row-reverse;
    `}
`;

const ButtonIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           icon,
                                           labelPosition,
                                           stretch,
                                           center,
                                            iconName,
                                            buttonStyle
                                       }: ButtonProps) => {
    return (
        <ButtonWrapper
            labelPosition={labelPosition}
            stretch={stretch}
            center={center}
            label={label} buttonStyle={buttonStyle}>
            {labelPosition === 'left' && (
                <>
                    {icon && <ButtonIcon>{icon}</ButtonIcon>}
                    <ButtonLabel>{label}</ButtonLabel>
                </>
            )}
            {labelPosition === 'right' && (
                <>
                    <ButtonLabel>{label}</ButtonLabel>
                    {icon && <ButtonIcon><Graphic graphicName={iconName}/></ButtonIcon>}
                </>
            )}
        </ButtonWrapper>
    );
};

export default Button;
