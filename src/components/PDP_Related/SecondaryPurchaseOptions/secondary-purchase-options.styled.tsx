import styled from "styled-components";

export const SecondaryPurchaseOptionsStyled = styled.div`

  .actions-container .drop-down-container.thumb-sized .column.panel {
    background-color: transparent !important;
  }

  .purchase-option-container {
    margin-left: 0.5rem;
    display: inline-flex;
    overflow: visible;
    border-radius: 1rem;
    flex-direction: column;  
    padding: 1rem;  
    background-color: $sepia;

    h3 {
      margin-bottom: 1rem;
    }

    .final-price{
      margin-left: 0;
      padding: 0;
      label{
        font-size: 1.5rem !important;
        position: unset !important;
      }
    }

    .product-area {
      display: flex;
      flex-direction: column;

      .product-details-area {
        display: flex;
        flex-direction: column;
        align-content: flex-start;

        margin-left: 1rem;
        .price-container-main{
          margin-top: -0.5rem;
        }
        h4 {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }

    }
    
    .drop-down-items {
      margin-top: 3rem !important;
      background-color: white;
    }

    .product-descriptive-area {
      display: flex;
      align-items: center;
      img {
        height: 5rem;
      }
    }

    .actions-container{
      display: flex;
      margin-top: 1rem;
      button.k-btn.primary .filled{
        fill : $text !important;
      }

      .drop-down-container.thumb-sized{
        margin-right: 0.5rem;
        width: 5rem;
        min-width: 5rem;
        position: relative;
        overflow: visible;
        .column.panel{
          bottom: -120px !important;
          background-color: white !important;
          border-radius: 1.5rem 1rem 0 0 !important;
        }
        .drop-down{
          border: $text 1px solid;
          overflow: hidden;
          height : 100% !important;
          max-height: 3rem;
          .selection-label{
            font-size: 1rem;
          }

          .filler{
            background-color: white;

          }
        }

      }
    }

    .drop-down-container.thumb-sized.is-open .drop-down-items .drop-down-item {
      padding: 0.5rem !important;
    }

    .k-btn {
      &:hover {
        label, .base-price {
          color: $dark-roast;
        }
      }

      label, .base-price {
        color: white;
      }
    }

    .upsell-combo {
      z-index: 5;
      width: 100%;

      h3 {
        margin: 0;
      }

      .product-item {
        margin-bottom: 1rem;
        flex-basis: 50%;
        align-items: flex-start;

      }

      &.purchase-option-container {
        .upsell-cta {
          padding: 1rem 0 0;
          border-top: 1px solid $medium;
          width: 100%;
          margin-top: 1rem;

          .k-btn {
            &:hover {
              label, .base-price, .currency {
                color: $dark-roast !important;
              }
            }
          }

          .base-price {
            font-size: 0.75rem;
          }

          .price-container-main {
            margin-left: 1rem;
          }

          label, .base-price {
            color: white !important;
          }
        }

        animation: moveDownFromTop 0.75s forwards ease-in-out;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .final-price {
          label {
            //font-size: 1rem !important;
            color: $discount;
          }
        }

        .product-description {
          margin-left: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;

          label {
            font-size: 0.75rem;
          }

          h3 {
            font-size: 1.25rem;
            line-height: 1.25rem;
          }
        }

        .purchase-option-container .product-descriptive-area {
          align-items: flex-start;
        }
      }

    }
  }

  .purchase-option-main {
    background-color: $sepia;
    border-radius: 1rem;
    animation: moveDownFromTop 0.75s forwards ease-in-out;
    z-index: 50;
    margin-bottom: 1rem;


    .fine-print {
      color: $dark-roast;

      .k-btn {
        label {
          color: $dark-roast;
        }
      }
    }

    .drop-down-container {
      box-shadow: none !important;
    }

    .panel-bg {
      background-color: transparent !important;
    }


    .drop-down-container.thumb-sized .panel .drop-down-item {
      font-size: 1rem;
      justify-content: center;
    }
  }

  .coupon-items-container {
    margin: 0.5rem 1rem 0.5rem 1rem;
    border-top: 1px solid black;

    button.k-btn.secondary {
      border-color: $dark-roast !important;
    }

    .details {
      margin-left: 0.5rem;
      padding: 0.75rem 0.75rem 0.5rem 0;
    }

    .learn-more {
      display: inline-flex;
      padding: 0.75rem 0.75rem 0.5rem 0;
    }

    .boolean-toggle {
      padding-bottom: 1rem !important;

      .check-mark-container {
        height: 1rem;
        width: 1rem;
      }

      label {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

`;