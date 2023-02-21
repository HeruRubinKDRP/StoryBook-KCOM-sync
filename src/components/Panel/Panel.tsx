import {ReactElement} from "react";

export type panel = "column" | "modal-full" | "thumb-sized" | "slide-up";

export interface IkPanel{
  panelType : panel;
  children : ReactElement[];
}


export function KPanel(props:IkPanel){

  let panelType:panel;
  switch(props.panelType){
    case "column":
      panelType = "column";
      break;
    case "thumb-sized":
      panelType = "thumb-sized";
      break;

    default:
      panelType = "column"; 
  }

  return (<div className={`${panelType} panel`}>
      {props.children}
    </div>
  )
}