import styled from "styled-components";


export const CombinedComponentStyle = styled.div`
  display: flex;
  flex-direction: row;

  .right-part {
    width: 100%;
    .filters{
      margin-right: 2%;
    }
    .sale-toggle{
      margin-left: 10px;
    }
  }
`
export const FiltersContainerStyle = styled.div`
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 80px);
`;

export const ComponentFilterStyle = styled.div`
  padding: 10px 20px;
  Display: flex;
  justify-content: flex-end;
  align-items: center;

  .filters-button {
    background-color: #3B2B2F;
    padding: 5px;
    border: 0;
    font-size: 16px;
    color: white;
    cursor: pointer;
    outline: none;
    border-radius: 100vw;
    padding: 10px;
    min-width: 180px;
    margin-right: 2%;
  }

  .filters-button:hover {
    text-decoration: underline;
  }
  .ksk-toggle{
    color: #00889F;
    font-weight: 600;
    margin-right: 2%;
    display: flex;
    align-items: center;
  }
  .sort-by{
    
  }
`

export const StickyHeader = styled.div`

  .filters-button {
    background-color: #3B2B2F;
    padding: 5px;
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
export const SortSelect = styled.select`
  margin-left: 8px;
  padding: 15px 8px;
  padding-right: 30px;
  border: 2px solid #3B2B2F;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #3B2B2F;
  }
  option{
    background-color: red;
  }
`
export const SortSelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    fill: #333;
    pointer-events: none;
  }
`
