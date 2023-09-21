import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import gsap from "gsap/dist/gsap";
import React, {useRef, useEffect, useState, ReactElement, useLayoutEffect} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ContentItem, heightMethodsT, iContentItem, sectionT} from "../ContentComponents/ContentComponent";

import Graphic from "../Graphic/Graphic";
import {CarouselStyled} from "./k-carousel-styled";

export type carouselContentT = {
  component : | "carousel";
  carouselType: "3D" | "slider";
  slides: iContentItem[]
}

export interface iCarousel {
  itemsPerSlide : number;
  component : | "carousel";
  carouselType: "3D" | "slider";
  keepNavButtons: boolean;
  slides: ReactElement[];
  navStyle : "dots" | "text" | "thumbnails";
  navPosition : "top" | "bottom" | "middle";
  navLabels? : string[];
  useImageThumbs? : boolean;
  customClasses? : string;
  heightMethod? : heightMethodsT;
  heightOverride? : string;
  containerBackgroundColor? : string;
  dragRule? : "allow-drag" | "no-drag";
  contentArea? : {
    useContentArea : boolean;
    contentElement : ReactElement,
    contentPosition : "left" | "right",
    contentWidthOverride? : string;
  }
  useContainerQueries? : "use" | "ignore";
  setInitialSlidePosition? : number;
}


export const  Kcarousel = (props: iCarousel) => {
  const [currentSlide, setCurrentSlide] = useState({slide: props.setInitialSlidePosition ?? 0, doAnimate: false});
  const [slidesCount, setSlidesCount]=useState(props.slides.length);
  const {width, height, ref} = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000,
    skipOnMount : false
  });

  const sliderContainerRef = useRef<HTMLDivElement>(null);
  let animControl = gsap;
  let tl = gsap.timeline();
  let dragTl = gsap.timeline();

  const getSnaps = (width: number, count: number, negativeVals: boolean) => {

    let snaps: number[] = [];
    for (let i = 0; i < count; i++) {
      let val = i * width;
      if (i == 0) {
        snaps.push(0);
        continue;
      }
      if (negativeVals) {
        val = -val;
      }
      snaps.push(val);
    }
    // console.log(snaps)
    return snaps;
  }

  const setCurrentSlideFromDrag = (thisX: number, iw: number) => {
    // if user has dragged, advance the currentSlide and don't trigger animation
    let currentSlideNew = 0;

    if (Math.abs(thisX) > 0) {
      // console.log("this x")
      currentSlideNew = Math.abs(thisX) / iw;
    }
    setCurrentSlide({slide: currentSlideNew, doAnimate: false});
  }


//drag
  useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);
    // console.log("current slide drag:", currentSlide)
    if (!sliderContainerRef.current) {
      return
    }
    let container = sliderContainerRef.current.querySelector("#panelWrap")

    const slidesLength: number = props.slides.length;
    let iw = sliderContainerRef.current.getBoundingClientRect().width;
    if (!width) {
      return;
    }

    let dragArea = Draggable.create(container, {
      type: "x",
      zIndexBoost: false,
      edgeResistance: 1,
      snap: {
        x: getSnaps(iw, slidesLength, true)
      },
      inertia: true,
      bounds: {minX: -width * slidesLength, maxX: width * slidesLength},
      allowContextMenu: true,
      onClick :function (){
        // console.log("clicked")
      },
      onDrag: function () {
        tl.clear();
      },
      onThrowComplete: function () {
        setCurrentSlideFromDrag(this.x, iw);
      }

    });



    if(props.slides.length <= 1){
      dragArea[0].disable()
    }else if(props.itemsPerSlide){
        let adjustedSlidesCount = 0;
        let calcSlides = Math.floor(props.slides.length / props.itemsPerSlide)
      if(props.slides.length % props.itemsPerSlide > 0){
        calcSlides += 1;
      }
      if(calcSlides <= 1){
        dragArea[0].disable();
      }else {
        dragArea[0].enable();
      }
    }

    // console.log("enabled? ", dragArea[0].enabled());

    if (currentSlide.doAnimate) {
      tl.clear();

      tl.to(container, {
        x: -(currentSlide.slide * iw)
      });
      tl.play()
    }

    if(props.dragRule == "no-drag"  ){
      dragArea[0].disable();
    }

  }, [
      currentSlide,
      width,
      props.itemsPerSlide,
      currentSlide.slide,
      props.slides.length,
      tl,
      props.dragRule
  ]);

