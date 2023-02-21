import {fontWeightsList, sectionT} from "../components/ContentComponents/ContentComponent";
import {iconsList} from "../components/Graphic/iconData";
import {buttonTypesList} from "../data/product-data";

export const sectionType : sectionT[] =["content-front-and-center", "content-right", "content-left"]

export const contentArgs = {
  sectionType : {
    control : "radio",
    options:sectionType,
    defaultValue : sectionType[0]
  },
  sectionAppearance:{
    control : "radio",
    options : ["default", "inset-beveled"]
  },
  messageAsCallout :{
    control : "boolean",
    table : {category : "Message as Callout"}
  },
  calloutPosition :{
    control : "select",
    options : ["right-top" , "right-bottom" , "left-top" , "left-bottom"],
    table : {category : "Message as Callout"}
  },
  hasFocalImage : {
    control: "boolean",
    table : {category : "Focal Image"}
  },
  focalImagePath : {
    control : "text",
    table : {category : "Focal Image"}
  },
  focalImageSize : {
    description: 'demo description',
    control : "text",
    table : {category : "Focal Image"}
  },
  focalImageIcon : {
    control : "select",
    options: iconsList,
    table : {category : "Focal Image"}
  },
  focalImagePosition:{
    control : "select",
    options :["top", "middle", "bottom"],
    table : {category : "Focal Image"}
  },
  mainMessage : {
    control: "text",
    table : {category : "Main Message"}
  },
  mainMessageSize  : {
    control: "select",
    options:["Small", "Medium", "Large", "Tiny"],
    table : {category : "Main Message"}
  },
  messageTextAlignment:{
    control: "radio",
    options:["text-left", "text-center", "text-right"],
    table : {category : "Overall Message Area"}
  },
  mainMessageWeight : {
    control : "select",
    options: fontWeightsList,
    table : {category : "Main Message"}
  },
  secondaryMessageWeight : {
    control : "select",
    options: fontWeightsList,
    table : {category : "Secondary Message"}
  },
  mainMessageColor : {control : "color"},
  secondaryMessage : {
    control: "text",
    table : {category : "Main Message"}
  },
  secondaryMessageSize : {
    control: "select",
    table : {category : "Secondary Message"},
    options:["Small", "Medium", "Large", "Tiny"]
  },
  mainTextHasShadow : {
    control : "boolean",
    table : {category : "Primary Message"}
  },
  heightMethod : {
    control : "radio",
    options : ["one-viewport", "fit-content", "stretch-to-parent"],
    table : {category : "Overall"}
  },
  heightOverride:{
    control : "text",
    table : {category : "Overall"}
  },
  backGroundType: {
    control : "radio",
    options:["image", "movie", "solid-color"],
    table : {category : "BG Image or Video"}
  },
  backgroundUrlPath : {
    control : "text",
    table : {category : "BG Image or Video"}
  },
  backgroundColor: {
    control:"select",
    options:["none","latte", "dark-roast" , "light-roast" , "medium-roast" , "white" , "sepia" , "text" , "discount"],
    table : {category : "BG Image or Video"}
  },
  contrastBackground : {
    control : "radio",
    options:["dark", "light", "none"],
    table : {category : "BG Image or Video"}
  },
  hasCTA : {
    control : "boolean",
    table : {category : "CTA"}
  },
  ctaButtonType :{
    control : "select",
    options : buttonTypesList,
    table : {category : "CTA"}
  },
  ctaLabel : {
    control: "text",
    table : {category : "CTA"}
  },
  ctaLinkTo : {
    control : "text",
    table : {category : "CTA"}
  },
  ctaMode:{
    control : "select",
    options:["button" , "entire-tile" , "button-primary" , "button-secondary" , "button-no-bg-arrow"],
    table : {category : "CTA"}
  },
  hasTermsConditions:{
    control:"boolean",
    table:{category:"Terms & Conditions"}
  },
  termsAndConditionsMode:{
    control : "radio",
    options : ["pop-up-mode", "slide-down-mode"],
    table:{category:"Terms & Conditions"}
  },
  termsAndConditionsCTA : {
    control : "object",
    table:{category:"Terms & Conditions"}
  },
  termsAndConditionsFullText : {control : "object"},
  flag:{  control:"object"  }
}


