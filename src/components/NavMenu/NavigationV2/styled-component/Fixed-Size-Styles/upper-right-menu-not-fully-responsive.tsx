import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const upperRightMenuNotFullyResponsive = css`

  .secondary-importance-items {
    gap: 0;
    align-items: center;
    .action-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      outline: 0;
      margin: 0;
      padding: 0 8px 8px 8px;
      border-radius: 8px;
      box-sizing: border-box;
      position: relative;
      overflow: visible !important;
    }

    label {
      font-size: 12px;
      z-index: 1;
    }

    .k-btn {
      padding: 0 !important;

      .icon {
        margin: 0;
      }

      &.logged-in {
        .filled {
          fill: ${colorNameToValue("dark-roast")}
        }
      }

      &.not-logged-in {
        .filled {
          fill: transparent !important;
          stroke: ${colorNameToValue("dark-roast")};
          stroke-width: 2px;
        }
      }
      &:hover{
        .expander{
          left: -10px;
          right: -10px;
          top: -10px;
          bottom: -20px;
          transition-timing-function: ease-out;
          border-radius: 8px;
          z-index: 0;
        }
      }
    }
  }

  .icon-cart {
    .stroked {
      stroke-width: 2px;
      stroke-linecap: round;
    }
  }

  .icon-support {
    .stroked {
      stroke-width: 2px;
    }

    .stroked-highlight {
      fill: white;
      stroke-width: 2px;
      stroke: ${colorNameToValue("Primary-CTA")}
    }
  }
  
  .persistent-menu-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${colorNameToValue("sepia-light")};
    align-items: center;
  }

  .secondary-importance-items {
    display: flex;
    flex-direction: row;

    .k-btn {
      padding: 10px 1.23vw !important;
      height: auto !important;
      border-radius: 0 !important;
      overflow: visible !important;

      .icon {
        height: 32px !important;
        width: 32px !important;
      }

      .filled {
        fill: ${colorNameToValue("dark-roast")}
      }

    }
  }

`;