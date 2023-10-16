import styled from "styled-components";
import {ctaColorStyles} from "../../_commonStyles/common.styled";


export const ChatInputStyled = styled.div`
  --textOuterHeight: calc(var(--step-2) * 1.25);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: auto;
  ${ctaColorStyles};
  z-index: 10000 !important;
  background-color: rgba(255,255,255,0.5);
  backdrop-filter: blur(var(--step--6));
  border-top: 1px solid var(--colorLatte);
  .controls{
    position: relative;
    height: var(--textOuterHeight); 
    
    margin: var(--step--4) 5% var(--step--4) 5%;
    .send-btn{
      width: auto;
      height: var(--step--4) !important;
      justify-content: center;
      background-color: rgb(71,48,54);
      color: white;
      border-radius: 100vw;
      position: absolute;
      z-index: 100;
      right: var(--space-3xs);
      top: 50%;
      transform: translateY(-50%);
      padding: 0 1.5rem;
      border: 1px solid rgba(255,255,255,0.5);
    }
  }
  
  .animated-placeholder {
    left : var(--space-xs)
  }

.chat-input{
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 1px 39px rgb(0 0 0 / 20%);
  border: none;
  border-radius: 100vw;
  color: var(--colorText);
  font-family: inherit;
  font-size: var(--step--2);
  height: var(--textOuterHeight);
  outline: 0;
  padding-inline-end: 20%;
  padding-inline-start: 52px;
  position: absolute;
  width: auto;
  white-space: normal;
  box-sizing: border-box;
  top: 0;
  right: 0;
  left: 0;
}
`;