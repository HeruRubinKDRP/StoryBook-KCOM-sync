import styled from "styled-components";

export const SpecificationsAreaStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;

  .multi-card-container.desktop {

    .highlight-card-container {
      &.full-width {
        .image-container {
          width: 100% !important;
          height: 100% !important;
        }
      }

      .image-container {
        height: 12rem !important;
        width: 12rem !important;
        max-width: 16rem;
        max-height: 16rem;
      }
    }
  }

  .specs-media-container {
    height: 45vh;
    position: relative;
    .content {
      height: 100%;
    }

    video {
      top: -3px;
      left: -5px;
      height: 105%;
      width: 105%;
      object-fit: cover;
    }
  }

  .multi-card-container {
    margin-bottom: 2rem;
    justify-content: space-around;
  }

  &.desktop {
    .specs-details-area, .images-area {
      flex-basis: 50%;
      height: 65%;
      width: 50%;
    }

    .images-area {
      position: sticky;
      top: 0;
      padding: 1rem;
      .content-item {
        height: 100%;
      }
    }
  }


  &.mobile {
    .specs-details-area, .images-area {
      flex-basis: 100%;
      width: 100%;
    }


    .specs-details-area {
      .multi-card-container {
        padding: 3rem;
      }
    }

    .multi-card-container {
      &.default-size {

      }

      .image-container {
        flex-grow: 1;
      }
    }

    &.specifications-area {
      flex-direction: column;
      .images-area {
        flex-basis: 40%;
        position: sticky !important;

        img {
          height: auto !important;
        }
      }
    }

    .images-area {
      position: sticky;
      top: 0;
      padding: 0;
      z-index: 1000;
      height: 40vh;
      overflow: hidden;
      margin-bottom: 4rem;
      .content-item {
        height: 100%;
      }

      .inset-beveled {
        border-radius: 0 !important;
        margin: 0 !important;
      }

      .highlight-card-container {
        height: 100%;

        img {
          height: 100%;
          width: auto !important;
        }

        .image-container {
          height: 100%;
        }
      }
    }
  }


  .multi-key-value-container, .header-area {
    padding-top: 0 !important;
  }

  .header-area {
    width: 100%;
    padding-bottom: 0 !important;
  }

  article {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

  }

  h3 {
    color: $medium-roast;
    text-align: center;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-weight: 400;
    color: $dark-roast;
    font-size: 1.75rem;
  }

  .spec-combo {
    padding: 2rem;

  }

  .product-highlight {
    max-height: 60vh;
  }

  .key {
    font-weight: bold;
    color: $dark-roast;
    margin-right: 0.5rem;
  }

  .spec-combos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .image-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $dark-roast;

    label {
      font-weight: bold;
      color: $dark-roast;
    }
  }

`;