import {css} from "styled-components";

export const navItemProductLargeNotFullyResponsive = css`
  //Product Large

  .nav-item-container.product-large {
    padding: 0;

    .nav-item-image {
      height: 13vw;
      width: 13vw;
    }

    .primary-text {
      margin: 25% 5% 20% 10%;
    }

    .expander {
      transition: background 1s;
    }

    .chevron-right {
      display: none;
    }
  }
`