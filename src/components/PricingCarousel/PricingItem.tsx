import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";
import {Flag, flagStylesT} from "../Flag/Flag";
import {Price} from "../Price/Price";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export interface iPricingItem{
  layout : "side-by-side" | "stacked";
  cardStyle : "rounded" | "square";
  description? : string;
  productImagePath : string;
  cardTitle : string;
  priceSize : "medium" | "large";
  basePrice : number;
  finalPrice : number;
  discountPercentage : number;
  hasFlag : boolean;
  flagStyle? : flagStylesT;
  flagLabel? : string;
  flagColor? : colorByNameType;
  backgroundColor : colorByNameType;
  itemBackgroundColor : colorByNameType;
}

export const PricingItem = (props : iPricingItem)=>{
  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 200,
    skipOnMount : false,
  });

  const getFlag=()=>{
    if(!props.hasFlag){return}
    return(
      <Flag
        flagLabel={props.flagLabel ? props.flagLabel : ""}
        flagColor={props.flagColor ? props.flagColor : "secondaryGold"}
        font={{
          fontSize : "Medium",

        }}
        flagStyle={props.flagStyle ? props.flagStyle : "squared-curved"}
      />
    )
  }

  const getDescription=()=>{
    if(!props.description){return}
    return <p>{props.description}</p>
  }

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return}
    if(widthX < 600 && widthX > 300){
      return "medium-container"
    }
    if(widthX < 300){
      return "small-container"
    }
  }

  return(
    <div
      ref={ref}
      className={`pricing-item-container ${props.layout} ${props.cardStyle} ${getContainerQuery(width)}`}
      style={{
      backgroundColor : colorNameToValue(props.backgroundColor)
    }}>
      {getFlag()}
      <div className="product-image" aria-label="product image"
         style={{
           backgroundColor : colorNameToValue(props.itemBackgroundColor),
           backgroundImage : `url("${props.productImagePath}")`
        }}
      >
        <img src={props.productImagePath} alt="product image" width="0" height="0"/>
      </div>


      <div className="product-info-container">
        <h1 className="title">{props.cardTitle}</h1>
        {getDescription()}
        <Price
          basePrice={props.basePrice}
          finalPrice={props.finalPrice}
          showStrikeThrough={true}
          currency={"$"}
        />
      </div>
    </div>
  )
}
