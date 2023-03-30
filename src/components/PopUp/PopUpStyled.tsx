import styled from "styled-components";

export interface iPopUpStyled {
    width?: string;
    height?: string;
    sizeMode? : "auto" | "full-screen";
}

export const PopUpStyled = styled.div<iPopUpStyled>`

  position: fixed;
  inset: 5%;
  display: flex;
  z-index: 12000000;
  box-shadow: -1px 8px 14px rgb(0 0 0 / 25%);
  border-radius: 1vw;

  --pop-up-width: ${props => props.sizeMode === "full-screen" ? "90%" : "auto"};
  
  &.modal-large-dimensions { 
    // 90% to account for 5% offset on each side 
    // or auto depending on component sizeMode prop
    height: var(--pop-up-width);
    width: var(--pop-up-width);
  }

  &.modal-medium-dimensions { 
    height: 90%;
    width: 90%;
    transform: none;
 
  }

  &.modal-large-dimensions, &.modal-medium-dimensions {
    animation: moveDownFromTop 1s ease-in forwards;
  }


  &.modal-mobile-dimensions {
    inset: 0 !important;
    height: 100%;
    width: 100%;
    animation: moveUpFromBottom 1s ease-in forwards;
  }

  &.minimal-header {
    .k-panel-header {
      border-bottom: none !important;

      .close {
        label {
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

  &.white-bg {
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

  &.desktop {
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