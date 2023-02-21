import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import Graphic, {iconType} from "../Graphic/Graphic";
import {KButton} from "../Kbutton/KButton"

export interface InavMenu{
  sections : NavSectionType[]
}

export type NavSectionType = {
  title : string;
  links : NavSectionLinkType[]
}

export type NavSectionLinkType = {
  label : string;
  imageFocus : string;
  backGroundImage : string;
  backGroundColor : string;
  weight : number;
  subLinks : subLink[]
}

export type subLink = {

}

export const NavSection =(props:InavMenu)=> {

  const CreateNavItems = ()=>{
    return <div></div>
  }

  return(
    <div className="nav-menu-container">
      {CreateNavItems()}
    </div>
  )
}
