import styled, {css} from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {containerQueryBasedVariables, iStyledContainerQueryBased} from "../../../CLP/reusable-css-variables-CLP";


export const Styled_KSKPurchaseOption = styled.div<iStyledContainerQueryBased>`
  --overallWidth: ${props => props.widthX + 'px'};
  --overallHeight: ${props => props.heightY + 'px'};
  //--buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  //--buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  //--buttonSmall: calc(var(--overallWidth) * 0.025 + 12px);
  //
  //--FontSizeLarge: calc(var(--overallWidth) * 0.02 + 12px);
  //--FontSizeMedium: calc(var(--overallWidth) * 0.01 + 10px);
  //--FontSizeSmall: calc(var(--overallWidth) * 0.005 + 8px);
  //
  //--spacingLarge: calc(var(--overallWidth) * 0.01 + 12px);
  //--spacingMedium: calc(var(--overallWidth) * 0.005 + 5px);
  //--spacingSmall: calc(var(--overallWidth) * 0.003 + 4px);
  //--spacingTiny: calc(var(--overallWidth) * 0.006 + 2px);

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
  /*  border: 1px solid grey;*/
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
  //margin top to make room for the absolute positioned flag
  margin-top: 1.5rem;
  background-color: white;
  filter: drop-shadow(var(--spacingTiny) var(--spacingTiny) var(--spacingSmall) rgba(0, 0, 0, 0.25));
  
  &.mobile-dimensions, &.small-dimensions
    /*
    background-color: red!important;
    */
    .pod-ksk-container {
      border: 2px dashed #0d8296;
      height: 30px;
      width: 30px;
      max-height: 30px;
      max-width: 30px;
      min-width: 25px;
      border-radius: 100vh;
      margin-right: 3px;
    }
    .ksk-learn-more {
      width: 50%;
      font-size: 0.80rem;
      margin-top: 0.5rem;
    }
    .k-btn label {
      font-size: var(--FontSizeSmall);
    }
    .ksk-container {
      .kcs-image {
        max-height: 70px !important;
        padding-right: 0;
      }
    }
      .visual-container {
        padding-right: 0;
      }
    }
  
  &.medium-dimensions, &.large-dimensions  {
    .pod-ksk-container {
      border: 2px dashed #0d8296;
      height: 40px;
      width: 40px;
      max-height: 40px;
      max-width: 40px;
      min-width: 40px;
      border-radius: 100vh;
      margin-right: 5px;
    }
}


  .flag-container {
    border-radius: var(--spacingTiny) 0 0 0 !important;
    font-size: var(--FontSizeSmall);
    padding: calc(var(--spacingTiny) * 0.35) var(--spacingSmall);
    position: absolute;
    top: calc(var(--FontSizeSmall) * -1);
    left: -1px;
    display: flex;
    align-self: flex-start;

    .tri-bot-l {
      display: none;
    }

    .banner-protrude {
      inset: 0 -1rem 0 100%;
    }

    label {
      font-size: var(--FontSizeSmall);
      display: flex;
      align-items: center;
      color: #fff;
    }

    .k-btn label {
      /*font-size: var(--FontSizeSmall);*/
      text-decoration: underline;
    }
  }

  .deal-area:nth-child(2n+1) {
    padding-right: var(--spacingSmall);
    /*  background-color: #0d8296;*/
  }

  .deal-area {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 2px;
    width: 100%;
    align-items: center;
    margin: var(--spacingMedium) 0 0 0;
 

    .deal-price {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      color: var(--colorKSK);
      font-weight: 600;
      margin-right: var(--spacingLarge);
      font-size: var(--FontSizeLarge);
    }

    h3 {
      color: var(--colorKSK);
      font-size: var(--FontSizeSmall);
      grid-column: 2 / 3;
      grid-row: 1 / 1;
      margin: 0;
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

  .k-btn {
    background-color: var(--colorKSK) !important;
    padding: var(--spacingLarge) var(--spacingLarge);

    label {
      font-size: var(--FontSizeSmall);
    }

    .k-btn.learn-more {
      padding: 0 !important; 
      border-radius: 0 !important;
      border: 0 !important;
      height: var(--FontSizeSmall) !important;
      display: inline-flex !important;
    }
  }

  .ksk-container {
    display: flex;
    margin: 0 0 5px 0;
    flex-wrap: nowrap;
    flex-direction: row;

    .visual-container {
      display: flex;
      align-items: center;
      padding-right: var(--spacingSmall);
    }

    .kcs-image {
      max-height: 60px;
      padding-right: var(--spacingSmall);
    }

    .plus-icon {
      width: 32px; 
      .filled {
        fill: var(--colorKSK);
      }

      padding-right: var(--spacingSmall);
    }

    .fill-pod {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .k-btn {
      padding: 0 !important;
    }


    .k-btn.best-deal {
      background-color: #FFF !important;
      
      /*    margin-left: 0.5rem;*/

      label {
        text-decoration: underline;
      }

      .icon {
        height: 1rem !important;

        .filled {
          fill: #000 !important;
        }
      }

      &:hover {
        label {
          color: #000
        }

        .icon .filled {
          fill: #000 !important;
        }
      }
    }
`