import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const navMobileStyles = css`

  //*********************
  //MOBILE
  //*********************


  //Handle layout
  &.mobile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    .account-placeholder{
      background-color: #ece9e4;
      height: 500px;
      width: 90vw;
      border-radius: 12px;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
      position: absolute;
      z-index: 1000;
      transform: translateX(-90%);
      margin-top: 8px;
      border: 1px solid #c4c4c4;
      left: 0;
    }
    
    .nav-item-container {
      .article-large, .article-small{
        .expander {
          display: none !important;
        }
      }
    }
    
    .article-small{
      .text-container{
        .text-primary{
          font-size: 28px !important;
        }
      }
    }

    section.section-container.links-large{
      .nav-item-image{
          max-height: none !important;
      }
    }
    
    .footer{
      height: auto !important;
      .nav-item-container.article-small {
        .expander{
          display: none !important;
        }
        .primary-text{
          font-size: 24px !important;
          margin-left: 16px !important;
          line-height: 24px !important;
        }
      }
    }
    
    .promo.solid-color{
      a{
        padding: 30px 14px;
        text-align: left;
      }
    }
    
    .free-shipping-message {
      display: none;
    }
    
    .nobo{
      display: none !important;      
    }
  
    .is-nobo{
        display: block !important;
    }
    
    .nav-item-container {
      margin-bottom: 16px;

      .chevron-right {
        width: 20px !important;
        height: 20px !important;
        margin-left: 12px !important;
        margin-top: 0;
      }
      .primary-text {
        margin-left: 0 !important;
      }
      .text-container{
        padding-left: 0 !important;
      }

      .expander {
        left: 0 !important;
        width: 100% !important;
        height: 2px !important;
        transform: scale(1) !important;
        display: block !important;
      }

    }

    .section-main {
      .text-container {
        padding: 4px 0 4px 0;
      }
    }

    .nav-items-area .nav-item-container.large {
      .text-container {
        padding: 4px 0 4px 0;
      }

      .primary-text {
        font-size: 18px;
        margin: 0;
        font-weight: 400;
      }
    }

    .nav-items-area .nav-item-container.large {
      height: auto;

    }


    .nav-item-container {
      &.large {
        font-size: 18px;
      }
    }
   

    .search-placeholder {
      border-radius: 100vw;
      overflow: hidden;
      border: 1px solid #d2d2d2;
      box-sizing: border-box;
      height: 40px;
      width: 100%;
      max-width: none;
      background-color: #F3F3F3; 
      margin: 0 20px 20px 20px;
      top: 90px;
      right: 0px;
      left: 0;
    }


    .welcome-area {
      h2 {
        font-size: 20px;
        font-weight: 400;
      }

      .welcome-area-menu {
        .k-btn {
          padding: 14px;

          label {
            font-size: 14px;
          }
        }
      }
    }


    .main-nav {
      &.k-btn {
        border-radius: 0 !important;
      }
    }

    header.main-header .secondary-importance-items {
      gap: 4px;  
      .action-item { 
        align-items: center;
        justify-content: center;
        width: 32px !important;
        padding: 0;
        .k-btn{
          .icon{
            width: 32px !important;
            height: 32px !important;
          }
        }
        .k-btn.text-icon-noBG {
          padding: 0 !important;
          margin: 0 !important;
          .icon{
            width: unset;
            height: unset;
          }
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
        background-color: #676A9B;

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
        width: 100%;
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

    .base-nav-sections .section-container.hero-gallery .promo .text-container {
      width: 100% !important;
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

      // If button is in top nav and highlighted, even though it's in mobile let's reset it
      &.highlight-bubble {
        label {
          color: ${colorNameToValue("milk-chocolate")} !important;
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
      min-height: 8vh;
      max-height: 40vh;
      background-color: ${colorNameToValue("sepia-light")};   
      flex-direction: column;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
      right: 0;
      z-index: 200;
      .closer {
        display: block;
      }

      .logo {
        width: 35vw;  
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
        align-items: center;

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
      align-self: flex-start;

      .k-btn {
        padding: 16px 40px;

        label {
          margin: 0;
          //font-size: 28px;
        }


      }

      &.hero-gallery {
        .nav-items-area {
          flex-direction: column;
        }

        .promo {
          min-height: 35vh;
          height: auto !important;
          border-radius: 0;
          border-bottom: 1px solid ${colorNameToValue("dark-roast")};
          .primary-text {
            font-size: 28px !important;
            line-height: 28px !important;
            margin: 0 0 8px 0;
          }

          .secondary-text {
            margin: 0;
            font-size: 24px !important;
            line-height: 24px !important;
          }
        }


        .product-hero {
          width: 100% !important;
          justify-content: center;
          border-bottom: 1px solid ${colorNameToValue("dark-roast")};
          padding-bottom: 6vw;

          .features-list {
            font-size: 18px;
            line-height: 18px;
            font-weight: 200;
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
    .link-graveyard, .mobile-extras-menu .link-graveyard, 
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
            margin: 0;
            align-self: flex-start;
            color: ${colorNameToValue("dark-roast")} !important;
          }

          .text-block {
            font-size: clamp(1rem, 1.25vw, 1.5rem);
            line-height: clamp(1.15rem, 2.75vw, 3rem);
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

    .nav-item-container {
      &.small {

      }

      &.small, &.medium {

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

        .expander {
          display: none !important;
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
        width: 100% !important;

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
              .expander {
                display: none !important;
              }
              label, .chevron-right {
                //color: ${colorNameToValue("dark-roast")} !important;
                color: white !important;

                .filled {
                  fill: ${colorNameToValue("dark-roast")} !important;
                }
              }

            }

            &.high {
              label {
                font-size: 28px;
                font-weight: 600;
              }
            }

            &.medium {
              label {
                font-size: 24px;
                font-weight: 600;
                color: ${colorNameToValue("medium-roast")};
              }

              .chevron-right {
                display: none;
              }

              .expander {
                display: inline-flex;
                opacity: 1 !important;
                width: 100% !important;
                height: 2px !important;
                left: 4px !important;
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
      position: absolute;
      border-radius: 0;
      right: 0;
      left: 0;
      box-shadow: none;
      background-color: ${colorNameToValue("sepia")};
    }

    .section-main {
      font-size: 30px;

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


      a {
        position: relative;
        align-items: flex-start;
        width: auto !important;

        .expander {
          opacity: 1 !important;
          height: 2px !important;
          background-color: white;
          bottom: 0;
          position: absolute;
          top: 100%;
        }

      }

      label {
        font-size: 18px;
        line-height: 19px;
        font-weight: 200;
        margin-top: 8px;
        margin-left: 18px;
        width: auto;
      }


      .nav-item-image {
        display: none;
      }
    }
  }

`;