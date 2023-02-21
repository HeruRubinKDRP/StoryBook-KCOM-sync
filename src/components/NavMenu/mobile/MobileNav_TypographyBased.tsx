import React, {ReactElement, useState} from "react";
import {iNavigation} from "./MobileMenu";
import Graphic from "../../Graphic/Graphic";


export const MobileNavTypographyBased =(props : iNavigation)=>{
  const [activeIndex, setActiveIndex] = useState(-1);

  const getNavItems =()=>{
    let mainMenuItems : ReactElement[] = [];

    for(let i=0; i < props.navItems.length; i++){
      const getLink = (i:number)=>{
          if(props.navItems[i].children.length == 0){
            return props.navItems[i].linktTo
          }

          return ""
      }

      if(props.navItems[i].children.length > 0){
        mainMenuItems.push(
          <li>
            <div className="has-children">
                  <label>
                    {props.navItems[i].label}
                  </label>
              <Graphic graphicName="chevron-right" classesOverride="chevron000" />
            </div>
          </li>
        )
      }

      mainMenuItems.push(
        <li>
          <a className="main-link-item" href={getLink(i)} >
            {props.navItems[i].label}
          </a>
        </li>
      )
    }

    return <ul>{mainMenuItems}</ul>;

  }

  return (
    <div className="mobile-nav typography-baseed">
      {getNavItems()}
    </div>
  )
}
