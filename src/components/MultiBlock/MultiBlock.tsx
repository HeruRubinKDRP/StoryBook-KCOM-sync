import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import gsap from "gsap/dist/gsap";
import React, {ReactElement, useEffect, useRef} from "react"
import {useResizeDetector} from "react-resize-detector";
import {iSimpleHighlightCard, SimpleHighlightCard} from "../ContentComponents/SimpleHighlightCard/SimpleHighlightCard";
import {HeaderArea, iHeaderArea} from "../HeaderArea/HeaderArea";

export interface iMultiBlock{
  groupHeaderText? : iHeaderArea;
  cards : iSimpleHighlightCard[]
}

export const MultiBlock = (props:iMultiBlock)=>{
  const dragContainer = useRef<HTMLDivElement>(null);

  function onResize() {

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000,
    skipOnMount : false,
    onResize
  });

  useEffect(()=>{
    gsap.registerPlugin(Draggable, InertiaPlugin);
    if(!dragContainer.current || !width){ return }

    Draggable.create(
      dragContainer.current,{
        type : "x",
        inertia : true,
        allowContextMenu : true,
        allowNativeTouchScrolling : true,
        bounds :{
          minX : -dragContainer.current.getBoundingClientRect().width + width,
          maxX : 12
        },
        onThrowUpdate : function (){
          // @ts-ignore
          console.log(-dragContainer.current.getBoundingClientRect().width + width)
        }
      });
  },[width, dragContainer])



  const getCards=(heightX : number | undefined)=>{
    let cards : ReactElement[] = [];

    const getHeight = ()=>{
      if(!heightX){return "14rem"}
      return `${heightX*0.65}px`
    }
    for(let i=0; i < props.cards.length; i++){
      cards.push(
        <SimpleHighlightCard
          title={props.cards[i].title}
          titlePosition={props.cards[i].titlePosition}
          mainMessageSize={props.cards[i].mainMessageSize}
          secondaryMessage={props.cards[i].secondaryMessage}
          subTitle={props.cards[i].subTitle}
          alignment={props.cards[i].alignment}
          maxSize={props.cards[i].maxSize}
          mainImageSize={props.cards[i].mainImageSize}
          mainFocalImage={{
            imagePath : props.cards[i].mainFocalImage?.imagePath,
            cropStyle : props.cards[i].mainFocalImage?.cropStyle,
            imageHeight : getHeight()
          }}
          mainCTA={props.cards[i].mainCTA}
          secondaryCTA={props.cards[i].secondaryCTA}
          featuresList={props.cards[i].featuresList}
          customClasses={props.cards[i].customClasses}
          imageSizeMethod="bg-image"
        />
      )
    }
    return cards;
  }

  const getHeader=()=>{

    if(!props.groupHeaderText){return <></>}
    return (
      <HeaderArea
        headerLabel={props.groupHeaderText?.headerLabel}
        headerStyle={props.groupHeaderText?.headerStyle}
        hierarchyLevel={props.groupHeaderText.hierarchyLevel}
        colorScheme={props.groupHeaderText.colorScheme}
        headerAlignment={props.groupHeaderText.headerAlignment}
      />
    )
  }

  const getContainerQueries=(widthX : number | undefined)=>{
    if(!widthX){return "small-container"}
    if(widthX <= 600){
      return "small-container"
    }

    if(widthX > 600){
      return "large-container"
    }
  }

  return(
    <div ref={ref} className={`multi-block-container ${getContainerQueries(width)}`}>
      {getHeader()}
      <div className="cards-container" ref={dragContainer}>
        {getCards(height)}
      </div>
    </div>
  )
}
