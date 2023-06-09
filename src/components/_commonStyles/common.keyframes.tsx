import {keyframes} from "styled-components";

export const fadeOutAnim = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const fadeInAnim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const gradientSlide = keyframes`
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }

`;