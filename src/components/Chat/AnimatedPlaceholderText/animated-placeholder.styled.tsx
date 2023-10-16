import styled from "styled-components";

export const AnimatedPlaceholderStyled = styled.span`

 animation: slideUpFadeIn 1s ease-out forwards;
 opacity: 0;
  font-size: var(--step--2);
  z-index: 100;
  position: absolute;
  top: 50%;
  pointer-events: none;

  @keyframes slideUpFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-150%);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%);
    }
  }


`