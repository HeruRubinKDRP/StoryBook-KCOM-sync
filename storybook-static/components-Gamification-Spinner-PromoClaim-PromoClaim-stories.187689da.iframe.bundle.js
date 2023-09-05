"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[8844],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Gamification/Spinner/PromoClaim/PromoClaim.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PromoClaim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/PromoClaim",component:_PromoClaim__WEBPACK_IMPORTED_MODULE_2__.Z};var Template=function Template(args){return __jsx(_PromoClaim__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={promotion:{promoMode:"big-image",name:"Sample Promotion",link:"https://example.com/sample-promo-image.png",weight:1,componentType:"image"},onClaim:function onClaim(promo){console.log("Claimed:",promo.name)}},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <PromoClaim {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/Animated Effects/Typist/Typist.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typist_Typist});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),gsap=__webpack_require__("./node_modules/gsap/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),TypistStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  overflow: hidden; \n"])));try{TypistStyled.displayName="TypistStyled",TypistStyled.__docgenInfo={description:"",displayName:"TypistStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/Typist/typist.styled.tsx#TypistStyled"]={docgenInfo:TypistStyled.__docgenInfo,name:"TypistStyled",path:"src/components/Animated Effects/Typist/typist.styled.tsx#TypistStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,TypingCursor=function TypingCursor(){return __jsx("div",{style:{backgroundColor:"black",width:2,height:12,marginLeft:6,display:"inline-block"}})};TypingCursor.displayName="TypingCursor";var TypingEffect=function TypingEffect(props){var textRefs=(0,react.useRef)([]);textRefs.current=new Array(props.message.length).fill(null);var speedValue=function speedValue(value){switch(value){case"slow":return.1;case"medium":return.02;default:return.01}};return(0,react.useEffect)((function(){gsap.ZP.killTweensOf(textRefs.current),gsap.ZP.set(textRefs.current,{autoAlpha:0,y:0,width:0,display:"none"}),gsap.ZP.fromTo(textRefs.current,{autoAlpha:0,y:0,width:0,display:"none"},{width:"auto",autoAlpha:12,y:0,display:"inline",ease:"none",stagger:speedValue(props.speed)})}),[props.speed,props.message]),__jsx(TypistStyled,{className:"".concat(props.classes)},props.message.split("").map((function(_char,index){return __jsx("span",{key:index,ref:function ref(el){return textRefs.current[index]=el}},_char)})),props.showCursor&&__jsx(TypingCursor,null))};TypingEffect.displayName="TypingEffect",TypingEffect.__docgenInfo={description:"",methods:[],displayName:"TypingEffect",props:{message:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"union",raw:"'slow' | 'medium' | 'fast'",elements:[{name:"literal",value:"'slow'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'fast'"}]},description:""},showCursor:{required:!1,tsType:{name:"boolean"},description:""},classes:{required:!1,tsType:{name:"string"},description:""}}};const Typist_Typist=TypingEffect;try{Typist.displayName="Typist",Typist.__docgenInfo={description:"",displayName:"Typist",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"enum",value:[{value:'"slow"'},{value:'"medium"'},{value:'"fast"'}]}},showCursor:{defaultValue:null,description:"",name:"showCursor",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/Typist/Typist.tsx#Typist"]={docgenInfo:Typist.__docgenInfo,name:"Typist",path:"src/components/Animated Effects/Typist/Typist.tsx#Typist"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromoClaim_PromoClaim});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),PromoClaimStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 1vw 2vw 1vw;\n  background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);\n  @keyframes scaleUp {\n    from{\n        transform: scale(0);\n    }\n    to{\n        transform: scale(1);\n    }\n  }\n  @keyframes fadeIn {\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n  }\n  \n  .promo-claim-details{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    img{\n      animation: scaleUp 0.5s ease-in-out;\n      animation-fill-mode: forwards;\n      margin-top: -15%;\n      object-fit: contain;\n    }\n    .claim-btn{\n      animation: scaleUp 0.5s ease-in-out, fadeIn 0.25s ease-in-out;\n      animation-fill-mode: forwards;\n      animation-delay: 0.75s;\n      opacity: 0;\n    }\n    .decline{\n      font-size: calc(0.25vw + 8px);\n      animation: fadeIn 0.25s ease-in;\n      animation-fill-mode: forwards;\n      animation-delay: 1s;\n      opacity: 0;\n      margin-top: calc(0.5vw + 6px);\n    }\n    .title{\n      text-align: center;\n      font-size: calc(0.5vw + 18px);\n      line-height:  calc(0.5vw + 18px);\n      border: none;\n      margin-bottom: 1vw;\n    }\n    .fine-print{ \n      font-size: calc(0.5vw + 12px); \n      padding: 0 10% 5%;\n      justify-content: center;\n      animation: fadeIn 0.25s ease-in;\n      animation-fill-mode: forwards;\n      animation-delay: 1s;\n      opacity: 0;\n    }\n  }\n\n  \n\n"])));try{PromoClaimStyled.displayName="PromoClaimStyled",PromoClaimStyled.__docgenInfo={description:"",displayName:"PromoClaimStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoClaim/promoclaim.styled.tsx#PromoClaimStyled"]={docgenInfo:PromoClaimStyled.__docgenInfo,name:"PromoClaimStyled",path:"src/components/Gamification/Spinner/PromoClaim/promoclaim.styled.tsx#PromoClaimStyled"})}catch(__react_docgen_typescript_loader_error){}var Typist=__webpack_require__("./src/components/Animated Effects/Typist/Typist.tsx"),__jsx=react.createElement,PromoClaim=function PromoClaim(_ref){var promotion=_ref.promotion,onClaim=_ref.onClaim;return __jsx(PromoClaimStyled,{className:"promo-claim"},__jsx("div",{className:"promo-claim-details"},__jsx("img",{src:promotion.highlightImage,alt:promotion.name,style:{width:"100px",height:"100px"}}),__jsx(Typist.Z,{speed:"medium",classes:"title",message:promotion.name}),__jsx("p",{className:"fine-print"},"Restrictions apply. See terms & conditions for details. "),__jsx(KButton.Z,{actionFunc:function actionFunc(){return onClaim(promotion)},classes:"claim-btn",transitionType:"expand-bg",label:"Claim",buttonType:"primary",buttonWidth:"fit-to-content",iconPlacement:"no-icon"}),__jsx("a",{className:"decline"},"No thanks")))};PromoClaim.displayName="PromoClaim",PromoClaim.__docgenInfo={description:"",methods:[],displayName:"PromoClaim"};const PromoClaim_PromoClaim=PromoClaim;try{PromoClaim.displayName="PromoClaim",PromoClaim.__docgenInfo={description:"",displayName:"PromoClaim",props:{promotion:{defaultValue:null,description:"",name:"promotion",required:!0,type:{name:"Promotion"}},onClaim:{defaultValue:null,description:"",name:"onClaim",required:!0,type:{name:"(promo: Promotion) => void"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx#PromoClaim"]={docgenInfo:PromoClaim.__docgenInfo,name:"PromoClaim",path:"src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx#PromoClaim"})}catch(__react_docgen_typescript_loader_error){}}}]);