import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const ClassicGridContainer = styled.div`
  display: grid;
/*  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-gap: 30px;
  flex-grow: 1;*/
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
/*
  background-color: ${colorNameToValue("latte70")};
*/

  @media (min-width: 2001px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1401px) and (max-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ClassicOuterContainer = styled.div`

  
  .overlay{
    position: fixed;
    z-index: 10000;
    inset: 0;
  }

  .modal-item{
    bottom: 60px !important;
    margin: 0 10% 5% 6%;
    max-width: 100%;
    min-width: 90%;
    max-height: 80vh;
    position: relative;
  }

  .hide-scroll{
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .add-to-cart-journey-small{
    position: fixed;
    z-index: 10000;
    inset: 0;
    background-color: rgba(0,0,0,0.5);
  }

`;