import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const footerStylesNotFullyRsponsive = css`
  .footer-area {
    padding: 8px;
  }
  
  .footer {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;

    :empty {
      display: none;
    }

    .nav-items-area {
      height: 100%;
    }

    .section-main {

      &.no-link {
        padding: 1vw 3%;
        width: 15%;
        font-size: 24px;
        line-height: 24px;
        .primary-text {
          color: ${colorNameToValue("dark-roast")} !important;
        }
      }
    } 

    .nav-items-area {
      display: flex; 
      justify-content: flex-end;
      flex: 1 1 100%;
    }
  }

  .footer-area, .footer-area .nav-items-area, .footer-area .section-container {
    min-height: 70px;
  }

  .footer-small-links-sub-section{
    &:empty{
      display: none;
    }
  }
  .footer-area {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    border-top: 1px solid #ece9e4;

    &:empty {
      display: none;
    }

    .footer {
      display: flex;

    }

    .nav-items-area {
      width: 100%;
      gap: 8px;
    }

    //ARTICLES
    .article-small {
      margin: 0.25vw 1.5vw 0.25vw 0.25vw;
      flex-grow: 0;
      min-width: 13vw !important;

      .text-container {
        padding: 0 1vw;
      }

      &:hover {
        .icon {
          display: none !important;
        }
      }

      .nav-item-image {
        width: 100%;
        min-height: 32px;
        overflow: hidden;
        border-radius: 1vw;

        img {
          width: 100%;
          height: 7vw;
          object-fit: cover;
        }
      }
    }

    //SUB-SECTION
    .footer-small-links-sub-section {
      display: flex;
      gap: 0.5vw;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 1vw;
      margin-right: 1vw;
      justify-content: center;

      &:empty {
        display: none;
      }

      .icon {
        position: absolute;
        height: 1vw;
        width: 1vw;
        right: 0;
        margin: 0;
      }

      .expander {
        transition: right 0.25s ease-in;
        right: 100%;
        top: 0;
        bottom: 0;
        left: 0;
      }

      .small {
        flex-grow: 0;

        .primary-text {
          padding-right: 1.25vw;
        } 
          label {
            text-decoration: underline;
          }
        }
      }
    }
  }
  
  
`