import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {ctaColorStyles} from "../../_commonStyles/common.styled";

export const MemberCardStyled = styled.div`

  &.classic {
    .square-btn {
      border-radius: 0 !important;
      font-weight: bold;
      font-size: 14px;
    }
    button.k-btn.toggle-item {
      border-width: 1px !important;
      border-color: var(--colorDarkRoast) !important;
      background-color: white;
      border-radius: 0.5rem;
      .expander{
        opacity: 0!important;
      }
      transition: none!important;
      //margin-top: auto;
      flex-basis: 0;
      /*      &:active{
              .expander{
                background-color: var(--colorDarkRoast);
              }
            }*/

      &:hover {
        .expander{
          opacity: 0!important;
        }
        label {
          /*
          color: var(--colorDarkRoast) !important;
          */
        }
      }

      .expander {
        border-radius: 0.5rem;
      }

      &.toggle-selected {
        pointer-events: none;
        /* background-color: var(--colorDarkRoast) !important;*/
        box-shadow: 0 0 0 1px var(--colorDarkRoast);
        font-weight: bold;
        color: white !important;
        border: -1px !important;
        overflow: visible;

        .icon.carat {
          margin-top: -1px !important;
          /*
          animation: moveDownFromTop 1s forwards;
          */

          &.carat-pointing-up {
            margin-bottom: -1px;
          }
        }

        .filled {
          fill: white;
        }
      }
    }

    &.desktop{
      .invisible-button {
        box-sizing: border-box;
        position: relative;
        height: 100%;
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: inset 0px -20px 20px 0px rgb(0 0 0 / 5%);
        z-index: 100;
        border: 2px solid transparent;
        
        .options-container{
          display: none;
        }
        &:hover {
          z-index: 1000;
          .options-container {
            display: flex;
            position: absolute;
            height: 75px;
            bottom: -75px;
            background-color: white;
            border-bottom: 2px solid #000;
            border-left: 2px solid #000;
            border-right: 2px solid #000;
            padding: 15px;
            left: -2px; /* Adjust for the parent's left border */
            right: -2px; /* Adjust for the parent's right border */
            width: calc(100% + 4px); /* Adjust the width */
          }

          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 2px solid #000;
        }
      }
      .card-primary-section {
        padding-bottom: 1rem;
      }
    }
    &.mobile {

      .options-container {
        display: flex;
        padding: 0 15px 15px 15px;
      }

      .card-primary-section {
        padding-bottom: 0;
      }

      .product-image {
        margin: 12px;
        display: flex;
        align-items: center;
      }

      .RegularPrice {
        border-top: 1px solid ${colorNameToValue("sepia")};
      }
    }
  }

  &.member-pricing-simple{
  
  }
  ${ctaColorStyles};
  --colorDiscount: ${colorNameToValue("discount")};
  background-color: white;
  padding: 0.3rem 0.3rem;


  .k-btn.secondary {
    label {
      color: #3B2B2F;
    }

    &:hover {
      font-weight: bold;
    }
  }

  .product-card {
    position: relative;
    background-color: ${colorNameToValue("white")};
    box-shadow: rgb(210, 210, 210) 0px 5px 25px 0px;
    border-radius: 0 !important;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }

  .k-btn {
    padding: 1.25rem 0.5rem !important;
  }

  &.small-mobile {
    .brand {
      font-size: 10px;
    }
  }

  &.mobile {
    .just-once {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }
    /*
    .invisible-button {
      &:hover {
        z-index: 1000;

        .options-container {
          display: flex;
          position: absolute;
          padding: 15px;
        }

        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border: 2px solid #000;
      }
    }
    */

    .product-info-container {
      .brand {
        font-size: 12px;
      }

      .product-name {
        font-size: 18px;
        margin-bottom: 6px;
      }

      .toggle-item {
        padding: 0.25rem;

        label {
          font-size: 12px;
        }
      }
    }
  }



  .product-info-container {
    width: 100%;
    padding: 15px;
  }

  .just-once {
    border: none !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .subscribe {
    border-color: var(--colorBoldCTA) !important;
    border-width: 2px !important;
    justify-content: center !important;

    label {
      font-weight: 600 !important;
    }
  }

  .icon-add {
    width: 112px !important;
  }

  //Toggle
  .k-toggle-container {
    display: flex;
    gap: 1%;
    padding: 10px 0 20px 0;

    .toggle-item-container {
      flex-basis: 100%;

      .toggle-item {
        overflow: visible;

        .expander {
          border-radius: 2px;
        }

        .carat {
          bottom: -6px;
          width: 100%;
        }
      }

      .carat {
        background-color: var(--colorDarkRoast);
        height: 2px;

        svg {
          display: none !important;
        }
      }
    }

    .secondary {
      background-color: white;
      border: 1px solid rgb(153, 153, 153) !important;
      border-radius: 4px;
      padding: 0.5rem;

      &:hover {
        /*
        box-shadow: 0 0 0 1px var(--colorDarkRoast);
        */
      }
    }
  }

  .options-container {
    display: flex;
    gap: 4px;
    padding-top: 1rem;
      /*
    border-top: 1px solid ${colorNameToValue("sepia")};
*/
  }

  .pod-info {
    display: flex;
    flex-direction: column;
  }

  .product-name {
    font-size: 18px;
    font-weight: 600;
  }

  .brand {
    font-size: 12px;
  }

  .final-price {
    color: var(--colorDiscount);

    .label {
      font-size: 12px;
      position: absolute;
    }
  }

  .main-pricing {
    display: flex;
    flex-direction: row;
  }

  .price {
    display: flex;

    .dollar {
      font-size: 36px;
      font-weight: 600;
    }

    .dollar, .cents, .currency {
      line-height: 1;
    }
  }

  .member-price-display {
    display: flex;
    margin-bottom: 0;
    margin-top: 20px;
    justify-content: center;
  }

  .strike-through {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    position: relative;
    font-size: 18px;
    margin-left: 12px;

    .striker {
      height: 1px;
      width: 100%;
      background-color: grey;
      position: absolute;
      top: 50%;
    }
  }

  .ratings-overall-container {
    height: 18px;
    margin: 2% 0;
  }

  //Subscription config
  .subscription-configuration {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .drop-down {
    .k-btn {
      width: 3rem !important;
      height: 3rem !important;
      padding: 0.75rem !important;
    }
  }

  .drop-down-container {
    width: 100%;

    .selection-label {
      width: 100%;
    }

    .drop-down {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;
    }
  }

  .drop-down-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    .icon.icon-checkmark {
      height: 1rem;
      width: 1rem;
      margin-left: 0.5rem;
    }
  }

  &.desktop {
    .product-image {
      img {
        object-fit: contain;
        width: 100%;
        height: auto;
        padding: 10%;
        box-sizing: border-box;
      }
    }
  }

  &.mobile {
    .pod-info {
      flex-direction: row;
    }

    .product-image {
      width: 40%;
      margin-right: 12px;
      min-width: 7rem;

      img {
        width: 100%;
      }
    }
  }

`;