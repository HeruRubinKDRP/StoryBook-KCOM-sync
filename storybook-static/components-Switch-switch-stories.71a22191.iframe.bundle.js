"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[5660],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Switch/switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Switch/Switch.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Switch",component:_Switch__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{leftValue:{control:"text"},rightValue:{control:"text"},value:{control:"boolean"}}};var Template=function Template(args){return __jsx(_Switch__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={leftValue:"Off",rightValue:"On",value:!1,onChange:function onChange(){var _Default$args;console.log("Switch value changed to: ".concat((null===(_Default$args=Default.args)||void 0===_Default$args?void 0:_Default$args.value)||!1))}},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Switch {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Switch_Switch});var _templateObject,_templateObject2,_templateObject3,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  background-color: #e6e6e6;\n  border-radius: 20px;\n  cursor: pointer;\n  position: relative;\n"]))),ValueLabel=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  transition: background-color 0.2s ease-out, color 0.2s ease-out;\n  position: relative;\n  z-index: 1;\n  user-select: none;\n  &.selected{\n    color: white;\n  }\n   ;\n    &.right{\n      \n    }\n  \n  &.left{\n    \n  } \n"]))),Indicator=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  width: 50%;\n  height: 100%;\n  border-radius: 20px;\n  background-color: #0080ff;\n  transition: transform 0.2s ease-out;\n  position: absolute;\n  z-index: 0;\n  transform: ",";\n"])),(function(props){return props.selected?"translateX(0)":"translateX(100%)"}));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/switch.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Switch/switch.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{ValueLabel.displayName="ValueLabel",ValueLabel.__docgenInfo={description:"",displayName:"ValueLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/switch.styled.tsx#ValueLabel"]={docgenInfo:ValueLabel.__docgenInfo,name:"ValueLabel",path:"src/components/Switch/switch.styled.tsx#ValueLabel"})}catch(__react_docgen_typescript_loader_error){}try{Indicator.displayName="Indicator",Indicator.__docgenInfo={description:"",displayName:"Indicator",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/switch.styled.tsx#Indicator"]={docgenInfo:Indicator.__docgenInfo,name:"Indicator",path:"src/components/Switch/switch.styled.tsx#Indicator"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Switch=function Switch(_ref){var leftValue=_ref.leftValue,rightValue=_ref.rightValue,value=_ref.value,onChange=_ref.onChange,_useState=(0,react.useState)(value),isSelected=_useState[0],setIsSelected=_useState[1];return __jsx(Container,{className:"switch-container",onClick:function handleClick(){setIsSelected(!isSelected),onChange&&onChange(),console.log(isSelected)}},__jsx(ValueLabel,{className:"left ".concat(isSelected?"selected":"")},leftValue),__jsx(ValueLabel,{className:"right ".concat(isSelected?"":"selected")},rightValue),__jsx(Indicator,{selected:isSelected,className:"indicator"}))};Switch.displayName="Switch",Switch.__docgenInfo={description:"",methods:[],displayName:"Switch"};const Switch_Switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{leftValue:{defaultValue:null,description:"",name:"leftValue",required:!0,type:{name:"string"}},rightValue:{defaultValue:null,description:"",name:"rightValue",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);