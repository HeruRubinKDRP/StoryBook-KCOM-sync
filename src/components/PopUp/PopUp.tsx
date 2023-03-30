import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {useResizeDetector} from "react-resize-detector";
import {PanelHeader} from "../PanelHeader/PanelHeader";
import {PopUpStyled} from "./PopUpStyled";

export interface iPopUp{
  hasVeil? : boolean;
  children?: ReactNode;
  windowTitle? : string;
  isOpen : boolean;
  hasHeader : boolean;
  closeFunc? : Function;
  hasBackButton? : boolean;
  backButtonFunc? : Function;
  appendTo? : string;
  classes? : string;
  // if it's auto just fit its contents
  //if it's full-screen then it'll use 90% of the screen
  sizeMode? : "auto" | "full-screen";
}


export const PopUp=(props:iPopUp)=>{
  const [isPopUpVisible, setIsPopUpVisible] = useState(props.isOpen);
  const { width, height, ref } = useResizeDetector();

  useEffect(()=>{
    console.log(width)
  },[width])

  const veil=()=>{
    if(props.hasVeil){return "veil"}else{return ""}
  }

  const getHeader =()=>{
    if(props.hasHeader){
      return <PanelHeader
        closeFunc={handleClose}
        headerText={props.windowTitle}
        hasCloseButton={true}
        hasBackButton={props.hasBackButton ? props.hasBackButton : false}
        backButtonFunc={props.backButtonFunc}
      />
    }else{
      return <PanelHeader
        closeFunc={handleClose}
        headerText={""}
        hasCloseButton={true}
        hasBackButton={props.hasBackButton ? props.hasBackButton : false}
      />
    }
  }

  const handleClose=()=>{
    //setIsPopUpVisible(!isPopUpVisible);
    if(props.closeFunc){
      props.closeFunc();
    }
  }

  const popUpStyle =(widthX : number)=>{
    if(!widthX){return "desktop"}
    if(widthX < 700){
      return "mobile";
    }else{
      return "desktop"
    }
  }

  const createPopUp =(widthX : number)=>{
    if(isPopUpVisible){
      return(
        <PopUpStyled ref={ref} className={`pop-up ${veil()} ${props.classes}`}>
          <div className={`pop-up-contents-container ${popUpStyle(widthX)}`}>
            {getHeader()}
            <div className="pop-up-child-content">
              {props.children}
            </div>
          </div>
          {props.hasVeil ? <div className="veil" onClick={handleClose}/> : null}
        </PopUpStyled>
      )
    }else{
      return <></>
    }
  }

  const getAppendTo =()=>{
    if(!props.appendTo){
      return document.body as HTMLElement;
    }
    return document.getElementById(props.appendTo)  as HTMLElement
  }

return ReactDOM.createPortal(createPopUp(width ? width : window.innerWidth), getAppendTo() )
}
