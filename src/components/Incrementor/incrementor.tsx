import React, {useState} from "react";
import KButton from "../Kbutton/KButton";


export interface iIncrementor{
  initialValue : number;
  maxValue : number;
  minNumber : number;
  incrementFunc : Function;
  label : string
}

export type mathDirection = "subtract" | "add";

export const Incrementor = (props : iIncrementor)=>{


  const increment=(direction : mathDirection)=>{

    switch (direction){
      case "subtract":

        if(props.initialValue - 1 >= props.minNumber){
            props.incrementFunc(props.initialValue - 1)
        }
        break;

      case "add":

        if(props.initialValue + 1 <= props.maxValue){
          console.log("added:", props.initialValue + 1)
          props.incrementFunc(props.initialValue + 1);
        }
        return;
    }
  }

  const getStyles=(direction : mathDirection)=>{

    switch (direction){
      case "add":
        if(props.initialValue >= props.maxValue){
          return "disabled"
        }
        return ""

      case "subtract":
        if(props.initialValue <= props.minNumber){
          return "disabled"
        }
        return ""
    }




  }

  return(
    <div className="incrementors-menu">
      <KButton
        label=""
        transitionType="expand-bg"
        buttonType="secondary"
        iconPlacement="after-label"
        iconStandard="minus-icon"
        classes={`incrementor ${getStyles("subtract")}`}
        actionFunc={()=>increment("subtract")}
      />

      <label>{props.label}: {props.initialValue}</label>
      <KButton
        label=""
        transitionType="expand-bg"
        buttonType="secondary"
        iconPlacement="after-label"
        iconStandard="plus-icon"
        classes={`incrementor ${getStyles("add")}`}
        actionFunc={()=>increment("add")}
      />
    </div>
  )

}
