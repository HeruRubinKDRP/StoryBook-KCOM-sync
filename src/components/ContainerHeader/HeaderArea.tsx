import React, {ReactElement} from "react";
import Graphic, {iconType} from "../Graphic/Graphic";
import {HeaderAreaStyled} from "../HeaderArea/header-area.styled";


export interface IcontainerHeader{
  containerType : "iconLeft" | "iconRight" | "textOnly-Medium" | "textOnly-Large" | "no-top-hat";
  icon : iconType;
  headerText : string;
  children : ReactElement[] | ReactElement;
}

export const HeaderArea = (props : IcontainerHeader)=>{
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

  return <HeaderAreaStyled>{getHeader()}</HeaderAreaStyled>
}
