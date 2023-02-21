import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const navItemSmallNotFullyResponsive = css`

  .small {
    position: relative;
    flex: 0 1 auto;
    .expander{
      display: none !important;
    }

    .text-container {
      display: inline-flex;
      flex: 0 1 auto;
      padding: 0 !important;
    }
    .primary-text {
      list-style: none;
      border-bottom: 1px solid #ece9e4; 
      font-size: 14px;
      letter-spacing: -.1px;
      line-height: 18px;
      text-align: left;
      margin: 0;
      padding: 6px 0 6px 10px;
      min-height: 35px;
    }
  }


  //INSIDE LINKS GRAVEYARD 
  //*** SMALL nav items  ***///
  .small {
    border-bottom: 1px solid ${colorNameToValue("sepia")};
    display: flex;
    align-items: flex-start;
 
    .expander{
      display: none !important;
    } 

    &:hover{
      label{
        text-decoration: underline;
      }
    }
  }

`;