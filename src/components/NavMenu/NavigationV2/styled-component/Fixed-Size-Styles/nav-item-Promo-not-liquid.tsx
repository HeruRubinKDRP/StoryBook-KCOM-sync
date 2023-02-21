import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const promoStylesNotFullyResponsive = css`

  //COMMON PROMO STYLES
  .nav-item-container.promo {
    max-width: 25vw;
    display: flex;
    align-self: stretch;
    position: relative;
    height: 449px !important;
    border-radius: 10px; 
    width: 49% !important;
    padding: 0;
    align-items: center;

    .nav-item-image {
      transition: border 0.25s ease-out;
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
      font-size: 24px;
      line-height: 20px;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .secondary-text {
      margin: 24px auto;
      min-height: 80px;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 20px;
      text-align: center;
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

  
  
  //**if inside a HERO section
  // for when it's in a hero-gallery
  .hero-gallery .nav-item-container.promo {

    // for promos don't have a link except primary CTAs
    .nav-item-container.promo,
    .nav-item-container.promo .text-primary,
    .nav-item-container.promo .text-secondary {
      pointer-events: none !important;
    } 
   
    .nav-item-image {
      inset: 0 !important;
    }

    .text-container {
      position: static;
      width: 100%;
      left: 1.5vw;
      top: 0.5vw;
      z-index: 2;
      transform: translateY(0%) !important;

      .primary-text {
        margin-bottom: 0.5rem;
      }

      .secondary-text {
        margin: 0 !important;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 20px;
        text-align: center;
        min-height: 24px;
      }

      .text-block {
        margin: 24px auto;
        min-height: 80px;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 20px;
        text-align: center;
        font-weight: 400;
      }
    } 
  }
  
  //*****Link Graveyard
  //*** PROMO MODE inside the graveyard ***///
  
  .link-graveyard{
    .nav-item-container.promo {
      flex: 1 1 auto;
      width: 100% !important;
      height: auto !important;
      max-width: 100%;
      .text-container {
        padding: 0;
      }
      .secondary-text{
        min-height: 24px !important;
        height: auto !important;
      }
      &.solid-color{
        background-color: ${colorNameToValue("medium-roast")};
        padding: 0;
        .secondary-text{
         margin: 0; 
        }
      }
    }  
  } 
  
  
  //In Large-Links Section
   
  section.section-container.links-large {
    .nav-item-image {
      height: 100% !important;
      width: 100% !important;
      max-height: 124px !important;
    }
    height: auto !important;
    .nav-item-container.promo { 
      height : auto !important;
      width: auto !important;
      align-self: stretch; 
      border-radius: 16px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
      &.solid-color{
        padding: 0 !important;
        background-color: ${colorNameToValue("medium-roast")};
      }
      &:hover {
        label{
          text-decoration: underline;
        }
      } 

      .text-container {
        width: 100%;
        position: static;
        inset: 0;
        .primary-text { 
          font-size: 19px;
          letter-spacing: 0;
          line-height: 24px;
          text-align: center;
        }
        .secondary-text{
          margin: 0;
          min-height: 24px;
        }

        label {
          color: white;
          text-align: center;
          justify-content: center;
        }

        .chevron-right {
          display: none;
        }
      }
    }
    
    
  }
  
  //
  
  
  //***FOOTER
  //if it's in the footer

  .footer-area {
    .promo{
      height: auto !important;
      width: 25% !important;
      .nav-item-image{
        inset: 0 !important;
      }
      .text-container{
        width: 50%;
        left: 0;
        top: 0;
        z-index: 2;
      }
      .primary-text{
        font-size: 16px;
        line-height: 17px;
      }
      .secondary-text{
        font-size: 12px;
        line-height: 13px;
        text-align: left;
        margin: 0;
      }
    }
    
  }
  
`