import styled from "styled-components";


interface iProductInfoCardStyleProps{
    heightY: number;
}
export const ProductInfoCardWrapper = styled.div<iProductInfoCardStyleProps>`
  position: relative;
  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(10px);
    }
  }
  
  .card-back{
    height: 100% !important;
    width: 100% !important;
  }
  
  &.brewer {
    min-height: 65vh;
    .backing{
      display: none;
    }
    border-radius: 1rem;
    overflow: hidden;
    .product-image.brewer-image{
      position: absolute;
      z-index: 0;
      inset: 0;
      height: auto;
      width: 100%;
    }
    
    .k-btn{ 
      border: 1px solid rgba(255,255,255,0.5);
    }  
    .brewer-image{
      margin-top: ${props => props.heightY}px;
    }
  }
  
  &.brewer.mobile-dimensions{
      .product-image.brewer-image{
        max-width: 100%;
        height: 100%;
        width: 100%;
      }
  }
  
  .backing {
    position: absolute;
    z-index: 0;
    background-color: white;
    border-radius: 5%;
    inset: 0;
    box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.25); 
    mask-image: linear-gradient(to bottom, transparent 4%, black); 
  }
  
  .product-info-container {
    z-index: 1;
    display: flex;
    flex-direction: column;
    .rating-section{
      &:empty{
        display: none;
      }
    }
  }
  
  .product-data-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 16px 0 16px;
    z-index: 1;
    position: relative;
    height: 100%;
    width: auto !important;
    justify-content: space-between;
    .name{
      font-size: 14px;
      margin-top: 8px;
    }
    .brand{
      font-size: 16px;
      font-weight: 200;
      margin-top: 16px;
      text-align: center;
    } 

    .product-image{
      max-width: 100%;
      height: auto; 
      &.brewer-image{
        position: absolute;
        z-index: 0;
        inset: 0;
        .image-inner{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &.pod-image, &.bagged-image{
        .image-inner{
          filter: drop-shadow(0px 1rem 1rem rgba(0,0,0,0.15)) drop-shadow(0px 0px 1px rgba(0,0,0,0.25))
        }  
      } 
    }

    .price{
      font-size: 24px;
      font-weight: bold;      
    }
    
    .k-carousel{
      .nav-dots-container{
        display: none;
      }
    }
  }

  @keyframes slideDownEnter {
    0% {
      transform: translateY(-100%);
      opacity: 0;
      height: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
      height: 100%;
    }
  }
  
  .email-input-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 8px 10px rgb(0 0 0 / 25%);
    animation: slideDownEnter 0.5s ease-in-out forwards;
    .email-error{
      margin-top: 0.5rem; 
    }
    .submit{
      display: flex; 
      flex-direction: row;
      .k-btn{
        border-radius: 0 100vw 100vw 0 !important;
      }
    }
    .email-input{
      height: auto;
      width: 100%;
      border-radius: 0.25rem 0 0 0.25rem !important;
      padding: 0 0.25rem 0 0.25rem;
    } 
  }
  
  button.k-btn{
    position: relative;
    bottom: 0 !important;  
    z-index: 1; 
    -ms-transform: translateX(-50%); 
    padding: var(--spacingLarge) var(--spacingHuge); 
    height: var(--ctaButtonHeight);
    font-size: calc(var(--columnSize) * 0.05);  
    &:hover{
      .filled{
        fill: rgb(71, 48, 54) !important;
      }
    }
  }
  .backing{
    border-radius: 4px;
    border: 1px solid #ccc;
    inset: calc(var(--columnsize) * 0.8 * 0.5) 0 calc(var(--ctaButtonHeight) * -0.5) 0 !important;
  }

  &.mobile-dimensions{

    display: flex;
    flex-direction: row;
    .product-data-container{
      display: flex;
      flex-direction: row !important;
      text-align: left;
      .fine-print{
        font-size: 0.75rem;
      }
      .brand{
        font-size: 0.75rem;
      }
      .product-name{
        font-size: 1rem;
      }
    }
    .product-image{
      max-width: 40%;
      position: relative;
      width: 40% !important;
      height: 25vh !important;
    }

  }
  
`;

export const CTAButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;