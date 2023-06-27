import styled, { css } from 'styled-components';


export type iColorPickerButtonStyled = {
    inStock: boolean;
    colorValue: string;
    selected: boolean;
}

export const ColorPickerSimpleStyled = styled.div`
    display: flex;
  position: relative;
`;
export const ColorPickerButtonStyled = styled.button<iColorPickerButtonStyled>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  transition: transform 0.3s;
  background-color: ${props => props.colorValue};
  border: none;
  position: relative;
  display: flex;
  .selection-circle{
    position: absolute;
    inset: -4px;
    border: 3px solid black;
    border-radius: 100vw;
    display: none;
  }
  &.selected{
    .selection-circle{
      display: flex;
    }
  }
  &:hover {
    transform: scale(1.2);
    &:after{
        transform: scale(1.2);
    }
  }
  
  ${props => props.selected && css`
  
  
  `}

  ${props => !props.inStock && css`
    position: relative;
    border: 2px dashed #000; 

    &:after {
      transition: transform 0.3s;
      content: "";
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom right,transparent 49.5%,#fff 49.5%,#fff 50.5%,transparent 50.5%);
      mix-blend-mode: hard-light;
    }
  `}
`;
