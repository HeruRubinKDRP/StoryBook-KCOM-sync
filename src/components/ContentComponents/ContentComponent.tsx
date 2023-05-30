import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {Graphic, iconType} from "../Graphic/Graphic";
import {sizeT} from "../KSK_Experience/KSK";
import KButton, {buttonType} from "../Kbutton/KButton";
import {PopUp} from "../PopUp/PopUp";
import {SEO_item} from "../SEO_Component/SEOitem";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
export type sectionT = "content-front-and-center" | "content-right" | "content-left" | "duo-background-stretch" ;
export type bgType =  "image" | "movie" | "solid-color";
export type heightMethodsT = "one-viewport" | "stretch-to-parent" | "fit-content" | "half-viewport";
export type CTA_Mode_T = "button" | "entire-tile" ;

export type fontWeightT = "heavy-weight" | "light-weight" | "regular-weight" | "medium-weight" | "bold-weight";
export const fontWeightsList : fontWeightT[] = ["heavy-weight" , "light-weight" , "medium-weight", "regular-weight", "bold-weight"]

export type positionVerticalT = "top" | "middle" | "bottom";
export type flagType = "square" | "ribbon-right-to-left" | "circle" | "ribbon-left-to-right";

export interface iContentItem{
  component: "content"
  sectionType : sectionT;
  sectionAppearance? : "default" | "inset-beveled";
  sectionName : string;

  flag?:{
    useFlag : boolean;
    flagLabel : string;
    flagStyle : flagType;
    flagBackgroundColor : colorByNameType;
    flagTextColor : colorByNameType;
  }

  messageAsCallout? : boolean;
  testimonial? :{
    stars : number,
    name : string;
  }
  calloutPosition? : "right-top" | "right-bottom" | "left-top" | "left-bottom";

  hasFocalImage : boolean;
  focalImagePath? : string;
  focalImageSize? : string;
  focalImageIcon? : iconType;
  focalImageMask? : "round" | "square" | "diamond";
  focalImagePosition? : positionVerticalT;

  mainMessage? : string;
  mainMessageSize? : sizeT;
  mainMessageWeight?: fontWeightT;
  mainMessageColor? : string;

  secondaryMessage? : string;
  secondaryMessageSize? : sizeT;
  secondaryMessageWeight?: fontWeightT;

  messageTextAlignment? : "text-left" | "text-center" | "text-right";
  messageAlignment? : "center" | "left" | "right" | "top-left" | "top-right" | "bottom-right" | "bottom-left"

  backGroundType : bgType;
  hasVideoPlayButton? : boolean;
  backgroundUrlPath : string;
  backgroundColor : colorByNameType;

  backgroundTileImagePath? : string
  backgroundTilingMethod? : string


  hasTermsConditions? : boolean;
  termsAndConditionsMode? : "pop-up-mode" | "slide-down-mode";
  termsAndConditionsCTA? :{
    termsAndConditionsLabelDetail? : string;
    termsAndConditionsCtaLabel? : string;
  }
  termsAndConditionsFullText? :{
    header : string,
    termsAndConditionsDetailCopy : string;
  }

  mainTextHasShadow : boolean;
  heightMethod : heightMethodsT;
  heightOverride? : {
    minHeight : string,
    maxHeight : string,
    overallHeight : string
  };

  widthCustom? : string;
  contrastBackground : "light" | "dark" | "none";
  hasCTA : boolean;
  ctaColorOverride? : string;
  ctaLabel? : string;
  ctaLinkTo? : string;
  ctaMode? : CTA_Mode_T;
  ctaButtonType? : buttonType;
  customClasses? : string;
  fadesOut? : boolean;
}

