import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

//SIDE BAR section "graveyard"
export const linkGraveyardNotFullyResponsive = css`
  .link-graveyard {
    //outer graveyard should be 25%
    width: 25%;
    padding: 1vw 0.5vw;
    background: linear-gradient(270deg, #fff 0%, #f5f4f1 100%);
    flex-grow: 0 !important;
    //inner graveyard
    .link-graveyard {
      //inner graveyard should stretch to 100% x&y
      height: 100%;
      width: 100%;
      padding: 0;
    }

    //stack in a column
    .nav-items-area {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    //container that holds the links
    .nav-item-container {
      width: 100%;
      align-self: stretch;

      //for all labels in the nav menu
      label {
        transition: 0.25s color;
        z-index: 2;
      }

      //the expander is the box that appears when you hover over a product      
      .expander {
        right: 100%;
        left: 0;
        opacity: 0;
        transition: 0.5s right, opacity;
        background-color: ${colorNameToValue("dark-roast")};
      }
      
      // chevron icon
      .chevron-right {
        display: none;
      }

      a {
        width: 100%; 
        label {
          z-index: 2;
        }
      }

      .child-content {
        z-index: 1;
      }

      .expander {
        z-index: 0;
      } 
    }

//*** by size. aka navLink mode

//*** ARTICLE LARGE ***///

    .article-large {
      .nav-item-image {
        overflow: hidden;
        width: 98% !important;
        height: auto !important;
        border-radius: 1vw;
      }
      
      .text-container{
        padding: 0;
        .primary-text{
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -1.6px;
          line-height: 25px;
          text-align: left;
          height: auto;
          max-width: 100%;
        }
      }

      &:hover {
        label {
          color: ${colorNameToValue("dark-roast")} !important;
        }

        .expander {
          background-color: white;
          border: 2px solid ${colorNameToValue("dark-roast")};
        }
      }
    }
    

    



//*** Clean up empties ***///
    &:empty {
      display: none;
    }
  }


  
`