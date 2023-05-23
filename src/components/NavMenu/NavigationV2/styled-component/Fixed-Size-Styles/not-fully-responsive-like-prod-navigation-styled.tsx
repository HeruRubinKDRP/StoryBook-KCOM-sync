import styled from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

import {navMobileStyles} from "./nav-Mobile-common-styled-not-fully-responsive";
import {linkGraveyardNotFullyResponsive} from "./link-graveyard-not-fully-responsive";
import {styledNavThemes} from "../nav-themes-styled";
import {styledHeroGalleryNotLiquid} from "./hero-gallery-styled";
import {promoStylesNotFullyResponsive} from "./nav-item-Promo-not-liquid";
import {footerStylesNotFullyRsponsive} from "./footer-styles-not-fully-rsponsive";
import {noboStylesNotFullyResponsive} from "./nobo-styles-not-fully-responsive";
import {styledFixedTopNavThemes} from "./top-level-nav-items-not-fully-responsive";
import {mobileCommonNotFullyResponsive} from "./mobile-common-not-fully-responsive";
import {upperRightMenuNotFullyResponsive} from "./upper-right-menu-not-fully-responsive";
import {navItemMediumNotLiquid} from "./nav-item-Medium-not-liquid";
import {navItemContentMaxNotLiquid} from "./nav-item-ContentMax-not-liquid";
import {navItemLargeNotLiquid} from "./nav-item-Large-not-liquid";
import {navItemSmallNotFullyResponsive} from "./nav-item-Small-not-fully-responsive";
import {navItemProductLargeNotFullyResponsive} from "./nav-item-ProductLarge-not-fully-responsive";
import {sectionLargeLinksNotLiquid} from "./section-large-not-liquid";
import {navItemArticlesNotLiquid} from "./nav-item-articles-not-liquid";


