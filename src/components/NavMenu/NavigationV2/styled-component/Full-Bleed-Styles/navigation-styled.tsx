import styled from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";
import {navMobileStyles} from "./nav-mobile-styled";
import {linkGraveyardStyled} from "./link-graveyard-styled";
import {styledNavThemes} from "../nav-themes-styled";


export const NavigationStyled = styled.div`
  //width media queries

  @media (max-width: 2400px) {
    .global-navigation {
      max-width: 1600px;
    }
  }
  //CLEAN EMPTIES
  * {
    .empty {
      display: none;
    }
  }

  ${linkGraveyardStyled};

  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;

  .empty {
    display: none !important;
  }

  &.is-nobo {
    .section-container.nobo {
      display: flex !important;
    }

    .secondary-importance-items .k-btn .icon-account {
      .filled{
        fill : ${colorNameToValue("KSK")} !important;
      }
    }
  }

  .base-nav-sections .section-container.nobo {
    display: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 111;
    background-color: antiquewhite;
    padding: 1vw;
    .nav-item-container {
      flex-grow: 0;
      outline: #3f3020 solid 1px;
      border-radius: 100vw;
    }

    .chevron-right {
      display: none;
      height: 0;
      width: 0;
    }
  }

  .persistent-menu-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${colorNameToValue("sepia-light")};
  }

  .global-navigation {
    width: 100%;
  }


  .mobile-back-menu {
    display: none;
  }

  .menu-btn {
    display: none;
  }

  .top-level-nav-items-container{
    background-color: ${colorNameToValue("sepia-light")};
  }
  
  nav {
   
  }

  .container-upper {
    z-index: 1;
    padding: 1vw 3vw;
    background-color: ${colorNameToValue("sepia-light")};
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .veil {
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: opacity 0.25s ease-in;

    &.slide-right {
      opacity: 0;
    }
  }

  //KEYFRAMES
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }


  //header area, with the logo and account buttons etc.
  .closer {
    display: none;
  }

  .secondary-importance-items {
    gap: 1vw;
    margin-bottom: 1vw;

    .action-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    label {
      font-size: 0.75vw;
    }

    .k-btn {
      padding: 1vw 1vw 0 1vw !important;

      .icon {
        margin: 0;
      }

      &.logged-in {
        .filled {
          fill: ${colorNameToValue("dark-roast")}
        }
      }

      &.not-logged-in {
        .filled {
          fill: transparent !important;
          stroke: ${colorNameToValue("dark-roast")};
          stroke-width: clamp(1px, 0.05vw, 2px);
        }
      }
    }
  }


  .icon-cart {
    .stroked {
      stroke-width: clamp(1px, 0.05vw, 2px);
      stroke-linecap: round;
    }
  }


  .icon-support {
    .stroked {
      stroke-width: clamp(1px, 0.05vw, 2px);
    }

    .stroked-highlight {
      fill: white;
      stroke-width: clamp(1px, 0.05vw, 2px);
      stroke: ${colorNameToValue("Primary-CTA")}
    }
  }


  .logo {
    width: clamp(2rem, 15vw, 14rem);
    left: 1vw;
  }

  label {
    &:empty {
      display: none;
    }
  }

  header.main-header {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .secondary-importance-items {
      display: flex;
      flex-direction: row;

      .k-btn {
        padding: 0 1.75rem;
        height: auto !important;

        .icon {
          width: clamp(1rem, 3vw, 3rem) !important;
          height: clamp(1rem, 3vw, 3rem) !important;
        }

        .filled {
          fill: ${colorNameToValue("dark-roast")}
        }


      }
    }
  }

  // Main top level

  .main-nav-content {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .top-level-nav-items-container {
    display: flex;
  }

  .main-nav {
    &.k-btn {
      border: 0 !important;
      background-color: transparent !important;
      padding: clamp(0.75rem, 1vw, 1.25rem) clamp(1rem, 1.25vw, 1.5rem);
      height: auto;

      label {
        font-size: clamp(0.75rem, 1.15vw, 1.25rem);
      }

      .icon {
        width: 1.25vw !important;
        height: 1.25vw !important;
        margin-right: 0.65vw !important;
      }

      &.active-hover-state {
        .expander {
          left: 1px;
          right: 1px;
          top: 1px;
          bottom: 1px;
        }
      }

      &.active-hover-state.highlight-bubble {
        background-color: white !important;

        label {
          color: ${colorNameToValue("dark-roast")} !important;
        }

        &:hover {
          label {
            color: ${colorNameToValue("dark-roast")} !important;
          }
        }
      }

      &.highlight-bubble {
        label {
          color: white !important;
        }
      }
    }


  }

  //common style rules across all styles

  .text-block {
    margin-bottom: 1vw;
  }

  .text-container {
    padding: 1vw;
  }

  img {
    object-fit: contain;
  }

  .expander {
    background-color: ${colorNameToValue("dark-roast")};
  }

  .nav-item-container {
    .chevron-right {
      opacity: 0;
    }

    &.medium {
      align-self: flex-start;
    }

    &:hover {
      .chevron-right {
        display: block !important;
        animation: slideRight 0.5s ease-out forwards;
        animation-delay: 0.25s;
        margin-left: 0.5vw;

        .filled {
          fill: white;
        }
      }
    }
  }


  //highlight by color like for the deals icon
  .highlight-by-color {
    label {
      color: ${colorNameToValue("discount")};
    }

    .icon {
      .filled {
        fill: ${colorNameToValue("discount")}
      }

      .stroked, .outlined {
        stroke: ${colorNameToValue("discount")}
      }
    }
  }

  // highlight by bubble
  .k-btn {
    &.highlight-bubble {
      background-color: ${colorNameToValue("dark-roast")} !important;

      label {
        color: white;
      }

      &:hover {
        label {
          color: ${colorNameToValue("dark-roast")}
        }

      }
    }

    .expander {
      background-color: white !important;
    }
  }

  // side bar - graveyard


  // Content Max for large articles
  .nav-item-container.content-max {
    margin-top: -1vw;

    .content-max {
      flex-direction: row;
    }

    .text-container {
      max-width: 50%;
      padding: 1.5vw;
    }

    .text-block {
      margin-bottom: 1vw;
      font-size: clamp(1rem, 1.25vw, 1.5rem);
      line-height: clamp(1rem, 1.75vw, 2rem);
    }

    label.primary-text {
      font-size: clamp(1rem, 2.5vw, 2.5rem);
      font-weight: 600;
    }

    label.secondary-text {
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      font-weight: 200;
      margin: 0 0 1vw 0;
    }

    .nav-item-image {
      height: 40vw !important;
      width: 60vh !important;
      border-radius: 1vw;
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    .chevron-right {
      display: none !important;
    }

    &:hover {
      .chevron-right {
        display: none !important;
      }
    }
  }

  // hero gallery type
  .base-nav-sections {


    .section-container.hero-gallery {

      .promo {
        height: 50vh !important;
        width: 50vh !important;
        max-width: 50vw;

        .text-container {
          width: auto !important;
          right: 1.5vw;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 50%;
          transform: translateY(-50%);

          .primary-text {
            font-size: clamp(1rem, 2vw, 2rem);
          }

          .secondary-text {
            font-size: clamp(1rem, 1.25vw, 1.25rem);
            font-weight: 600;
            margin-bottom: 2vw;
          }

          .text-block {
            font-size: clamp(1rem, 1vw, 1.25rem);
            font-weight: 200;
          }
        }

        .chevron-right {
          display: none;
        }

        &:hover {
          .chevron-right {
            display: none !important;
          }
        }
      }

      .color-options {
        display: none;
      }

      .product-hero {
        width: 20vw !important;

        .fine-print {
          font-size: clamp(0.5rem, 0.75vw, 1rem);
        }

        li {
          font-size: clamp(0.75rem, 1vw, 1rem);
          padding: 0.15vw;
        }

        .product-name {
          text-align: center;
          font-size: clamp(0.75rem, 1.5vw, 2rem);
          margin: clamp(0.5rem, 1vw, 12.5rem) clamp(0.25rem, 0.25vw, 0.5rem);
          white-space: nowrap;
        }

        .product-image {
          height: clamp(10rem, 22vh, 24rem);
          width: 18vw;
        }

        h3 {
          margin-top: clamp(0.5rem, 1vw, 1.5rem);
          font-size: clamp(1rem, 1.25vw, 1.5rem);
        }

        p {
          &:empty {
            display: none;
          }
        }

        .product-hero {
          display: grid;
          grid-template-rows: 2vw 1fr 1fr 1fr 1fr;
        }
      }

      .nav-items-area {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      }
    }
  }


  //in hover panel area
  .nav-item-image {
    display: flex;
  }

  .nav-items-area {
    .nav-item-container {
      position: relative;

      &.large {
        padding: 0.75vw;

        .nav-item-image {
          border-radius: 100vw;
          overflow: hidden;
        }
      }

      &.medium {
        padding: 0.5vw 0 0.5vw 0 !important;

        .nav-item-image {
          border-radius: 100vw;
          overflow: hidden;
        }
      }
    }
  }

  .nav-item-container {
    flex: 1 1 auto;
    align-self: flex-start;

    .nav-item-image, .text-container {
      z-index: 2;
    }

    a {
      label {
        z-index: 2;
      }
    }
  }


  //main nav hovers
  .expander {
    position: absolute;
    border-radius: 0.5vw;
    z-index: 0;
  }

  //Presentation Modes


  .promo {
    &.solid-color {
      background-color: ${colorNameToValue("medium-roast")};
      padding: 2vw 2vw !important;
      border-radius: 1vw;

      .text-container {
        position: relative !important;
        width: 100% !important;
        left: 0 !important;
        top: 0 !important;
        z-index: 2;
        text-align: center !important;

        label {
          color: white;
          justify-content: center;
        }

        .chevron-right {
          position: absolute;
          right: -1vw !important;
          height: 1vw;
          width: 1vw;
          top: calc(50% - 1vw);
        }
      }

      .expander {
        top: 0;
      }

    }
  }

  .nav-item-container {
    
    .article-large, .article-small {
      .nav-item-image {
        flex-direction: column;
      }

      .text-container {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }

  //ARTICLES MODES
  .nav-item-container.article-large, .nav-item-container.article-small {
    .text-container {
      margin-top: 0.25vw;
    }

    .secondary-text {
      color: ${colorNameToValue("medium-roast")};
    }

    .primary-text, .secondary-text {
      transition: color 0.5s ease-in;
    }

    .chevron-right {
      display: none;
      position: absolute;
      right: 0;
      height: 1vw;
      width: 1vw;
    }

    &:hover {
      .primary-text {
        color: white;
      }

      .secondary-text {
        color: white;
      }

      .expander {
        background-color: ${colorNameToValue("dark-roast")};
        right: -0.5vw;
        bottom: -0.5vw;
        left: -0.5vw;
        top: -0.5vw;
        border-radius: 1vw;
        animation: slideRight 0.5s forwards;
      }
    }
  }

  //ARTICLE LARGE

  .nav-item-container.article-large {
    .article-large {
      align-items: flex-start;
    }

    .secondary-text {
      font-size: 1vw;
    }

    .primary-text {
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      font-weight: 600;
    }


    &:nth-of-type(1) {
      grid-area: 1 / 1 / 3 / 1 !important;

      .nav-item-image {
        width: 20vw;
        height: auto;
      }
    }

    &:nth-of-type(3) {

    }


  }


  //SMALL ARTICLE
  .nav-item-container.article-small {
    width: 9vw !important;

    .secondary-text {
      font-size: 0.75vw;
    }

    .primary-text {
      font-size: 1vw;
      font-weight: 600;
    }

    .nav-item-image {
      width: auto;
    }

    .article-small {
      align-items: flex-start;
    }

    &:nth-of-type(3) {
      grid-area: 2 / 2 !important;
    }

    &:nth-of-type(2) {
      grid-area: 1 / 2 !important;
    }

    .chevron-right {
      display: none;
      position: absolute;
      height: 1vw;
      width: 1vw;
    }

  }


  .nav-item-container.product-large {
    padding: 0;

    .nav-item-image {
      height: 13vw;
      width: 13vw;
    }

    .primary-text {
      margin: 25% 5% 20% 10%;
    }

    .expander {
      transition: background 1s;
    }

    .chevron-right {
      display: none;
      height: 1vw;
      width: 1vw;
      right: calc(8% + 1vw);
      top: 47%;
      transform: translateY(-50%);
      position: absolute;
    }

    &:hover {
      label {
        color: white;
      }

      .expander {
        background: linear-gradient(180deg, ${colorNameToValue("dark-roast")} 0%, ${colorNameToValue("dark-roast")} 100%)
      }
    }
  }


  // Large Links section


  .section-container.links-large {
    .nav-item-container {
      &.large {
        .nav-item-image {
          transform: scale(1);
          transition: 0.25s transform ease-in;
        }

        .expander {
          width: 100%;
          transform: scale(0);
          bottom: 0;
          opacity: 0;
          transition: 0.25s transform ease-in, 0.5s opacity ease-in;
        }

        label {
          transition: 0.5s color ease-in;
        }

        &:hover {
          label {
            color: white;
          }

          .nav-item-image {
            transform: scale(0.85);
            box-shadow: 0 0 0.15vw 0.15vw white;
          }

          .expander {
            height: 100%;
            opacity: 1;
            transform: scale(1);
            background-color: ${colorNameToValue("dark-roast")};
          }
        }
      }

      &.promo {
        align-self: stretch;
        background-color: ${colorNameToValue("medium-roast")};
        border-radius: 1vw;
        padding: 2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;


        &:hover {
          background-color: ${colorNameToValue("dark-roast")};
        }

        .text-container {
          width: 100%;
          position: static;
          inset: 0;

          .primary-text {
            font-size: 1.5vw;
          }

          label {
            color: white;
            text-align: center;
            justify-content: center;
          }

          .chevron-right {
            position: absolute;
            height: 1vw;
            width: 1vw;
            top: calc(50% - 1vw);
            right: 1vw;
          }
        }
      }
    }

  }

  // Regular LINKS section
  .section-container.links {
    .nav-item-container {
      // base transition states
      .expander {
        transition: 0.25s transform ease-in, 0.5s opacity ease-in, color 0.25s ease;
        transform: scale(0);
        width: 0;
        height: 0;
      }

      .nav-item-image {
        transition: 0.25s transform ease-in;
        transform: scale(1);
      }

      label {
        transition: color 0.25s ease;
        transition-delay: 0.15s;
      }

      // hover initializes transitions


      // MEDIUM LINKS
      &.medium {
        .chevron-right {
          opacity: 0;
          width: 1.5vw;
        }

        &:hover {
          .chevron-right {
            height: 1vw;
            width: 1vw;
            z-index: 2;
            display: block;
          }

          .filled {
            fill: white;
          }

          label {
            color: white;
            width: auto;
          }

          .nav-item-image {
            transform: scale(0.75);
            box-shadow: 0 0 0.15vw 0.15vw white;
          }

          .expander {
            background-color: ${colorNameToValue("dark-roast")};
            width: 110%;
            height: 100%;
            left: -5%;
            right: -10%;
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }

    .expander {
      opacity: 0;
    }
  }

  .section-container.links {
    .nav-items-area {
      margin-top: 1.5vw;
    }
  }

  .section-main {
    font-size: 1.5vw;
    font-weight: 600;
    cursor: pointer;

    .text-container {
      padding: 0;
    }

    label {
      display: flex;
      cursor: pointer;
      color: ${colorNameToValue("medium-roast")};

      .icon {
        width: 0.65vw;
        margin-left: 0.5vw;

        .filled {
          fill: ${colorNameToValue("medium-roast")}
        }
      }
    }
  }

  .nav-item-container {
    display: flex;
    align-self: stretch;
    width: auto !important;
    max-height: 60vh;

    label {
      pointer-events: all;
      cursor: pointer;
    }

    .main-nav {
      width: auto;
    }
  }

  a {
    text-decoration: none;
    color: ${colorNameToValue("dark-roast")};
  }

  .nav-sections {
    display: flex;
  }

  nav {
    position: relative;
  }

  .nav-sections-main {
    background-color: white;
    position: absolute;
    display: block;
    //grid-template-columns: 1fr 25%;
    box-shadow: 0 3px 10px 0 #000;
    justify-content: flex-start;
    margin: 1vw auto;
    overflow: hidden;
    border-radius: 1vw;
    right: 2vw;
    left: 2vw;
    min-height: 60vh;
    max-height: calc(100% + 20vh);
    display: flex;
    flex-direction: column;
  }


  .base-nav-sections {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 65vh;
    min-height: 65vh;
    justify-content: flex-start;
    position: relative;
    gap: clamp(0.5rem, 2vw, 2rem);

    border-radius: 1vw;
    flex-grow: 1;
    align-items: center;
    align-content: center;

    .section-container {
      flex: 0;
      flex-wrap: wrap;
      height: auto;
      display: flex;
      flex-direction: column;
      align-self: flex-start;

      &.links-large {
        .nav-items-area {
          display: grid !important;
        }
      }

      &.links {
        //width: 20%;

        .nav-items-area {
          flex-direction: column;

          a {
            width: 100%;
          }
        }

        .section-main {
          align-items: flex-start;

          &.no-links {
            pointer-events: none;
          }

          .text-container {
            padding: 0;
          }
        }
      }

      .nav-items-area {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5vw;
        margin-top: 1vw;

        .nav-item-container {
          width: 100%;
        }
      }
    }
  }

  .large {
    display: flex;
    flex-direction: column;

    .icon {
      width: 1vw;
      height: 1vw;
    }

    label {
      font-size: 1.5vw;
      line-height: 1.5vw;
      font-weight: 600;
      margin-top: 0.5vw;
    }

    .nav-item-image {
      width: 10vw;
    }
  }

  .medium {
    display: flex;
    flex-direction: row;

    .icon {
      width: 1vw;
      height: 1vw;
      transform: translateX(0.25vw);
    }

    .text-container {
      padding: 0.25vw;
    }

    .primary-text {
      font-size: clamp(0.75rem, 1.15vw, 1.5rem);
      line-height: clamp(0.75rem, 1.1vw, 1.5rem);
      font-weight: 400;
      display: flex;
      align-items: center;
    }


    .nav-item-image {
      min-width: 4vw;
      margin-right: 0.3vw;
      width: 4vw;
    }
  }

  .small {
    position: relative;
    flex: 0 1 auto;

    .text-container {
      display: inline-flex;
      flex: 0 1 auto;
      padding: 0 !important;
    }
  }

  //FOOTER AREA

  .footer-area, .footer-area .nav-items-area, .footer-area .section-container {
    min-height: 10vw;
  }

  .footer-area {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    border-top: 1px solid #ece9e4;

    &:empty {
      display: none;
    }

    .footer {
      display: flex; 
    }

    .nav-items-area {
      width: 100%;
    }

    //ARTICLES
    .article-small {
      margin: 0.25vw 1.5vw 0.25vw 0.25vw;
      flex-grow: 0;
      min-width: 13vw !important;

      .text-container {
        padding: 0 1vw;
      }

      &:hover {
        .icon {
          display: none !important;
        } 
      }

      .nav-item-image {
        width: 100%;
        min-height: 6vw;
        overflow: hidden;
        border-radius: 1vw; 
        img {
          width: 100%;
          height: 7vw;
          object-fit: cover;
        }
      }
    }

    //SUB-SECTION
    .footer-small-links-sub-section {
      display: flex;
      gap: 0.5vw;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 1vw;
      margin-right: 1vw;
      justify-content: center;

      &:empty {
        display: none;
      }

      .icon {
        position: absolute;
        height: 1vw;
        width: 1vw;
        right: 0;
        margin: 0;
      }

      .expander {
        transition: right 0.25s ease-in;
        right: 100%;
        top: 0;
        bottom: 0;
        left: 0;
      }

      .small {
        flex-grow: 0;

        .primary-text {
          padding-right: 1.25vw;
        }

        &:hover {
          .expander {
            right: -0.25vw;
            top: -0.25vw;
            bottom: -0.25vw;
            left: -0.25vw;

          }

          label {
            color: white;
          }
        }
      }


    }


  }

  .nav-item-container.promo {
    padding: 0;
    width: 22vw !important;
    max-width: 25vw;
    display: flex;
    align-self: stretch;
    position: relative;
    flex-grow: 1;

    .nav-item-image {
      transition: border 0.25s ease-out;
    }

    &:hover {
      .nav-item-image {
        border: 0.25vw solid ${colorNameToValue("dark-roast")};
      }
    }

    a.promo {
      width: 100%;
    }

    .text-container {
      position: absolute;
      width: 50%;
      left: 1.5vw;
      top: 0.5vw;
      z-index: 2;
    }

    .primary-text {
      font-size: 1.25vw;
      font-weight: 600;
    }

    .secondary-text {
      font-size: 1vw;
      margin-top: 0.25vw;
    }

    .nav-item-image {
      position: absolute;
      width: auto;
      border-radius: 0.5vw;
      overflow: hidden;
      top: 0.5vw;
      bottom: 0.5vw;
      left: 0.5vw;
      right: 0.5vw;

      img {
        object-fit: cover;
      }
    }
  }

  .footer {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    :empty {
      display: none;
    }

    .nav-items-area {
      height: 100%;
    }

    .section-main {

      &.no-link {
        padding: 1vw 3%;
        width: 15%;

        .primary-text {
          color: ${colorNameToValue("dark-roast")} !important;
        }
      }
    }

    .nav-item-container {
      .large {
        .nav-item-image {
          height: auto;
          width: 8vw;
        }
      }
    }

    .nav-items-area {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }

  ${navMobileStyles}
  ${styledNavThemes}



`
