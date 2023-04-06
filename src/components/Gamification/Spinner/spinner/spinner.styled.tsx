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
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:  20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
  .spinner-outer{
    border: 1px solid black;
    border-radius: 200vw;
    width: var(--outerWidth);
    height: var(--outerHeight);
  }
  .promo-item{
    border: 1px solid black;
  }

`