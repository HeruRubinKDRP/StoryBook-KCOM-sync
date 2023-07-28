import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {carouselContentT, Kcarousel} from "../Carousel/Kcarousel";
import {iPageNav, PageNav} from "../PageNav/PageNav";
import {bgType, ContentItem, heightMethodsT, iContentItem, sectionT} from "./ContentComponent";


export interface iContentPage{
  contentSections : any[]
}



export const ContentPage =(props:iContentPage)=>{

  const getContentItem =(content : iContentItem , keyNum : string, customClasses:string)=>{
    return( <ContentItem
      key = {keyNum}
      hasFocalImage={content.hasFocalImage}
      sectionName={content.sectionName}
      sectionType={content.sectionType}
      mainMessage ={content.mainMessage}
      mainMessageColor ={content.mainMessageColor}
      mainMessageSize ={content.mainMessageSize}
      messageAlignment={content.messageAlignment}
      secondaryMessage ={content.secondaryMessage}
      secondaryMessageSize ={content.secondaryMessageSize}
      backGroundType ={content.backGroundType}
      backgroundUrlPath ={content.backgroundUrlPath}
      backgroundColor ={content.backgroundColor}
      mainTextHasShadow={content.mainTextHasShadow}
      heightMethod={content.heightMethod}
      contrastBackground={content.contrastBackground}
      hasCTA={content.hasCTA}
      ctaLabel={content.ctaLabel}
      ctaLinkTo={content.ctaLinkTo}
      component="content"
      customClasses={customClasses}
    />)
  }
  const createPage = ()=>{
    let sections : ReactElement[] = []

    for(let i=0; i< props.contentSections.length; i++){
      switch(props.contentSections[i].component){
        case "content":
          sections.push(
           getContentItem(props.contentSections[i], "con"+i, "")
          )
          break;
        case "carousel":
          let slides : ReactElement[] = [];
          for(let s=0; s<props.contentSections[i].slides.length; s++ ){
            slides.push(getContentItem( props.contentSections[i].slides[s] , "car"+i, "slide"))
          }
          sections.push(
            <Kcarousel
              navPosition="bottom"
              key={i}
              component={"carousel"}
              carouselType="slider"
              keepNavButtons={true}
              slides={slides}
              itemsPerSlide={1}
              navStyle="dots"
            />
          )
          break;
      }


    }

    return sections
  }

  return <>
    <PageNav
      background="dark-roast"
    collapsedLabel = "Features Menu"
      links={[
      {
        label : "BREWERS",
        linkTo : "",
        classes : ""
      },{
        label : "TESTIMONIALS",
        linkTo : "",
        classes : ""
      },{
        label : "FEATURES",
        linkTo : "",
        classes : ""
      },{
        label : "KEURIG APP",
        linkTo : "",
        classes : ""
      },{
        label : "BREW MATCH",
        linkTo : "",
        classes : ""
      },{
        label : "BUILD YOUR STARTER KIT",
        linkTo : "",
        classes : "highlighted"
      }
    ]} classes="" navName="SMART"/>
    {createPage()}
      </>

}
