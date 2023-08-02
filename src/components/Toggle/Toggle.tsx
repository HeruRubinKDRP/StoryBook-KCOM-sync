import React, {ReactElement, useEffect, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import KButton, {caratPositionT} from "../Kbutton/KButton";


export type toggleItem = {
  label : string;
  action? : Function;
  imagePath? : string;
}

export type toggleLayout = "stacked" | "side-by-side";
export const toggleLayoutList : toggleLayout[] = ["stacked", "side-by-side"];

export type toggleStyle = "touch-edges" | "spaced-out" | "one-pill";
export const toggleStyleList : toggleStyle[] = ["touch-edges", "spaced-out", "one-pill"];

export interface Itoggle{
  toggleOptions : toggleItem[];
  toggleType : toggleLayout;
  toggleStyle : toggleStyle;
  selectedIndexOverride? : number;
  classes? : string;
  selectedCaratPosition : caratPositionT;
  overrideSelectedIndex? : number;
}



export const KToggle =(props : Itoggle)=>{
  const { width, height, ref } = useResizeDetector();
  const [selectedIndex, updateSelectedIndex] = useState(0)
  useEffect(()=>{
    if(!props.overrideSelectedIndex){return}
    updateSelectedIndex(props.overrideSelectedIndex);
  },[])
  const performAction =(index : number)=>{
    console.log(selectedIndex)
    updateSelectedIndex(index);
    const action = props.toggleOptions[index]
    if(action.action != undefined){
      action.action();
    }
  }

  const getSelected =(index:number)=>{

    if(props.selectedIndexOverride && props.selectedIndexOverride > -1 && index == props.selectedIndexOverride){
      return "toggle-selected";
    }

    if(index == selectedIndex){
      return "toggle-selected"
    }else{
      return "";
    }
  }

  const getCarat=(index:number):caratPositionT=>{
    if(index == selectedIndex){
      return props.selectedCaratPosition
    }

    return "none";
  }

  const getImage=(index : number):ReactElement=>{
    if(!props.toggleOptions[index].imagePath){return<></>}
    return (
      <div className="image-container">
          <img alt="" src={props.toggleOptions[index].imagePath} />
      </div>
    )
  }

  const createToggle =()=>{
    //if(!props.toggleOptions){return}
    let toggleItems : ReactElement[] = [];
    for(let i=0; i < props.toggleOptions.length; i++){
      toggleItems.push(
        <div  key={i} className={`toggle-item-container ${props.toggleStyle}`} >
          {getImage(i)}
          <KButton
            classes={`toggle-item ${getSelected(i)} `}
            label={props.toggleOptions[i].label}
            iconPlacement="no-icon" buttonType="secondary"
            actionFunc={()=>performAction(i)}
            carat={getCarat(i)}
            transitionType="expand-bg"
          />
        </div>
      );
    }
    return toggleItems;
  }

  return(
    <div ref={ref} className={`k-toggle-container ${props.toggleType} ${props.classes}`}>
      {createToggle()}
    </div>
  )

}
