import React, {ReactElement, useEffect, useState} from "react";
import styled, { keyframes } from "styled-components"
import Graphic, {iconPlacementTYPE, iconType} from "../Graphic/Graphic";
import {Price} from "../Price/Price";
import {KColors} from "../styles js/colors";

export type buttonType =
  "primary" |
  "primary-light" |
  "primary-cart-action" |
  "secondary" |
  "action" |
  "text-icon-noBG" |
  "link-internal" |
  "link-external" |
  "round-no-label" |
  "ecommerce-primary" |
  "ecommerce-secondary" |
    "ecommerce-secondary-2-lines"
  ;

export type btnTransitionType = "rise" | "scale-up" | "none" | "expand-bg";

export interface iButton {
  classes? : string;
  label : string;
  secondaryLabel? : string;
  linkTo? : string;
  buttonWidth? : "fit-width" | "fit-to-content";
  buttonWidthOverride? : string;
  buttonHeightOverride? : string;
  buttonType : buttonType;
  transitionType?: btnTransitionType;
  iconPlacement? : iconPlacementTYPE;
  iconStandard? : iconType;
  iconSize? : string;
  showPrice? : boolean;
  showStrikeThroughPrice? : boolean;
  price? :number;
  finalPrice? : number;
  discount? : number;
  calcPrice? : boolean;
  iconOverride? : ReactElement | null;
  backgroundColorOverride? : string;
  fontColorOverride? : string;
  actionFunc? : Function;
  hoverFunc? : Function;
  carat? : caratPositionT;
}

export type caratPositionT = "none" | "top" | "bottom" | "left" | "right"


