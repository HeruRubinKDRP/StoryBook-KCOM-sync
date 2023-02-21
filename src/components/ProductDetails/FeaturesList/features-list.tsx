import React, {ReactElement} from "react";
import Graphic, {iconType} from "../../Graphic/Graphic";

export type featureItemT = {
  featureName : string;
  featureDetail? : string;
  iconName? : iconType
  featureStyle : "just-icon" | "just-name" | "icon-and-name" | "everything";
  fadeOutOnScrollOut? : boolean;
}

export interface iFeaturesList {
  featuresList : featureItemT[];
  header? : string;
}

export const FeaturesList = (props : iFeaturesList)=>{

  const getFadeOut=(doFade : boolean | undefined)=>{
    if(doFade){return "fader"}
    return ""
  }
  const getFeatures =()=>{
    let list : ReactElement[] = [];
    for(let i=0; i < props.featuresList.length; i++){
      list.push(
        <li key={`${i}${props.featuresList[i].featureName}`} className={`bullet-point ${getFadeOut(props.featuresList[i].fadeOutOnScrollOut)}`}>
           <Graphic graphicName={props.featuresList[i].iconName} />
            <div className="feature-description">
               <label className="feature-title">{props.featuresList[i].featureName}</label>
               <label>{props.featuresList[i].featureDetail}</label>
           </div>
        </li>
      )
    }

    return list;
  }

  const getHeader=()=>{
    if(!props.header){return<></>}
    return <h2 className="fader">{props.header}</h2>
  }

  return(
    <ul className="features">
      {getHeader()}
      {getFeatures()}
    </ul>
  )
}
