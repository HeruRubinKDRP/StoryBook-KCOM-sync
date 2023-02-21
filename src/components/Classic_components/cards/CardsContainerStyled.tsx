import styled from "styled-components";

export const CardsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 2%;
  margin-bottom: 2rem;
    justify-content: center;
  .inner-container{
    max-width: 1440px;
    min-width: 390px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2%;
    row-gap: 10px;
    justify-content: center;
  }
  .program-group, .program-logo{
    padding-right: 18px;
    
  }
  
  .classic-card-container{
    width: 22%;
    align-items: center;
  }
  
  &.desktop{
    .product-naming-area{
      &.mobile{
        display: none;
      }
      &.desktop{
        display: inherit;
      }
    }
  }
  
  &.mobile{
    .inner-container{
      justify-content: flex-start;
      gap: 0;
    }
    .product-naming-area{
      display: flex;
      flex-direction: column;
      &.mobile{
        display: inherit;
      }
      &.desktop{
        display: none;
      }
    }
    
    .program-group{
      padding: 0;
      flex-direction: row;   
      justify-content: space-between;
      
    }
    
    .box-count-title{
      text-align: left; 
    }
    
    .box-count-section{
      margin-bottom: 0;
    }
    
    .inner-container{
      flex-direction: column;
      padding: 4vw;
    }
    
    .top-content{
      padding: 0 23px 25px 6px;
    }

    .divider-horizontal {
      width: 100%;
      height: 2px;
      background-color: #EBE7E3;
      margin: 10px 0 !important;
    }
    
    .all-pricing-container{
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      label{
        text-align: left;
      }
    }
    .program-logo{
      flex-direction: column;
      justify-content: flex-end;
    }
    .ratings-overall-container{
      flex-direction: column;
      justify-content: center;
      width : 100%
    }

    .one-time-group {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .deal-banner{
      margin-left: 0 !important;
      justify-content: flex-start;
      width: 100%;
      p{
        padding: 0 !important;
        border-left: none !important;
        margin-left: -3px;
        margin-top: 3px;
      }
    }
    
    .variant-selection-menu-container{
      label{
        font-size: 18px;
      }
    }
    
    .card-bottom-content{
      transform: none;
      height: auto;
      opacity: 1;
      pointer-events: all;
      padding: 10px 0;
    }

    .classic-card-container{
      flex-direction: row;
      width: 100%;
      margin-bottom: 2vh;
      .inner{
        flex-direction: row;
      }
      .front-top{
        flex: 0 0 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 10px;
      }
      .purchase-options-explainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      }
    }
  }
  
  &.small{
    .program-group, .one-time-group{
      flex-direction: column;
    }

    .all-pricing-container label {
      text-align: left;
      font-size: 12px;
    }
    
    .box-count-title{
      font-size: 10px;
    }
    
    .program-logo{
      align-items: flex-start;
    }
    .container-classic{
      padding: 0 8px;
    }

    .price-amount {
      font-size: 16px;
      font-weight: 600;
    }
    
    .front-top{
      flex: 0 0 40%;
    }
    .top-content {
      padding: 0;
    }
    .variant-selection-menu-container{
      label{
        font-size: 14px;
      }
    }
  }
`
