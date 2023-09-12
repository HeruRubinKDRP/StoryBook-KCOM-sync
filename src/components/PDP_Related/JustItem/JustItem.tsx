import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import KDropDown from "../../DropDown/drop-down";
import KButton from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";
import Image from "next/image";


export interface iJustBrewer{
  mainLabel : string;
  productImage : string;
  productName : string;
  addToCartFunction? : Function;
  mainAddToCartLabel : string;
  productPricing :{
    productBasePrice : number;
    productFinalPrice : number;
    showStrikeThrough : boolean;
  }
}

export const JustItem =(props : iJustBrewer)=>{
  return(
    <div className="purchase-option-container combo-container">
      <h3>{props.mainLabel}</h3>
      <div className="product-area">
        <div className="product-descriptive-area">
          <Image alt="" src={props.productImage} />
          <div className="product-details-area">
            <h4>{props.productName}</h4>
            <Price
              basePrice={props.productPricing.productBasePrice}
              currency="$"
              showStrikeThrough={ props.productPricing.showStrikeThrough}
              discountPercentAsNumber={0}
              calculateDiscountForMe={false}
              finalPrice={props.productPricing.productFinalPrice}
            />
          </div>
        </div>
        <div className="actions-container">
          <KDropDown
            defaultLabel="1"
            dropDownType="thumb-sized"
            label="1"
            onChangeFunc={() => {}}
            selected=""
            downButtonColorOverride="transparent"
            selectionOptions={[
              {
                label: '1',
                value: ''
              },
              {
                label: '2',
                value: ''
              },
              {
                label: '3',
                value: ''
              },
              {
                label: '4',
                value: ''
              },
              {
                label: '5',
                value: ''
              }
            ]}
          />
          <KButton
            buttonType="primary"
            iconPlacement="no-icon"
            iconStandard="none"
            buttonWidth="fit-to-content"
            transitionType="expand-bg"
            label={props.mainAddToCartLabel}
            actionFunc={props.addToCartFunction}
          />
        </div>
      </div>

    </div>
  )
}
