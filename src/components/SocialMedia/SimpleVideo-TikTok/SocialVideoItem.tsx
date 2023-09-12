import React, {useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import Graphic from "../../Graphic/Graphic";
import {SocialVideoStyled} from "./social-video.styled";
import Image from "next/image";


export interface iSimpleVideoItem {
    videoPath : string;
    previewImagePath : string;
    headerText? : string;
    subHeaderText?: string;
}

export const SimpleVideoItem  = (props : iSimpleVideoItem)=>{

  const [isPlaying, setIsPlaying] = useState(false);
  const onResize =()=>{

  }
  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 200,
    skipOnMount : false,
    onResize
  });

  const test=()=>{
    console.log("clicked")
  }

  const getImagery =(isPlaying : boolean)=>{
    if(!isPlaying){
      return (
          <Image className="image-preview" src={props.previewImagePath} alt=""/>
      )
    }

    return(
      <video width="100%" height="100%" autoPlay={true}  playsInline={true} controls={false}  >
        <source src={props.videoPath} type="video/mp4"/>
      </video>
    )
  }

  const getPlayer =(isPlaying : boolean)=>{
    if(!isPlaying){
      return(
        <div onClick={()=>setIsPlaying(true)} className="play-control">
          <Graphic graphicName="play-icon" />
        </div>
      )
    }

    return(
      <div className="is-playing-controls" onClick={()=>setIsPlaying(false)}>

      </div>
    )
  }

  return(
    <SocialVideoStyled className="video-card">
      {getPlayer(isPlaying)}
      {getImagery(isPlaying)}
    </SocialVideoStyled>
  )

}



