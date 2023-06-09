import styled from "styled-components";
import {AnimFadeIn} from "../../_commonStyles/common.styled";

export const FiltersCenterStyled = styled.div`
  width: 100%; 
  .expand-collapse{
      justify-content: space-between;
  }
  
  ul.list-container{
    width: 100% !important;
    padding: 0 5%;
  }
  
  .check-list-item{
    margin: 1rem 0;
  }
  
  .check-list-item-container{
    width: 100%;
    align-items: center;
    img{
      width: 20%;
      max-height: 7vh;
      object-fit: contain;
    }
    
  }
  
  .accordion-item{
    ${AnimFadeIn};
    animation-delay: 0.25s;
  } 
 
  
  .accordion-content-item{
    background-color: white !important;
  }
  
    
 
    
`;