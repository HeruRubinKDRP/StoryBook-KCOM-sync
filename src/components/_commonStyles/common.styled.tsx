import {css, keyframes} from 'styled-components';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const ctaColorStyles = css` 
  --colorCTAPrimary: ${colorNameToValue("Bold-CTA")};
  --colorText: ${colorNameToValue("text")};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorLightCTA: ${colorNameToValue("light-roast")};
  --colorBoldCTA: ${colorNameToValue("Bold-CTA")};
  --colorLightCTA: ${colorNameToValue("faintWarm")};
`;

export const attentionCTA = css` 
  background: linear-gradient(-45deg,hsl(47 95% 80% / 1),hsl(47 95% 59% / 1),hsl(47 95% 80% / 1),hsl(47 95% 80% / 1));
  background-size: 200% 265%;  
 
`;

export const gradientSlide = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }

`;



export const riseUpAnim = keyframes`
  from {
    top: 0px;
  }
  to {
    top: 200px;
  } 
`

export const fadeOutAnim = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const pushDownAnim = keyframes` 
  0% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.56);
  }
  100% {
    box-shadow: inset 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  } 
`