import React, {ReactElement, useEffect, useState} from "react";
import styled, {keyframes} from "styled-components"
import Graphic, {iconPlacementTYPE, iconType} from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";

export interface IcontainerHeader{
  containerType : "iconLeft" | "iconRight" | "textOnly-Medium" | "textOnly-Large" | "no-top-hat";
  icon : iconType;
  headerText : string;
  children : ReactElement[] | ReactElement;
}

export const ContainerHeader = (props : IcontainerHeader)=>{
  const getHeader =()=>{
    switch(props.containerType){
      case "iconLeft":
        return (
          <div className="subscription-group-section">
            <div className="container-title">
              <Graphic graphicName={props.icon} />
              <p>{props.headerText}</p>
            </div>
            <div className="container-header">
              <div className="content">
                {props.children}
              </div>
            </div>
          </div>
        )

      break;

      case "no-top-hat":
        //TODO optimize for DRY
        return  (
          <div className="subscription-group-section">
            <div className="container-title">
              <Graphic graphicName={props.icon} />
              <p>{props.headerText}</p>
            </div>
            <div className="container-header">

              <div className="content">
                {props.children}
              </div>
            </div>
          </div>
        )
    }
  }

  return <>{getHeader()}</>
}
