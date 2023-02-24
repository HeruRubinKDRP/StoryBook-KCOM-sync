import styled from "styled-components";

export const Styled_CTA_withQuantity = styled.div`

  .add-to-cart-container {
    display: flex;


    .expander {
      border-radius: 100vw;
      transition: background-color 0.5s, left 400ms, right 400ms, top 400ms, bottom 400ms, border-radius 400ms;
    }

    .k-btn{
      &:hover{
        .expander{
          border-radius: 0 100vw 100vw 0 !important;
        }
      }
      label{
        transform: translateX(calc(var(--spacingLarge) * -1));
      }
    }

    .drop-down-container {
      border: 1px solid var(--colorDarkRoast);
      border-radius: 100vw 0 0 100vw;
      position: relative;
      z-index: 100;
      width: calc(var(--spacingLarge) * 4) !important;

      &.is-open {
        .drop-down {
          .icon.chevron-down {
            transform: scaleY(-1);
          }
        }
      }

      .column.panel {
        box-shadow: 0 0 var(--spacingSmall) 0 rgba(0, 0, 0, .25);
        display: flex;
        flex-flow: column;
        width: 100%;
        right: 0;
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        transform: translateY(-100%);

        .panel-bg {
          top: 0;
          bottom: calc(var(--spacingMedium) * -1);
          z-index: -2;
          border-radius: var(--spacingTiny) var(--spacingTiny) 0 0;
        }

        .drop-down-item {
          padding: var(--spacingMedium);
          font-size: var(--FontSizeLarge);
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          margin: 0 !important;

          .icon {
            height: var(--spacingLarge);
            width: var(--spacingLarge);
            position: absolute;
            right: 5%;
          }
        }
      }
    }

    .drop-down {

      height: 100%;
      border-radius: 100vw 0 0 100vw !important;

      justify-content: center;
      align-items: center;

      button.k-btn {
        width: var(--buttonSmall);
        height: var(--buttonSmall);
        position: relative;
        background-color: transparent !important;
        padding: calc(var(--spacingMedium) * 1.25) var(--spacingMedium) var(--spacingMedium) 0 !important;

        .icon {
          transition: transform 0.2s ease-in-out;
          display: flex;
          align-content: center;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;

          .filled {
            fill: var(--colorDarkRoast) !important;
          }
        }
      }
    }

    .action {
      flex-basis: auto;
      border-radius: 0 100vw 100vw 0;
    }
  }

`;