"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[1136],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Animated Effects/CardFlip/card-flip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CardFlip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Animated Effects/CardFlip/CardFlip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Animated/CardFlip Flip",component:_CardFlip__WEBPACK_IMPORTED_MODULE_2__.Z};var demoFrontContent=__jsx("div",null,"Front content"),demoBackContent=__jsx("div",null,"Back content"),Template=function Template(args){return __jsx("div",{style:{padding:"15%"}},__jsx(_CardFlip__WEBPACK_IMPORTED_MODULE_2__.Z,{frontContent:demoFrontContent,backContent:demoBackContent,sideShowing:"front"}))};Template.displayName="Template";var Default=Template.bind({});Default.args={frontContent:demoFrontContent,backContent:demoBackContent},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div style={{\n  padding: "15%"\n}}>\n        <CardFlip frontContent={demoFrontContent} backContent={demoBackContent} sideShowing="front" />\n    </div>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/Animated Effects/CardFlip/CardFlip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardFlip_CardFlip});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),CardContainer=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --overallWidth: ",";\n  --overallHeight: ",";\n  --spacingLarge: calc(var(--overallWidth) * 0.008 + 8px);\n  --ctaButtonHeight: calc(var(--spacingLarge) * 2);\n  --featureBulletHeight : calc(var(--overallHeight) * 0.3 * 0.5) !important;\n  perspective: 1000px;\n  min-width: 200px; // Adjust the card width as needed\n  min-height: 300px; // Adjust the card height as needed\n  height: 100%;\n  width: 100%;\n  position: relative; \n  \n  .feature-bullet-container{\n    height: var(--featureBulletHeight)!important;\n    width:  var(--featureBulletHeight) !important; \n  }\n  \n  .cta-container{\n    display: grid;\n    grid-template-columns: 1fr 0.25fr ;\n    grid-template-rows: auto;\n    grid-gap: calc(var(--ctaButtonHeight) * 0.2 );\n    align-items: end;\n    bottom: calc(var(--ctaButtonHeight) ) !important;\n    position: absolute;\n    width: 100%;\n    height: calc(var(--ctaButtonHeight) * 3) !important;\n    padding: 0 5% 0 5%;\n    .flip-btn{\n      grid-column: 1 / 1;\n      grid-row: 1 / 1;\n    }\n    .cta-main{\n      grid-column: 2 / 2;\n      grid-row: 1 / 1; \n    }\n  }\n  \n   \n  \n"])),(function(props){return props.overallWidth+"px"}),(function(props){return props.overallHeight+"px"})),CardInner=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  transform: ",";\n  transform-style: preserve-3d;\n  transition: transform 0.8s;\n  transform-origin: center center; // adjust the transform-origin \n  width: 100%;\n  height: 100%;\n  \n\n  .card-front, .card-back{\n    height: 100%; \n  }\n  \n  .backing{\n    position: absolute;\n    inset: 0;\n    background-color: #fff;\n  }\n"])),(function(_ref){return _ref.isFlipped?"rotateY(180deg)":"rotateY(0deg)"})),CardFace=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  \n"]))),Front=(0,styled_components_browser_esm.ZP)(CardFace)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    transform: rotateY(0deg);\n"]))),Back=(0,styled_components_browser_esm.ZP)(CardFace)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  transform: rotateY(180deg);\n  \n"])));try{CardContainer.displayName="CardContainer",CardContainer.__docgenInfo={description:"",displayName:"CardContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},overallHeight:{defaultValue:null,description:"",name:"overallHeight",required:!0,type:{name:"number"}},overallWidth:{defaultValue:null,description:"",name:"overallWidth",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/CardFlip/card-flip.styled.tsx#CardContainer"]={docgenInfo:CardContainer.__docgenInfo,name:"CardContainer",path:"src/components/Animated Effects/CardFlip/card-flip.styled.tsx#CardContainer"})}catch(__react_docgen_typescript_loader_error){}try{CardInner.displayName="CardInner",CardInner.__docgenInfo={description:"",displayName:"CardInner",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},isFlipped:{defaultValue:null,description:"",name:"isFlipped",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/CardFlip/card-flip.styled.tsx#CardInner"]={docgenInfo:CardInner.__docgenInfo,name:"CardInner",path:"src/components/Animated Effects/CardFlip/card-flip.styled.tsx#CardInner"})}catch(__react_docgen_typescript_loader_error){}try{CardFace.displayName="CardFace",CardFace.__docgenInfo={description:"",displayName:"CardFace",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/CardFlip/card-flip.styled.tsx#CardFace"]={docgenInfo:CardFace.__docgenInfo,name:"CardFace",path:"src/components/Animated Effects/CardFlip/card-flip.styled.tsx#CardFace"})}catch(__react_docgen_typescript_loader_error){}try{Front.displayName="Front",Front.__docgenInfo={description:"",displayName:"Front",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/CardFlip/card-flip.styled.tsx#Front"]={docgenInfo:Front.__docgenInfo,name:"Front",path:"src/components/Animated Effects/CardFlip/card-flip.styled.tsx#Front"})}catch(__react_docgen_typescript_loader_error){}try{Back.displayName="Back",Back.__docgenInfo={description:"",displayName:"Back",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/CardFlip/card-flip.styled.tsx#Back"]={docgenInfo:Back.__docgenInfo,name:"Back",path:"src/components/Animated Effects/CardFlip/card-flip.styled.tsx#Back"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),__jsx=react.createElement,CardFlip=function CardFlip(_ref){var flipToBackButtonLabel=_ref.flipToBackButtonLabel,flipToBackButtonIcon=_ref.flipToBackButtonIcon,flipToFrontButtonLabel=_ref.flipToFrontButtonLabel,flipToFrontButtonIcon=_ref.flipToFrontButtonIcon,sideShowing=_ref.sideShowing,frontContent=_ref.frontContent,backContent=_ref.backContent,classes=_ref.classes,_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),isInitialized=_React$useState2[0],setIsInitialized=_React$useState2[1],_React$useState3=react.useState(sideShowing),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),isFlipped=_React$useState4[0],setIsFlipped=_React$useState4[1],_useResizeDetector=(0,index_esm.NB)({refreshMode:"debounce",refreshRate:100,refreshOptions:{leading:!0,trailing:!1},handleHeight:!1,skipOnMount:!1,onResize:function onResize(){}}),width=_useResizeDetector.width,height=_useResizeDetector.height,ref=_useResizeDetector.ref;react.useEffect((function(){setIsInitialized(!0)}),[]),react.useEffect((function(){isInitialized&&setIsFlipped(sideShowing)}),[sideShowing,isInitialized]);var handleFlip=function handleFlip(){setIsFlipped((function(prev){return"front"===prev?"back":"front"}))};return __jsx(CardContainer,{ref,className:"product-card ".concat(classes),overallWidth:null!=width?width:0,overallHeight:null!=height?height:0},__jsx(CardInner,{isFlipped:"front"!==isFlipped},__jsx(Front,{className:"card-front"},frontContent,__jsx("div",{className:"cta-container"},__jsx(KButton.Z,{transitionType:"expand-bg",classes:"flip-btn",buttonWidth:"fit-to-content",label:null!=flipToBackButtonLabel?flipToBackButtonLabel:"Features",iconStandard:null!=flipToBackButtonIcon?flipToBackButtonIcon:"info-icon",iconPlacement:"after-label",buttonType:"primary",actionFunc:handleFlip}))),__jsx(Back,{className:"card-back"},backContent,__jsx("div",{className:"cta-container"},__jsx(KButton.Z,{transitionType:"expand-bg",classes:"flip-btn",buttonWidth:"fit-to-content",label:null!=flipToFrontButtonLabel?flipToFrontButtonLabel:"Back",iconStandard:null!=flipToFrontButtonIcon?flipToFrontButtonIcon:"chevron-right",iconPlacement:"after-label",buttonType:"primary",actionFunc:handleFlip})))))};CardFlip.displayName="CardFlip",CardFlip.__docgenInfo={description:"",methods:[],displayName:"CardFlip"};const CardFlip_CardFlip=CardFlip;try{CardFlip.displayName="CardFlip",CardFlip.__docgenInfo={description:"",displayName:"CardFlip",props:{sideShowing:{defaultValue:null,description:"",name:"sideShowing",required:!0,type:{name:"enum",value:[{value:'"front"'},{value:'"back"'}]}},frontContent:{defaultValue:null,description:"",name:"frontContent",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},backContent:{defaultValue:null,description:"",name:"backContent",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},flipToBackButtonLabel:{defaultValue:null,description:"",name:"flipToBackButtonLabel",required:!1,type:{name:"string"}},flipToBackButtonIcon:{defaultValue:null,description:"",name:"flipToBackButtonIcon",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"app-on-mobile"'},{value:'"icon-shipping-truck"'},{value:'"icon-favorite"'},{value:'"logo"'},{value:'"close"'},{value:'"icon-add"'},{value:'"icon-cart"'},{value:'"icon-menu"'},{value:'"chevron-down"'},{value:'"chevron-right"'},{value:'"chevron-left"'},{value:'"chevron-up"'},{value:'"icon-brand-mug"'},{value:'"icon-hot-cup"'},{value:'"icon-orders-box"'},{value:'"icon-messages"'},{value:'"icon-settings"'},{value:'"icon-account"'},{value:'"icon-pod-logo"'},{value:'"icon-checkmark"'},{value:'"info-icon"'},{value:'"checkmark-circled"'},{value:'"delivery-truck"'},{value:'"icon-pod-filled"'},{value:'"scheduled-logo"'},{value:'"SMART-logo"'},{value:'"icon-boxes"'},{value:'"half-circle"'},{value:'"logo-you-also-brewed"'},{value:'"add-to-order"'},{value:'"icon-order-details"'},{value:'"carat-pointing-up"'},{value:'"carat-pointing-down"'},{value:'"carat-pointing-left"'},{value:'"carat-pointing-right"'},{value:'"icon-star"'},{value:'"icon-coffee-foam"'},{value:'"icon-pods"'},{value:'"barista-mode"'},{value:'"milk-frother"'},{value:'"ultimate-customization"'},{value:'"multistream"'},{value:'"brew-id"'},{value:'"icon-wifi"'},{value:'"pod-and-shot"'},{value:'"specialty-beverage"'},{value:'"error-notification"'},{value:'"plus-icon"'},{value:'"minus-icon"'},{value:'"launch-pop-up"'},{value:'"icon-free-shipping"'},{value:'"hollow-star"'},{value:'"frother-icon"'},{value:'"clock-icon"'},{value:'"star-full"'},{value:'"star-half"'},{value:'"star-quarter"'},{value:'"star-three-quarters"'},{value:'"circle"'},{value:'"circle-and-ring"'},{value:'"banner-tail"'},{value:'"tri-bot-l"'},{value:'"icon-savings"'},{value:'"icon-schedule"'},{value:'"cup-size"'},{value:'"water-drop"'},{value:'"icon-cup"'},{value:'"icon-iced-coffee"'},{value:'"play-icon"'},{value:'"icon-present"'},{value:'"icon-support"'},{value:'"icon-deal-tag"'},{value:'"pointer-up"'},{value:'"icon-envelope"'},{value:'"perks-logo"'},{value:'"free-shipping-truck"'},{value:'"icon-volume-on"'},{value:'"icon-volume-off"'},{value:'"icon-pause"'},{value:'"icon-play"'},{value:'"icon-expand"'},{value:'"closed-captioning-icon"'},{value:'"closed-captioning-off-icon"'},{value:'"replay-icon"'},{value:'"icon-AD-Delivery"'},{value:'"icon-product-canceled-OOO"'},{value:'"remove-icon"'},{value:'"icon_Edit_delivery"'},{value:'"icon-pause-item"'},{value:'"icon-swap-item"'},{value:'"icon-shipping-truck-no-logo"'},{value:'"icon-backup-product"'},{value:'"icon-search"'},{value:'"indicator-trapezoid"'},{value:'"icon-filters"'},{value:'"icon-images"'},{value:'"icon-features"'},{value:'"icon-space-saver"'},{value:'"icon-stop-watch"'},{value:'"icon-bagged-and-pod"'},{value:'"icon-subscribe"'},{value:'"perks-logo-small"'},{value:'"logo-keurig-circled"'},{value:'"icon-user"'},{value:'"action-arrow"'},{value:'"send-icon"'}]}},flipToFrontButtonLabel:{defaultValue:null,description:"",name:"flipToFrontButtonLabel",required:!1,type:{name:"string"}},flipToFrontButtonIcon:{defaultValue:null,description:"",name:"flipToFrontButtonIcon",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"app-on-mobile"'},{value:'"icon-shipping-truck"'},{value:'"icon-favorite"'},{value:'"logo"'},{value:'"close"'},{value:'"icon-add"'},{value:'"icon-cart"'},{value:'"icon-menu"'},{value:'"chevron-down"'},{value:'"chevron-right"'},{value:'"chevron-left"'},{value:'"chevron-up"'},{value:'"icon-brand-mug"'},{value:'"icon-hot-cup"'},{value:'"icon-orders-box"'},{value:'"icon-messages"'},{value:'"icon-settings"'},{value:'"icon-account"'},{value:'"icon-pod-logo"'},{value:'"icon-checkmark"'},{value:'"info-icon"'},{value:'"checkmark-circled"'},{value:'"delivery-truck"'},{value:'"icon-pod-filled"'},{value:'"scheduled-logo"'},{value:'"SMART-logo"'},{value:'"icon-boxes"'},{value:'"half-circle"'},{value:'"logo-you-also-brewed"'},{value:'"add-to-order"'},{value:'"icon-order-details"'},{value:'"carat-pointing-up"'},{value:'"carat-pointing-down"'},{value:'"carat-pointing-left"'},{value:'"carat-pointing-right"'},{value:'"icon-star"'},{value:'"icon-coffee-foam"'},{value:'"icon-pods"'},{value:'"barista-mode"'},{value:'"milk-frother"'},{value:'"ultimate-customization"'},{value:'"multistream"'},{value:'"brew-id"'},{value:'"icon-wifi"'},{value:'"pod-and-shot"'},{value:'"specialty-beverage"'},{value:'"error-notification"'},{value:'"plus-icon"'},{value:'"minus-icon"'},{value:'"launch-pop-up"'},{value:'"icon-free-shipping"'},{value:'"hollow-star"'},{value:'"frother-icon"'},{value:'"clock-icon"'},{value:'"star-full"'},{value:'"star-half"'},{value:'"star-quarter"'},{value:'"star-three-quarters"'},{value:'"circle"'},{value:'"circle-and-ring"'},{value:'"banner-tail"'},{value:'"tri-bot-l"'},{value:'"icon-savings"'},{value:'"icon-schedule"'},{value:'"cup-size"'},{value:'"water-drop"'},{value:'"icon-cup"'},{value:'"icon-iced-coffee"'},{value:'"play-icon"'},{value:'"icon-present"'},{value:'"icon-support"'},{value:'"icon-deal-tag"'},{value:'"pointer-up"'},{value:'"icon-envelope"'},{value:'"perks-logo"'},{value:'"free-shipping-truck"'},{value:'"icon-volume-on"'},{value:'"icon-volume-off"'},{value:'"icon-pause"'},{value:'"icon-play"'},{value:'"icon-expand"'},{value:'"closed-captioning-icon"'},{value:'"closed-captioning-off-icon"'},{value:'"replay-icon"'},{value:'"icon-AD-Delivery"'},{value:'"icon-product-canceled-OOO"'},{value:'"remove-icon"'},{value:'"icon_Edit_delivery"'},{value:'"icon-pause-item"'},{value:'"icon-swap-item"'},{value:'"icon-shipping-truck-no-logo"'},{value:'"icon-backup-product"'},{value:'"icon-search"'},{value:'"indicator-trapezoid"'},{value:'"icon-filters"'},{value:'"icon-images"'},{value:'"icon-features"'},{value:'"icon-space-saver"'},{value:'"icon-stop-watch"'},{value:'"icon-bagged-and-pod"'},{value:'"icon-subscribe"'},{value:'"perks-logo-small"'},{value:'"logo-keurig-circled"'},{value:'"icon-user"'},{value:'"action-arrow"'},{value:'"send-icon"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/CardFlip/CardFlip.tsx#CardFlip"]={docgenInfo:CardFlip.__docgenInfo,name:"CardFlip",path:"src/components/Animated Effects/CardFlip/CardFlip.tsx#CardFlip"})}catch(__react_docgen_typescript_loader_error){}}}]);