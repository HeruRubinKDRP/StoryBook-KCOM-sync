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
  &.MyPantryPopUp{
    .pop-up-contents-container{background-color: #fff;
      &.mobile,
      &.tinyEmbedded {
        .main-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          justify-content: space-between;
        }

        .TwoColContainer {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .TabNavContainer {
          width: 100%;
          padding: 20px 0;
        }

        .ProductInfoContainer {
          border-right: none;
          border-bottom: 1px solid #ECE9E4;
          padding: 20px 0;
        }

        .EditSubscriptionContainer {
          padding: 20px;
        }
      }
    }
    &.medium-dimensions {
      .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }

      .TabNavContainer {
        width: 100%;
        padding: 20px 0;
      }

      .ProductInfoContainer {
        border-right: 1px solid #ECE9E4;
        padding: 20px;
      }

      .EditSubscriptionContainer {
        padding: 20px;
      }
    }



    //All Breakpoints
    .pop-up-contents-container {
      background-color: #fff;
      margin: auto !important;
      height: fit-content !important;
      /*
      min-height: 450px;
      */
      max-height: 90vh;
      max-width: 90vw !important;

      .k-panel-header {
        position: relative;
      }
    }

    .main-content {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: stretch;
      justify-content: space-between;
    }


    .ProductInfoContainer {
      width: 100%;
      min-width: 30vw;
      padding: 0 20px;
      border-right: 1px solid #ECE9E4;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }

    .EditSubscriptionContainer {
      width: 100%;
      min-width: 30vw;
      padding: 0 20px;
    }

    .TabNavContainer {
      background-color: rgb(236, 233, 228);
      display: flex;
      flex-direction: row;
      height: auto;
      justify-content: center;
      align-items: center;
      min-width: 30vw;
    }

    .TwoColContainer {
      width: 100%;
      height: auto;
      min-width: 60vw;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-evenly;
    }

    .ShippingAddress {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 20px
    }

    .PaymentInformation {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 20px;
    }

    .k-btn {
      margin: 10px 0;
    }

    .bottom-panel {
      border-top: 1px solid #ECE9E4;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .bottom-content {
      padding: 0 20px;
    }
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
    z-index: 1000;
    position: relative;
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
    overflow-y: auto;
    height: 100%;
    width: 100%;
    min-height: 30vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
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