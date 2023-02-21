import styled from "styled-components";

export const AddProductStyled = styled.div`
  &.small {
    bottom: 0;
    .fader-up{
      position: absolute;
      bottom: 0;
      height: 6rem;
      left: 0;
      right: 0;
      &.dark{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 26%, rgba(0, 0, 0, 0.0536474458) 73%, rgba(0, 0, 0, 0) 100%);
      }
    }
    button{
      bottom: 0.5rem;
      &.add-items {
        &.extra-large{
          height: 3rem;
        }
        max-width: 21rem;
        margin-bottom: 0.25rem;
        background-color: $cta-primary !important;
      }
    }
    .half-circle {
      bottom: 0;
      left: 0;
      right: 0;
      height: 2.25rem;
    }
  }

  &.large {
    top: 0;
    .half-circle{
      transform: scale(-1);
    }
    button{
      &.add-items {
        margin-top: 0.5rem;
        background-color: $cta-primary !important;
        .icon-add {
          margin-left: 0.5rem;
        }
      }
    }
  }

  position: fixed;
  width: 100%;
  display: flex;
  z-index: 50;
  justify-content: center;

  button {
    &.add-items {
      z-index: 1;
      border: 1px solid white;
    }
  }

  .half-circle {
    position: absolute;
    left: 10%;
    right: 10%;
    height: 1.5rem;

    .filled {
      fill: $dark-roast;
    }
  }
`
