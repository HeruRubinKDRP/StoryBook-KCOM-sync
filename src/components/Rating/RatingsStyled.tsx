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
        fill : $medium;
      }
      .dark-bg{
        fill: $medium
      }
    }
  }
  
  
`;