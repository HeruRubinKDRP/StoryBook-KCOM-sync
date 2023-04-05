import styled from "styled-components";

export const MyPantryStyle = styled.div`
background-color: red!important;
  .ABC {
    font-size: 100px
  }

  &.large-dimensions {
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

  &.mobile-dimensions,
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
`;