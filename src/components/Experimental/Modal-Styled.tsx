import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 9000;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: grayscale(1) blur(3px);
  
  &.modal-small-dimensions {
    .mobile-only{
      display: block;
    } 
    .desktop-only{
      display: none;
    }
    
     
    position: absolute;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    inset: 0 !important;
      justify-content: flex-start;
    animation: moveUpFromBottom 1s ease-in forwards;
    flex-direction: column;
  }
  
  .add-to-cart-journey-small{
    top: 0;
  } 

  .pacifier{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    .loading-graphic{
      width: auto;
      height: auto;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

`