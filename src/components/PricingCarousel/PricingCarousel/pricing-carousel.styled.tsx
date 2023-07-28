import styled from "styled-components";

export const PricingCarouselStyled = styled.div`
  @keyframes growHighlight {
    0%{transform: scale(1)}
    100%{transform: scale(1.05)}
  }
  
  .pricing-item-container {
    padding: 1rem;
    box-shadow: 3px 2px 7px 0 rgb(0 0 0 / 32%);
    display: inline-flex;
    margin: 1rem;
    cursor: pointer;
    position: relative;
    height: auto;
    &.medium-container{
      .title{
        font-size: 1rem;
        line-height: 1.25rem;
        margin-bottom: 0.5rem;
      }
    }

    .price-container-main{
      margin-top: auto;
    }
    .flag-container{
      position: absolute;
      &.banner-protrude {
        left: -1rem;
        top: 1rem;
      }
      &.alternating-sharp-round{
        top: 0;
        left: 0;
      }
    }
    h1,  a, p, h2{
      user-select: none;
    }
    &:active{
      box-shadow: inset 2px 1px 15px 0px rgba(0,0,0,0.25);
      animation-direction: reverse !important;
      animation-duration: 0.25s !important;
    }
    &:hover{
      animation: growHighlight 1s forwards;
      .title, p{
        text-decoration: underline;
      }
    }
    &.rounded{
      border-radius: 1rem;
      .product-image{
        border-radius: 0.75rem;
      }
    }

    &.side-by-side {
      flex-direction: row;
      .title {
        font-size: 1.5rem;
      }
      .price-container-main {
        .final-price{
          font-size: 2rem;
        }
      }

      .product-image {
        min-width: 15rem;
      }

      .product-info-container {
        margin-left: 1rem;
      }
    }

    &.stacked {
      flex-direction: column;
    }

    .product-info-container {
      display: inline-flex;
      flex-direction: column;
      align-content: flex-start;
      align-items: flex-start;
    }

    .title {
      font-size: 1rem;
    }

    .product-image {
      min-height: 12rem;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
  }

`;