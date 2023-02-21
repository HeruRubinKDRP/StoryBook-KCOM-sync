import React, {ReactElement} from "react";


export interface iFlyOut{
  content : ReactElement;
}

export const FlyOut=(props:iFlyOut)=>{
  

  return(
    <div className="fly-out">
      {props.content}
    </div>
  )
}
