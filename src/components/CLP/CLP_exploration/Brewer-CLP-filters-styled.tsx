import styled from "styled-components";

export const BrewerCLPFiltersStyle = styled.div`
  position: relative;
  display: flex;
  transition: width 0.5s ease-in-out;
  
  .filters-button {
    background-color: #3B2B2F;
    padding: 5px;
    position: fixed;
    top: 0;
    right: 0;
    border: 0;
    font-size: 16px;
    color: white;
    cursor: pointer;
    outline: none;
  }

  .filters-button:hover {
    text-decoration: underline;
  }

  .filters {
    display: flex;
    width: 340px;
    height: 100%;  
    left: 0;
    z-index: 10;
    transition: display 0.5s ease-in-out;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: sticky;
    overflow-y: auto;
    max-height: calc(100vh - 80px);
  }

  .filters ul {
    list-style: none;
    padding: 0;
    width: 280px;
  }

  .filters li {
    margin: 6px 0;
  }
`


