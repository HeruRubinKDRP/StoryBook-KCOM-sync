import styled from "styled-components";

export const PopUpStyled = styled.div`

  position: fixed;
  inset: 5%;
  display: flex;
  z-index: 12000000;
  box-shadow: -1px 8px 14px rgb(0 0 0 / 25%);
  border-radius: 1vw;
  &.modal-large-dimensions {
    //top: 50%;
    //left: 50%;
    //transform: translate(-50%, -50%);
    
    height: auto; 
  } 
 
  &.modal-medium-dimensions {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: none;
    right: 0;
  }

  &.modal-large-dimensions, &.modal-medium-dimensions {
    animation: moveDownFromTop 1s ease-in forwards;
    .pop-up-contents-container {
    
    }
  }


  &.modal-mobile-dimensions {
   inset: 0 !important;
    height: 100%;
    width: 100%;
    animation: moveUpFromBottom 1s ease-in forwards;
    .pop-up-contents-container {
      
    }
  }

  &.minimal-header{
    .k-panel-header{
      border-bottom: none !important;
      .close{
        label{
            display: none;
        }
      }
    }
  }

  &.veil {
    background-color: rgba(0, 0, 0, 0.25);
    inset: 0;
    backdrop-filter: grayscale(1) brightness(0.75) blur(2px);
  }

  &.white-bg{
    background-color: white !important;
  }
  
  

  .pop-up-contents-container {
   
    background-color: transparent;
    border-radius: 0.5rem;
    overflow: hidden;
    height: auto;
    width: 100%;
    min-width: 30vw;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    }
    .k-panel-header {      
      background: transparent;
      //position: absolute;
      //top: 0; 
    }

    .seo-item-container {
      padding-top: 1rem;
      padding-bottom: 2rem;

      h1 {
        font-size: 2rem;
        position: sticky;
        top: 0;
        background-color: white;
      }
    }

    .pop-up-child-content {
      //background-color: white;
      overflow-y: auto;
      height: 100%;
        width: 100%;
      min-height: 30vh;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    
    &.desktop{
      margin: 5% 10%;
    }

    &.mobile {
      margin: 0;
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
  }


`;