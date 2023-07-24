import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ContentStory, iContentStory} from "../ContentStoryItem/ContentStory";
import {ContentStoriesContainerStyled} from "./content-stories-container.styled";


export interface iContentStories{
  groupHeader? : string;
  articles : iContentStory[]
  showDescription : boolean;
  heroImagesOnly : boolean;
}

export const ContentStories=(props : iContentStories)=>{
  function onResize() {

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false,
    onResize
  });

  const getContentStories =()=>{
    let stories : ReactElement[] = [];
    for(let i=0; i < props.articles.length; i++){
      const heroImage =()=>{
        if(props.articles[i].itemSize == "small"){
          return props.heroImagesOnly ? "" : props.articles[i].articleImagePath;
        }else{
          return props.articles[i].articleImagePath;
        }
      }

      stories.push(
        <ContentStory
          articleTitle={props.articles[i].articleTitle}
          articleDescription={props.showDescription ? props.articles[i].articleDescription : undefined }
          articleImagePath={heroImage()}
          linkToArticle={props.articles[i].linkToArticle}
          itemSize={props.articles[i].itemSize}
          tags={props.articles[i].tags}
          tagFunction={()=>{}}
        />
      )
    }
    return stories;
  }

  const getContentQuery=(widthX : number | undefined)=>{
    if(!widthX){return "small-container"}
    if(widthX < 600){
      return "small-container"
    }else{
      return "large-container"
    }
  }

  return (
    <ContentStoriesContainerStyled ref={ref} className={`content-stories-container ${getContentQuery(width)} ${props.heroImagesOnly ? "hero-image-only" : ""}`}>
        <h1>{props.groupHeader}</h1>
      {getContentStories()}
    </ContentStoriesContainerStyled>
  )
}
