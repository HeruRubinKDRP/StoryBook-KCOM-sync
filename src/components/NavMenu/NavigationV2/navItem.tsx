import {Interweave} from "interweave";
import {ReactElement} from "react";
import {Graphic, iconType} from "../../Graphic/Graphic";
import KButton from "../../Kbutton/KButton";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {NavItemStyled} from "./NavItemStyled";
import {highlightType} from "./Navigation";
import Image from "next/image";

type textLook = "dark-on-light-bg" | "light-on-dark-bg"

export type modeType = "nobo" | "content-max" | "main-nav" | "section-main" | "small" | "medium" | "large" | "promo" | "article-large" | "article-small" | "product-large" | "product-hero" | "loyalty-tracker";

export interface iNavItem{
  mode: modeType;

  displayIn? : "mobile" | "desktop" | "both";
  label : string;
  secondaryText? : string;
  ctaLinkLabel? : string;
  secondaryLinkTo? : string;
  secondaryLinkLabel? : string;
  textBlock? :string;
  textLook? : textLook;
  linkTo : string;
  highlighted: highlightType;
  children?:ReactElement[];
  image? : string;
  icon? : iconType;
  classes?:string;
  finePrint? : string;
}

export const NavItem = ( props : iNavItem )=>{
  const getImage =()=>{

    if(!props.image){return <></>}
    return(
      <div className="nav-item-image">
        <Image
            src={props.image}
            alt={""}
            unoptimized={true}
            width={500}
            height={500}
        />
      </div>
    )
  }

  const getIcon =()=>{
    if(!props.icon || props.label.length < 1 ){
      return
    }
    return <Graphic graphicName={props.icon} />
  }

  const determineLinkOrLabel =()=>{
    if(props.label.length < 1 && props.linkTo.length < 1 ){
      return "empty"
    }
      if(props.linkTo.length < 1){
       return "no-link"
      }
      return "is-link"
  }

  const getTextColor =()=>{

    switch(props.textLook){
      case "dark-on-light-bg":
        return colorNameToValue("dark-roast");
      case "light-on-dark-bg":
        return "white";
    }

    return ""
  }

  const getCTA =()=>{
    if(!props.ctaLinkLabel){return;}
    return (
      <KButton transitionType="expand-bg" label={props.ctaLinkLabel} linkTo={props.linkTo} buttonType="primary" buttonWidth="fit-to-content" />
    )
  }

  const getBlockText=()=>{
    if(!props.textBlock){return}
    return (
      <div className="text-block">
        <Interweave content={props.textBlock}/>
      </div>
    )
  }

  const getFinePrint=()=>{
    if(!props.finePrint){return}
    return(
        <div className="fine-print">
          {props.children}
        </div>
    )
  }

  const checkIfEmpty=(value : string | undefined)=>{
    if(!value){return "empty"}
    return ""
  }

  const checkMultipleEmpty=(valuesToCheck : (string|undefined)[]  )=>{
    let emptyCount = 0;
    for(let i=0; i < valuesToCheck.length; i++){
      if(!valuesToCheck[i]){emptyCount++}
    }

    if(emptyCount >= valuesToCheck.length){
      return "empty";
    }
    return "";
  }

  return(
    <NavItemStyled href={props.linkTo} className={`${props.classes} ${props.mode} ${determineLinkOrLabel()}`} >
      {getImage()}
      <div className={`text-container ${checkMultipleEmpty([props.secondaryText, props.label])}`}>
        <label className={`primary-text ${checkIfEmpty(props.label)}`} style={{color : getTextColor()}}>
          <Interweave content={props.label}/>
          {getIcon()}
        </label>
        <label className={`secondary-text ${checkIfEmpty(props.secondaryText)}`} style={{color : getTextColor()}}>
          <Interweave content={props.secondaryText}/>
        </label>
        {getBlockText()}
        {getCTA()}
      </div>
      {getFinePrint()}
      <div className="expander"></div>
    </NavItemStyled>
  )
}
