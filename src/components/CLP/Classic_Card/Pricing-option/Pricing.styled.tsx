import { colorNameToValue } from "components/_utilities/color-name-to-value/colorNameToValue";
import styled from "styled-components";

export const PricingStyled = styled.div`

  &.classic {
    /*
    background-color: aqua;
    */
  
    .ADPrice {
      display: flex;
      padding: 2% 0;
      .price {
        color: #d1150c;
        font-size: 20px;
        line-height: 18px;
        font-weight: 600;
      }
      .currency{
        color: #d1150c;
        font-size: 0.75rem;
        line-height: 1;
        font-weight: 600;
      }
      .copydeal {
        color: #68676b;
        font-size: 11px;
        line-height: 17px;
        margin: 0 2%;
        font-weight: 400;
      }
      .ADlogo {
        width: 127px;
        height: 14px;
        object-fit: contain;
        margin: 0 2% 0 0;
      }
    }

    .RegularPrice{
      display: flex;
      padding: 2% 0;
      
      .reg-price{
        color: #333333;
        font-size: 16px;
        line-height: 18px;
      }
      .reg-currency{
        color: #333333;
        font-size: 0.75rem;
        line-height: 1;
      }
    }
  }

  &.member-pricing-simple {
    /*  background-color: blue;*/
    /*  .main-pricing{
    color: white;
      }*/
  }

  &.member-price-no-icon {
    background-color: blueviolet;
  }
;
`