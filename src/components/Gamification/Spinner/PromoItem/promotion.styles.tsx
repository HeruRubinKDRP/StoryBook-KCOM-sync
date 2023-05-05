import styled from "styled-components";

export const PromotionStyled = styled.a`
  touch-action: none;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  text-decoration: none;
  flex-wrap: wrap;
  padding: 25% 10% 25% 25%;

  &.spinner-mode-traditional{
    
  } 
  
  &.spinner-mode-icons-first{
    .text-area{
      display: none !important;
    }
    img{
        height: 60% !important;
        width: 70% !important;
    }
  } 
  
  &.spinner-mode-vertical-text{
    
  };
  
  .text-area{
    p{
     font-size: 1.5vw
    }
    h2{
        font-size: 2vw;
    }
  };
  
  &.default {
    h2{
      font-size: 2vw;      
    } 
  }
  
  &.highlighted{
    h2{
        font-size: 3.5vw;
    }
  }
  
  &.big-image{
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    
    img{
      height: 35%;
      width: 35%;
      object-fit: contain;
      margin-right: 6%;
    }
    .text-area{
      display: flex;
      flex-direction: column;
      p{
        font-size: 1.5vw;
      }
    }
  }

`;