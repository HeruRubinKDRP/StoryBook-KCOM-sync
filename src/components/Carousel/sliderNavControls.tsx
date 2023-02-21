import React, {useRef, useEffect, useState, ReactElement} from "react";
import KButton from "../Kbutton/KButton";



export interface iNavControls{
  navAction : Function;
  totalSlides : number;
  containerWidth : number | undefined;
  selectedIndex : number;
}

export const CarouselNavControls =(props:iNavControls)=>{

  const getNavDots =(containerWidth : number | undefined)=>{
    if(containerWidth != undefined){

      let navDots : ReactElement[] = [];

      for(let i=0; i < props.totalSlides; i++){
        let selectedClass = "";
        if(i == props.selectedIndex){
          selectedClass = "active";
        }
        navDots.push(
          <div className={`nav-dot ${selectedClass}`} onClick={()=>props.navAction(i)}>
            <div className="selected-dot"></div>
          </div>)
      }
      return navDots;
    }else{
      return <div className="no-width">no width</div>
    }

  }


  return (
    <>
      <KButton
        actionFunc={()=>props.navAction("left")}
        buttonType="text-icon-noBG"
        buttonWidth="fit-to-content"
        iconPlacement="after-label"
        iconStandard="chevron-left"
        classes="nav-left"
        label=""
      />
      <KButton
        actionFunc={()=>props.navAction("right")}
        buttonType="text-icon-noBG"
        buttonWidth="fit-to-content"
        iconPlacement="after-label"
        iconStandard="chevron-right"
        classes="nav-right"
        label=""
      />
      <div className="nav-dots-container">
        {getNavDots(props.containerWidth)}
      </div>
    </>

  )
}
