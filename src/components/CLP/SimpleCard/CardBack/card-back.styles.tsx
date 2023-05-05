import styled from "styled-components";

export const CardBackStyled = styled.div`
  height: 100% !important;
  
  
  
  
  .info-container{ 
    display: flex;
    flex-direction: column;
    .product-silo{
      width: 100%;
      object-fit: contain;
      height: 160px;
    }
    h1{
      font-size: calc(1vw + 8px);
      line-height: calc(1vw + 8px);
      text-align: left;
      font-weight: 400;
      margin-bottom: calc(0.5vw + 2px);
      margin-top: calc(0.5vw + 2px);
    }
  }
  .features-list-container {
    flex-basis: 40%;
    li {
      display: flex;
      flex-direction: row;

      img {
        height: 2rem;
        width: 2rem;
        margin-right: 0.5rem;
      }
      span{
        font-size: 0.8rem;
      }
    }
  }

`;