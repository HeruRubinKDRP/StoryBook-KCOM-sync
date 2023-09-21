import {colorByNameType, colorNameToValue } from "components/_utilities/color-name-to-value/colorNameToValue";
import styled from "styled-components";

export const SliderWrapper = styled.div<{ bgColor?: colorByNameType }>`
  display: flex;
  justify-content: space-between;  // aligns children horizontally
  align-items: center;  // aligns children vertically
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60px;  // adjust this as per your need
  background-color: ${props => colorNameToValue(props.bgColor)};
`;



export const SlideWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transform: ${({ translateX }) => `translateX(-${translateX}%)`};
  transition: transform 1s ease-in-out;
  width: 100%;
  height: 100%;
`;


export const Slide = styled.div<{bgColor?: colorByNameType, fontColor?: colorByNameType}>`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => colorNameToValue(props.bgColor)};
  color: ${props => colorNameToValue(props.fontColor)};
`;



export const Arrow = styled.div<{ left?: boolean, right?: boolean }>`
  position: absolute;
    /*
    top: 50%;
    */
    ${({ left }) => left ? 'left: 10px' : 'right: 10px'};
    cursor: pointer;
    z-index: 2;
`;

export const SvgContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 50%;
    height: 50%;
    /*
    object-fit: cover;
    */
  }
`;
