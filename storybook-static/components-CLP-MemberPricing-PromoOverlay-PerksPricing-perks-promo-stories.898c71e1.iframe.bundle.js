"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[2816],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-promo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PerksPricingPromoOverlay__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/PerksPricingPromoOverlay.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"PerksPromo",component:_PerksPricingPromoOverlay__WEBPACK_IMPORTED_MODULE_2__.Z};var Template=function Template(args){return __jsx(_PerksPricingPromoOverlay__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <PerksPromo {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/Animated Effects/Typist/Typist.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typist_Typist});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),gsap=__webpack_require__("./node_modules/gsap/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),TypistStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  overflow: hidden; \n"])));try{TypistStyled.displayName="TypistStyled",TypistStyled.__docgenInfo={description:"",displayName:"TypistStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/Typist/typist.styled.tsx#TypistStyled"]={docgenInfo:TypistStyled.__docgenInfo,name:"TypistStyled",path:"src/components/Animated Effects/Typist/typist.styled.tsx#TypistStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,TypingCursor=function TypingCursor(){return __jsx("div",{style:{backgroundColor:"black",width:2,height:12,marginLeft:6,display:"inline-block"}})};TypingCursor.displayName="TypingCursor";var TypingEffect=function TypingEffect(props){var textRefs=(0,react.useRef)([]);textRefs.current=new Array(props.message.length).fill(null);var speedValue=function speedValue(value){switch(value){case"slow":return.1;case"medium":return.02;default:return.01}};return(0,react.useEffect)((function(){gsap.ZP.killTweensOf(textRefs.current),gsap.ZP.set(textRefs.current,{autoAlpha:0,y:0,width:0,display:"none"}),gsap.ZP.fromTo(textRefs.current,{autoAlpha:0,y:0,width:0,display:"none"},{width:"auto",autoAlpha:12,y:0,display:"inline",ease:"none",stagger:speedValue(props.speed)})}),[props.speed,props.message]),__jsx(TypistStyled,{className:"".concat(props.classes)},props.message.split("").map((function(_char,index){return __jsx("span",{key:index,ref:function ref(el){return textRefs.current[index]=el}},_char)})),props.showCursor&&__jsx(TypingCursor,null))};TypingEffect.displayName="TypingEffect",TypingEffect.__docgenInfo={description:"",methods:[],displayName:"TypingEffect",props:{message:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"union",raw:"'slow' | 'medium' | 'fast'",elements:[{name:"literal",value:"'slow'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'fast'"}]},description:""},showCursor:{required:!1,tsType:{name:"boolean"},description:""},classes:{required:!1,tsType:{name:"string"},description:""}}};const Typist_Typist=TypingEffect;try{Typist.displayName="Typist",Typist.__docgenInfo={description:"",displayName:"Typist",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"enum",value:[{value:'"slow"'},{value:'"medium"'},{value:'"fast"'}]}},showCursor:{defaultValue:null,description:"",name:"showCursor",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/Typist/Typist.tsx#Typist"]={docgenInfo:Typist.__docgenInfo,name:"Typist",path:"src/components/Animated Effects/Typist/Typist.tsx#Typist"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/PerksPricingPromoOverlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PerksPricing_PerksPricingPromoOverlay});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),perks_pricing_promo_styled=__webpack_require__("./src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),Typist=__webpack_require__("./src/components/Animated Effects/Typist/Typist.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),__jsx=react.createElement,PerksPricingStyled=styled_components_browser_esm.ZP.svg(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  .cls-1{\n    fill:#e6431e;\n  }\n  .cls-2,.cls-3 {\n    fill:#3b2b2f;\n  }\n  .cls-3{\n    stroke:#000;\n    stroke-miterlimit: 10;\n  } \n    padding: 0 20%;\n \n"]))),PerksPricingExplainer=function PerksPricingExplainer(props){return __jsx(PerksPricingStyled,{className:"explainer-container"},__jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 421.03 108.2"},__jsx("path",{className:"cls-2",d:"m231.59,15.07c0,3.99-2.91,6.84-6.87,6.84s-6.87-2.85-6.87-6.84,2.92-6.84,6.87-6.84,6.87,2.85,6.87,6.84Zm-12.14,0c0,3.2,2.28,5.37,5.27,5.37s5.28-2.17,5.28-5.37-2.28-5.37-5.28-5.37-5.27,2.17-5.27,5.37Z"}),__jsx("path",{className:"cls-2",d:"m239.9,8.41c2.99,0,4.65,1.35,4.65,3.75s-1.79,3.76-4.63,3.76h-.22l4.78,5.79h-1.9l-4.69-5.79h-1.68v5.79h-1.53v-13.31h5.22Zm-3.69,1.44v4.7h3.67c2.02,0,3.08-.83,3.08-2.38s-1.08-2.32-3.08-2.32h-3.67Z"}),__jsx("g",{id:"SameLowPrice"},__jsx("path",{className:"cls-1",d:"m64.26,71.89c-2.67-1.82-6.01-3.1-9.98-3.1-4.99,0-8.56,2.25-8.56,5.98,0,3.08,2.48,4.75,7.64,5.37l3.15.38c5.46.66,10.33,2.98,10.33,8.7,0,6.55-5.96,9.96-13.1,9.96-4.8,0-9.89-1.7-13.01-4.26l2.08-3.03c2.29,1.94,6.6,3.69,10.9,3.69,5.13,0,9.18-2.08,9.18-6.03,0-3.22-2.77-4.83-8.02-5.42l-3.33-.38c-5.65-.64-9.77-3.26-9.77-8.75,0-6.29,5.6-9.82,12.53-9.82,5.04,0,8.85,1.49,11.9,3.62l-1.94,3.08Z"}),__jsx("path",{className:"cls-1",d:"m95.26,98.74h-3.52v-3.33c-1.77,2.29-4.49,3.78-8.18,3.78-6.29,0-11.19-4.92-11.19-11.66s4.9-11.64,11.19-11.64c3.69,0,6.41,1.51,8.18,3.78v-3.33h3.52v22.4Zm-19.3-11.21c0,4.64,3.26,8.35,8.02,8.35s7.97-3.6,7.97-8.35-3.31-8.33-7.97-8.33-8.02,3.71-8.02,8.33Z"}),__jsx("path",{className:"cls-1",d:"m140.78,84.86v13.88h-3.52v-12.72c0-4.26-2.37-6.76-6.48-6.76-3.76,0-6.86,2.6-6.86,6.86v12.63h-3.52v-12.72c0-4.26-2.37-6.76-6.46-6.76-3.76,0-6.86,2.6-6.86,6.86v12.63h-3.55v-22.4h3.5v3.19c1.82-2.67,4.8-3.64,7.54-3.64,3.9,0,6.95,1.77,8.4,4.71,1.8-3.48,5.3-4.71,8.44-4.71,5.56,0,9.37,3.55,9.37,8.96Z"}),__jsx("path",{className:"cls-1",d:"m168.73,87.46c0,.45-.02.92-.07,1.32h-17.95c.5,4.83,3.88,7.31,7.92,7.31,2.77,0,5.18-1.06,7.1-2.82l1.89,2.41c-2.79,2.67-5.91,3.5-9.2,3.5-6.62,0-11.33-4.71-11.33-11.64s4.73-11.66,11.12-11.66,10.48,4.75,10.53,11.57Zm-17.98-1.54h14.38c-.45-4.19-3.19-6.88-7-6.88-4.14,0-6.81,2.84-7.38,6.88Z"}),__jsx("path",{className:"cls-1",d:"m191.47,98.74h-3.55v-34.06h3.55v34.06Z"}),__jsx("path",{className:"cls-1",d:"m221.63,87.53c0,6.65-5.06,11.66-11.8,11.66s-11.78-5.01-11.78-11.66,5.04-11.64,11.78-11.64,11.8,5.01,11.8,11.64Zm-19.99,0c0,4.85,3.52,8.35,8.18,8.35s8.18-3.5,8.18-8.35-3.55-8.33-8.18-8.33-8.18,3.5-8.18,8.33Z"}),__jsx("path",{className:"cls-1",d:"m252.75,95.07l6.74-18.73h3.67l-8.28,22.4h-4.19l-6.69-18.61-6.67,18.61h-4.12l-8.28-22.4h3.76l6.69,18.71,6.67-18.71h3.97l6.72,18.73Z"}),__jsx("path",{className:"cls-1",d:"m303.5,87.53c0,6.74-4.9,11.66-11.19,11.66-3.69,0-6.39-1.49-8.16-3.76v12.77h-3.55v-31.86h3.55v3.31c1.77-2.27,4.47-3.76,8.16-3.76,6.29,0,11.19,4.92,11.19,11.64Zm-19.58,0c0,4.75,3.29,8.35,7.97,8.35s7.99-3.71,7.99-8.35-3.24-8.33-7.99-8.33-7.97,3.6-7.97,8.33Z"}),__jsx("path",{className:"cls-1",d:"m324.33,76.65l-.85,3.48c-1.09-.59-2.58-.9-3.88-.9-3.5,0-6.01,2.74-6.01,6.98v12.54h-3.52v-22.4h3.5v3.15c1.54-2.29,3.9-3.59,6.65-3.59,1.61,0,2.93.21,4.12.76Z"}),__jsx("path",{className:"cls-1",d:"m333.97,68.39c0,1.42-1.11,2.48-2.51,2.48s-2.48-1.06-2.48-2.48,1.06-2.51,2.48-2.51,2.51,1.09,2.51,2.51Zm-.73,30.34h-3.55v-22.4h3.55v22.4Z"}),__jsx("path",{className:"cls-1",d:"m359.7,79.42l-2.27,2.39c-1.68-1.63-3.69-2.6-6.12-2.6-4.49,0-7.9,3.5-7.9,8.33s3.41,8.35,7.9,8.35c2.44,0,4.61-1.09,6.2-2.63l2.2,2.41c-2.03,2.29-4.99,3.52-8.3,3.52-6.88,0-11.59-5.01-11.59-11.66s4.71-11.64,11.59-11.64c3.31,0,6.29,1.23,8.3,3.52Z"}),__jsx("path",{className:"cls-1",d:"m385.27,87.46c0,.45-.02.92-.07,1.32h-17.95c.5,4.83,3.88,7.31,7.92,7.31,2.77,0,5.18-1.06,7.1-2.82l1.89,2.41c-2.79,2.67-5.91,3.5-9.2,3.5-6.62,0-11.33-4.71-11.33-11.64s4.73-11.66,11.12-11.66,10.48,4.75,10.53,11.57Zm-17.98-1.54h14.38c-.45-4.19-3.19-6.88-7-6.88-4.14,0-6.81,2.84-7.38,6.88Z"})),__jsx("line",{id:"divider",className:"cls-3",x1:"1.09",y1:"45.4",x2:"421.03",y2:"45.4"}),__jsx("g",{id:"Subscription"},__jsx("path",{className:"cls-2",d:"m13.8,7.36c-1.5-.92-3.32-1.62-5.4-1.62s-3.65.84-3.65,2.29,1.65,1.82,3.93,2.21l1.08.18c3.4.56,6.07,2.01,6.07,5.34,0,4.21-3.7,6.21-7.8,6.21-2.89,0-5.99-.84-8.03-2.49l1.97-3.06c1.38,1.1,3.62,2.05,6.07,2.05,2.11,0,3.74-.83,3.74-2.3,0-1.32-1.39-1.81-4.04-2.23l-1.21-.19c-3.36-.53-5.81-2.01-5.81-5.46,0-3.97,3.54-6.04,7.59-6.04,2.67,0,4.89.6,7.28,2.03l-1.8,3.1Z"}),__jsx("path",{className:"cls-2",d:"m31.37,15.99c0,4.17-2.94,5.96-6.23,5.96s-6.25-1.8-6.25-5.96v-7.57h3.55v7.25c0,2.11,1.16,2.97,2.69,2.97s2.7-.86,2.7-2.97v-7.25h3.54v7.57Z"}),__jsx("path",{className:"cls-2",d:"m48.79,15.01c0,3.96-2.75,6.94-6.38,6.94-1.82,0-3.09-.73-3.95-1.8v1.46h-3.47V2.01h3.54v7.79c.86-1.03,2.1-1.73,3.87-1.73,3.65,0,6.4,2.98,6.4,6.94Zm-10.44,0c0,2.08,1.38,3.63,3.39,3.63s3.4-1.62,3.4-3.63-1.31-3.63-3.4-3.63-3.39,1.55-3.39,3.63Z"}),__jsx("path",{className:"cls-2",d:"m61.06,12.09c-1.05-.52-2.72-1.06-4.21-1.08-1.35,0-2.03.48-2.03,1.2,0,.76.95.95,2.15,1.13l1.17.18c2.86.44,4.45,1.71,4.45,3.95,0,2.72-2.23,4.48-6.06,4.48-1.8,0-4.15-.34-5.87-1.55l1.4-2.7c1.13.75,2.5,1.29,4.49,1.29,1.65,0,2.44-.46,2.44-1.24,0-.64-.67-.99-2.19-1.21l-1.08-.15c-3.05-.42-4.56-1.76-4.56-4,0-2.71,2.1-4.31,5.57-4.31,2.11,0,3.76.39,5.51,1.25l-1.2,2.76Z"}),__jsx("path",{className:"cls-2",d:"m76.85,10.56l-2.56,2.14c-.8-.86-1.66-1.32-2.82-1.32-1.84,0-3.31,1.44-3.31,3.63s1.46,3.63,3.29,3.63c1.14,0,2.12-.52,2.87-1.33l2.53,2.16c-1.24,1.59-3.09,2.48-5.29,2.48-4.21,0-7.02-2.94-7.02-6.94s2.82-6.94,7.02-6.94c2.21,0,4.07.9,5.28,2.49Z"}),__jsx("path",{className:"cls-2",d:"m88.44,8.35l-.53,3.53c-.58-.26-1.43-.42-2.15-.42-1.65,0-2.78,1.01-2.78,2.97v7.19h-3.55v-13.19h3.44v1.44c.83-1.24,2.1-1.8,3.72-1.8.76,0,1.36.11,1.85.29Z"}),__jsx("path",{className:"cls-2",d:"m94.89,4.1c0,1.28-.99,2.26-2.27,2.26s-2.26-.98-2.26-2.26.98-2.29,2.26-2.29,2.27,1.01,2.27,2.29Zm-.48,17.5h-3.55v-13.19h3.55v13.19Z"}),__jsx("path",{className:"cls-2",d:"m111.95,15.01c0,3.96-2.75,6.94-6.38,6.94-1.77,0-3.02-.69-3.88-1.71v6.82h-3.54V8.42h3.47v1.46c.86-1.08,2.12-1.81,3.93-1.81,3.65,0,6.4,2.98,6.4,6.94Zm-10.44,0c0,2.08,1.38,3.63,3.39,3.63s3.4-1.62,3.4-3.63-1.31-3.63-3.4-3.63-3.39,1.55-3.39,3.63Z"}),__jsx("path",{className:"cls-2",d:"m124.29,11.58h-4.78v4.82c0,1.65.87,2.25,1.97,2.25.84,0,1.76-.42,2.48-.86l1.31,2.78c-1.16.79-2.49,1.39-4.37,1.39-3.27,0-4.94-1.85-4.94-5.27v-5.1h-2.55v-3.16h2.55v-3.92h3.55v3.92h4.78v3.16Z"}),__jsx("path",{className:"cls-2",d:"m131.45,4.1c0,1.28-.99,2.26-2.27,2.26s-2.26-.98-2.26-2.26.98-2.29,2.26-2.29,2.27,1.01,2.27,2.29Zm-.48,17.5h-3.55v-13.19h3.55v13.19Z"}),__jsx("path",{className:"cls-2",d:"m148.15,15.01c0,3.97-3.04,6.94-7.15,6.94s-7.12-2.97-7.12-6.94,3.02-6.94,7.12-6.94,7.15,2.97,7.15,6.94Zm-10.64,0c0,2.14,1.5,3.63,3.5,3.63s3.51-1.5,3.51-3.63-1.51-3.63-3.51-3.63-3.5,1.5-3.5,3.63Z"}),__jsx("path",{className:"cls-2",d:"m163.52,13.21v8.4h-3.55v-7.25c0-1.91-.95-2.95-2.57-2.95-1.52,0-2.79.99-2.79,2.98v7.23h-3.55v-13.19h3.46v1.55c.94-1.4,2.38-1.91,3.88-1.91,2.99,0,5.13,2.08,5.13,5.15Z"}),__jsx("path",{className:"cls-2",d:"m175.71,13.76c0-3.62,2.94-6.56,6.56-6.56h4.71l-.38.38c-.51.51-.51,1.34,0,1.85.26.26.59.38.93.38s.67-.13.93-.38l2.63-2.63c.12-.12.22-.26.29-.43.13-.32.13-.68,0-1-.07-.16-.16-.3-.29-.43l-2.63-2.63c-.51-.51-1.34-.51-1.85,0-.51.51-.51,1.34,0,1.85l.38.38h-4.71c-5.07,0-9.19,4.12-9.19,9.19,0,3.09,1.54,5.95,4.11,7.65.22.14.47.22.72.22.42,0,.84-.21,1.09-.59.41-.6.24-1.42-.37-1.83-1.84-1.22-2.94-3.27-2.94-5.48v.04h0Z"}),__jsx("path",{className:"cls-2",d:"m195.23,6.1c-.6-.41-1.42-.24-1.83.37s-.24,1.42.37,1.83c1.84,1.22,2.94,3.27,2.94,5.48,0,3.62-2.94,6.56-6.56,6.56h-4.71l.38-.38c.51-.51.51-1.34,0-1.85s-1.34-.51-1.85,0l-2.63,2.63c-.12.12-.22.26-.29.43-.13.32-.13.68,0,1,.07.16.16.3.29.43l2.63,2.63c.26.26.59.38.93.38s.67-.13.93-.38c.51-.51.51-1.34,0-1.85l-.38-.38h4.71c5.07,0,9.19-4.12,9.19-9.19,0-3.09-1.54-5.95-4.11-7.65v-.04h-.01Z"})),__jsx("g",{id:"OneTime"},__jsx("path",{className:"cls-2",d:"m285.62,12.19c0,5.69-4.15,9.88-10.02,9.88s-10-4.19-10-9.88,4.14-9.88,10-9.88,10.02,4.19,10.02,9.88Zm-16.06,0c0,3.7,2.54,6.23,6.04,6.23s6.04-2.53,6.04-6.23-2.53-6.23-6.04-6.23-6.04,2.53-6.04,6.23Z"}),__jsx("path",{className:"cls-2",d:"m301.21,13.32v8.4h-3.55v-7.25c0-1.91-.95-2.95-2.57-2.95-1.52,0-2.79.99-2.79,2.98v7.23h-3.55v-13.19h3.46v1.55c.94-1.4,2.38-1.91,3.88-1.91,2.99,0,5.13,2.08,5.13,5.15Z"}),__jsx("path",{className:"cls-2",d:"m317.1,15.1c0,.41-.03.9-.07,1.2h-9.35c.38,1.91,1.72,2.74,3.39,2.74,1.14,0,2.38-.46,3.33-1.27l2.08,2.29c-1.5,1.37-3.4,2-5.62,2-4.04,0-6.85-2.75-6.85-6.9s2.72-6.98,6.67-6.98,6.4,2.82,6.41,6.93Zm-9.41-1.22h5.84c-.33-1.69-1.35-2.64-2.87-2.64-1.67,0-2.65,1.01-2.97,2.64Z"}),__jsx("path",{className:"cls-2",d:"m327.69,16.03h-8.04v-3.1h8.04v3.1Z"}),__jsx("path",{className:"cls-2",d:"m343.53,6.22h-5.91v15.5h-3.8V6.22h-5.91v-3.55h15.61v3.55Z"}),__jsx("path",{className:"cls-2",d:"m349.86,4.22c0,1.28-.99,2.26-2.27,2.26s-2.26-.98-2.26-2.26.98-2.29,2.26-2.29,2.27,1.01,2.27,2.29Zm-.48,17.5h-3.55v-13.19h3.55v13.19Z"}),__jsx("path",{className:"cls-2",d:"m374.48,13.32v8.4h-3.54v-7.25c0-1.91-.97-2.95-2.57-2.95s-2.79.99-2.79,2.98v7.23h-3.55v-7.25c0-1.91-.95-2.95-2.57-2.95-1.52,0-2.79.99-2.79,2.98v7.23h-3.55v-13.19h3.46v1.55c.94-1.4,2.38-1.91,3.88-1.91,1.91,0,3.47.86,4.36,2.26,1.02-1.67,2.75-2.26,4.48-2.26,3.1,0,5.2,2.08,5.2,5.15Z"}),__jsx("path",{className:"cls-2",d:"m390.37,15.1c0,.41-.03.9-.07,1.2h-9.35c.38,1.91,1.71,2.74,3.39,2.74,1.14,0,2.38-.46,3.33-1.27l2.08,2.29c-1.5,1.37-3.4,2-5.62,2-4.04,0-6.85-2.75-6.85-6.9s2.72-6.98,6.67-6.98,6.4,2.82,6.41,6.93Zm-9.41-1.22h5.84c-.33-1.69-1.35-2.64-2.87-2.64-1.67,0-2.65,1.01-2.97,2.64Z"}),__jsx("polygon",{id:"_",className:"cls-2",points:"411.23 23.53 411.23 13.73 421.03 13.73 421.03 9.81 411.23 9.81 411.23 0 407.17 0 407.17 9.81 397.5 9.81 397.5 13.73 407.17 13.73 407.17 23.53 411.23 23.53"}))))};PerksPricingExplainer.displayName="PerksPricingExplainer",PerksPricingExplainer.__docgenInfo={description:"",methods:[],displayName:"PerksPricingExplainer"};try{PerksPricingExplainer.displayName="PerksPricingExplainer",PerksPricingExplainer.__docgenInfo={description:"",displayName:"PerksPricingExplainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Graphic/Promos/PerksPricingPromo.tsx#PerksPricingExplainer"]={docgenInfo:PerksPricingExplainer.__docgenInfo,name:"PerksPricingExplainer",path:"src/components/Graphic/Promos/PerksPricingPromo.tsx#PerksPricingExplainer"})}catch(__react_docgen_typescript_loader_error){}var PerksPricingPromoOverlay_jsx=react.createElement,PerksPromo=function PerksPromo(props){var messages=[{message:"With Perks you get 25% off everything.",duration:2e3},{message:"Just have an active Auto-Delivery item and you're in!",duration:1200}],_useState=(0,react.useState)(messages[0].message),currentMessage=_useState[0],setCurrentMessage=_useState[1];(0,react.useEffect)((function(){var totalDuration=0,timers=messages.map((function(messageObj,index){return totalDuration+=messageObj.duration,setTimeout((function(){setCurrentMessage(messageObj.message)}),totalDuration)}));return function(){timers.forEach((function(timer){return clearTimeout(timer)}))}}),[]);return PerksPricingPromoOverlay_jsx(perks_pricing_promo_styled.fb,null,PerksPricingPromoOverlay_jsx("div",{className:"perks-logo"},PerksPricingPromoOverlay_jsx(perks_pricing_promo_styled.ew,null,PerksPricingPromoOverlay_jsx(Graphic.Z,{graphicName:"perks-logo-small"})),PerksPricingPromoOverlay_jsx("div",{className:"text-container"},function TypingMessage(message){return PerksPricingPromoOverlay_jsx(Typist.Z,{speed:"medium",message})}(currentMessage)),PerksPricingPromoOverlay_jsx(PerksPricingExplainer,null)))};PerksPromo.displayName="PerksPromo",PerksPromo.__docgenInfo={description:"",methods:[],displayName:"PerksPromo",props:{graphicName:{required:!0,tsType:{name:"string"},description:""}}};const PerksPricing_PerksPricingPromoOverlay=PerksPromo;try{PerksPricingPromoOverlay.displayName="PerksPricingPromoOverlay",PerksPricingPromoOverlay.__docgenInfo={description:"",displayName:"PerksPricingPromoOverlay",props:{graphicName:{defaultValue:null,description:"",name:"graphicName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/PerksPricingPromoOverlay.tsx#PerksPricingPromoOverlay"]={docgenInfo:PerksPricingPromoOverlay.__docgenInfo,name:"PerksPricingPromoOverlay",path:"src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/PerksPricingPromoOverlay.tsx#PerksPricingPromoOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ew:()=>AnimatedSvgContainer,fb:()=>PerksPromoStyled,wi:()=>AnimatedButton});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),_commonStyles_common_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),svgAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject||(_templateObject=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n"]))),slideInFromLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject2||(_templateObject2=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n"]))),slideInFromRight=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject3||(_templateObject3=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n"]))),buttonAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject4||(_templateObject4=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),PerksPromoStyled=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div(_templateObject5||(_templateObject5=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  ",";\n  ",";\n\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: var(--colorLightBeige);\n\n  .perks-logo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .text-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n    margin-top: 1.5rem;\n    color: var(--colorDarkRoast);\n    text-align: center;\n    padding: 0 15%;\n  }\n\n  .explainer-container {\n    animation: "," 0.5s ease-in-out forwards;\n    opacity: 0;\n    animation-delay: 5s;\n\n    #Subscription {\n      animation: "," 0.5s ease-in-out forwards, "," 0.5s ease-in-out forwards;\n    }\n\n    #OneTime {\n      animation: "," 0.5s ease-in-out forwards, "," 0.5s ease-in-out forwards;\n    }\n  }\n\n\n"])),_commonStyles_common_styled__WEBPACK_IMPORTED_MODULE_0__.oe,_commonStyles_common_styled__WEBPACK_IMPORTED_MODULE_0__.mZ,buttonAnimation,slideInFromLeft,buttonAnimation,slideInFromRight,buttonAnimation),AnimatedSvgContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div(_templateObject6||(_templateObject6=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  height: 25%;\n\n  .perks-logo-small {\n    height: 100%;\n    width: 100%;\n\n    .filled {\n      fill: ",";\n    }\n\n    .spark-1, .spark-2, .spark-3, .spark-4 {\n      opacity: 0;\n      animation: "," 0.25s ease-in-out forwards;\n    }\n\n    .spark-1 {\n      animation-delay: 0.9s;\n    }\n\n    .spark-2 {\n      animation-delay: 1s;\n    }\n\n    .spark-3 {\n      animation-delay: 1.1s;\n    }\n\n    .spark-4 {\n      animation-delay: 1.2s;\n    }\n\n  }\n\n\n  animation: "," 0.5s ease-in-out forwards, "," 0.5s ease-in-out forwards;\n\n\n\n"])),(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_3__.G)("perks-spiced-red"),buttonAnimation,svgAnimation,buttonAnimation),AnimatedButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div(_templateObject7||(_templateObject7=(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  \n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  left: 2rem;\n  @keyframes loadingAnimation {\n    from {\n      right: 100%;\n    }\n    to {\n      right: 1%;\n    }\n  }\n\n  .k-btn {\n    opacity: 0;\n    animation: "," 3s ease-in-out forwards;\n    animation-delay: 2s;\n    .expander {\n      opacity: 1;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      transition: none !important;\n      display: flex;\n      animation: loadingAnimation 6s ease-in-out forwards;\n      animation-delay: 2s;\n    }\n  }\n"])),buttonAnimation);try{PerksPromoStyled.displayName="PerksPromoStyled",PerksPromoStyled.__docgenInfo={description:"",displayName:"PerksPromoStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx#PerksPromoStyled"]={docgenInfo:PerksPromoStyled.__docgenInfo,name:"PerksPromoStyled",path:"src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx#PerksPromoStyled"})}catch(__react_docgen_typescript_loader_error){}try{AnimatedSvgContainer.displayName="AnimatedSvgContainer",AnimatedSvgContainer.__docgenInfo={description:"",displayName:"AnimatedSvgContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx#AnimatedSvgContainer"]={docgenInfo:AnimatedSvgContainer.__docgenInfo,name:"AnimatedSvgContainer",path:"src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx#AnimatedSvgContainer"})}catch(__react_docgen_typescript_loader_error){}try{AnimatedButton.displayName="AnimatedButton",AnimatedButton.__docgenInfo={description:"",displayName:"AnimatedButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx#AnimatedButton"]={docgenInfo:AnimatedButton.__docgenInfo,name:"AnimatedButton",path:"src/components/CLP/MemberPricing/PromoOverlay/PerksPricing/perks-pricing-promo.styled.tsx#AnimatedButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_commonStyles/common.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IC:()=>AnimFadeIn,g7:()=>absolutePositionStretch,H3:()=>attentionCTA,oe:()=>ctaColorStyles,Pp:()=>flexCentered,xI:()=>flexRow,mZ:()=>perksColorStyles});var _templateObject,_templateObject2,_templateObject3,common_styled_templateObject,common_styled_templateObject2,common_styled_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),fadeInAnim=((0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]))),(0,styled_components_browser_esm.F4)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])))),flexItem=((0,styled_components_browser_esm.F4)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  0% {\n    background-position: 0 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n\n"]))),(0,styled_components_browser_esm.iv)(common_styled_templateObject||(common_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n"])))),ctaColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject2||(common_styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  --colorBoldCTA: ",";\n  --colorCTAPrimary: ",";  \n  --colorDarkRoast: ",";\n  --colorDiscount : ",";\n  --colorKSK : ",";\n  --colorLatte : ",";\n  --colorLightCTA: ",";\n  --colorLightRoast: ",";  \n  \n  --colorMediumGrey : ",";\n  --colorMediumRoast : ",";\n  --colorOKStatus : ",";\n  --colorSecondaryGold : ","; \n   \n  --colorSepia : ","; \n \n  --colorLatte70 : ",";\n  --colorLatteMed : ",";\n  --colorSepia70 : ",";\n  --colorText: ",";\n"])),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("Bold-CTA"),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("discount"),(0,colorNameToValue.G)("KSK"),(0,colorNameToValue.G)("latte"),(0,colorNameToValue.G)("faintWarm"),(0,colorNameToValue.G)("light-roast"),(0,colorNameToValue.G)("medium-grey"),(0,colorNameToValue.G)("medium-roast"),(0,colorNameToValue.G)("OK-Status"),(0,colorNameToValue.G)("secondaryGold"),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("latte70"),(0,colorNameToValue.G)("latteMed"),(0,colorNameToValue.G)("sepia70"),(0,colorNameToValue.G)("text")),perksColorStyles=(0,styled_components_browser_esm.iv)(common_styled_templateObject3||(common_styled_templateObject3=(0,taggedTemplateLiteral.Z)(["\n--colorSpicedRed : ",";\n--colorLightBeige : ",";\n"])),(0,colorNameToValue.G)("perks-spiced-red"),(0,colorNameToValue.G)("perks-light-beige")),absolutePositionStretch=(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  inset: 0;\n"]))),flexRow=(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: row;\n"])),flexItem),flexCentered=((0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  flex-direction: column;\n"])),flexItem),(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  ",";\n  justify-content: center;\n  align-items: center;\n"])),flexItem)),attentionCTA=(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)([" \n  background: linear-gradient(-45deg,hsl(47 95% 80% / 1),hsl(47 95% 59% / 1),hsl(47 95% 80% / 1),hsl(47 95% 80% / 1));\n  background-size: 200% 265%;   \n"]))),AnimFadeIn=(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    animation: "," 1s ease-in-out forwards normal \n"])),fadeInAnim);(0,styled_components_browser_esm.F4)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)([" \n  0% {\n    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.56);\n  }\n  100% {\n    box-shadow: inset 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);\n  } \n"])))}}]);