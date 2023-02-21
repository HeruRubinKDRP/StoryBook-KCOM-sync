import React, {ReactElement} from "react";


export type imageItemType = {
  path : string,
  altText : string,
  linkTo? : string
}
export interface iSlideImages{
  slideImageURLs : imageItemType[]
}


export const SlideImages=(props : iSlideImages)=>{

    let slideImages : ReactElement[] = [];

    for(let i=0; i < props.slideImageURLs.length; i++){
      slideImages.push(
        <div key={i} className="image-item-container">
          <img alt="" className="image-item" src="/product-images/kcs/kcs-0.png" title=""/>
        </div>
      )
    }

    return slideImages;

}
