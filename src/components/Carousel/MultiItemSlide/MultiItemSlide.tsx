import React, {useRef, useEffect, useState, ReactElement, useLayoutEffect} from "react";
import {useResizeDetector} from "react-resize-detector";


export interface iMultiItemSlide{
  items : ReactElement[];
  itemsPerSlide : number;
}

export const MultiItemSlide=(props:iMultiItemSlide)=>{

  const getSlides =()=>{
    let slides : ReactElement[] = [];

    let slideGroups : ReactElement[] = [];
    for(let i=0; i < props.items.length; i++){
      slideGroups.push(props.items[i])
      if(i % props.itemsPerSlide || i == props.items.length-1){
        //if we have reached the end of a slide set
        slides.push(<div className="slide multi" id={"g"+i}>{slideGroups}</div>);
        slideGroups = [];
      }
    }
    return slides;
  }

  return(<>{getSlides()}</>)
}

export const getSlidesForStory =(items : ReactElement[], itemsPerSlide : number)=>{
  let slides : ReactElement[] = [];

  let slideGroups : ReactElement[] = [];
  for(let i=0; i < items.length; i++){
    slideGroups.push(items[i])
    if(i % itemsPerSlide || i == items.length-1){
      //if we have reached the end of a slide set
      slides.push(<div className="slide multi" id={"g"+i}>{slideGroups}</div>);
      slideGroups = [];
    }
  }
  return slides;
}

