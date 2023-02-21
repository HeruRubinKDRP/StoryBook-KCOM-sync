import React, {ReactElement} from "react";
import {iKeyValueContent, KeyValueContent} from "../KeyValueContent/KeyValueContent";

export interface iMultikeyvalueArea{
  layoutMode: "stacked" | "inline";
  items : iKeyValueContent[]
}


export const MultikeyValueArea=(props:iMultikeyvalueArea)=>{

  const getItems =()=>{
    let items : ReactElement[] = [];
    for(let i=0; i < props.items.length; i++){
      items.push(
        <KeyValueContent
          layoutType={props.items[i].layoutType}
          primaryMessage={props.items[i].primaryMessage}
          secondaryMessage={props.items[i].secondaryMessage}
          colorSchemes={props.items[i].colorSchemes}
        />
      )
    }

    return items;
  }

  return(
    <div className={`multi-key-value-container ${props.layoutMode}`}>
      {getItems()}
    </div>
  )

}
