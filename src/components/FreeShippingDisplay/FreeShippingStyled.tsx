import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export interface iStyledFreeShippingDisplay {
    progressPercentage: number;
    widthX: number;
    heightY: number;
}

export const StyledFreeShippingDisplay = styled.div<iStyledFreeShippingDisplay>`

  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorMediumRoast: ${colorNameToValue("medium-roast")};
  --colorFaded: ${colorNameToValue("sepia")};
  @keyframes animateProgress {
    from {
      width: 0;
    }

    to {
      width: ${props => props.progressPercentage}%;
    }
  }

  .status-text{
    font-size: clamp(12px, ${props => props.widthX * 0.02}px, 32px);
    margin-bottom: clamp(4px, ${props => props.widthX * 0.005}px, 24px);
  }

  .progress-fill{
    background-color: var(--colorMediumRoast);
    height: 100%;
    animation: animateProgress 1.5s ease-in-out;
  }

  .progress-container{
    border: 1px solid var(--colorMediumRoast);
    border-radius: 2vw;
    overflow: hidden;
    height: ${props => props.heightY * 0.2}px;
    width: 100%;
    background-color: var(--colorFaded);
  }


`;
