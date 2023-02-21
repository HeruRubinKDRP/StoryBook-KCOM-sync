import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export interface iStyledBrewerOnly {
    widthX: number;
    heightY: number;
}

export const StyledBrewerOnly = styled.div<iStyledBrewerOnly>`
  --overallWidth: ${props => props.widthX + 'px'};
  --overallHeight: ${props => props.heightY + 'px'};

  --colorKSK: ${colorNameToValue("KSK")};
  --colorOK: ${colorNameToValue("OK-Status")};
  --colorDiscount: ${colorNameToValue("discount")};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorFaded: ${colorNameToValue("latteMed")};

  --buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  --buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  --buttonSmall: calc(var(--overallWidth) * 0.025 + 12px);

  --FontSizeLarge: calc(var(--overallWidth) * 0.02 + 12px);
  --FontSizeMedium: calc(var(--overallWidth) * 0.01 + 10px);
  --FontSizeSmall: calc(var(--overallWidth) * 0.005 + 8px);

  --spacingLarge: calc(var(--overallWidth) * 0.01 + 12px);
  --spacingMedium: calc(var(--overallWidth) * 0.005 + 5px);
  --spacingSmall: calc(var(--overallWidth) * 0.003 + 4px);
  --spacingTiny: calc(var(--overallWidth) * 0.006 + 2px);

  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  border: 1px solid grey;
  border-radius: var(--spacingTiny);
  padding: var(--spacingLarge);

  .add-to-cart-container{
    display: flex; 
      
      .drop-down-container{
        flex-basis: 20%;
        border-radius: 100vw 0 0 100vw;
        position: relative;
        z-index: 100;
        &.is-open{
          .drop-down{
            .icon.chevron-down{
                transform: rotate(180deg);
            }
          }
        }
        .column.panel{ 
          box-shadow: 0 0 var(--spacingSmall) 0 rgba(0,0,0,.25);
          display: flex;
          flex-flow: column;
          width: 100%; 
          right: 0;
          position: absolute;
          z-index: 0;
          left: 0;
          top: 0; 
          transform: translateY(-100%);
          .panel-bg{
            top:0;
            bottom: calc(var(--spacingMedium) * -1);
            z-index: -2;
            border-radius: var(--spacingTiny) var(--spacingTiny) 0 0;
          }
          .drop-down-item{
            padding: var(--spacingMedium);
            font-size: var(--FontSizeLarge);
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            margin: 0 !important;
            .icon{
              height: var(--spacingLarge);
              width: var(--spacingLarge);
              position: absolute;
              right: 5%;
            }
          }
        }
      }
      .drop-down{
        
        height: 100%;
        border-radius: 100vw 0 0 100vw !important;

        justify-content: center;
        align-items: center;
        
        button.k-btn{
          width: var(--buttonSmall);
          height: var(--buttonSmall);
          position: relative;
          background-color: transparent !important;
          padding: calc(var(--spacingMedium) * 1.25) var(--spacingMedium) var(--spacingMedium) 0 !important;
          .icon{
            transition: transform 0.2s ease-in-out;
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            .filled{
              fill: var(--colorDarkRoast) !important;
            }
          }
        }
      }
  
    .action{
      flex-basis: 80%;
      border-radius: 0 100vw 100vw 0;
    }
  }
  
  .k-btn {
    padding: var(--spacingLarge) var(--spacingLarge) !important;

    label {
      font-size: var(--FontSizeMedium);
    }
  }
  

  .coupon-area {
    padding: var(--spacingMedium);
    border: 1px dashed var(--colorDarkRoast);
    background-color: var(--colorFaded);
    align-items: center;
    margin: var(--spacingMedium) 0;
    &:empty{
      background-color: transparent;
      border : none;
      padding: 0;
    }

    .coupon-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      gap: var(--spacingSmall);
      
      .coupon-message-area{
        display: flex;
        flex-direction: row;
        flex: 0 0 65%;
      }
      .coupon-applied{
        display: flex;
        font-size: var(--FontSizeSmall);
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: var(--colorOK);
        font-weight: 600;
      }
      
      .k-btn.learn-more{
        padding: 0 !important;
        float: inside;
        border-radius: 0 !important;
        height: var(--FontSizeSmall) !important;
        display: inline-flex !important;
      }
      
      .icon.launch-pop-up{
        height: var(--FontSizeSmall) !important;
        width: var(--FontSizeSmall) !important;
        display: flex;
        margin-left: var(--spacingTiny) !important;
      }
      
      
      .checkmark-circled{
        width: var(--buttonMedium);
        height: var(--buttonMedium);
        margin-right: var(--spacingSmall);
        .stroked{
          stroke-width: 2px;
          stroke: var(--colorOK);
        }
      }
      .coupon-message{
        padding-left: var(--spacingSmall);
        span, p, label{
          font-size: var(--FontSizeSmall);
        }
      }

      .k-btn {
        padding: var(--spacingTiny) var(--spacingLarge) !important;
        flex: 1 0 0;
        label {
          font-size: var(--FontSizeSmall);

        }
      }
    }
  }
  
  .product-info-container {
    .coupon-item{
      p{
        font-size: var(--FontSizeSmall);
      }
    }
  }


  .deal-area:nth-child(2n+1) {
    padding-right: var(--spacingSmall);
  }

  .deal-area {
    display: grid;
    grid-template-columns: 0.3fr 0.8fr;
    grid-template-rows: 1fr 1fr;

    * {
      display: flex;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .deal-price {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      font-weight: 200;
      margin-right: var(--spacingLarge);
      font-size: var(--FontSizeMedium);
      color: var(--colorDiscount);
    }

    h3 {
      color: var(--DarkRoast);
      font-size: var(--FontSizeMedium);
      grid-column: 2 / 2;
      grid-row: 1 / 1;
      font-weight: 200;
    }

    .strike-through-price {
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      font-size: var(--FontSizeSmall);
      text-decoration: line-through;
    }

    .savings-callout {
      font-size: var(--FontSizeSmall);
      grid-column: 2 / 2;
      grid-row: 2 / 2;
    }

  }

`;