export function KButton(props:iButton){

  const [typeOfButton, setTypeofBtn] = useState(props.buttonType);
  //const [hoverAnimationType, setHoverAnimation] = useState(props.transitionType);

   useEffect(()=>{
     setTypeofBtn(props.buttonType);
     // setHoverAnimation(props.transitionType);
     console.log("use effect");
   }, [props.buttonType, props.transitionType]);

  let bgColor = "";
  let iconColor = "";
  let fontColor = "";
  let labelAlignment = "space-between";
  let bgColorOverride = "";
  let fontColorOverride = "";
  let btnHeight = "2rem";
  let btnWidth = "100%";
  let justifyContent = "space-between";
  let iconMargin = "0";
  let iconWidth = "fit-width";
  let btnBorder = "";
  let propClasses = props.classes;

  switch(props.iconPlacement){
    case "after-label":
      justifyContent = "center";
      iconMargin = "0 0 0 0.5rem";
      propClasses += " after-label"
      break;

    case "before-label":
      justifyContent = "center";
      iconMargin = "0 0.5rem 0 0";
      propClasses += " before-label ";
      break;

    case "right-edge":
      propClasses += " right-edge "
      justifyContent = " space-between ";
      break;

    case "left-edge":
      propClasses += "left-edge"
      justifyContent = " space-between ";
      break;

    case "no-icon":
      justifyContent = "center";
      break;

    default:
      justifyContent = "center";
  }
  switch(typeOfButton){
    case "action":
      bgColor = KColors.sepia.hex;
      iconColor = KColors.charcoal.hex;
      fontColor = KColors.charcoal.hex;
      break;

    case "primary":
      bgColor = KColors.darkRoast.hex;
      iconColor = KColors.light.hex;
      fontColor = KColors.white.hex;
      break;

    case "primary-light":
      bgColor = KColors.light.hex;
      iconColor = KColors.charcoal.hex;
      fontColor = KColors.charcoal.hex;
      btnBorder = "none";
      break;

    case "secondary":
      bgColor = KColors.white.hex;
      iconColor = KColors.charcoal.hex;
      fontColor = KColors.charcoal.hex;
      btnBorder = `2px solid ${KColors.highLightAction.hex}`
      break;

    case "link-internal" :
      bgColor = KColors.transparent.hex;
      iconColor = KColors.highLightAction.hex;
      fontColor = KColors.highLightAction.hex;
      btnBorder = "none";
      break;

    case "link-external":
      bgColor = KColors.transparent.hex;
      iconColor = KColors.highLightAction.hex;
      fontColor = KColors.highLightAction.hex;
      btnBorder = "none";
      break;

    case "text-icon-noBG":
      bgColor = KColors.transparent.hex;
      iconColor = KColors.darkRoast.hex;
      fontColor = KColors.darkRoast.hex;
      if(props.fontColorOverride){
        iconColor = props.fontColorOverride;
        fontColor = props.fontColorOverride;
      }
      break;

    case "round-no-label":
      const btnWidthCheck =()=>{
        if(props.buttonWidth){
          return props.buttonWidth
        }
        return ""
      }

      bgColor = KColors.darkRoast.hex;
      iconColor = KColors.light.hex;
      fontColor = KColors.white.hex;
      btnHeight = btnWidthCheck();
      btnWidth = btnWidthCheck();
      break;

    case "ecommerce-secondary":
      iconColor = KColors.darkRoast.hex;
      fontColor = KColors.darkRoast.hex;
      if (props.fontColorOverride) {
        iconColor = props.fontColorOverride;
        fontColor = props.fontColorOverride;
      }
      break;
    case "ecommerce-secondary-2-lines":
      bgColor = KColors.white.hex;
      iconColor = KColors.darkRoast.hex;
      fontColor = KColors.darkRoast.hex;
      if (props.fontColorOverride) {
        iconColor = props.fontColorOverride;
        fontColor = props.fontColorOverride;
      }
      break;

    default:
  }

  //if the user sets an override that takes precedence over this declarative
  if(props.buttonWidthOverride === undefined || props.buttonWidthOverride.length === 0){
    switch(props.buttonWidth){
      case "fit-width":
        btnWidth = "100%";
        break;
      case "fit-to-content":
        btnWidth = "auto";
        break;
    }
  }else{
    btnWidth = props.buttonWidthOverride;
  }

  if(props.backgroundColorOverride?.length != undefined){
    bgColor = props.backgroundColorOverride;
  }

  if(props.fontColorOverride?.length != undefined){
    fontColor = props.fontColorOverride
  }

  if(props.iconStandard === "none" || props.iconPlacement === "no-icon"){
    labelAlignment = "center"
  }

  const stylizedBtn = ()=>{
    let KBtnStarter = styled.button`
      .icon {
        margin : ${iconMargin};
        fill : ${iconColor};
      }
  `
    return KBtnStarter;
  }



  const iconManaged = ()=>{
    //if we show price then no icon and the price takes place of icon
    if(props.showPrice && props.price && !props.discount){
      return <Price
        basePrice={props.price}
        finalPrice={props.finalPrice}
        currency="$"
        calculateDiscountForMe={props.calcPrice}
        showStrikeThrough={props.showStrikeThroughPrice}
      />
    }else if( props.showPrice && props.price && props.discount){
      return <Price
        basePrice={props.price}
        finalPrice={props.finalPrice}
        discountPercentAsNumber={props.discount}
        currency="$"
        calculateDiscountForMe={props.calcPrice}
        showStrikeThrough={props.showStrikeThroughPrice}
      />
    }

    if(props.iconOverride != null){
      return props.iconOverride;
    }else if(props.iconStandard == "none"){
      return <></>
    }
    else{
      return <Graphic
        graphicName={(props.iconStandard == undefined) ? "none" : props.iconStandard}
        iconPlacement={props.iconPlacement}
        iconSize={!props.iconSize ? "1.5rem" : props.iconSize}
      />
    }
  }

  const buttonAdornment = ()=>{
    if(props.buttonType == "round-no-label"){
      return (
        <>
          {iconManaged()}
        </>
      )
    }

    const carat = ()=>{
      switch (props.carat) {
        case "bottom":
          return <Graphic graphicName="carat-pointing-up" classesOverride="carat" />
        case "top":
          return <Graphic graphicName="carat-pointing-down" classesOverride="carat"/>
        case "left":
          return <Graphic graphicName="carat-pointing-right" classesOverride="carat" />
        case "right":
          return <Graphic graphicName="carat-pointing-left" classesOverride="carat" />
      }
    }

    switch(props.iconPlacement){
      case "before-label":
        return (
          <>
            {iconManaged()}
            <label>{props.label}</label>
            <label>{props.secondaryLabel}</label>
            {carat()}
          </> );
      case "after-label":
        return (
          <>
            <label>{props.label}</label>
            <label>{props.secondaryLabel}</label>
            {iconManaged()}
            {carat()}
          </>);

      case "right-edge":
        return (
          <>
            <label>{props.label}</label>
            <label>{props.secondaryLabel}</label>
            {iconManaged()}
            {carat()}
          </>
        );

      case "left-edge":
        return (
          <>
            {iconManaged()}
            <label>{props.label}</label>
            <label>{props.secondaryLabel}</label>
            {carat()}
          </>
        );

      default:
        return (
          <>
            <label>{props.label}</label>
            <label>{props.secondaryLabel}</label>
            {carat()}
          </>
        )
    }
  }

  const action=()=>{
    if(props.actionFunc != undefined){
      props.actionFunc();
    }
  }
  const hoverAction=()=>{
    if(!props.hoverFunc){return}
    props.hoverFunc();
  }

  const specialHoverElements=()=>{
    switch (props.transitionType) {
      case "expand-bg":
        return <div className="expander"></div>
    }
    return <></>
  }

  return(
    <>
      <button
        onClick={()=>action()}
        onMouseEnter={()=>hoverAction()}
        style={{
          border: btnBorder ,
          width : btnWidth,
          height : btnHeight,
          justifyContent : labelAlignment,
          backgroundColor : bgColor,
          color : fontColor,
         }}
        className={`k-btn ${props.buttonType} ${props.transitionType} ${propClasses} ` }>
        {buttonAdornment()}
        {specialHoverElements()}
      </button>
    </>
  )

}

export default KButton;
