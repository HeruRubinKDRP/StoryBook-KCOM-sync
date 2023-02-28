import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export interface iBevQuickShopStyled {
    widthX: number;
}

export const BevQuickShopStyled = styled.div<iBevQuickShopStyled>`
  --overallWidth: ${props => props.widthX + 'px'};
  --colorKSK: ${colorNameToValue("KSK")};
  --colorOK: ${colorNameToValue("OK-Status")};
  --colorDiscount: ${colorNameToValue("discount")};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorMediumRoast: ${colorNameToValue("medium-roast")};
  --colorLightRoast: ${colorNameToValue("light-roast")};
  --colorFaded: ${colorNameToValue("latteMed")};
  --colorCTA: ${colorNameToValue("secondaryGold")};

  --buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  --buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  --buttonSmall: calc(var(--overallWidth) * 0.025 + 12px);

  --FontSizeHuge: calc(var(--overallWidth) * 0.03 + 14px);
  --FontSizeLarge: calc(var(--overallWidth) * 0.02 + 12px);
  --FontSizeMedium: calc(var(--overallWidth) * 0.01 + 10px);
  --FontSizeSmall: calc(var(--overallWidth) * 0.005 + 8px);

  --spacingHuge: calc(var(--overallWidth) * 0.012 + 14px);
  --spacingLarge: calc(var(--overallWidth) * 0.01 + 12px);
  --spacingMedium: calc(var(--overallWidth) * 0.005 + 5px);
  --spacingSmall: calc(var(--overallWidth) * 0.003 + 4px);
  --spacingTiny: calc(var(--overallWidth) * 0.006 + 2px);
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: var(--spacingTiny);
  box-shadow: 0 var(--spacingTiny) var(--spacingSmall) 0 rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  
  .drop-down-item {
    font-size: var(--FontSizeMedium) !important;
    padding: var(--spacingMedium) var(--spacingSmall) var(--spacingMedium) var(--spacingLarge)
  }
  
  .configuration-container{
    button.k-btn{
      padding: var(--spacingHuge) !important;
    }
    .drop-down{
      .icon.chevron-down{
        padding: 0 !important;
        height: var(--spacingMedium) !important;
        display: flex;
        align-items: center;
      }
    } 
  }
  
 
  .configuration-item{
    &.setting{
      .drop-down{
        border-radius: 100vw !important;
        justify-content: space-between !important;
        padding: var(--spacingHuge) var(--spacingLarge) var(--spacingHuge) var(--spacingHuge) !important;
        height: calc(var(--spacingHuge) );
        margin-top: var(--spacingMedium);
        .selection-label{
          color: white;
        }
      }
    }
    .edlp-offer{
      margin-bottom: var(--spacingMedium);
    }
    .drop-down-container{
     
      .drop-down{ 
        align-items: center;
        
        .filler{
          background-color: var(--colorDarkRoast);
        }
        .filled{
          fill : white;
        }
        
      }  
    } 
    
  }

  .drop-down-container {
    position: relative;
    border-radius: 200vw;
    .filler {
      background-color: var(--colorDarkRoast);
    }
    
    .drop-down{
      height: 100%;
      border-radius: 100vw 0 0 100vw !important;
      justify-content: center;      
      align-items: center;
      .selection-label{
        font-size: var(--FontSizeMedium);
      }
    }
    
    .drop-down-items{ 
      background-color: white;
    }
    
    button.k-btn{
      width: var(--buttonSmall);
      height: var(--buttonSmall);
      position: relative;
      background-color: transparent !important;
      padding: calc(var(--spacingMedium) * 1.25) var(--spacingMedium) var(--spacingMedium) 0 !important;
    }

    .panel {
      border: 1px #cecece solid;
      border-radius: var(--spacingTiny);
      flex-flow: column;
      right: 0;
      position: absolute;
      z-index: 100;
      left: 0;
      top: 0;
      transform: translateY(-100%);
      width: 100%;
      min-width: 20vw;
      bottom: 0;
      height: 17vh;
      display: flex;
      flex-flow: column;
      max-height: 25vh;
      overflow-y: auto;
    }

  }


  .drop-down, .configuration-item .add-to-cart-container .drop-down {
    .filler {
      background-color: var(--colorFaded);
    }
  }


  .subscription-configuration {

    .add-to-cart-container {
      .drop-down {
        label {
          color: var(--colorDarkRoast);
        }
      }
    }

    .drop-down {
      x
      .filler {
        background-color: var(--colorDarkRoast);
      }

      label {
        color: white;
      }

      .k-btn {
        &.round-no-label {
          height: 100%;
        }
      }
    }

    .switch-container {
      box-shadow: inset 0 0 var(--spacingMedium) rgba(0, 0, 0, 0.25);
      height: auto;
      border-radius: 200vw;
      padding: 0 var(--spacingMedium);

      .indicator {
        margin: var(--spacingSmall) 0;
        background-color: var(--colorCTA);
        height: auto;
        padding: var(--spacingLarge);
        border-radius: 100vw;
        width: calc(50% - var(--spacingMedium))
      }

      .left, .right {
        color: var(--colorDarkRoast);
        padding: var(--spacingMedium);
        margin: var(--spacingMedium);

        &.selected {
          font-weight: 600;
        }
      }
    }
  }

  
  .icon{
    &.info-icon{
      width: var(--FontSizeLarge);
      height: var(--FontSizeLarge);
      margin-left: var(--spacingSmall);
    }
  }

  &.medium-dimensions {
    max-width: 100%;
    height: 100%;

    .close-btn{
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10000;
    }
    .ratings-overall-container {
      padding: 0 30% !important;
    }

    .messaging-container {
      .terms {
        font-size: var(--FontSizeMedium);
      }

      .price {
        font-size: var(--FontSizeLarge);
      }
    }

    .quick-shop-container {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      max-height: none;
    }

    .product-container, .configuration-container {
      width: 100%;
    }

    .product-container {
      .brand {
        font-size: var(--FontSizeMedium);
      }

      .product-image {
        h2 {
          font-size: var(--FontSizeHuge);
        }

        img {
          height: 20vh;
          object-fit: contain;
        }
      }
    }

    .subscription-group-section {
      margin-top: var(--spacingHuge);
      .flag-container {
        transform: translateY(20%);
        padding: calc(var(--spacingLarge)) var(--spacingLarge);

        label {
          padding: 0;
          font-size: var(--FontSizeMedium);
        }

      }
    }

    .configure-subscription-container, .one-time-section {
      padding: 0 var(--spacingLarge) var(--spacingLarge);
    }
    
    .config-area{
      display: flex;
      flex-direction: column;
    }
    .price-display{
      flex: 1 0 auto;
      margin-top: calc(var(--spacingHuge) * 1.25);
      display: flex;
      flex-direction: column;
    } 
    .purchase-type{
      text-align: right;
      font-weight: 600 !important;
      font-size: var(--FontSizeMedium);
      padding: var(--spacingMedium) 0 0 0;
      display: flex;
      align-content: flex-start;
      flex-wrap: wrap;
      padding-top: calc(var(--spacingHuge) * 1.25);
    }
    .switch-container{
      .left, .right{
        margin: var(--spacingMedium) 0 !important;
        font-size: var(--FontSizeMedium);
      }
    }

  }

  .config-area {
    display: flex;
    gap: var(--spacingLarge);
    justify-content: center;
    flex-direction: column;
    padding: var(--spacingLarge) 12%;
  }

  .configuration-item {
    .section-label {
      font-size: var(--FontSizeMedium);
      display: inline-flex;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
    }

    .selection-label {
      margin: 0;
    }

    .drop-down-container.large button {
      height: var(--FontSizeHuge);
      width: var(--spacingHuge);
      padding: var(--spacingSmall);

      .drop-down {
        height: auto;
        overflow: hidden;
      }
    }

  }


  .edlp-offer {
    font-size: var(--FontSizeMedium);

  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

  .quick-shop-container {
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5% 2%;
    max-height: 95vh;
  }

  .ratings-overall-container {
    margin-top: var(--spacingMedium);
    padding: 0 20% !important;
  }

  .configuration-container {
    display: flex;
    flex-direction: column;
  }

  .configure-subscription-container {
    box-shadow: 1px 4px 8px rgb(0 0 0 / 25%);
    padding: var(--spacingMedium) var(--spacingMedium) var(--spacingMedium) var(--spacingMedium);
  }

  .k-btn {
    &.cta, &.action {
      label {
        font-size: var(--FontSizeMedium);
      }
    }

    &.cta {
      background-color: var(--colorCTA) !important;

      label {
        font-weight: 600 !important;
      }
    }

  }

  .box-selection {
    .k-toggle-container {
      .k-btn {
        border: 1px solid var(--colorLightRoast) !important;
        border-radius: var(--spacingTiny) !important;

        background-color: transparent !important;

        label {
          font-weight: 600;
          color: var(--colorMediumRoast) !important;
        }

        &.toggle-selected {
          background-color: white !important;
          box-shadow: inset 0 0 12px 0 rgba(0, 0, 0, 0.25) !important;
          border-color: var(--colorDarkRoast) !important;

          .expander {
            background-color: var(--colorDarkRoast) !important;
            bottom: -2px !important;
            right: 0;
            left: 0;
            top: calc(100% - var(--spacingTiny)) !important;
            border-radius: 0 0 var(--spacingTiny) var(--spacingTiny) !important;
          }

          label {
            color: var(--colorDarkRoast) !important;
          }
        }
      }
    }
  }

  .select-box-size {
    color: var(--colorMediumRoast);
    font-size: var(--FontSizeSmall);
  }

  .one-time-section {
    position: relative;
    margin-top: var(--spacingLarge);
    padding: var(--spacingLarge) var(--spacingMedium);

    &::before {
      content: "";
      position: absolute;
      border-radius: var(--spacingSmall);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid;
      mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.15) 100%);
    }
  }

  .product-container {
    margin: auto;
  }

  .product-image {;

    img {
      width: 100%;
      height: 100%;
      padding: 0 20% 0 20%;
      margin-bottom: var(--spacingMedium);
      filter: drop-shadow(0 0 var(--spacingTiny) rgba(0, 0, 0, 0.25));
    }

    .brand {
      font-size: var(--FontSizeSmall);
      text-align: center;
    }

    h2 {
      text-align: center;
      font-weight: 200;
      color: var(--colorDarkRoast);
    }
  }

  .product-container, .configuration-container {
    flex: 1;
  }

  .product-container {
    flex-basis: 35%;
  }

  .purchase-type {
    color: var(--DarkRoast) !important;
  }

  .price-per-pod {
    font-weight: 200;
  }

  .starting-state-subscription {
    transition: transform 0.25s ease-in, height 0.25s ease-in;

    &.true {
      transform: translateX(-108%);
      height: 0;
    }
  }


  .subscription-configuration {
    transition: transform 0.2s ease-in, height 0.2s ease-in;
    transform: translateX(calc(var(--spacingMedium) + 103%));
    height: 0;

    &.true {
      transform: translateX(0);
      height: auto;
    }
  }

  .configuration-container {
    flex-basis: 65% !important;
    flex-grow: 1;
    padding: var(--spacingLarge);
  }

  .price, .messaging-container {
    justify-content: space-between;
  }

  .messaging-container {
    margin-bottom: var(--spacingMedium);
    display: block;

    .price {
      display: flex;
      gap: var(--spacingTiny);
      flex-direction: row;
      font-size: var(--FontSizeMedium);

      &.discounted {
        color: var(--colorDiscount);
        font-weight: 600;
      }
    }

    .purchase-type {
      color: var(--colorDarkRoast) !important;
      font-weight: 200;
    }

    .terms {
      font-size: var(--FontSizeSmall);
      color: var(--colorMediumRoast);
      font-weight: 200;
    }
  }

  .drop-down {
    .icon {
      padding: 12%;
    }
  }


  .configure-subscription-container {
    margin-top: calc(var(--spacingLarge) * 1.5);
    padding: var(--spacingLarge) var(--spacingMedium);
    background-color: white;
    border-radius: var(--spacingSmall);
    width: 100%;
    overflow: hidden;

    .left, .right {
      white-space: nowrap;
      margin: 0 var(--spacinglarge);
      font-size: var(--FontSizeMedium);
    }
  }

  .subscription-group-section {
    position: relative;
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;


    .flag-container {
      position: absolute;
      transform: translateY(100%);
      height: var(--spacingLarge);
      padding: 0;
      display: flex;
      align-content: center;
      flex-wrap: wrap;

      label {
        padding: var(--spacingTiny) var(--spacingSmall);
        font-size: var(--spacingMedium);
      }
    }
  }

  .backing {
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);
    inset: 0;
    position: absolute;
    z-index: 0;
  }
`;