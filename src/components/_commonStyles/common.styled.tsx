import {css, keyframes} from 'styled-components';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const colorStyles = css`
  --colorCTAPrimary: ${colorNameToValue("Bold-CTA")};
  --colorText: ${colorNameToValue("text")};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorLightCTA: ${colorNameToValue("light-roast")};
  --colorBoldCTA: ${colorNameToValue("Bold-CTA")};
`;

export const riseUpAnim = keyframes`
  from {
    top: 0px;
  }
  to {
    top: 200px;
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