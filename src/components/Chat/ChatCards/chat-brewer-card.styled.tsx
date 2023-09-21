import styled from "styled-components";

export const ChatBrewerCardStyled = styled.div`
  @media (min-width: 768px) {
      
  };
  
  @media (min-width: 1024px) {
     
  }
  width: var(--space-3xl);
  background-color: white; 
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
  img{
    color: transparent;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  h2{
    font-size: var(--step--4);
    text-align: center;
    padding: var(--space-tiny) var(--space-small);
    min-height: var(--step-3);
  }
  .k-btn{
    position: absolute;
    bottom: 5%;
    left: 5%;
    right: 5%;
    width: auto !important;
  }

`;