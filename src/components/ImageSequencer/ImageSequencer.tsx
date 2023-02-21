import React, {ReactElement} from "react";

export interface iImageSequencer{
  imagePaths : string[]
}


export const ImageSequencer=(props : iImageSequencer)=>{

  const createImages =()=>{
    let images : ReactElement[] = [];
    for(let i=0; i < props.imagePaths.length; i++){
      images.push(<img alt={""} className={'image-item'} key={i} title={""} src={props.imagePaths[i]}/>)
    }

    return images;
  }

  return createImages()


}

export const createImages =(imagePaths : string[])=>{
  let images : ReactElement[] = [];
  for(let i=0; i < imagePaths.length; i++){
    images.push(
      <div key={i} className="image-item-container">
        <img alt={""} className={'image-item'} title={""} src={imagePaths[i]}/>
      </div>
    )
  }

  return images;
}