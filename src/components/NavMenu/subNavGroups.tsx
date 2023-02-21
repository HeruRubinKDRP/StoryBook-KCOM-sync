import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {iconType} from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";


export type subNavType = "closed" | "beverages" | "coffee-makers" | "get-started" | "accessories"
export const subNavList : subNavType[] = ["beverages", "coffee-makers" , "get-started" , "accessories"];

export interface iSubNavGroup{
  navSectionName : subNavType;
}

export const SubNavGroups =(props : iSubNavGroup)=>{

  const getFeaturedSection=()=>{
    return(
      <div className="featured-bev-section">
        <KButton label="Featured Beverages" buttonType="text-icon-noBG" iconStandard="chevron-right" />
      </div>
    )
  }

  const getActiveSection =()=>{
    switch (props.navSectionName){
      case "closed":
        return <></>
      case "beverages":
        return getFeaturedSection();
      default:
        return <></>
    }

  }



  return (
    <div className="beverages-subnav-container">
      {getActiveSection()}
    </div>
  )
}
