"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[4367],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Experimental/MemberPricingMessaging/MemberPricingMessaging.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MemberPriceMessagingExample:()=>MemberPriceMessagingExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MemberPriceMessaging,_MemberPriceMessaging2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_MemberPricingMessaging__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Experimental/MemberPricingMessaging/MemberPricingMessaging.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Experimental /Member Pricing Messaging",component:_MemberPricingMessaging__WEBPACK_IMPORTED_MODULE_2__.H,argTypes:{isLoggedIn:{control:"boolean"},product:{control:"object"},formFactor:{control:"radio",options:["mobile","desktop"]},calculateCardWidth:{control:"boolean"}}};var Template=function Template(args){return __jsx(_MemberPricingMessaging__WEBPACK_IMPORTED_MODULE_2__.H,args)};Template.displayName="Template";var MemberPriceMessagingExample=Template.bind({});MemberPriceMessagingExample.args={},MemberPriceMessagingExample.parameters=_objectSpread(_objectSpread({},MemberPriceMessagingExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MemberPriceMessaging=MemberPriceMessagingExample.parameters)||void 0===_MemberPriceMessaging?void 0:_MemberPriceMessaging.docs),{},{source:_objectSpread({originalSource:"args => <MemberPriceMessaging {...args} />"},null===(_MemberPriceMessaging2=MemberPriceMessagingExample.parameters)||void 0===_MemberPriceMessaging2||null===(_MemberPriceMessaging2=_MemberPriceMessaging2.docs)||void 0===_MemberPriceMessaging2?void 0:_MemberPriceMessaging2.source)})})},"./src/components/Experimental/MemberPricingMessaging/MemberPricingMessaging.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>MemberPriceMessaging});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),MemberPricingMessagingStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --colorSpicedRed: ",';\n  --buttonLarge: 1.25rem;\n  --buttonMedium: 1rem;\n  --buttonSmall: 0.75rem;\n\n  --FontSizeLarge: 1.25rem;\n  --FontSizeMedium: 1rem;\n  --FontSizeSmall: 0.75rem;\n\n  --spacingLarge: 1rem;\n  --spacingMedium: 0.75rem;\n  --spacingSmall: 0.5rem;\n  --spacingTiny: 0.25rem;\n\n\n  position: relative !important;\n\n\n  .perks-logo-small {\n    margin-left: 0.3rem;\n    width: 1rem;\n    height: 1rem;\n    margin-top: -6px;\n\n    .filled {\n      fill: var(--colorSpicedRed);\n    }\n  }\n\n  .pricing-info {\n    display: inline-flex;\n    flex-direction: row;\n    align-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    width: 100%;\n\n    span {\n      font-size: var(--FontSizeSmall);\n      color: #D83B18; \n    }\n  }\n\n  .info-link {\n    text-decoration: underline;\n    color: #D83B18;\n    padding: 0.2rem;\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    font-size: 0.85rem;\n    \n    :hover {\n      background-color: #D83B18;\n      color: white;\n      padding: 0.2rem;\n      border-radius: 0.2rem;\n\n      .filled {\n        fill: white;\n      }\n    }\n  }\n\n  /*  .perks-tooltip {\n      position: absolute;\n      background-color: #ffffff;\n      color: #3B2B2F;\n      !*color: var(--colordark-roast);*!\n      padding: 1rem;\n      border-radius: 5px;\n      marginTop: 2rem;\n      fontSize: 1rem;\n      z-index: 10000;\n      box-shadow: 0px 0px var(--spacingTiny) 0 rgb(0 0 0 / 30%);\n      border: 2px solid var(--colorSpicedRed);\n  \n    }\n      .perks-tooltip::before {\n        content: "";\n        position: absolute;\n        top: -10px; !* Adjust as necessary *!\n        left: 50%;\n        transform: translateX(-50%);\n        border-width: 10px;\n        border-style: solid;\n        border-color: transparent transparent var(--colorSpicedRed) transparent;\n      }*/\n\n  .perks-tooltip {\n    position: absolute;\n    background-color: #ffffff;\n    color: #3B2B2F;\n    padding: 1rem;\n    border-radius: 5px;\n    margin-top: 10px;\n    top: 100%;\n    font-size: 1rem;\n    z-index: 10000;\n    box-shadow: 0px 0px var(--spacingTiny) 0 rgb(0 0 0 / 30%);\n    left: 50%;\n    transform: translateX(-50%);\n    width: 90%;\n    /*\n    border: 2px solid var(--colorSpicedRed);\n    */\n  }\n\n  .tooltip-caret {\n    content: "";\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 12px;\n    border-style: solid;\n    border-color: transparent transparent white transparent;\n    z-index: 1000000;\n    top: 10px;\n  }\n\n'])),(0,colorNameToValue.G)("perks-spiced-red"));try{MemberPricingMessagingStyled.displayName="MemberPricingMessagingStyled",MemberPricingMessagingStyled.__docgenInfo={description:"",displayName:"MemberPricingMessagingStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Experimental/MemberPricingMessaging/MemberPricingMessagingStyled.tsx#MemberPricingMessagingStyled"]={docgenInfo:MemberPricingMessagingStyled.__docgenInfo,name:"MemberPricingMessagingStyled",path:"src/components/Experimental/MemberPricingMessaging/MemberPricingMessagingStyled.tsx#MemberPricingMessagingStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,MemberPriceMessaging=function MemberPriceMessaging(props){var _useState=(0,react.useState)(!1),tooltipVisible=_useState[0],setTooltipVisible=_useState[1];return __jsx(MemberPricingMessagingStyled,{className:"member-price-display"},tooltipVisible&&__jsx("div",{className:"perks-tooltip"},"With Auto-Delivery & Perks, members save 25% on recurring and one time orders as long as you have an active recurring order in the last 12 weeks. AND earn points towards free coffee & more with each delivery!"),__jsx("div",{className:"label pricing-info"},__jsx("span",null,"You save 25% with Auto-Delivery &",__jsx("strong",{className:"info-link",onClick:function onClick(){return props.infoFunction()},onMouseEnter:function onMouseEnter(){return setTooltipVisible(!0)},onMouseLeave:function onMouseLeave(){return setTooltipVisible(!1)}},"Perks",tooltipVisible&&__jsx("div",{className:"tooltip-caret"}),__jsx(Graphic.z,{graphicName:"perks-logo-small"}))),__jsx("span",null)))};MemberPriceMessaging.displayName="MemberPriceMessaging",MemberPriceMessaging.__docgenInfo={description:"",methods:[],displayName:"MemberPriceMessaging",props:{priceLogo:{required:!1,tsType:{name:"Igraphics"},description:""},infoFunction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{MemberPriceMessaging.displayName="MemberPriceMessaging",MemberPriceMessaging.__docgenInfo={description:"",displayName:"MemberPriceMessaging",props:{priceLogo:{defaultValue:null,description:"",name:"priceLogo",required:!1,type:{name:"Igraphics"}},infoFunction:{defaultValue:null,description:"",name:"infoFunction",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Experimental/MemberPricingMessaging/MemberPricingMessaging.tsx#MemberPriceMessaging"]={docgenInfo:MemberPriceMessaging.__docgenInfo,name:"MemberPriceMessaging",path:"src/components/Experimental/MemberPricingMessaging/MemberPricingMessaging.tsx#MemberPriceMessaging"})}catch(__react_docgen_typescript_loader_error){}}}]);