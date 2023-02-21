import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const mobileCommonNotFullyResponsive = css`
//*** hide the mobile specific stuff when in desktop mode
  .mobile-back-menu {
    display: none;
  }
  .menu-btn {
    display: none;
  }

  .closer {
    display: none;
  }
 
  &.mobile{ 

    
    .link-graveyard {
      // to counteract gap in flexbox
      margin-bottom: -4vw;

      .highlight-by-color .icon{
      margin-right: 16px;
      }
      .primary-text {
        padding: 12px 0 12px 10px;
        font-size: 16px;
      }
    }
    
    .main-navigation-container nav{
      .email-collector-container{ 
        .k-btn.primary.expand-bg{
          padding: 1rem 1.75rem;
          background-color: ${colorNameToValue("dark-roast")} !important;
          label{
            color: white !important;
          }
        }
      }
    }
    
    .nobo{
      display: none;
    }
    .features-list{
      text-align: left !important;
    }
    .nav-item-container{
      &.large{
        .nav-item-image{
          padding: 2vh 25vw 4vh 25vw;
        }
      }
    } 
    
    .nav-sections-main{
      button.k-btn.primary.expand-bg{
        &:hover{
          label{
            color : white !important;
          }
        }
      }
    } 
    
    
  }

  
`;