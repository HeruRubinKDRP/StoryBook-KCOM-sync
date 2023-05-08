import styled, {Interpolation} from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {cardBorder, UI_rules} from "../reusable css/reusable-css";


export interface LargeAddToCartTheme {
    outerWidth: number;
    heightY: number;
    actionBarHeight: number;
    dynamicStyles: Interpolation<any>
}

export const StyledLargeAddToCart = styled.div<LargeAddToCartTheme>`

  // variables
    // --overallWidth: ${(props) => props.outerWidth + 'px'};

  ${props => props.dynamicStyles};

  --button-size: calc(var(--overallWidth) * 0.02);
  --buttonLarge: calc(var(--overallWidth) * 0.065);
  --buttonMedium: calc(var(--overallWidth) * 0.035);

  --iconStroke: calc(var(--overallWidth) * 0.019);
  --iconStrokeTiny: calc(var(--overallWidth) * 0.002);
  --iconStrokeSmall: calc(var(--overallWidth) * 0.002);
  --iconStrokeMedium: calc(var(--overallWidth) * 0.01);
  --iconStrokeLarge: calc(var(--overallWidth) * 0.01);

  --iconSize: calc(var(--overallWidth) * 0.5 * 0.05);
  --iconSizeLarge: calc(var(--overallWidth) * 0.05);

  --fontHuge: calc(var(--overallWidth) * 0.025 + 24px);
  --fontLarge: calc(var(--overallWidth) * 0.03 + 18px);
  --fontMedium: calc(var(--overallWidth) * 0.015 + 14px);

  --fontSmall: calc(var(--overallWidth) * 0.02 + 12px);
  --fontTiny: calc(var(--overallWidth) * 0.01 + 6px);

  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorGreen: ${colorNameToValue("OK-Status")};
  --colorLatte: ${colorNameToValue("latte")};
  --colorSepia: ${colorNameToValue("sepia")};

  --productImageSize: calc(var(--overallWidth) * 0.25);

  --spacingLarge: calc(var(--overallWidth) * 0.05);
  --spacingMedium: calc(var(--overallWidth) * 0.025);
  --spacingSmall: calc(var(--overallWidth) * 0.015);
  --spacingTiny: calc(var(--overallWidth) * 0.0075);

  --boxShadowLarge: 0 calc(var(--button-size) * 0.12) calc(var(--button-size) * 0.22) calc(var(--button-size) * 0.053) rgba(0, 0, 0, 0.25);
  --boxShadowHuge: 0 calc(var(--button-size) * 0.36) calc(var(--button-size) * 0.22) calc(var(--button-size) * 0.053) rgba(0, 0, 0, 0.25);

  /*  top: 0;
    position: fixed;*/
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110000000000;

  .product-name {
    height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cart-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  //top area that informs of success
  .hide-label-mobile .k-btn label {
    font-size: 12px;
  }

  .cart-message {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: clamp(4px, ${(props) => props.theme.heightY * 0.005}px, 24px);

    p {
      color: var(--colorGreen);
      font-size: 14px;
      font-weight: 600;
      /*   white-space: nowrap;*/
    }

    .checkmark-circled {
      margin-right: var(--spacingTiny);
      margin-bottom: 0;
      height: 18px;
      width: 18px;

      .filled {
        fill: var(--colorGreen);
      }

      .stroked {
        stroke: var(--colorGreen);
        stroke-width: var(--iconStrokeSmall);
      }
    }
  }

  .product-message {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: clamp(4px, ${(props) => props.theme.heightY * 0.005}px, 24px);

    p {
      color: var(--colorGreen);
      font-size: 16px;
      font-weight: 400;
      /*     white-space: nowrap;*/
    }

    .checkmark-circled {
      margin-right: var(--spacingTiny);
      margin-bottom: 0;
      height: var(--fontTiny);
      width: var(--fontTiny);

      .filled {
        fill: var(--colorGreen);
      }

      .stroked {
        stroke: var(--colorGreen);
        stroke-width: var(--iconStrokeSmall);
      }
    }
  }

  /*  .back-fill {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: calc(100% - 50vh);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
    }*/

  .modal-item {
    ${cardBorder};
    box-shadow: var(--boxShadowLarge);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /*    position: fixed;
        bottom: 0;
        left: 0;
        right: 0;*/
    border-radius: var(--spacingTiny);
    /*margin: 0 10% 5% 10%;*/
    /*    margin: 0 auto 5%;*/
    max-width: 860px;
    /*    min-width: 80%;*/
    /*    max-height: 55%;*/
    z-index: 100000000000;
    background-color: white;
  }

  img {
    object-fit: contain;
  }

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes scaleRight {
    0% {
      width: 0 !important;
    }
    100% {
      width: 100% !important;
    }
  }
  transform: translateY(100%);
  animation: slideInFromBottom 0.6s ease-in-out forwards;
  animation-delay: 0.2s;

  .shop-all-cta {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;

    .k-btn {
      margin: 0 5%;
    }

    .shop-more-btn {
      margin: 0 !important;

      &.left {
        border-radius: 100vw 0 0 100vw !important;
        border-right-width: 0 !important;

        .expander {
          border-radius: 100vw 0 0 100vw !important;
          border-right-width: 0 !important;
        }
      }

      &.right {
        border-radius: 0 100vw 100vw 0 !important;
      }

      .expander {
        border-radius: 0 100vw 100vw 0 !important;
      }
    }
  }

  .close-btn {
    padding: var(--spacingTiny);
    width: auto;
    height: auto;

    .icon {
      margin-left: 10px !important;
      height: 1.25rem;
    }
  }

  .icon {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: visible;

    svg {
      overflow: visible;
    }
  }

  .content-area {
    display: flex;
    flex-direction: column;
  }

  .header-area {
    padding: 10px;
    border-bottom: 1px solid var(--colorLatte);
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;

    .free-shipping-indicator, .free-shipping-placeholder-inner {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .free-shipping-placeholder-inner {
      display: flex;
      align-items: center;
      gap: var(--spacingTiny);

      p {
        font-size: var(--fontTiny);
        color: var(--colorDarkRoast);
      }

      .free-shipping-truck {
        height: var(--iconSizeLarge);
        width: var(--iconSizeLarge);

        .stroked {
          stroke-width: var(--iconStrokeTiny);
        }
      }
    }
  }

  .actions-container, .suggested-products-container .suggested-products {
    display: flex;
    gap: var(--spacingTiny);
    justify-content: center;

    .k-btn {
      /*
      width: 50% !important;
      */
      /*      padding: var(--spacingSmall) var(--spacingSmall);*/

            label {
              font-size: calc(var(--fontTiny));
            }
    }
  }

  .product-area {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
    flex-wrap: wrap;
    /*    gap: calc(var(--spacingSmall) );*/
    padding: var(--spacingSmall) var(--spacingTiny);


    .product-added, .actions-container {
      /*      width: 100%;*/
    }

    .product-added {
      display: flex;
      flex: 1;
      align-items: center;
      height: 180px;
      width: 100%;

      .product-image {
        padding-right: 2%;
        width: calc(var(--productImageSize) * 0.4);
        height: calc(var(--productImageSize) * 0.3);
        min-width: 160px;
        min-height: 140px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .product-status-area {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .product-name-area {
          display: flex;
          flex-direction: column;
          margin-top: var(--spacingTiny);

          .brand {
            font-weight: 200;
            /*            font-size: calc(var(--fontTiny) * 0.65);*/
          }

          .product-name {
            font-size: 16px;
            font-weight: 200;
            padding-right: 5%;
          }
        }
      }
    }
  }

  .suggested-products-container {
    width: 100%;
    min-width: 25%;
    background-color: var(--colorSepia);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: var(--spacingTiny);

    .suggested-products, .actions-container {
      width: 100%;
      /*      gap: var(--spacingSmall);
            padding: var(--spacingTiny);*/
    }


    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .Typist {
        display: flex;
        align-items: center;
        border: none;

        h2 {
          font-size: var(--fontTiny);
        }
      }

      .loading-graphic {
        /*        height: calc(var(--productImageSize) * 0.5);
                width: calc(var(--productImageSize) * 0.5);*/
      }

      img {
        height: 100%;
        width: 100%;
      }

    }

    .suggested-products {
      display: flex;
      align-content: center;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;

      .product-image {
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: left;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: calc(var(--productImageSize) * 0.5);
        height: auto;

        .product-image-inner {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            max-height: 130px;
            -webkit-filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
            filter: drop-shadow(0px 0px px 2px rgba(0, 0, 0, 0.25));
          }
        }

        button.k-btn {
          width: var(--buttonMedium) !important;
          height: var(--buttonMedium) !important;
          max-height: 50px;
          min-height: 50px;
          min-width: 50px;
          /*max-width: 50px;*/
          z-index: 2;
          /* padding: 8% !important;*/
          padding: 10px !important;
          position: absolute;
          top: 0;
          right: 0;
          border: 1px solid white;
          box-shadow: 0 calc(var(--button-size) * 0.1) calc(var(--button-size) * 0.19) calc(var(--button-size) * 0.04) rgba(0, 0, 0, 0.5);
          /*          background-color: #fff!important;*/

          .filled {
            fill: #fff !important;
          }

            /*
          background-color: ${colorNameToValue("dark-roast")} !important;
*/

          &.add-label-btn {
            display: none;
          }

          &:hover {
            .filled {
              fill: var(--colorDarkRoast) !important;
            }
          }

          &.secondary {
            border: 2px solid var(--colorDarkRoast) !important;
          }

          .icon {
            margin: 0;

          }

          &:empty {
            display: none;
          }

          .filled {
            fill: white;
          }

          .stroked {
            stroke: white;
          }
        }
      }
    }
  }

  .k-btn label {
    font-weight: 600;
    //Math.min(Math.max(calculatedValue, minValue), maxValue);
    // this will let us use the container instead of the viewport, container queries vs media queries
    /*    font-size: var(--fontTiny);*/
  }

  .suggested-products {

    @keyframes fadeInCards {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes scaleUp {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    .product-image {
      opacity: 0;
      animation: fadeInCards 0.3s ease-in-out forwards;

      &.step2 {
        animation-delay: 0.2s;
      }

      &.step3 {
        animation-delay: 0.6s;
      }

      &.step4 {
        animation-delay: 0.5s;
      }

      button.k-btn.add-label-btn {
        animation: scaleRight 0.5s ease-in-out forwards, fadeIn 0.25s ease-in-out forwards;
        animation-delay: 1s;
      }

      .k-btn.round-no-label {
        opacity: 0;
        animation: fadeInCards 0.25s ease-in-out forwards, scaleUp 0.5s ease-in-out forwards;
        animation-delay: 1s;
      }
    }
  }

  .status-text {
    font-size: 16px !important;
  }

  .typist {
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 0 0 12px 0;
  }

  // by BREAKPOINT
  &.extra-large-dimensions,
    // container is greater than 1920
  &.large-dimensions {
    // container is greater than 1920 but less than 1920
    /*    .modal-item {
          max-height: 400px;
        }*/

  }

  &.medium-dimensions {
    .suggested-products-container {
      min-height: 10vh;
    }
  }

  &.small-dimensions {
    // container is less than 390
    margin: 5%;
    flex-direction: column;

    .content-area {
      background-color: #0d8296;

      .actions-container {
        .k-btn {
          label {
            font: var(--fontSmall);
          }
        }
      }
    }

    //loading message
    .Typist {
      h2 {
        font-size: var(--fontMedium);
      }
    }

    //product name on suggestion cards 
    .product-name-area {
      .brand {
        font-size: var(--fontLarge);
      }
    }


    //product name on selected product
    .suggested-products-container {
      //margin offset for the action-bar on the bottom
        /*
      margin-bottom: ${props => props.actionBarHeight}px;
*/

      .product-name-area {
        /*
        margin-top: var(--spacingMedium);
        */
      }
    }


    .product-area {
      flex-direction: row;
      justify-content: flex-start;

      button.k-btn {
        label {
          font-size: var(--fontSmall);
        }
      }
    }


    .content-area {
      flex-direction: column;
    }

    .actions-container {
      flex-direction: row;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      /*
      background-color: white;
      */
      z-index: 1000;
    }

    .Typist {
      font-size: var(--fontMedium);
    }

  }

  &.mobile-dimensions {
    margin: 0;
    width: 100vw;
    max-width: none;
    box-shadow: 0 calc(var(--button-size) * -0.22) calc(var(--button-size) * 0.52) 0 rgba(0, 0, 0, 0.25);

    .hide-label-mobile .k-btn label {
      display: none;
    }

    .modal-item {
      bottom: ${props => props.actionBarHeight}px !important;
      margin: 0 5% 5% 5%;
      max-width: 100%;
      min-width: 90%;
      /*max-height: 80vh;*/
      max-height: 80vh;
    }

    .actions-container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      /*      background-color: white;*/
      z-index: 10000;
      padding: var(--spacingSmall) var(--spacingMedium);
    }

    .product-area {
      flex-direction: column;
      min-height: 10vh;

      .product-image {
        width: calc(var(--overallWidth) * 0.25);
        height: auto;
      }
    }

    .product-area, .suggested-products-container {
      width: 100%;
    }

    .loading-graphic {
      height: 10vh !important;
      max-height: 130px !important;
      width: 100% !important;
    }

    .checkmark-circled {
      height: var(--fontSmall) !important;
      width: var(--fontSmall) !important;

      .stroked {
        stroke-width: var(--iconStrokeSmall);
      }
    }

    .suggested-products {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      margin-bottom: 20px;

      .product-image {
        width: calc(var(--overallWidth) * 0.25);
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        flex-wrap: nowrap;
        padding-bottom: 0;

        .action-label-btn {
          display: flex !important;;
        }
      }

      .product-image {
        padding-bottom: calc(var(--buttonLarge) + var(--spacingSmall));

        .product-image-inner {
          width: auto;
          height: auto;

          img {
            max-height: 100px;
          }
        }

        button.k-btn {
          label {
            font-size: calc(var(--fontSmall) * 0.65);
          }
        }

        button.k-btn.round-no-label {
/*          width: var(--buttonSmall) !important;
          height: var(--buttonSmall) !important;*/
          pointer-events: none;
          left: 0;
          right: 0;
          bottom: 0;
          top: calc(100% - var(--buttonLarge));
          z-index: 2;
        }

        button.k-btn.add-label-btn {
          width: 100% !important;
          min-width: 100%;
          /*height: var(--buttonLarge) !important;*/
          height: 40px !important;
          display: flex;
          left: 0;
          right: 0;
          bottom: 0;
          top: calc(100% - var(--buttonLarge));
          z-index: 1;

          label {
            position: absolute;
            //position label to visually center by accounting for padding
            right: 34%;
          }
        }
      }
    }

    .content-area {
      flex-direction: column;

      .product-name-area {
        .brand {
          font-size: var(--fontTiny) !important;
        }
      }

      .actions-container {
                background-color: #3B2B2F;
        /*
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, var(--colorSepia) 40%, var(--colorSepia) 100%);
        */

        .k-btn {
          /*height: auto !important;*/

          label {
            font: var(--fontMedium);
            font-weight: 600;
          }
        }
      }
    }

    .suggested-products-container {
      min-height: 10vh;
        // padding-bottom: ${(props) => props.actionBarHeight * 1.2 + 'px'};
      .Typist {
        h2 {
          font-size: calc(var(--fontMedium) * 0.75);
        }
      }
    }

    .actions-container {
      flex-direction: row;
    }

    .product-area .product-added .product-image {
      min-width: 100px;
      min-height: 100px;
    }
  }

  &.tiny-dimensions {
    // container is less than 200
  }
`;
