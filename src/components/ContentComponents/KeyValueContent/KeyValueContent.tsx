import React from "react"
import {Graphic, iconType} from "../../Graphic/Graphic";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export type keyValMessageT = {
  label : string;
  icon? : iconType;
  color? : colorByNameType;
  iconPosition? : "before" | "after"
}

export interface iKeyValueContent{
  layoutType : "stacked" | "inline";
  primaryMessage:  keyValMessageT;
  secondaryMessage?: keyValMessageT;
  colorSchemes? : colorByNameType
}

export const KeyValueContent=(props : iKeyValueContent)=>{

  const getIcon=(icon : keyValMessageT, positionMatch : boolean)=>{
    if(!positionMatch){return}

    if(icon){
      return <Graphic
        graphicName={icon.icon}
        colorOverride={colorNameToValue(icon.color)}
        iconSize="1rem"
        classesOverride={icon.iconPosition}
        />
    }
  }

  const getSecondary=()=>{
    if(!props.secondaryMessage){return}
    return(
      <p style={{color : colorNameToValue(props.secondaryMessage.color)}}>
        {getIcon(props.primaryMessage, (props.primaryMessage.iconPosition == "before"))}
        {props.secondaryMessage.label}
        {getIcon(props.primaryMessage, (props.primaryMessage.iconPosition == "after"))}
      </p>
    )
  }

  const getPrimary=()=>{
    return(
      <p className="primary-label" style={{color : colorNameToValue(props.primaryMessage.color)}}>
        {getIcon(props.primaryMessage, (props.primaryMessage.iconPosition == "before"))}
        <label>{props.primaryMessage.label}</label>
        {getIcon(props.primaryMessage, (props.primaryMessage.iconPosition == "after"))}
      </p>
    )
  }

  return(
    <div className={`${props.layoutType} key-value-content-container`}>
      {getPrimary()}
      {getSecondary()}
    </div>
  )
}
