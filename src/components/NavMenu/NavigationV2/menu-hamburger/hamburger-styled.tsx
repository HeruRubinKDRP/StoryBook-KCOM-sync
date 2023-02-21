import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";


export const MenuButtonStyled = styled.div`
  height: clamp(4rem,13vw,10rem) !important;
  width: clamp(4rem,13vw,10rem) !important;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top, .middle, .bottom{
    transition: transform 0.5s ease-in, opacity 0.25s ease-in;
    height: 0.75vw;
    width: 5vw;
    background-color: ${colorNameToValue("dark-roast")};
  }
  
  &.is-opened{
    .top{
      transform-origin: center;
      transform: translate(0, 200%) rotate(45deg)
    }
    
    .middle{
      opacity: 0;
    }
    
    .bottom{
      transform-origin: center;
      transform: translate(0, -200%) rotate(-45deg)
    }
    
  }
  
  .h-line{
    margin-bottom: 0.75vw;
  }
`;