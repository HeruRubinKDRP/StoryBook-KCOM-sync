import {css} from 'styled-components';

export const navItemContentMaxNotLiquid = css`
  // Content Max for large articles
 
  
  .nav-item-container.content-max {
    margin-top: -16px;

    .content-max {
      flex-direction: row;
    }

    .text-container {
      max-width: 50%;
      padding: 24px;
    }

    .text-block {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 20px;
    }

    label.primary-text {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 18px;
      margin-bottom: 22px; 
    }

    label.secondary-text {
      color: white;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 25px;
      margin-bottom: 22px;
    }

    .nav-item-image {
      height: 100% !important;
      width: 50% !important;
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
`;