import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export interface iStyledKSKPurchaseOption {
    widthX: number;
    heightY: number;
}

export const Styled_KSKPurchaseOption = styled.div<iStyledKSKPurchaseOption>`
  --overallWidth: ${props => props.widthX + 'px'};
  --overallHeight: ${props => props.heightY + 'px'};

  --colorKSK: ${colorNameToValue("KSK")};
  --colorOK: ${colorNameToValue("OK-Status")};
  --colorDiscount: ${colorNameToValue("discount")};

  --buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  --buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  --buttonSmalll: calc(var(--overallWidth) * 0.025 + 12px);

  --FontSizeLarge: calc(var(--overallWidth)  * 0.02 + 12px);
  --FontSizeMedium: calc(var(--overallWidth) * 0.01 + 10px);
  --FontSizeSmall: calc(var(--overallWidth)  * 0.005 + 8px);

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
  //margin top to make room for the absolute positioned flag
  margin-top: calc(calc(var(--spacingTiny) + var(--FontSizeLarge)));
  background-color: white;
  
  .flag-container {
    border-radius: var(--spacingTiny) 0 0 0 !important;
    font-size: var(--FontSizeSmall);
    padding: calc(var(--spacingTiny) * 0.5) var(--spacingSmall);
    position: absolute;
    top: calc( var(--FontSizeSmall) * -1);
    left: -1px;
    display: flex;
    align-self: flex-start;
    .tri-bot-l {
      display: none;
    }

    .banner-protrude {
      inset: 0 -1rem 0 100%;
    }
    label{
      font-size: var(--FontSizeSmall);
    }
  }

  .deal-area:nth-child(2n+1){
    padding-right: var(--spacingSmall);
    background-color: #0d8296;
  }
  
  .deal-area{
    display: grid;
    grid-template-columns: 0.3fr 0.8fr;
    grid-template-rows: 1fr 1fr;
    *{
      display: flex;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .deal-price{
        grid-column: 1 / 1;
        grid-row: 1 / 1;
        color: var(--colorKSK);
        font-weight: 600;
        margin-right: var(--spacingLarge);
      font-size: var(--FontSizeLarge);
    }
    h3{
      color: var(--colorKSK);
      font-size: var(--FontSizeMedium);
      grid-column: 2 / 2;
      grid-row: 1 / 1;
    }
    .strike-through-price{
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      font-size: var(--FontSizeSmall);
      text-decoration: line-through;
    }
    .savings-callout{
      font-size: var(--FontSizeSmall);
      grid-column: 2 / 2;
        grid-row: 2 / 2;
    }
    
  }
  
.k-btn{
  background-color: var(--colorKSK) !important;
  
  padding: var(--spacingLarge) var(--spacingLarge) !important;
  label{
    font-size: var(--FontSizeMedium);
  }
}



`