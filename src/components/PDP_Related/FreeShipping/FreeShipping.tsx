import React, {useState} from "react";
import {FeatureBullet} from "../../FeatureBullets/FeatureBulletItem/FeatureBullet";
import Graphic from "../../Graphic/Graphic";
import {colorByNameType} from "../../_utilities/color-name-to-value/colorNameToValue";

export interface iFreeShipping{
  showFreeShipping? : boolean;
  messageText : string
}

export const FreeShipping = (props : iFreeShipping)=>{

  if(props.showFreeShipping){
    return(
      <div className="free-shipping-info-container">
        <Graphic graphicName="free-shipping-truck"/>
        <span className="free-shipping-info">{props.messageText}</span>
      </div>
    )
  }
  else{
    return <></>
  }
}
