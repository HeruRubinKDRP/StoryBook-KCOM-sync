import React from "react";
import {Graphic, iconType} from "../../Graphic/Graphic";

export interface iFeatureBullet{
  featureLabel : string;
  featureIcon : iconType;
  iconSizeOverride? : string;
  index? : number;
  actionFunc? : Function;
  featureDetails? : string;
  showChevron : boolean;
}

export const FeatureBullet = (props:iFeatureBullet)=>{

  const handleAction=()=>{
    if(!props.actionFunc){return}
    props.actionFunc(props.index)
  }

  const getChevron =()=>{
    if(!props.showChevron){return}
    return(
      <Graphic
        graphicName="chevron-right"
        iconSize="2rem"
        classesOverride="affordance"
      />
    )
  }
  return(
    <div className="feature-bullet-container" onClick={()=>handleAction()}>
      <Graphic
        graphicName={props.featureIcon}
        iconSize={props.iconSizeOverride ? props.iconSizeOverride : "3rem"}
      />
      <h3 className="feature-name">
        {props.featureLabel}
      </h3>
      {getChevron()}
    </div>
  )

}
