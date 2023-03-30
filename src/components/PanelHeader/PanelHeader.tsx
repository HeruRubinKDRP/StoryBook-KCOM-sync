import React, {ReactElement, useEffect, useState} from "react";
import KButton from "../Kbutton/KButton";
import {PanelHeaderStyles} from "./PanelHeader.styles";
import {useResizeDetector} from "react-resize-detector";
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";


export interface IpanelHeader{
  headerText? : string;
  hasCloseButton : boolean;
  backButtonLabel? : string;
  closeFunc? : Function;
  hasBackButton : boolean;
  backButtonFunc? : Function;
}

export const PanelHeader = (props : IpanelHeader) =>{
  const action = ()=>{
    if(props.closeFunc){
      props.closeFunc();
    }
  }

  const {width, height, ref} = useResizeDetector(
    {
      refreshMode: 'throttle',
      refreshRate: 100,
      refreshOptions: {},
      handleHeight: false,
      skipOnMount: false,
      onResize: () => {
        return
      }
    }
  )

  const CloseButton = ()=>{
    if(props.hasCloseButton){
      return <KButton
        label={"Close"}
        buttonType="text-icon-noBG"
        iconPlacement="after-label"
        iconStandard="close"
        buttonWidth="fit-to-content"
        classes="close"
        iconSize="2.5rem"
        transitionType="expand-bg"
        actionFunc={ ()=>action() }
      />
    }

    return <></>;
  }



  const BackButton =()=>{
    if(props.hasBackButton ){
      let backBtnLabel = "Back";
      if(props.backButtonLabel){
        backBtnLabel = props.backButtonLabel;
      }
      return(
        <KButton
          label={backBtnLabel}
          buttonType="text-icon-noBG"
          actionFunc={ props.backButtonFunc }
          iconPlacement="before-label"
          iconStandard="chevron-left"
          iconSize="2rem"
          buttonWidth="fit-to-content"
          transitionType="expand-bg"
          classes=""
        />
      )
    }else{
      return null
    }
  }


  return(
    <PanelHeaderStyles className={`k-panel-header ${getContainerQuery(width)}`}>
      <header ref={ref} className="header-container">
        <div className="left">
          {BackButton()}
        </div>
        <h2 className="panel-header-label middle">
          {props.headerText}
        </h2>
        <div className="right">
          {CloseButton()}
        </div>

      </header>
    </PanelHeaderStyles>
  )
}
