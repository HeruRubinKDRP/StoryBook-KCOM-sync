import React, {ReactElement} from "react";
import {stringOrNum} from "../DropDown/drop-down";
import {Graphic, iconType} from "../Graphic/Graphic";
import {FeaturesListStyled} from "./features-list.styled";

export type featureT = {
  label : string,
  icon : iconType
}

export interface iFeaturesList{
  features : featureT[];

}

export const FeaturesList=(props : iFeaturesList)=>{

  const getList=()=>{
    let list : ReactElement[] = [];

    for(let i=0; i<props.features.length; i++){
      list.push(
        <li key={i} className="feature-item">
          <Graphic graphicName={props.features[i].icon} iconSize="1rem"/>
          <label>{props.features[i].label}</label>
        </li>
      )
    }
    return <ul>{list}</ul>
  }
  return (
    <FeaturesListStyled className="features-list-container">
      {getList()}
    </FeaturesListStyled>
  )
}
