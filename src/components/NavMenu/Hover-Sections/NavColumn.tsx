import React, {ForwardedRef, ReactElement, useState} from "react";


export interface iNavColumn{
  navSections : iNavColumnSection[]
}

export interface iNavColumnSection{
  sectionLabel : string;
  sectionMainLinkTo : string;
  columnItems : iNavColumnSectionItem[]
}

export interface iNavColumnSectionItem{
   label : string;
   linkTo : string;
   imagePath? : string;
   size : "small" | "medium" | "large"
}

export const NavColumn=(props : iNavColumn)=>{

  const createNavItems=(navItems : iNavColumnSectionItem[])=>{
    let navItemsEl : ReactElement[] = [];

    for(let i=0; i < navItems.length; i++){
      navItemsEl.push(
        <li className={`nav-item-col ${navItems[i].size}`}>
          <a href={navItems[i].linkTo}>
            {navItems[i].label}
            <div className="nav-image">
              <img alt={""} className="nav-image-item" src={navItems[i].imagePath}/>
            </div>
          </a>
        </li>
      )
    }
  }

  const createNavSections =()=>{
    let navSectionsList : ReactElement[] = [];

    for(let i=0; i < props.navSections.length; i++){

    }

  }

  return(<ul className="nav-column"></ul>)
}
