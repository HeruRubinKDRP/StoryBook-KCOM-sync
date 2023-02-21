import React, {ReactElement, useEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ContentItem} from "../../ContentComponents/ContentComponent";
import {iKeyValueContent, KeyValueContent} from "../../ContentComponents/KeyValueContent/KeyValueContent";


export interface iRecipeHero{
 title : string;
 details : string;
 heroImagePath : string;
 features : iKeyValueContent[]
}

export const RecipeHero =(props:iRecipeHero)=>{
  const onResize =()=>{

  }
  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 200,
    skipOnMount : false,
    onResize
  });

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "small-container"}

    if(widthX < 1000){return "small-container"}
    return "large-container"
  }

  const getRecipeFeatures =()=>{
    let features : ReactElement[] = []
    for(let i=0; i<props.features.length; i++){
      features.push(
        <KeyValueContent
          layoutType={props.features[i].layoutType}
          primaryMessage={props.features[i].primaryMessage}
          secondaryMessage={props.features[i].secondaryMessage}
        />
    )
    }
    return <div className="features-area">{features}</div>
  }

  return(
    <div ref={ref} className={`${getContainerQuery(width)} recipe-hero-container`}>
    <div className="content-area">
      <h1>{props.title}</h1>
      <p>{props.details}</p>
      {getRecipeFeatures()}
    </div>
      <ContentItem
        backGroundType="image"
        backgroundColor="none"
        backgroundUrlPath={props.heroImagePath}
        ctaLabel=""
        ctaLinkTo=""
        ctaMode="button"
        hasCTA={false}
        heightMethod="stretch-to-parent"
        mainMessage=""
        mainMessageColor="white"
        mainMessageWeight="regular-weight"
        mainTextHasShadow={false}
        messageTextAlignment="text-left"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionType="content-front-and-center"
        component="content"
        contrastBackground="none"
        hasFocalImage={false}
        sectionName=""
      />
    </div>
  )
}