//animated
  useEffect(() => {

    if (!width || !sliderContainerRef.current) {
      return
    }

    if( tl.isActive()){return}

    let container = sliderContainerRef.current.querySelector("#panelWrap");
    tl.to(container, {
      x: width * -currentSlide.slide,
      duration: 0
    })


  }, [width, currentSlide.slide, tl]);

  const slideAnim = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        if (currentSlide.slide > 0) {
          setCurrentSlide({slide: currentSlide.slide - 1, doAnimate: true});
        }
        break;
      case "right":
        if (currentSlide.slide < props.slides.length-1) {
          setCurrentSlide({slide: currentSlide.slide + 1, doAnimate: true});
        }
        break;
    }
  }

  const getSlides = () => {
    if(props.itemsPerSlide > 1){
      //TODO merge these into one function
    }

    let slides: ReactElement[] = [];

    for (let i = 0; i < props.slides.length; i++) {
      let slidesGroup : ReactElement[] = []
      let itemsPerSlide = 1;
      if(props.itemsPerSlide){itemsPerSlide = props.itemsPerSlide; }
      for(let j=0; j < itemsPerSlide; j++){
            slidesGroup.push(props.slides[i]);
            if(itemsPerSlide > 1){i++;}
            if(i >= props.slides.length){break;}
      }
      slides.push(<div className="slide" key={i+props.carouselType}>{slidesGroup}</div>)
    }

    return slides;
  }

  const navSection = (activeSlide : number) => {
    if(!props.keepNavButtons){return}
    if(props.slides.length == 1){
      return <></>
    }
    let adjustSlideCount = Math.floor(props.slides.length / props.itemsPerSlide);

    if(props.slides.length % props.itemsPerSlide > 0){
      adjustSlideCount += 1
    }

    if(adjustSlideCount <= 1){ return <></>}

    const checkDisabled = (direction: "left" | "right") => {
      switch (direction) {
        case "left":
          if (activeSlide <= 0) {
            return "disabled";
          }else{return ""}

        case "right":
          if (activeSlide >= props.slides.length - 1) {
            return "disabled"
          }else{return ""}
      }
    }

    return (
      <div className="nav-container">
        <div className={`right ${checkDisabled("right")}`} onClick={() => slideAnim("right")}>
          <Graphic graphicName="chevron-right"/>
        </div>
        <div className={`left ${checkDisabled("left")}`} onClick={() => slideAnim("left")}>
          <Graphic graphicName="chevron-left"/>
        </div>
      </div>
    )
  }

  const containerQuery = (widthX: number | undefined) => {
    if(props.useContainerQueries == "ignore"){
      return "";
    }

    if (!widthX) {
      return
    }
    if (widthX >= 200 && widthX <= 599) {
      return "width-between-200-and-599";
    } else if (widthX >= 600 ) {
      return "greater-than-600";
    }
    return "auto-width";
  }

  const navBtnTypes=()=>{
    if(props.keepNavButtons){
      return "keep-nav-btns";
    }else{
      return "hide-nav-btns";
    }
  }

  const getNavDots =(numDots: number, currentDot : number)=>{
    let dots : ReactElement[]= [];
    let dotCount = numDots;


    if(props.itemsPerSlide){
      dotCount = Math.floor(numDots / props.itemsPerSlide) + numDots % props.itemsPerSlide;
    }
    if(dotCount <= 1){ return <></>}
    for(let i=0; i<dotCount; i++){
      let selectedClass :string = "";
      if(i == currentDot){
        selectedClass = "selected";
      }
      switch (props.navStyle) {
        case "dots":
          dots.push(<li key={Math.random()} onClick={()=>setCurrentSlide({slide: i, doAnimate: true})} className={`nav-dot nav-item ${selectedClass}`}></li>);
          break;

        case "text":
          if(!props.navLabels){
            dots.push(
              <li onClick={()=>setCurrentSlide({slide: i, doAnimate: true})} key={i+Math.random()} className={`nav-text nav-item ${selectedClass}`}>
                <label>
                  {i}
                </label>
                <div className="hover-panel"/>
              </li>
            )
            break;
          }
          dots.push(
            <li onClick={()=>setCurrentSlide({slide: i, doAnimate: true})} key={i+Math.random()} className={`nav-text nav-item ${selectedClass}`}>
              <label>{props.navLabels[i]}</label>
              <div className="hover-panel"/>
            </li>
          )
          break;

        case "thumbnails":

          dots.push(
            <li onClick={()=>setCurrentSlide({slide: i, doAnimate: true})} key={i+Math.random()} className={`nav-item ${selectedClass}`}>
              {props.slides[i]}
            </li>
          )
          break;
      }

    }
    return <ul className={`nav-dots-container ${props.navPosition} ${props.navStyle}-nav`}>{dots}</ul>
  }

  const getHeightMethod =()=>{
    if(props.heightOverride){return props.heightOverride}
    switch (props.heightMethod) {
      case "fit-content":
        return "auto";
      case "one-viewport":
        return "100vh";
      case "stretch-to-parent":
        return "100%";
      default:
        return "inherit";
    }
  }

  const getSlidesSection = ()=>{
    return(
      <CarouselStyled style={{height : getHeightMethod(), backgroundColor : props.containerBackgroundColor }} className={`k-carousel ${props.customClasses} ${navBtnTypes()} ${containerQuery(width)}`} ref={ref}>
        {getNavDots(props.slides.length, currentSlide.slide)}
        {navSection(currentSlide.slide)}
        <div id="slider" ref={sliderContainerRef} className={`slides-container resizer`}>
          <div id="panelWrap" className="drag-container">
            {getSlides()}
          </div>
        </div>
      </CarouselStyled>
    )
  }

  const getContentContainer=()=>{
    if(!props.contentArea || !props.contentArea.useContentArea){
      return getSlidesSection();
    }
      return (
        <CarouselStyled style={{width: props.contentArea.contentWidthOverride, backgroundColor : props.containerBackgroundColor}} className={`duo-${props.contentArea.contentPosition}`}>
          <div className="content-area">
            {props.contentArea.contentElement}
          </div>
          {getSlidesSection()}
        </CarouselStyled>
      )
  }

  return (
    <>{getContentContainer()}</>
  );
};
