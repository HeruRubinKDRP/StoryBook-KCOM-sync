import styled from "styled-components";
import {colorStyles} from "../_commonStyles/common.styled";

export const KButtonStyled = styled.button`
  ${colorStyles};

  box-sizing: border-box;
  position: relative;
  font-family: "Mark OT", sans-serif;
  font-weight: normal;
  padding: 1.5rem 1.75rem;
  border-radius: 100vw;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  overflow: hidden;
  box-shadow: none;
  label {
    cursor: inherit;
    z-index: 1;
  }

  .icon {
    z-index: 1;
    /*padding: 5%;*/
    display: flex;
    justify-content: center;
  }

  .price-container-main {
    margin-top: 0 !important;
    margin-bottom: 0.4rem;
    z-index: 1;
  }

  &.small-btn {
    padding: 1rem 1.25rem !important;
  }

  &.after-label, &.right-edge {
    .icon {
      margin-left: 0.5rem;
    }
  }

  &.before-label, &.left-edge {
    .icon {
      margin-right: 0.5rem;
    }
  }

  &.expand-bg {
    &.dark {
      .filled {
        fill: var(--colorDarkRoast);
      }

      .stroked {
        stroke: var(--colorDarkRoast);
      }

      &:hover {
        border: var(--colorDarkRoast);

        label {
          color: var(--colorDarkRoast);
        }

        .expander {
          background-color: white;
          border: 1px solid var(--colorDarkRoast);
        }

        .filled {
          fill: white
        }

        .stroked {
          stroke: white
        }
      }
    }

    &.light {
      &:hover {
        label {
          color: var(--colorDarkRoast);
        }
      }
    }

    .icon {
      .filled {
        fill: var(--colorDarkRoast) !important;
      }
    }

    .expander {
      background-color: white;
      border: 1px solid var(--colorDarkRoast);
    }
  }
}

&:hover {
  .expander {
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    transition-timing-function: ease-out;
  }

}

.expander {
  transition: background-color 0.5s, left 400ms, right 400ms, top 400ms, bottom 400ms;
  background-color: antiquewhite;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
  border-radius: 100vw;
  z-index: 0;
}




&.extra-large {
  height: 3rem !important;
  font-size: 1.25rem;
}

&.rise {
  transition: transform 1s, box-shadow 1s;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    transform: translate(0.2rem, -0.2rem);
    box-shadow: -0.2rem 0.2rem 0.75rem rgb(0 0 0 / 70%);
  }

  &:active {
    transition: transform .1s, box-shadow .1s;
    transform: translate(0, 0);
    animation-delay: 0.1s;
    box-shadow: inset 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  }
}

.carat {
  position: absolute;
  display: flex;
  margin: 0;

  &.carat-pointing-left {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1.5rem;
    width: 0.35rem;
  }

  &.carat-pointing-right {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1.5rem;
    width: 0.35rem;
  }

  &.carat-pointing-down {
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 1.5rem;
    height: 0.35rem;
  }

  &.carat-pointing-up {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 1.5rem;
    height: 0.35rem;
  }
}

&.primary {
.icon{
.filled {
  fill: white !important;
}
}
  &:hover {
    .expand-bg {

    }

    label {
      color: var(--colorText);
    }

    .icon {
      .filled {
        fill: var(--colorDarkroast) !important;
      }
    }
  }


  .filled {
    fill: white !important;
  }
}

&.primary-light {
  border: none;
}

&.primary-cart-action {
  background-color: var(--colorLightCTA);
  border-color: var(--colorBoldCTA);
  border-width: 1px;

  .carat {
    .filled {
      fill: white;
    }
  }
}

&.ecommerce-secondary {
  border: 2px solid #F9C606 !important;
  background-color: #ffffff;

  &:hover {
    border: 2px solid var(--colorDarkRoast) !important;
  }
}

&.round-no-label {
  padding: 1.25rem;
  justify-content: center;

  .carat {
    display: none;
  }

  .icon {
    width: 100% !important;
    height: 100% !important;
  }
}

&.round-no-label {
  &.add-items {
    background-color: var(--colorCTAPrimary);

    .icon {
      .filled {
        fill: var(--colorText);
      }
    }
  }

  .icon {
    margin: 0;
  }
}

&.secondary {
  background-color: white;
  border: 2px solid var(--colorDarkRoast) !important;

  .icon-add {
    &.filled {
      fill: var(--colorText);
    }
  }
}
`