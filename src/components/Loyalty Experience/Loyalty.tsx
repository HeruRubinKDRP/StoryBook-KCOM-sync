import React from "react";
import {useResizeDetector} from "react-resize-detector";
import {LoyaltyStyled} from "./loyalty-styled";

export interface iLoyalty{

}

export const Loyalty =(props:iLoyalty)=>{
  function onResize(){

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshOptions: {},
    refreshRate: 100,
    skipOnMount : false,
    onResize
  });

  const getContainerQueries=(widthX : number | undefined)=>{
    if(!widthX){
      return "mobile"
    }

    if(widthX > 800 ){
      return "desktop"
    }
  }

  return(
    <LoyaltyStyled className={`${getContainerQueries(width)}`}>

    </LoyaltyStyled>
  )
}
