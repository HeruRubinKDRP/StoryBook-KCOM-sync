
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";
import {css} from "styled-components";
export const navItemMediumNotLiquid = css`
//*** COMMON RULES
  .nav-item-container{
    &.medium {
      align-self: flex-start;
      padding: 8px 0 !important;

      .nav-item-image {
        border-radius: 100vw;
        overflow: hidden;
        height: 50px;
        width: 50px;
        max-height: 51px; 
        margin: 0 8px 0 0;
        display: block;        
      }

      display: flex;
      flex-direction: row;

      .icon {
        width: 1vw;
        height: 1vw;
        transform: translateX(0.25vw);
      }

      .text-container {
        padding: 0.25vw;
      }

      .primary-text {
        line-height: 18px;
        margin: 0;
        text-align: left;
        padding: 0;
        //font-size: clamp(0.75rem, 1.15vw, 1.5rem);
        //line-height: clamp(0.75rem, 1.1vw, 1.5rem);
        font-weight: 400;
        display: inline-flex;
        align-items: center;
      }
      
      a.medium{
        flex-direction: row;
      } 
      
      
    }
  }

  .section-container.links{
    .nav-item-container{
      &.medium {
        .chevron-right {
          display: none;
        } 

        &:hover {  
          .filled {
            fill: white;
          }

          label {
            text-decoration: underline;
          }         

          .expander {
            
          }
        }
      }
    }
  }

`;