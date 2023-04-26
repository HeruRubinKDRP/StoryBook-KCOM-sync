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
      text-align: center;
      line-height: var(--spacingHuge);
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
      padding: var(--spacingHuge) calc(var(--spacingHuge) * 2);
      background-color: var(--colorCTAPrimary) !important;
      box-shadow: 0 var(--spacingMedium) var(--spacingMedium) 0 rgba(0, 0, 0, 0.25);
      .filled{
        fill : var(--colorDarkRoast) !important;
      }
      label{
        color: var(--colorDarkRoast) !important;
        font-size: calc(var(--spacingHuge));
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
      font-size: var(--spacingLarge);
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
      grid-column: 1 / 1;
      grid-row: 5 / 5;
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
  
  .brewer-card{
    height: 65vh;
    .brewer-cta, .flip-btn{
      height: 100% !important;
    }
    .brewer-cta{
     // border-radius: 100vw 0 0 100vw !important;
    }
    .flip-btn{
      // border-radius: 0 100vw 100vw 0 !important;
      bottom: 0;
      background-color: var(--colorLightCTA) !important;
      color: var(--colorDarkRoast) !important;
      .filled{
        fill: var(--colorDarkRoast) !important;
      }
      .stroked{
        stroke: var(--colorDarkRoast) !important;
      }
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
  padding: 2%; 
  
  .backing-main {
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: -1;
  }
`