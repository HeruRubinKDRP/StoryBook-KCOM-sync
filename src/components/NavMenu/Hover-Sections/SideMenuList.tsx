import React, {ForwardedRef, ReactElement, useState} from "react";
import {iconType} from "../../Graphic/Graphic";

export type sideMenulistItem = {
  label : string;
  linkTo : string;
  icon? : iconType;
  classes? : string;
}

export interface iSideMenuList{
  list : sideMenulistItem[]
}

export const SideMenuList =(props : iSideMenuList)=>{

  const getItems=()=>{
    let listItems : ReactElement[] = [];
    for(let i=0; i < props.list.length; i++){
      listItems.push(
        <li key={i} className={`side-menu-item ${props.list[i].classes}`}>
          <a href={props.list[i].linkTo}>
            {props.list[i].label}
          </a>
        </li>
      )
    }

    return listItems;
  }

  return(
    <ul className="side-menu-list">
      {getItems()}
    </ul>
  )
}
