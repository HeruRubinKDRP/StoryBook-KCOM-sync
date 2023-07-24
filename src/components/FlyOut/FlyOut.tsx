import React, {ReactElement} from "react";
import { FlyOutStyled} from "./fly-out.styled";


export interface iFlyOut{
  content : ReactElement;
}

export const FlyOut=(props:iFlyOut)=>{
  

  return(
    <FlyOutStyled className="fly-out">
      {props.content}
    </FlyOutStyled>
  )
}
