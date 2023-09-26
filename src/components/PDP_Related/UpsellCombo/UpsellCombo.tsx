import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import KButton from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";
import Image from "next/image";

export type productInfoT = {
  productName : string;
  brand : string;
  basePrice : number;
  finalPrice : number;
  showStrikeThrough : boolean;
  productImagePath : string;
}

export interface iUpsellCombo{
  sectionName : string;
  products : productInfoT[]
}

export const UpsellCombo=(props : iUpsellCombo)=>{

  const getProductDisplayItems = ()=>{
    let productElements : ReactElement[] = [];
    for (let i=0; i < props.products.length; i++){
      productElements.push(
        <div key={i} className="product-item product-descriptive-area">
          <Image
              src={props.products[i].productImagePath}
              alt=""
              unoptimized={true}
              width={500}
              height={500}
          />
          <div className="product-description">
            <div>
              <label>{props.products[i].brand}</label>
              <h3>{props.products[i].productName}</h3>
            </div>
            <Price
              basePrice={props.products[i].basePrice}
              finalPrice={props.products[i].finalPrice}
              showStrikeThrough={false}
              calculateDiscountForMe={false}
              currency="$"
            />
          </div>
        </div>
      )
    }

    return productElements;
  }

  return(
    <div className="purchase-option-container upsell-combo">
      {getProductDisplayItems()}
      <div className="upsell-cta">
        <KButton
          buttonType="primary"
          buttonWidth="fit-to-content"
          carat="none"
          discount={0}
          finalPrice={219.99}
          iconPlacement="after-label"
          label="Add Both to Cart"
          price={250.99}
          showPrice
          showStrikeThroughPrice
          transitionType="expand-bg"
        />
      </div>
    </div>
  )
}
