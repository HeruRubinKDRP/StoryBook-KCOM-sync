import styled from "styled-components";

export const CellBasicStyled = styled.div`
  border: 1px solid rgba(88,88,88,0.1);
  border-radius: var(--space-3xs-2xs); 
  overflow: hidden;
  position: relative;
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
  .highlight-image{
    object-fit: cover;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: auto;
    top: auto;
    width: 100%;
    z-index: 200;
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
    z-index: 100;
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
  
   
`