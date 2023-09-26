"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[6055],{"./src/components/PricingCarousel/PricingItem/pricing-item.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExamplePricingItem:()=>ExamplePricingItem,default:()=>pricing_item_stories});var _ExamplePricingItem$p,_ExamplePricingItem$p2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),Flag=__webpack_require__("./src/components/Flag/Flag.tsx"),Price=__webpack_require__("./src/components/Price/Price.tsx"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement,PricingItem=function PricingItem(props){var _useResizeDetector=(0,index_esm.NB)({handleHeight:!1,refreshMode:"debounce",refreshRate:200,skipOnMount:!1}),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);return __jsx("div",{ref,className:"pricing-item-container ".concat(props.layout," ").concat(props.cardStyle," ").concat(function getContainerQuery(widthX){if(widthX)return widthX<600&&widthX>300?"medium-container":widthX<300?"small-container":void 0}(width)),style:{backgroundColor:(0,colorNameToValue.G)(props.backgroundColor)}},function getFlag(){if(props.hasFlag)return __jsx(Flag.W,{flagLabel:props.flagLabel?props.flagLabel:"",flagColor:props.flagColor?props.flagColor:"secondaryGold",font:{fontSize:"Medium"},flagStyle:props.flagStyle?props.flagStyle:"squared-curved"})}(),__jsx("div",{className:"product-image","aria-label":"product image",style:{backgroundColor:(0,colorNameToValue.G)(props.itemBackgroundColor),backgroundImage:'url("'.concat(props.productImagePath,'")')}},__jsx(next_image.Z,{src:props.productImagePath,alt:"product image",width:0,height:0,unoptimized:!0})),__jsx("div",{className:"product-info-container"},__jsx("h1",{className:"title"},props.cardTitle),function getDescription(){if(props.description)return __jsx("p",null,props.description)}(),__jsx(Price.t,{basePrice:props.basePrice,finalPrice:props.finalPrice,showStrikeThrough:!0,currency:"$"})))};PricingItem.displayName="PricingItem",PricingItem.__docgenInfo={description:"",methods:[],displayName:"PricingItem",props:{layout:{required:!0,tsType:{name:"union",raw:'"side-by-side" | "stacked"',elements:[{name:"literal",value:'"side-by-side"'},{name:"literal",value:'"stacked"'}]},description:""},cardStyle:{required:!0,tsType:{name:"union",raw:'"rounded" | "square"',elements:[{name:"literal",value:'"rounded"'},{name:"literal",value:'"square"'}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},productImagePath:{required:!0,tsType:{name:"string"},description:""},cardTitle:{required:!0,tsType:{name:"string"},description:""},priceSize:{required:!0,tsType:{name:"union",raw:'"medium" | "large"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},basePrice:{required:!0,tsType:{name:"number"},description:""},finalPrice:{required:!0,tsType:{name:"number"},description:""},discountPercentage:{required:!0,tsType:{name:"number"},description:""},hasFlag:{required:!0,tsType:{name:"boolean"},description:""},flagStyle:{required:!1,tsType:{name:"flagStylesT"},description:""},flagLabel:{required:!1,tsType:{name:"string"},description:""},flagColor:{required:!1,tsType:{name:"colorByNameType"},description:""},backgroundColor:{required:!0,tsType:{name:"colorByNameType"},description:""},itemBackgroundColor:{required:!0,tsType:{name:"colorByNameType"},description:""}}};try{PricingItem.displayName="PricingItem",PricingItem.__docgenInfo={description:"",displayName:"PricingItem",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"side-by-side"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},productImagePath:{defaultValue:null,description:"",name:"productImagePath",required:!0,type:{name:"string"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!0,type:{name:"string"}},priceSize:{defaultValue:null,description:"",name:"priceSize",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},basePrice:{defaultValue:null,description:"",name:"basePrice",required:!0,type:{name:"number"}},finalPrice:{defaultValue:null,description:"",name:"finalPrice",required:!0,type:{name:"number"}},discountPercentage:{defaultValue:null,description:"",name:"discountPercentage",required:!0,type:{name:"number"}},hasFlag:{defaultValue:null,description:"",name:"hasFlag",required:!0,type:{name:"boolean"}},flagStyle:{defaultValue:null,description:"",name:"flagStyle",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"circle-flag"'},{value:'"banner-simple"'},{value:'"banner-protrude"'},{value:'"squared-curved"'},{value:'"curved-rect"'},{value:'"alternating-sharp-round"'},{value:'"round-top"'}]}},flagLabel:{defaultValue:null,description:"",name:"flagLabel",required:!1,type:{name:"string"}},flagColor:{defaultValue:null,description:"",name:"flagColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"text"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"text"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},itemBackgroundColor:{defaultValue:null,description:"",name:"itemBackgroundColor",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"text"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PricingCarousel/PricingItem/PricingItem.tsx#PricingItem"]={docgenInfo:PricingItem.__docgenInfo,name:"PricingItem",path:"src/components/PricingCarousel/PricingItem/PricingItem.tsx#PricingItem"})}catch(__react_docgen_typescript_loader_error){}var pricing_item_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const pricing_item_stories={title:"Molecules/Pricing Item",component:PricingItem,argTypes:{description:{control:"text"}}};var Template=function Template(args){return pricing_item_stories_jsx(PricingItem,args)};Template.displayName="Template";var ExamplePricingItem=Template.bind({});ExamplePricingItem.args={cardStyle:"square",layout:"side-by-side",productImagePath:"https://s7d4.scene7.com/is/image/keurig/Desktop_Carousel%202%20-%20Brewer%20Intender%20-%20card4",description:"Enjoy creamy, velvety frothed milk with all of your favorite beverages",basePrice:79.99,finalPrice:39.99,discountPercentage:50,hasFlag:!0,flagLabel:"Coffee House Beverages",flagColor:"secondaryGold",flagStyle:"alternating-sharp-round",backgroundColor:"sepia",itemBackgroundColor:"dark-roast",cardTitle:"50% off Milk Frother with Brewer Purchase"},ExamplePricingItem.parameters=_objectSpread(_objectSpread({},ExamplePricingItem.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ExamplePricingItem$p=ExamplePricingItem.parameters)||void 0===_ExamplePricingItem$p?void 0:_ExamplePricingItem$p.docs),{},{source:_objectSpread({originalSource:"args => <PricingItem {...args} />"},null===(_ExamplePricingItem$p2=ExamplePricingItem.parameters)||void 0===_ExamplePricingItem$p2||null===(_ExamplePricingItem$p2=_ExamplePricingItem$p2.docs)||void 0===_ExamplePricingItem$p2?void 0:_ExamplePricingItem$p2.source)})})},"./src/components/Flag/Flag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Flag,h:()=>flagStyles});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),common_styled=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),FlagStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding: 0.5rem 1rem;\n  display: inline-flex;\n  width: auto;\n  position: relative;\n  ",";\n  label {\n    z-index: 1;\n  }\n  \n  &.round-top{\n    border-radius: 0.5rem 0.5rem 0 0;\n  }\n\n  &.dark-roast {\n    background-color: var(--colorDarkRoast);\n    label{\n      color: white;\n    }\n    .stroked {\n      stroke: white;\n      stroke-width: 0.5px;\n      fill: none;\n    }\n  }\n\n  .stroked {\n    stroke-width: 0.5px;\n    fill: none;\n  }\n\n  &.medium-grey{\n    background-color: var(--colorMediumGrey);\n    label{\n      color : white !important;\n    }\n    .filled{\n      fill: var(--colorSecondaryGold);\n    }\n\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.secondaryGold{\n    background-color: var(--colorSecondaryGold);\n    label{\n      color: var(--colorText) !important;\n    }\n    .filled{\n      fill: var(--colorSecondaryGold);\n    }\n    .stroked{\n      stroke: var(--colorText);\n    }\n  }\n\n  &.OK-Status{\n    background-color: var(--colorOKStatus);\n    label{\n      color:white;\n    }\n    .filled{\n      fill :var(--colorOKStatus);\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.Primary-CTA{\n    background-color: var(--colorCTAPrimary);\n    label{\n      color : var(--colorText) !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n    .filled{\n      fill : var(--colorCTAPrimary);\n    }\n  }\n\n  &.Bold-CTA{\n    background-color: var(--colorBoldCTA);\n    .filled{\n      fill : var(--colorBoldCTA);\n    }\n    label{\n      color : var(--colorText) !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.discount{\n    background-color: var(--colorDiscount);\n    .filled{\n      fill: var(--colorDiscount);\n    }\n    label{\n      color: white !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.sepia{\n    background-color: var(--colorSepia);\n    label{\n      color : var(--colorDarkRoast) !important;\n    }\n    .filled{\n      fill : var(--colorSepia);\n    }\n    .stroked{\n      stroke : var(--colorDarkRoast);\n    }\n  }\n\n  &.white{\n    background-color: white;\n    svg{\n      filter: drop-shadow(3px 3px 5px #00000073);\n    }\n    .filled{\n      fill : white;\n\n    }\n    .stroked{\n      stroke : var(--colorDarkRoast);\n    }\n    label{\n      color : var(--colorDarkRoast) !important;\n    }\n  }\n\n  &.medium-roast{\n    background-color: var(--colorMediumRoast);\n    label{\n      color : white;\n    }\n    .filled{\n      fill : var(--colorMediumRoast);\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.latte{\n    background-color: var(--colorLatte);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n    .stroked{\n      stroke: var(--colorDarkRoast);\n    }\n\n    .filled{\n      fill: var(--colorLatte);\n    }\n  }\n\n  &.light-roast {\n    background-color: var(--colorLightRoast);\n    .stroked{\n      stroke : white;\n    }\n    .filled{\n      fill: var(--colorLightRoast);\n    }\n  }\n  \n  &.latte70{\n    background-color: var(--colorLatte70);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n  \n  &.latteMed{\n    background-color: var(--colorLatteMed);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n  \n  &.sepia70{\n    background-color: var(--colorSepia70);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n\n  &.KSK {\n    background-color: var(--colorKSK);\n    color: white;\n\n    .stroked {\n      stroke: white;\n    }\n\n    .filled {\n      fill: var(--colorKSK);\n    }\n  }\n\n  .square {\n\n  }\n\n  &.circle-flag {\n    background-color: transparent !important;\n    padding: 0.5rem 0.25rem;\n  }\n\n  &.banner {\n\n  }\n\n  .adornment {\n    position: absolute;\n  }\n\n  .squared-curved {\n    display: inline-flex;\n    border-radius: 0.5rem 0 0 0;\n    inset: 0 0 0 0;\n  }\n\n  .tri-bot-l{\n    position: absolute;\n    bottom: -1rem;\n    top: 100%;\n    left: 0;\n    right: calc(100% - 1rem);\n    filter: brightness(0.65);\n  }\n\n  .simple-banner, .banner-protrude{\n    inset: 0 -2rem 0 100%;\n    .banner-tail{\n      height: 100%;\n    }\n  }\n\n  .circle-banner {\n    inset: -1rem;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n  }\n\n  &.alternating-sharp-round {\n    border-radius: 0.5rem 0 0.5rem 0;\n  }\n\n  &.curved-rect {\n    border-radius: 0.5rem\n  }\n\n  label {\n    &.heavy {\n      font-weight: 800;\n    }\n\n    &.regular {\n      font-weight: 400;\n    }\n\n    &.bold {\n      font-weight: 600;\n    }\n\n    &.light {\n      font-weight: lighter;\n    }\n\n  }\n"])),common_styled.oe);try{FlagStyled.displayName="FlagStyled",FlagStyled.__docgenInfo={description:"",displayName:"FlagStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flag/flag.styles.tsx#FlagStyled"]={docgenInfo:FlagStyled.__docgenInfo,name:"FlagStyled",path:"src/components/Flag/flag.styles.tsx#FlagStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,flagStyles=["square","circle-flag","banner-simple","banner-protrude","squared-curved","alternating-sharp-round","round-top"],Flag=function Flag(props){return __jsx(FlagStyled,{className:"flag-container ".concat(props.flagStyle," ").concat(props.flagColor," ")},function getFlag(){var adornment=__jsx(react.Fragment,null);switch(props.flagStyle){case"circle-flag":adornment=__jsx("div",{className:"circle-banner adornment"},__jsx(Graphic.Z,{graphicName:"circle-and-ring"}));break;case"banner-simple":adornment=__jsx("div",{className:"simple-banner adornment"},__jsx(Graphic.Z,{graphicName:"banner-tail"}));break;case"banner-protrude":adornment=__jsx(react.Fragment,null,__jsx("div",{className:"banner-protrude adornment"},__jsx(Graphic.Z,{graphicName:"banner-tail"})," "),__jsx(Graphic.Z,{graphicName:"tri-bot-l"}));break;case"squared-curved":adornment=__jsx("div",{className:"squared-curved adornment"})}return __jsx(react.Fragment,null,__jsx("label",{className:props.font.fontWeight,style:{color:props.flagTextColorOverride}},props.flagLabel,props.children),adornment)}())};Flag.displayName="Flag",Flag.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{flagLabel:{required:!0,tsType:{name:"string"},description:""},flagTextColorOverride:{required:!1,tsType:{name:"string"},description:""},flagColor:{required:!0,tsType:{name:"colorByNameType"},description:""},flagClasses:{required:!1,tsType:{name:"string"},description:""},font:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n  fontSize : sizeT;\r\n  fontWeight? : fontWeightT;\r\n}",signature:{properties:[{key:"fontSize",value:{name:"sizeT",required:!0}},{key:"fontWeight",value:{name:"fontWeightT",required:!1}}]}},description:""},flagStyle:{required:!0,tsType:{name:"union",raw:'"square" |\r\n"circle-flag" |\r\n"banner-simple" |\r\n"banner-protrude" |\r\n"squared-curved" |\r\n"curved-rect" |\r\n"alternating-sharp-round" |\r\n"round-top"',elements:[{name:"literal",value:'"square"'},{name:"literal",value:'"circle-flag"'},{name:"literal",value:'"banner-simple"'},{name:"literal",value:'"banner-protrude"'},{name:"literal",value:'"squared-curved"'},{name:"literal",value:'"curved-rect"'},{name:"literal",value:'"alternating-sharp-round"'},{name:"literal",value:'"round-top"'}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Flag.displayName="Flag",Flag.__docgenInfo={description:"",displayName:"Flag",props:{flagLabel:{defaultValue:null,description:"",name:"flagLabel",required:!0,type:{name:"string"}},flagTextColorOverride:{defaultValue:null,description:"",name:"flagTextColorOverride",required:!1,type:{name:"string"}},flagColor:{defaultValue:null,description:"",name:"flagColor",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"text"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},flagClasses:{defaultValue:null,description:"",name:"flagClasses",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!0,type:{name:"{ fontSize: sizeT; fontWeight?: fontWeightT | undefined; }"}},flagStyle:{defaultValue:null,description:"",name:"flagStyle",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"circle-flag"'},{value:'"banner-simple"'},{value:'"banner-protrude"'},{value:'"squared-curved"'},{value:'"curved-rect"'},{value:'"alternating-sharp-round"'},{value:'"round-top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flag/Flag.tsx#Flag"]={docgenInfo:Flag.__docgenInfo,name:"Flag",path:"src/components/Flag/Flag.tsx#Flag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Price/Price.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Price});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Price=function Price(props){return __jsx("div",{className:"price-container-main ".concat(props.classes)},__jsx("div",{className:"final-price ".concat(function discountStyle(){return props.showStrikeThrough?"discounted":""}())},__jsx("label",{style:{color:props.colorOverride},className:"currency"},props.currency),__jsx("label",{style:{color:props.colorOverride}},function finalDisplayPrice(){return props.calculateDiscountForMe&&props.discountPercentAsNumber?(props.basePrice*(1-props.discountPercentAsNumber/100)).toFixed(2).toString():null!=props.finalPrice?props.finalPrice:props.basePrice}())),function strikeThroughPrice(){return props.showStrikeThrough?props.discountPercentAsNumber||props.finalPrice?__jsx("div",{className:"base-price "},__jsx("div",{className:"currency"},props.currency),props.basePrice):void 0:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}())};Price.displayName="Price",Price.__docgenInfo={description:"",methods:[],displayName:"Price",props:{basePrice:{required:!0,tsType:{name:"number"},description:""},currency:{required:!0,tsType:{name:"currencyType"},description:""},discountPercentAsNumber:{required:!1,tsType:{name:"number"},description:""},calculateDiscountForMe:{required:!1,tsType:{name:"boolean"},description:""},finalPrice:{required:!1,tsType:{name:"number"},description:""},showStrikeThrough:{required:!1,tsType:{name:"boolean"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},colorOverride:{required:!1,tsType:{name:"string"},description:""}}};try{Price.displayName="Price",Price.__docgenInfo={description:"",displayName:"Price",props:{basePrice:{defaultValue:null,description:"",name:"basePrice",required:!0,type:{name:"number"}},currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:'"$"'}},discountPercentAsNumber:{defaultValue:null,description:"",name:"discountPercentAsNumber",required:!1,type:{name:"number"}},calculateDiscountForMe:{defaultValue:null,description:"",name:"calculateDiscountForMe",required:!1,type:{name:"boolean"}},finalPrice:{defaultValue:null,description:"",name:"finalPrice",required:!1,type:{name:"number"}},showStrikeThrough:{defaultValue:null,description:"",name:"showStrikeThrough",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},colorOverride:{defaultValue:null,description:"",name:"colorOverride",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Price/Price.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"src/components/Price/Price.tsx#Price"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_commonStyles/common.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IC:()=>AnimFadeIn,g7:()=>absolutePositionStretch,H3:()=>attentionCTA,oe:()=>ctaColorStyles,Pp:()=>flexCentered,xI:()=>flexRow,mZ:()=>perksColorStyles});var _templateObject,_templateObject2,_templateObject3,common_styled_templateObject,common_styled_templateObject2,common_styled_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),fadeInAnim=((0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]))),(0,styled_components_browser_esm.F4)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])))),flexItem=((0,styled_components_browser_esm.F4)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  0% {\n    background-position: 0 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n\n"]))),(0,styled_components_browser_esm.iv)(common_styled_templateObject||(common_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n"])))),ctaColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject2||(common_styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  --colorBoldCTA: ",";\n  --colorCTAPrimary: ",";  \n  --colorDarkRoast: ",";\n  --colorDiscount : ",";\n  --colorKSK : ",";\n  --colorLatte : ",";\n  --colorLightCTA: ",";\n  --colorLightRoast: ",";  \n  \n  --colorMediumGrey : ",";\n  --colorMediumRoast : ",";\n  --colorOKStatus : ",";\n  --colorSecondaryGold : ","; \n   \n  --colorSepia : ","; \n \n  --colorLatte70 : ",";\n  --colorLatteMed : ",";\n  --colorSepia70 : ",";\n  --colorText: ",";\n"])),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("discount"),(0,colorNameToValue.G)("KSK"),(0,colorNameToValue.G)("latte"),(0,colorNameToValue.G)("faintWarm"),(0,colorNameToValue.G)("light-roast"),(0,colorNameToValue.G)("medium-grey"),(0,colorNameToValue.G)("medium-roast"),(0,colorNameToValue.G)("OK-Status"),(0,colorNameToValue.G)("secondaryGold"),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("latte70"),(0,colorNameToValue.G)("latteMed"),(0,colorNameToValue.G)("sepia70"),(0,colorNameToValue.G)("text")),perksColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject3||(common_styled_templateObject3=(0,taggedTemplateLiteral.Z)(["\n--colorSpicedRed : ",";\n--colorLightBeige : ",";\n"])),(0,colorNameToValue.G)("perks-spiced-red"),(0,colorNameToValue.G)("perks-light-beige")),absolutePositionStretch=(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  inset: 0;\n"]))),flexRow=(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: row;\n"])),flexItem),flexCentered=((0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: column;\n"])),flexItem),(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  justify-content: center;\n  align-items: center;\n"])),flexItem)),attentionCTA=(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)([" \n  background: linear-gradient(-45deg,hsl(47 95% 80% / 1),hsl(47 95% 59% / 1),hsl(47 95% 80% / 1),hsl(47 95% 80% / 1));\n  background-size: 200% 265%;   \n"]))),AnimFadeIn=(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    animation: "," 1s ease-in-out forwards normal \n"])),fadeInAnim);(0,styled_components_browser_esm.F4)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)([" \n  0% {\n    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.56);\n  }\n  100% {\n    box-shadow: inset 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);\n  } \n"])))}}]);