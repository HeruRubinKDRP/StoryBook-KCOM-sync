import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import Graphic from "../Graphic/Graphic";
import {BooleanToggleStyled} from "./boolean-toggle.styled";

export interface iBooleanToggle{
  isActive : boolean;
  label : string;
  customClasses? : string;
  colorScheme? : "white" | "no-bg";
  toggleType : "checkbox";
  toggleShape : "round-rect" | "pill" | "no-outline";
  actionFunc : Function;
}

export const BooleanToggle =(props:iBooleanToggle)=>{

  const makeToggleMark =()=>{
    let checkMark : ReactElement = <></>
    if(props.isActive == true){
      checkMark = <Graphic
        graphicName="icon-checkmark"
        classesOverride="toggle-mark"
      />
    }

    return <div className="check-mark-container"> {checkMark} </div>
  }

  const setStyles = ()=>{
    let classNames = ""
    if(props.isActive){
      classNames += "is-active "
    }

    return `${classNames} ${props.toggleShape} ${props.customClasses} `
  }

  return (
    <BooleanToggleStyled onClick={()=>props.actionFunc()} className={`boolean-toggle ${props.colorScheme} ${setStyles()}`}>
      {makeToggleMark()}
      <label className="toggle-label">{props.label}</label>
    </BooleanToggleStyled>
  )
}
