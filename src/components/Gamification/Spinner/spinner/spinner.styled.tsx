import styled from "styled-components";

export interface iSpinnerStyle{
    width: number;
    height: number;
}

export const SpinnerStyled = styled.div<iSpinnerStyle>`
  --outerWidth: ${props => props.width }px;
  --outerHeight: ${props => props.height }px;
  width: var(--outerWidth);
  height: var(--outerHeight);
  border-radius: 100vw;
  
  
  .spinner-outer{
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    border: 1px solid black;
    border-radius: 200vw;
    width: calc(var(--outerWidth) * 2);
    height: calc(var(--outerWidth) * 2);
    //box-shadow:  20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }
  .promo-item{
    border: 1px solid black;
  }

`