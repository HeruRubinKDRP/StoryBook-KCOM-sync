import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const GraphicStyled = styled.div`
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  
  
  .cls-2{ 
    stroke-width: 3px;
  } 
  .cls-3{
    stroke-miterlimit: 10;
    stroke-width: 2px;
  } 
  

  
    .filled{
      fill : var(--colorDarkRoast);
    }
    .outlined{
      stroke-width: 3px;
      stroke: var(--colorDarkRoast);
      fill: none;
      stroke-linecap:round;
      stroke-linejoin:round;
    }
    .stroked{
      fill:none;
      stroke-width: 1px;
      stroke: var(--colorDarkRoast);
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .empty{
      fill:none;
    }
    &.chevron-left{
      transform: scaleX(-100%);
    }
 
  .st0{fill:#292728;}
  .st1{fill:#E7E4DF;stroke:#3B2B2F;}
  .st2{fill:none;stroke:#3B2B2F;stroke-width:0.5;}
  .st3{fill:#C6C1C0;stroke:#3B2B2F;}
  .st4{fill:#BFB9B8;stroke:#3F3033;}
    
`;