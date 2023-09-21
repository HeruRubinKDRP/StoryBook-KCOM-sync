import {StoryFn, Meta} from "@storybook/react";
import React from "react";

import {buttonTypesList} from "../../data/product-data";
import {contentArgs, sectionType} from "../../stories/stories-data";
import {iconsList} from "../Graphic/iconData";
import {ContentItem, fontWeightsList, fontWeightT, iContentItem, sectionT} from "./ContentComponent";



export default {
  title: "Organisms/Content Item",
  argTypes: contentArgs
}as Meta;

const Template: StoryFn<iContentItem> = (args) =><ContentItem {...args} />;

export const FrontAndCenter = Template.bind({});
FrontAndCenter.args = {
  backGroundType:"image",
  backgroundColor:"none",
  backgroundUrlPath:"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ctaLabel:"This is a CTA",
  ctaLinkTo:"&quot;&quot;",
  ctaMode:"button",
  hasCTA:true,
  heightMethod:"one-viewport",
  mainMessage:"Test",
  mainMessageColor:"white",
  mainTextHasShadow:true,
  mainMessageWeight: "regular-weight",
  messageTextAlignment:"text-center",
  secondaryMessage:"test test test",
  secondaryMessageWeight:"heavy-weight",
  sectionType:"content-front-and-center",
  hasTermsConditions:false
 }

export const CallOut = Template.bind({});
CallOut.args ={
  backgroundUrlPath:"",
  calloutPosition:"right-top",
  component:"content",
  ctaLinkTo:"#MilkFrother",
  focalImagePath:"/images/full-screen/multi-stream-isolated.jpg",
  focalImageSize:"90%",
  focalImagePosition : "bottom",
  hasFocalImage:true,
  mainMessage:"Multistream™ Technology",
  mainMessageColor:"#1a1010",
  messageAsCallout:true,
  messageTextAlignment:"text-left",
  secondaryMessage:"Multistream™ technology injects not just one stream but five streams of hot water into the K-Cup®, more evenly saturating it for a more robust coffee flavor.",
  sectionName:"milk-frother-intro"
}

export const FocalIconExample = Template.bind({});
FocalIconExample.args ={
  backGroundType:"solid-color",
  backgroundColor:"none",
  backgroundUrlPath:"",
  contrastBackground:"none",
  ctaLinkTo:"#MilkFrother",
  ctaMode:"entire-tile",
  focalImageIcon:"icon-coffee-foam",
  focalImagePath:"",
  focalImagePosition:"top",
  focalImageSize:"5rem",
  hasCTA : true,
  hasFocalImage : true,
  mainMessage:"Milk Frother",
  mainMessageColor:"#1a1010",
  mainMessageSize:"Small",
  mainMessageWeight:"heavy-weight",
  secondaryMessage:"Easy coffee house creations",
  secondaryMessageSize:"Medium",
  secondaryMessageWeight:"regular-weight",
  sectionType:"content-front-and-center"
}

export const FocalImageExample = Template.bind({});
FocalImageExample.args ={
  backGroundType:"solid-color",
  backgroundUrlPath:"",
  ctaLinkTo:"#MilkFrother",
  focalImageIcon:"none",
  focalImagePath:"/images/full-screen/multi-stream-isolated.jpg",
  focalImagePosition:"bottom",
  focalImageSize:"90%",
  fadesOut:false,
  heightMethod:"fit-content",
  mainMessage:"Multistream™ Technology",
  mainMessageColor:"#1a1010",
  secondaryMessage:"Multistream™ technology injects not just one stream but five streams of hot water into the K-Cup®, more evenly saturating it for a more robust coffee flavor.",
  sectionType:"content-front-and-center",
  backgroundColor:"white",
  component:"content",
  hasCTA:false,
  hasFocalImage:true,
  mainTextHasShadow:false,
  sectionName:"milk-frother-intro",
  contrastBackground:"none"
}


export const FrontCenterWithVideo = Template.bind({})

