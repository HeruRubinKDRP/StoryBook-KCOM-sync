"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[2953],{"./src/stories/R4_2022/multiBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiBoxExample:()=>MultiBoxExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MultiBoxExample$para,_MultiBoxExample$para2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_MultiBlock_MultiBlock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/MultiBlock/MultiBlock.tsx"),_data_product_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/data/product-data.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Hold/Better Two-Box",argTypes:{cards:{control:"object"}}};var Template=function Template(args){return __jsx(_components_MultiBlock_MultiBlock__WEBPACK_IMPORTED_MODULE_2__.f,args)};Template.displayName="Template";var MultiBoxExample=Template.bind({});MultiBoxExample.args={cards:_data_product_data__WEBPACK_IMPORTED_MODULE_3__.$C,groupHeaderText:{headerLabel:"",headerAlignment:"left",hierarchyLevel:2,colorScheme:"dark-roast",headerStyle:"large-light"}},MultiBoxExample.parameters=_objectSpread(_objectSpread({},MultiBoxExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultiBoxExample$para=MultiBoxExample.parameters)||void 0===_MultiBoxExample$para?void 0:_MultiBoxExample$para.docs),{},{source:_objectSpread({originalSource:"args => <MultiBlock {...args} />"},null===(_MultiBoxExample$para2=MultiBoxExample.parameters)||void 0===_MultiBoxExample$para2||null===(_MultiBoxExample$para2=_MultiBoxExample$para2.docs)||void 0===_MultiBoxExample$para2?void 0:_MultiBoxExample$para2.source)})})},"./src/components/HeaderArea/HeaderArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>HeaderArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,HeaderArea=function HeaderArea(props){return __jsx("div",{className:"header-area ".concat(props.colorScheme," align-").concat(props.headerAlignment)},function getHeader(){var headerContents=function headerContents(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"before"}),__jsx("span",{className:"title-label"},props.headerLabel," "),__jsx("div",{className:"after"}))},commonStyles="".concat(props.headerStyle," header");switch(props.hierarchyLevel){case 1:return __jsx("h1",{className:commonStyles},headerContents());case 2:return __jsx("h2",{className:commonStyles},headerContents());case 3:return __jsx("h3",{className:commonStyles},headerContents());case 4:return __jsx("h4",{className:commonStyles},headerContents())}}())};HeaderArea.displayName="HeaderArea",HeaderArea.__docgenInfo={description:"",methods:[],displayName:"HeaderArea",props:{headerLabel:{required:!0,tsType:{name:"string"},description:""},headerStyle:{required:!0,tsType:{name:"union",raw:'"line-through" | "large-light" | "bold-small" | "medium-light"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"large-light"'},{name:"literal",value:'"bold-small"'},{name:"literal",value:'"medium-light"'}]},description:""},hierarchyLevel:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""},colorScheme:{required:!0,tsType:{name:"union",raw:'"medium-roast" | "dark-roast"',elements:[{name:"literal",value:'"medium-roast"'},{name:"literal",value:'"dark-roast"'}]},description:""},headerAlignment:{required:!0,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:""}}};try{HeaderArea.displayName="HeaderArea",HeaderArea.__docgenInfo={description:"",displayName:"HeaderArea",props:{headerLabel:{defaultValue:null,description:"",name:"headerLabel",required:!0,type:{name:"string"}},headerStyle:{defaultValue:null,description:"",name:"headerStyle",required:!0,type:{name:"enum",value:[{value:'"line-through"'},{value:'"large-light"'},{value:'"bold-small"'},{value:'"medium-light"'}]}},hierarchyLevel:{defaultValue:null,description:"",name:"hierarchyLevel",required:!0,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!0,type:{name:"enum",value:[{value:'"dark-roast"'},{value:'"medium-roast"'}]}},headerAlignment:{defaultValue:null,description:"",name:"headerAlignment",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HeaderArea/HeaderArea.tsx#HeaderArea"]={docgenInfo:HeaderArea.__docgenInfo,name:"HeaderArea",path:"src/components/HeaderArea/HeaderArea.tsx#HeaderArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MultiBlock/MultiBlock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>MultiBlock});var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/gsap/dist/Draggable.js"),gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_5__),gsap_dist_InertiaPlugin__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/gsap/dist/InertiaPlugin.js"),gsap_dist_InertiaPlugin__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(gsap_dist_InertiaPlugin__WEBPACK_IMPORTED_MODULE_6__),gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/gsap/dist/gsap.js"),gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_resize_detector__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),_ContentComponents_SimpleHighlightCard_SimpleHighlightCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ContentComponents/SimpleHighlightCard/SimpleHighlightCard.tsx"),_HeaderArea_HeaderArea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/HeaderArea/HeaderArea.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,MultiBlock=function MultiBlock(props){var dragContainer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var _useResizeDetector=(0,react_resize_detector__WEBPACK_IMPORTED_MODULE_3__.NB)({handleHeight:!1,refreshMode:"debounce",refreshRate:1e3,skipOnMount:!1,onResize:function onResize(){}}),width=_useResizeDetector.width,height=_useResizeDetector.height,ref=_useResizeDetector.ref;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4___default().registerPlugin(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_5___default(),gsap_dist_InertiaPlugin__WEBPACK_IMPORTED_MODULE_6___default()),dragContainer.current&&width&&gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_5___default().create(dragContainer.current,{type:"x",inertia:!0,allowContextMenu:!0,allowNativeTouchScrolling:!0,bounds:{minX:-dragContainer.current.getBoundingClientRect().width+width,maxX:12},onThrowUpdate:function onThrowUpdate(){console.log(-dragContainer.current.getBoundingClientRect().width+width)}})}),[width,dragContainer]);return __jsx("div",{ref,className:"multi-block-container ".concat(function getContainerQueries(widthX){return widthX?widthX<=600?"small-container":widthX>600?"large-container":void 0:"small-container"}(width))},function getHeader(){var _props$groupHeaderTex,_props$groupHeaderTex2;return props.groupHeaderText?__jsx(_HeaderArea_HeaderArea__WEBPACK_IMPORTED_MODULE_2__.M,{headerLabel:null===(_props$groupHeaderTex=props.groupHeaderText)||void 0===_props$groupHeaderTex?void 0:_props$groupHeaderTex.headerLabel,headerStyle:null===(_props$groupHeaderTex2=props.groupHeaderText)||void 0===_props$groupHeaderTex2?void 0:_props$groupHeaderTex2.headerStyle,hierarchyLevel:props.groupHeaderText.hierarchyLevel,colorScheme:props.groupHeaderText.colorScheme,headerAlignment:props.groupHeaderText.headerAlignment}):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}(),__jsx("div",{className:"cards-container",ref:dragContainer},function getCards(heightX){for(var cards=[],getHeight=function getHeight(){return heightX?"".concat(.65*heightX,"px"):"14rem"},i=0;i<props.cards.length;i++){var _props$cards$i$mainFo,_props$cards$i$mainFo2;cards.push(__jsx(_ContentComponents_SimpleHighlightCard_SimpleHighlightCard__WEBPACK_IMPORTED_MODULE_1__.Q,{title:props.cards[i].title,titlePosition:props.cards[i].titlePosition,mainMessageSize:props.cards[i].mainMessageSize,secondaryMessage:props.cards[i].secondaryMessage,subTitle:props.cards[i].subTitle,alignment:props.cards[i].alignment,maxSize:props.cards[i].maxSize,mainImageSize:props.cards[i].mainImageSize,mainFocalImage:{imagePath:null===(_props$cards$i$mainFo=props.cards[i].mainFocalImage)||void 0===_props$cards$i$mainFo?void 0:_props$cards$i$mainFo.imagePath,cropStyle:null===(_props$cards$i$mainFo2=props.cards[i].mainFocalImage)||void 0===_props$cards$i$mainFo2?void 0:_props$cards$i$mainFo2.cropStyle,imageHeight:getHeight()},mainCTA:props.cards[i].mainCTA,secondaryCTA:props.cards[i].secondaryCTA,featuresList:props.cards[i].featuresList,customClasses:props.cards[i].customClasses,imageSizeMethod:"bg-image"}))}return cards}(height)))};MultiBlock.displayName="MultiBlock",MultiBlock.__docgenInfo={description:"",methods:[],displayName:"MultiBlock",props:{groupHeaderText:{required:!1,tsType:{name:"iHeaderArea"},description:""},cards:{required:!0,tsType:{name:"Array",elements:[{name:"iSimpleHighlightCard"}],raw:"iSimpleHighlightCard[]"},description:""}}};try{MultiBlock.displayName="MultiBlock",MultiBlock.__docgenInfo={description:"",displayName:"MultiBlock",props:{groupHeaderText:{defaultValue:null,description:"",name:"groupHeaderText",required:!1,type:{name:"iHeaderArea"}},cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"iSimpleHighlightCard[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiBlock/MultiBlock.tsx#MultiBlock"]={docgenInfo:MultiBlock.__docgenInfo,name:"MultiBlock",path:"src/components/MultiBlock/MultiBlock.tsx#MultiBlock"})}catch(__react_docgen_typescript_loader_error){}}}]);