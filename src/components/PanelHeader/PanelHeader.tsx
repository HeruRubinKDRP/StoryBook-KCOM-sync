import React, {ReactElement, useEffect, useState} from "react";
import KButton from "../Kbutton/KButton";


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
        />
      )
    }else{
      return <div></div>
    }
  }




  return(
    <div className="k-panel-header">
      {BackButton()}
      <h2 className="panel-header-label">
        {props.headerText}
      </h2>
      {CloseButton()}
    </div>
  )
}
