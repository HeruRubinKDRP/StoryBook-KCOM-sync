import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

//SIDE BAR section "graveyard"
export const linkGraveyardStyled = css`
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
      padding: 1vw 0.5vw;
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
        opacity: 0;
        display: none;
        position: absolute;
        right: 0;
        height: 1vw;
        width: 1vw;
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
    
//*** PROMO inside the graveyard ***///
    .promo {
      flex: 0 1 auto;
    }
    
//*** SMALL nav items ***///
    .small {
      border-bottom: 1px solid ${colorNameToValue("sepia")};
      display: flex;
      align-items: flex-start;      
      
      label {
        font-size: clamp(0.75rem, 1vw, 1.25rem);
        line-height: clamp(0.85rem, 1.1vw, 1.35rem);
        padding: clamp(0.25rem,0.75vw,1.25rem) clamp(0.25rem,3vw, 3rem) clamp(0.25rem,0.75vw,1.25rem) clamp(0.25rem, 1.5vw, 2rem);
        transition: color 0.25s ease-out;
      } 
      .expander{
        right: 100%;
        bottom: 0;
        opacity: 0;
        height: 100%;
        transition: 0.5s right ease-in, 0.25s opacity ease-in;
      }
      .fill{
        transition: fill 0.25s ease-out;
      }
      
      &:hover{ 
        label{
          color: white;
        }
        .expander {
          right: 0;
          opacity: 1;
        }
        .filled{
          fill: white;
        }
      }
    }    


//*** Clean up empties ***///
    &:empty {
      display: none;
    }
  }


  
`