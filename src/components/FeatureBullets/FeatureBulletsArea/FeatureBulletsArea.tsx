import React, {ReactElement, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {Kcarousel} from "../../Carousel/Kcarousel";
import Graphic from "../../Graphic/Graphic";
import {HeaderArea} from "../../HeaderArea/HeaderArea";
import {FeatureBullet, iFeatureBullet} from "../FeatureBulletItem/FeatureBullet";

export interface iFeatureBulletsArea{
  features : iFeatureBullet[];
  featuresAreaName : string;
  height : string;
}

export const FeatureBulletsArea =(props : iFeatureBulletsArea)=>{

  const [activeIndex, setActiveIndex] = useState(-1);
  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false
  });

  const handleAction=(selectedIndex : number)=>{
    console.log(selectedIndex);
    setActiveIndex(selectedIndex);
  }

  const getFeatureBullets =()=>{
    const features : ReactElement[] = [];
    for(let i=0; i < props.features.length; i++){
      features.push(
        <FeatureBullet
          key={i}
          iconSizeOverride=""
          actionFunc={()=>handleAction(i)}
          featureLabel={props.features[i].featureLabel}
          featureIcon={props.features[i].featureIcon}
          featureDetails={props.features[i].featureDetails}
          showChevron={props.features[i].showChevron}
        />
      )
    }

    return features;
  }

  const getCarousel =()=>{
    let slides : ReactElement[] = [];

    for(let i=0; i < props.features.length; i++){
      slides.push(
        <div className="feature-details-container">
          <Graphic graphicName={props.features[i].featureIcon} iconSize="4rem"/>
          <h2>{props.features[i].featureLabel}</h2>
          <p>
            {props.features[i].featureDetails}
          </p>
        </div>
      )
    }

    return (
      <div className="features-carousel-container">
        <Kcarousel
          itemsPerSlide={1}
          component="carousel"
          carouselType="slider"
          keepNavButtons={true}
          slides={slides}
          navStyle="dots"
          navPosition="bottom"
          heightMethod="stretch-to-parent"
        />
      </div>
    )
  }

  const getArea =()=>{
    if(activeIndex > -1){
      return getCarousel();
    }
    else{
      return getFeatureBullets();
    }
  }


  const getHeader=()=>{

    if(activeIndex > -1){
      return(
        <div className="header-area action" onClick={()=>setActiveIndex(-1)}>
          <div className="header-action-area">
            <HeaderArea
              headerLabel={props.featuresAreaName}
              headerStyle="line-through"
              hierarchyLevel={2}
              colorScheme="dark-roast"
              headerAlignment="center"
            />
            <Graphic graphicName="close" iconSize="1rem" />
          </div>
        </div>
      )
    }else{
      return(
        <div className="header-area">
          <HeaderArea
            headerLabel={props.featuresAreaName}
            headerStyle="line-through"
            hierarchyLevel={2}
            colorScheme="dark-roast"
            headerAlignment="center"
          />
        </div>
      )
    }

  }

  const getContainerQueries = (widthX : number | undefined)=>{
    if(!widthX){
      return "small-container";
    }
    if(widthX > 1200){
      return "large-container";
    }
    if(widthX > 450 && widthX < 1200){
      return "medium-container"
    }
    if(widthX < 450){
      return "small-container"
    }
  }

  return(
    <section ref={ref} className={`${getContainerQueries(width)} feature-bullets-area`} style={{height : props.height}}>
      {getHeader()}
      <div className="feature-bullets-area">
        {getArea()}
      </div>
    </section>
  )

}
