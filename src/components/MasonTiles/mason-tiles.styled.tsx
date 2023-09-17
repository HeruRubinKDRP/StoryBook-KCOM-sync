// Styled-components
import styled from "styled-components";

export const GridStyled = styled.div`
  display: grid;
  max-height: 80vh;
  grid-template-columns: repeat(12,1fr);
  grid-gap: var(--space-medium);
  grid-template-rows: repeat(12, 1fr); 
  .cell-base{
    display: flex;
  }
  &.layout1{
    .cell-0{
      grid-row-start: 2;
      grid-row-end: 6;
      grid-column-start: 1;
      grid-column-end: 13;
    }
    .cell-1{
      grid-row-start: 6;
      grid-row-end: 9;
      grid-column-start: 1;
      grid-column-end: 7;
    }
    .cell-2{
      grid-row-start: 6;
      grid-row-end: 9;
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
      grid-row-start: 9;
      grid-row-end: 11;
    }
    .cell-5{

    }
    .cell-6{

    }
  }
`;

