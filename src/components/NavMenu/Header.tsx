import React, {ForwardedRef, ReactElement, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import Graphic, {iconType} from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {HoverContainer} from "./Hover-Sections/HoverContainer";
import {iNavColumn, NavColumn} from "./Hover-Sections/NavColumn";
import {iSideMenuList, SideMenuList} from "./Hover-Sections/SideMenuList";
import {iSubNavGroup, subNavType} from "./subNavGroups";


export type navItemMain = {
  label : string;
  linkTo : string;
  subMenu? : subNavType;
  classes? : string;
  icon? : iconType;
}

export interface iSubHeader{
  hasSubMenu : boolean;
  subNavAreas : iNavColumn[]
  sideNavList : iSideMenuList;
}

export interface iHeader{
  headerType? : "fake-header" | "product-header" | "next-gen";
  headerMode?: "mobile" | "desktop";
  topLevelItems : navItemMain[];
  subMenus? : iSubHeader[]
}



// eslint-disable-next-line react/display-name
export const HeaderNav = React.forwardRef<HTMLElement, iHeader>(({subMenus, topLevelItems}, forwardRef)=>{

  const [currentNavOpen, setCurrentNav] = useState(-1)
  const { width, height, ref } = useResizeDetector();


  const hoverAction=(index : number)=>{
    setCurrentNav(index);
    console.log("hover", index)
  }

  const getSubNav=(subNavSection : number)=>{
    if(subNavSection < 0 || !subMenus ){return<></>}
    if(subNavSection >= subMenus.length){return <></>}
    if( !subMenus[subNavSection].hasSubMenu){return<></>}

    let menuSections : ReactElement[] = [];
// side menu
    if(subMenus[subNavSection].sideNavList && subMenus[subNavSection].sideNavList.list){
      menuSections.push(
        <SideMenuList key={1} list={subMenus[subNavSection].sideNavList.list} />
      )
    }

// create nav sections
    const createNavSections = () => {
      if (subMenus[subNavSection].subNavAreas.length < 1){ return }
      let subNavColumnItems: ReactElement[] = [];

      for (let i = 0; i < subMenus[subNavSection].subNavAreas.length; i++) {
        subNavColumnItems.push(
          <NavColumn navSections={subMenus[subNavSection].subNavAreas[i].navSections}/>
        )
      }
    }

    let navSections = ()=>{
      let navSectionsList : ReactElement[] = [];

      for(let i=0; i < subMenus.length; i++ ){

      }
    }




    return ( <HoverContainer content={<>{menuSections}</>}/> )
  }

  const desktopHeader=()=>{
    let items : ReactElement[] = []
    for(let i=0; i < topLevelItems.length; i++){
      let specialClasses:string|undefined = ""
      if(topLevelItems[i].classes){
        specialClasses = topLevelItems[i].classes
      }

      items.push(
        <li key={i+topLevelItems[i].label} className="nav-item" >
          <KButton
            label={topLevelItems[i].label}
            buttonType={"link-internal"}
            classes={topLevelItems[i].classes}
            hoverFunc={()=>hoverAction(i)}
            transitionType="expand-bg"
          />
        </li>
      )
    }

    return (
      <>
        <nav>
          <div className="upper-nav-area">
            <Graphic graphicName="logo" classesOverride="logo" />
            <div className="common-items">

            </div>
          </div>
          <ul className="nav-list">
            {items}
          </ul>
        </nav>
      </>)
  }

  const mobileHeader=()=>{
    return (
      <nav className="mobile-header">
        <div className="upper-nav-area">
          <KButton
            buttonType="round-no-label"
            buttonWidth="fit-to-content"
            fontColorOverride="#ffffff"
            iconPlacement="before-label"
            iconStandard="icon-menu"
            label="K-Button"
          />
          <Graphic graphicName="logo" classesOverride="logo" />
          <KButton
            backgroundColorOverride="transparent"
            buttonType="round-no-label"
            buttonWidth="fit-to-content"
            fontColorOverride="#ffffff"
            iconPlacement="before-label"
            iconStandard="icon-cart"
            label="K-Button"
            classes="main-cart"
          />
        </div>
      </nav>
    )
  }

  const headerMain =(width:number | undefined)=>{
    if(!width){
      return mobileHeader();
    }
    if(width > 600){
      return desktopHeader();
    }else {
      return mobileHeader();
    }
  }

  return(
    <>
      <header  className="main-navigation" ref={ref}>
        {headerMain(width)}
        <div className={"expanded-sub-nav"}>
        </div>
      </header>
      <div className="sub-nav-container">
        <div className="hover-nav-positioner">
          {getSubNav(currentNavOpen)}
        </div>
      </div>
    </>
  )
})




export default HeaderNav;

