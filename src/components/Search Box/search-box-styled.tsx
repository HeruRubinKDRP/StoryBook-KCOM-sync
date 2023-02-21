import styled from "styled-components";

export const SearchStyled = styled.div`
  /* Styling for the container element to give it a rounded pill shape */
  border-radius: 20px;
  background-color: white;
  display: flex;

  /* Animation for the active, hover, and focus states */
  transition: all 0.2s;
  &:hover, &:focus, &.active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  /* Styling for the text input to add padding and place the icon */
  .search-input{
    padding: 0 40px 0 10px;
    border: none;
    font-size: 16px;
    &::placeholder {
      color: gray;
    }
  }
`;

const Input = styled.input`
  
`;

const IconContainer = styled.div`
  /* Styling for the icon container to position it within the text input */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 20px;
  height: 20px;
`;

const SearchIcon = styled.div`
  /* Styling for the search icon */
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
`;

const ResultsContainer = styled.div`
  /* Styling for the results container */
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`;

const ResultsSection = styled.div`
  /* Styling for the results sections */
  & + & {
    margin-top: 10px;
  }
`;

const ClearButton = styled.button`
  /* Styling for the clear button */
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;