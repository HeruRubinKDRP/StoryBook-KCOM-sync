import styled, {CSSObject, Interpolation} from "styled-components";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {containerQueryBasedVariables} from "../../CLP/reusable-css-variables-CLP";

export interface iBrewerQuickShopStyled {
    overallWidth: number;
    calculatedOverallWidthVar: Interpolation<any>;
    mainFlagColor: colorByNameType;

}


export const BrewerQuickShopStyled = styled.div<iBrewerQuickShopStyled>`
  *{
    box-sizing: border-box;
  }
  
  ${props => props.calculatedOverallWidthVar}
  ${containerQueryBasedVariables};
  --mainFlagColor : ${props => colorNameToValue(props.mainFlagColor)};
  //--buttonHuge: calc(var(--overallWidth) * 0.06 + 16px);
  //--buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  //--buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  //--buttonSmall: calc(var(--overallWidth) * 0.025 + 8px);
  //
  //--FontSizeLarge: calc(var(--overallWidth) * 0.02 + 14px);
  //--FontSizeMedium: calc(var(--overallWidth) * 0.0075 + 12px);
  //--FontSizeSmall: calc(var(--overallWidth) * 0.006 + 10px);
  //
  //--spacingLarge: calc(var(--overallWidth) * 0.05 + 12px);
  //--spacingMedium: calc(var(--overallWidth) * 0.025 + 5px);
  //--spacingSmall: calc(var(--overallWidth) * 0.015 + 4px);
  //--spacingTiny: calc(var(--overallWidth) * 0.003 + 2px);
  .coupon-message{
    .learn-more{
      float:none !important;
      margin-left: var(--spacingSmall) ;
    }
  }
  .out-of-stock-area{
    padding: 1rem;
    border-radius: 1rem;
    font-size: 2rem;
    margin-top: 0.5rem;
  }
  
  .selected-color{ 
    display: flex;
    margin-top: 1rem;
    *{
      font-size: 1.25rem;
    }
    .key{
      font-weight: 600;
      margin-right: 0.5rem;
    }    
  }

  border-radius: var(--spacingTiny);
  overflow: hidden;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);
  position: relative;
  display: flex;
  align-items: center;

  box-shadow: 0 var(--spacingTiny) var(--spacingTiny) 0 rgba(0, 0, 0, 0.25);
  max-width: 90vw;

  height: auto;
  width: 100%;
/*  max-height: 90vh;*/
  margin: 0 auto;

  .item-only-option {
    /*
    border: 0;
    */
  }

  .add-to-cart-container {
    .expander {
      border-radius: 0 100vw 100vw 0 !important;
    }
  }

  .expander {
    border-radius: 100vw !important;
  }

  &.medium-dimensions {
    max-width: 85vw;
    .ksk-container{
      .visual-container{
        .fill-pod {
          width: 100px;
        }
      }
    }
  }


  &.small-dimensions, &.mobile-dimensions {
    height: 100%;

    .product-info-container {
      padding: 0 var(--spacingMedium) var(--spacingMedium) var(--spacingMedium);
      width: 100%!important;
      max-width: calc(var(--overallWidth) * 0.95);
      justify-content: flex-start;
      width: 100%!important;
    }

    .k-carousel {
      max-width: calc(var(--overallWidth) * 0.95);

      .nav-container {
        .right, .left {
          width: var(--spacingHuge) !important;
          height: var(--spacingHuge) !important;
        }
      }
    }
  }

  &.small-dimensions {
    flex-direction: column;

    .k-carousel {
      width: 100%;
      height: 25vh !important;

      .nav-dots-container {
        display: none;
      }

      .slides-container {
        position: absolute;
        inset: 0;
      }
    }
  }

  &.mobile-dimensions {
    flex-direction: column;
    max-width: none;
    max-height: none;

    .k-carousel {
      width: 100%;
      height: 25vh !important;

      .nav-dots-container {
        display: none;
      }

      .slides-container {
        padding: 0 !important;
        position: absolute;
        inset: 0;
      }

      .nav-container {
        .right, .left {
          width: var(--spacingHuge);
          height: var(--spacingHuge);
        }
      }

      .drag-container {
        max-height: 40vh;
      }

      .nav-dots-container {
        display: none;
      }
    }
  }

  .close-btn {
    position: absolute;
    right: var(--spacingMedium);
    top: var(--spacingTiny);
    padding: 0 !important;
    height: var(--spacingHuge) !important;
    width: var(--spacingHuge) !important;

    .close {
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


  &.medium-dimensions, &.extra-large-dimensions, &.large-dimensions {
    .learn-more-container {
      background-color: #fff;
      inset: 2% 52% 2% 1%;
    }
    .ksk-learn-more{
      width: 50%;
    }
  }

  .learn-more-container {
    position: absolute;
    inset: 0;
    background-color: white;
    overflow-y: auto;
    z-index: 10000;
    border-radius: inherit;
    padding: var(--spacingMedium) var(--spacingMedium);
    box-shadow: 0 0 var(--spacingTiny) 0 rgba(0, 0, 0, 0.25);


    .learn-more-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;

      .messaging-area {
        flex-grow: 1;
        flex-basis: 80%;
        height: 80%;
        overflow-y: auto;
        margin-bottom: var(--spacingSmall);
      }

      .actions {
        flex-grow: 0;
        flex-basis: auto;
      }


      h3 {
        margin-bottom: var(--spacingMedium);
        position: sticky;
        top: 0;
        background-color: white;
        padding: 0 var(--spacingMedium) var(--spacingTiny) 0;
        border-bottom: 1px solid var(--colorDarkRoast);

      }

      .actions {

      }
    }


    p {
      font-size: var(--FontSizeSmall);
      /*
      line-height: var(--FontSizeLarge);
      */
      padding-right: var(--spacingMedium);
    }
  }

  .color-options-container {
    margin: var(--spacingSmall) 0;
  }

  .product-identity-container {
    label {
      font-size: var(--FontSizeMedium);
    }

    .flag-ratings-area {
      max-height: var(--FontSizeLarge);
      height: var(--FontSizeLarge);
      display: grid;
      grid-template-rows: var(--FontSizeLarge);
      grid-template-columns:  auto auto 1fr;
      align-items: center;

      .flag-container {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
      }

      .brand-label {
        grid-column: 2 / 2;
        grid-row: 1 / 1;
      }

      .ratings-overall-container {
        grid-column: 3 / 3;
        grid-row: 1 / 1;
        max-height: var(--FontSizeSmall);
        height: auto;
        width: auto;
        margin-right: 30%;
      }

    }

    h1 {
      font-size: var(--FontSizeLarge);
      line-height: var(--FontSizeLarge);
      font-weight: 400;
      color: #473036;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    .name-area {
      label {
        font-size: var(--FontSizeSmall);
      }
    }
  }

  .purchase-options {
    margin-top: 0;
    width: 100%;

  }

  .flag-container {
    border-radius: var(--spacingTiny) 0 var(--spacingTiny) 0;
    background-color: var(--mainFlagColor);
    padding: var(--spacingTiny) var(--spacingSmall);

    &.KSK {
      background-color: var(--colorKSK);
      color: white;
    }

    &.OK-Status {
      background-color: var(--colorOK);
      color: white;
    }

    &.discount {
      color: white;
      background-color: var(--colorDiscount);
    }
  }

  .k-carousel {
    width: 70%;
    background-color: transparent;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    max-width: calc(var(--overallWidth) * 0.5);
    height: 100% !important;

    .slides-container {
      width: 100%;
      height: 100%;
    }

    .image-item-container {
      padding: var(--spacingSmall);
    }

    .nav-dots-container {
      transform: translateX(-50%);
      gap: var(--spacingTiny) !important;
      position: absolute;
      bottom: 0;
      left: 50%;
      background: none;
      backdrop-filter: none;
      border: 0;

      .image-item-container {
        padding: 0;
      }

      .nav-item {
        min-width: var(--spacingLarge) !important;
        min-height: var(--spacingLarge) !important;
        height: var(--spacingLarge);
        width: var(--spacingLarge);
        border: 1px solid var(--colorMedGrey);
        margin: 0;
      }
    }

    .nav-container {
      .right, .left {
        width: var(--spacingLarge) !important;
        height: var(--spacingLarge) !important;
        margin: 0;
        padding: var(--spacingSmall) !important;
        background-image: none !important;
        box-shadow: 0px 0px var(--spacingTiny) 0 rgb(0 0 0 / 30%);
        transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
        border-radius: 100vw !important;

        &:hover {
          width: calc(var(--spacingLarge) * 1.25) !important;
          height: calc(var(--spacingLarge) * 1.25) !important;
        }

        .icon {
          width: 100% !important;
          height: 100% !important;
          display: flex;
          align-items: center;
        }
      }

      .right {
        right: var(--spacingMedium) !important;
      }

      .left {
        left: var(--spacingMedium) !important;
      }
    }

  }

  .name-area {
    p {
      font-size: var(--FontSizeSmall);
    }
  }


  .product-info-container {
    padding: var(--spacingMedium);
    box-sizing: content-box;
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    width: calc(var(--overallWidth) * 0.5);
    max-width: calc(var(--overallWidth) * 0.5);
    width: calc(var(--overallWidth) * 0.5);
    justify-content: center;
  }

  .label-container {
    .key, .value {
      font-size: var(--FontSizeSmall);
    }
  }

  .color-options {
    .color-dot {
      height: var(--spacingLarge) !important;
      width: var(--spacingLarge) !important;
      margin-right: var(--spacingSmall) !important;
    }
  }

  .free-shipping-container {
    display: flex;
    flex-direction: row;
    height: var(--spacingLarge);
    font-size: var(--FontSizeSmall);
    padding: var(--spacingMedium) 0 0 0;
    gap: var(--spacingTiny);
    align-items: center;
    width: 100%;
    justify-content: center;

    .icon {
      height: var(--spacingLarge);
      width: var(--spacingLarge);

    }
  }

  .ksk-info-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .kit-title {
      font-size: var(--FontSizeMedium);
      font-weight: bolder;
      padding-bottom: 10px;
      background-color: #EADECF;
    }
.how-to-title{
  
  font-size: var(--FontSizeSmall);
  font-weight: bolder;
  padding-top: 20px;
}
    .icon-checkmark, .checkmark-circled{
      width: 20px;
      .filled{
        fill:var(--colorKSK);
      }
    }

    .content-container {
      display: flex;
      background-color: #FDF6ED;
      padding: 1rem 0;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
    }
    .how-to-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
      justify-content: space-evenly;
    }
    h2 {
      color: #AA8066
    }

    .ksk-title-img {
      max-width: 360px;
      padding: 5px 0px;
    }
  }
`;