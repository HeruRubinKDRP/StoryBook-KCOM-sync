import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const navMobileStyles = css`
  //*********************
  //*********************
  //MOBILE
  //*********************
  //********************* 

  //Handle layout
  &.mobile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    
   .free-shipping-message{
     display: none;
   }
    

    .welcome-area {
      h2 {
        font-size: clamp(1.25rem, 8vw, 2.5rem);
        font-weight: 400;
      }

      .welcome-area-menu {
        .k-btn {
          padding: clamp(0.75rem, 5vw, 1.5rem);

          label {
            font-size: clamp(0.5rem, 5vw, 1.65rem);
          }
        }
      }
    }

    .persistent-menu-items{
      align-items: center;
    }
    .main-nav{
      &.k-btn{
        border-radius: 0 !important;
      }
    }
    
    header.main-header .secondary-importance-items {
      gap: 3vw;

      .action-item {
        align-items: center;
        justify-content: center;

        .k-btn.text-icon-noBG {
          padding: 0.5rem !important;
          margin: 0 !important;
        }

        label {
          display: none;
        }
      }
    }

    .nav-item-container {
      max-height: none !important;
    }

    &.slide-nav-in {
      .main-navigation-container { 

        nav {
          animation: slideInFromRight 0.5s forwards;
        }
      }
    }

    .global-navigation .main-navigation-container .top-level-nav-items-container {
      .k-btn {
        &.highlight-by-color {

        }

        &:active {
          label {
            color: ${colorNameToValue("dark-roast")} !important;
          }

          .expander {
            opacity: 1 !important;
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            height: 100% !important;
            width: 100% !important;
          }
        }

        .icon {
          height: clamp(0.75rem, 5vw, 1.5rem) !important;
          width: clamp(0.75rem, 5vw, 1.5rem) !important;
        }
      }
    }

    .main-nav-content .base-nav-sections .section-container.hero-gallery .nav-items-area .nav-item-container {
      .promo, .product-hero {

      }

      .k-btn {
        transition: transform 0.25s ease-in;

        &:active {
          transform: scale(1.2);

          label {
            color: ${colorNameToValue("dark-roast")} !important;
          }

          .expander {
            opacity: 1 !important;
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            height: 100% !important;
            width: 100% !important;
          }
        }
      }


    }

    @keyframes slideInFromRight {
      0% {
        transform: translateX(100%)
      }
      100% {
        transform: translateX(0)
      }
    }
    @keyframes slideToRight {
      0% {
        transform: translateX(0)
      }
      100% {
        transform: translateX(100%)
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0
      }
      25% {
        opacity: 0.5
      }
      75% {
        opacity: 0.5
      }
      100% {
        opacity: 0
      }
    }
    @keyframes fadeOut {
      0% {
        opacity: 1
      }
      100% {
        opacity: 0
      }
    }

    .mobile-back-menu {
      position: relative;
      display: flex;
      flex-direction: row;
      background-color: white;
      padding: 3vw 0;
      justify-content: center;
      align-items: center;
      height: 12vw;

      .section-title {
        color: ${colorNameToValue("dark-roast")};
      }

      .k-btn.back-btn {
        height: 10vw !important;
        width: 10vw !important;
        position: absolute;
        left: 4vw;
        padding: 3vw;
        transition: transform 0.25s ease-in;

        &:active {
          transform: scale(1.2);
        }

        .chevron-left {
          .filled {
            fill: white !important;
          }
        }
      }
    }

    .global-navigation {
      width: 100%;
    }

    .menu-btn {
      display: inline-flex;
      transition: transform 0.15s ease-in;

      &:active {
        transform: scale(1.5);
      }
    }

    .nav-sections-main {

      min-height: 80vh;
    }

    .section-container {
      width: 100% !important;
    }

    .nav-item-image {
      width: 100%;
    }

    .promo {
      max-width: none !important;

      .text-block {
        margin-bottom: 3vw;
      }
    }


    .k-btn, .section-container .promo .k-btn {
      height: auto !important;
      color: rgb(51, 51, 51);
      display: flex;
      flex-direction: row-reverse;

      justify-content: flex-end !important;

      .expander {
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        left: 50% !important;
        right: 50% !important;
        top: 50% !important;
        bottom: 50% !important;
        transition: all 0.25s ease-in;
      }

      &:hover {
        label {
          color: white !important;
        }
      }

      // If button is in top nav and highlighted, even though it's in mobile let's reset it
      &.highlight-bubble {
        label {
          color: ${colorNameToValue("milk-chocolate")} !important;
        }

        &:hover {
          label {
            color: ${colorNameToValue("milk-chocolate")} !important;
          }
        }
      }
    }

    .nav-item-container {
      width: 100% !important;
    }

    .main-nav-content {
      flex-direction: column;
    }

    .icon {
      display: flex;
      align-items: center;
    }

    .text-container {
      padding: 1vw 3vw 1vw 3vw;

      .primary-text {
        display: inline-flex;
        align-items: center;

        label {
          margin-left: 0 !important;
        }
      }
    }

    .veil {
      &.slide-in-from-right {
        animation: fadeIn 0.65s ease-in forwards;
      }

      &.slide-right {
        animation: fadeOut 0.65s ease-in forwards;
      }

      pointer-events: none;
      opacity: 0;
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.65);
    }

    .nav-item-container {
      margin-bottom: 8vw;
      width: 100% !important;

      a.article-large {
        width: 100% !important;
      }

      .article-large {
        .primary-text {
          font-size: clamp(1.5rem, 3vw, 4rem);
          line-height: clamp(1.5rem, 3vw, 4rem);
          margin: 0;
          padding: 0 4vw 0 4vw;
        }

        .nav-item-image {
          //display: block !important;
          display: inline-flex !important;
        }
      }
    }

    .nav-item-container.promo {
      max-width: none !important;
      width: 100% !important;
      justify-content: center;

      &.solid-color {
        padding: 6vw 6vw !important;
      }

      .primary-text {
        font-size: clamp(1rem, 4vw, 4rem);
      }

      .secondary-text {
        font-size: clamp(1rem, 2vw, 2rem);
      }
    }

    // *** Animations ** handle panels slide in and out
    .slide-right {
      animation: slideToRight 0.5s ease-in forwards;
    }

    .slide-in-from-right {
      animation: slideInFromRight 0.5s ease-in forwards;
    }

    header.main-header {
      //height: 10vh;
      min-height: 8vh;
      max-height: 17vh;
      position: relative;
      right: 0;
      left: 0;
      top: 0;
      z-index: 122;
      flex-direction: column;

      .closer {
        display: block;
      }

      .logo {
        width: 35vw;
        position: absolute;
        left: calc(50%);   // center the logo   
        transform: translate(-50%, 0);
      }

      .k-btn {
        padding: 4vw;

        &.support-btn {
          display: none;
        }

        width: 15vw !important;

        .icon {
          width: 100% !important;
          height: 100% !important;
        }

      }

      .secondary-importance-items {
        left: 100%;
        position: absolute;
        transform: translateX(calc(-100% - 2vw));
        height: clamp(4rem, 13vw, 10rem) !important;

        .icon {
          overflow: visible;
        }

        .icon-cart {
          .stroked {
            stroke-width: 0.25vw;
            stroke-linecap: round;
          }
        }

        .k-btn {
          margin: 2vw 0vw 2vw 0vw !important;
          padding: 0;
          width: clamp(3rem, 6vw, 6rem) !important;
          border-radius: 0;

          &.logged-in {
            .icon-account {
              .filled {
                fill: ${colorNameToValue("dark-roast")}
              }
            }
          }

          &.not-logged-in {
            .icon-account {
              .filled {
                fill: transparent !important;
                stroke: ${colorNameToValue("dark-roast")};
                stroke-width: 0.25vw;
              }
            }
          }
        }
      }
    }

    .nav-sections-main {
      height: auto;
      max-height: none;
    }

    .base-nav-sections {
      flex-wrap: nowrap;
      position: static;
      height: auto;
      max-height: none;
      align-items: flex-start;
      z-index: 10000;
      overflow-x: visible;
    }

    .section-container {
      display: flex !important;
      flex-direction: column;
      flex-wrap: nowrap;
      flex-grow: 1;
      align-content: flex-start;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 5vw;
      align-self: flex-start;

      .k-btn {
        padding: clamp(1rem, 2vw, 3rem) clamp(1.5rem, 6vw, 6rem);

        label {
          margin: 0;
          font-size: clamp(1rem, 3vw, 3rem);
        }


      }

      &.hero-gallery {
        .nav-items-area {
          flex-direction: column;
        }

        .promo {
          min-height: 35vh;
          height: auto !important;

          .primary-text {
            font-size: clamp(2rem, 4vw, 4rem) !important;
            line-height: clamp(2rem, 4vw, 4rem) !important;
            margin: 0 0 2vw 0;
          }

          .secondary-text {
            margin: 0;
            margin: 0;
            font-size: clamp(1.25rem, 4vw, 5rem) !important;
            line-height: clamp(1.25rem, 4.4vw, 4rem) !important;
          }
        }

        .product-hero {
          width: 100% !important;
          justify-content: center;
          border-bottom: 1px solid ${colorNameToValue("dark-roast")};
          padding-bottom: 6vw;

          .features-list {
            font-size: clamp(1rem, 4vw, 4rem);
          }

          .product-image {
            display: none;
          }

          li {
            font-size: clamp(1rem, 2vw, 2rem);
            padding: 0.75vw;
          }

          h3 {
            font-size: clamp(2rem, 4vw, 4rem);
          }

          .fine-print {
            font-size: clamp(0.75rem, 2vw, 2rem);
          }
        }
      }

      .nav-items-area {
        width: 100%;
      }
    }

    .nav-sections-main {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      z-index: 100;


      .section-container.links-large {
        .nav-items-area {
          display: flex !important;
          flex-direction: column;
          //width: auto !important;
        }
      }
    }

    .link-graveyard.main,
    .link-graveyard .nav-item-container,
    .section-container, .nav-item-container a,
    .nav-item-container a,
    .base-nav-sections .section-container.hero-gallery .promo,
    .nav-item-container.article-large:nth-of-type(1) .nav-item-image {
      width: 100% !important;
    }


    // Presentation modes


    // *** content Max
    .nav-item-container.content-max {
      .content-max {
        width: 100%;
        display: flex;
        flex-direction: column;

        .nav-item-image {
          display: inline-flex;
          width: 100% !important;
        }

        .text-container {
          width: 100%;
          max-width: none;
          display: flex;
          flex-direction: column;
          align-items: center;

          .primary-text {
            margin: 0px 0 2vw 0 !important;
            padding: 0;
            font-size: clamp(1.5rem, 8vw, 6rem);
            line-height: clamp(1.5rem, 8vw, 6rem);
            width: 100%;
          }

          .secondary-text {
            font-size: clamp(1.5rem, 3vw, 4rem);
            line-height: clamp(1.5rem, 3vw, 4rem);
            margin: 0 0 5vw 0;
          }

          .text-block {
            font-size: clamp(1rem, 1.25vw, 1.5rem);
            line-height: clamp(1.15rem, 2.75vw, 3rem);
            margin-bottom: 5vw;
          }

          .k-btn {
            padding: clamp(1rem, 2vw, 3rem) clamp(1.5rem, 6vw, 6rem);

            label {
              font-size: clamp(1rem, 3vw, 3rem);
            }
          }
        }

        .expander {
          display: none;
        }
      }
    }


    // **** Product Large
    .nav-item-container.product-large, .nav-item-container.small, .nav-item-container.medium, .nav-item-container.large {
      &:hover {
        label {
          color: ${colorNameToValue("dark-roast")};
        }
      }

      .filled {
        fill: ${colorNameToValue("dark-roast")};
      }

      .stroked {
        stroke: ${colorNameToValue("dark-roast")};;
      }
    }

    .nav-item-container.product-large {
      width: 100%;

      a {
        width: auto !important;

        .text-container {
          width: 100% !important;

          .primary-text {
            margin: 0 0 0 3vw;
          }
        }

        .expander {
          width: calc(100% - 23vw) !important;
        }

        .chevron-right {
          display: none;
        }
      }
    }


    //**** Promo Mode

    .section-container {
      .nav-item-container.promo {
        .expander {
          display: none !important;
        }

        &.solid-color {
          &:hover {
            .chevron-right {
              display: none !important;
            }
          }

          a.promo {
            width: 100% !important;

            .text-container {
              width: 100%;
              display: flex;
              justify-content: center;
              flex-direction: column;

              .primary-text {
                width: 100% !important;
                margin: 0;
                font-size: clamp(1rem, 4vw, 4rem);
              }

              .chevron-right {
                display: none;
              }
            }

            .expander {
              display: none;
            }
          }
        }
      }


    }


    //**** Nav items SMALL *****

    .footer-area .footer-small-links-sub-section .small:hover label {
      color: ${colorNameToValue("medium-roast")} !important;
    }

    .nav-item-container {
      &.small {
        .expander {
          width: calc(100% - 15vw) !important;
        }
      }

      &.medium {
        .expander {
          width: calc(100% - 7vw) !important;
        }
      }

      &.small, &.medium {
        &:hover {
          .expander {
            opacity: 1 !important;
            transform: scale(1) !important;

            height: 2px !important;
            background-color: white !important;
            bottom: 0 !important;
            left: 6vw !important;
            top: 100%;
          }

          .secondary-text {
            color: ${colorNameToValue("medium-roast")} !important;
          }

          .primary-text {
            color: ${colorNameToValue("dark-roast")} !important;
          }

          .chevron-right {
            display: none !important;
          }

        }

        .icon {
          display: none;
        }
      }
    }

    // *** Article- Large

    .nav-item-container.article-large, .nav-item-container.article-small {
      &:hover {
        .secondary-text {
          color: ${colorNameToValue("medium-roast")};

        }

        .primary-text {
          color: ${colorNameToValue("dark-roast")};
        }

        .chevron-right {
          display: none !important;
        }
      }

      .chevron-right {
        display: none !important;
      }
    }

    // 
    .nav-item-container.article-large {
      a {
        .text-container {
          width: 100%;
          padding: 1vw 2vw 1vw 2vw;

          .secondary-text {
            margin: 0;
            font-weight: 400;
            font-size: clamp(1rem, 2vw, 3rem);
          }

          .primary-text {
            padding: 0;
            font-size: clamp(1.5rem, 5vw, 5rem);
            line-height: clamp(1.5rem, 4vw, 4rem);
          }
        }

        .expander {
          display: none;
          opacity: 0 !important;
        }
      }

      .nav-item-image {
        height: 40vh;
        overflow: hidden;
        border-radius: 2vw;

        img {

        }
      }
    }


    // **** ARTICLE SMALL

    .nav-item-container.article-small {

      .article-small {
        width: 100% !important;
        display: flex;
        flex-direction: row;

        .nav-item-image {
          display: inline-flex !important;
          height: 12vh;
          overflow: hidden;
          border-radius: 2vw;
        }

        .text-container {
          width: 100%;
          padding: 1vw 2vw 1vw 2vw;

          .secondary-text {
            margin: 0;
            font-weight: 400;
            font-size: clamp(0.75rem, 1.5vw, 2rem);
          }

          .primary-text {
            font-size: clamp(1.5rem, 3vw, 4rem);
            line-height: clamp(1.5rem, 3vw, 4rem);
            margin: 0;
          }
        }

        .expander {
          display: none;
        }

        .chevron-right {
          display: none !important;
        }
      }
    }

    .footer-area {
      .article-small {
        margin: 0 0 5vw 0;
        padding: 0 4vw;

        img {
          height: 100%;
        }
      }
    }

    // **************
    // MOBILE FOOTER
    // **************
    .footer-area {
      display: flex;
      flex-direction: column;
      height: auto;

      .nav-items-area {
        flex-direction: column;
      }

      .nav-item-container.promo {
        max-width: 100%;
        height: 35vw;

        a.promo {
          width: 100% !important;
          height: 100%;
        }

        .nav-item-image {
          display: block;
          position: absolute;
          width: auto;
          border-radius: 2.5vw;
          overflow: hidden;
          top: 1.5vw;
          bottom: 1.5vw;
          left: 3.5vw;
          right: 1.5vw;

          img {
            width: 100%;
            height: 100%;
            margin-bottom: 5vw;
          }
        }

        .text-container {
          position: absolute;
          width: 50%;
          left: 1.5vw;
          top: 5.5vw;
          z-index: 2;
          height: 100%;


          .primary-text {
            font-size: 5.25vw;
            line-height: 5.25vw;
          }

          .secondary-text {
            font-size: 3.5vw;
            line-height: 3.5vw;
            margin-top: 1vw;
          }
        }
      }

      .large {
        height: 35vw;
        width: 100% !important;
        margin-bottom: 5vw;

        .nav-item-image {
          display: flex;
          height: 100%;
          width: 100%;
        }
      }

      .section-main {
        width: 100%;
      }
    }


  }

  //Mobile
  //Handle visual appearance

  &.mobile {
    padding: 0;

    .base-nav-sections .section-container .nav-items-area .nav-item-container {
      .large {
        &:hover {
          label {
            color: ${colorNameToValue("dark-roast")};
          }

          .chevron-right {
            display: none;
          }
        }
      }
    }


    .highlight-by-color {
      .icon {
        display: inline-flex !important;
        height: 5vw;
        width: 5vw;
        margin-right: 0;
        margin-left: 2vw;
      }

      label {
        color: ${colorNameToValue("discount")} !important;
        font-weight: 600;
      }
    }

    .chevron-right {
      height: 4vw !important;
      width: 4vw !important;
      margin-left: 2vw !important;

      .filled {
        fill: ${colorNameToValue("medium-grey")}
      }
    }

    //main container
    .main-navigation-container {
      height: 100%;

      nav {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;

        .k-btn.highlight-bubble, .k-btn {
          background-color: transparent !important;

          label {
            color: ${colorNameToValue("milk-chocolate")};
          }
        }

        .top-level-nav-items-container {
          display: flex;
          flex-direction: column;
          row-gap: 4vw;

          .k-btn {
            display: inline-flex;
            align-self: flex-start;
            position: relative;

            &:hover {
              label, .chevron-right {
                color: ${colorNameToValue("dark-roast")} !important;

                .filled {
                  fill: ${colorNameToValue("dark-roast")} !important;
                }
              }

            }

            &.high {
              label {
                font-size: clamp(2rem, 6vw, 5rem);
                font-weight: 600;
              }
            }

            &.medium {
              label {
                font-size: clamp(2rem, 5vw, 5rem);
                font-weight: 400;
                color: ${colorNameToValue("medium-roast")};
              }

              .chevron-right {
                display: none;
              }

              .expander {
                display: inline-flex;
                opacity: 1 !important;
                width: 100% !important;
                height: 0.75vw !important;
                left: 2vw !important;
                right: 0 !important;
                top: 80% !important;
                background-color: white !important;
              }
            }

            .chevron-right {
              margin-top: 1vw;
            }

          }
        }
      }
    }

    .nav-sections-main {
      top: 0;
      padding-top: 15vh;
      position: absolute;
      border-radius: 0;
      right: 0;
      left: 0;
      box-shadow: none;
      background-color: ${colorNameToValue("sepia")};
    }

    .section-main {
      font-size: 7vw;

      .icon {

        transform: translateY(0.4vw);

        &.chevron-right {

          width: 4vw !important;
          height: 4vw !important;
          margin-left: 2vw !important;
          margin-top: 0.65vw;

          .filled {
            fill: ${colorNameToValue("light-grey")}
          }
        }
      }
    }

    //** Presentation Modes


    //side links container
    .link-graveyard {
      .nav-items-area {
        display: flex;
        flex-direction: column;
        width: 100%;

        .expander {
          opacity: 0 !important;
          left: 0;
        }

        label {
          flex-direction: row;

          .icon {
            height: 4vw;
            width: 3vw;
            margin-right: 3vw;
            margin-left: 1vw;
          }
        }
      }
    }


    .nav-item-container {


      align-items: flex-start !important;
      margin-bottom: 5vw;

      a {
        position: relative;
        align-items: flex-start;
        width: auto !important;

        .expander {
          opacity: 1 !important;
          transform: scale(1) !important;
          width: calc(100% - 15vw) !important;
          height: 2px !important;
          background-color: white;
          bottom: 0;
          left: 6vw;
          position: absolute;
          top: 100%;
        }

      }

      label {
        font-size: 4.5vw;
        line-height: 4.5vw;
        font-weight: 200;
        margin-top: 0.5vw;
        margin-left: 4vw;
        width: auto;
      }


      .nav-item-image {
        display: none;
      }
    }
  }

`;