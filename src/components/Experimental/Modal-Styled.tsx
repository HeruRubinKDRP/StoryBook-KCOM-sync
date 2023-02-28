import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  &.modal-large-dimensions { 
    top: 50%;
    left: 50%;
    height: auto;
    width: 90%;
    transform: translate(-50%, -50%);
  }
  
  &.modal-medium-dimensions {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: none;
    right: 0;
  }
  
  
  
  &.modal-mobile-dimensions{ 
    right: 2%;
    bottom: 0;
    height: 100%;
    width: 100%;
    top: 0; 
  }

`