import React, {ReactElement, useEffect} from "react";
import {sizeT} from "../../KSK_Experience/KSK";
import KButton from "../../Kbutton/KButton";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {iKeyValueContent, KeyValueContent} from "../KeyValueContent/KeyValueContent";
import {SimpleCardStyled} from "./SimpleCardStyled";

export type messagePositionT = "before-image" | "after-image";
export type cropStyleT = "circle" | "rounded-rectangle" | "no-crop";
export type alignmentT = "left" | "center" | "right";

export interface iSimpleHighlightCard{
  title? : string;
  titlePosition? : messagePositionT;
  mainMessageSize? : sizeT;
  imageSizeMethod? : "bg-image" | "from-image-size";
  secondaryMessage? : {
    label? : string;
    color? : colorByNameType;
    size? : sizeT
  };
  subTitle? : string;
  alignment : alignmentT;
  maxSize? : string;
  mainImageSize : "one-viewport" | "fit-parent" | "default-size" | "full-width";
  mainFocalImage? : {
    imageHeight? : string;
    imagePath? : string;
    cropStyle? : cropStyleT;
  };

  mainCTA? : {
    label : string;
    linktTo : string;
    style : "primary" | "secondary" | "ecommerce-primary" | "ecommerce-secondary",
    fullComponentCTA? : boolean;
  }
  secondaryCTA? : {
    label : string;
    linktTo : string;
    style : "primary" | "secondary" | "ecommerce-primary" | "ecommerce-secondary"
  }
  featuresList? : iKeyValueContent[];
  customClasses? : string;
}

export const SimpleHighlightCard=(props : iSimpleHighlightCard)=>{

  const getCTA=()=>{
    if(!props.mainCTA && !props.secondaryCTA){return}
    let CTAs : ReactElement[]=[];
    if(props.mainCTA){
      CTAs.push(
        <KButton
          label={props.mainCTA.label}
          buttonType={props.mainCTA.style}
          buttonWidth="fit-to-content"
        />
      )
    }
    if(props.secondaryCTA){
      CTAs.push(
        <KButton
          label={props.secondaryCTA.label}
          buttonType={props.secondaryCTA.style}
          buttonWidth="fit-to-content"
        />
      )
    }

    return <div className="cta-container">{CTAs}</div>

  }

  const getMainArea=(position : messagePositionT)=>{
    if(position != props.titlePosition){return}

    return(
      <div className="title-area">
        <h3
          className={props.secondaryMessage?.size}
          style={{color : colorNameToValue(props.secondaryMessage?.color)}}
        >
          {props.secondaryMessage?.label}
        </h3>
        <h2 className={props.mainMessageSize}>{props.title}</h2>
        {props.subTitle ? <p>{props.subTitle}</p> : <></>}
        {getCTA()}
      </div>
    )
  }

  const getFeaturesList =()=>{
    if(!props.featuresList){return}
    let features : ReactElement[] = [];
    for(let i=0; i < props.featuresList.length; i++){
      features.push(
        <KeyValueContent
          layoutType="inline"
          primaryMessage={props.featuresList[i].primaryMessage}
          secondaryMessage={props.featuresList[i].secondaryMessage}
          colorSchemes={"dark-roast"}
        />
      )
    }
    return <div className="features-list">{features}</div>
  }

  const getImageMethod =():ReactElement=>{
    if(!props.imageSizeMethod || props.imageSizeMethod == "from-image-size"){
      return <img src={props.mainFocalImage?.imagePath} alt="" className="primary-image"/>
    }

    return <div
      className="bg-image-container"
      style={{
        backgroundImage : `url("${props.mainFocalImage?.imagePath}")`,
    }}/>
  }

  return(
    <SimpleCardStyled
      style={{maxWidth : props.maxSize}}
      className={`highlight-card-container ${props.alignment} ${props.mainImageSize}`}>
      {getMainArea("before-image")}
      <div className={`image-container ${props.mainFocalImage?.cropStyle}`}>
        {getImageMethod()}
      </div>
      {getMainArea("after-image")}
      {getFeaturesList()}
    </SimpleCardStyled>
  )

}
