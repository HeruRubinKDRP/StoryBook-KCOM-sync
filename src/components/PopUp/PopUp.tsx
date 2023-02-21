import React, {ReactElement, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {useResizeDetector} from "react-resize-detector";
import {PanelHeader} from "../PanelHeader/PanelHeader";

export interface iPopUp{
  hasVeil? : boolean;
  content? : ReactElement;
  windowTitle? : string;
  isOpen : boolean;
  hasHeader : boolean;
  closeFunc? : Function;
  hasBackButton? : boolean;
}


export const PopUp=(props:iPopUp)=>{
  const [isPopUpVisible, setIsPopUpVisible] = useState(props.isOpen)
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
    setIsPopUpVisible(!isPopUpVisible);
    if(props.closeFunc){
      props.closeFunc();
    }
  }

  const popUpStyle =(widthX : number)=>{
    if(!widthX){return "desktop"}
    if(widthX < 600){
      return "mobile";
    }else{
      return "desktop"
    }
  }

  const createPopUp =(widthX : number)=>{
    if(isPopUpVisible){
      return(
        <div ref={ref} className={`pop-up ${veil()} `}>
          <div className={`pop-up-contents-container ${popUpStyle(widthX)}`}>
            {getHeader()}
            <div className="pop-up-child-content">
              {props.content}
            </div>
          </div>
        </div>
      )
    }else{
      return <></>
    }
  }

return ReactDOM.createPortal(createPopUp(width ? width : window.innerWidth), document.body)
}
