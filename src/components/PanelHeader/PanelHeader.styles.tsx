import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";


export const PanelHeaderStyles = styled.div`

  .page-level-nav{
    backdrop-filter: blur(8px) brightness(0.5);
  }
  
  &.mobile-dimensions{
    .close.right{
      label{
        display: none;
      }
    }
  }
    
    top: 0;
    background: white;
    width: 100%;
    border-bottom: 1px solid #CECECE;
    justify-content: space-between;
    z-index: 200;
    min-height: 4rem;
    border-bottom: 1px solid ${colorNameToValue("sepia")};
    padding: 0.5rem 0 0.5rem 0;
  
  .header-container{
    width: 100%;
    display: flex;
    flex-flow: row;
  }
  
  .left, .right{
    flex-basis: 20%;
    display: flex;
    flex-direction: row;
    
  } 
  .right{
    justify-content: flex-end;
  }
  
  .left{
    justify-content: flex-start;
  }
  
  .middle{
    flex-basis: 60%;
  }
    .icon{
      max-width: 1.75rem;
      max-height: 1.25rem;
      min-height: 0.75rem;
      min-width: 0.75rem;
      margin-bottom: 0.25rem;
    }
    .panel-header-label{
      color: $text;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      pointer-events: none;
    }
    .k-btn.close{
      background-color: transparent !important;
      width: 4rem;
      label{
        display: block;
      }
      .filled{
        fill : ${colorNameToValue("dark-roast")};
      }
    }
 

  .width-between-100-and-399{
    .k-btn.close{
      label{
        display: none;
      }
    }
  }

  .width-between-400-and-999{
    .k-btn.close{
      label{
        display: none;
      }
    }
  }

`