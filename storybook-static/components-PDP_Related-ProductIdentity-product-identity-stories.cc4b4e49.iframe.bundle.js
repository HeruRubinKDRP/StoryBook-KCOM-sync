/*! For license information please see components-PDP_Related-ProductIdentity-product-identity-stories.cc4b4e49.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksb7=self.webpackChunksb7||[]).push([[9913],{"./src/components/PDP_Related/ProductIdentity/product-identity.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProductIdentityBasicView:()=>ProductIdentityBasicView,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ProductIdentityBasic,_ProductIdentityBasic2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ProductIdentityArea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/PDP_Related/ProductIdentity/ProductIdentityArea.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/CardBack Identity",argTypes:{}};var Template=function Template(args){return __jsx("div",{className:"demo-box"},__jsx(_ProductIdentityArea__WEBPACK_IMPORTED_MODULE_2__.Z,args))};Template.displayName="Template";var ProductIdentityBasicView=Template.bind({});ProductIdentityBasicView.args={productName:"K-Café® SMART",productNameExtended:"K-Café® SMART Single-Serve Coffee, Cappuccino and Latte Maker",tagline:"With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations",rating:{totalNumberOfStars:5,ratingNumber:4.2,totalNumberOfReviews:1431,scrollToTargetID:"Ratings"}},ProductIdentityBasicView.parameters=_objectSpread(_objectSpread({},ProductIdentityBasicView.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ProductIdentityBasic=ProductIdentityBasicView.parameters)||void 0===_ProductIdentityBasic?void 0:_ProductIdentityBasic.docs),{},{source:_objectSpread({originalSource:'args => <div className="demo-box"><ProductIdentity {...args} /></div>'},null===(_ProductIdentityBasic2=ProductIdentityBasicView.parameters)||void 0===_ProductIdentityBasic2||null===(_ProductIdentityBasic2=_ProductIdentityBasic2.docs)||void 0===_ProductIdentityBasic2?void 0:_ProductIdentityBasic2.source)})})},"./src/components/Flag/Flag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>Flag,h:()=>flagStyles});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),common_styled=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),FlagStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding: 0.5rem 1rem;\n  display: inline-flex;\n  width: auto;\n  position: relative;\n  ",";\n  label {\n    z-index: 1;\n  }\n  \n  &.round-top{\n    border-radius: 0.5rem 0.5rem 0 0;\n  }\n\n  &.dark-roast {\n    background-color: var(--colorDarkRoast);\n    label{\n      color: white;\n    }\n    .stroked {\n      stroke: white;\n      stroke-width: 0.5px;\n      fill: none;\n    }\n  }\n\n  .stroked {\n    stroke-width: 0.5px;\n    fill: none;\n  }\n\n  &.medium-grey{\n    background-color: var(--colorMediumGrey);\n    label{\n      color : white !important;\n    }\n    .filled{\n      fill: var(--colorSecondaryGold);\n    }\n\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.secondaryGold{\n    background-color: var(--colorSecondaryGold);\n    label{\n      color: var(--colorText) !important;\n    }\n    .filled{\n      fill: var(--colorSecondaryGold);\n    }\n    .stroked{\n      stroke: var(--colorText);\n    }\n  }\n\n  &.OK-Status{\n    background-color: var(--colorOKStatus);\n    label{\n      color:white;\n    }\n    .filled{\n      fill :var(--colorOKStatus);\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.Primary-CTA{\n    background-color: var(--colorCTAPrimary);\n    label{\n      color : var(--colorText) !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n    .filled{\n      fill : var(--colorCTAPrimary);\n    }\n  }\n\n  &.Bold-CTA{\n    background-color: var(--colorBoldCTA);\n    .filled{\n      fill : var(--colorBoldCTA);\n    }\n    label{\n      color : var(--colorText) !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.discount{\n    background-color: var(--colorDiscount);\n    .filled{\n      fill: var(--colorDiscount);\n    }\n    label{\n      color: white !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.sepia{\n    background-color: var(--colorSepia);\n    label{\n      color : var(--colorDarkRoast) !important;\n    }\n    .filled{\n      fill : var(--colorSepia);\n    }\n    .stroked{\n      stroke : var(--colorDarkRoast);\n    }\n  }\n\n  &.white{\n    background-color: white;\n    svg{\n      filter: drop-shadow(3px 3px 5px #00000073);\n    }\n    .filled{\n      fill : white;\n\n    }\n    .stroked{\n      stroke : var(--colorDarkRoast);\n    }\n    label{\n      color : var(--colorDarkRoast) !important;\n    }\n  }\n\n  &.medium-roast{\n    background-color: var(--colorMediumRoast);\n    label{\n      color : white;\n    }\n    .filled{\n      fill : var(--colorMediumRoast);\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.latte{\n    background-color: var(--colorLatte);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n    .stroked{\n      stroke: var(--colorDarkRoast);\n    }\n\n    .filled{\n      fill: var(--colorLatte);\n    }\n  }\n\n  &.light-roast {\n    background-color: var(--colorLightRoast);\n    .stroked{\n      stroke : white;\n    }\n    .filled{\n      fill: var(--colorLightRoast);\n    }\n  }\n  \n  &.latte70{\n    background-color: var(--colorLatte70);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n  \n  &.latteMed{\n    background-color: var(--colorLatteMed);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n  \n  &.sepia70{\n    background-color: var(--colorSepia70);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n\n  &.KSK {\n    background-color: var(--colorKSK);\n    color: white;\n\n    .stroked {\n      stroke: white;\n    }\n\n    .filled {\n      fill: var(--colorKSK);\n    }\n  }\n\n  .square {\n\n  }\n\n  &.circle-flag {\n    background-color: transparent !important;\n    padding: 0.5rem 0.25rem;\n  }\n\n  &.banner {\n\n  }\n\n  .adornment {\n    position: absolute;\n  }\n\n  .squared-curved {\n    display: inline-flex;\n    border-radius: 0.5rem 0 0 0;\n    inset: 0 0 0 0;\n  }\n\n  .tri-bot-l{\n    position: absolute;\n    bottom: -1rem;\n    top: 100%;\n    left: 0;\n    right: calc(100% - 1rem);\n    filter: brightness(0.65);\n  }\n\n  .simple-banner, .banner-protrude{\n    inset: 0 -2rem 0 100%;\n    .banner-tail{\n      height: 100%;\n    }\n  }\n\n  .circle-banner {\n    inset: -1rem;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n  }\n\n  &.alternating-sharp-round {\n    border-radius: 0.5rem 0 0.5rem 0;\n  }\n\n  &.curved-rect {\n    border-radius: 0.5rem\n  }\n\n  label {\n    &.heavy {\n      font-weight: 800;\n    }\n\n    &.regular {\n      font-weight: 400;\n    }\n\n    &.bold {\n      font-weight: 600;\n    }\n\n    &.light {\n      font-weight: lighter;\n    }\n\n  }\n"])),common_styled.oe);try{FlagStyled.displayName="FlagStyled",FlagStyled.__docgenInfo={description:"",displayName:"FlagStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flag/flag.styles.tsx#FlagStyled"]={docgenInfo:FlagStyled.__docgenInfo,name:"FlagStyled",path:"src/components/Flag/flag.styles.tsx#FlagStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,flagStyles=["square","circle-flag","banner-simple","banner-protrude","squared-curved","alternating-sharp-round","round-top"],Flag=function Flag(props){return __jsx(FlagStyled,{className:"flag-container ".concat(props.flagStyle," ").concat(props.flagColor," ")},function getFlag(){var adornment=__jsx(react.Fragment,null);switch(props.flagStyle){case"circle-flag":adornment=__jsx("div",{className:"circle-banner adornment"},__jsx(Graphic.Z,{graphicName:"circle-and-ring"}));break;case"banner-simple":adornment=__jsx("div",{className:"simple-banner adornment"},__jsx(Graphic.Z,{graphicName:"banner-tail"}));break;case"banner-protrude":adornment=__jsx(react.Fragment,null,__jsx("div",{className:"banner-protrude adornment"},__jsx(Graphic.Z,{graphicName:"banner-tail"})," "),__jsx(Graphic.Z,{graphicName:"tri-bot-l"}));break;case"squared-curved":adornment=__jsx("div",{className:"squared-curved adornment"})}return __jsx(react.Fragment,null,__jsx("label",{className:props.font.fontWeight,style:{color:props.flagTextColorOverride}},props.flagLabel,props.children),adornment)}())};Flag.displayName="Flag",Flag.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{flagLabel:{required:!0,tsType:{name:"string"},description:""},flagTextColorOverride:{required:!1,tsType:{name:"string"},description:""},flagColor:{required:!0,tsType:{name:"colorByNameType"},description:""},flagClasses:{required:!1,tsType:{name:"string"},description:""},font:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  fontSize : sizeT;\n  fontWeight? : fontWeightT;\n}",signature:{properties:[{key:"fontSize",value:{name:"sizeT",required:!0}},{key:"fontWeight",value:{name:"fontWeightT",required:!1}}]}},description:""},flagStyle:{required:!0,tsType:{name:"union",raw:'"square" |\n"circle-flag" |\n"banner-simple" |\n"banner-protrude" |\n"squared-curved" |\n"curved-rect" |\n"alternating-sharp-round" |\n"round-top"',elements:[{name:"literal",value:'"square"'},{name:"literal",value:'"circle-flag"'},{name:"literal",value:'"banner-simple"'},{name:"literal",value:'"banner-protrude"'},{name:"literal",value:'"squared-curved"'},{name:"literal",value:'"curved-rect"'},{name:"literal",value:'"alternating-sharp-round"'},{name:"literal",value:'"round-top"'}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Flag.displayName="Flag",Flag.__docgenInfo={description:"",displayName:"Flag",props:{flagLabel:{defaultValue:null,description:"",name:"flagLabel",required:!0,type:{name:"string"}},flagTextColorOverride:{defaultValue:null,description:"",name:"flagTextColorOverride",required:!1,type:{name:"string"}},flagColor:{defaultValue:null,description:"",name:"flagColor",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},flagClasses:{defaultValue:null,description:"",name:"flagClasses",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!0,type:{name:"{ fontSize: sizeT; fontWeight?: fontWeightT | undefined; }"}},flagStyle:{defaultValue:null,description:"",name:"flagStyle",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"circle-flag"'},{value:'"banner-simple"'},{value:'"banner-protrude"'},{value:'"squared-curved"'},{value:'"curved-rect"'},{value:'"alternating-sharp-round"'},{value:'"round-top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flag/Flag.tsx#Flag"]={docgenInfo:Flag.__docgenInfo,name:"Flag",path:"src/components/Flag/Flag.tsx#Flag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PDP_Related/ProductIdentity/ProductIdentityArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ProductIdentity});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_resize_detector__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),_Flag_Flag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Flag/Flag.tsx"),_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Rating/Rating.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ProductIdentity=function ProductIdentity(props){var _props$flag,_useResizeDetector=(0,react_resize_detector__WEBPACK_IMPORTED_MODULE_3__.NB)({handleHeight:!1,refreshMode:"debounce",refreshRate:100,skipOnMount:!1}),ref=(_useResizeDetector.width,_useResizeDetector.height,_useResizeDetector.ref);return __jsx("section",{ref,className:"product-identity-container "},__jsx("div",{className:"name-area"},__jsx("div",{className:"flag-ratings-area"},__jsx(_Flag_Flag__WEBPACK_IMPORTED_MODULE_1__.W,{flagLabel:props.flag.flagLabel?props.flag.flagLabel:"",flagColor:(null===(_props$flag=props.flag)||void 0===_props$flag?void 0:_props$flag.flagColorClass)||"Bold-CTA",font:{fontWeight:"heavy-weight",fontSize:"Small"},flagStyle:"alternating-sharp-round"}),__jsx("label",{className:"brand-label"},props.productName),function getRating(){if(props.rating)return __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__.i,{ratingNumber:props.rating.ratingNumber,scrollToTargetID:props.rating.scrollToTargetID,totalNumberOfReviews:props.rating.totalNumberOfReviews,totalNumberOfStars:props.rating.totalNumberOfStars,ratingHeight:props.ratingHeight})}()),__jsx("h1",null,props.productNameExtended),__jsx("p",null,props.tagline)))};ProductIdentity.displayName="ProductIdentity",ProductIdentity.__docgenInfo={description:"",methods:[],displayName:"ProductIdentity",props:{productName:{required:!0,tsType:{name:"string"},description:""},productNameExtended:{required:!0,tsType:{name:"string"},description:""},tagline:{required:!1,tsType:{name:"string"},description:""},rating:{required:!1,tsType:{name:"iRating"},description:""},ratingHeight:{required:!1,tsType:{name:"number"},description:""},flag:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  flagLabel : string;\n  flagStyle : flagStylesT;\n  flagColorOverride? : string;\n  flagColorClass? : colorByNameType;\n}",signature:{properties:[{key:"flagLabel",value:{name:"string",required:!0}},{key:"flagStyle",value:{name:"flagStylesT",required:!0}},{key:"flagColorOverride",value:{name:"string",required:!1}},{key:"flagColorClass",value:{name:"colorByNameType",required:!1}}]}},description:""}}};try{ProductIdentity.displayName="ProductIdentity",ProductIdentity.__docgenInfo={description:"",displayName:"ProductIdentity",props:{productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},productNameExtended:{defaultValue:null,description:"",name:"productNameExtended",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"iRating"}},ratingHeight:{defaultValue:null,description:"",name:"ratingHeight",required:!1,type:{name:"number"}},flag:{defaultValue:null,description:"",name:"flag",required:!0,type:{name:"{ flagLabel: string; flagStyle: flagStylesT; flagColorOverride?: string | undefined; flagColorClass?: colorByNameType | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PDP_Related/ProductIdentity/ProductIdentityArea.tsx#ProductIdentity"]={docgenInfo:ProductIdentity.__docgenInfo,name:"ProductIdentity",path:"src/components/PDP_Related/ProductIdentity/ProductIdentityArea.tsx#ProductIdentity"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Rating/Rating.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Rating});var _templateObject,ScrollToPlugin=__webpack_require__("./node_modules/gsap/dist/ScrollToPlugin.js"),ScrollToPlugin_default=__webpack_require__.n(ScrollToPlugin),gsap=__webpack_require__("./node_modules/gsap/dist/gsap.js"),gsap_default=__webpack_require__.n(gsap),react=__webpack_require__("./node_modules/react/index.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledRating=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --containerHeightBase: ",";\n  --containerHeight: calc(var(--containerHeightBase) * 0.8);\n  --medGray: ",";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-y: visible;\n  &.horizontal{\n    flex-direction: row;\n    .stars-container{\n      width: auto !important;\n    }\n  }\n  &.vertical{\n    flex-direction: column;\n  }\n  \n  .stars-container{\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 40%;\n    height: 100%;\n  }\n\n   .rating-info{\n     font-size: calc(var(--containerHeight) * 0.8);\n     white-space: nowrap;\n     span{\n       padding: 0 8%;\n     }\n   }\n\n  .ratings-data{\n    margin-left: 0.5rem;\n    margin-top: 2px;\n  }\n  \n  .star-bg{\n    fill: var(--medGray);\n  } \n\n  .rating-container{\n    display: flex;\n    .star-base{\n      .filled{\n        fill : var(--medGray);\n      }\n      .dark-bg{\n        fill: var(--medGray);\n      }\n    }\n  }\n  .rating-container{\n    width: auto;\n    position: relative;\n    .ratings-data{\n      display: flex;\n    }\n    .stars-container{\n      display: flex;\n      position: absolute;\n      top:0;\n      z-index: 1;\n    }\n    .life-bar-container{\n      position: absolute;\n      top: 0;\n      z-index: 0;\n      &.KCOM{\n        border-radius: 0 !important;\n        border: none !important;\n        background-color: $sepia;\n        width: 100%;\n        height: 100%;\n        margin-top: 3px;\n      }\n    }\n  }\n  \n"])),(function(props){return props.containerHeight+"px"}),(0,colorNameToValue.G)("medium-grey"));try{StyledRating.displayName="StyledRating",StyledRating.__docgenInfo={description:"",displayName:"StyledRating",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},containerHeight:{defaultValue:null,description:"",name:"containerHeight",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Rating/ratings.styled.tsx#StyledRating"]={docgenInfo:StyledRating.__docgenInfo,name:"StyledRating",path:"src/components/Rating/ratings.styled.tsx#StyledRating"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),__jsx=react.createElement,Rating=function Rating(props){var _ref,_props$ratingHeight;gsap_default().registerPlugin(ScrollToPlugin_default());var _useResizeDetector=(0,index_esm.NB)({refreshMode:"throttle",refreshRate:100,refreshOptions:{},handleHeight:!1,skipOnMount:!1,onResize:function onResize(){}}),height=(_useResizeDetector.width,_useResizeDetector.height),ref=_useResizeDetector.ref;return __jsx(StyledRating,{className:"ratings-overall-container ".concat(props.layout),containerHeight:null!==(_ref=null!==(_props$ratingHeight=props.ratingHeight)&&void 0!==_props$ratingHeight?_props$ratingHeight:height)&&void 0!==_ref?_ref:0},__jsx("div",{className:"stars-container",ref},__jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 82.61 15.8"},__jsx("defs",null,__jsx("mask",{id:"maskStars",maskContentUnits:"userSpaceOnUse"},__jsx("polygon",{points:"8.31 0 10.37 6.17 16.62 6.15 11.55 9.6 13.44 15.8 8.31 11.97 3.17 15.8 5.07 9.6 0 6.15 6.24 6.17 8.31 0",fill:"white"}),__jsx("polygon",{points:"24.93 0 26.99 6.17 33.24 6.15 28.16 9.6 30.06 15.8 24.93 11.97 19.79 15.8 21.69 9.6 16.62 6.15 22.86 6.17 24.93 0",fill:"white"}),__jsx("polygon",{points:"41.07 0 43.13 6.17 49.38 6.15 44.31 9.6 46.2 15.8 41.07 11.97 35.93 15.8 37.83 9.6 32.76 6.15 39 6.17 41.07 0",fill:"white"}),__jsx("polygon",{points:"57.69 0 59.75 6.17 66 6.15 60.92 9.6 62.82 15.8 57.69 11.97 52.55 15.8 54.45 9.6 49.38 6.15 55.62 6.17 57.69 0",fill:"white"}),__jsx("polygon",{points:"74.3 0 76.37 6.17 82.61 6.15 77.54 9.6 79.44 15.8 74.3 11.97 69.17 15.8 71.07 9.6 66 6.15 72.24 6.17 74.3 0",fill:"white"}),__jsx("path",{d:"M0.2,0.3 L0.3,0.2 L0.4,0.3 Q0.35,0.35 0.4,0.4 L0.3,0.5 Q0.35,0.45 0.4,0.4 Z",fill:"white"}),__jsx("path",{d:"M0.4,0.3 L0.5,0.2 L0.6,0.3 Q0.65,0.35 0.6,0.4 L0.5,0.5 Q0.55,0.45 0.5,0.4 Z",fill:"white"}))),__jsx("rect",{className:"star-bg",x:"0",y:"0",width:"100%",height:"100%",fill:"grey",mask:"url(#maskStars)"}),__jsx("rect",{className:"star-fill",x:"0",y:"0",width:"".concat(Math.round(props.ratingNumber/props.totalNumberOfStars*100),"%"),height:"100%",fill:(0,colorNameToValue.G)("secondaryGold"),mask:"url(#maskStars)"}))),__jsx("div",{className:"rating-info-container"},function getRatingInfo(){if("hidden"!==props.ratingVisible)return __jsx("div",{className:"rating-info"},__jsx("span",null,props.ratingNumber),"|",__jsx("span",null,"(",props.totalNumberOfReviews,")"))}()))};Rating.displayName="Rating",Rating.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{totalNumberOfStars:{required:!0,tsType:{name:"union",raw:"5 | 10",elements:[{name:"literal",value:"5"},{name:"literal",value:"10"}]},description:""},totalNumberOfReviews:{required:!0,tsType:{name:"number"},description:""},ratingNumber:{required:!0,tsType:{name:"number"},description:""},scrollToTargetID:{required:!1,tsType:{name:"string"},description:""},ratingActiveColor:{required:!1,tsType:{name:"colorByNameType"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},ratingVisible:{required:!1,tsType:{name:"union",raw:'"hidden" | "visible"',elements:[{name:"literal",value:'"hidden"'},{name:"literal",value:'"visible"'}]},description:""},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},ratingHeight:{required:!1,tsType:{name:"number"},description:""}}};try{Rating.displayName="Rating",Rating.__docgenInfo={description:"",displayName:"Rating",props:{totalNumberOfStars:{defaultValue:null,description:"",name:"totalNumberOfStars",required:!0,type:{name:"enum",value:[{value:"5"},{value:"10"}]}},totalNumberOfReviews:{defaultValue:null,description:"",name:"totalNumberOfReviews",required:!0,type:{name:"number"}},ratingNumber:{defaultValue:null,description:"",name:"ratingNumber",required:!0,type:{name:"number"}},scrollToTargetID:{defaultValue:null,description:"",name:"scrollToTargetID",required:!1,type:{name:"string"}},ratingActiveColor:{defaultValue:null,description:"",name:"ratingActiveColor",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},ratingVisible:{defaultValue:null,description:"",name:"ratingVisible",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},ratingHeight:{defaultValue:null,description:"",name:"ratingHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Rating/Rating.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"src/components/Rating/Rating.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_commonStyles/common.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IC:()=>AnimFadeIn,g7:()=>absolutePositionStretch,H3:()=>attentionCTA,oe:()=>ctaColorStyles,Pp:()=>flexCentered,xI:()=>flexRow,mZ:()=>perksColorStyles});var _templateObject,_templateObject2,_templateObject3,common_styled_templateObject,common_styled_templateObject2,common_styled_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),fadeInAnim=((0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]))),(0,styled_components_browser_esm.F4)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])))),flexItem=((0,styled_components_browser_esm.F4)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  0% {\n    background-position: 0 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n\n"]))),(0,styled_components_browser_esm.iv)(common_styled_templateObject||(common_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n"])))),ctaColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject2||(common_styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  --colorBoldCTA: ",";\n  --colorCTAPrimary: ",";  \n  --colorDarkRoast: ",";\n  --colorDiscount : ",";\n  --colorKSK : ",";\n  --colorLatte : ",";\n  --colorLightCTA: ",";\n  --colorLightRoast: ",";  \n  \n  --colorMediumGrey : ",";\n  --colorMediumRoast : ",";\n  --colorOKStatus : ",";\n  --colorSecondaryGold : ","; \n   \n  --colorSepia : ","; \n \n  --colorLatte70 : ",";\n  --colorLatteMed : ",";\n  --colorSepia70 : ",";\n  --colorText: ",";\n"])),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("discount"),(0,colorNameToValue.G)("KSK"),(0,colorNameToValue.G)("latte"),(0,colorNameToValue.G)("faintWarm"),(0,colorNameToValue.G)("light-roast"),(0,colorNameToValue.G)("medium-grey"),(0,colorNameToValue.G)("medium-roast"),(0,colorNameToValue.G)("OK-Status"),(0,colorNameToValue.G)("secondaryGold"),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("latte70"),(0,colorNameToValue.G)("latteMed"),(0,colorNameToValue.G)("sepia70"),(0,colorNameToValue.G)("text")),perksColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject3||(common_styled_templateObject3=(0,taggedTemplateLiteral.Z)(["\n--colorSpicedRed : ",";\n--colorLightBeige : ",";\n"])),(0,colorNameToValue.G)("perks-spiced-red"),(0,colorNameToValue.G)("perks-light-beige")),absolutePositionStretch=(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  inset: 0;\n"]))),flexRow=(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: row;\n"])),flexItem),flexCentered=((0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: column;\n"])),flexItem),(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  justify-content: center;\n  align-items: center;\n"])),flexItem)),attentionCTA=(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)([" \n  background: linear-gradient(-45deg,hsl(47 95% 80% / 1),hsl(47 95% 59% / 1),hsl(47 95% 80% / 1),hsl(47 95% 80% / 1));\n  background-size: 200% 265%;   \n"]))),AnimFadeIn=(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    animation: "," 1s ease-in-out forwards normal \n"])),fadeInAnim);(0,styled_components_browser_esm.F4)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)([" \n  0% {\n    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.56);\n  }\n  100% {\n    box-shadow: inset 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);\n  } \n"])))},"./node_modules/gsap/dist/ScrollToPlugin.js":function(__unused_webpack_module,exports,__webpack_require__){var console=__webpack_require__("./node_modules/console-browserify/index.js");!function(exports){"use strict";var gsap,_coreInitted,_window,_docEl,_body,_toArray,_config,_windowExists=function _windowExists(){return"undefined"!=typeof window},_getGSAP=function _getGSAP(){return gsap||_windowExists()&&(gsap=window.gsap)&&gsap.registerPlugin&&gsap},_isString=function _isString(value){return"string"==typeof value},_isFunction=function _isFunction(value){return"function"==typeof value},_max=function _max(element,axis){var dim="x"===axis?"Width":"Height",scroll="scroll"+dim,client="client"+dim;return element===_window||element===_docEl||element===_body?Math.max(_docEl[scroll],_body[scroll])-(_window["inner"+dim]||_docEl[client]||_body[client]):element[scroll]-element["offset"+dim]},_buildGetter=function _buildGetter(e,axis){var p="scroll"+("x"===axis?"Left":"Top");return e===_window&&(null!=e.pageXOffset?p="page"+axis.toUpperCase()+"Offset":e=null!=_docEl[p]?_docEl:_body),function(){return e[p]}},_clean=function _clean(value,index,target,targets){if(_isFunction(value)&&(value=value(index,target,targets)),"object"!=typeof value)return _isString(value)&&"max"!==value&&"="!==value.charAt(1)?{x:value,y:value}:{y:value};if(value.nodeType)return{y:value,x:value};var p,result={};for(p in value)result[p]="onAutoKill"!==p&&_isFunction(value[p])?value[p](index,target,targets):value[p];return result},_getOffset=function _getOffset(element,container){if(!(element=_toArray(element)[0])||!element.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var rect=element.getBoundingClientRect(),isRoot=!container||container===_window||container===_body,cRect=isRoot?{top:_docEl.clientTop-(_window.pageYOffset||_docEl.scrollTop||_body.scrollTop||0),left:_docEl.clientLeft-(_window.pageXOffset||_docEl.scrollLeft||_body.scrollLeft||0)}:container.getBoundingClientRect(),offsets={x:rect.left-cRect.left,y:rect.top-cRect.top};return!isRoot&&container&&(offsets.x+=_buildGetter(container,"x")(),offsets.y+=_buildGetter(container,"y")()),offsets},_parseVal=function _parseVal(value,target,axis,currentVal,offset){return isNaN(value)||"object"==typeof value?_isString(value)&&"="===value.charAt(1)?parseFloat(value.substr(2))*("-"===value.charAt(0)?-1:1)+currentVal-offset:"max"===value?_max(target,axis)-offset:Math.min(_max(target,axis),_getOffset(value,target)[axis]-offset):parseFloat(value)-offset},_initCore=function _initCore(){gsap=_getGSAP(),_windowExists()&&gsap&&document.body&&(_window=window,_body=document.body,_docEl=document.documentElement,_toArray=gsap.utils.toArray,gsap.config({autoKillThreshold:7}),_config=gsap.config(),_coreInitted=1)},ScrollToPlugin={version:"3.9.1",name:"scrollTo",rawVars:1,register:function register(core){gsap=core,_initCore()},init:function init(target,value,tween,index,targets){_coreInitted||_initCore();var data=this,snapType=gsap.getProperty(target,"scrollSnapType");data.isWin=target===_window,data.target=target,data.tween=tween,value=_clean(value,index,target,targets),data.vars=value,data.autoKill=!!value.autoKill,data.getX=_buildGetter(target,"x"),data.getY=_buildGetter(target,"y"),data.x=data.xPrev=data.getX(),data.y=data.yPrev=data.getY(),snapType&&"none"!==snapType&&(data.snap=1,data.snapInline=target.style.scrollSnapType,target.style.scrollSnapType="none"),null!=value.x?(data.add(data,"x",data.x,_parseVal(value.x,target,"x",data.x,value.offsetX||0),index,targets),data._props.push("scrollTo_x")):data.skipX=1,null!=value.y?(data.add(data,"y",data.y,_parseVal(value.y,target,"y",data.y,value.offsetY||0),index,targets),data._props.push("scrollTo_y")):data.skipY=1},render:function render(ratio,data){for(var x,y,yDif,xDif,threshold,pt=data._pt,target=data.target,tween=data.tween,autoKill=data.autoKill,xPrev=data.xPrev,yPrev=data.yPrev,isWin=data.isWin,snap=data.snap,snapInline=data.snapInline;pt;)pt.r(ratio,pt.d),pt=pt._next;x=isWin||!data.skipX?data.getX():xPrev,yDif=(y=isWin||!data.skipY?data.getY():yPrev)-yPrev,xDif=x-xPrev,threshold=_config.autoKillThreshold,data.x<0&&(data.x=0),data.y<0&&(data.y=0),autoKill&&(!data.skipX&&(xDif>threshold||xDif<-threshold)&&x<_max(target,"x")&&(data.skipX=1),!data.skipY&&(yDif>threshold||yDif<-threshold)&&y<_max(target,"y")&&(data.skipY=1),data.skipX&&data.skipY&&(tween.kill(),data.vars.onAutoKill&&data.vars.onAutoKill.apply(tween,data.vars.onAutoKillParams||[]))),isWin?_window.scrollTo(data.skipX?x:data.x,data.skipY?y:data.y):(data.skipY||(target.scrollTop=data.y),data.skipX||(target.scrollLeft=data.x)),!snap||1!==ratio&&0!==ratio||(y=target.scrollTop,x=target.scrollLeft,snapInline?target.style.scrollSnapType=snapInline:target.style.removeProperty("scroll-snap-type"),target.scrollTop=y+1,target.scrollLeft=x+1,target.scrollTop=y,target.scrollLeft=x),data.xPrev=data.x,data.yPrev=data.y},kill:function kill(property){var both="scrollTo"===property;(both||"scrollTo_x"===property)&&(this.skipX=1),(both||"scrollTo_y"===property)&&(this.skipY=1)}};ScrollToPlugin.max=_max,ScrollToPlugin.getOffset=_getOffset,ScrollToPlugin.buildGetter=_buildGetter,_getGSAP()&&gsap.registerPlugin(ScrollToPlugin),exports.ScrollToPlugin=ScrollToPlugin,exports.default=ScrollToPlugin,Object.defineProperty(exports,"__esModule",{value:!0})}(exports)}}]);