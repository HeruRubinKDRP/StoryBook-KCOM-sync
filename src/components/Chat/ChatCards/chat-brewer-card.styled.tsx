import styled from "styled-components";

export const ChatBrewerCardStyled = styled.div`
    @media (min-width: 768px) {
      width: 50%;  
    };
  
  @media (min-width: 1024px) {
    width: 33%;
  }
  
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
  img{
    color: transparent;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .k-btn{
    position: absolute;
    bottom: 0;
    left: 5%;
    right: 5%;
  }

`;