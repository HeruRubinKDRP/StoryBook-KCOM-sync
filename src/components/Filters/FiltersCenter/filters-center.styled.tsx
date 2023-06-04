import styled from "styled-components";
import {AnimFadeIn} from "../../_commonStyles/common.styled";

export const FiltersCenterStyled = styled.div`
    .expand-collapse{
      justify-content: space-between;
    }
  
  .accordion-item{
    ${AnimFadeIn};
    animation-delay: 0.25s;
  } 
 
  
  .accordion-content-item{
    background-color: white !important;
  }
  
    width: 100%;
 
    
`;