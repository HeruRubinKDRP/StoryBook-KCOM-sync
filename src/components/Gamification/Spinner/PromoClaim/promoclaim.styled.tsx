import styled from "styled-components";

export const PromoClaimStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1vw 2vw 1vw;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);
  @keyframes scaleUp {
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
  }
  @keyframes fadeIn {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
  }
  
  .promo-claim-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      animation: scaleUp 0.5s ease-in-out;
      animation-fill-mode: forwards;
      margin-top: -15%;
      object-fit: contain;
    }
    .claim-btn{
      animation: scaleUp 0.5s ease-in-out, fadeIn 0.25s ease-in-out;
      animation-fill-mode: forwards;
      animation-delay: 0.75s;
      opacity: 0;
    }
    .decline{
      font-size: calc(0.25vw + 8px);
      animation: fadeIn 0.25s ease-in;
      animation-fill-mode: forwards;
      animation-delay: 1s;
      opacity: 0;
      margin-top: calc(0.5vw + 6px);
    }
    .title{
      text-align: center;
      font-size: calc(0.5vw + 18px);
      line-height:  calc(0.5vw + 18px);
      border: none;
      margin-bottom: 1vw;
    }
    .fine-print{ 
      font-size: calc(0.5vw + 12px); 
      padding: 0 10% 5%;
      justify-content: center;
      animation: fadeIn 0.25s ease-in;
      animation-fill-mode: forwards;
      animation-delay: 1s;
      opacity: 0;
    }
  }

  

`;