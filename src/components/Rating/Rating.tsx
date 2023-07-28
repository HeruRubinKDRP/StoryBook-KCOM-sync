import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from "gsap/dist/gsap";
import React, {ReactElement} from "react";
import Graphic from "../Graphic/Graphic";
import {LifeBar} from "../LifeBar/LifeBar";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {StyledRating} from "./ratings.styled";
import {useResizeDetector} from "react-resize-detector";

export interface iRating{
  totalNumberOfStars : 5 | 10;
  totalNumberOfReviews : number;
  ratingNumber : number;
  scrollToTargetID? :  string;
  ratingActiveColor? : colorByNameType;
  classes? : string;
  ratingVisible? : "hidden" | "visible";
}


export const Rating=(props: iRating)=>{

  gsap.registerPlugin(ScrollToPlugin);

  const {width, height, ref} = useResizeDetector({
    refreshMode: 'throttle',
    refreshRate: 100, refreshOptions: {},
    handleHeight: false, skipOnMount: false,
    onResize: () => {},
  })


  const scrollToReviews=()=>{
    if(!props.scrollToTargetID){return}

    const target = window.document.getElementById(props.scrollToTargetID);
    if(!target){return}
    gsap.to(window, {duration: 2, scrollTo: {y:target.getBoundingClientRect().top , offsetY: 50}});
  }

  const getRatingInfo=()=>{

    if(props.ratingVisible === "hidden"){return}

    return(
        <div className="rating-info">
          <span>{props.ratingNumber}</span>
              |
          <span>({props.totalNumberOfReviews})</span>
        </div>
    )

  }


  return (
    <StyledRating className="ratings-overall-container" containerHeight={height || 0} >

      <div className="stars-container" ref={ref}>
        <svg width="100%" height="100%" viewBox="0 0 82.61 15.8">
          <defs>

            <mask id="maskStars" maskContentUnits="userSpaceOnUse">
              <polygon points="8.31 0 10.37 6.17 16.62 6.15 11.55 9.6 13.44 15.8 8.31 11.97 3.17 15.8 5.07 9.6 0 6.15 6.24 6.17 8.31 0" fill="white"/>
              <polygon points="24.93 0 26.99 6.17 33.24 6.15 28.16 9.6 30.06 15.8 24.93 11.97 19.79 15.8 21.69 9.6 16.62 6.15 22.86 6.17 24.93 0" fill="white"/>
              <polygon points="41.07 0 43.13 6.17 49.38 6.15 44.31 9.6 46.2 15.8 41.07 11.97 35.93 15.8 37.83 9.6 32.76 6.15 39 6.17 41.07 0" fill="white"/>
              <polygon points="57.69 0 59.75 6.17 66 6.15 60.92 9.6 62.82 15.8 57.69 11.97 52.55 15.8 54.45 9.6 49.38 6.15 55.62 6.17 57.69 0" fill="white"/>
              <polygon points="74.3 0 76.37 6.17 82.61 6.15 77.54 9.6 79.44 15.8 74.3 11.97 69.17 15.8 71.07 9.6 66 6.15 72.24 6.17 74.3 0" fill="white"/>

              <path d="M0.2,0.3 L0.3,0.2 L0.4,0.3 Q0.35,0.35 0.4,0.4 L0.3,0.5 Q0.35,0.45 0.4,0.4 Z" fill="white"/>
              <path d="M0.4,0.3 L0.5,0.2 L0.6,0.3 Q0.65,0.35 0.6,0.4 L0.5,0.5 Q0.55,0.45 0.5,0.4 Z" fill="white"/>
            </mask>
          </defs>

          <rect className="star-bg" x="0" y="0" width="100%" height="100%" fill="grey" mask="url(#maskStars)"/>
          <rect className="star-fill" x="0" y="0" width={`${ Math.round(props.ratingNumber / props.totalNumberOfStars * 100)}%`} height="100%" fill={colorNameToValue("secondaryGold")} mask="url(#maskStars)"/>
        </svg>
      </div>

      <div className="rating-info-container">
        {getRatingInfo()}
      </div>

    </StyledRating>
  )
}
