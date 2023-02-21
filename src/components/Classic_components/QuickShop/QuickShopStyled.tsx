import styled from "styled-components";

export const QuickShopStyled = styled.div`
  display: flex;
  transform: none;
  width: 90%;
  max-width: 820px;
  align-items: center;
  position: relative;
  pointer-events: none;
  box-sizing: border-box;
  //containers
  .modal-content{
    position: relative;
    background: white;
    line-height: 1;
    margin: 0;
  }
  .modal-body{
    padding: 0px;
    position: relative;
    flex: 1 1 auto;
  }
  //header area
  .close-button{

  }

  @media (min-width: 576px){
    .modal-dialog-centered {
      min-height: calc(100% - 3.5rem);
      margin: 1.75rem auto;
    }
  }

`
