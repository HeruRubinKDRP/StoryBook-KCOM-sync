import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export const WelcomeAreaStyled = styled.div`
 
  background-color: ${colorNameToValue("faintWarm")};
  padding: clamp(0.75rem,1vw,1.25rem) clamp(1rem,1.25vw,1.5rem);
  .welcome-area-menu {
    justify-content: space-between;
    display: flex;
    .k-btn{
      padding-left: 0 !important;
     
    }
  }

`;