FrontCenterWithVideo.args = {
  sectionType : sectionType[0],
  hasFocalImage : false,
  mainMessage : "This is an example here with video",
  mainMessageSize : "Large",
  heightMethod : "one-viewport",
  messageTextAlignment : "text-center",
  secondaryMessage : "test test test",
  mainTextHasShadow : true,
  backGroundType : "movie",
  contrastBackground : "dark",
  mainMessageWeight: "regular-weight",
  hasCTA : true,
  ctaLabel : "Call to action",
  ctaLinkTo : "www.google.com",
  backgroundUrlPath : "/video/SMART-sampling.webm",
  hasTermsConditions : true,
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet lectus, ac congue arcu ultricies eget. Curabitur id nunc quis sapien dictum iaculis. Fusce non faucibus eros. Etiam efficitur velit sit amet rutrum iaculis. Vivamus nec odio commodo, vestibulum nisl nec, aliquet nibh. Fusce finibus id lorem at commodo. Maecenas a varius velit. Nunc nunc enim, tempus a ultrices at, imperdiet quis mauris. Nulla faucibus, nibh quis lobortis convallis, velit metus porttitor metus, sed suscipit arcu leo id sapien. Curabitur varius laoreet urna non tincidunt. Nullam neque ex, luctus et ex sed, interdum vulputate leo. Nunc mollis pellentesque augue, pharetra suscipit nisl. Suspendisse ac dolor arcu. Vestibulum efficitur felis enim, non molestie diam rhoncus vitae. Mauris viverra vehicula diam, ut scelerisque nulla sollicitudin ut. Etiam dictum blandit ipsum, quis ultricies odio egestas quis.  Aenean ut dolor nulla. Proin semper in nisi id viverra. Quisque sed massa tristique, gravida orci id, lacinia enim. Quisque vestibulum nisl in dui suscipit, quis lobortis ex finibus. Nullam euismod, erat id viverra faucibus, magna tortor venenatis neque, tincidunt pharetra enim tellus ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed libero massa, convallis ut diam vitae, laoreet cursus ante. Mauris eleifend tellus lectus, ultricies porttitor lectus posuere ut. Aliquam et accumsan massa."
  }
}

export const TwoSections = Template.bind({});

TwoSections.args={
  backGroundType:"movie",
  backgroundColor:"dark-roast",
  backgroundUrlPath:"/video/sample_coffee_general.mp4",
  contrastBackground:"dark",
  ctaLabel:"Call to action",
  ctaLinkTo:"www.google.com",
  hasCTA : true,
  heightMethod:"fit-content",
  mainMessage:"This is an example here with video",
  mainMessageColor : "white",
  mainMessageSize:"Medium",
  mainMessageWeight:"regular-weight",
  messageTextAlignment:"text-left",
  secondaryMessage:"test test test",
  secondaryMessageWeight:"regular-weight",
  sectionType:"content-right",
  hasTermsConditions : true,
  sectionAppearance : "inset-beveled",
  termsAndConditionsMode : "slide-down-mode",
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet."
  }
}

export const SolidColorBackGround = Template.bind({});
SolidColorBackGround.args ={
  backGroundType:"solid-color",
  backgroundColor:"medium-roast",
  backgroundUrlPath:"",
  ctaLabel:"Discover BrewID",
  ctaLinkTo:"",
  ctaMode:"button",
  heightMethod:"fit-content",
  mainMessage:"Discover BrewID™",
  mainMessageColor:"white",
  messageTextAlignment:"text-center",
  secondaryMessage:"",
  secondaryMessageWeight:"heavy-weight",
  sectionType:"content-front-and-center",
  component:"content",
  contrastBackground:"none",
  hasCTA:false,
  hasFocalImage:false,
  mainTextHasShadow:false,
  sectionName:"BrewID_Intro"
}

export const SolidColorDeal = Template.bind({});

SolidColorDeal.args={
  backGroundType:"solid-color",
  backgroundColor:"dark-roast",
  backgroundUrlPath:"",
  ctaLabel:"Build Your Kit",
  ctaLinkTo:"",
  ctaMode:"button",
  hasCTA:true,
  hasTermsConditions:true,
  heightMethod:"one-viewport",
  mainMessage:"Get your SMART Brewer for up to 55% off",
  mainMessageColor:"white",
  mainTextHasShadow:true,
  messageTextAlignment:"text-center",
  mainMessageSize:"Large",
  secondaryMessage:"Our Keurig® Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping.",
  secondaryMessageWeight:"heavy-weight",
  secondaryMessageSize:"Medium",
  sectionType:"content-front-and-center",
  component:"content",
  contrastBackground:"none",
  hasFocalImage:false,
  sectionName:"",
  flag:{
    useFlag : true,
    flagLabel :"Keurig.com Exclusive Pricing",
    flagStyle : "square",
    flagBackgroundColor : "medium-roast",
    flagTextColor : "white"
  },
  termsAndConditionsMode : "pop-up-mode",
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci."
  }
}

export const Testimonial =()=>{
  return (
    <ContentItem
      backGroundType="image"
      backgroundUrlPath="/images/lifestyle/making-drinks.jpg"
      calloutPosition="left-top"
      testimonial={{
        stars : 5,
        name : "Leah"
      }}
      ctaLabel="This is a CTA"
      ctaLinkTo="&quot;&quot;"
      heightOverride={{
        maxHeight : "100vh",
        minHeight : "80vh",
        overallHeight :"100%"
    }}
      mainMessage="“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” "
      mainMessageColor="#473036"
      messageAsCallout
      messageTextAlignment="text-left"
      secondaryMessage=""
      sectionType="content-front-and-center"
      backgroundColor="sepia"
      component="content"
      contrastBackground="none"
      hasCTA={false}
      hasFocalImage={false}
      heightMethod="fit-content"
      mainTextHasShadow={false}
      sectionName=""/>
  )
}

