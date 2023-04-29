import styled from "styled-components";


export const CombinedComponentStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ComponentFilterStyle = styled.div`
  padding: 10px 20px;
  Display: flex;
  justify-content: flex-end;
  
  .filters-button {
    background-color: #3B2B2F;
    padding:5px;
    border: 0;
    font-size: 16px;
    color: white;
    cursor: pointer;
    outline: none;
    border-radius: 100vw;
    padding: 10px;
    min-width: 180px;
  }

  .filters-button:hover {
    text-decoration: underline;
  }  
`

export const StickyHeader = styled.div`
 
  .filters-button {
    background-color: #3B2B2F;
    padding:5px;
    border: 0;
    font-size: 16px;
    color: white;
    cursor: pointer;
    outline: none;
    border-radius: 100vw;
    padding: 10px;
    min-width: 180px;
  }

  .filters-button:hover {
    text-decoration: underline;
  }  
`