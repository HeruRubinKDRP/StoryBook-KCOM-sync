import styled, {Interpolation} from "styled-components";
import css from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {cardBorder, UI_rules} from "../reusable css/reusable-css";


export interface smallAddToCartTheme {
    outerWidth: number;
    heightY: number;
    actionBarHeight : number;
    dynamicStyles : Interpolation<any>
}

export const SmallAddToCartJourneyStyled = styled.div<smallAddToCartTheme>`
  

 
  // variables
  // --overallWidth: ${(props) => props.outerWidth + 'px'};
  
  ${props => props.dynamicStyles};
  
  --button-size:  calc( var(--overallWidth) * 0.02);
  --buttonLarge: calc( var(--overallWidth) * 0.065);
  --buttonMedium: calc( var(--overallWidth) * 0.035);

  --iconStroke: calc( var(--overallWidth) * 0.019);
  --iconStrokeTiny: calc( var(--overallWidth) * 0.002);
  --iconStrokeSmall: calc( var(--overallWidth) * 0.004);
  --iconStrokeMedium: calc( var(--overallWidth) * 0.01);
  --iconStrokeLarge: calc( var(--overallWidth) * 0.01);
  
  --iconSize: calc( var(--overallWidth) * 0.5 * 0.05);
  --iconSizeLarge: calc( var(--overallWidth) * 0.05);

  --fontHuge: calc( var(--overallWidth) * 0.025 + 24px );
  --fontLarge: calc( var(--overallWidth) * 0.03 + 18px ); 
  --fontMedium: calc( var(--overallWidth) * 0.015 + 14px );
  
  --fontSmall: calc( var(--overallWidth) * 0.02 + 12px); 
  --fontTiny: calc( var(--overallWidth) * 0.01 + 6px );

  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorGreen: ${colorNameToValue("OK-Status")};
  --colorLatte: ${colorNameToValue("latte")};
  --colorSepia: ${colorNameToValue("sepia")};

  --productImageSize: calc( var(--overallWidth) * 0.25);

  --spacingLarge: calc( var(--overallWidth) * 0.05 );
  --spacingMedium: calc( var(--overallWidth) * 0.025 );
  --spacingSmall: calc( var(--overallWidth) * 0.015 );
  --spacingTiny: calc( var(--overallWidth) * 0.0075 );

  --boxShadowLarge: 0 calc(var(--button-size) * 0.12) calc(var(--button-size) * 0.22) calc(var(--button-size) * 0.053) rgba(0,0,0,0.25);
  --boxShadowHuge: 0 calc(var(--button-size) * 0.36) calc(var(--button-size) * 0.22) calc(var(--button-size) * 0.053) rgba(0,0,0,0.25);

  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 110000000000;
  .back-fill{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: calc(100% - 50vh);
    background: linear-gradient(0deg, rgba(0,0,0,0.5), transparent);
  }
  
  .modal-item{
    ${cardBorder};
    box-shadow: var(--boxShadowLarge);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    border-radius: var(--spacingTiny);
    margin: 0 10% 5% 10%;
    max-width: 80%;
    min-width: 80%;
    max-height: 55%;
    z-index: 100000000000;
    background-color: white;  
  }
  img{
    object-fit: contain;
  }

  @keyframes slideInFromBottom {
    0% { transform: translateY(100%); }
    100% { transform: translateY(0); }
  }

  @keyframes fadeIn {
    0%{
      opacity:  0;
    }
    100%{
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    0%{
      transform:  scale(0);
    }
    100%{
      transform:  scale(1);
    }
  }

  @keyframes scaleRight{
    0%{
      width: 0 !important;
    }
    100%{
      width: 100% !important;
    }
  }
  transform: translateY(100%);
  animation: slideInFromBottom 0.6s ease-in-out forwards;
  animation-delay: 0.2s;
  
  
  .close-btn{
    padding: var(--spacingMedium);
    width: auto;
    height: auto;
    .icon{
      margin-left: 0 !important;
    }
  } 
  

  .icon{
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: visible;
    svg{
      overflow: visible;
    }
  }

  .content-area {
    display: flex;
    flex-direction: row;
  }

  .header-area {
    padding: 0;
    border-bottom: 1px solid var(--colorLatte);
    display: flex;
    flex-direction: row-reverse;
    align-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
    .free-shipping-indicator, .free-shipping-placeholder-inner{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .free-shipping-placeholder-inner{
      display: flex;
      align-items: center;
      gap: var(--spacingTiny);
      p{
        font-size: var(--fontTiny);
        color: var(--colorDarkRoast);
      }
      .free-shipping-truck{        
        height: var(--iconSizeLarge);
        width: var(--iconSizeLarge);
        
        .stroked{
          stroke-width: var(--iconStrokeTiny);
        }
      }
    }
  }
  
  

  .actions-container, .suggested-products-container .suggested-products {
    display: flex; 
    gap: var(--spacingTiny);
    justify-content: center;
    .k-btn {
      width: 50% !important;
      padding: var(--spacingMedium) var(--spacingLarge);
      label{
        font-size: calc(var(--fontTiny));
      }
    }
  } 

  .product-area {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
    flex-wrap: wrap;
    gap: calc(var(--spacingSmall) );
    padding: var(--spacingSmall) var(--spacingMedium);
    
    //top area that informs of success
    .cart-message {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: clamp(4px, ${(props) => props.theme.heightY * 0.005}px, 24px);

      p{
        color: var(--colorGreen);
        font-size: var(--fontTiny);
        font-weight: 600;
        white-space: nowrap;
      }

      .checkmark-circled {
        margin-right: var(--spacingTiny);
        margin-bottom: 0;
        height: var(--fontTiny);
        width: var(--fontTiny);

        .filled {
          fill: var(--colorGreen);
        }

        .stroked {
          stroke: var(--colorGreen);
          stroke-width: var(--iconStrokeSmall);
        }
      }
    }
    
    .product-added, .actions-container{
      width: 100%;
    }
    
    .product-added {
      display: flex; 
      flex: 1;
      align-items: center;
      .product-image {
        padding-right: 5%;
        width: calc(var(--productImageSize) * 0.5);
        height: calc(var(--productImageSize) * 0.5);
        img{
          width: 100%;
          height: 100%;
        }
      }
      
      .product-status-area {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .product-name-area {
          display: flex;
          flex-direction: column;
          margin-top: var(--spacingTiny);
          .brand{
            font-weight: 200;
            font-size: calc(var(--fontTiny) * 0.65);
          }
          .product-name {
            font-size: calc(var(--fontSmall) * 0.65);
            font-weight: 200;
          }
        }
      }
    }
  }  

  .suggested-products-container {
    width: 50%;
    min-width: 25%;
    background-color: var(--colorSepia);
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: var(--spacingSmall);
    .suggested-products, .actions-container {
      width: 100%;
      gap: var(--spacingSmall);
      padding: var(--spacingTiny);
    }
    .loading{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .Typist{
        display: flex;
        align-items: center;
        h2{
          font-size: var(--fontTiny);
        }
      }
      .loading-graphic{
        height: calc(var(--productImageSize) * 0.5);
        width: calc(var(--productImageSize) * 0.5);
      }
      img{
        height:100%;
        width: 100%;
      }
      
    }
    .suggested-products {
      display: flex;
      align-content: center;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      .product-image {
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: left;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: calc(var(--productImageSize) * 0.5);
        height: auto;
        .product-image-inner{
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        button.k-btn{
          width: var(--buttonMedium) !important;
          height: var(--buttonMedium) !important;
          padding: 8% !important;
          position: absolute;
          top: 0;
          right: 0;
          border: 1px solid white;
          box-shadow: 0 calc(var(--button-size) * 0.1) calc(var(--button-size) * 0.19) calc(var(--button-size) * 0.04) rgba(0,0,0,0.5);
          background-color: ${colorNameToValue("dark-roast")} !important;

          &.add-label-btn{
            display: none;
          }
          &:hover{
            .filled{
              fill: var(--colorDarkRoast);
            }
          }

          &.secondary{
            border: 2px solid var(--colorDarkRoast) !important;
          }
          .icon{
            margin: 0;

          }
          &:empty{
            display: none;
          }
          .filled{
            fill: white;
          }
          .stroked{
            stroke: white;
          }
        }
        .product-name{
          padding: 0 10%;
          font-size: calc(var(--fontTiny) * 0.75);
        }
      }
    } 
  }

  

  

  .k-btn label{
    font-weight: 400;
    //Math.min(Math.max(calculatedValue, minValue), maxValue);
    // this will let us use the container instead of the viewport, container queries vs media queries
    font-size: var(--fontTiny);
  }

  .product-name{
    font-size: var(--fontMedium);
  }


  

  .suggested-products{ 
    
    @keyframes fadeInCards {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
    
    @keyframes scaleUp {
        0% {transform: scale(0);}
        100% {transform: scale(1);}
    }
    
    .product-image{
      opacity: 0;
      animation: fadeInCards 0.5s ease-in-out forwards;
      &.step2{
        animation-delay: 0.2s;
      }

      &.step3{
        animation-delay: 0.6s;
      }

      &.step4{
        animation-delay: 1.1s;
      }
      
      button.k-btn.add-label-btn{
        animation: scaleRight 0.5s ease-in-out forwards, fadeIn 0.25s ease-in-out forwards;
        animation-delay: 1s;
      }

      .k-btn.round-no-label{
        opacity: 0;
        animation: fadeInCards 0.25s ease-in-out forwards, scaleUp 0.5s ease-in-out forwards;
        animation-delay: 1s;
      }
    }
  } 
  
// by BREAKPOINT
  
  &.large-dimensions {
    // container is greater than 1000 but less than 1920
  }

  &.medium-dimensions { 
    .suggested-products-container{
      min-height: 15vh;
      .product-name{
        font-size: var(--fontSmall);
      }
    }
  }

  &.small-dimensions {
    // container is less than 390
    margin: 5%;
    flex-direction: column;
    
    .content-area{
      background-color: #0d8296;
      .actions-container{
        .k-btn{
          label{
            font: var(--fontLarge);
          }
        }
      }
    } 
    
    //loading message
    .Typist{
        h2{
          font-size: var(--fontMedium);
        }
    }

      //product name on suggestion cards 
    .product-name-area{
      .brand{
        font-size: var(--fontLarge);
      }
      .product-name{
        font-size: var(--fontHuge);
      } 
    }
    
    
    

    //product name on selected product
    .suggested-products-container{
      //margin offset for the action-bar on the bottom
      margin-bottom: ${props => props.actionBarHeight}px;
      .product-name-area{
        margin-top: var(--spacingMedium);
      }
      .product-name{
        font-size: calc(var(--fontMedium) * 1.25);
      }
    }


    .product-area{
      flex-direction: row;
      justify-content: flex-start;
      button.k-btn{ 
        label{
          font-size: var(--fontLarge);
        }
      }
    }

    

    .content-area{
      flex-direction: column;
    }
    .actions-container {
      flex-direction: row;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 1000;
    }
    .Typist{
      font-size: var(--fontLarge);
    }

  } 

  &.mobile-dimensions{
    margin: 0;
    width: 100vw;
    max-width: none;
   box-shadow: 0 calc(var(--button-size) * -0.22) calc(var(--button-size) * 0.52) 0 rgba(0,0,0,0.25);
    
    .modal-item{
      bottom: ${props => props.actionBarHeight}px !important;
      margin: 0 5% 5% 5%;
      max-width: 100%;
      min-width: 90%;
      max-height: 80vh;
    }
    .actions-container{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 10000;
      padding: var(--spacingSmall) var(--spacingMedium);
    }  
    
    .product-area{
      flex-direction: column;
      min-height: 15vh;
      .product-image{
        width: calc(var(--overallWidth) * 0.25);
        height: auto;
      }
    }
    
    .product-area, .suggested-products-container{
      
      width: 100%;
    }
    
    
    .loading-graphic{
      height: 15vh !important;
      width: 100% !important;
    }
    
    .checkmark-circled{
      height: var(--fontMedium) !important;
      width: var(--fontMedium) !important;
      .stroked{
        stroke-width: var(--iconStrokeSmall);
      }
    }
    
    .suggested-products{
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      .product-image{
        width: calc(var(--overallWidth) * 0.25);
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        flex-wrap: nowrap;
        padding-bottom: 0;
        .action-label-btn{
          display: flex !important; ;
        }
      }
      .product-name{
        font-size: var(--fontTiny) !important;
      }
      .product-image{
        padding-bottom: calc(var(--buttonLarge) + var(--spacingSmall));
        .product-image-inner{
          width: auto;
          height: auto;
        }
        
        button.k-btn{
          label{
            font-size: calc(var(--fontSmall) * 0.65);
          }
        }
        
        button.k-btn.round-no-label{
          width: var(--buttonLarge) !important;
          height: var(--buttonLarge) !important;
          pointer-events: none;
          left: 0;
          right: 0;
          bottom: 0;
          top: calc(100% - var(--buttonLarge));
          z-index: 2;
        }
        button.k-btn.add-label-btn{
          width: 100% !important;
          height: var(--buttonLarge) !important;
          display: flex;
          left: 0;
          right: 0;
          bottom: 0;
          top: calc(100% - var(--buttonLarge));
          z-index: 1; 
            label{
              position: absolute;
              //position label to visually center by accounting for padding
              right: 34%;
            } 
        }
      }
    }
    
    .content-area{
      flex-direction: column;
      .product-name-area{  
          .brand{
            font-size: var(--fontTiny) !important;
          } 
          .product-name{
            font-size: var(--fontSmall) !important;
          } 
        
      }
      
      .actions-container{
        background-color: var(--colorSepia);
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, var(--colorSepia) 40%,  var(--colorSepia) 100%);
        .k-btn{
          height: auto !important;
          label{
            font: var(--fontMedium); 
          }
        }
      }
    }

    .suggested-products-container{
      min-height: 15vh;
      // padding-bottom: ${(props) => props.actionBarHeight * 1.2 + 'px'};
      .Typist{
        h2{
          font-size: calc(var(--fontMedium) * 0.75);
        }
      }
    }
    .actions-container {
      flex-direction: row;
    }
  } 

  &.tiny-dimensions {
    // container is less than 200
  }



`;
