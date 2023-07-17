import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const KDropDownStyled = styled.div`
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorSepia: ${colorNameToValue("sepia")};
  font-family: "Mark OT", sans-serif;
  
  .panel{
    &.column{
      position: relative;
      .panel-bg{
        border: 1px #cecece solid;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: white;
        padding-left: 1rem;
        font-family: inherit;
        position: absolute;
        top: -0.75rem;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
      .drop-down-item{
        display: flex;
      }

      .drop-down-items{
        display: flex;
        flex-flow: column;
      }

      .drop-down-item{
        &.active{
          color: white !important;
          .hover-panel{
            display: flex !important;
            background-color: ${colorNameToValue("dark-roast")} !important;
            transition: background-color 0.5s;
          }
        }
      }



    }

    position: relative;
    .panel-bg{
      .shadow-top-down{
        position: absolute;
        height: 1.25rem;
        top: 0;
        z-index: 1;
        left: 0;
        right: 0;
      }
      border: 1px #cecece solid;
      background-color: white;
      padding-left: 1rem;
      font-family: inherit;
      border-radius: 0 0 0.5rem 0.5rem;
      position: absolute;
      top: -0.75rem;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }

  .drop-down{
    font-family: inherit;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 100vw;
    z-index: 1;
    user-select: none;

    label.selection-label{
      display: flex;
      align-items: center;
      color: var(--colorDarkRoast);

    }
    .filler{
      background-color: var(--colorSepia);
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  
  &.is-open{
    &.thumb-sized{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      .filler{
        display: none;
      }
    }
  }
  .drop-down-item{
    padding-left: 0.25rem;
    user-select: none;
    border: solid $sepia;
    border-width: 1px 0 0 0;
    color: $dark-roast;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 1.25rem;
    &:hover{
      .filled{
        fill: white;
      }
      color: white;
      animation: hoverAnim 0.5s forwards;
    }
    &:first-child{
      margin-top: 0.5rem;
      border-width: 0;
    }
    &.active{
      color: white !important;
      .hover-panel{
        display: flex !important;
        background-color: $dark-roast !important;
        transition: background-color 0.5s;
      }
    }
    .icon{
      margin-right: 0.25rem;
    }
  }

  &.thumb-sized{
    .drop-down-items{
      margin-top: 4.25rem;
    }
    .drop-down{
      padding: 0;
      z-index: 101;
    }
    .panel{
      z-index: 100;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .drop-down-item{
        border: solid $sepia;
        border-width: 1px 0 0 0;
        padding: 1rem;
        &:last-child{
          border-bottom-width: 1px !important;
        }
      }
    }
  }
  

  &.thumb-sized{
    &.is-open{
      box-shadow: none;
      .round-no-label{
        background-color: transparent;
        .filled {
          fill : var(--colorDarkRoast)
        }
      }

      .panel-bg{
        border: 0;
      }

      .drop-down{
        label{
          font-weight: bold;
        }
      }

      .drop-down-items{
        .drop-down-item{
          &:first-child{
            border-width: 1px 0 1px 0;
          }
          padding: 1.5rem !important;
        }
      }

      .filler{
        display: none;
      }
    }
    .round-no-label{
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center !important;
      .icon{
        width: 45% !important;
        height: 45% !important;
      }
    }

  }

  button{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }

  //size specific
  
  
  &.small{
    button{
      height: 1.25rem;
      width: 1.25rem;
      padding: 0;
      .icon{
        height: 0.5rem;
        width: 0.5rem;
      }
    }
    .panel{
      .drop-down-item{
        font-size: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .icon{
          height: 0.5rem;
          width: 0.5rem;
        }
      }
    }

    .drop-down{
      height: 1.25rem;
      padding: 0 0 0 0.75rem;
    }
    label{
      font-size: 0.75rem;
    }
  }

  &.medium{
    button{
      height: 2rem;
      width: 2rem;
      .icon{
        height: 0.75rem;
        width: 0.75rem;
      }
    }
    .panel{
      .drop-down-item{
        font-size: 1rem;
        .icon{
          height: 1rem;
          width: 1rem;
        }
      }
    }

    .drop-down{
      height: 2rem;
      padding: 0 0 0 0.75rem;
    }
    label{
      font-size: 1rem;
    }

  }

  &.large{
    button{
      height: 2.5rem;
      width: 2.5rem;
      .icon{
        height: 1rem;
        width: 1rem;
      }
    }
    .panel{
      .drop-down-item{
        font-size: 1.25rem;
        .icon{
          height: 1.25rem;
          width: 1.25rem;
        }
      }
    }

    .drop-down{
      height: 2.5rem;
      padding: 0;
    }
    label{
      font-size: 1.25rem;
    }
  }

  &.thumb-sized{
    button{
      height: 2.75rem;
      width: 2.75rem;
      .icon{
        height: 1rem;
        width: 1rem;
      }
    }
    .panel{
      .drop-down-item{
        font-size: 1.25rem;
        .icon{
          height: 1.25rem;
          width: 1.25rem;
        }
      }
    }

    .drop-down{
      height: 2.75rem;
      padding: 0 0 0 1rem;
    }
    label{
      font-size: 1.25rem;
    }
  }


  @keyframes pulse {
    0% {
      background-color: #ffffff;
    }
    100% {
      background-color: var(--colorDarkRoast);
    }
  }

  .drop-down{
    button{
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }


  @keyframes hoverAnim {
    0% { background-color: #ffffff; }
    100% { background-color: var(--colorDarkRoast); }
  }


`;