import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const navItemArticlesNotLiquid = css`
  //SMALL ARTICLE
  .nav-item-container.article-small {
    width: 9vw !important;

    .secondary-text {
      font-size: 14px;
    }

    .primary-text {
      font-size: 14px;
      font-weight: 600;
    }

    .nav-item-image {
      width: auto;
    }

    .article-small {
      align-items: flex-start;
    }

    &:nth-of-type(3) {
      grid-area: 2 / 2 !important;
    }

    &:nth-of-type(2) {
      grid-area: 1 / 2 !important;
    }

    .chevron-right {
      display: none;
    }

  }


  section.section-container.links-large{
    .article-large{
      .nav-item-image{
        max-height: none !important;
      }
    }  
  }
  
  &.mobile{
    .nav-item-container.article-small {
      .article-small{
        .text-container{
          padding: 2vw 2vw 1vw 2vw !important;
        }
      } 
    }
    
  }
  


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

    &:hover {
      label {
        text-decoration: underline;
      } 
    }
  }


  //In Footer
  .footer{
    .nav-item-container.article-small .primary-text{
      font-size: 11px !important;
    }
    .footer-small-links-sub-section{
      gap: 0 !important;
      .primary-text{
        padding: 0 !important;
        min-height: 25px !important;
      }
    }
  }

`;