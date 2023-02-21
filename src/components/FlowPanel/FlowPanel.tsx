import React, {MouseEventHandler, ReactElement, useContext, useEffect, useRef, useState} from "react";
import KButton from "../Kbutton/KButton";
import {PanelHeader} from "../PanelHeader/PanelHeader";
import {appState, currentAppInfo} from "../my-brews/myBrewsManager";

export type buttonMenuItem = {
  buttonLabel: string;
  buttonAction: Function;
  buttonClasses : string;
  buttonNav: string;
}

export type panelType = {
  panelName: string;
  panelContent: ReactElement;
  buttonsMenu: buttonMenuItem[];

}

export interface IFlowPanel {
  parentContainerQuery? : string;
  panelType: "slide-up" | "slide-from-side";
  panelElements: panelType[];
  closeFunc: Function;
  backBtnFun: Function;
}

export const FlowPanel = (props: IFlowPanel) => {
  //const [currentPanel, updateCurrentPanel] = useState(props.panelElements[0].panelName);
  const [lastPanel, updateLastPanel] = useState(props.panelElements[0].panelName);
  const [panelMarginBottom, updateMarginBottom] = useState(0);
  const [panelMarginTop, updateMarginTop] = useState(0);

  const [initialized, setInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const context = useContext(currentAppInfo);

  useEffect(()=>{
    if(!initialized){
      updatePadding();
      setInitialized(true);
    }
  },[initialized])

  useEffect(()=>{
    updatePadding();
    if(initialized){
      updateLastPanel(context.data.currentPanel);
    }
  },[context.data.currentPanel, initialized])

  const updatePadding = () => {
    const activePanel = containerRef.current;
    const activeFooter = activePanel?.querySelector('.flow-panel-buttons-container');
    const activeHeader = activePanel?.querySelector('.k-panel-header');

    //add padding to account for footer
    if (activeFooter) {
      updateMarginBottom(activeFooter.getBoundingClientRect().height)
    }

    //add padding to account for Header
    if (activeHeader) {
      updateMarginTop(activeHeader.getBoundingClientRect().height)
    }
  }

  const changePanel = (dynamicFunc: Function, selectedPanel: string) => {
    if (dynamicFunc != undefined) {
      dynamicFunc();
    }
//keep track of last panel
    updateLastPanel(context.data.currentPanel);

    if (containerRef != undefined && containerRef.current != undefined) {
      console.log("scroll top", containerRef.current.scrollTop);

      const activePanel = containerRef.current?.querySelector('.active-panel');
      if (activePanel != undefined) {
        activePanel.scrollTop = 0;
      }
    }
    //give sliding animation a moment to complete
    setTimeout(() => {
      console.log("changePanel", selectedPanel);
      console.log("last panel", lastPanel);
      updateLastPanel("hidden-panel")
      if (containerRef != undefined && containerRef.current != undefined) {
        console.log("scroll top", containerRef.current.scrollTop);
        containerRef.current.scrollTop = 0;
      }
    }, 200)

    updatePadding();
  }

  const positionStyle = (checkThisPanel: string) => {

    if(context.data.currentPanel.toLowerCase() == checkThisPanel.toLowerCase()){
      return "active-panel"
    }else
      if (checkThisPanel.toLowerCase() == context.data.currentPanel.toLowerCase()) {
      return "active-panel"
    }else
      if(checkThisPanel.toLowerCase() == lastPanel.toLowerCase()) {
      return "last-panel"
    }else{
      return "hidden-panel"
    }
  }

  const createPanels = () => {
    let panels: ReactElement[] = [];
    for (let i = 0; i < props.panelElements.length; i++) {
      //*****create buttons section***
      let buttons: ReactElement[] = [];
      for (let j = 0; j < props.panelElements[i].buttonsMenu.length; j++) {
        buttons.push(
          <KButton
            key={`${i} ${j}btn`}
            actionFunc={() => changePanel(props.panelElements[i].buttonsMenu[j].buttonAction, props.panelElements[i].buttonsMenu[j].buttonNav)}
            label={props.panelElements[i].buttonsMenu[j].buttonLabel}
            buttonType="primary"
            classes={props.panelElements[i].buttonsMenu[j].buttonClasses}
          />
        )
      }
      ////*********
      const hasBackButton = () => {
        if (context.data.currentPanel != lastPanel) {
          return false;
        } else {
          return true;
        }
      }

//create panels
      panels.push(
        <div key={`${i}header`}
             className={`flow-panel-item ${positionStyle(props.panelElements[i].panelName)}`}
             style={{
               paddingTop: `${panelMarginTop}px`,
               paddingBottom : `${panelMarginBottom}px`
        }}
        >

          <PanelHeader
            headerText={props.panelElements[i].panelName}
            hasCloseButton={true}
            backButtonFunc={props.backBtnFun}
            hasBackButton={hasBackButton()}
            closeFunc={props.closeFunc}
          />
          <div className="flow-panel-content">
            {props.panelElements[i].panelContent}
          </div>
          <div className="flow-panel-buttons-container">
           <div className="buttons-positioner">
             {buttons}
           </div>
          </div>

        </div>)
    }
    return panels;
  }

  return (
    <div ref={containerRef} className="k-panel-main">
     <div className="flow-panels-container" >
       {createPanels()}
     </div>
    </div>
  )
}

