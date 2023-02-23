import styled, {CSSObject, Interpolation} from "styled-components";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export interface iBrewerQuickShopStyled {
    overallWidth: number;
    calculatedOverallWidthVar : Interpolation<any>
}


export const BrewerQuickShopStyled = styled.div<iBrewerQuickShopStyled>`
 
  ${props => props.calculatedOverallWidthVar}
  --buttonHuge: calc(var(--overallWidth) * 0.06 + 16px);
  --buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  --buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  --buttonSmalll: calc(var(--overallWidth) * 0.025 + 12px);

  --FontSizeLarge: calc(var(--overallWidth) * 0.02 + 12px);
  --FontSizeMedium: calc(var(--overallWidth) * 0.0075 + 10px);
  --FontSizeSmall: calc(var(--overallWidth) * 0.006 + 8px);

  --spacingLarge: calc(var(--overallWidth) * 0.05 + 12px);
  --spacingMedium: calc(var(--overallWidth) * 0.025 + 5px);
  --spacingSmall: calc(var(--overallWidth) * 0.015 + 4px);
  --spacingTiny: calc(var(--overallWidth) * 0.003 + 2px); 

  border-radius: var(--spacingTiny);
  overflow: hidden;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);
  position: relative;
  display: flex;

  box-shadow: 0 var(--spacingTiny) var(--spacingTiny) 0 rgba(0, 0, 0, 0.25);
  max-width: 90vw;
  
  height: 100%;
  width: 100%;
  max-height: 90vh;
  margin: 0 auto; 
  
   
  
  .k-btn{
    padding: calc(var(--spacingLarge)*1.2) calc(var(--spacingLarge)*1.2) !important;
  }
  
  .item-only-option{
    border:0;
  } 
  
  
  
  
  .drop-down-container{
    border: 1px solid var(--colorDarkRoast);
  }

  .expander {
    border-radius: 100vw !important;
  }

  &.medium-dimensions {
    max-width: 85vw;
  }
  
  
  &.small-dimensions, &.mobile-dimensions {
    .product-info-container {
      padding: 0 var(--spacingMedium) var(--spacingMedium) var(--spacingMedium);
      max-width: calc(var(--overallWidth) * 0.95);
    }
    
    .k-carousel{
      max-width: calc(var(--overallWidth) * 0.95);
      .nav-container {
        .right, .left {
          width: var(--buttonHuge) !important;
          height: var(--buttonHuge) !important;
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
      margin: 5vh 0 5vh 0 !important;
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
          width: var(--buttonHuge);
          height: var(--buttonHuge);
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
    right: var(--spacingSmall);
    top: var(--spacingTiny);
    padding: var(--spacingTiny) 0 !important; 
    height: var(--buttonMedium) !important;
    width: var(--buttonMedium) !important;
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
    .learn-more-container{
      background-color: #0d8296;
      inset: 0 50% 0 0;
    }  
  }

  .learn-more-container {
    position: absolute;
    inset: 0;
    background-color: white;
    overflow-y: auto;
    z-index: 10000;
    padding: var(--spacingLarge);

    .learn-more-content {
      position: relative;
      height: 100%;

      h3 {
        margin-bottom: var(--spacingMedium);
      }

      .actions {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    p {
      font-size: var(--FontSizeMedium);
      line-height: var(--FontSizeLarge);
    }
  }

  .color-options-container {
    margin: var(--spacingTiny) 0;
  }

  .product-identity-container {
    label {
      font-size: var(--FontSizeMedium);
    }
    
    .flag-ratings-area{
      max-height: var(--FontSizeLarge);
      height: var(--FontSizeLarge);
      display: grid;
      grid-template-rows: var(--FontSizeLarge);
      grid-template-columns:  auto auto 1fr;
      align-items: center;
      .flag-container{
        grid-column: 1 / 1;
        grid-row: 1 / 1;        
      }
      .brand-label{
        grid-column: 2 / 2;
        grid-row: 1 / 1;
      }
      .ratings-overall-container{
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
    margin: auto;
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
        min-width: var(--buttonLarge) !important;
        min-height: var(--buttonLarge) !important;
        height: var(--buttonLarge);
        width: var(--buttonLarge);
        border: 1px solid var(--colorMedGrey);
        margin: 0;
      }
    }

    .nav-container {
      .right, .left {
        width: var(--buttonLarge) !important;
        height: var(--buttonLarge) !important;
        margin: 0;
        padding: var(--spacingSmall) !important;
        background-image: none !important;
        box-shadow: 0px 0px var(--spacingTiny) 0 rgb(0 0 0 / 30%);
        transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
        border-radius: 100vw !important;
        &:hover{
          width: calc(var(--buttonLarge) * 1.25) !important;
          height: calc(var(--buttonLarge) * 1.25) !important;
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
    justify-content: center;
    max-width: calc(var(--overallWidth) * 0.5);
  }

  .label-container {
    .key, .value {
      font-size: var(--FontSizeSmall);
    }
  }

  .color-options {
    .color-dot {
      height: var(--buttonMedium) !important;
      width: var(--buttonMedium) !important;
      margin-right: var(--spacingSmall) !important;
    }
  }
  
  .free-shipping-message{
    display: flex;
    flex-direction: row;
    height: var(--buttonLarge);
    font-size: var(--FontSizeSmall);
    padding: var(--spacingMedium) 0 0 0;
    gap: var(--spacingTiny);
    align-items: center;
    width: 100%;
    justify-content: center;
    .icon{
      height: var(--buttonLarge);
      width: var(--buttonLarge);
      
    }
  }

`;