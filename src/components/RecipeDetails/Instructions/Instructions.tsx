import React, {ReactElement, useEffect, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {SimpleHighlightCard} from "../../ContentComponents/SimpleHighlightCard/SimpleHighlightCard";

export type instructionItemT = {
  title : string;
  secondaryTitle? : string;
  details? : string;
  imagePath? : string;
  finePrint? : string;
}

export interface iInstructions{
  instructionSet : instructionItemT[]
}

export const Instructions = (props : iInstructions)=>{

  const { width, height, ref } = useResizeDetector();


  const getInstructions =()=>{
    let instructions : ReactElement[] = [];
    for(let i=0; i < props.instructionSet.length; i++){
      instructions.push(
        <SimpleHighlightCard
          title={props.instructionSet[i].details}
          titlePosition="after-image"
          secondaryMessage={{
            label : props.instructionSet[i].title,
            color : "medium-roast",
            size : "Medium"
          }}
          alignment="right"
          mainImageSize="default-size"
          mainFocalImage={{
            imagePath : props.instructionSet[i].imagePath,
            cropStyle : "rounded-rectangle"
          }}
        />
      )
    }
    return instructions;
  }

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return}
    if(widthX < 600){
      return "small-container"
    }

    // if(widthX >= 500 && widthX <= 1000){
    //   return "medium-container"
    // }

    return "large-container"
  }

  return (
    <div ref={ref} className={`instructions-container ${getContainerQuery(width)}`} style={{display:"flex", alignItems : "center"}} >
      <div className="positioner">
      {getInstructions()}
      </div>
    </div>
  )
}
