import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";


export interface iGenericCardContainer{
  children : ReactElement
}

export const GenericCardsContainer=(props : iGenericCardContainer)=>{
  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false,

  });

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "mobile-defaulted"}
    if(widthX < 500){
      return "mobile";
    }else {
      return "desktop";
    }
  }

  return(
    <div ref={ref} className={`${getContainerQuery(width)} generic-cards-container`}>
      {props.children}
    </div>
  )
}
