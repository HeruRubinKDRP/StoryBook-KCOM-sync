import styled, {Interpolation} from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {ctaColorStyles} from "../../_commonStyles/common.styled";

export interface iProductListWrapper {
    columns: number;
    rows: number;
    dynamicStyles: Interpolation<any>
}

export const ProductListWrapper = styled.div<iProductListWrapper>`
  ${props => props.dynamicStyles};
  *{
    user-select: none;
  }
  --spacingTiny: calc(var(--overallWidth) * 0.005 + 2px);
  --spacingSmall: calc(var(--overallWidth) * 0.006 + 4px);
  --spacingMedium: calc(var(--overallWidth) * 0.007 + 5px);
  --spacingLarge: calc(var(--overallWidth) * 0.008 + 8px);
  --spacingHuge: calc(var(--overallWidth) * 0.01 + 12px);
  
  --columnCount : ${props => props.columns};
  --rowCount : ${props => props.rows};
  
  --columnsize : calc(var(--overallWidth) / var(--columnCount));
  
  --ctaButtonHeight : calc(var(--spacingLarge) * 2);

  ${ctaColorStyles}; 

  display: grid;
  grid-template-columns: repeat(var(--columnCount), 1fr);
  grid-template-rows: repeat(var(--rowCount), auto);
  grid-gap: 2%;

  // product card types
  .brewer{
    height: 65vh;
    .product-data-container{
      padding: 0 16px 0 16px;
    }
    .brand{
      display: none;
    }
    .product-name{
      font-size: var(--spacingHuge);
      font-weight: 200;
      color: var(--colorDarkRoast);
      line-height: var(--spacingHuge);
      padding: 3% 10%;
    }
    .price{
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: center;
      .fine-print{
        font-weight: 200;
        font-size: calc(var(--spacingSmall));
      }
    }
    button.k-btn.brewer-cta{
      padding: calc( var(--spacingHuge) * 0.5 ) calc(var(--spacingHuge) * 1.5);
      background-color: var(--colorCTAPrimary) !important;
      box-shadow: 0 var(--spacingMedium) var(--spacingMedium) 0 rgba(0, 0, 0, 0.25);
      .filled{
        fill : var(--colorDarkRoast) !important;
      }
      label{
        color: var(--colorDarkRoast) !important; 
      }
    }
  }

  .simple-card{
    .product-image{ 
      height: calc(var(--columnsize) * 0.8);
      width: calc(var(--columnsize) * 0.8);
    }
  
  .product-data-container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.2fr 0.1fr 0.1fr 0.1fr;
    justify-content: space-between;
    justify-items: center;
    align-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-bottom: var(--ctaButtonHeight);
   
    
      
    }
    
    .product-image {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      max-width: 100%; 
      position: relative;
      .image-inner{
        position: absolute;
        inset: 0;
        object-fit: contain;
        width: 100%;
        height: 100%; 
        filter: drop-shadow(0px var(--spacingTiny) var(--spacingSmall) rgba(0,0,0,0.15)) drop-shadow(0px 0px 1px rgba(0,0,0,0.25));
      ;
       
      }
    }

    .price {
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      text-align: center;
      font-size: var(--spacingHuge);   
      display: flex;
      flex-direction: column;
      .fine-print{
        font-size: var(--spacingSmall);
        line-height: var(--spacingSmall);
        text-align: center;
        justify-content: center;
        margin-top: 0.5rem;
      }
    }

    .brand {
      grid-column: 1 / 1;
      grid-row: 3 / 3;
      font-size: var(--spacingSmall);
      text-align: center;
    }

    .product-name {
      grid-column: 1 / 1;
      grid-row: 4 / 4; 
      text-align: center;
    }
    
    .rating-section{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: var(--ctaButtonHeight);
    }
    

    .cta-main {
      grid-column: 2 / 2;
      grid-row: 5 / 5;
    }
  }

  .cta-container {
    button.k-btn{
      bottom: 0 !important;  
    }  
    
    .flip-btn{
      
    }
  }
  
  button.k-btn{
    position: relative;
    bottom: var(--ctaButtonHeight);
    z-index: 1; 
    padding: var(--spacingLarge) var(--spacingHuge);
    height: 100%;
    font-size: calc(var(--columnSize) * 0.05);
  }
  
  .backing {
    border-radius: var(--spacingTiny) !important;
    inset: calc(var(--columnsize) * 0.8 * 0.5) 0 calc(var(--ctaButtonHeight) / 2) 0;
    box-shadow: 0 var(--spacingTiny) var(--spacingTiny) 0 rgba(0, 0, 0, 0.25);    
    mask-image: linear-gradient(to bottom, transparent 4%, black);
    
  } 
  
  .pod-card{
    min-height: 45vh;
    .product-info-container {
      z-index: 1;
      display: flex; 
      flex-direction: column;
      margin-bottom: 6vh;
    }
    
    .cta-container{
      display: grid;
      grid-template-columns: 0.5fr 0.25fr;
      grid-template-rows: auto;
      grid-gap: 0; 
      align-items: end;
      bottom: calc(var(--ctaButtonHeight) * 0.5) !important;
      position: absolute;
      width: 100%;
      height: calc(var(--ctaButtonHeight) * 3) !important;
      padding: 0 5% 0 5%;
      justify-content: center;
      .k-btn{
        
      }
    }
  }
  
  .brewer-card{
    height: 65vh;
    .brewer-cta, .flip-btn{
      height: 100% !important;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .brewer-cta{
     // border-radius: 100vw 0 0 100vw !important;
    }
    .flip-btn{ 
      bottom: 0;
      background-color: rgba(0,0,0,0.65) !important;
      color: white !important;
      position: relative;
      z-index: 1;
      padding: calc( var(--spacingHuge) * 0.5 ) calc(var(--spacingHuge) * 0.75);
      display: flex;
      justify-content: center !important;
      margin-left: var(--spacingSmall);
      .icon{
        width: 60% !important;
        height: 60% !important;
        margin: 0 0 0 10%;
        min-width: 1rem;
      }
      .filled{
        fill: white !important;
      }
      .stroked{
        stroke: white !important;
      }
    }
    
    .cta-container{
      display: grid;
      grid-template-columns: 0.4fr 0.6fr;
      grid-template-rows: auto;
      grid-gap: 5%;
      align-items: end;
      bottom: calc(var(--ctaButtonHeight) ) !important;
      position: absolute;
      width: 100%;
      height: calc(var(--ctaButtonHeight) * 3) !important;
      padding: 0 5% 0 5%;
    } 
    
    
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const OuterMostCLP_Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
  .right-part {
    width: 100%;
    .filters{
      margin-right: 2%;
    }
    .sale-toggle{
      margin-left: 10px;
    }
  }

  .backing-main {
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: -1;
  }
`;