import React, {ReactElement, useEffect, useState} from "react";
import {currencyType} from "../../pages/myBrews";

export interface Iprice{
  basePrice : number;
  currency : currencyType;
  discountPercentAsNumber? : number;
  calculateDiscountForMe? : boolean;
  finalPrice? : number;
  showStrikeThrough? : boolean;
  classes? : string;
  colorOverride? : string;
}


export const Price = (props : Iprice) =>{

  const finalDisplayPrice =()=>{
    if(props.calculateDiscountForMe && props.discountPercentAsNumber ){
      return (props.basePrice * (1 - (props.discountPercentAsNumber /100  ))).toFixed(2).toString();
    }

    if(props.finalPrice != undefined){
      return props.finalPrice;
    }else{
      return props.basePrice;
    }
  }

  const discountStyle =()=>{
    if(props.showStrikeThrough){
      return "discounted"
    }else return ""
  }

  const strikeThroughPrice =()=>{
    if(!props.showStrikeThrough){return<></>}
    if(props.discountPercentAsNumber || props.finalPrice){
      return(
        <div className={`base-price `}>
          <div className="currency">
            {props.currency}
          </div>
          {props.basePrice}
        </div>
      )
    }
  }

  return (
    <div className={ `price-container-main ${props.classes}`}>
      <div className={`final-price ${discountStyle()}`}>
        <label style={{color : props.colorOverride}} className="currency">
          {props.currency}
        </label>
        <label style={{color : props.colorOverride}}>
          {finalDisplayPrice()}
        </label>
      </div>
      {strikeThroughPrice()}
    </div>
  )
}
