import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {ctaColorStyles} from "../../../_commonStyles/common.styled";

export const MemberCardStyled = styled.div`
  ${ctaColorStyles};
  --colorDiscount: ${colorNameToValue("discount")};
  background-color: white;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  
  
  
*{
  box-sizing: border-box;
  user-select: none;
}
  .k-btn{
    padding: 1.25rem 0.5rem !important;
  }
  &.small-mobile{
    .brand{
        font-size: 10px;
    }
  }
  
  &.mobile{
    .just-once{
      padding-right: 12px !important;
      padding-left: 12px !important;
    }
    .product-info-container{
      .brand{
        font-size: 12px;
      }
      .product-name{
        font-size: 18px;
        margin-bottom: 6px;
      }
      .toggle-item{
        padding: 0.25rem;
        label{
          font-size: 12px;
        }
      } 
    }
  }
  
  .card-primary-section{
    padding-bottom: 1rem;
  }
  
  .product-info-container {
    width: 100%;
  }
  
  .just-once{
    border: none !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  
  .subscribe{
    border-color: var(--colorBoldCTA) !important;
    border-width: 2px !important;
    justify-content: center !important;
    label{
      font-weight: 600 !important;
    }
  }
  
  .icon-add{
    width: 112px !important;
  }
//Toggle
  .k-toggle-container {
    display: flex;
    gap: 1%;
    .toggle-item-container {
      flex-basis: 100%;
      .toggle-item{
        overflow: visible;
        .expander{
          border-radius: 2px;
        }
        .carat{
          bottom: -6px;
          width: 100%;
        }
      }
      .carat{
        background-color: var(--colorDarkRoast);
        height: 2px;
        svg{
          display: none !important;
        }
      }
    }

    .secondary {
      background-color: white;
      border: 2px solid var(--colorDarkRoast) !important;
      border-radius: 4px;
      padding: 0.5rem;
    }
  }

  .options-container {
    display: flex;
    gap: 4px;
    padding-top: 1rem;
    border-top: 1px solid ${colorNameToValue("sepia")};
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

  .main-pricing{
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

  &.desktop{
    .product-image {
      img{
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