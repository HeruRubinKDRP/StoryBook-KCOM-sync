import React, {ReactElement, useState} from "react";
import {ExpandCollapse} from "../ExpandCollapse/expand-collapse";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {SeoItemStyled} from "./seo-item.styled";


export type iSEO_section = {
  title : string;
  body : string;
}

export interface iSEOitem{
  mainTitle : string;
  mainBody : string;
  sections? : iSEO_section[]
  showAsCollapsed : boolean;
  expandText?:string;
  isExpandedText? : string;
  fontColorOverride?: string;
  bgColor? : colorByNameType;
}


export const SEO_item =(props: iSEOitem)=>{
  const [isExpanded, setIsExpanded] = useState(false);
  const getSections =()=>{
    if(!props.sections){return}
    let sections :ReactElement[] = [];
    let collapsedSections : ReactElement[]=[];
    for(let i=0; i < props.sections.length; i++){
      const item = (
        <section>
          <h2 style={{color : props.fontColorOverride}}>
            {props.sections[i].title}
          </h2>
          <p style={{color : props.fontColorOverride}}>
            {props.sections[i].body}
          </p>
        </section>
      )
      if(props.showAsCollapsed && i > 0){
        collapsedSections.push(item);
        continue;
      }
      sections.push(item);
    }

    if(props.showAsCollapsed){
      return <>
          {sections}
          <ExpandCollapse
            expanderStyle="button"
            isExpandedText={props.isExpandedText}
            expandText={props.expandText}
            content={<div>{collapsedSections}</div>} />
        </>
    }

    return sections;
  }

  return(
    <SeoItemStyled className="seo-item-container" style={{backgroundColor : colorNameToValue(props.bgColor)}}>
      <h1 style={{color : props.fontColorOverride}} className="seo-main-title">{props.mainTitle}</h1>
      <p style={{color : props.fontColorOverride}}>{props.mainBody}</p>
      {getSections()}
    </SeoItemStyled>
  )
}
