import styled from "styled-components";

export const ContentItemStyled = styled.div`

  &.small-container {
    &.testimonial {

      .messaging-container {
        align-self: flex-start;
      }
    }

    .callout {
      width: 100%;
      max-width: 100%;

      h1 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }

    .duo {
      .messaging-container {
        p {
          padding: 0 10% 0 10% !important;
          margin-bottom: 1rem;
        }
      }
    }

  }

  &.large-container {
    &.mobile-only-cta {
      background-color: #007C91;
      .k-btn {
        display: none;
      }
    }
  }

  &.medium-container {

    .callout {
      max-width: 100%;

    }
  }

  &.no-padding-bottom {
    .section-front-center {
      padding-bottom: 0 !important;
    }

  }

  .content-item {
    height: 100%;
  }

  &.large-container {

    &.hero-image {
      height: 60vh;
    }
  }

  &.medium-container {
    &.hero-image {
      height: 80vh;
    }

    .terms-preview-container {
      flex-direction: column;
    }

    .secondary-message-item {
      &.Large {
        font-size: 1.5rem;
        line-height: 1.5rem;
        letter-spacing: 0.125rem;
      }

      &.Medium {
        font-size: 1rem;
        line-height: 1rem;
        letter-spacing: 0.125rem;
      }

      &.Small {
        font-size: 1.25rem;
        line-height: 2rem;
        letter-spacing: 0.025rem;
      }

      &.Tiny {
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: 0.025rem;
      }
    }

    .main-message-item {
      &.Huge {
        font-size: 4rem;
        line-height: 4rem;
        letter-spacing: 0.025rem;
      }

      &.Large {
        font-size: 2.5rem;
        line-height: 2.5rem;
        letter-spacing: 0.125rem;
      }

      &.Medium {
        font-size: 2rem;
        line-height: 2rem;
        letter-spacing: 0.125rem;
      }

      &.Small {
        font-size: 1rem;
        line-height: 1rem;
        letter-spacing: 0.125rem;
      }

      &.Tiny {
        font-size: 0.75rem;
        line-height: 0.75rem;
        letter-spacing: 0.125rem;
      }
    }

    .max-height {
      max-height: 100vh !important;
    }
  }


  &.small-container {
    .cta-pos {
      justify-content: center;
    }

    .terms-preview-container {
      flex-direction: column;
    }

    .duo {
      align-items: center;
      padding: 1rem 2rem !important;
    }

    .sub-section {
      width: 100% !important;
      min-height: 40vh !important;
      background-position: 50% 50%;
    }

    .messaging-container {
      padding: 0 !important;
    }

    .message-pos {
      padding-left: 0;
      padding-right: 0;
    }

    .secondary-message-item {
      &.Medium {
        font-size: 1rem;
        line-height: 1.25rem;
      }

      &.Small {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    .main-message-item {
      &.Medium {
        font-size: 2rem;
        line-height: 2rem;
      }

      &.Large {
        font-size: 2rem;
        line-height: 2rem;
      }
    }

    &.hero-image {
      height: 60vh;
    }
  }

  .k-carousel {
    width: 100%;

    .slides-container {
      width: 100%;
    }
  }

  .multi-card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem;

    &.mobile {
      flex-direction: column !important;
    }
  }

  .small-container {
    .slides-container {
      .images-container {
        flex-wrap: wrap;

        .image-item {
          max-width: 10rem;
          width: 25%;
          object-fit: contain;
          margin-right: 1.5rem;
          margin-left: 1.5rem;
          margin-bottom: 3rem;
        }
      }
    }
  }
  
  
  
  .testimonial-area {
    p {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    .stars-group {
      display: flex;
      flex-wrap: nowrap;

      .star {
        margin-right: 0.25rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .duo-tiled { 
    .resizer {
      background: none;
    }

    .terms-preview-container {
      p, a {
        color: $dark-roast !important;
      }

      .slide-down-mode {
        .seo-item-container {
          border-color: $dark-roast !important;
        }
      }
    }
  }


  .key-value-content-container {
    .icon {
      .outlined {
        stroke-width: 7px;
      }
    }

    .primary-label {
      font-weight: 600;
    }

    .before {
      margin-right: 0.5rem;
    }

    .after {
      margin-left: 0.5rem;
    }
  }

  .multi-key-value-container {
    display: flex;
    padding: 1rem;
    width: 100%;

    &.stacked {
      flex-direction: column;

      .key-value-content-container {
        margin-bottom: 1.5rem;

        h2 {
          font-size: 1.25rem;
        }

        &:last-child {
          margin-bottom: 2.5rem;
        }
      }
    }

    &.inline {
      flex-direction: row;
      flex-wrap: wrap;

      h2, p {
        white-space: nowrap;
      }

      .key-value-content-container {

        margin-right: 1rem;
        margin-bottom: 1rem;

        h2 {
          font-size: 1.25rem;
          display: flex !important;
          flex-direction: row !important;
        }

        h2, p {
          white-space: normal !important;
        }
      }
    }
  }

  .multi-card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .key-value-content-container {
    display: flex;

    &.stacked {
      flex-direction: column;

      p, h2 {
        margin-left: 0 !important;
      }
    }

    &.inline {
      flex-direction: row;

      .icon {
      }

      h2 {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    p {
      display: inline-flex;
      font-size: 1.25rem;
      margin: 0 0 0 0.5rem;
      line-height: 1rem;
      align-items: center;

      &:first-child {
        margin: 0;
      }
    }

    h2, p {
      display: inline-flex;
      font-size: 1rem;
    }
  }


  .slide-down-mode {
    position: relative;
    overflow: hidden;

    .seo-item-container {
      animation: moveDownFromTop forwards 0.5s ease-in-out;
      border-top: 1px solid white;
      margin-top: 0.75rem;

      h1.seo-main-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }

      padding: 0;
    }
  }

  .stretch {
    height: 100%;
    width: 100%;
  }

  .flag {
    width: auto;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.075rem;
    font-weight: 800;
    margin-bottom: 1rem;
    display: inline-flex;
  }

  .terms-preview-container {
    z-index: 25;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    p {
      font-weight: 400;
      margin-right: 0.5rem;
      margin-top: 0.3rem;
    }

    a {
      user-select: none;
      display: flex;
      cursor: pointer;
      font-weight: 800;
      text-decoration: underline;
      align-items: center;

      .icon {
        margin-left: 0.25rem;
      }
    }
  }

  .push-down-small {
    padding-bottom: 4rem;
  }

  .messaging-container {
    position: relative;

    .slide-down-mode {
      animation: forwards 0.5s;
    }

    .callout {
      &.right-top {
        align-self: flex-end;
      }

      &.left-top {
        align-self: flex-start;
      }

      &.right-bottom {
        right: 0;
        bottom: 0;
      }

      &.left-bottom {
        left: 0;
        bottom: 0;
      }

      position: relative;
      z-index: 1;
      width: auto;
      right: 0;
      max-width: 50%;
      min-width: 12rem;
      padding: 1rem;
      background-color: #ebe7e3b3;
      backdrop-filter: blur(4px) brightness(1.5);
      border-radius: 0.5rem;

      h1 {
        font-size: 2rem;
        line-height: 2.25rem;
        font-weight: bold;
        letter-spacing: 0;
      }
    }
  }

  .page-container-main {
    //scroll-snap-type: y mandatory;
    overflow-y: auto;
    height: 100vh;

  }

  .content-container {
    height: 100%;
    width: 100%;

    &.focal-image-bottom {
      padding-bottom: 0;
    }

    &.half-tall {
      height: 50vh;
    }

    &.message-upper {
      .section-front-center {
        align-items: flex-start;
        padding: 4rem 10%;
        min-height: 43rem !important;
      }
    }

  }


  .content-item {
    position: relative;

    .cover-all-CTA {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
      z-index: 100;
    }
  }

  .duo {
    .messaging-container {
      &.text-left {
        text-align: left !important;

        .cta-pos {
          justify-content: flex-start !important;
        }
      }

      &.text-left {
        text-align: left !important;

        .cta-pos {
          justify-content: flex-start !important;
        }
      }
    }

    &.left-pos {
      .secondary-message-item {
        padding-left: 0;
      }
    }

    &.right-pos {
      .secondary-message-item {
        padding-left: 0;
      }
    }
  }

  .terms-conditions-container {
    display: flex;
    position: absolute;
    bottom: 1rem;
    margin-top: 2rem;

    &:empty {
      margin: 0;
      padding: 0;
      display: none;
    }

    p, a {
      white-space: nowrap;
    }

    .terms-conditions-copy {
      margin-right: 0.5rem;
    }

    .cta-small {
      text-decoration: underline;
      font-weight: bold;
    }
  }

  .inset-beveled {
    margin: 2rem;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .sub-section {
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .small-container, .medium-container {
    height: auto;
    width: 100%;

    .stars-group {
      justify-content: center;
    }


    .messaging-container {

      .secondary-message-item {
        line-height: 30px !important;
        font-size: 1rem;

        &.Large{
          font-size: 1.25rem;
          line-height: 1.5rem;
          letter-spacing: 0;
        }

        &.Small {
          font-size: 1rem;
          line-height: 1.25rem;
          letter-spacing: 0;
        }

        &.Medium {
          font-size: 1rem;
          line-height: 1.25rem;
          letter-spacing: 0;
        }

        &.Tiny {
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.5px;
        }

        &.medium-weight {
          font-weight: 500;
        }
      }


      h1 {
        &.Huge {
          font-size: 2.25rem !important;
          line-height: 3.25rem !important;
          letter-spacing: 0 !important;
        }

        &.Medium {
          font-size: 2rem !important;
          line-height: 2.25rem !important;
          letter-spacing: 0 !important;
        }

        &.Small {
          font-size: 1rem !important;
          line-height: 0.75rem !important;
          letter-spacing: 0 !important;
        }

        &.Tiny {
          font-size: 12px !important;
          line-height: 10rem !important;
          letter-spacing: 0 !important;
        }
      }
    }


    .duo {
      .message-pos {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 0;
      }

      .sub-section {
        width: auto;
        min-height: 50vh;
      }

      &.left-pos {
        flex-direction: column;
      }

      &.right-pos {
        flex-direction: column-reverse;
      }
    }

  }

  .main-message-item, .secondary-message-item {

    &:empty {
      display: none;
    }

    &.heavy-weight {
      font-weight: 600;
    }

    &.medium-weight {
      font-weight: 500;
    }

    &.regular-weight {
      font-weight: 400;
    }

    &.light-weight {
      font-weight: lighter;
    }
  }

  .main-message-item {


    &.medium-weight {
      font-weight: 500;
    }

    &.light-weight {
      font-weight: 200;
    }

    &.regular-weight {
      font-weight: 400;
    }

    &.bold-weight {
      font-weight: 600;
    }

    &.heavy-weight {
      font-weight: 800;
    }

    &.Large {
      font-size: 2.75rem;
      line-height: 3.25rem;
      letter-spacing: 0.025rem;
    }

    &.Huge {
      font-size: 3.25rem;
      line-height: 4rem;
      letter-spacing: 0.025rem;
    }

    &.Medium {
      font-size: 2.25rem;
      line-height: 2.5rem;
      letter-spacing: 0.025rem;
    }

    &.Small {
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: 0.125rem;
    }

    &.Tiny {
      font-size: 18px;
      line-height: 1.25rem;
      letter-spacing: 0.025rem;
    }
  }

  .secondary-message-item {
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    width: 100%;
    padding: 0 10%;

    &.heavy {

    }

    &.regular {

    }

    &.light {

    }

    &.Huge{
      font-size: 2.25rem;
      line-height: 2.25rem;
      letter-spacing: 0;
    }

    &.Large {
      font-size: 2rem;
      line-height: 2rem;
      letter-spacing: 0;
    }

    &.Medium {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0.125rem;
    }

    &.Small {
      font-size: 1.25rem;
      line-height: 2rem;
      letter-spacing: 0.125rem;
    }

    &.Tiny {
      font-size: 1rem;
      line-height: 1.25rem;
      letter-spacing: 0.025rem;
    }
  }

  .duo {
    display: flex;
    width: 100%;

    &.left-pos {
      flex-direction: row-reverse;
    }

    .sub-section {
      height: auto;
      width: 50%;
      overflow: hidden;
      position: relative;

      video {
        height: 100%;
        position: absolute;
        object-fit: cover;
        width: 100%;
      }
    }

    .message-pos {
      display: flex;
      align-items: center;
      width: 50%;
      padding: 6rem 3rem;
      box-sizing: border-box;
    }

    .cta-pos {
      width: 100%;
      display: flex;
      margin-top: 1rem;
    }

    .messaging-container {
      flex-direction: column;
    }
  }

  .messaging-container {
    display: flex;

    .focal-image {
      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
      max-height: 50vh;

      &.text-left {
        align-self: flex-start;
      }

      &.text-right {
        align-self: flex-end;
      }

      &.text-center {
        align-self: center;
      }

      img {
        object-fit: contain;
        width: auto;
      }

      &.bottom {
        margin-top: 1.5rem;
      }

      .icon {
        .filled {
          //fill: none;
        }

        .stroked {
          stroke: none;
        }
      }
    }
  }

  .section-front-center {
    background-size: cover;
    background-position: 50% 50%;
    padding: 3rem 15%;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .dark-fader {
      z-index: 20;
    }

    .messaging-container {
      flex-direction: column;
      text-align: center;
      z-index: 100;
      align-items: center;

      .cta-pos {
        display: flex;
      }

      &.text-center {
        text-align: center;

        .cta-pos {
          justify-content: center !important;
        }
      }

      &.text-right {
        text-align: right;
        justify-content: flex-end !important;

        .cta-pos {
          justify-content: right !important;
        }
      }

      &.text-left {
        text-align: left;
        justify-content: flex-start !important;

        .cta-pos {
          justify-content: left !important;
        }
      }

      .k-btn {
        margin-top: 1.5rem;
      }
    }

    video {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    h1 {
      position: relative;
      z-index: 100;
    }

    .has-shadow {
      text-shadow: 0.25rem 0.25rem 1.25rem rgba(0, 0, 0, 0.65);
    }
  }

  .stretch-absolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .dark-fader {
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  }

  .light-fader {
    background: linear-gradient(360deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 100%);
  }
  
  
`;