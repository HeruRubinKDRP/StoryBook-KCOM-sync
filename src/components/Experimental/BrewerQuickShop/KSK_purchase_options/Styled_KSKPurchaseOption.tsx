import styled, {css} from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {containerQueryBasedVariables, iStyledContainerQueryBased} from "../../../CLP/reusable-css-variables-CLP";


export const Styled_KSKPurchaseOption = styled.div<iStyledContainerQueryBased>`
  --overallWidth: ${props => props.widthX + 'px'};
  --overallHeight: ${props => props.heightY + 'px'};
  ${containerQueryBasedVariables};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  /*  border: 1px solid grey;*/
  border-radius: var(--spacingTiny);
  padding: var(--spacingSmall) var(--spacingLarge) var(--spacingLarge) var(--spacingLarge);
  //margin top to make room for the absolute positioned flag
  margin-top: calc(calc(var(--spacingTiny) + var(--FontSizeMedium)));
  background-color: white;
  filter: drop-shadow(var(--spacingTiny) var(--spacingTiny) var(--spacingSmall) rgba(0, 0, 0, 0.25));

  &.mobile-dimensions {
    /*
    background-color: red!important;
    */
    .pod-ksk-container {
      border: 2px dashed #0d8296;
      height: 25px;
      width: 25px;
      max-height: 25px;
      max-width: 25px;
      min-width: 25px;
      border-radius: 100vh;
      margin-right: 3px;
    }
    .ksk-learn-more {
      width: 50%;
      font-size: 0.80rem;
    }
    .k-btn label {
      font-size: 0.85rem;
    }
    .ksk-container {
      .kcs-image {
        max-height: 50px;
        padding-right: 0;
      }
    }
      .visual-container {
        padding-right: 0px;
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
    margin: 5px 0 0 0;
 
/*    * {
      display: flex;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
    }*/

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
      font-size: var(--FontSizeMedium);
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
      font-size: var(--FontSizeMedium);
    }

    .k-btn.learn-more {
      padding: 0 !important;
      float: inside;
      border-radius: 0 !important;
      border: 0 !important;
      height: var(--FontSizeSmall) !important;
      display: inline-flex !important;
    }
  }

  .ksk-container {
    display: flex;
    margin: 0 0 5px 0;
    flex-wrap: wrap;
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
      width: 20px;

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