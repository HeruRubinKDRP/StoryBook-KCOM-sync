import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";
import {imageSequence} from "../../data/product-data";

import {ContentItem, iContentItem} from "../ContentComponents/ContentComponent";
import {GenericCardsContainer} from "../ContentComponents/GenericCardContainer/GenericCardContainer";
import {ProductCard} from "../ContentComponents/ProductCard/ProductCard";
import {createImages} from "../ImageSequencer/ImageSequencer";
import {iCarousel, Kcarousel} from "./Kcarousel";
import {getSlidesForStory, MultiItemSlide} from "./MultiItemSlide/MultiItemSlide"                    ;
import {getMultiItemsForStories, getProductCardsForStory} from "./MultiItemSlide/exampleMultiData";


const exampleSlides : iContentItem[] = [
  {
    component : "content",
    sectionName:"",
    hasFocalImage : false,
    sectionType: "content-left",
    mainMessage:"The SMART way to have the perfect cup",
    mainMessageSize:"Medium",
    mainMessageColor:"white",
    messageAlignment : "center",
    secondaryMessage:"This is a test, only a test. In the event of a real coffee emergency...",
    secondaryMessageSize:"Medium",
    backGroundType:"image",
    hasVideoPlayButton:false,
    backgroundUrlPath:"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    backgroundColor : "dark-roast",
    mainTextHasShadow : true,
    heightMethod: "stretch-to-parent",
    contrastBackground:"dark",
    hasCTA:true,
    ctaLabel:"Click here for a test",
    ctaLinkTo:"",
    customClasses : ""
  },
  {
    component : "content",
    sectionName : "",
    hasFocalImage : false,
    sectionType : "content-front-and-center",
    mainMessage : "The SMART way to have the perfect cup, at any time, anywhere",
    mainMessageColor : "white",
    mainMessageSize : "Medium",
    messageAlignment : "center",
    secondaryMessage : "",
    secondaryMessageSize : "Small",
    backGroundType : "movie",
    backgroundUrlPath : "/video/sample_coffee_general.mp4",
    backgroundColor : "dark-roast",
    mainTextHasShadow : true,
    heightMethod : "stretch-to-parent",
    contrastBackground : "dark",
    hasCTA : false,
    ctaLabel : "",
    ctaLinkTo : "",
    customClasses : ""
  },{
    component : "content",
    sectionName : "t3",
    hasFocalImage : false,
    sectionType : "content-front-and-center",
    mainMessage : "An example slide",
    mainMessageColor : "white",
    mainMessageSize : "Small",
    messageAlignment : "center",
    secondaryMessage : "This is an example showing different content components inside carousel, but any array of ReactElement[] will be rendered",
    secondaryMessageSize : "Small",
    backGroundType : "movie",
    backgroundUrlPath : "https://www.w3schools.com/howto/rain.mp4",
    backgroundColor : "dark-roast",
    mainTextHasShadow : true,
    heightMethod : "stretch-to-parent",
    contrastBackground : "dark",
    hasCTA : false,
    ctaLabel : "",
    ctaLinkTo : "",
    customClasses : ""
  }
]

export default {
  title : "Organisms/K-Carousel",
  component:Kcarousel,
  argTypes:{
    slidesToEdit : {control : "object", defaultValue: exampleSlides},
    slides : {hideNoControlsWarning: true},
    keepNavButtons : {control : "boolean"},
    navPosition : {control : "radio", options : ["top", "middle", "bottom"]},
    carouselType : {control : "radio", options : ["3D" , "slider"]},
    useLabelsInsteadOfDots : {control : "boolean"},
    navLabels :{control : "array"},
    itemsPerSlide : {control:"number"},
    contentArea : {
      useContentArea : {control : "boolean"}
    }

  }
} as Meta;

const Template: Story<iCarousel> = (args) => <Kcarousel {...args} />

export const ExampleCarousel = Template.bind({});

const getSlides=(slidesData : iContentItem[])=>{
  let slides : ReactElement[] = [];
  for(let i=0; i < slidesData.length; i++){
    slides.push(
      <ContentItem
        component={slidesData[i].component}
        sectionType={slidesData[i].sectionType}
        mainMessage={slidesData[i].mainMessage}
        mainMessageSize={slidesData[i].mainMessageSize}
        mainMessageColor={slidesData[i].mainMessageColor}
        sectionName={slidesData[i].sectionName}
        hasFocalImage={slidesData[i].hasFocalImage}
        backGroundType={slidesData[i].backGroundType}
        backgroundUrlPath={slidesData[i].backgroundUrlPath}
        backgroundColor={slidesData[i].backgroundColor}
        mainTextHasShadow={slidesData[i].mainTextHasShadow}
        heightMethod={slidesData[i].heightMethod}
        secondaryMessage={slidesData[i].secondaryMessage}
        secondaryMessageSize={slidesData[i].secondaryMessageSize}
        secondaryMessageWeight={slidesData[i].secondaryMessageWeight}
        contrastBackground={slidesData[i].contrastBackground}
        hasCTA={slidesData[i].hasCTA}
        ctaLabel={slidesData[i].ctaLabel}
        customClasses={slidesData[i].customClasses}
      />)
  }
  return slides;
}

ExampleCarousel.args={
  component: "carousel",
  carouselType : "slider",
  keepNavButtons : true,
  navPosition : "bottom",
  slides : getSlides(exampleSlides),
  navStyle : "dots",
  navLabels : ["First Section", "Second Section", "Third Section"]
}

const TemplateCards: Story<iCarousel> = (args) => <Kcarousel {...args} />


export const ProductCarousel = Template.bind({});

