import {css, keyframes} from 'styled-components';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {fadeInAnim} from "./common.keyframes";

const flexItem = css`
    display: flex;
`;

export const ctaColorStyles = css`
  --colorBoldCTA: ${colorNameToValue("Bold-CTA")};
  --colorCTAPrimary: ${colorNameToValue("Bold-CTA")};  
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorDiscount : ${colorNameToValue("discount")};
  --colorKSK : ${colorNameToValue("KSK")};
  --colorLatte : ${colorNameToValue("latte")};
  --colorLightCTA: ${colorNameToValue("faintWarm")};
  --colorLightRoast: ${colorNameToValue("light-roast")};  
  
  --colorMediumGrey : ${colorNameToValue("medium-grey")};
  --colorMediumRoast : ${colorNameToValue("medium-roast")};
  --colorOKStatus : ${colorNameToValue("OK-Status")};
  --colorSecondaryGold : ${colorNameToValue("secondaryGold")}; 
   
  --colorSepia : ${colorNameToValue("sepia")}; 
 
  --colorLatte70 : ${colorNameToValue("latte70")};
  --colorLatteMed : ${colorNameToValue("latteMed")};
  --colorSepia70 : ${colorNameToValue("sepia70")};
  --colorText: ${colorNameToValue("text")};
`;

export const perksColorStyles = css`
--colorSpicedRed : ${colorNameToValue("perks-spiced-red")};
--colorLightBeige : ${colorNameToValue("perks-light-beige")};
`;

export const absolutePositionStretch = css`
  position: absolute;
  inset: 0;
`;


export const flexRow = css`
  ${flexItem};
  flex-direction: row;
`

export const flexColumn = css`
  ${flexItem};
  flex-direction: column;
`

export const flexCentered = css`
  ${flexItem};
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