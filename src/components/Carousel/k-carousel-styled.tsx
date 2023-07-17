import styled from "styled-components";

export const CarouselStyled = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
  position: relative;
  background-color: #54a6ef;

  &.desktop{
    .product-cards-container {
      display: flex;
      flex-direction: row;
    }
  }


  &.mobile{
    .product-cards-container {
      display: flex;
      flex-direction: column;
    }
  }

  @keyframes scaleWidth {
    from {
      width: 2rem
    }
    to {
      width: 10rem
    }
  }

  @keyframes scaleWidthMobile {
    from {
      width: 2rem
    }
    to {
      width: 4rem
    }
  }

  .left {
    margin-left: 0.75rem;
  }

  .right {
    margin-right: 0.75rem;
  }

  .left, .right {
    &:active {
      box-shadow: inset 0 0 15px 5px rgb(0 0 0 / 30%);
    }
  }

  &.stick-to-top {
    .slide {
      .section-front-center {
        padding: 0 4rem;
        align-items: flex-start;
      }
    }
  }

  .drag-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    .slide {
      width: 100%;
      flex-shrink: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &.multi {
        display: flex;
        justify-content: center;
        align-items: center;

        .product-item-card {
          margin-right: 1rem;
        }
      }
    }
  }

  &.width-between-200-and-599 {

    .section-front-center{
      border: 2px;
      margin-left: 0;
      margin-right: 0;
    }
    .images-container {
      flex-wrap: wrap;
    }




    .text-nav{
      label{
        white-space: normal;
        font-size: 1rem;
      }
    }

    .thumbnails-nav {
      padding: 0.25rem 0.5rem;

      .nav-item {
        &:last-child {
          margin-right: 0;
        }

        &.selected {
          animation: forwards 0.5s scaleWidthMobile;
        }

        width: 2rem;
        height: 2rem;
      }

    }

    &.hide-nav-btns {
      .nav-container {
        display: none;
      }
    }

    &.keep-nav-btns {
      .nav-container {
        .left, .right {
          width: 3rem;
          height: 3rem;
          transition: width 0.5s, height 0.5s;

          &:hover {
            width: 4rem;
            height: 4rem;
          }
        }

        .right {
          right: 1rem;
          border-radius: 100vw;

        }

        .left {
          left: 1rem;
          border-radius: 100vw;
        }
      }
    }
  }

  .thumbnails-nav {
    .image-item-container {
      padding-bottom: 0;
    }
  }

  .image-item-container {
    height: 100%;
    width: 100%;
    padding-bottom: 8rem;

    img.image-item {
      width: inherit;
      height: inherit;
      object-fit: contain;
    }
  }

  .nav-dots-container {
    &.top {
      top: 1rem;
      transform: translate(-50%, 0);
    }

    &.middle {
      bottom: 50%;
      transform: translate(-50%, -50%);
    }

    &.bottom {
      bottom: 1rem;
      transform: translate(-50%);
    }

    width: auto;
    flex-wrap: nowrap;
    position: absolute;
    backdrop-filter: blur(15px);
    display: flex;
    min-height: 2rem;
    min-width: 2rem;
    z-index: 1;
    left: 50%;

    border-radius: 0.5rem;
    list-style: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 1rem 0.75rem;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.25);

    .nav-text {
      color: white;
      margin-right: 1rem;
      user-select: none;
      cursor: pointer;
      position: relative;
      border-radius: 0.25rem;
      overflow: hidden;
      padding: 0.5rem 1rem;
      white-space: nowrap;

      &:hover {
        label {
          color: $dark-roast;
          z-index: 1;
        }

        .hover-panel {
          left: -10%;
          right: -10%;
          top: -10%;
          bottom: -10%;
          z-index: -1;
        }
      }

      .hover-panel {
        position: absolute;
        left: 50%;
        right: 50%;
        top: 50%;
        bottom: 50%;
        background-color: white;
        z-index: 0;
        transition: left 0.25s, right 0.25s, top 0.25s, bottom 0.25s;

        label {
          z-index: 1;
        }
      }

      &.selected {
        font-weight: bold;
        text-decoration: underline;
      }
    }

    .nav-dot {
      height: 1rem;
      width: 1rem;
      background-color: rgba(0, 0, 0, 0.2);
      border: 2px solid white;
      border-radius: 100vw;
      margin-right: 0.5rem;
      transition: width 0.5s, height 0.5s;

      &.selected {
        height: 1.5rem;
        width: 1.5rem;
        background-color: white;
      }
    }
  }


  .nav-container {
    display: flex;
    align-items: center;
    transition: opacity 0.5s;

    .disabled {
      pointer-events: none;
      opacity: 0.2;
    }


    .right, .left {
      width: 3rem;
      height: 3rem;
      background-color: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(10px);
      transition: width 0.25s, height 0.25s, top 0.25s;

      &:hover {
        width: 5rem;
        height: 5rem;
      }
    }

    .right {
      right: 0;
      border-radius: 0.5rem 0 0 0.5rem;
    }

    .left {
      left: 0;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }

  .product-item-card{
    .features{
      padding-top: 1rem !important;
    }
    .link-internal{
      margin: 0 !important;
    }

  }


  .small-container, .medium-container{
    ul.nav-dots-container.top.text-nav{
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      left: 1rem !important;
      right: 1rem !important;
    }
    .slide{
      justify-content: center !important;
      padding: 0;

      .section-front-center .messaging-container.text-left .cta-pos{
        justify-content: center !important;
      }
      .content-container{
        padding-top: 8rem;
        text-align: center;
      }
      .features{
        padding-top: 8rem;
      }
      .bullet-point{
        margin: 1rem 0;
        .icon{
          margin-bottom: 1rem;
        }
      }
      .features .bullet-point .icon{
        width: 100% !important;
      }
      .features .bullet-point .feature-description{
        align-items: center;
      }
    }
  }

  .images-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 2rem 10% 2rem 10%;

    .image-item {
      flex: 1 1 auto;
      max-width: 7rem;
      width: 20%;
      height: auto;
      object-fit: contain;
      margin-right: 2rem;
    }
  }

  .thumbnails-nav {
    flex-wrap: nowrap !important;

    .nav-item {
      margin-right: 1rem;
      transition: all 0.5s;

      .messaging-container {
        display: none;
      }

      &:hover {

        transform: scale(1.25);
      }

      &.selected {
        pointer-events: none;
        animation: scaleWidth .5s forwards;
        border-width: 3px;
      }
    }

    .message-pos {
      .k-btn {
        display: none;
      }

      padding: 0;
    }

    .nav-item {
      width: 5rem;
      height: 5rem;
      border-radius: 100vw;
      background-color: white;
      overflow: hidden;
      border: 1px solid white;

      p, h1, a, h2, h3 {
        display: none;
      }

      .image-item {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .nav-dots-container{

  }

  .duo-left {
    display: flex;

    & > div {
      flex-basis: 50%;
    }
  }

  //content cards

  //#### focal image card

  .slide{
    .focal-image-container{
      padding: 2rem 5% 3rem 5%;
    }
  }

`
