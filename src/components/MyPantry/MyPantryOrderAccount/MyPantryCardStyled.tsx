import styled from 'styled-components'

export const MyPantryGridStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  &.mobile-dimensions,
  &.medium-dimensions {
    .header-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .header-container {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: #3b2b2f 1px solid;
    margin: 0 0 20px 0;

    .flexRow {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .NextShip {
      font-weight: normal;
      font-size: 16px;
      padding-left: 10px;
    }

    .ShipDate {
      font-weight: bold;
      font-size: 16px;
      padding-left: 10px;
    }

    .icon.SMART-logo {
      padding-right: 10px;
      width: 40px;
    }

    .icon-AD-Delivery {
      padding-right: 10px;
      width: 40px;
    }

    .icon-shipping-truck-no-logo {
      width: 40px;
    }
  }

  .subscription-title {
    position: relative;
    font-family: MarkOT;
    font-weight: bold;
    font-size: 21px;
    color: #3b2b2f;
  }

  .subscription-tile {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 10px;
  }


  &.large-dimensions {
    .subscription-tile {
/*      display: grid;
      grid-template-columns: repeat(4, 1fr);
      !*  grid-template-rows: repeat(2, 1fr);*!
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      gap: 10px;*/
    }
  }

  &.medium-dimensions {
    .subscription-tile {
/*      display: grid;
      grid-template-columns: repeat(3, 1fr);
      !* grid-template-rows: repeat(2, 1fr);*!
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      gap: 10px;
      padding: 0 20px;*/
    }
  }

  &.mobile-dimensions,
  &.tinyEmbedded {
    .subscription-tile {
/*      display: grid;
      grid-template-columns: repeat(1, 1fr);
      !*  grid-template-rows: repeat(1, 1fr);*!
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      gap: 10px;
      padding: 0 20px;*/
    }
  }
`
export const MyPantryCardStyled = styled.div`
  /*  flex-basis: calc(22% - 20px);
  flex-grow: 1;*/
  position: relative;

  .invisible-button {
    /*    position: absolute;*/
    height: 100%;
    width: 100%;
    inset: 0;
    z-index: 100;
    background-color: transparent;
    border: #d2d2d2 1px solid;
    padding: 1px;
    border-radius: 5px;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.SMART-active {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

        .k-btn {
          border: 2px solid #3B2B2F !important;
        }

        .expander {
          background-color: antiquewhite !important;
          inset: 0 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.AD-active {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

        .k-btn {
          border: 2px solid #3B2B2F !important;
        }

        .expander {
          background-color: antiquewhite !important;
          inset: 0 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.one-time {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

        .k-btn {
          border: 2px solid #3B2B2F !important;
        }

        .expander {
          background-color: antiquewhite !important;
          inset: 0 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.cancel {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

        .k-btn {
          border: 2px solid #3B2B2F !important;
        }

        .expander {
          background-color: antiquewhite !important;
          inset: 0 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.add-item-smart {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

        .k-btn {
          border: 2px solid #3B2B2F !important;
        }

        .expander {
          background-color: #AA8066 !important;
          inset: 0 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.add-item-ad {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

        .k-btn {
          border: 2px solid #3B2B2F !important;
        }

        .expander {
          background-color: #AA8066 !important;
          inset: 0 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.recently-purchased {
    .invisible-button {
      &:hover {
        transform: scale(1.03);

      .single-cta{
        .k-btn {
          border: 2px solid #3B2B2F !important;
        }
        .expander {
          /*
          background-color: antiquewhite !important;
          */
          inset: 0 !important;
          opacity: 1 !important;
        }
      }

        .more-than-one-CTA {
          .k-btn {
            border: 2px solid #3B2B2F !important;
          }
          .expander {
            /*
            background-color: antiquewhite !important;
            */
            inset: 0 !important;
            opacity: 1 !important;
          }
        }
        
      }
    }
  }

  &.large-dimensions {
    /*    max-width: 290px;*/
  }

  /*  .GraphicContainer .icon.icon-shipping-truck-no-logo path {
      fill: #BB9985;
      max-width: 20px;
    }*/

  .StatusLabel {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .ActiveLabel {
    background-color: rgb(2, 137, 21);
    border-radius: 7px;
    height: 14px;
    width: 14px;
  }

  .OneTimeLabel {
    background-color: rgb(170, 128, 102);
    border-radius: 7px;
    height: 14px;
    width: 14px;
  }

  .CanceledLabel {
    background-color: rgb(249, 198, 6);
    border-radius: 7px;
    height: 14px;
    width: 14px;
  }

  .StatusTitle {
    color: rgb(45, 41, 38);
    font-family: MarkOT-Medium;
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 20px;
    margin-left: 10px;
    vertical-align: middle;
    text-transform: uppercase;
    min-height: 20px;
  }

  .boxFormat {
    font-family: MarkOT;
    font-weight: 600;
    font-size: 14px;
    color: #2d2926;
  }

  .salePriceItem {
    font-family: MarkOT;
    font-weight: bold;
    font-size: 16px;
    color: #d1150c;
  }

  .strikePriceItem {
    font-family: MarkOT;
    font-weight: normal;
    font-size: 16px;
    color: #2d2926;
    text-decoration-line: line-through;
  }

  .priceItem {
    font-family: MarkOT;
    font-weight: bold;
    font-size: 16px;
    color: #2d2926;
  }

  .LoyaltyPoints {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #BB9985;
    align-items: center;
  }

  .productImageCard {
    padding: 0 20px 0 0;
  }

  .productImageCard img {
    width: 110px;
    height: 110px;
    max-width: 110px;
    max-height: 110px;
    object-fit: contain;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  }

  .ProductContent {
    display: flex;
    align-items: center;
    align-items: flex-start;
    padding: 10px 0 5px 0;
    position: relative;

    .icon.icon-product-canceled-OOO {
      height: 35px;
      width: 35px;
      background-color: white;
      border-radius: 100vw;
    }
  }

  .GraphicSmart-AD {
    display: flex;
    justify-content: center;

    .icon.SMART-logo {
      width: 100px !important;
      height: 100px !important;
      max-width: fit-content !important;
    }

    .icon-AD-Delivery {
      width: 100px !important;
      height: 100px !important;
      max-width: fit-content !important;
    }
  }

  .ProductInfo {
    display: flex;
    flex-direction: column;
    width: 100%;

    .InfoContainer {
      display: flex;
      padding: 8px 0;
      border-bottom: #F2F2F2 1px solid;
      align-items: center;

    }

    .icon-container {
      width: 44px;
      min-width: 44px;
    }

    .Container {
      display: flex;
      flex-direction: row;
      padding: 8px 0;
      align-items: flex-start;
    }

    .brandName {
      font-family: MarkOT;
      font-weight: normal;
      font-size: 14px;
    }

    .productName {
      font-family: MarkOT;
      font-weight: normal;
      font-size: 14px;
    }
  }

  .textShipDate {
    font-weight: bolder;
  }

  .InfoContainerCount {
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
  }

  .CountContainer {
    display: flex;
    align-items: baseline;
  }

  .icon {
    height: 25px;
    max-width: 35px;
  }

  /*  .GraphicContainer {
      display: flex;
    }*/

  .GraphicTruckContainer .icon.icon-shipping-truck-no-logo {
    max-height: 14px;
  }

  .CountLeft {
    color: rgb(45, 41, 38);
    font-family: MarkOT-Bold;
    font-weight: bold;
    font-size: 22px;
    padding: 0 5px 0 0;
  }

  .CountBox {
    color: rgb(45, 41, 38);
    font-family: MarkOT-Bold;
    font-weight: bold;
    font-size: 22px;
    padding: 0 5px 0 0;
  }

  .NextShip, .text {
    font-family: MarkOT;
    font-weight: normal;
    font-size: 14px;
  }

  .ShipDate {
    font-family: MarkOT-Bold;
    font-weight: bold;
    font-size: 15px;
  }

  .bottomPart {
    border-top: #F2F2F2 1px solid;
    padding: 10px 0 0 0;
    font-family: MarkOT;
    font-weight: normal;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 65px;
    align-items: flex-start;
    justify-content: center;

    .k-btn {
      margin: 0.1rem 0;
    }
  }

  .flexRow {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .life-bar-container.KCOM {
    max-width: 6rem;
    background-color: #F7F6F5;
    border: 1px solid #d2d2d2;

    .life-bar {
      background-color: #3b2b2f !important;
    }
  }

  .content-area {
    padding: 10px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .center {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .ProductContent {
        align-items: center;
      }
    }
  }

  .add-items-container {
    background-color: rgb(253, 232, 155);
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottomPart {
      border: none;
    }
  }

  .canceled {
    background-color: rgb(231, 228, 223);
    padding: 10px 10px 0 10px;
    height: 100%;

    img {
      filter: saturate(0%) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25)) opacity(0.6);
    }

    .center {
      .ProductContent {
        align-items: center;
      }
    }

    .iconCanceled {
      position: absolute;
      top: 10px;
      left: 84px;
      z-index: 10;
    }
  }

  .canceledBottomPart {
    border: none;
    background-color: #ffffff;
    padding: 10px;
  }

  .OneTime {
    font-family: MarkOT;
    font-weight: bold;
    font-size: 18px;
    min-height: 35px;
    min-width: 35px;
    background-color: white;
    border-radius: 100vw;
    border: 2px #3b2b2f solid;
    position: absolute;
    left: 84px;
    top: 10px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`