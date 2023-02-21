import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const RedemptionStyled = styled.div`
  width: ${props => props.theme.widthX}px;
  display: flex;
  flex-direction: column;

  .product-image {
    img{
      width: 100%;
    }
  }

  .product-id-area{
    .brand{
      font-size: ${props=> props.theme.widthX * 0.05}px;
    }
    .product-name{
      font-weight: 600;
      font-size: ${props=> props.theme.widthX * 0.075}px;
    }
    .selected-variant-name{
      font-size: ${props=> props.theme.widthX * 0.05}px;
    }
  }

  //variant selection

  .k-toggle-container{
    margin-top: ${props => props.theme.widthX * 0.025}px;
    margin-bottom: ${props => props.theme.widthX * 0.025}px;
    .toggle-item{
      padding: ${props => props.theme.widthX * 0.05}px;
      font-size : ${props => props.theme.widthX * 0.05}px;
    }
  }

  .reward-cost{
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: ${props => props.theme.widthX * 0.065}px;
  }

  //Toggle
.k-toggle-container{

  button.toggle-item{
    padding: ${props => props.theme.widthX * 0.065}px;
    border-radius: ${props => props.theme.widthX * 0.025}px;
    &.secondary{
      border-color: ${colorNameToValue("sepia")} !important;
    }

    &.toggle-selected{
      background-color: ${colorNameToValue("light-roast")} !important;
      border-color: ${colorNameToValue("dark-roast")}; !important;
    }
  }
}



`
