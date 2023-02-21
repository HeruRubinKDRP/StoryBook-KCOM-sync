import React, {ReactElement, useEffect, useState} from "react";
import {iconType} from "../Graphic/Graphic";
import KButton, {btnTransitionType, buttonType} from "../Kbutton/KButton";

export interface iExpandCollapse{
  expanderStyle : "button" | "minimalist";
  expandText? : string;
  isExpandedText? : string;
  content : ReactElement;
  classes? : string;
  buttonType? : buttonType;
  transitionType? : btnTransitionType;
}

export const ExpandCollapse=(props:iExpandCollapse)=>{
  const [isOpen, setIsOpen]= useState(false);

  const getButton =(isOpenStatus : boolean)=>{
    let icon : iconType = "chevron-down"
    let btnLabel : string = props.expandText ? props.expandText : "View More";
    if(isOpen){
      icon = "chevron-up";
    }
    if(props.isExpandedText && isOpenStatus){
      btnLabel = props.isExpandedText
    }

    const getBtnType=():buttonType=>{
      if(!props.buttonType){return "secondary"}
      return props.buttonType;
    }

    const getTransitionType =():btnTransitionType=>{
      if(!props.transitionType){return "expand-bg"}
      return props.transitionType;
    }


    return (<KButton
      actionFunc={()=>setIsOpen(!isOpenStatus)}
      label={btnLabel}
      buttonType={getBtnType()}
      iconPlacement={"after-label"}
      iconStandard={icon}
      buttonWidth={"fit-to-content"}
      transitionType={getTransitionType()}
    />)
  }


  const getContent=()=>{
    if(isOpen){
      return props.content
    }else{
      return <></>
    }
  }

  return(
    <div className={`expand-collapse ${props.classes} ${isOpen}`}>

    <div className="button-area">
      {getButton(isOpen)}
      <div className="dividing-line"/>
    </div>
      <div className="content-area">
        {getContent()}
      </div>
  </div>)
}
