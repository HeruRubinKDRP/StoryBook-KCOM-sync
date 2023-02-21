import React, {useState} from "react";
import Graphic from "../Graphic/Graphic";

export interface iLearnMore{
  mode : "pop-up" | "inline";
  actionFunc : Function;
  learnMore :{
    label? : string;
  }
}

export const LearnMore=(props : iLearnMore)=>{

  return(
    <div className="learn-more">
      <label onClick={()=>props.actionFunc()}>
        {props.learnMore.label ? props.learnMore.label : "Learn More"}
      </label>
      <Graphic graphicName={"launch-pop-up"} iconSize="1rem" />
    </div>
  )
}
