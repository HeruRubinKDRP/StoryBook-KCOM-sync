import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";
import {iProductCard, ProductCard} from "../ProductCard/ProductCard";
import {iSimpleHighlightCard, SimpleHighlightCard} from "../SimpleHighlightCard/SimpleHighlightCard";
import {MultiCardPresenterStyled} from "./MultiCard-presenter.styled";

export interface iMultiCardPresenter{
  cards : cardType[];
  customClasses? : string;
}

export type cardType = {
  cardType : "simple" | "product";
  simpleCardData?: iSimpleHighlightCard;
  productCardData? : iProductCard;

}

export const MultiCardPresenter =(props:iMultiCardPresenter)=>{
  const { width, height, ref } = useResizeDetector();

  const productCard = (cardProps : iProductCard | undefined)=>{
    if(!cardProps){return <></>}
    return <ProductCard
      primarySlogan={cardProps.primarySlogan}
      secondaryLabel={cardProps.secondaryLabel}
      productImagePath={cardProps.productImagePath}
      productName={cardProps.productName}

      showProductColors={cardProps.showProductColors}
      productColorValues={cardProps.productColorValues}
      colorVariants={cardProps.colorVariants}
      hasCTA={cardProps.hasCTA}
      primaryCtaLabel={cardProps.primaryCtaLabel}

      showPrice={cardProps.showPrice}
      priceOriginal={cardProps.priceOriginal}
      priceFinal={cardProps.priceFinal}
      pricingMessage={cardProps.pricingMessage}

      addToCartFunction={cardProps.addToCartFunction}
      notifyMeFunction={cardProps.notifyMeFunction}

      secondaryAction={cardProps.secondaryAction}
      featuresList={cardProps.featuresList}
    />
  }

  const getSimpleHighlightCard=(cardProps : iSimpleHighlightCard | undefined)=>{
    if(!cardProps){return <></>}
    return <SimpleHighlightCard
      title={cardProps.title}
      titlePosition={cardProps.titlePosition}
      alignment={cardProps.alignment}
      mainFocalImage={cardProps.mainFocalImage}
      mainCTA={cardProps.mainCTA}
      secondaryCTA={cardProps.secondaryCTA}
       mainImageSize={cardProps.mainImageSize}/>
  }

  const getCards=()=>{
    let cards : ReactElement[] = [];
    for(let i=0; i < props.cards.length; i++){
      switch (props.cards[i].cardType){
        case "product":
          if(!props.cards[i].productCardData){return}else{
            cards.push( productCard(props.cards[i].productCardData))
          }
          break;
        case "simple":
          if(!props.cards[i].simpleCardData){return}else{
            cards.push(getSimpleHighlightCard(props.cards[i].simpleCardData))
          }
      }
      }
    return cards;
    }

    const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "mobile-defaulted"}
    if(widthX < 500){
      return "mobile";
    }else {
      return "desktop";
    }
    }

    return(
      <MultiCardPresenterStyled ref={ref} className={`multi-card-container ${props.customClasses} ${getContainerQuery(width)}`}>
        {getCards()}
      </MultiCardPresenterStyled>
    )
}