export const TestimonialCTA =()=>{
  return (
    <ContentItem
      backGroundType="image"
      backgroundUrlPath="/images/lifestyle/making-drinks.jpg"
      calloutPosition="left-top"
      ctaLabel="This is a CTA"
      ctaLinkTo="&quot;&quot;"
      heightOverride={{
        maxHeight : "100vh",
        minHeight : "80vh",
        overallHeight :"100%"
      }}
      mainMessage="“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” — Leah R ⭑ ⭑ ⭑ ⭑ ⭑"
      mainMessageColor="#473036"
      messageAsCallout
      messageTextAlignment="text-left"
      secondaryMessage=""
      sectionType="content-front-and-center"
      backgroundColor="sepia"
      component="content"
      contrastBackground="none"
      hasCTA={true}
      hasFocalImage={false}
      heightMethod="fit-content"
      mainTextHasShadow={false}
      sectionName=""/>
  )
}

export const TwoUpWithVideoOrImage =()=>{
  return(
    <ContentItem
      backGroundType="movie"
      backgroundColor="latte"
      backgroundUrlPath="/video/sample_coffee_general.mp4"
      contrastBackground="dark"
      sectionAppearance="inset-beveled"
      ctaLabel="Call to action"
      ctaLinkTo="www.google.com"
      hasCTA={false}
      heightMethod="fit-content"
      mainMessage="Expert results without having to be an expert"
      mainMessageColor="#3B2B2F"
      mainMessageSize="Small"
      mainMessageWeight="heavy-weight"
      messageTextAlignment="text-left"
      secondaryMessage="BrewID™ recognizes your K-Cup® pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. "
      secondaryMessageWeight="regular-weight"
      secondaryMessageSize="Small"
      sectionType="content-right"
      component="content"
      hasFocalImage={false}
      mainTextHasShadow={false}
      sectionName=""
    />
  )
}


export const ConnectedConvenienceExample =()=>{
  return (
    <ContentItem
      backgroundColor="white"
      backgroundUrlPath="/product-images/kcs/connected-convenience.jpg"
      contrastBackground="light"
      ctaLabel="Get the Keurig® App"
      ctaLinkTo=""
      hasCTA={true}
      ctaButtonType="primary"
      customClasses="mobile-only-cta"

      heightMethod="fit-content"
      mainMessage="“Alexa, tell Keurig® to brew me a single shot.”"
      mainMessageSize={"Large"}
      mainMessageColor="#473036"
      mainMessageWeight="heavy-weight"
      mainTextHasShadow

      messageAlignment="left"
      secondaryMessageSize="Medium"
      secondaryMessage="Connect your SMART brewer to Wi-Fi® and brew from anywhere — even bed — with a simple Alexa or Google Home voice routine"
      sectionType="content-left"
      backGroundType={"image"}
      component="content"
      sectionName="connected_con"
      hasFocalImage={true}
      focalImageIcon="none"
      focalImagePath="/images/app-stores.png"
      focalImagePosition="bottom"
      focalImageSize="auto"
    />
  )
}

export const PerfectlyFrothedExample =()=>{
  return(
    <ContentItem
      customClasses="max-height "
      backGroundType="movie"
      backgroundUrlPath="/video/frother-pour.mp4"
      contrastBackground="none"
      ctaLabel="Call to action"
      ctaLinkTo="www.google.com"
      heightMethod="fit-content"
      mainMessage="Perfectly frothed milk"
      mainMessageSize="Large"
      mainMessageColor={"#473036"}
      secondaryMessageSize="Medium"
      secondaryMessage="Create creamy lattes, frothy cappuccinos and so much more using milk or your favorite dairy substitute and K-Café®’s built-in milk frother"
      sectionType="content-front-and-center"
      backgroundColor="none"
      component="content"
      hasCTA={false}
      hasFocalImage={false}
      mainTextHasShadow={false}
      sectionName={"milk-frother-intro"}
    />
  )
}


export const SMARTfamExample=()=>{
  return(
    <ContentItem
      backGroundType="image"
      backgroundColor="medium-roast"
      backgroundUrlPath="/images/SMART-fam.png"
      component="content"
      contrastBackground="none"
      ctaButtonType="primary"
      ctaLabel="Learn More"
      ctaLinkTo=""
      ctaMode="button"
      hasCTA
      heightMethod="fit-content"
      mainMessage="Meet the Whole SMART Family"
      mainMessageColor="#473036"
      mainMessageSize="Large"
      messageTextAlignment="text-center"
      secondaryMessage=""
      secondaryMessageWeight="heavy-weight"
      sectionName="BrewID_Intro"
      sectionType="content-front-and-center"
      hasFocalImage={false}
      mainTextHasShadow={false}
      customClasses="message-upper"
    />
  )
}


