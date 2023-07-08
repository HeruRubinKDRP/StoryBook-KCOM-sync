import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  padding: 1rem; 
  box-sizing: border-box;
  background-color: ${colorNameToValue("latte70")};
  
  @media (min-width: 2400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1600px) and (max-width: 2399px) {
    grid-template-columns: repeat(4, 1fr);
  }

  // You can add more breakpoints here

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;