import React from "react";
import {useResizeDetector} from 'react-resize-detector';
import {sizeT} from "../../KSK_Experience/KSK";
import KButton from "../../Kbutton/KButton";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {fontWeightT} from "../ContentComponent";
import {FocalImageStyled} from "./focal-image.styled";
import Image from "next/image";

export interface iFocalImage{
  mainBG_Color? : colorByNameType;
  mainBG_imageCover? : string;

  focalImagePath : string;
  primaryMessageHeading : string;
  primaryMessageWeight? : fontWeightT;


  hasCTA : boolean;
  ctaLabel? : string;
  ctaLink? : string;

  messageSize? : sizeT;
  primaryMessageParagraph? : string;

  useCallOut : boolean;
  calloutLabel? : string;
  calloutHeader? : string;
  calloutParagraph? : string;
  calloutBG_Color? : colorByNameType;

  useAppStoreCTA : boolean;

}

export const FocalImageContent =(props : iFocalImage)=>{
  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false,
  });

  const getContainerQuery =(widthX : number | undefined)=>{
    if(!widthX){
      return "small-container"
    }
    if(widthX > 1000){ return "large-container" }
    if(widthX <= 1000 && widthX > 400){return "medium-container"}
    return "small-container"
  }

  const getCallout=()=>{
    if(!props.useCallOut){return}
    return(
      <div className="focal-callout" style={{backgroundColor : colorNameToValue(props.calloutBG_Color)}}>
        <label>
          {props.calloutLabel}
        </label>
        <h2>
          {props.calloutHeader}
        </h2>
        <p>
          {props.calloutParagraph}
        </p>
      </div>
    )
  }

  const getAppStoreCTA =()=>{
      if(!props.useAppStoreCTA){return}
      return(
        <div className="app-stores-container">
          <a href="">
            <Image
                src="/app/apple.svg"
                alt=""
                width={50}
                height={50}
            />
          </a>
          <a href="">
            <Image
                src="/app/google2.svg"
                alt=""
                width={50}
                height={50}
            />
          </a>
        </div>
      )
  }

  const getCTAs=()=>{
    if(!props.hasCTA){return}
    return(
        <div className="cta-area">
          {getAppStoreCTA()}
          <KButton
            buttonType="primary"
            buttonWidth="fit-to-content"
            iconPlacement="no-icon"
            iconStandard="none"
            label="Get the Keurig® App"
            transitionType="expand-bg"
          />
        </div>
    ) 
  }

  return (
    <FocalImageStyled
      ref={ref}
      className={`focal-image-container
      ${getContainerQuery(width)}`}
      style={{
        backgroundColor : colorNameToValue(props.mainBG_Color),
        backgroundImage : `url("${props.mainBG_imageCover}")`
      }}
    >
      <div className="primary-message sect">
        <h1>
          {props.primaryMessageHeading}
        </h1>
        <p>
          {props.primaryMessageParagraph}
        </p>
        {getCTAs()}
      </div>
      <div className="focal-image-item sect">
        <Image
            src={props.focalImagePath}
            className="focal-image"
            alt=""
        />
      </div>
      <div className="callout-area sect">
        {getCallout()}
      </div>
    </FocalImageStyled>
  )

}
