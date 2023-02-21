import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const styledFixedTopNavThemes = css`
  .global-navigation {
    width: 100%;
  }

  .top-level-nav-items-container{
    background-color: ${colorNameToValue("sepia-light")};
  }
  
  .free-shipping-message{
    font-size: 14px;
    color: #000000;
    margin-right: 34px;
    text-transform: uppercase;
  }
  
  .account-placeholder{ 
    background-color: #ece9e4;
    height: 500px;
    width: 300px;
    border-radius: 12px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
    position: absolute;
    z-index: 1000;
    transform: translateX(-50%);
    margin-top: 8px;
    border: 1px solid #c4c4c4;
  }

  .search-placeholder{ 
    border-radius: 100vw;
    overflow: hidden;
    border: 1px solid #d2d2d2; 
    box-sizing: border-box;
    height: 40px;
    width: 600px;
    max-width: 600px;
    background-color: #F3F3F3;
  }

`;