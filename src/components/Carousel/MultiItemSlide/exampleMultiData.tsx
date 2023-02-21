import React, {ReactElement} from "react";
import {ProductCard} from "../../ContentComponents/ProductCard/ProductCard";
import {MultiItemSlide} from "./MultiItemSlide";

export const getProductCardsForStory  = (numberOfSlides : number):ReactElement[]=>{
  let items :ReactElement[] = []

  for(let i=0; i < numberOfSlides; i++){
    items.push(
      <ProductCard
        showPrice={true}
        key={i}
        primarySlogan="When you build a Starter Kit"
        secondarySlogan="Fast & easy coffeehouse drinks, built-in milk frother"
        productImagePath="/images/silos/KSPS/ksps.png"
        productName="K-Supreme® SMART Plus"
        showProductColors={true}
        productColorValues= {["black"]}
        colorVariants={[
          {
            variantName: "Black Stainless Steel",
            inStock: true
          }
        ]}
      hasCTA={true}
      primaryCtaLabel="Build your kit"
      primaryCtaButtonType = "primary"
      hasLearMoreLink={true}
      learnMoreLabel="Learn More"
      learnMoreLinkTo="#"
      priceFinal={99.99}
      priceOriginal={199.99}
      showStrikeThrough={false}
      />
    );

  }
      return items;

}

export const getMultiItemsForStories =(numberOfCards : number, cardsPerSlide : number)=>{


  return <MultiItemSlide items={getProductCardsForStory(numberOfCards)} itemsPerSlide={cardsPerSlide}/>
}
