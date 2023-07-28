import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export interface iLifeBarStyled {
    barHeight: string;
    barWidth: string;
    borderColor: string;
    barBackgroundColor: string;
    barColor: string;
    calculatedBarWidth: number;
}


export const LifeBarStyled = styled.div<iLifeBarStyled>`
  --barHeight: ${props => props.barHeight}px;
  --borderColor: ${props => props.borderColor};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorCTAPrimary: ${colorNameToValue("Bold-CTA")};

  border: 1px solid var(--borderColor);
  height: 8px;
  --barWidth: ${props => props.barWidth};
  width: var(--barWidth);
  border-radius: 100vw;
  overflow: visible;
  --barBackgroundColor: ${props => props.barBackgroundColor};
  background-color: var(--barBackgroundColor);
  
  &.KCOM{
    background-color: white;
    border: 1px solid var(--colorDarkRoast);
    .life-bar{
      background-color: var(--colorCTAPrimary);
    }
  }
  .life-bar {
    width: ${props => props.calculatedBarWidth}%;
    height: 100%;
    border-radius: 100vw;

    .bar-fill {
      --barColor: ${props => props.barColor};
      background-color: var(--barColor);
      width: 100%;
      height: 100%;
    };
    position: relative;

    .pointer-up {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 1rem;
      width: 1rem;
      .filled{
        fill : ${colorNameToValue("dark-roast")}
      }
    }
  }
}

.potential-amount-bar {

  width: var(--potentialBarWidth)%;
  right: -var(--potentialBarWidth)%;
  height: 100%;
  position: absolute;
  top: 0;
}

.potential-marker {
  background-color: white;
  width: 2%;
  height: 100%;
  position: absolute;
  top: 0;
  /*
  right: -var(--potentialBarWidth() + 2)%;
  */
  right: calc(var(--potentialBarWidth * -1+2));
}

.ticks-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 1.5vw;

  .tick {
    position: absolute;
    height: 100%;
    background-color: #D8D9D9;

    &.small {
      width: 0.25vw;
    }

    &.large {
      width: 0.75vw;
    }
  }
}
`;
