// Styled-components
import styled from "styled-components";

export const GridStyled = styled.div`
  display: grid;
  min-height: 20vh;
  grid-template-columns: repeat(12,1fr);
  grid-gap: var(--space-medium);
  grid-template-rows: repeat(10,auto);
  *{
    box-sizing: border-box;
  }
  .cell-base{
    display: flex;
  }
  &.layout1{
    .cell-0{
      grid-row-start: 2;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 13;
    }
    .cell-1{
      grid-row-start: 3;
      grid-row-end: 5;
      grid-column-start: 1;
      grid-column-end: 7;
    }
    .cell-2{
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 7;
      grid-column-end: 13;
    }
    .cell-3{
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 1;
      grid-row-end: 1;
    }
    .cell-4{
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 5;
      grid-row-end: 6;
    }
    .cell-5{
      grid-row-start: 4;
      grid-row-end: 5;
      grid-column-start: 7;
      grid-column-end: 13;
    }
    .cell-6{

    }
  }

  &.layout2{
    .cell-0{
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 5;
    }

    .cell-1 { 
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 5;
      grid-column-end: 13;
    }
    
    .cell-2{
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 5;
      grid-column-end: 13;
    }
  }
`;

