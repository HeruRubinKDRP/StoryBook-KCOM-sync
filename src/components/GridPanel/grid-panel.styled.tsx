import styled from "styled-components";

export const GridPanelStyled = styled.div`

  .panel-grid {
    color: $dark-roast;
    position: relative;
    padding: 0.25rem;
    display: grid;
    //grid-template-columns: repeat(3, 1fr) 2rem;
    grid-template-columns: 1fr 0.5fr 1fr 2rem;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border-radius: 0.5rem;
    user-select: none;

    .data-icon {
      //max-width: 2.5rem;
      //max-height: 2.5rem;
    }

    .data-group-double {
      display: grid;
      grid-template-columns: 2rem 1fr;
    }

    .bg-container {
      background-color: $sepia;
      position: absolute;
      top: -0.25rem;
      bottom: -0.25rem;
      left: -0.25rem;
      right: -0.25rem;
      border-radius: 0.25rem;
      grid-row: 1 / span 2;
      grid-column: 1 / span 4;
      margin: 1px;
    }

    &.you-also-brewed {

    }

    &.mobile-item-panel {
      // TODO fix source icon and remove
      .icon-boxes {

      }

      .icon {
        &.icon-pod-filled {
          height: 1.75rem;
          margin-top: 0.25rem;
        }

        padding-left: 0.25rem;
        width: 100%;
        height: 2rem;
      }

      .pods-inventory-group {
        padding-right: 0.5rem;
        grid-column: 2 / span 1;
        .small-p {
          font-size: 0.75rem;
          font-weight: bold;
        }
      }

      .divider {
        background-color: white;
      }

      .grid-item {
        .icon{
          padding-right: 0.5rem;
        }

        &.cta-container {
          justify-content: center;
          grid-column-start: 2;
          grid-column-end: 5;
          grid-row: 1/span 2;
          padding: 0.75rem;

          .cta-group {
            display: flex;
            flex-flow: column;
            width: 100%;
            margin: 0.5rem;

            button.k-btn.secondary.extra-large.you-also-brewed {
              margin-bottom: 0.5rem;
              max-width: 32rem;
              .icon{
                height: 2rem !important;
                width: 2rem !important;
              }
              &:first-child {
                margin-bottom: 0.5rem;
              }
            }
          }
        }

        &.cta {
          justify-content: center;
          padding: 0;

          .chevron-right {
            width: 100% !important;
            height: 0.75rem !important;
            margin-left: 0.25rem;
          }
        }

        &.status {
          justify-content: center;
        }

        display: flex;
        flex-flow: column;
        align-items: center;
        position: relative;
        justify-content: flex-start;
        padding-left: 0.25rem;
      }

      .product-image {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row: 1 / span 2;
        padding: 0.75rem;
      }

      .status {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row: 1 / span 2;
        position: relative;

        label {
          font-weight: bold;
          font-size: 0.75rem;
        }

        .vertical {
          top: 0.25rem;
          bottom: 0.25rem;
        }

        .status-group {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .icon {
          &.checkmark-circled {
            padding: 0;
          }

          .circle {
            fill: white;

          }

          .check {
            fill: none;
          }

          .check, .circle {
            stroke: $dark-roast;
            stroke-width: 3px;
          }

          //border-radius: 100vw;
        }

        label {
          text-transform: capitalize;
        }
      }

      .pods-remaining {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
        flex-flow: row;

        .icon {
          margin-right: 0.5rem;
        }

        .focus {
          font-weight: bold;
        }

        .pods-inventory-main {
          align-items: center;
          width: 100%;
          .filled {
            fill: $dark-roast;
          }
        }
      }

      .next-ship-group {
        align-items: center;
      }

      .next-shipment, .pods-inventory-main{
        grid-template-columns: 0.3fr 0.7fr;
        display: grid;
        .icon{
          grid-column: 1 / span 1;
        }
      }

      .next-shipment {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 2;
        font-size: 0.75rem;
        position: relative;


        .divider {
          background-color: white;
          height: 2px;
          right: 0.5rem;
          left: 0.5rem;
        }

        .icon {
          margin-right: 0.25rem;
        }

        .next-ship-group {
          display: flex;
          flex-flow: row;
          justify-content: flex-start;
        }

        .next-ship-date {
          font-weight: bold;
        }


      }

      .cta {
        grid-column: 4 / span 1;
        grid-row: 1 / span 2;
        background-color: $dark-roast;
        border-radius: 0.25rem;
        margin-left: 2px;

        .icon {
          height: 33.3% !important;

          .filled {
            fill: white;
          }
        }
      }
    }
  }
  
  
  .divider {
    position: absolute;

    &.vertical {
      width: 2px;
    }

    &.bottom {
      bottom: 0;
    }

    &.top {
      top: 0;
    }

    &.right {
      right: 0;
    }
  }
`;