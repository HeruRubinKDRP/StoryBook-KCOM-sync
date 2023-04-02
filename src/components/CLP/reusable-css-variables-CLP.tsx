import styled, {css} from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const containerQueryBasedVariables = css`
  --colorKSK: ${colorNameToValue("KSK")};
  --colorOK: ${colorNameToValue("OK-Status")};
  --colorDiscount: ${colorNameToValue("discount")};
  
  --buttonHuge: calc(var(--overallWidth) * 0.06 + 16px);
  --buttonLarge: calc(var(--overallWidth) * 0.035 + 16px);
  --buttonMedium: calc(var(--overallWidth) * 0.025 + 12px);
  --buttonSmalll: calc(var(--overallWidth) * 0.025 + 12px);

  --FontSizeLarge: calc(var(--overallWidth)  * 0.02 + 14px);
  --FontSizeMedium: calc(var(--overallWidth) * 0.01 + 12px);
  --FontSizeSmall: calc(var(--overallWidth)  * 0.005 + 10px);

  --spacingHuge: calc(var(--overallWidth) * 0.01 + 16px);
  --spacingLarge: calc(var(--overallWidth) * 0.01 + 12px);
  --spacingMedium: calc(var(--overallWidth) * 0.005 + 5px);
  --spacingSmall: calc(var(--overallWidth) * 0.003 + 4px);
  --spacingTiny: calc(var(--overallWidth) * 0.006 + 2px)
`;

export interface iStyledContainerQueryBased {
    widthX: number;
    heightY: number;
}