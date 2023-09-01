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
  --colorMediumRoast: ${colorNameToValue("medium-roast")};
  --colorFaded: ${colorNameToValue("latteMed")};

  --buttonLarge: 1.25rem;
  --buttonMedium: 1 rem;
  --buttonSmall: 0.75rem;

  --FontSizeLarge: 1.25rem;
  --FontSizeMedium: 1rem;
  --FontSizeSmall: 0.75rem;

  --spacingLarge: 1rem;
  --spacingMedium: 0.75rem;
  --spacingSmall: 0.5rem;
  --spacingTiny: 0.25rem;

  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%; 
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
 
  margin-top:0.5rem;
  //background-color: rgb(235, 231, 227);
  background-color: #EBE7E3;
  filter: drop-shadow(var(--spacingTiny) var(--spacingTiny) var(--spacingSmall) rgba(0, 0, 0, 0.25));

  &.mobile-dimensions {
    background-color: white;

    .coupon-area-container {
      .kcs-image {
        max-height: 50px;
        padding-right: 0;
      }
      .coupon-area {
        padding: 5px;
        margin: 0 0 var(--spacingSmall) var(--spacingLarge);

      }
      .coupon-message{
        line-height: 0.80rem; 
      }
    }
  }

  .member-price-display{
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  
  .coupon-area-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .kcs-image {
      max-height: 60px;
      padding-right: var(--spacingSmall);
    }

    .coupon-area {
      padding: var(--spacingMedium) var(--spacingLarge);
      border: 1px dashed #3B2B2F;
      border-radius: var(--spacingTiny); 
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 15%);

      align-items: center;
      margin: 0 0 var(--spacingLarge) var(--spacingLarge);
      width: 100%;

      &:empty {
        background-color: transparent;
        border: none;
        padding: 0;
      }

      .coupon-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        
        flex-wrap: nowrap;
        gap: var(--spacingSmall);

        .coupon-message-area {
          display: flex;
          flex-direction: row;
          flex: 0 0 50%;
        }

        .coupon-applied {
          display: flex;
          flex-direction: row;
          font-size: var(--FontSizeSmall);
          align-content: center;
          align-items: center;
          flex-wrap: nowrap;
          color: var(--colorOK);
          font-weight: 600;
        }

        .k-btn.learn-more {
          padding: 0 !important;
          float: right;
          border-radius: 0 !important;
          border: 0 !important;
          height: var(--FontSizeSmall) !important;
          display: inline-flex !important;
        }

        .icon.launch-pop-up {
          height: var(--FontSizeSmall) !important;
          width: var(--FontSizeSmall) !important;
          display: flex;
          margin-left: var(--spacingTiny) !important;
        }

        .checkmark-circled {
          width: 3rem;
          height: 2rem;
          margin-right: var(--spacingSmall);

          .stroked {
            stroke-width: 2px;
            stroke: var(--colorOK);
          }
        }

        .coupon-message {
          padding-left: var(--spacingSmall);

          span, p, label {
            font-size: var(--FontSizeSmall);
          }
          
        }

        .k-btn {
          padding: var(--spacingMedium) var(--spacingLarge) !important;
          flex: 1 0 0;
          background-color: transparent !important;
          border: 1px solid var(--colorMediumRoast) !important;

          label {
            font-size: var(--FontSizeSmall);
            margin: 10px 0 10px 0;
          }
        }
      }
    }
  }


  .k-btn {
    padding: var(--spacingLarge) var(--spacingLarge);

    label {
      font-size: var(--FontSizeSmall);
    }
  }


  .product-info-container {
    .coupon-item {
      p {
        font-size: var(--FontSizeSmall);
      }
    }
  }

  .deal-area:nth-child(2n+1) {
    padding-right: var(--spacingSmall);
  }

  .deal-area {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 2px;
    width: 100%;
    align-items: center;
    margin: 5px 0;
 

    .deal-price {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      font-weight: 200;
      margin-right: var(--spacingLarge);
      font-size: var(--FontSizeMedium);
      color: var(--colorDiscount);
    }

    h3 {
      color: var(--DarkRoast);
      font-size: var(--FontSizeSmall);
      grid-column: 2 / 3;
      grid-row: 1 / 1;
      margin: 0;
      /*      font-weight: 200;*/
    }

    .strike-through-price {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
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