import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {ContentItem} from "../ContentComponents/ContentComponent";

export interface iScrubVideo{
  mediaPath : string;
  scrollDuration : number;
  duration : number;
  videoHeight: string;
  headingText? : string;
  subHeadingText? : string;
}

export const ScrubVideo=(props : iScrubVideo)=>{
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLVideoElement>(null)
  const mediaGroupRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{

    if(!mediaRef.current){return}

    mediaRef.current.play();
    mediaRef.current.pause();
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: mediaContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin : mediaGroupRef.current,
        pinSpacing : false,
        scrub: true
      }
    });

    tl.fromTo(
      mediaRef.current,
      {
        currentTime: 0
      },
      {
        currentTime: mediaRef.current.duration ? mediaRef.current.duration : props.duration
      }
    );


  },[props.duration]);

  const getHeading =()=>{
        if(!props.headingText && !props.subHeadingText){return<></>}

        return (
          <div className="scrub-heading-area">
            <h2>{props.headingText}</h2>
            <p>{props.subHeadingText}</p>
          </div>
          );
  }

  return(
    <div style={{height : `${props.scrollDuration}vh`}} ref={mediaContainerRef} className="scrub-video-container">
      <div ref={mediaGroupRef}>
        {getHeading()}
        <video style={{}} ref={mediaRef} src={props.mediaPath} playsInline={true}
               preload="auto" muted={true} className="video-background"></video>
      </div>

    </div>
  )
}
