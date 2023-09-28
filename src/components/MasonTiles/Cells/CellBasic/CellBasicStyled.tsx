import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export const CellBasicStyled = styled.div`
  border: 1px solid rgba(88,88,88,0.1);
  border-radius: var(--step--6); 
  overflow: hidden;
  position: relative;
  *{
    box-sizing: border-box;
  }
  .background-image{}
  .highlight-image{
    object-fit: cover;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: auto;
    top: auto;
    width: 100%;
    z-index: 100;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 0;
  }
  .cell-content {
    position: relative;
    z-index: 200;
    width: 40%;
    height: 100%;
    padding: var(--space-medium);
    h3{
      margin : var(--space-small) 0;
      font-size: var(--step--2);
    }
    p{
      margin: var(--space-small) 0;
    }
  }

  .background-image{
    color: transparent;
    bottom: 0;
    height: auto;
    align-self: stretch;
    display: flex;
  }
  
  &.hero{
    .background-image{
      top: 0;
    }
  }
  
  &.banner{
    .cell-content{
      display: flex;
      width: 100%;
      h3{
        font-size: var(--step-0);
        display: inline;
        margin: 0;
      }
      
    }
  }
  
  &.top-title{
    border: 1px solid rgba(88,88,88,1);
    .background-image{
      color: transparent;
      bottom: 0;
      height: 85%;
      width: 100%;
      align-self: stretch;
      display: flex;
    }
    
    .cell-content{
      width: 100%;
      text-align: center;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text-area{
        width: 100%;
        height: 15%;
        border-bottom: 1px solid #473036;
        color: #473036;
      }
      .cell-cta.k-btn{ 
        width: auto;
        height: 2rem;
        justify-content: center;
        
        label{
          color: ${colorNameToValue("dark-roast")};
        } 
        
        background-color: white !important;
        align-self: flex-end;
        margin: var(--space-small);
        .stroked{
          stroke-width: var(--space-tiny); 
        }
      }
    }
  }
  
  &.highlight-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(88,88,88,0.1);
    .cell-content{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-content: center;
      flex-wrap: wrap;
      align-items: center;
    }
    .highlight-image{
      position: relative;
      width: 100%;
      height: 50%;
      padding: 0 1rem;
    }
    .text-area{
      text-align: center;
    }
    
  }
  
  &.chat-text{
    display: flex;
    flex-direction: column;
    background-color: var(--colorSecondaryGold) !important;
    .cell-content {
      position: relative;
      z-index: 200;
      width: 100%;
      height: auto;
      padding: var(--space-medium);
      h3{ 
          margin: var(--step--6) var(--step--6) var(--step--6) 0;
          font-size: var(--step--4); 
      }
    } 
    .text-area{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .actions{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      gap: var(--step--6);
      padding: var(--step--6);
      .k-btn {
        border: 1px solid #ecd8c1 !important;        
        font-size: var(--step--6) !important;
        padding: var(--step--6) var(--step--4) !important;
        label{
          font-weight: 400;
        }
      }
    }
  }
 
  
  
   
`