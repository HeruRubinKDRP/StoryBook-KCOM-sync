import styled from 'styled-components';
import {absoluteStretch} from "../../_utilities/common-styles/common-styles";
import {absolutePositionStretch, flexCentered, flexRow} from "../../_commonStyles/common.styled";

export const FilterableCheckboxListStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
 
  .list-container{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      margin: 0 0 1.5rem !important
    }
  }
  
  .overlay-btn{
    ${absolutePositionStretch};
  }
  
  .check-list-item-container{
    ${flexRow};
    img{
      margin-left: 1rem;
    }
  }
  
  .check-container, .check-container .icon{
    ${flexCentered};
  }
  .check-list-item{
    position: relative;
  }
  
  .check-container{
    width: 2rem;
    height: 1.5rem;
    border: 1px solid;
    margin: 0 0.25rem 0 0;
    border-radius: 0.25rem;
    
   .icon{
     padding: 0.15rem;
   }
  }

  .text-area{
    margin-left: 0.75rem;;
    label{
      cursor: pointer;
      font-size: 16px;
      color: rgb(112, 80, 67);
      font-weight: bold;
      margin-right: 5px;
    }
    .checkbox-item-details{
      font-size: 12px;
      color: rgb(136, 136, 136);
      margin-top: 2px;
    }
  }
  
  
`;