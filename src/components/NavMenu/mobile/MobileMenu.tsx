import React, {ReactElement, useEffect, useRef} from "react"
import {useResizeDetector} from "react-resize-detector";
import {MobileNavTypographyBased} from "./MobileNav_TypographyBased";
import {MobileTypographyBasedExample} from "./stories";


export type navItem ={
  label : string;
  linktTo : string;
  thumbnail : string;
  children : navItem[]
}


export interface iNavigation {
  navItems : navItem[]
}

export interface iNavExperiment{
  navData : iNavigation,
  navMode : "typography-based" | "accordion-images"
}



export const MobileNavExperiments =(props : iNavExperiment)=>{

  const getMenu=()=>{
    switch(props.navMode){
      case "typography-based":
        return <MobileNavTypographyBased navItems={props.navData.navItems}  />
      case "accordion-images":
        return <div>accordion</div>
    }
  }
  return ( getMenu() )
}