import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const ToggleStyled = styled.div`
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  
  display: flex;
  justify-content: center;
  .one-pill{
    &:first-child{
      .k-btn{
        border-radius: 100vw 0 0  100vw !important;
      }
    }
    &:last-child{
      .k-btn{
        border-radius: 0  100vw 100vw 0 !important;
      }
    }
  }

  &.small-container{
    padding: 1rem;
    .k-btn{
      label{
        white-space: normal !important;
      }
    }
  }
  &.spaced-out{
    .toggle-item-container {
      margin-right: 0.5rem;
    }
  }

  &.side-by-side{
    flex-flow: row;
  }

  &.stacked{
    flex-flow: column;
  }

  .toggle-item-container{
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button.k-btn.toggle-item{
    border-width: 1px !important;
    border-color: var(--colorDarkRoast) !important;
    background-color: white;
    border-radius: 0.5rem;
    //margin-top: auto;
    flex-basis: 0;
    &:active{
      .expander{
        background-color: var(--colorDarkRoast);
      }
    }
    &:hover{
      label{
        color: var(--colorDarkRoast) !important;
      }
    }
    .expander{
      border-radius: 0.5rem;
    }
    &.toggle-selected{
      pointer-events: none;
      background-color: var(--colorDarkRoast) !important;
      color: white !important;
      border: -1px !important;
      overflow: visible;
      .icon.carat{
        margin-top: -1px !important;
        animation: moveDownFromTop 1s forwards;
        &.carat-pointing-up{
          margin-bottom: -1px;
        }
      }
      .filled{
        fill:white;
      }
    }
  }

`;