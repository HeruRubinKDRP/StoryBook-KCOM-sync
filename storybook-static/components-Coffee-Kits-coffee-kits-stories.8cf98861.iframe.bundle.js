"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[9472],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Coffee Kits/coffee-kits.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>coffee_kits_stories});var _templateObject,_templateObject2,_templateObject3,option_selection_styled_templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fadeIn=(0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),StepContainer=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  animation: "," 1s ease-in-out;\n  margin-bottom: 20px;\n  height: 65vh;\n"])),fadeIn),StepsOutermostContainer=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\ndisplay: flex;\n  .option-selection-area{\n    text-align: center;\n    h1{\n        font-size: 3rem;\n      margin: 0;\n    }\n    h2{\n        font-size: 1.5rem;\n      margin: 0;\n    }\n  }\n  +\n  .selections-area{\n    display: flex;\n    flex-direction: row;\n  }\n\n"])));try{StepContainer.displayName="StepContainer",StepContainer.__docgenInfo={description:"",displayName:"StepContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Coffee Kits/coffee-kits.styled.tsx#StepContainer"]={docgenInfo:StepContainer.__docgenInfo,name:"StepContainer",path:"src/components/Coffee Kits/coffee-kits.styled.tsx#StepContainer"})}catch(__react_docgen_typescript_loader_error){}try{StepsOutermostContainer.displayName="StepsOutermostContainer",StepsOutermostContainer.__docgenInfo={description:"",displayName:"StepsOutermostContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Coffee Kits/coffee-kits.styled.tsx#StepsOutermostContainer"]={docgenInfo:StepsOutermostContainer.__docgenInfo,name:"StepsOutermostContainer",path:"src/components/Coffee Kits/coffee-kits.styled.tsx#StepsOutermostContainer"})}catch(__react_docgen_typescript_loader_error){}var OptionSelectionStyled=styled_components_browser_esm.ZP.div(option_selection_styled_templateObject||(option_selection_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  .titles-area{\n    display: flex;\n    flex-direction: column;\n  }\n  \n"])));try{OptionSelectionStyled.displayName="OptionSelectionStyled",OptionSelectionStyled.__docgenInfo={description:"",displayName:"OptionSelectionStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Coffee Kits/SecondaryComponents/option-selection-styled.tsx#OptionSelectionStyled"]={docgenInfo:OptionSelectionStyled.__docgenInfo,name:"OptionSelectionStyled",path:"src/components/Coffee Kits/SecondaryComponents/option-selection-styled.tsx#OptionSelectionStyled"})}catch(__react_docgen_typescript_loader_error){}var CoffeeKits_templateObject,KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),__jsx=react.createElement,OptionSelectionItem=function OptionSelectionItem(props){return __jsx(OptionSelectionStyled,{className:"option-selection-area"},__jsx("div",{className:"titles-area"},__jsx("h1",{className:"main-title"},props.mainTitle),__jsx("h2",null,props.secondaryTitle)),__jsx("div",{className:"main-image"},__jsx("img",{src:props.mainImage,alt:""})),__jsx(KButton.Z,{label:props.actionLabel,buttonType:"primary",actionFunc:props.primaryAction}))};OptionSelectionItem.displayName="OptionSelectionItem",OptionSelectionItem.__docgenInfo={description:"",methods:[],displayName:"OptionSelectionItem",props:{mainImage:{required:!0,tsType:{name:"string"},description:""},secondaryTitle:{required:!0,tsType:{name:"string"},description:""},actionLabel:{required:!0,tsType:{name:"string"},description:""},mainTitle:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{OptionSelectionItem.displayName="OptionSelectionItem",OptionSelectionItem.__docgenInfo={description:"",displayName:"OptionSelectionItem",props:{mainImage:{defaultValue:null,description:"",name:"mainImage",required:!0,type:{name:"string"}},secondaryTitle:{defaultValue:null,description:"",name:"secondaryTitle",required:!0,type:{name:"string"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!0,type:{name:"string"}},mainTitle:{defaultValue:null,description:"",name:"mainTitle",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Coffee Kits/SecondaryComponents/OptionSelectionItem.tsx#OptionSelectionItem"]={docgenInfo:OptionSelectionItem.__docgenInfo,name:"OptionSelectionItem",path:"src/components/Coffee Kits/SecondaryComponents/OptionSelectionItem.tsx#OptionSelectionItem"})}catch(__react_docgen_typescript_loader_error){}var CoffeeKits_jsx=react.createElement,Button=styled_components_browser_esm.ZP.button(CoffeeKits_templateObject||(CoffeeKits_templateObject=(0,taggedTemplateLiteral.Z)(["\n  margin-top: 10px;\n"]))),StepComponent=function StepComponent(){var _useState=(0,react.useState)(1),currentStep=_useState[0],setCurrentStep=_useState[1],stepRefs=[(0,react.useRef)(null),(0,react.useRef)(null),(0,react.useRef)(null)];return(0,react.useEffect)((function(){stepRefs[currentStep-1].current&&stepRefs[currentStep-1].current.scrollIntoView({behavior:"smooth"})}),[currentStep]),CoffeeKits_jsx(StepsOutermostContainer,null,CoffeeKits_jsx(StepContainer,{ref:stepRefs[0]},CoffeeKits_jsx("h2",null,"Coffee Explorer Kit"),CoffeeKits_jsx("div",{className:"selections-area"},CoffeeKits_jsx(OptionSelectionItem,{mainImage:"3",secondaryTitle:"Months",actionLabel:"",mainTitle:"3",description:"",primaryAction:function primaryAction(){return setCurrentStep(2)}}),CoffeeKits_jsx(OptionSelectionItem,{mainImage:"6",secondaryTitle:"Months",actionLabel:"",mainTitle:"6",description:"",primaryAction:function primaryAction(){return setCurrentStep(2)}}))),currentStep>=2&&CoffeeKits_jsx(StepContainer,{ref:stepRefs[1]},CoffeeKits_jsx("h2",null,"Step 2"),CoffeeKits_jsx(Button,{onClick:function onClick(){return setCurrentStep(3)}}),CoffeeKits_jsx(Button,{onClick:function onClick(){return setCurrentStep(3)}})),currentStep>=3&&CoffeeKits_jsx(StepContainer,{ref:stepRefs[2]},CoffeeKits_jsx("h2",null,"Step 2")))};StepComponent.displayName="StepComponent",StepComponent.__docgenInfo={description:"",methods:[],displayName:"StepComponent"};const Coffee_Kits_CoffeeKits=StepComponent;try{CoffeeKits.displayName="CoffeeKits",CoffeeKits.__docgenInfo={description:"",displayName:"CoffeeKits",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Coffee Kits/CoffeeKits.tsx#CoffeeKits"]={docgenInfo:CoffeeKits.__docgenInfo,name:"CoffeeKits",path:"src/components/Coffee Kits/CoffeeKits.tsx#CoffeeKits"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,coffee_kits_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const coffee_kits_stories={title:"Components/StepComponent",component:Coffee_Kits_CoffeeKits};var Template=function Template(args){return coffee_kits_stories_jsx(Coffee_Kits_CoffeeKits,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <StepComponent {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})}}]);