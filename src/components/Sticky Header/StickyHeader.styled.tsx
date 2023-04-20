import styled, {css} from "styled-components";

export const StickyStyled= styled.div`
  position: relative;
  z-index: 2000;
  
  .main-navigation{
    &.full{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2000;
    }  
  }
    
 
  
`