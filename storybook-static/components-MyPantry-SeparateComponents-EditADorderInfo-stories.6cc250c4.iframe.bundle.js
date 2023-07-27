"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[5938],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/MyPantry/SeparateComponents/EditADorderInfo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditAdOrderInfoExample:()=>EditAdOrderInfoExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _EditAdOrderInfoExamp,_EditAdOrderInfoExamp2,_EditAdOrderInfoExamp3,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_EditADorderInfo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/MyPantry/SeparateComponents/EditADorderInfo.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"WIP /MyPantry Edit AD Order Info",component:_EditADorderInfo__WEBPACK_IMPORTED_MODULE_2__.V,argTypes:{DeliveryName:{control:"text"},Frequency:{control:"text"},ProcessDate:{control:"text"}}};var Template=function Template(args){return __jsx(_EditADorderInfo__WEBPACK_IMPORTED_MODULE_2__.V,args)};Template.displayName="Template";var EditAdOrderInfoExample=Template.bind({});EditAdOrderInfoExample.args={DeliveryName:"Delivery Name",Frequency:"Every 4 weeks",ProcessDate:"May2, 2023"},EditAdOrderInfoExample.parameters=_objectSpread(_objectSpread({},EditAdOrderInfoExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EditAdOrderInfoExamp=EditAdOrderInfoExample.parameters)||void 0===_EditAdOrderInfoExamp?void 0:_EditAdOrderInfoExamp.docs),{},{source:_objectSpread({originalSource:"args => <EditADorderInfo {...args} />"},null===(_EditAdOrderInfoExamp2=EditAdOrderInfoExample.parameters)||void 0===_EditAdOrderInfoExamp2||null===(_EditAdOrderInfoExamp3=_EditAdOrderInfoExamp2.docs)||void 0===_EditAdOrderInfoExamp3?void 0:_EditAdOrderInfoExamp3.source)})})},"./src/components/MyPantry/SeparateComponents/EditADorderInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>EditADorderInfo});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),EditADorderInfoStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(['\n  text-align:center;\n  h1 {\n    font-family: "Mark OT", sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n    color: #3B2B2F;\n    color: #333;\n    padding: 0 0 10px 0;\n  }\n\n  h2 {\n    font-family: "Mark OT", sans-serif;\n    font-weight: 800;\n    font-size: 18px;\n    color: #3B2B2F;\n    color: #333;\n    margin: 0 0 30px 0;\n  }\n  .DeliveryName {\n    font-family: "Mark OT", sans-serif;\n    font-weight: 800;\n    font-size: 24px;\n    background-color: rgb(236, 233, 228);\n    margin: 0 0 30px 0;\n    padding: 10px;\n    border-radius: 10vw;\n  }\n  .Frequency {\n    font-family: "Mark OT", sans-serif;\n    font-weight: 800;\n    font-size: 24px;\n    background-color: rgb(236, 233, 228);\n    margin: 0 0 30px 0;\n    padding: 10px;\n    border-radius: 10vw;\n  }\n  .ProcessDate {\n    font-family: "Mark OT", sans-serif;\n    font-weight: 800;\n    font-size: 24px;\n    background-color: rgb(236, 233, 228);\n    margin: 0 0 30px 0;\n    padding: 10px;\n    border-radius: 10vw;\n  }\n'])));try{EditADorderInfoStyled.displayName="EditADorderInfoStyled",EditADorderInfoStyled.__docgenInfo={description:"",displayName:"EditADorderInfoStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MyPantry/SeparateComponents/EditADorderInfoStyled.tsx#EditADorderInfoStyled"]={docgenInfo:EditADorderInfoStyled.__docgenInfo,name:"EditADorderInfoStyled",path:"src/components/MyPantry/SeparateComponents/EditADorderInfoStyled.tsx#EditADorderInfoStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,EditADorderInfo=function EditADorderInfo(props){return __jsx(EditADorderInfoStyled,null,__jsx("h1",null,"Delivery Name"),__jsx("h2",{className:"DeliveryName"},props.DeliveryName),__jsx("h1",null,"Frequency"),__jsx("h2",{className:"Frequency"},props.Frequency),__jsx("h1",null,"Process Date"),__jsx("h2",{className:"ProcessDate"},props.ProcessDate))};EditADorderInfo.displayName="EditADorderInfo",EditADorderInfo.__docgenInfo={description:"",methods:[],displayName:"EditADorderInfo",props:{DeliveryName:{required:!0,tsType:{name:"string"},description:""},Frequency:{required:!0,tsType:{name:"string"},description:""},ProcessDate:{required:!0,tsType:{name:"string"},description:""}}};try{EditADorderInfo.displayName="EditADorderInfo",EditADorderInfo.__docgenInfo={description:"",displayName:"EditADorderInfo",props:{DeliveryName:{defaultValue:null,description:"",name:"DeliveryName",required:!0,type:{name:"string"}},Frequency:{defaultValue:null,description:"",name:"Frequency",required:!0,type:{name:"string"}},ProcessDate:{defaultValue:null,description:"",name:"ProcessDate",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MyPantry/SeparateComponents/EditADorderInfo.tsx#EditADorderInfo"]={docgenInfo:EditADorderInfo.__docgenInfo,name:"EditADorderInfo",path:"src/components/MyPantry/SeparateComponents/EditADorderInfo.tsx#EditADorderInfo"})}catch(__react_docgen_typescript_loader_error){}}}]);