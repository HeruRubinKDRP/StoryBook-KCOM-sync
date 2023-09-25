import React, {ReactElement} from "react";
import Image from "next/image";


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
          <Image alt="" width={500} height={500} className="image-item" src="/product-images/kcs/kcs-0.png" title=""/>
        </div>
      )
    }

    return slideImages;

}
