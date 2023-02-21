import React, {ReactElement} from "react";
import {HeaderArea, iHeaderArea} from "../HeaderArea/HeaderArea";
import {cardType, iMultiCardPresenter, MultiCardPresenter} from "./MultiCardContainer/MultiCardPresenter";
import {iMultikeyvalueArea, MultikeyValueArea} from "./MultiKeyValues/MultiKeyValueArea";
import {iProductCard} from "./ProductCard/ProductCard";
import {iSimpleHighlightCard} from "./SimpleHighlightCard/SimpleHighlightCard";

export type cardElementsT =  iHeaderArea | iSimpleHighlightCard | iMultiCardPresenter | iProductCard | iMultikeyvalueArea;
export type getElementType = {
  cardType : "header-area" | "simple-highlight-card" | "multi-card-presenter" | "product-card" | "multi-key-value-area",
  cardData : cardElementsT
}

export interface iGetElements{
  cards : getElementType[]
}


export const GetElement=(props : iGetElements)=>{

  const getHeaderArea=(cardData : iHeaderArea, index : number )=>{
    if(!cardData){return <></>}
    return (
      <HeaderArea
        key={index}
        headerAlignment={cardData.headerAlignment}
        headerLabel={cardData.headerLabel}
        headerStyle={cardData.headerStyle}
        hierarchyLevel={cardData.hierarchyLevel}
        colorScheme={cardData.colorScheme}
      />
    )
  }

  const getMultiCardPresenter =(cardData : iMultiCardPresenter, index : number )=>{
    return (
      <MultiCardPresenter
        key={index}
        cards={cardData.cards}
      />
    )
  }

  const getMultiKeyValueArea=(cardData : iMultikeyvalueArea, index : number )=>{
    return(
      <MultikeyValueArea
        key={index}
        layoutMode={cardData.layoutMode}
        items={cardData.items} />
    )
  }

  const getItems =()=>{
    let elements : ReactElement[]=[];

    for(let i=0; i<props.cards.length; i++){
      switch (props.cards[i].cardType){
        case "header-area":
          elements.push(getHeaderArea(props.cards[i].cardData as iHeaderArea, i));
          break;

        case "multi-card-presenter":
          elements.push(getMultiCardPresenter(props.cards[i].cardData as iMultiCardPresenter, i));
          break;

        case "multi-key-value-area":
          elements.push(getMultiKeyValueArea(props.cards[i].cardData as iMultikeyvalueArea, i));
          break;

      }
    }
    return elements
  }

  return(
    <>{getItems()}</>
  )
}
