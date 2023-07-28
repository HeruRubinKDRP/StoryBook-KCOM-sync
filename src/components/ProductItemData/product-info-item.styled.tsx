import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const ProductIfoItemStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorText: ${colorNameToValue("text")};
  .data-text{
    display: flex;
    flex-direction: column;
  }

  .pod-lid{
    max-height: 8rem;
  }
  h2{
    font-size: 1rem;
    color: var(--colorDarkRoast);
  }
  p{
    font-size: 0.75rem;
    color: var(--colorText);
  }

  .quant-variant{
    display: flex;
    .variant{
      padding: 0;
    }
  }

  .price-rating-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      margin-left: 0.5vw;
      width: 60% !important;
    }
    .price-area{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

`;