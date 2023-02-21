import React, {ReactElement} from "react";
import {fontWeightT} from "../ContentComponents/ContentComponent";
import Graphic from "../Graphic/Graphic";
import {sizeT} from "../KSK_Experience/KSK";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export type flagStylesT = "square" | "circle-flag" | "banner-simple" | "banner-protrude" | "squared-curved" | "curved-rect" | "alternating-sharp-round"
export const flagStyleList : flagStylesT[] = ["square", "circle-flag", "banner-simple", "banner-protrude", "squared-curved", "curved-rect", "alternating-sharp-round"]

export const flagStyles : flagStylesT[] = ["square" , "circle-flag" , "banner-simple", "banner-protrude", "squared-curved", "alternating-sharp-round"]

export interface iFlag{
  flagLabel : string;
  flagTextColorOverride? : string;
  flagColor : colorByNameType;
  flagClasses? : string;
  font :{
    fontSize : sizeT;
    fontWeight? : fontWeightT;
  }
  flagStyle : flagStylesT
}



export const Flag =(props : iFlag)=>{

  const getFlag=()=>{

    let adornment : ReactElement = <></>;

    switch(props.flagStyle){
      case "circle-flag":
        adornment=<div className="circle-banner adornment"><Graphic graphicName="circle-and-ring"/></div>
        break;

      case "banner-simple":
        adornment=<div className="simple-banner adornment"><Graphic graphicName="banner-tail"/></div>
      break;

      case "banner-protrude":
        adornment=<><div className="banner-protrude adornment"><Graphic graphicName="banner-tail"/> </div><Graphic graphicName="tri-bot-l"/></>
      break;

      case "squared-curved":
        adornment=<div className="squared-curved adornment"></div>
        break;
    }

    return(
      <>
        <label className={props.font.fontWeight} style={{
          color : props.flagTextColorOverride
        }}>
          {props.flagLabel}

        </label>
        {adornment}
      </>

    )
  }

  return (
    <div
      className={`flag-container ${props.flagStyle} ${props.flagColor} `}
    >
      {getFlag()}
    </div>
  )
}
