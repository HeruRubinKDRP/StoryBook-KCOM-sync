import styled from "styled-components";

export const CardBackStyled = styled.div`
  height: 100% !important;
  background-color: #fff;
  
  .product-title-area{
    display: flex;
    flex-direction: row;
  }
  
  .info-container{ 
    display: flex;
    flex-direction: column;
    .product-silo{
      width: auto;
      object-fit: contain;
      height: 100px;
    }
    h1{
      font-size: calc(0.5vw + 8px);
      line-height: calc(0.5vw + 8px);
      text-align: left;
      font-weight: 400;
      margin-bottom: calc(0.5vw + 2px);
      margin-top: calc(0.5vw + 2px);
    }
  }
  .features-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 5%;
    column-gap: 2.5%;
    margin-top: 5%;
    .features-carousel-container{
      width: 100%;
      height: 100%;
    }
    li {
      display: flex;
      flex-direction: column;
      flex-basis: 30%;
      align-items: center;
      text-align: center;
      margin-bottom: 5%;
      background-color: white;
      border-radius: 1%;
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