import React, {ReactElement, useEffect, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {KeyValueContent} from "../../ContentComponents/KeyValueContent/KeyValueContent";

export type ingredientType = {
  key : string,
  value : string
}

export interface iIngredients{
  ingredients : ingredientType[]
}

export const Ingredients=(props : iIngredients)=>{

  const getIngredients=()=>{
    let ingredients : ReactElement[] = [];
    for(let i=0; i < props.ingredients.length; i++){
      ingredients.push(
        <KeyValueContent
          key={i}
          layoutType="inline"
          primaryMessage={{
            label : props.ingredients[i].key,
            color : "medium-roast"
          }}
          secondaryMessage={{
            label : props.ingredients[i].value,
            color : "text"
          }}
        />
      )
    }
    return ingredients;
  }

  return (
    <div className="ingredients-container">
      {getIngredients()}
    </div>
  )
}
