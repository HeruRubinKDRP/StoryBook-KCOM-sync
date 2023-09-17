"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[2605],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Flag/flag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FlagGeneralView:()=>FlagGeneralView,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _FlagGeneralView$para,_FlagGeneralView$para2,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),_Flag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Flag/Flag.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Flag",argTypes:{flagLabel:{control:"text"},flagColor:{control:"select",options:_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_3__.K.sort()},flagStyle:{control:"select",options:_Flag__WEBPACK_IMPORTED_MODULE_2__.h.sort()},font:{control:"object"}}};var Template=function Template(args){return __jsx("div",{style:{padding:"4rem"}},__jsx(_Flag__WEBPACK_IMPORTED_MODULE_2__.W,args))};Template.displayName="Template";var FlagGeneralView=Template.bind({});FlagGeneralView.args={flagColor:"KSK",flagStyle:"squared-curved",flagLabel:"Our Best Deal",flagTextColorOverride:"white",font:{fontSize:"Large",fontWeight:"heavy-weight"}},FlagGeneralView.parameters=_objectSpread(_objectSpread({},FlagGeneralView.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FlagGeneralView$para=FlagGeneralView.parameters)||void 0===_FlagGeneralView$para?void 0:_FlagGeneralView$para.docs),{},{source:_objectSpread({originalSource:'args => <div style={{\n  padding: "4rem"\n}}><Flag {...args} /></div>'},null===(_FlagGeneralView$para2=FlagGeneralView.parameters)||void 0===_FlagGeneralView$para2||null===(_FlagGeneralView$para2=_FlagGeneralView$para2.docs)||void 0===_FlagGeneralView$para2?void 0:_FlagGeneralView$para2.source)})})},"./src/components/Flag/Flag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Flag,h:()=>flagStyles});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),common_styled=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),FlagStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding: 0.5rem 1rem;\n  display: inline-flex;\n  width: auto;\n  position: relative;\n  ",";\n  label {\n    z-index: 1;\n  }\n  \n  &.round-top{\n    border-radius: 0.5rem 0.5rem 0 0;\n  }\n\n  &.dark-roast {\n    background-color: var(--colorDarkRoast);\n    label{\n      color: white;\n    }\n    .stroked {\n      stroke: white;\n      stroke-width: 0.5px;\n      fill: none;\n    }\n  }\n\n  .stroked {\n    stroke-width: 0.5px;\n    fill: none;\n  }\n\n  &.medium-grey{\n    background-color: var(--colorMediumGrey);\n    label{\n      color : white !important;\n    }\n    .filled{\n      fill: var(--colorSecondaryGold);\n    }\n\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.secondaryGold{\n    background-color: var(--colorSecondaryGold);\n    label{\n      color: var(--colorText) !important;\n    }\n    .filled{\n      fill: var(--colorSecondaryGold);\n    }\n    .stroked{\n      stroke: var(--colorText);\n    }\n  }\n\n  &.OK-Status{\n    background-color: var(--colorOKStatus);\n    label{\n      color:white;\n    }\n    .filled{\n      fill :var(--colorOKStatus);\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.Primary-CTA{\n    background-color: var(--colorCTAPrimary);\n    label{\n      color : var(--colorText) !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n    .filled{\n      fill : var(--colorCTAPrimary);\n    }\n  }\n\n  &.Bold-CTA{\n    background-color: var(--colorBoldCTA);\n    .filled{\n      fill : var(--colorBoldCTA);\n    }\n    label{\n      color : var(--colorText) !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.discount{\n    background-color: var(--colorDiscount);\n    .filled{\n      fill: var(--colorDiscount);\n    }\n    label{\n      color: white !important;\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.sepia{\n    background-color: var(--colorSepia);\n    label{\n      color : var(--colorDarkRoast) !important;\n    }\n    .filled{\n      fill : var(--colorSepia);\n    }\n    .stroked{\n      stroke : var(--colorDarkRoast);\n    }\n  }\n\n  &.white{\n    background-color: white;\n    svg{\n      filter: drop-shadow(3px 3px 5px #00000073);\n    }\n    .filled{\n      fill : white;\n\n    }\n    .stroked{\n      stroke : var(--colorDarkRoast);\n    }\n    label{\n      color : var(--colorDarkRoast) !important;\n    }\n  }\n\n  &.medium-roast{\n    background-color: var(--colorMediumRoast);\n    label{\n      color : white;\n    }\n    .filled{\n      fill : var(--colorMediumRoast);\n    }\n    .stroked{\n      stroke : white;\n    }\n  }\n\n  &.latte{\n    background-color: var(--colorLatte);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n    .stroked{\n      stroke: var(--colorDarkRoast);\n    }\n\n    .filled{\n      fill: var(--colorLatte);\n    }\n  }\n\n  &.light-roast {\n    background-color: var(--colorLightRoast);\n    .stroked{\n      stroke : white;\n    }\n    .filled{\n      fill: var(--colorLightRoast);\n    }\n  }\n  \n  &.latte70{\n    background-color: var(--colorLatte70);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n  \n  &.latteMed{\n    background-color: var(--colorLatteMed);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n  \n  &.sepia70{\n    background-color: var(--colorSepia70);\n    label{\n      color: var(--colorDarkRoast) !important;\n    }\n  }\n\n  &.KSK {\n    background-color: var(--colorKSK);\n    color: white;\n\n    .stroked {\n      stroke: white;\n    }\n\n    .filled {\n      fill: var(--colorKSK);\n    }\n  }\n\n  .square {\n\n  }\n\n  &.circle-flag {\n    background-color: transparent !important;\n    padding: 0.5rem 0.25rem;\n  }\n\n  &.banner {\n\n  }\n\n  .adornment {\n    position: absolute;\n  }\n\n  .squared-curved {\n    display: inline-flex;\n    border-radius: 0.5rem 0 0 0;\n    inset: 0 0 0 0;\n  }\n\n  .tri-bot-l{\n    position: absolute;\n    bottom: -1rem;\n    top: 100%;\n    left: 0;\n    right: calc(100% - 1rem);\n    filter: brightness(0.65);\n  }\n\n  .simple-banner, .banner-protrude{\n    inset: 0 -2rem 0 100%;\n    .banner-tail{\n      height: 100%;\n    }\n  }\n\n  .circle-banner {\n    inset: -1rem;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n  }\n\n  &.alternating-sharp-round {\n    border-radius: 0.5rem 0 0.5rem 0;\n  }\n\n  &.curved-rect {\n    border-radius: 0.5rem\n  }\n\n  label {\n    &.heavy {\n      font-weight: 800;\n    }\n\n    &.regular {\n      font-weight: 400;\n    }\n\n    &.bold {\n      font-weight: 600;\n    }\n\n    &.light {\n      font-weight: lighter;\n    }\n\n  }\n"])),common_styled.oe);try{FlagStyled.displayName="FlagStyled",FlagStyled.__docgenInfo={description:"",displayName:"FlagStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flag/flag.styles.tsx#FlagStyled"]={docgenInfo:FlagStyled.__docgenInfo,name:"FlagStyled",path:"src/components/Flag/flag.styles.tsx#FlagStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,flagStyles=["square","circle-flag","banner-simple","banner-protrude","squared-curved","alternating-sharp-round","round-top"],Flag=function Flag(props){return __jsx(FlagStyled,{className:"flag-container ".concat(props.flagStyle," ").concat(props.flagColor," ")},function getFlag(){var adornment=__jsx(react.Fragment,null);switch(props.flagStyle){case"circle-flag":adornment=__jsx("div",{className:"circle-banner adornment"},__jsx(Graphic.Z,{graphicName:"circle-and-ring"}));break;case"banner-simple":adornment=__jsx("div",{className:"simple-banner adornment"},__jsx(Graphic.Z,{graphicName:"banner-tail"}));break;case"banner-protrude":adornment=__jsx(react.Fragment,null,__jsx("div",{className:"banner-protrude adornment"},__jsx(Graphic.Z,{graphicName:"banner-tail"})," "),__jsx(Graphic.Z,{graphicName:"tri-bot-l"}));break;case"squared-curved":adornment=__jsx("div",{className:"squared-curved adornment"})}return __jsx(react.Fragment,null,__jsx("label",{className:props.font.fontWeight,style:{color:props.flagTextColorOverride}},props.flagLabel,props.children),adornment)}())};Flag.displayName="Flag",Flag.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{flagLabel:{required:!0,tsType:{name:"string"},description:""},flagTextColorOverride:{required:!1,tsType:{name:"string"},description:""},flagColor:{required:!0,tsType:{name:"colorByNameType"},description:""},flagClasses:{required:!1,tsType:{name:"string"},description:""},font:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n  fontSize : sizeT;\r\n  fontWeight? : fontWeightT;\r\n}",signature:{properties:[{key:"fontSize",value:{name:"sizeT",required:!0}},{key:"fontWeight",value:{name:"fontWeightT",required:!1}}]}},description:""},flagStyle:{required:!0,tsType:{name:"union",raw:'"square" |\r\n"circle-flag" |\r\n"banner-simple" |\r\n"banner-protrude" |\r\n"squared-curved" |\r\n"curved-rect" |\r\n"alternating-sharp-round" |\r\n"round-top"',elements:[{name:"literal",value:'"square"'},{name:"literal",value:'"circle-flag"'},{name:"literal",value:'"banner-simple"'},{name:"literal",value:'"banner-protrude"'},{name:"literal",value:'"squared-curved"'},{name:"literal",value:'"curved-rect"'},{name:"literal",value:'"alternating-sharp-round"'},{name:"literal",value:'"round-top"'}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Flag.displayName="Flag",Flag.__docgenInfo={description:"",displayName:"Flag",props:{flagLabel:{defaultValue:null,description:"",name:"flagLabel",required:!0,type:{name:"string"}},flagTextColorOverride:{defaultValue:null,description:"",name:"flagTextColorOverride",required:!1,type:{name:"string"}},flagColor:{defaultValue:null,description:"",name:"flagColor",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},flagClasses:{defaultValue:null,description:"",name:"flagClasses",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!0,type:{name:"{ fontSize: sizeT; fontWeight?: fontWeightT | undefined; }"}},flagStyle:{defaultValue:null,description:"",name:"flagStyle",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"circle-flag"'},{value:'"banner-simple"'},{value:'"banner-protrude"'},{value:'"squared-curved"'},{value:'"curved-rect"'},{value:'"alternating-sharp-round"'},{value:'"round-top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flag/Flag.tsx#Flag"]={docgenInfo:Flag.__docgenInfo,name:"Flag",path:"src/components/Flag/Flag.tsx#Flag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_commonStyles/common.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IC:()=>AnimFadeIn,g7:()=>absolutePositionStretch,H3:()=>attentionCTA,oe:()=>ctaColorStyles,Pp:()=>flexCentered,xI:()=>flexRow,mZ:()=>perksColorStyles});var _templateObject,_templateObject2,_templateObject3,common_styled_templateObject,common_styled_templateObject2,common_styled_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),fadeInAnim=((0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]))),(0,styled_components_browser_esm.F4)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])))),flexItem=((0,styled_components_browser_esm.F4)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  0% {\n    background-position: 0 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n\n"]))),(0,styled_components_browser_esm.iv)(common_styled_templateObject||(common_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n"])))),ctaColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject2||(common_styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  --colorBoldCTA: ",";\n  --colorCTAPrimary: ",";  \n  --colorDarkRoast: ",";\n  --colorDiscount : ",";\n  --colorKSK : ",";\n  --colorLatte : ",";\n  --colorLightCTA: ",";\n  --colorLightRoast: ",";  \n  \n  --colorMediumGrey : ",";\n  --colorMediumRoast : ",";\n  --colorOKStatus : ",";\n  --colorSecondaryGold : ","; \n   \n  --colorSepia : ","; \n \n  --colorLatte70 : ",";\n  --colorLatteMed : ",";\n  --colorSepia70 : ",";\n  --colorText: ",";\n"])),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("discount"),(0,colorNameToValue.G)("KSK"),(0,colorNameToValue.G)("latte"),(0,colorNameToValue.G)("faintWarm"),(0,colorNameToValue.G)("light-roast"),(0,colorNameToValue.G)("medium-grey"),(0,colorNameToValue.G)("medium-roast"),(0,colorNameToValue.G)("OK-Status"),(0,colorNameToValue.G)("secondaryGold"),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("latte70"),(0,colorNameToValue.G)("latteMed"),(0,colorNameToValue.G)("sepia70"),(0,colorNameToValue.G)("text")),perksColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject3||(common_styled_templateObject3=(0,taggedTemplateLiteral.Z)(["\n--colorSpicedRed : ",";\n--colorLightBeige : ",";\n"])),(0,colorNameToValue.G)("perks-spiced-red"),(0,colorNameToValue.G)("perks-light-beige")),absolutePositionStretch=(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  inset: 0;\n"]))),flexRow=(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: row;\n"])),flexItem),flexCentered=((0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: column;\n"])),flexItem),(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  justify-content: center;\n  align-items: center;\n"])),flexItem)),attentionCTA=(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)([" \n  background: linear-gradient(-45deg,hsl(47 95% 80% / 1),hsl(47 95% 59% / 1),hsl(47 95% 80% / 1),hsl(47 95% 80% / 1));\n  background-size: 200% 265%;   \n"]))),AnimFadeIn=(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    animation: "," 1s ease-in-out forwards normal \n"])),fadeInAnim);(0,styled_components_browser_esm.F4)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)([" \n  0% {\n    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.56);\n  }\n  100% {\n    box-shadow: inset 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);\n  } \n"])))}}]);