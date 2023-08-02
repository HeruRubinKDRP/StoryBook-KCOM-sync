import styled, {keyframes} from 'styled-components';
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";
import {ctaColorStyles, perksColorStyles} from "../../../../_commonStyles/common.styled";

// Define keyframes for SVG translation
export const svgAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Define keyframes for button fade in
export const buttonAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const PerksPromoStyled = styled.div`
  ${ctaColorStyles};
  ${perksColorStyles};

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--colorLightBeige);

  .perks-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: var(--colorDarkRoast);
    text-align: center;
    padding: 0 15%;
  }

  .explainer-container {
    animation: ${buttonAnimation} 0.5s ease-in-out forwards;
    opacity: 0;
    animation-delay: 5s;

    #Subscription {
      animation: ${slideInFromLeft} 0.5s ease-in-out forwards, ${buttonAnimation} 0.5s ease-in-out forwards;
    }

    #OneTime {
      animation: ${slideInFromRight} 0.5s ease-in-out forwards, ${buttonAnimation} 0.5s ease-in-out forwards;
    }
  }


`;


// Define SVG styled component
export const AnimatedSvgContainer = styled.div`
  height: 25%;

  .perks-logo-small {
    height: 100%;
    width: 100%;

    .filled {
      fill: ${colorNameToValue("perks-spiced-red")};
    }

    .spark-1, .spark-2, .spark-3, .spark-4 {
      opacity: 0;
      animation: ${buttonAnimation} 0.25s ease-in-out forwards;
    }

    .spark-1 {
      animation-delay: 0.9s;
    }

    .spark-2 {
      animation-delay: 1s;
    }

    .spark-3 {
      animation-delay: 1.1s;
    }

    .spark-4 {
      animation-delay: 1.2s;
    }

  }


  animation: ${svgAnimation} 0.5s ease-in-out forwards, ${buttonAnimation} 0.5s ease-in-out forwards;



`;

// Define button styled component
export const AnimatedButton = styled.div`
  
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  left: 2rem;
  @keyframes loadingAnimation {
    from {
      right: 100%;
    }
    to {
      right: 1%;
    }
  }

  .k-btn {
    opacity: 0;
    animation: ${buttonAnimation} 3s ease-in-out forwards;
    animation-delay: 2s;
    .expander {
      opacity: 1;
      top: 0;
      bottom: 0;
      left: 0;
      transition: none !important;
      display: flex;
      animation: loadingAnimation 6s ease-in-out forwards;
      animation-delay: 2s;
    }
  }
`;
