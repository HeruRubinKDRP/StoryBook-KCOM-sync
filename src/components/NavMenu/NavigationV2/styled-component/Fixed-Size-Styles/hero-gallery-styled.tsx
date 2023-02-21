import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const styledHeroGalleryNotLiquid = css`
 
  
  .base-nav-sections {
    .section-container.hero-gallery {
      width: 100%;
      height: 100%;
      align-self: stretch;
      flex: 1 1 100%;

      .promo {
        height: auto;
        width: auto;
        max-width: none;
        flex: 1 1 100%;

        .text-container {
          width: auto !important;

          min-height: 80px;
          right: 1.5vw;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 50%;
          transform: translateY(-50%);

          .primary-text {
            font-size: 24px;
          }

          .secondary-text {
            font-size: 16px;
            font-weight: 600;
            margin: 24px auto;
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
        width: 25.33% !important;

        .product-item-card {
          padding: 0.5rem 1rem;
        }

        .fine-print {
          font-size: clamp(0.5rem, 0.75vw, 1rem);
        }

        .cta-container {
          margin: 0 0 4px 0;
        }

        .product-name {
          font-size: 24px !important;
          font-weight: 700 !important;
          letter-spacing: 0 !important;
          line-height: 24px !important;
          text-align: center !important;
          white-space: normal !important;
        }

        .features-list {
          max-width: 250px;
          color: ${colorNameToValue("dark-roast")};
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 20px;
          text-align: center;
          margin: 0 auto;
        }

        .learn-more {
          margin: 0 auto;
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
          max-height: 171px;
          margin: 0 auto;
          display: block;
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
        flex: 1 1 100%;
        margin-top: 0;
      }
    }
  }
;`