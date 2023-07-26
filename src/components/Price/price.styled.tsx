import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";

export const PriceStyled = styled.div`
  ${ctaColorStyles};
  
  display: flex;
  align-items: center;
  .final-price{
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 0.5rem;
    position: relative;
    padding-left: 0.5rem;
    &.discounted{
      color: var(--colorDiscount)
    }
    .currency{
      font-size: 0.75rem;
      font-weight: bold;
      position: absolute;
      top: 0.25rem;
      left: 0;
    }
  }
  .base-price{
    text-decoration: line-through;
    position: relative;
    font-size: 1rem;
    color: var(--colorText);
    margin-left: 0.5rem;
    padding-left: 0.5rem;

    .currency{
      font-size: 0.5rem;
      text-decoration: inherit;
      color: inherit;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

`;