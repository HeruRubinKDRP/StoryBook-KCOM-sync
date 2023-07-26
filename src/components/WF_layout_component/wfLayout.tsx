import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import gsap from "gsap/dist/gsap";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ContentItem, CTA_Mode_T, iContentItem} from "../ContentComponents/ContentComponent";
import {WFlayoutStyled} from "./wf-layout.styled";


export type containerStyleT = "square" | "rounded"
export interface iWF{
  contentItems : iContentItem[];
  elementsMode : containerStyleT;
}

export type styleParams = {
  style : "rounded" | "square" | "fg";
}

export type layoutSizeT =  "large-container" | "medium-container" | "small-container"

export const WFlayout=(props : iWF)=>{
  const { width, height, ref } = useResizeDetector();
  const extraItemsDragArea = useRef<HTMLDivElement>(null);
  const dragContainer = useRef<HTMLDivElement>(null);
  const [dragContainerMode, setDragContainerMode] = useState<"scrollable" | "centered">("scrollable")


  useEffect(()=>{
    gsap.registerPlugin(Draggable, InertiaPlugin);
    if(!dragContainer.current || !width){ return }

    Draggable.create(
      extraItemsDragArea.current,{
        type : "x",
        inertia : true,
        allowContextMenu : true,
        allowNativeTouchScrolling : true,
        bounds :{
          minX : -dragContainer.current.getBoundingClientRect().width,
          maxX : 2
        }
      });



  }, [width]);

  useEffect(()=>{

    if(!extraItemsDragArea.current || !width){return}
    const dragAreaWidth : number = extraItemsDragArea.current.getBoundingClientRect().width;

    if( (dragAreaWidth) + 20 > width ){
      setDragContainerMode("scrollable");
      console.log(dragContainerMode);

    }else{
      setDragContainerMode("centered");
      console.log(dragContainerMode);
      return;
    }

  },[width, dragContainerMode])

  const getRemainingItems = (startingIndex : number)=>{
    let list : ReactElement[] = [];
    for(let i=startingIndex; i < props.contentItems.length; i++){
      list.push(
        <div key={i} className={"extra-item"}>
          <ContentItem
            component = "content"
            hasFocalImage={false}
            sectionName={props.contentItems[0].sectionName}
            mainMessage={props.contentItems[i].mainMessage}
            mainMessageColor={props.contentItems[i].mainMessageColor}
            mainMessageSize={props.contentItems[i].mainMessageSize}
            messageAlignment={props.contentItems[i].messageAlignment}
            secondaryMessage={props.contentItems[i].secondaryMessage}
            secondaryMessageSize={props.contentItems[i].mainMessageSize}
            sectionType={props.contentItems[i].sectionType}
            backGroundType={props.contentItems[i].backGroundType}
            backgroundUrlPath={props.contentItems[i].backgroundUrlPath}
            backgroundColor={props.contentItems[i].backgroundColor}
            mainTextHasShadow={props.contentItems[i].mainTextHasShadow}
            heightMethod={props.contentItems[i].heightMethod}
            contrastBackground={props.contentItems[i].contrastBackground}
            hasCTA={props.contentItems[i].hasCTA}
            ctaMode={props.contentItems[i].ctaMode}
            ctaLabel={props.contentItems[i].ctaLabel}
            ctaLinkTo={props.contentItems[i].ctaLinkTo}
          />
        </div>
      )
    }

    return <div className="draggable-container" ref={extraItemsDragArea}>{list}</div>;
  }

  const getLayouts =(layoutType : layoutSizeT)=>{

    switch (layoutType){
      case "large-container":
        return (
          <div className={`wf-container large ${props.elementsMode}`}>
             <div className="main-section">
               <div className="main-hero">
                 <ContentItem
                   component = "content"
                   hasFocalImage={false}
                   sectionName={props.contentItems[0].sectionName}
                   mainMessage={props.contentItems[0].mainMessage}
                   mainMessageColor={props.contentItems[0].mainMessageColor}
                   mainMessageSize={props.contentItems[0].mainMessageSize}
                   messageAlignment={props.contentItems[0].messageAlignment}
                   secondaryMessage={props.contentItems[0].secondaryMessage}
                   secondaryMessageSize={props.contentItems[0].mainMessageSize}
                   sectionType={props.contentItems[0].sectionType}
                   backGroundType={props.contentItems[0].backGroundType}
                   backgroundUrlPath={props.contentItems[0].backgroundUrlPath}
                   backgroundColor={props.contentItems[0].backgroundColor}
                   mainTextHasShadow={props.contentItems[0].mainTextHasShadow}
                   heightMethod={props.contentItems[0].heightMethod}
                   contrastBackground={props.contentItems[0].contrastBackground}
                   hasCTA={props.contentItems[0].hasCTA}
                   ctaMode={props.contentItems[0].ctaMode}
                   ctaLabel={props.contentItems[0].ctaLabel}
                   ctaLinkTo={props.contentItems[0].ctaLinkTo}
                 />
               </div>
               <div className="secondary-items">
                 <ContentItem
                   component = "content"
                   hasFocalImage={false}
                   sectionName={props.contentItems[0].sectionName}
                   mainMessage={props.contentItems[1].mainMessage}
                   mainMessageColor={props.contentItems[1].mainMessageColor}
                   mainMessageSize={props.contentItems[1].mainMessageSize}
                   messageAlignment={props.contentItems[1].messageAlignment}
                   secondaryMessage={props.contentItems[1].secondaryMessage}
                   secondaryMessageSize={props.contentItems[1].mainMessageSize}
                   sectionType={props.contentItems[1].sectionType}
                   backGroundType={props.contentItems[1].backGroundType}
                   backgroundUrlPath={props.contentItems[1].backgroundUrlPath}
                   backgroundColor={props.contentItems[1].backgroundColor}
                   mainTextHasShadow={props.contentItems[1].mainTextHasShadow}
                   heightMethod={props.contentItems[1].heightMethod}
                   contrastBackground={props.contentItems[1].contrastBackground}
                   hasCTA={props.contentItems[1].hasCTA}
                   ctaMode={props.contentItems[1].ctaMode}
                   ctaLabel={props.contentItems[1].ctaLabel}
                   ctaLinkTo={props.contentItems[1].ctaLinkTo}
                 />
                 <ContentItem
                   component = "content"
                   hasFocalImage={false}
                   sectionName={props.contentItems[0].sectionName}
                   mainMessage={props.contentItems[2].mainMessage}
                   mainMessageColor={props.contentItems[2].mainMessageColor}
                   mainMessageSize={props.contentItems[2].mainMessageSize}
                   messageAlignment={props.contentItems[2].messageAlignment}
                   secondaryMessage={props.contentItems[2].secondaryMessage}
                   secondaryMessageSize={props.contentItems[2].mainMessageSize}
                   sectionType={props.contentItems[2].sectionType}
                   backGroundType={props.contentItems[2].backGroundType}
                   backgroundUrlPath={props.contentItems[2].backgroundUrlPath}
                   backgroundColor={props.contentItems[2].backgroundColor}
                   mainTextHasShadow={props.contentItems[2].mainTextHasShadow}
                   heightMethod={props.contentItems[2].heightMethod}
                   contrastBackground={props.contentItems[2].contrastBackground}
                   hasCTA={props.contentItems[2].hasCTA}
                   ctaMode={props.contentItems[2].ctaMode}
                   ctaLabel={props.contentItems[2].ctaLabel}
                   ctaLinkTo={props.contentItems[2].ctaLinkTo}
                 />
               </div>
             </div>
            <div className={`lower-items ${dragContainerMode}`} ref={dragContainer}>
              {getRemainingItems(3)}
            </div>
          </div>
        );
      case "medium-container":

      case "small-container":
        return (
          <div className={`wf-container small ${props.elementsMode}`}>
            <div className="main-section">
              <div className="main-hero">
                <ContentItem
                  component = "content"
                  hasFocalImage={false}
                  sectionName={props.contentItems[0].sectionName}
                  mainMessage={props.contentItems[0].mainMessage}
                  mainMessageColor={props.contentItems[0].mainMessageColor}
                  mainMessageSize={props.contentItems[0].mainMessageSize}
                  messageAlignment={props.contentItems[0].messageAlignment}
                  secondaryMessage={props.contentItems[0].secondaryMessage}
                  secondaryMessageSize={props.contentItems[0].mainMessageSize}
                  sectionType={props.contentItems[0].sectionType}
                  backGroundType={props.contentItems[0].backGroundType}
                  backgroundUrlPath={props.contentItems[0].backgroundUrlPath}
                  backgroundColor={props.contentItems[0].backgroundColor}
                  mainTextHasShadow={props.contentItems[0].mainTextHasShadow}
                  heightMethod={props.contentItems[0].heightMethod}
                  contrastBackground={props.contentItems[0].contrastBackground}
                  hasCTA={props.contentItems[0].hasCTA}
                  ctaLabel={props.contentItems[0].ctaLabel}
                  ctaLinkTo={props.contentItems[0].ctaLinkTo}
                />
              </div>
            </div>
            <div className={`lower-items ${dragContainerMode}`} ref={dragContainer}>
              {getRemainingItems(1)}
            </div>
          </div>)
    }
  }

  const getLayoutSizeClasses=(widthX : number | undefined):layoutSizeT=>{
    if(!widthX){return "small-container"}
    if(widthX > 800){
      return "large-container";
    }else
    if(widthX <800 && widthX >= 500){
      return "medium-container";
    }else
      if(widthX < 500){
        return "small-container"
      }

      return "small-container";
  }



  return (

        <WFlayoutStyled ref={ref} className={`resizer ${props.elementsMode}`}>
          {getLayouts(getLayoutSizeClasses(width))}
        </WFlayoutStyled>
  )
}