export const kcsKitExample =()=>{
  return (
    <ContentItem
      customClasses="duo-tiled"
      backGroundType="image"
      backgroundColor="none"
      backgroundTileImagePath="/images/kcs-kit-bg.webp"
      backgroundTilingMethod="tile"
      backgroundUrlPath="/images/kcs-kit.webp"
      contrastBackground="dark"
      ctaLabel="Call to action"
      ctaLinkTo="www.google.com"
      ctaButtonType="primary"
      hasCTA
      hasTermsConditions
      heightMethod="fit-content"
      mainMessage="Get Your K-Cafe® SMART for 50% Off"
      mainMessageColor="#473036"
      mainMessageSize="Medium"
      mainMessageWeight="heavy-weight"
      messageTextAlignment="text-left"
      secondaryMessage="Includes SMART Deliver with up to 96 FREE Pods, 25% Off Beverages & Free Shipping"
      secondaryMessageWeight="heavy-weight"
      secondaryMessageSize="Small"
      sectionAppearance="default"
      sectionType="content-right"
      termsAndConditionsCTA={{
        termsAndConditionsCtaLabel: 'See Details',
        termsAndConditionsLabelDetail: 'Restrictions apply'
      }}
      termsAndConditionsFullText={{
        header: 'Lorem ipsum tolem set',
        termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet.'
      }}
      termsAndConditionsMode="slide-down-mode"
      component="content"
      hasFocalImage={false}
     mainTextHasShadow={false}
      sectionName="kcsKit"/>
  )
}

export const kspsKitExample =()=>{
  return (
    <ContentItem
      customClasses="duo-tiled"
      backGroundType="image"
      backgroundColor="none"
      backgroundTileImagePath="/PDP/light-marble-bg.jpg"
      backgroundTilingMethod="tile"
      backgroundUrlPath="/PDP/ksps_offer_hero.png"
      contrastBackground="dark"
      ctaLabel="Call to action"
      ctaLinkTo="www.google.com"
      ctaButtonType="primary"
      hasCTA
      hasTermsConditions
      heightMethod="fit-content"
      mainMessage="Get Your K-Supreme Plus® SMART for 50% Off"
      mainMessageColor="#473036"
      mainMessageSize="Medium"
      mainMessageWeight="heavy-weight"
      messageTextAlignment="text-left"
      secondaryMessage="Includes SMART Deliver with up to 96 FREE Pods, 25% Off Beverages & Free Shipping"
      secondaryMessageWeight="heavy-weight"
      secondaryMessageSize="Small"
      sectionAppearance="default"
      sectionType="content-right"
      termsAndConditionsCTA={{
        termsAndConditionsCtaLabel: 'See Details',
        termsAndConditionsLabelDetail: 'Restrictions apply'
      }}
      termsAndConditionsFullText={{
        header: 'Lorem ipsum tolem set',
        termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet.'
      }}
      termsAndConditionsMode="slide-down-mode"
      component="content"
      hasFocalImage={false}
      mainTextHasShadow={false}
      sectionName="kcsKit"/>
  )
}

export const kssKitExample =()=>{
  return (
    <ContentItem
      customClasses="duo-tiled"
      backGroundType="image"
      backgroundColor="none"
      backgroundTileImagePath="/PDP/light-marble-bg.jpg"
      backgroundTilingMethod="tile"
      backgroundUrlPath="/PDP/kss_offer_hero.png"
      contrastBackground="dark"
      ctaLabel="Call to action"
      ctaLinkTo="www.google.com"
      ctaButtonType="primary"
      hasCTA
      hasTermsConditions
      heightMethod="fit-content"
      mainMessage="Get Your K-Supreme® SMART for 50% Off"
      mainMessageColor="#473036"
      mainMessageSize="Medium"
      mainMessageWeight="heavy-weight"
      messageTextAlignment="text-left"
      secondaryMessage="Includes SMART Deliver with up to 96 FREE Pods, 25% Off Beverages & Free Shipping"
      secondaryMessageWeight="heavy-weight"
      secondaryMessageSize="Small"
      sectionAppearance="default"
      sectionType="content-right"
      termsAndConditionsCTA={{
        termsAndConditionsCtaLabel: 'See Details',
        termsAndConditionsLabelDetail: 'Restrictions apply'
      }}
      termsAndConditionsFullText={{
        header: 'Lorem ipsum tolem set',
        termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet.'
      }}
      termsAndConditionsMode="slide-down-mode"
      component="content"
      hasFocalImage={false}
      mainTextHasShadow={false}
      sectionName="kcsKit"/>
  )
}
