import React, {ReactElement} from "react";
import {iContentStories} from "../ContentStoriesContainer/ContentStories";
import {ContentStoryStyled} from "./content-story.styled";

export interface iContentStory{
  articleTitle : string;
  articleDescription? : string;
  articleImagePath : string;
  linkToArticle : string;
  itemSize : "hero" | "small";
  tags? : string[];
  tagFunction? : Function;
}

export const ContentStory=(props : iContentStory)=>{

  const handleTagAction =(index:number, tagName : string)=>{
    if(!props.tagFunction){return}
    console.log(index, tagName)
    props.tagFunction(index)
  }



  const getTags = ()=>{
    if(!props.tags){return}
      let tags : ReactElement[] = []
      for(let i=0; i < props.tags.length; i++){
        const name : string = props.tags[i];
        tags.push(
          <a
            className="tag-item"
            onPointerUp={()=>handleTagAction(i, name)}
          >
            {props.tags[i]}
          </a>
        )
      }
    return <div className="tags">{tags}</div>;
  }

  const getDescription=()=>{
    if(!props.articleDescription){return}
    return <p className="description">{props.articleDescription}</p>
  }

  return(
    <ContentStoryStyled className={`content-story-item ${props.itemSize}`}>
      <div
        className={`story-thumb ${props.itemSize}`}
        style={{backgroundImage : `url("${props.articleImagePath}")`}}
      />
      {getTags()}
      <h2>{props.articleTitle}</h2>
      {getDescription()}
      <div className="hover-panel"></div>
    </ContentStoryStyled>
  )
}
