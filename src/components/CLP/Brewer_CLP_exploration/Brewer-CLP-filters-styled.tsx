import styled from "styled-components";

export const BrewerCLPFiltersStyle = styled.div`
  /*FILTERS*/
  /*
  z-index: 2001;
  */
  position: relative;
  display: flex; /* or display: flex; */
  transition: width 0.5s ease-in-out;

  /*  .filters-container {
    position: relative;
    display: flex; !* or display: flex; *!
    transition: width 0.5s ease-in-out;
  }*/

  .filters-button {
    background-color: #3B2B2F;
    padding:5px;
    position:fixed;
    top:0;
    right:0;
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
    width: 340px;
    height: 100%;
    background-color: white;
    box-shadow: 8px 12px 12px rgba(0,0,0,0.1);
    position: sticky;
    top: 100;
    left: 0;
    z-index: 10;
    transition: display 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .filters ul {
    list-style: none;
/*    margin-left: auto;
    margin-right: auto;*/
    padding: 0;
/*    border-bottom: solid 1px aqua;*/
  }

  .filters li {
    width: 250px;
    margin: 16px 0;
/*    display: flex;
    align-items: center;*/
  }
`


