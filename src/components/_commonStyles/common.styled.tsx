import {css, keyframes} from 'styled-components';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {fadeInAnim} from "./common.keyframes";

export const ctaColorStyles = css` 
  --colorCTAPrimary: ${colorNameToValue("Bold-CTA")};
  --colorText: ${colorNameToValue("text")};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorLightCTA: ${colorNameToValue("light-roast")};
  --colorBoldCTA: ${colorNameToValue("Bold-CTA")};
  --colorLightCTA: ${colorNameToValue("faintWarm")};
`;

export const absolutePositionStretch = css`
  position: absolute;
  inset: 0;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`

export const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const attentionCTA = css` 
  background: linear-gradient(-45deg,hsl(47 95% 80% / 1),hsl(47 95% 59% / 1),hsl(47 95% 80% / 1),hsl(47 95% 80% / 1));
  background-size: 200% 265%;   
`;



export const AnimFadeIn = css`
    animation: ${fadeInAnim} 1s ease-in-out forwards normal 
`;


export const pushDownAnim = keyframes` 
  0% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.56);
  }
  100% {
    box-shadow: inset 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  } 
`