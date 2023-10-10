"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[7794],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/ContentStories/ContentStoryItem/content-story.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,MinimalExample:()=>MinimalExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BasicExample$paramet,_BasicExample$paramet2,_MinimalExample$param,_MinimalExample$param2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ContentStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ContentStories/ContentStoryItem/ContentStory.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Content Story Item",component:_ContentStory__WEBPACK_IMPORTED_MODULE_2__.n,argTypes:{}};var Template=function Template(args){return __jsx(_ContentStory__WEBPACK_IMPORTED_MODULE_2__.n,args)};Template.displayName="Template";var BasicExample=Template.bind({});BasicExample.args={articleTitle:"Our Commitment to Sustainability",linkToArticle:"",articleImagePath:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",itemSize:"small",tags:["sustainability","recycling","environmental"],articleDescription:"Chevron’s commitment to sustainability has never been stronger. Our approach is integrated throughout our business to strive to protect the environment, empower people, and get results the right way—today and tomorrow."};var MinimalExample=Template.bind({});MinimalExample.args={articleTitle:"Our Commitment to Sustainability",linkToArticle:"",articleImagePath:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",itemSize:"small",tags:["sustainability","recycling","environmental"]},BasicExample.parameters=_objectSpread(_objectSpread({},BasicExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicExample$paramet=BasicExample.parameters)||void 0===_BasicExample$paramet?void 0:_BasicExample$paramet.docs),{},{source:_objectSpread({originalSource:"args => <ContentStory {...args} />"},null===(_BasicExample$paramet2=BasicExample.parameters)||void 0===_BasicExample$paramet2||null===(_BasicExample$paramet2=_BasicExample$paramet2.docs)||void 0===_BasicExample$paramet2?void 0:_BasicExample$paramet2.source)})}),MinimalExample.parameters=_objectSpread(_objectSpread({},MinimalExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MinimalExample$param=MinimalExample.parameters)||void 0===_MinimalExample$param?void 0:_MinimalExample$param.docs),{},{source:_objectSpread({originalSource:"args => <ContentStory {...args} />"},null===(_MinimalExample$param2=MinimalExample.parameters)||void 0===_MinimalExample$param2||null===(_MinimalExample$param2=_MinimalExample$param2.docs)||void 0===_MinimalExample$param2?void 0:_MinimalExample$param2.source)})})},"./src/components/ContentStories/ContentStoryItem/ContentStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ContentStory});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ContentStoryStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\n\n"])));try{ContentStoryStyled.displayName="ContentStoryStyled",ContentStoryStyled.__docgenInfo={description:"",displayName:"ContentStoryStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentStories/ContentStoryItem/content-story.styled.tsx#ContentStoryStyled"]={docgenInfo:ContentStoryStyled.__docgenInfo,name:"ContentStoryStyled",path:"src/components/ContentStories/ContentStoryItem/content-story.styled.tsx#ContentStoryStyled"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,ContentStory=function ContentStory(props){return __jsx(ContentStoryStyled,{className:"content-story-item ".concat(props.itemSize)},__jsx("div",{className:"story-thumb ".concat(props.itemSize),style:{backgroundImage:'url("'.concat(props.articleImagePath,'")')}}),function getTags(){if(props.tags){for(var tags=[],_loop=function _loop(i){var name=props.tags[i];tags.push(__jsx("a",{className:"tag-item",onPointerUp:function onPointerUp(){return function handleTagAction(index,tagName){props.tagFunction&&(console.log(index,tagName),props.tagFunction(index))}(i,name)}},props.tags[i]))},i=0;i<props.tags.length;i++)_loop(i);return __jsx("div",{className:"tags"},tags)}}(),__jsx("h2",null,props.articleTitle),function getDescription(){if(props.articleDescription)return __jsx("p",{className:"description"},props.articleDescription)}(),__jsx("div",{className:"hover-panel"}))};ContentStory.displayName="ContentStory",ContentStory.__docgenInfo={description:"",methods:[],displayName:"ContentStory",props:{articleTitle:{required:!0,tsType:{name:"string"},description:""},articleDescription:{required:!1,tsType:{name:"string"},description:""},articleImagePath:{required:!0,tsType:{name:"string"},description:""},linkToArticle:{required:!0,tsType:{name:"string"},description:""},itemSize:{required:!0,tsType:{name:"union",raw:'"hero" | "small"',elements:[{name:"literal",value:'"hero"'},{name:"literal",value:'"small"'}]},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tagFunction:{required:!1,tsType:{name:"Function"},description:""}}};try{ContentStory.displayName="ContentStory",ContentStory.__docgenInfo={description:"",displayName:"ContentStory",props:{articleTitle:{defaultValue:null,description:"",name:"articleTitle",required:!0,type:{name:"string"}},articleDescription:{defaultValue:null,description:"",name:"articleDescription",required:!1,type:{name:"string"}},articleImagePath:{defaultValue:null,description:"",name:"articleImagePath",required:!0,type:{name:"string"}},linkToArticle:{defaultValue:null,description:"",name:"linkToArticle",required:!0,type:{name:"string"}},itemSize:{defaultValue:null,description:"",name:"itemSize",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"hero"'}]}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"string[]"}},tagFunction:{defaultValue:null,description:"",name:"tagFunction",required:!1,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentStories/ContentStoryItem/ContentStory.tsx#ContentStory"]={docgenInfo:ContentStory.__docgenInfo,name:"ContentStory",path:"src/components/ContentStories/ContentStoryItem/ContentStory.tsx#ContentStory"})}catch(__react_docgen_typescript_loader_error){}}}]);