import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

interface iStyledRating {
    containerHeight : number;
}

export const StyledRating = styled.div<iStyledRating>`
  --containerHeightBase: ${props => props.containerHeight + 'px'};
  --containerHeight: calc(var(--containerHeightBase) * 0.8);
  --medGray: ${colorNameToValue("medium-grey")};
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  overflow-y: visible;

  .stars-container{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
    height: 100%;
  }

   .rating-info{
     font-size: calc(var(--containerHeight) * 0.8);
     white-space: nowrap;
     span{
       padding: 0 8%;
     }
   }

  .ratings-data{
    margin-left: 0.5rem;
    margin-top: 2px;
  }
  
  .star-bg{
    fill: var(--medGray);
  } 

  .rating-container{
    display: flex;
    .star-base{
      .filled{
        fill : var(--medGray);
      }
      .dark-bg{
        fill: var(--medGray);
      }
    }
  }
  .rating-container{
    width: auto;
    position: relative;
    .ratings-data{
      display: flex;
    }
    .stars-container{
      display: flex;
      position: absolute;
      top:0;
      z-index: 1;
    }
    .life-bar-container{
      position: absolute;
      top: 0;
      z-index: 0;
      &.KCOM{
        border-radius: 0 !important;
        border: none !important;
        background-color: $sepia;
        width: 100%;
        height: 100%;
        margin-top: 3px;
      }
    }
  }
  
`;