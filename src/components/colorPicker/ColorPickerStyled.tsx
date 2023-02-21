import styled from "styled-components";

export const ColorPickerStyled = styled.div`
  margin: 1rem 0 1rem 0;
  .cta-container{
    margin-top: 1rem;
  }

  .notify-me{
    .notification.error{
      margin-bottom: 0;
    }

    .text-input{
      margin-bottom: 1.5rem;
    }

    .k-btn.secondary{
      margin-top: 1rem;
    }
  }
  .label-container {
    margin-bottom: 0.5rem;
    display: inline-flex;

    label {
      white-space: nowrap;
    }
  }

  .key, .value {
    font-size: 1rem
  }

  .key {
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .value {
    font-weight: 500;
  }

  ul {
    display: flex;
    list-style: none;
  }

  .color-dot, .selection-indicator {
    border-radius: 100vw;
  }

  .color-dot {
    width: 3rem;
    height: 3rem;
    transition: all 0.5s;
    margin-right: 1rem;
    position: relative;

    &.disabled{
      overflow: hidden;
      .out-of-stock {
        width: 100%;
        height: 1px;
        border-bottom: 2px solid gray;
        transform: rotateZ(45deg) translateY(-50%);
        mix-blend-mode: difference;
        position: absolute;
        top: 50%;
      }
    }

    &.selected {
      .selection-indicator {
        display: inline-flex;
        position: absolute;
        inset: -0.25rem;
        border: 2px solid;
      }
    }

    &:hover {
      transform: scale(1.25);
    }

    &.White {
      border: 1px solid black;
      margin-right: 1rem;
    }
  }

`