export const NotFullyResponsiveLikeProdNavigationStyled = styled.div`

  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;

  //width media queries
  @media (max-width: 2400px) {
    .global-navigation {
      //max-width: 2000px;
    }
  }
  //CLEAN EMPTIES
  * {
    .empty {
      display: none;
    }
  }

  //search box

  .search-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &.mobile{
    .search-container {
      &.mobile{
        display: flex;
      }
      &.desktop{
        display: none;
      }
    }
  }
  
  &.large{
    .search-container{
      &.mobile{
        background-color: #0d8296;
        display: none;
      }
      &.desktop{
        display: flex;
      }
    }
  }

  //MOBILE SPECIFIC STYLES
  ${mobileCommonNotFullyResponsive};


  //Top Level Nav related styles
  ${styledFixedTopNavThemes};

  // the right side menu of small links  
  ${linkGraveyardNotFullyResponsive};

  // these are NOBO specific styles
  // these are only for NOBO aka customer service
  ${noboStylesNotFullyResponsive};

  //for the upper right hand menu in desktop
  ${upperRightMenuNotFullyResponsive}
  .empty {
    display: none !important;
  }


  .container-upper {
    z-index: 1;
    padding: 30px 40px 10px;
    background-color: ${colorNameToValue("sepia-light")};
    width: 100vw;
    display: flex;
    justify-content: center;
    position: sticky;
  }

  .veil {
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: opacity 0.25s ease-in;

    &.slide-right {
      opacity: 0;
    }
  }

  //header area, with the logo and account buttons etc.  

  .logo {
    width: 175px;
    height: 30px;
    margin-top: 5px;;
    left: 1vw;
  }

  label {
    &:empty {
      display: none;
    }
  }

  header.main-header {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // Main top level

  .main-nav-content {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .top-level-nav-items-container {
    display: flex;
  }

  .main-nav {
    &.k-btn {
      border: 0 !important;
      background-color: transparent !important;
      padding: 10px 1.23vw;
      height: auto !important;

      label {
        font-size: clamp(0.75rem, 1.15vw, 1.25rem);
      }

      .icon {
        width: 1.25vw !important;
        height: 1.25vw !important;
        margin-right: 0.65vw !important;
      }

      &.active-hover-state {
        .expander {
          left: 1px;
          right: 1px;
          top: 1px;
          bottom: 1px;
          transition: none 0s !important;
        }
      }

      &.active-hover-state.highlight-bubble {
        background-color: white !important;

        label {
          color: ${colorNameToValue("dark-roast")} !important;
        }

      }

      &.highlight-bubble {
        label {
          color: white !important;
        }

        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }

  //common style rules across all styles

  .text-block {
    margin-bottom: 1vw;
  }

  .text-container {
    padding: 1vw;
  }

  img {
    object-fit: contain;
  }

  .expander {
    background-color: ${colorNameToValue("dark-roast")};
  }

  .nav-item-container {
    .chevron-right {
      opacity: 0;
    }

    &:hover {
      .chevron-right {
        display: none !important;
      }
    }
  }


  //highlight by color like for the deals icon
  .highlight-by-color {
    label {
      color: ${colorNameToValue("discount")};
    }

    .icon {
      .filled {
        fill: ${colorNameToValue("discount")}
      }

      .stroked, .outlined {
        stroke: ${colorNameToValue("discount")}
      }
    }
  }

  // highlight by bubble
  .k-btn {
    &.highlight-bubble {
      background-color: ${colorNameToValue("dark-roast")} !important;

      label {
        color: white;
      }

      &:hover {
        label {
          color: ${colorNameToValue("dark-roast")}
        }
      }
    }

    .expander {
      background-color: white !important;
    }
  }


  ${navItemArticlesNotLiquid} // Content Max for large articles
  ${navItemContentMaxNotLiquid};

  // hero gallery type
  ${styledHeroGalleryNotLiquid}
    //****MODES
    //Nav Item Medium
  ${navItemMediumNotLiquid}
    //all in hover panel
  .nav-item-image {
    display: flex;
  }


  .nav-item-container {
    flex: 1 1 auto;
    align-self: flex-start;
    position: relative;

    .nav-item-image, .text-container {
      z-index: 2;
    }

    a {
      label {
        z-index: 2;
      }
    }
  }


  //main nav hovers
  .expander {
    position: absolute;
    border-radius: 0.5vw;
    z-index: 0;
  }


  .nav-item-container {
    .article-large, .article-small {
      .nav-item-image {
        flex-direction: column;
      }

      .text-container {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }

  //ARTICLES MODES
  .nav-item-container.article-large, .nav-item-container.article-small {
    .text-container {
      margin-top: 0.25vw;
    }

    .secondary-text {
      color: ${colorNameToValue("medium-roast")};
    }

    .primary-text, .secondary-text {
      transition: color 0.5s ease-in;
    }

    .chevron-right {
      display: none;
    }

    &:hover {
      .primary-text {
        color: white;
      }

      .secondary-text {
        color: white;
      }

      .expander {
        background-color: ${colorNameToValue("dark-roast")};
        right: -0.5vw;
        bottom: -0.5vw;
        left: -0.5vw;
        top: -0.5vw;
        border-radius: 1vw;
        animation: slideRight 0.5s forwards;
      }
    }
  }

  //ARTICLE LARGE 
  .nav-item-container.article-large {
    .article-large {
      align-items: flex-start;
    }

    .secondary-text {
      font-size: 1vw;
    }

    .primary-text {
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      font-weight: 600;
    }


    &:nth-of-type(1) {
      grid-area: 1 / 1 / 3 / 1 !important;

      .nav-item-image {
        width: 20vw;
        height: auto;
      }
    }

    &:nth-of-type(3) {

    }

  }

  //SECTION - this is a section for large link nav items
  ${sectionLargeLinksNotLiquid}
  ${navItemProductLargeNotFullyResponsive}
    // Regular LINKS section
  .section-container.links {
    .nav-item-container {
      // base transition states
      .expander {
        display: none;
      }

      .nav-item-image {
        transition: 0.25s transform ease-in;
        transform: scale(1);
      }

      label {
        transition: color 0.25s ease;
        transition-delay: 0.15s;
      }
    }
  }

  .section-main {
    margin-bottom: 0;
    margin-top: 8px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 600;
    cursor: pointer;

    .text-container {
      padding: 0;
    }

    label {
      display: flex;
      cursor: pointer;
      color: ${colorNameToValue("medium-roast")};

      .icon {
        width: 0.65vw;
        margin-left: 0.5vw;

        .filled {
          fill: ${colorNameToValue("medium-roast")}
        }
      }
    }
  }

  .nav-item-container {
    display: flex;
    align-self: stretch;
    width: auto !important;
    max-height: none;

    label {
      pointer-events: all;
      cursor: pointer;
    }

    .main-nav {
      width: auto;
    }
  }

  a {
    text-decoration: none;
    color: ${colorNameToValue("dark-roast")};
  }

  .nav-sections {
    display: flex;
  }

  nav {
    position: relative;
  }

  .nav-sections-main {
    background-color: white;
    position: absolute;
    padding-top: ${props => props.theme.mobileMenuPadding}px;
    max-width: 1440px;
    width: 100%;
    box-shadow: 0 3px 10px 0 #000;
    justify-content: flex-start;
    margin: 4px auto;
    overflow: hidden;
    border-radius: 1vw;
    left: 2vw;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  .base-nav-sections {
    overflow: hidden;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 0;
    justify-content: flex-start;
    position: relative;
    gap: 2rem;
    max-height: 600px;
    border-radius: 1vw;
    flex-grow: 1;
    align-items: center;
    align-content: center;

    .section-container {
      flex: 0;
      flex-wrap: wrap;
      height: auto;
      display: flex;
      flex-direction: column;
      align-self: flex-start;

      &.links-large {
        .nav-items-area {
          display: grid !important;
        }
      }

      &.links {
        //width: 20%;

        .nav-items-area {
          flex-direction: column;

          a {
            width: 100%;
          }
        }

        .section-main {
          align-items: flex-start;

          &.no-links {
            pointer-events: none;
          }

          .text-container {
            padding: 0;
          }
        }
      }

      .nav-items-area {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5vw;
        margin-top: 1vw;

        .nav-item-container {
          width: 100%;
        }
      }
    }
  }


  ${navItemSmallNotFullyResponsive}
  ${promoStylesNotFullyResponsive}
  ${footerStylesNotFullyRsponsive}
  ${navMobileStyles}
  ${styledNavThemes}
  ${navItemLargeNotLiquid}


`
