import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const noboStylesNotFullyResponsive = css`

  &.is-nobo {
    .section-container.nobo {
      display: flex !important;
    }

    .secondary-importance-items .k-btn .icon-account {
      .filled{
        fill : ${colorNameToValue("KSK")} !important;
      }
    }
  }

  .base-nav-sections .section-container.nobo {
    display: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 111;
    background-color: antiquewhite;
    padding: 20px 20px 15px;
    .nav-item-container {
      flex-grow: 0;
      outline: #3f3020 solid 1px;
      border-radius: 100vw;
    }

    .chevron-right {
      display: none;
      height: 0;
      width: 0;
    }
  }

`;