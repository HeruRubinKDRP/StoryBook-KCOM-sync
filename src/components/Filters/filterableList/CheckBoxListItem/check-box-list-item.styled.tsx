import styled from "styled-components";

export const FiltersInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


export const FilterListItem = styled.li`
  display: grid;
  align-items: center;
  margin-bottom: 5px;
  .selection-main{
    display: flex;
    align-items: center;
  }
`;

export const FiltersCheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

export const FiltersLabelStyled = styled.label`
  cursor: pointer;
`;

export const NoResults = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ClearButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
`;