ProductCarousel.args={
  itemsPerSlide : 3,
  component: "carousel",
  carouselType : "slider",
  keepNavButtons : true,
  slides : getProductCardsForStory(3),
  navStyle : "dots",
  navLabels : ["First Section", "Second Section", "Third Section"]
}

export const ProductOneSlide = Template.bind({});

ProductOneSlide.args={
  itemsPerSlide : 3,
  component: "carousel",
  carouselType : "slider",
  keepNavButtons : true,
  slides : getProductCardsForStory(3),
  navStyle : "dots",
  navLabels : ["First Section", "Second Section", "Third Section"]
}

export const ImageThumbs: Story<iCarousel> = (args)=> <Kcarousel {...args} />

ImageThumbs.args={
  itemsPerSlide:1,
  component:"carousel",
  carouselType:"slider",
  keepNavButtons:true,
  navPosition : "bottom",
  slides:createImages(imageSequence),
  navStyle : "thumbnails"
}

export const LogosDemo: Story<iCarousel> = (args)=><Kcarousel {...args} />
LogosDemo.args={
  itemsPerSlide : 5,
  component:"carousel",
  carouselType : "slider",
  keepNavButtons : false,
  navPosition : "bottom",
  slides : [
    <div className="images-container" key={0}>
      <img alt="" className="image-item" src={"/logos/the-spoon.png"}/>
      <img alt="" className="image-item" src={"/logos/cnn.png"}/>
      <img alt="" className="image-item" src={"/logos/mens-health.png"}/>
      <img alt="" className="image-item" src={"/logos/apartment-therapy.png"}/>
      <img alt="" className="image-item" src={"/logos/usa-today.png"}/>
    </div>
  ]
}

export const CarouselContent: Story<iCarousel> = (args)=><Kcarousel {...args}/>

CarouselContent.args={
  component: "carousel",
  carouselType : "slider",
  keepNavButtons : true,
  navPosition: "top",
  slides : getSlides(exampleSlides),
  navStyle : "text",
  navLabels : ["Why you need it", "How it works", "96 Free Pods"],
  contentArea :{
    useContentArea : true,
    contentPosition : "left",
    contentElement : <ContentItem
      backGroundType="image"
      backgroundColor="sepia"
      backgroundUrlPath="/images/lifestyle/various-drinks.jpg"
      contrastBackground="none"
      sectionAppearance="inset-beveled"
      ctaLabel="Call to action"
      ctaLinkTo="www.google.com"
      hasCTA={false}
      heightMethod="stretch-to-parent"
      heightOverride={{
        minHeight : "60vh",
        maxHeight : "100vh",
        overallHeight : "100%"
      }}
      mainMessage=""
      mainMessageColor="#3B2B2F"
      mainMessageSize="Small"
      mainMessageWeight="heavy-weight"
      messageTextAlignment="text-left"
      secondaryMessage=""
      secondaryMessageWeight="regular-weight"
      secondaryMessageSize="Small"
      sectionType="content-front-and-center"
      component="content"
      hasFocalImage={false}
      mainTextHasShadow={false}
      sectionName=""
    />
  }
}

export const imagesCarousel = ()=>{
  return(
    <GenericCardsContainer>
      <div
        className="product-cards-container"
        style={{
          // display: 'flex',0
          justifyContent: 'center',
          padding: '3rem'
        }}
      >
        <ProductCard
          colorVariants={[
            {
              inStock: true,
              variantName: 'Black Stainless Steel'
            },
            {
              inStock: true,
              variantName: 'Stainless Steel'
            },
            {
              inStock: false,
              variantName: 'White'
            }
          ]}
          ctaColorOverride="#947259"
          hasCTA
          learnMoreLabel=""
          learnMoreLinkTo="#"
          priceFinal={0}
          priceOriginal={0}
          pricingMessage="Throw away the scale and measuring spoon."
          primaryCtaButtonType="primary"
          primaryCtaLabel="Your Match"
          primarySlogan="Expert Brews for Everyone"
          productColorValues={[]}
          productImagePath="/editorial/brew_style_1.png"
          productName=""
          secondarySlogan=""
          showPrice={false}
          showProductColors={false}
        />

        <ProductCard
          colorVariants={[
            {
              inStock: true,
              variantName: 'Black Stainless Steel'
            },
            {
              inStock: true,
              variantName: 'Stainless Steel'
            },
            {
              inStock: false,
              variantName: 'White'
            }
          ]}
          ctaColorOverride="#947259"
          hasCTA
          learnMoreLabel=""
          learnMoreLinkTo="#"
          priceFinal={0}
          priceOriginal={0}
          pricingMessage="Matches your kitchen, exceeds expectations."
          primaryCtaButtonType="primary"
          primaryCtaLabel="Your Match"
          primarySlogan="Rich Taste Meets Sophisticated Styling"
          productColorValues={[
            'black',
            'gray',
            'white'
          ]}
          productImagePath="/editorial/brew_style_2.png"
          productName=""
          secondarySlogan=""
          showPrice={false}
          showProductColors={false}
        />
        <ProductCard
          colorVariants={[]}
          ctaColorOverride="#947259"
          hasCTA
          learnMoreLabel=""
          learnMoreLinkTo="#"
          priceFinal={0}
          priceOriginal={0}
          pricingMessage="Under 5 ingredients, no special skills required."
          primaryCtaButtonType="primary"
          primaryCtaLabel="Your Match"
          primarySlogan="Café Drinks Made Easy"
          productColorValues={[
            'black',
            'gray',
            'white'
          ]}
          productImagePath="/editorial/brew_style_2.png"
          productName=""
          secondarySlogan=""
          showPrice={false}
          showProductColors={false}
        />
      </div>
    </GenericCardsContainer>
  )
}
