import styled from "styled-components";

export const StyledRangeSlider = styled.div`
  .product-card-container {
    display: flex; 
  }
  .ksk-range-slider{
    width: 100%;
  }

  .ksk-product-card {
    border: 1px solid black;
    padding: 1vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border-radius: 1vw;
  }
  .name-your-price-controls{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  
`;