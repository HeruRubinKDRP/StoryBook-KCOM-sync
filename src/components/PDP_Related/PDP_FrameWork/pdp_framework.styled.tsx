import styled from "styled-components";
import {ctaColorStyles} from "../../_commonStyles/common.styled";

export const Pdp_frameworkStyled = styled.div`
  ${ctaColorStyles};
  z-index: 100;
  &.desktop {
    .media-area{
      width: 50%;
    }
    
    
    .max-height {
      max-height: 80vh; 
      .section-front-center {
        padding: 14rem 20%;
      }
    }
  } 
  
  .connected{
    .duo{
      padding: 4rem 10%;
    }
    .sub-section{
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .product-identity-container{
    .ratings-overall-container{
      .ratings-data{
        font-size: 0.75rem !important;
        margin-top:5px !important;
      }
      margin-left: 0.5rem;
      .stars-container{
        top:3px !important;
      }
    }
    .flag-container{
      margin-right: 0.5rem;
    }
    h1{
      font-weight: 400;
      color: #473036;
      font-size: 2.5rem;
      line-height: 2.5rem;
      margin-top: 1rem;
    }
    p{
      margin-top: 0.5rem;
      font-size: 1.25rem;
      font-weight: 400;
      color : var(--colorDarkRoast);
    }
  }

  .add-ksk-container{
    background-color: white;
    border-radius: 0.5rem;
    padding-bottom: 1rem;

    .price-container-main{
      margin-top: 0.5rem;
      .base-price{
        color: var(--colorKSK);
      }
    }
    .pricing-message{
      margin-left: 0.5rem;
      .primary{
        font-weight: 600;
        margin-right: 0.25rem;
      }
      .secondary{

      }font-weight: 400;
    }

    .icon{
      display: flex;
      align-items: center;
    }

    .ksk-item{
      &:hover{
        .expander{
          border-color: var(--colorKSK) !important;
        }
        label{
          color: var(--colorKSK) !important;
        }
      }
    }
    .details-area{
      padding: 0.5rem;

    }
    .learn-more, .fine-print{
      display: flex;
    }

    .explanation-area{
      margin-top: 1rem;
      display: flex;
      align-items: center;
      img{
        width: 5rem;
      }
      .plus{
        font-size: 2rem;
        font-weight: 800;
        margin: 0.5rem;
      }
      .slots{
        display: flex;
        flex-wrap: wrap;
        .slot{
          border: 2px dashed;
          width: 3rem;
          height: 3rem;
          margin: 0.25rem;
          border-radius: 100vw;
        }
      }
    }
    .k-btn{
      margin-top: 1rem;
      margin-bottom: 0.25rem;
      label, .base-price {
        color: white;
      }
      &:hover{
        .price-container-main{
          .base-price{
            color : var(--colorDarkRoast) !important;
          }
        }
        label{
          color : var(--colorDarkRoast) !important;
        }
        .expander{
          background-color: white;
          border-color: var(--colorDarkRoast);
        }
      }
    }
  }

  .header-area{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    h2{
      padding: 1rem;
      user-select: none;

    }
    &.action{
      .header-action-area{
        background-color: white;
        border-radius: 100vw;
        padding: 0 1rem;
        display: flex;
        align-content: center;
        align-items: center;
      }
    }
  }
  
  .fine-print {
    margin-top: 0.25rem;
    display: flex;
    width: auto;
    overflow: visible;
    flex-wrap: wrap; 
    &.coupons {
      margin-top: 1rem;
    }

    p, label {
      white-space: nowrap;
    }
  }

  

  .k-carousel {
    width: 100%;
    background-color: transparent !important;
  }

  .free-shipping-info-container {
    .free-shipping-truck {
      height: 3rem;
      width: 3rem;
    }
  }
`;


export const PDP_container = styled.div`


`;