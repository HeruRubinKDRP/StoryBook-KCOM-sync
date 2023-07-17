import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const ProductCardStyled = styled.div`
  display: inline-flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  .features{
    .bullet-point{
      .feature-description{
        margin-left: 0;
        margin-bottom: 0.25rem;
        text-align: center;
      }
    }
  }
  .cta-container{
    margin-top: auto;
  }
  .price-container-main {
    .final-price{
      margin-left: 0;
      padding: 0;
      font-size: 2rem;
      color: ${colorNameToValue("text")};
      .currency{
        left: -0.5rem;
      }
    }
  }
  .fly-out{
    &.notify-me{
      .text-input{
        margin-bottom: 1.5rem;
      }
      .k-btn{
        margin: 0;
        &:first-of-type{
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  .k-btn{
    margin: 1rem;

  }
  .price-container-main{
    align-self: center;
  }
  h3{
    margin-bottom: 0.5rem;
  }
  p{
    font-size: 1.25rem;
    font-weight: 200;
  }
  h3,p{
    text-align: center;
    color: $text;
  }
  p{
    margin: 0.5rem 1rem;
  }

  .color-options{
    display: flex;
    justify-content: center;

    ul{
      display: flex;
      list-style: none;
      margin: 1rem;
    }
    .color-dot{
      transition: all 0.5s;
      position: relative;
      margin-right: 0.5rem;
      height: 2rem;
      width:2rem;
      border-radius: 100vw;
      cursor: pointer;
      overflow: visible;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;

      .out-of-stock{
        width: 100%;
        height: 1px;
        border-bottom: 2px solid gray;
        transform: rotateZ(45deg);
        mix-blend-mode: difference;
        position: absolute;
        top: 50%;
      }
      &:hover{
        transform: scale(1.35);
      }
      &.white{
        border : 1px solid $dark-roast;
      }

      &.selected{
        .selected-marker{
          position: absolute;
          left: -0.25rem;
          right: -0.25rem;
          top: -0.25rem;
          bottom: -0.25rem;
          border: 1px solid;
          border-radius: 100vw;
        }
      }

    }
  }
  .learn-more{
    color: $dark-roast;
    label{text-decoration: underline}
  }
  .product-name{
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0.5rem;
    color: $dark-roast;
  }
  .product-image{
    max-height: 20vh;
    object-fit: contain;
  }

`
