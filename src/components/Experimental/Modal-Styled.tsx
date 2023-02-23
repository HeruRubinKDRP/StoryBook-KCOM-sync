import styled from "styled-components";

export const ModalStyled = styled.div`

  &.modal-large-dimensions{
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    width: 90%;
    transform: translate(-50%, -50%);
  }
  
  &.modal-mobile-dimensions{
    
    right: 2%;
    bottom: 5%;
    height: 100%;
    width: 100%;
   
  }

`