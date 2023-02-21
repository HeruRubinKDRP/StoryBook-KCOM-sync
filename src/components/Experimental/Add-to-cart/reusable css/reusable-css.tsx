import {css} from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export const cardBorder = css`
    border: 1px solid ${colorNameToValue("light-grey")};
`

export const UI_rules ={

    minFontSize: 12,
    maxFontSize: screen.width * 0.2,
}