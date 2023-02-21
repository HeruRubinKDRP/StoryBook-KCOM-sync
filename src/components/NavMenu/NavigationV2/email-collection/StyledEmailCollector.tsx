import styled, {css} from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export const StyledEmailCollector = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: clamp(3rem, ${props => props.theme.widthX * 0.1}px, 3rem) clamp(1rem, ${props => props.theme.widthX * 0.05}px, 2rem) 15vh clamp(1rem, ${props => props.theme.widthX * 0.05}px, 2rem);
  .icon {
    width: 1.5vw;
    height: 1.5vw;
  }

  .inputs-area {
    display: flex;
  }

  input {
    flex-grow: 1;
    border-radius: 0.5vw;
    border: 0;
    outline: 1px solid black;
    outline-offset: -1px;
  }

  .k-btn {
    margin-left: -6vw;
    width: auto;
    flex-grow: 0;
  }

  .explanation-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: clamp(0.5rem, ${props => props.theme.widthX * 0.035}px, 2rem) ;
    padding: clamp(0.25rem, ${props => props.theme.widthX * 0.015}px, 0.75rem) ${props => props.theme.widthX * 0.1}px;
    font-weight: 600;
    .explanation {
      text-align: center;
    }
  }
  

  .attention {
    color: ${colorNameToValue("discount")};
    font-weight: 600;
  }


  /* Define the animation */
  @keyframes hover-animation {
    from {
      box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
    }
    to {
      box-shadow: inset 0 0 0.25vw 0.25vw rgba(0, 0, 0, 0.2);
    }
  }

  /* Apply the animation to the text input when it is hovered over */

  input[type="email"]:hover {
    animation: hover-animation 0.5s ease-in-out forwards;
  }

  @keyframes active-animation {
    0% {
      background-color: rgba(255, 255, 255, 1);
    }

    100% {
      background-color: ${colorNameToValue("faintWarm")}
    }
  }

  /* Apply the animation to the text input when it is active */

  input[type="email"]:active {
    animation: active-animation 0.2s ease-in-out forwards;
    background-color: ${colorNameToValue("faintWarm")}
  }

  /* Define the animation */
  @keyframes focus-animation {
    from {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    to {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
  }

  /* Apply the animation to the text input when it is focused */

  input[type="email"]:focus {
    animation: focus-animation 1s ease-in-out forwards;
    background-color: ${colorNameToValue("faintWarm")}
  }

  /* Error and success messages */

  .error-notification {
    .highlighted {
      fill: white;
    }

    .filled {
      fill: ${colorNameToValue("discount")}
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .icon-envelope {
    width: clamp(1.75rem, ${props => props.theme.widthX * 0.2}px, 2.5rem);
    height: clamp(1.75rem, ${props => props.theme.widthX * 0.2}px, 2.5rem);
  }


  input, k-btn {
    font-family: "Mark OT", sans-serif;
    padding: clamp(0.25rem, ${props => props.theme.widthX * 0.015}px, 0.5rem) clamp(0.5rem, ${props => props.theme.widthX * 0.035}px, 1rem);
  }

  input, .k-btn label, .message-area p, .explanation {
    font-size: clamp(1rem, ${props => props.theme.widthX * 0.025}px, 2rem);
  }

  .message-area {
    overflow: hidden;

    .icon {
      width: 4.5vw;
      height: 4.5vw;
      margin-right: clamp(0.5rem, ${props => props.theme.widthX * 0.012}px, 1.25rem);
    }
  }

  /* Apply the animation to the text element */
  .success{
    .icon {
      outline: 1px solid ${colorNameToValue("forest-green")};
      border-radius: 100vw;
      width: clamp(2rem, ${props => props.theme.widthX * 0.2}px, 4rem);
      height: clamp(2rem, ${props => props.theme.widthX * 0.2}px, 4rem);
      margin-right: clamp(0.5rem, ${props => props.theme.widthX * 0.012}px, 1.25rem);
      padding: clamp(0.5rem, ${props => props.theme.widthX * 0.012}px, 1.25rem);
      .filled{
        fill : ${colorNameToValue("forest-green")}
      }
    }
    font-size: clamp(1rem, ${props => props.theme.widthX * 0.05}px, 2rem);
    justify-content: center;
  }

  .error, .success {
    animation: slideDown 1s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: clamp(0.5rem, ${props => props.theme.widthX * 0.012}px, 1.25rem);
  }

`