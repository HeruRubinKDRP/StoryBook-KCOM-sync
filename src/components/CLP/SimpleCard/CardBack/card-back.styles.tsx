import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {attentionCTA, ctaColorStyles, gradientSlide} from "../../../_commonStyles/common.styled";



export const CardBackStyled = styled.div ` 
  
  ${ctaColorStyles};  
  
  height: 100% !important;
  background-color: var(--colorDarkRoast);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  .nav-dots-container{ 
    border: none;
    padding: 0;
    backdrop-filter: none; 
    background-color: white;
    &.top{
      top: 0 !important;
    };
    &.bottom{
      bottom: 0;
    }
    
    .nav-dot.selective{
      height: 1rem;
        width: 1rem;
    }

  }
  .nav-container {
    .right {
      right: 5% !important;
    }
    .left{
      left: 5% !important;
    }
  }
  
  .parent-carousel{
    
  }

  .accordion-content-item {
    background-color: transparent !important;
    height: 100%;
  }

  .accordion-item.open {
    background-color: transparent !important;
    height: 75% !important;
  }

  .expand-collapse{
    padding: 8px 8px 0 8px;
  }
  
  .dimensions-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    img{
      width: 100%;
      margin-top: 15%;
    }
  }

  .k-carousel{
    background-color: white;
    .nav-item{
      color: #473036;
    }
    .drag-container{
     
      .drag-container{
       
      }
    }
  }


  .cta-main{
    &.k-btn{
      background-color: #f9c606 !important;
      color: #473036 !important;
      &.brewer-cta{
        @keyframes gradient-slide {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100%{
            background-position: 0% 50%;
          }
        }
        animation: gradient-slide 5s linear infinite;
        ${attentionCTA}
      }
      .filled{
        fill: #473036 !important;
      }
    }
    
  }

  .slides-container {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .slides-container{
      overflow: hidden;
    }
  }
  
  .accordion-container{
    padding: 4%;
    border-radius: 0 0 1rem 1rem;
  } 

  .feature-bullets-area  {
    width: 100%;
    height: 80%;
    margin-bottom: 5%;
    align-items: flex-start;
    align-self: flex-end;
    .feature-bullet-container {
      margin: 0.25rem; 
      width: 25%;
      height: 5rem; 
      box-shadow: -1px 6px 7px rgba(0,0,0,0.4);
      background-color: rgba(255, 255, 255, 1);
      transition: transform 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      border-radius: 1rem;
      .icon{
        padding-top: 15%;
        width: 100% !important;
        height: 50% !important;
      }
      &:hover {
        transform: scale(1.1);
      }
      .feature-name{
        font-size: 10px;
        line-height: 10px;
      }
    }
    .left, .right{
      background-color: #3B2B2F !important;
      border-radius: 100vw !important;
      margin: 0 !important;
    }
  }
  
  .feature-bullets-area{ 
    .header-area{
      width: 100%;
      padding: 0.25rem 0.25rem 0 0.25rem;
      position: absolute;
      top: 15%;
      z-index: 1;
      h2{
        display: none;
      }
      .header-action-area {
        border-radius: 1rem 1rem 0 0;
      }
    }
  } 
  
  .feature-details-container{
    padding: 15% 20%;
    h2{
      text-align: center;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }
    p{
      letter-spacing: 1px;
      text-align: left;
    }
  }
  
  .info-container{ 
    display: flex;
    flex-direction: column;
    height: 100%;
    .product-silo{
      width: auto;
      object-fit: contain;
      height: 100px;
    }
    .product-title-area{
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;
      padding-top: 1rem;
      h1{
        font-size: calc(0.5vw + 14px);
        line-height: calc(0.5vw + 16px);
        text-align: left;
        font-weight: 200;
        margin-bottom: calc(0.5vw + 6px);
        margin-top: calc(0.5vw + 2px);
        margin-right: 5%;
      }
    } 
  }
  
  .features-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 5%;
    column-gap: 2.5%;
    margin-top: 5%;
    height: 95%;
    margin-bottom: calc(var(--ctaButtonHeight) * 6 ) !important;
    .nav-container{
      display: none;
    }
    .features-carousel-container{
      width: 100%;
      height: 100%;
      .nav-container{
        display: flex !important;         
      }
    }
    li {
      display: flex;
      flex-direction: column;
      flex-basis: 30%;
      align-items: center;
      text-align: center;
      margin-bottom: 5%;
      background-color: white;
      border-radius: 1%;
      img {
        height: 2rem;
        width: 2rem;
        margin-right: 0.5rem;
      }
      span{
        font-size: 0.8rem;
      }
    }
  }

  .cta-container{
    bottom: 0;
    position: relative;
    width: 100%;
    height: calc(var(--ctaButtonHeight) * 3) !important;
    padding: 2% 5% 2% 5%;
  }
  
`;