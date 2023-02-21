import React, {ReactElement, useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import KButton from "../Kbutton/KButton";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";


export type linkT={
  label : string;
  linkTo : string;
  classes : string;
  keepVisible? : boolean;
}

export type formFactorT = "mobile" | "desktop" | "measure";

export interface iPageNav{
  navName : string;
  links : linkT[];
  classes : string;
  collapsedLabel : string;
  background : colorByNameType;
  useGlass?: boolean;
  backGroundOpacity? : number;
}

export const fontColorByBG =(BGcolor : colorByNameType)=>{
  switch(BGcolor){
    case "dark-roast":
      return "white";

    case "light-roast":
      return "#473036";

    case "latte":
      return "#473036";

    case "medium-roast":
      return "#473036";

    case "text":
      return "white";

    case "discount":
      return "#white"

    case "sepia":
      return "#473036"

    case "white":
      return "#473036";

    default:
      return "#473036"
  }
}

export const getContrastClass =(referenceColor : colorByNameType)=>{
  switch(referenceColor){
    case "dark-roast":
      return "light";

    case "light-roast":
      return "dark";

    case "latte":
      return "dark";

    case "medium-roast":
      return "light";

    case "text":
      return "light";

    case "discount":
      return "light"

    case "sepia":
      return "dark"

    case "white":
      return "light";

    default:
      return "light"
  }
}

export const PageNav=(props:iPageNav)=>{
  const { width, height, ref } = useResizeDetector();
  const navItemsWidth = useRef<HTMLDivElement>(null)
  const [formFactor, setFormFactor] = useState<formFactorT>("desktop");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useLayoutEffect(()=>{
    if(!navItemsWidth.current || !width){return}

    if( width > 600 && navItemsWidth.current.getBoundingClientRect().width > width ){
      setFormFactor("mobile");
      return;
    }else if(navItemsWidth.current.getBoundingClientRect().width < width){
      setFormFactor("desktop");
    }

    if(width < 600){
      setFormFactor("mobile");
      return;
    }else if(width >= 600){
      setFormFactor("desktop");
    }

    //console.log(width)
    console.log("width:", width, "nav items width: ", navItemsWidth.current.getBoundingClientRect().width)
  },[width]);

  const toggleMobileMenu=()=>{
    setMenuOpen(!menuOpen);
  }

  const mobileMenu =(links : ReactElement[])=>{
    if(menuOpen){
      return(
        <div className="mobile-menu" onClick={()=>toggleMobileMenu()}>
          <KButton
            label={props.collapsedLabel}
            iconPlacement="right-edge"
            buttonWidth="fit-to-content"
            buttonType={"link-internal"}
            iconStandard="chevron-up"
            actionFunc={()=>toggleMobileMenu()}
            fontColorOverride={fontColorByBG(props.background) }
            classes={`closer ${getContrastClass(props.background)} main-action`}
            transitionType="expand-bg"
          />
           <div className="animation-container">
             <div className="mobile-links">
               {links}
             </div>
           </div>
        </div>)
    }else{
      return (
        <div className="mobile-menu" onClick={()=>toggleMobileMenu()}>
          <KButton
            label={props.collapsedLabel}
            iconPlacement="right-edge"
            buttonWidth="fit-to-content"
            buttonType={"link-internal"}
            iconStandard="chevron-down"
            actionFunc={()=>toggleMobileMenu()}
            fontColorOverride={fontColorByBG(props.background)}
            classes={` ${getContrastClass(props.background)} main-action opener`}
            transitionType="expand-bg"
          />
        </div>
      )
    }
  }

  const getLinks=()=>{
    let links : ReactElement[] = [];

    for(let i=0; i < props.links.length; i++){
      links.push(<KButton
        key={i+props.links[i].label}
        label={props.links[i].label}
        iconPlacement="no-icon"
        buttonWidth="fit-to-content"
        buttonType={"link-internal"}
        fontColorOverride={fontColorByBG(props.background)}
        classes={`${props.links[i].classes} ${getContrastClass(props.background)}`}
        transitionType="expand-bg"
      />)
    }
    return links;
  }

  const getGlass = ()=>{
    if(!props.useGlass){return "none"}
    return "blur(8px)"
  }

  const getNavLinks=(formFactor : formFactorT)=>{
    if(!props.links){console.log("no links provided to pageNav"); return;}

    if(formFactor == "mobile"){
      return mobileMenu(getLinks());

    }else if( formFactor == "desktop"){
      return <div className="menu-horz" >{getLinks()}</div>
    }
  }

  const glassCheck=()=>{
    if(!props.useGlass){return ""}else{return "b3"}
  }

  return (
    <nav
      ref={ref}
      style={
      {
        backgroundColor : colorNameToValue(props.background, props.backGroundOpacity),
        backdropFilter : getGlass()
      }
    }
      className="page-level-nav"
      id={props.navName}
    >
      <div className="measure-menu" ref={navItemsWidth}>
        {getLinks()}
      </div>
      <div className="links">
        {getNavLinks(formFactor)}
      </div>
    </nav>
  )
}
