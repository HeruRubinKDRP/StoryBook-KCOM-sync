import styled from "styled-components";
import {ctaColorStyles} from "../../_commonStyles/common.styled";


export const ChatInputStyled = styled.div`
  position: fixed;
  bottom: var(--space-xs);
  right: 0;
  left: 0;
  height: 4.5rem;
  ${ctaColorStyles};
  z-index: 10000 !important;
  
  .controls{
    position: relative;
    height: 4.5rem;
    .send-btn{
      width: auto;
      height: 3rem !important;
      justify-content: center;
      background-color: rgb(71,48,54);
      color: white;
      border-radius: 100vw;
      position: absolute;
      z-index: 100;
      right: 3.5rem;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 1.5rem;
      border: 1px solid rgba(255,255,255,0.5);
    }
  }

.chat-input{
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 1px 39px rgb(0 0 0 / 20%);
  border: none;
  border-radius: 100vw;
  color: var(--colorText);
  font-family: inherit;
  font-size: 1.25rem;
  height: 4.5rem;
  outline: 0;
  padding-inline-end: 1rem;
  padding-inline-start: 52px;
  position: absolute;
  width: auto;
  white-space: normal;
  box-sizing: border-box;
  top: 0;
  right: 3rem;
  left: 3rem;
}
`;