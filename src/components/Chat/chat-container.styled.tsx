import styled from "styled-components";

export const ChatContainerStyled = styled.div`
  height: 100%;
  position: relative;
  *{
    box-sizing: border-box;
  } 
  .k-btn{
    font-size: var(--step--4) !important;
    padding: var(--space-2xs-xs) var(--space-xs-s) !important;
  }
  
  
  .bg-filler{
    background: linear-gradient(180deg,rgb(255,255,255) 0%,rgba(242,236,206,0.44) 100%);
    position: fixed;
    z-index: 0;
    inset: 0;
    pointer-events: none;
  }
  
  .typing-effect{ 
    min-height: 1rem; 
    span{
      margin-bottom: 0.1rem;
    }
  }
 
  .conversation-container {
    height: auto;
    padding: 6rem 2rem 14rem 2rem;
    position: relative;
    z-index: 100;
    min-height: 11vh;
    .conversation{
      margin-top: 2rem;
    }
  }


`;