import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import styled, { keyframes } from "styled-components"
import Graphic, {iconType} from "../Graphic/Graphic";
import {KButton} from "../Kbutton/KButton"
import {KPanel} from "../Panel/Panel";
import {useOutsideToggler} from "../_utilities/clickOutsideChecker/clickOutsideHook";
import { KColors } from "../_utilities/css-in-js/css-library"
import {KDropDownStyled} from "./k-drop-down-styled";

export type stringOrNum = string | number;

export type dropDownItem = {
  label : string,
  value : stringOrNum,
  displayElement? : ReactElement,
  action? : Function
}

export type btnSizeType = "small" | "medium" | "large" | "thumb-sized";

export interface IdropDown{
  dropDownType : btnSizeType;
  defaultLabel : string;
  label : string;
  selected : string;
  selectionOptions : dropDownItem[];
  onChangeFunc? : Function;
  downButtonColorOverride? : string;
  classes? : string;
}

export function KDropDown(props : IdropDown){
  const [selection, setSelection] = useState(props.defaultLabel);
  const [isOpen, setIsOpen] = useState(false);
  const mainReference = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const containerReference = useRef(null);

  const setSelectionAction =(selection:string)=>{
    console.log(selection);
    setSelection(selection);
    setIsOpen(false);
  }


  //generates items in fly out panel
  const getMenuItems =()=>{
    let menuOptions = [];

    for(let i=0; i < props.selectionOptions.length; i++){
      console.log(props.selectionOptions[i]);

      //if item is selected then we will add a checkmark graphic
      const checkMark = ()=>{
        if(props.selectionOptions[i].label === selection){
          return <Graphic graphicName="icon-checkmark" iconPlacement="before-label" />
        }
      }

      menuOptions.push(
        <div
          key={`op${i}`}
          className="drop-down-item"
          onClick={()=>setSelectionAction(props.selectionOptions[i].label)}
        >
          <div className="hover-panel"/>
          {checkMark()}
          {props.selectionOptions[i].label}
        </div>
      )
    }

    return menuOptions;
  }

  useEffect(()=>{
    setSelection(props.defaultLabel);

  },[props.defaultLabel])


  const onApplyChange=()=>{
    setIsOpen(!isOpen);

    setTimeout(()=>{
      if(props.onChangeFunc){
        props.onChangeFunc(!isOpen);
        console.log("1 on apply changes", !isOpen)
      }
    },200)
  }

  const menuItemsPanel = ()=>{

    if(isOpen === true){
      return <KPanel panelType="column">
        <div className="panel-bg">
          <div className="shadow-top-down "/>
        </div>
        <div className="drop-down-items">
          {getMenuItems()}
        </div>
      </KPanel>;
    }
  }

  //hook for checking if user is clicking outside the container
  //if they do, we will close the menu by setting isopen state to false

  const clickOutsideToggle = ()=>{
    console.log("set this to false")
    setIsOpen(false);
  }

  useOutsideToggler(containerReference.current, clickOutsideToggle, isOpen);

  const statusStyles =()=>{
    if(isOpen == true){
      return "is-open";
    }else{
      return "";
    }
  }

  const buttonIcon =(isOpenStatus : boolean, btnType : btnSizeType)=>{
    let iconForButton : iconType = "chevron-down";
    if( isOpenStatus && btnType == "thumb-sized"){
      iconForButton = "close";
    }

    return <Graphic graphicName={iconForButton} />
  }

  let dropDownShadow = `0 0 0 rgb(0 0 0 / 0%)`;
  if(isOpen == true){
    dropDownShadow = `0 0 0.75rem rgb(0 0 0 / 25%)`
  }


  return(

    <KDropDownStyled
      style={{boxShadow : dropDownShadow }}
      className={`drop-down-container ${props.dropDownType} ${statusStyles()} ${props.classes}`}
      ref={containerReference}
    >
      <div onClick={()=>onApplyChange()} ref={mainReference} className="drop-down">
        <div className={"filler"} />
        <label className="selection-label">{selection}</label>
        <KButton
          classes="round-btn-large primary"
          label=""
          linkTo=""
          backgroundColorOverride={props.downButtonColorOverride}
          buttonType="round-no-label"
          iconOverride={ buttonIcon(isOpen, props.dropDownType)} />
      </div>
      {menuItemsPanel()}
    </KDropDownStyled>

  )

}

export default KDropDown;