export const ContentItem =(props : iContentItem)=>{
  const [termsConditionsIsOpen, setTermsConditionsIsOpen] = useState(false)
  const { width, height, ref } = useResizeDetector();
  const getMainTextShadow =(hasShadow : boolean)=>{
    if(hasShadow){
      return "has-shadow"
    }else{
      return ""
    }
  }
  const getFadout=()=>{
    if(props.fadesOut){
      return "fader"
    }
    return "";
  }
  const getContrastBackground =()=>{
    if(props.contrastBackground === "none"){
      return;
    }
    let className = "";
    switch(props.contrastBackground){
      case "dark":
        className = "dark-fader";
        break;
      case "light":
         className = "light-fader"
        break;
    }
    return <div className={`${className} stretch-absolute`}/>
  }
  const getVideo =()=>{
    if(props.backGroundType == "movie"){
      return (
        <video autoPlay muted loop id="bgVideo">
          <source src={props.backgroundUrlPath} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>
      )
    }
  }
  const getButtonType =()=>{
    if(!props.ctaButtonType){
      return "primary-light" }else{
      return props.ctaButtonType;
    }
  }

  const getFocalImage=(positionOfImage : positionVerticalT)=>{
    let position = positionOfImage;
    if(!props.hasFocalImage){return}

    if(props.messageAsCallout && position != "bottom"){return <></>}

    if(props.focalImagePosition != position){return <></>}

    const getFocalImageByType=()=>{
      if(props.focalImageIcon && props.focalImageIcon != "none"){
          return <Graphic
            graphicName={props.focalImageIcon}
            iconSize={props.focalImageSize}
            colorOverride={props.mainMessageColor}
          />
      }else if(props.focalImagePath){
        return <img src={props.focalImagePath} alt="" width={props.focalImageSize} />
      }
    }

    if( !props.focalImagePath && (!props.focalImageIcon || props.focalImageIcon == "none")){
        return <></>
    }

    return(
      <div className={`focal-image ${props.messageTextAlignment} ${position} ${getFadout()}`}>
        {getFocalImageByType()}
      </div>
    )
  }

  const getCTA = ()=>{
    if(props.hasCTA && !props.ctaMode || props.hasCTA && props.ctaMode == "button"){
      return <KButton
        buttonType={getButtonType()}
        buttonWidth="fit-to-content"
        backgroundColorOverride={props.ctaColorOverride}
        iconPlacement="no-icon"
        iconStandard="none"
        label={getCTAInfo("label")}
        transitionType="rise"
        classes="fader"
      />
    }else{
      return <></>
    }
  }

  const getCoverallCTA=()=>{
    if(props.hasCTA && props.ctaMode == "entire-tile"){
      return <a href={props.ctaLinkTo} className="cover-all-CTA"></a>
    }
  }

  const getCTAInfo = (typeOfInfo : "label" | "linkTo")=>{
    switch(typeOfInfo){
      case "label":
        if(props.ctaLabel){
          return props.ctaLabel
        }
        break;
      case "linkTo":
        if(props.ctaLinkTo){
          return props.ctaLinkTo;
        }
    }

    return ""
  }
  const containerHeight=(heightTarget : "overall" | "minHeight" | "maxHeight")=>{
    //if there's a specific height override we'll return that
    if(props.heightOverride){
      switch(heightTarget){
        case "overall":
          return props.heightOverride.overallHeight;
        case "minHeight":
          return props.heightOverride.minHeight;
        case "maxHeight":
          return props.heightOverride.maxHeight;
      }
    }

    switch(props.heightMethod){
      case "fit-content":
        return "auto";
      case "one-viewport":
        return "100vh";
      case "half-viewport":
        return "50vh";
      case "stretch-to-parent":
        return "100%";
    }
  }
  const getMessagingSection =()=>{
    const spacingForTerms=()=>{
      if(props.hasTermsConditions){return "push-down-small"}
      return ""
    }
    const isCalloutCheck=()=>{
      if(props.messageAsCallout){
        return `callout ${props.calloutPosition}`
      }
      return "";
    }
    const checkCallout=()=>{
      if(!props.messageAsCallout){return ""} else {return "stretch"}
    }

    const getTestimonial=()=>{
      if(!props.testimonial){return}

      let stars : ReactElement[] = [];

      for(let i=0; i < props.testimonial.stars; i++){
        stars.push(
          <div className="star">
            <Graphic graphicName="star-full"/>
          </div>
        )
      }
      return (
        <div className="testimonial-area">
          <p>— {props.testimonial.name}</p>
           <div className="stars-group">{stars}</div>
        </div>
      )
    }

    return(
      <>
        <div className={`messaging-container ${checkCallout()}  ${props.messageTextAlignment} ${spacingForTerms()}`} >
          <div className={`${isCalloutCheck()}`}>
            {getFlag()}
            {getFocalImage("top")}
            <h1 style={{color : props.mainMessageColor}} className={`main-message-item ${getFadout()} ${props.mainMessageSize} ${props.mainMessageWeight} ${getMainTextShadow(props.mainTextHasShadow)}`}>
              {props.mainMessage}
            </h1>
            {getFocalImage("middle")}
            <p  style={{color : props.mainMessageColor}}  className={`secondary-message-item ${getFadout()} ${props.secondaryMessageSize} ${props.secondaryMessageWeight} ${getMainTextShadow(props.mainTextHasShadow)}`}>{props.secondaryMessage}</p>
            {getTestimonial()}

            <div className="cta-pos">
              {getCTA()}
            </div>
          </div>
          {getFocalImage("bottom")}

          {handleTermsAndConditionsLaunchCTA()}
          {handleTermsConditionsPopUp()}
        </div>
      </>
    )
  }
  const handleBGsource =()=>{
    if(props.backGroundType == "image"){
      return props.backgroundUrlPath;
    }
  }

  const sectionFrontCenter =()=>{
    return(
      <div className={`section-front-center ${props.sectionAppearance}`}
           style={{
             backgroundImage : `url("${handleBGsource()}")`,
             color : props.mainMessageColor,
             height : containerHeight("overall"),
             maxHeight : containerHeight("maxHeight"),
             minHeight : containerHeight("minHeight")
           }}>

        {getMessagingSection()}
        {getContrastBackground()}
        {getVideo()}
        {getCoverallCTA()}
      </div>
    )
  }
  const sectionDuo =(contentPosition : "right" | "left")=>{

    let positionClass : "left-pos" | "right-pos" | "center-pos";

    switch (contentPosition) {
      case "left":
         positionClass = "left-pos"
        break;
      case "right":
        positionClass = "right-pos"
        break;
      default:
        positionClass="center-pos"
        break;
    }

    return (
          <div
            className={`duo ${positionClass}`}
            style={{
              height : containerHeight("overall"),
              maxHeight : containerHeight("maxHeight"),
              minHeight : containerHeight("minHeight"),
            }}
          >
            <div className={`sub-section ${props.sectionAppearance} `}
            style={{
             backgroundImage : `url("${props.backgroundUrlPath}")`,
             color : props.mainMessageColor
           }}>
              {getVideo()}
            </div>
            <div className="message-pos">
              {getMessagingSection()}
            </div>
          </div>
        )
  }
  const createSection = ()=>{
    switch (props.sectionType){
      case "content-front-and-center":
        return sectionFrontCenter();
      case "content-right":
        return sectionDuo("right");
      case "content-left":
        return sectionDuo("left");
    }
  }
  const getContainerQuery =(widthX : number | undefined)=>{
    if(!widthX){return "zzz"}
    if(widthX > 200 && widthX <= 399){
      return "width-between-200-and-399 small-container";
    }else if(widthX >=400 && widthX <= 599){
      return "width-between-400-and-599 medium-container";
    }else{
      return "width-greater-than-600 large-container";
    }
  }
  const focalImageSpecial =()=>{
    if(!props.hasFocalImage){return ""}
    if(!props.focalImagePosition){return}
    switch (props.focalImagePosition){
      case "bottom":
        return "focal-image-bottom"
    }
  }

  const handleTermsAndConditionsLaunchCTA =()=>{
    if(!props.hasTermsConditions){return}

    const affordance =()=>{
      switch (props.termsAndConditionsMode){
        case "slide-down-mode":
          if(termsConditionsIsOpen){
            return <Graphic graphicName="chevron-up" iconSize="1rem" colorOverride={props.mainMessageColor} />
          }else{
            return <Graphic graphicName="chevron-down" iconSize="1rem" colorOverride={props.mainMessageColor}/>
          }
        default:
          return <Graphic graphicName="launch-pop-up" iconSize="1rem" colorOverride={props.mainMessageColor} />
      }
    }
    return (
      <div className="terms-preview-container">
        <p style={{color : props.ctaColorOverride}}>{props.termsAndConditionsCTA?.termsAndConditionsLabelDetail}</p>
        <a style={{color : props.ctaColorOverride}} onClick={()=>setTermsConditionsIsOpen(!termsConditionsIsOpen)}>
          {props.termsAndConditionsCTA?.termsAndConditionsCtaLabel}
          {affordance()}
        </a>
      </div>
    )
  }

  const handleTermsConditionsPopUp = ()=>{

    if(!props.termsAndConditionsFullText){return}
    if(!termsConditionsIsOpen){return }
    console.log("trc open")
    const content = (<div className={props.termsAndConditionsMode} style={{color : props.mainMessageColor}}>
       <SEO_item
         mainTitle={props.termsAndConditionsFullText.header}
         mainBody={props.termsAndConditionsFullText.termsAndConditionsDetailCopy}
         showAsCollapsed={false}
         fontColorOverride={colorNameToValue("dark-roast")}
       />
    </div>);
    switch(props.termsAndConditionsMode){
      case "slide-down-mode":
        return content;
     default:
        return <PopUp hasBackButton={false} closeFunc={()=>setTermsConditionsIsOpen(false)} windowTitle={""} isOpen={true} hasHeader={true} hasVeil={true} content={content}/>
    }
  }

  const getFlag =()=>{
    if(!props.flag){return <></>}
    if(!props.flag.useFlag){return <></>}

    return (
      <div
        className={`${props.flag.flagStyle} flag`}
        style={{
          backgroundColor : colorNameToValue(props.flag.flagBackgroundColor)
        }}
      >
          <label
            style={{
              color : colorNameToValue(props.flag.flagTextColor)
            }}
          >{props.flag.flagLabel}</label>
      </div>
    )
  }

  return (<>
      <div
        id={props.sectionName}
        ref={ref}
        style={{
          backgroundImage:`url("${props.backgroundTileImagePath}")`,
          backgroundRepeat : props.backgroundTilingMethod ? props.backgroundTilingMethod : "no-repeat",
          backgroundColor : colorNameToValue(props.backgroundColor),
        }}
        className={`${props.customClasses}
        ${focalImageSpecial()} content-container
        ${getContainerQuery(width)} `}
      >
          <div style={{width : props.widthCustom}} className={`resizer content-item`}>
            {createSection()}
          </div>
      </div>

    </>
  )
}

