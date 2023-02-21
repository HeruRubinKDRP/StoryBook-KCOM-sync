import React, {ReactElement} from "react";
import {appState} from "../my-brews/myBrewsManager";

export interface Iconfirm{
  appState : appState;
  productID : number;

}

export const ConfigureItem =(props : Iconfirm)=>{


  return(
    <div>
      Configure
    </div>
  )
}
