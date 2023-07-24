import styled from "styled-components";

export const KSKStyled = styled.div`
  .nav-container {
    .right {
      right: 0;
      border-radius: 0.5rem 0 0 0.5rem;
    }

    .left {
      left: 0;
      border-radius: 0 0.5rem 0.5rem 0;
    }

    .right, .left {
      height: 3rem;
      position: absolute;
      pointer-events: all;
      width: 2rem;
      //backdrop-filter: blur(4px);
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);
      border: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      height: 1rem;
    }

    transform: translateY(-50%);
    top: 50%;
    right: 0;
    left: 0;
    pointer-events: none;
    position: absolute;

    padding: 2rem 1rem;
    border-radius: 0.5rem 0 0 0.75rem;
    z-index: 1000;
  }


  .gallery {
    font-family: 'Mark OT', sans-serif;
    background-color: transparent;
    height: 100%;
    position: relative;
    padding-top: 2rem;

    .cards {
      position: relative;
      height: inherit;
      display: flex;
      width: auto;
      overflow: visible;
      z-index: 100;

      .list-item {
        display: flex;
        justify-content: center;
        border: #473036 3px solid;
      }

      .product-card {
        &.hidden {
          display: none;
        }

        position: absolute;
        box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
        pointer-events: none;
        border: 1px solid white;
        list-style: none;
        height: 80%;
        width: 30vw;
        text-align: center;
        font-size: 2rem;
        font-family: sans-serif;
        background-color: white;
        border-radius: 0.8rem;
        padding: 3rem 0 0;
        margin: 0 2rem 0 0;
        overflow-y: visible;

        .product-name {
          position: absolute;
          top: 0;
          right: 0;
        }

        .product-info-container {
          align-content: center;
          align-items: center;
          display: flex;
          width: 100%;
          height: 30%;
          justify-content: center;
        }

        .product-data {
          height: 100%;
          width: 100%;
          position: relative;
          flex-direction: column;
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .draggable-area {
      background-color: rgb(167 147 88 / 75%);
      opacity: 0;
      z-index: 0;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      position: absolute;

    }
  }

  .extra-small {
    font-size: 0.75rem;
  }

  .starter-kit-container {
    .select-coffee-maker-container {
      height: 100%;
    }

    .brewer-selector-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .filters-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 2rem;
      height: 2rem;

      .filter {
        flex: 1 1 0px;
        margin: 0.25rem;
      }
    }
  }

  .questions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
      user-select: none;
    }

    .question-item {
      border: 1px solid $dark-roast;
      padding: 2rem;
      border-radius: 1rem;
      background-color: white;
      height: 12rem;
      width: 12rem;
      display: flex;
      align-items: center;
      text-align: center;
      margin-right: 2rem;
      box-shadow: 12px 12px 15px -10px rgba(0, 0, 0, 0.5);
      justify-content: center;

      label {
        user-select: none;
      }
    }
  }

  .brewer-info-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    height: 100%;
    align-items: center;
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    background-color: $sepia;

    .product-image-large {
      height: 14rem;
    }

    .brewer-info {
      display: flex;
      flex-direction: column;

      height: auto;
      min-height: 12rem;

    }
  }


  .selected-items {
    margin-top: 2rem;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid black;

    ul {
      display: flex;
      flex-direction: row;
      height: 5rem;
      justify-content: center;
      list-style: none;
      width: 100%;
      align-items: center;
    }

    .product-image-small {
      height: 8rem;
    }

    .selected-slot {
      .clear {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0.5rem;
        right: -0.25rem;
        background-color: rgba(255, 255, 255, 0.65);
        padding: 0.5rem;
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(4px);
        border: 1px solid grey;

        .icon {
          display: inline-flex;
        }
      }

      &.coffee-maker {
        flex-grow: 0;
        margin-right: 2rem;
        padding-right: 1.5rem;
      }

      &.pod {
        position: relative;
        border-radius: 100vw;
        flex-grow: 0;
        width: 8rem;
        height: 8rem;
        margin-right: 1rem;

        img {
          width: 9rem;
          height: 9rem;
        }
      }

      display: flex;
      align-items: center;
      background-color: $sepia;
      height: 100%;
      flex-grow: 1;
      justify-content: center;
      border-radius: 1rem;
      margin: 0.5rem;
      border: 2px dashed white;
      box-shadow: inset 2px 3px 14px 2px rgba(0, 0, 0, 0.33);
    }
  }

  .no-matches {
    width: 100%;
    text-align: center;
  }


  .starter-kit-container {
    height: 100%;
    width: 100%;
    min-height: 32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $sepia;
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;

    .flow-panels-container {
      background-color: #EBE7E3;
      border-radius: 1rem 1rem 0 0;
      height: 100%;
      margin-bottom: 2rem;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .select-pods-container {
      .quick-add-main {
        padding-top: 5rem;
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        padding-left: 3rem;
        position: relative;

        .product-item {
          margin-right: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          img {
            width: 8rem;
          }
        }
      }
    }

    .price-container-main {
      .final-price {
        font-size: 1rem;
      }

      margin-bottom: 0.5rem;
    }


    .product-info-container {
      margin-top: -10%;

      .data-text {
        align-items: center;
      }

      h2 {

        text-overflow: ellipsis;
        overflow-x: hidden;
        font-size: 1.5rem;
      }

      img {
        max-width: 15rem;
        max-height: 15rem;
        width: 120%;
      }
    }

    .product-data {
      .purchase-program {
        padding: 2rem;
        font-weight: bolder;
        display: flex;
        align-content: center;
        line-height: 0;
        color: $discount;
      }

      .colors {
        height: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;

        .color-selection {
          width: 2rem;
          height: 2rem;
          border-radius: 100vw;
          margin-right: 0.5rem;

          &.selected {

          }
        }
      }

      .cta-container {
        pointer-events: all;
        margin-bottom: 0.5rem;

        .k-btn.secondary {
          margin-bottom: 0.5rem;
        }

        button.k-btn.secondary, button.k-btn.primary {
          width: 100% !important;

          .icon {
            margin-left: 0.5rem;
          }
        }
      }

      .messages {
        font-size: 0.75rem;
        color: $text;
        display: flex;
        flex-direction: column;

        .explanation, .commitment-message {
          padding: 0.5rem 0 0.5rem 0;
          width: 100%;
        }

        .explanation {
          border-bottom: 1px solid $sepia;
        }

        .commitment-message,
        .commitment-message {
          display: flex;
          flex-direction: row;
          justify-content: center;

          .aligner {
            width: auto;
            display: flex;
            flex-direction: row;
          }
        }
      }
    }

    .carousel-container {
      display: flex;
      flex-flow: row;
      overflow: visible;
      position: relative;
      height: 100%;
      align-items: center;
    }

    .k-toggle-container.side-by-side {
      padding: 1rem;
      background-color: $dark-roast;

      button.k-btn.toggle-item {
        background-color: $dark-roast !important;
        color: white !important;
        height: 100% !important;
      }

      button.k-btn.toggle-item.toggle-selected {
        background-color: #EBE7E3 !important;
        color: #473036 !important;
        height: 3rem !important;
        border: none !important;
        border-radius: 0.5rem;
        font-weight: bold;
        font-size: 1.25rem;
      }
    }
  }

  .flow-panels-container {
    background-color: $sepia;
    border-radius: 1rem 1rem 0 0;
    height: 100%;
    margin-bottom: 2rem;

    h1 {
      text-align: center;
      font-size: 2rem;
      margin: 1rem 0 1rem 0;
      padding-bottom: 1rem;
      border-bottom: 1px solid $white;
      position: relative;

      .k-btn {
        position: absolute;
      }
    }
  }


  //pod selection
  .starter-kit-container {
    &.less-than-399 {
      .pod-lid {
        width: 6rem;
      }
      .product-info-container {
        flex-direction: column;
        width: 80%;
        h2 {
          font-size: 1.25rem;
        }
      }
    }

    .center-column{
      display: flex;
      flex-direction: column;
      align-content: center;
    }
    .pod-select-pods {
      height: 100%;
    }

    .pods-container {
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .center-column {

      }

      .product-info-container {
        padding-top: 2rem;
        .product-image-name {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .quant-variant {
          .k-btn {
            &:first-child {
              border-radius: 5rem 0 0 5rem;
            }

            &:last-child {
              border-radius: 0 5rem 5rem 0;
              margin-left: -1px;
            }
          }
        }

        h2 {
          align-self: flex-start;
        }

        .brand-title {
          align-self: flex-start;
        }

        .quant-variant {
          display: flex;
        }

        margin-top: 0;
      }
    }
  }

`;