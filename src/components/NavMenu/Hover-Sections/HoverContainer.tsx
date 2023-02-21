import React, {ReactElement, useEffect, useRef} from "react"

export interface iHoverContainer{
  content : ReactElement
}

export const HoverContainer=(props : iHoverContainer)=>{


  return(
    <div className="hover-container">
      {props.content}
    </div>
  )
}
