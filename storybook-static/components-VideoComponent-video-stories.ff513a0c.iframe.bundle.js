"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[7560],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/VideoComponent/video.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Video__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/VideoComponent/Video.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Video",component:_Video__WEBPACK_IMPORTED_MODULE_2__.n};var Template=function Template(args){return __jsx(_Video__WEBPACK_IMPORTED_MODULE_2__.n,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={videoUrl:"https://sample-videos.com/video123.mp4",captions:[{startTime:0,endTime:10,text:"Caption 1"},{startTime:11,endTime:20,text:"Caption 2"}],isPlaying:!0,isMuted:!1},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Video {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/VideoComponent/Video.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Video});var _templateObject,KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),VideoStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n.play-again-button{\n  padding: 20%;\n}\n\n"])));try{VideoStyled.displayName="VideoStyled",VideoStyled.__docgenInfo={description:"",displayName:"VideoStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoComponent/Video.styles.tsx#VideoStyled"]={docgenInfo:VideoStyled.__docgenInfo,name:"VideoStyled",path:"src/components/VideoComponent/Video.styles.tsx#VideoStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,Video=function Video(props){var _useState=(0,react.useState)(!0),isPlaying=_useState[0],setIsPlaying=_useState[1],_useState2=(0,react.useState)(!1),isVideoEnded=_useState2[0],setIsVideoEnded=_useState2[1],_useState3=(0,react.useState)(props.isMuted),isMuted=_useState3[0],setIsMuted=_useState3[1],_useState4=(0,react.useState)(!1),captionVisible=_useState4[0],setCaptionVisible=_useState4[1],_useState5=(0,react.useState)(!1),setShowOverlay=(_useState5[0],_useState5[1]),videoRef=(0,react.useRef)(null),_useState6=(0,react.useState)(!1),isFullScreen=_useState6[0],setIsFullScreen=_useState6[1],_useState7=(0,react.useState)(""),setCaptionText=(_useState7[0],_useState7[1]),handleTimeUpdate=function handleTimeUpdate(){if(videoRef.current){var currentCaption=props.captions.find((function(caption){return caption.startTime<=videoRef.current.currentTime&&caption.endTime>videoRef.current.currentTime}));setCaptionText(currentCaption?currentCaption.text:"")}},handlePlay=function handlePlay(){setCaptionVisible(!0)},handlePause=function handlePause(){setCaptionVisible(!1)};(0,react.useEffect)((function(){if(videoRef.current)return videoRef.current.addEventListener("timeupdate",handleTimeUpdate),videoRef.current.addEventListener("play",handlePlay),videoRef.current.addEventListener("pause",handlePause),function(){videoRef.current.removeEventListener("timeupdate",handleTimeUpdate),videoRef.current.removeEventListener("play",handlePlay),videoRef.current.removeEventListener("pause",handlePause)}}),[]),(0,react.useEffect)((function(){if(videoRef.current)return videoRef.current.addEventListener("timeupdate",handleTimeUpdate),function(){videoRef.current.removeEventListener("timeupdate",handleTimeUpdate)}}),[]);return __jsx(VideoStyled,{className:"video-container".concat(isFullScreen?" fullscreen":"")},__jsx("video",{ref:videoRef,className:"user-training-imagery",src:props.videoUrl,preload:"auto",autoPlay:!0,loop:!1,muted:isMuted,onEnded:function handleVideoEnd(){setIsPlaying(!1),setIsVideoEnded(!0),setShowOverlay(!0)}}),captionVisible&&__jsx("div",{className:"caption-overlay"},"TODO make GSAP Typist"),__jsx("div",{className:"video-controls"},__jsx(KButton.Z,{label:"",classes:"".concat(isMuted?"volume-off":"volume-on"," volume-button"),iconStandard:"".concat(isMuted?"icon-volume-off":"icon-volume-on"),buttonType:"secondary",iconPlacement:"after-label",actionFunc:function actionFunc(){return function toggleMute(){videoRef.current&&(videoRef.current.muted=!videoRef.current.muted,props.manageIsPlaying&&props.manageIsPlaying(),setIsMuted(videoRef.current.muted),props.manageIsMuted&&props.manageIsMuted())}()},buttonWidth:"fit-to-content"}),__jsx(KButton.Z,{label:"",classes:"".concat(captionVisible?"captions-on":"captions-off"," captions-button"),iconStandard:"".concat(captionVisible?"closed-captioning-icon":"closed-captioning-off-icon"),buttonType:"secondary",iconPlacement:"after-label",actionFunc:function actionFunc(){return setCaptionVisible(!captionVisible)},buttonWidth:"fit-to-content"}),__jsx(KButton.Z,{label:"",classes:"full-button",iconStandard:"icon-expand",buttonType:"secondary",iconPlacement:"after-label",actionFunc:function actionFunc(){return function toggleFullScreen(){videoRef.current&&setIsFullScreen(!isFullScreen)}()},buttonWidth:"fit-to-content"})),!isVideoEnded&&__jsx(KButton.Z,{label:"",classes:"".concat(isPlaying?"playing":"paused"," play-toggle-button"),iconStandard:"".concat(isPlaying?"none":"icon-pause"),buttonType:"secondary",iconPlacement:"after-label",actionFunc:function actionFunc(){return function togglePlay(){videoRef.current&&(videoRef.current.paused?(videoRef.current.play(),setIsPlaying(!0)):(videoRef.current.pause(),setIsPlaying(!1)))}()},buttonWidth:"fit-to-content"}),isVideoEnded&&isVideoEnded&&__jsx("div",{className:"video-overlay",onClick:function handleOverlayClick(){setShowOverlay(!1),function handlePlayAgain(){videoRef.current&&(setIsPlaying(!0),videoRef.current.currentTime=0,videoRef.current.play(),setIsVideoEnded(!1))}()}},__jsx(KButton.Z,{label:"",classes:"".concat(isPlaying?"playing":"paused"," play-toggle-button play-again-button"),buttonType:"secondary",iconStandard:"replay-icon",iconPlacement:"after-label",buttonWidth:"fit-to-content",actionFunc:props.manageIsPlaying})))};Video.displayName="Video",Video.__docgenInfo={description:"",methods:[],displayName:"Video",props:{videoUrl:{required:!0,tsType:{name:"string"},description:""},captions:{required:!0,tsType:{name:"Array",elements:[{name:"Caption"}],raw:"Caption[]"},description:""},isPlaying:{required:!0,tsType:{name:"boolean"},description:""},manageIsPlaying:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isMuted:{required:!0,tsType:{name:"boolean"},description:""},manageIsMuted:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{Video.displayName="Video",Video.__docgenInfo={description:"",displayName:"Video",props:{videoUrl:{defaultValue:null,description:"",name:"videoUrl",required:!0,type:{name:"string"}},captions:{defaultValue:null,description:"",name:"captions",required:!0,type:{name:"Caption[]"}},isPlaying:{defaultValue:null,description:"",name:"isPlaying",required:!0,type:{name:"boolean"}},manageIsPlaying:{defaultValue:null,description:"",name:"manageIsPlaying",required:!1,type:{name:"(() => void)"}},isMuted:{defaultValue:null,description:"",name:"isMuted",required:!0,type:{name:"boolean"}},manageIsMuted:{defaultValue:null,description:"",name:"manageIsMuted",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoComponent/Video.tsx#Video"]={docgenInfo:Video.__docgenInfo,name:"Video",path:"src/components/VideoComponent/Video.tsx#Video"})}catch(__react_docgen_typescript_loader_error){}}}]);