import {css} from "styled-components";


export const navItemLargeNotLiquid = css`
  .nav-items-area {
    .nav-item-container {
      position: relative;

      &.large {
        padding: 0.75vw;
        width: 180px;
        height: 180px;
        display: flex;
        flex-direction: column;
        .icon {
          width: 1rem;
          height: 1rem;
        }
        .chevron-right{
          display: none;
        }
        .primary-text{
          display: block;
          margin: 0 0 37px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 20px;
          text-align: center;
          text-decoration: none;
        }
        .nav-item-image {
          border-radius: 100vw;
          overflow: hidden;
          height: 130px;
          width: 130px;
        }
      }
    }
  }
  
  
  // Inside Footer
  .footer{
    
    .nav-item-container {
      &.large {
        height: 100% !important;
        a{
          height: 100% !important;
          width: auto;
        }
        .nav-item-image { 
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`