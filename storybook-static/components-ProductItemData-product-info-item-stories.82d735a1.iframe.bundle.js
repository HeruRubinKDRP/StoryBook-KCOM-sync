/*! For license information please see components-ProductItemData-product-info-item-stories.82d735a1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksb7=self.webpackChunksb7||[]).push([[3289],{"./src/components/ProductItemData/product-info-item.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ProductInfoItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ProductItemData/ProductInfoItem.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/ CardBack Data",component:_ProductInfoItem__WEBPACK_IMPORTED_MODULE_2__.u,argTypes:{currency:{control:"text"}}};var Template=function Template(args){return __jsx(_ProductInfoItem__WEBPACK_IMPORTED_MODULE_2__.u,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={currency:"$"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ProductInfoItem {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./src/components/ProductItemData/ProductInfoItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>ProductInfoItem});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),myBrews=__webpack_require__("./src/pages/myBrews.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),Price=__webpack_require__("./src/components/Price/Price.tsx"),Rating=__webpack_require__("./src/components/Rating/Rating.tsx"),taggedTemplateLiteral=(__webpack_require__("./src/components/Toggle/Toggle.tsx"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),ProductIfoItemStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-content: center;\n  align-items: center;\n  --colorDarkRoast: ",";\n  --colorText: ",";\n  .data-text{\n    display: flex;\n    flex-direction: column;\n  }\n\n  .pod-lid{\n    max-height: 8rem;\n  }\n  h2{\n    font-size: 1rem;\n    color: var(--colorDarkRoast);\n  }\n  p{\n    font-size: 0.75rem;\n    color: var(--colorText);\n  }\n\n  .quant-variant{\n    display: flex;\n    .variant{\n      padding: 0;\n    }\n  }\n\n  .price-rating-group{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    img{\n      margin-left: 0.5vw;\n      width: 60% !important;\n    }\n    .price-area{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n  }\n\n"])),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("text"));try{ProductIfoItemStyled.displayName="ProductIfoItemStyled",ProductIfoItemStyled.__docgenInfo={description:"",displayName:"ProductIfoItemStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductItemData/product-info-item.styled.tsx#ProductIfoItemStyled"]={docgenInfo:ProductIfoItemStyled.__docgenInfo,name:"ProductIfoItemStyled",path:"src/components/ProductItemData/product-info-item.styled.tsx#ProductIfoItemStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,ProductInfoItem=function ProductInfoItem(props){var _useState=(0,react.useState)(0),getPrice=(_useState[0],_useState[1],function getPrice(){return props.showPrice?__jsx(Price.t,{basePrice:props.basePrice,currency:myBrews.QT.USD,discountPercentAsNumber:props.discountPercentageAmountAsNumber,calculateDiscountForMe:!0}):__jsx(react.Fragment,null)}),actionsFunc=function actionsFunc(){props.actionFunc(),props.veilFunc(!0)},getRating=function getRating(){var _props$rating;if(props.rating)return __jsx(Rating.i,{totalNumberOfStars:props.rating.totalStars,totalNumberOfReviews:props.rating.totalReviews,ratingNumber:null===(_props$rating=props.rating)||void 0===_props$rating?void 0:_props$rating.starRating,ratingActiveColor:"Primary-CTA"})};return __jsx(ProductIfoItemStyled,{className:"product-info-container ".concat(props.classes)},function getProdItem(){return"side-by-side"==props.layoutType||"stacked"==props.layoutType?__jsx(react.Fragment,null,__jsx("div",{className:"product-image-name"},__jsx("img",{alt:"",className:"pod-lid",src:props.productImage}),__jsx("div",{className:"prod-info-area"},__jsx("div",{className:"labels-area"},__jsx("p",{className:"brand-title"},props.brand),__jsx("h2",null,props.productName)),__jsx("div",{className:"price-rating-group"},function getQuantVariantMenu(){if(!props.variants)return __jsx(react.Fragment,null);for(var btnItems=[],i=0;i<props.variants.length;i++)btnItems.push(__jsx(KButton.Z,{buttonType:"secondary",buttonWidth:"fit-width",iconPlacement:"no-icon",iconStandard:"none",transitionType:"expand-bg",label:"22ct",classes:"variant"}));return __jsx("div",{className:"quant-variant"},btnItems)}(),__jsx("div",{className:"price-area"},getPrice(),__jsx("div",{className:"discount-area"},__jsx("label",null,"25% Off"),__jsx("img",{src:"https://www.keurig.com/_ui/desktop/common/images/category-landing/autodel-logo-clp.svg"}))),getRating()))),__jsx("div",{className:"data-text"},__jsx("div",{className:"action-menu"},__jsx(KButton.Z,{buttonType:"primary",iconPlacement:"after-label",iconStandard:"icon-add",label:props.actionLabel,actionFunc:actionsFunc,transitionType:"expand-bg"})))):"topName-bottomPrice"===props.layoutType?__jsx(react.Fragment,null,__jsx("div",{className:"data-text"},__jsx("img",{alt:"",className:"pod-lid",src:props.productImage}),__jsx("p",null,props.brand),__jsx("h2",null,props.productName),getPrice(),getRating())):void 0}())};ProductInfoItem.displayName="ProductInfoItem",ProductInfoItem.__docgenInfo={description:"",methods:[],displayName:"ProductInfoItem",props:{layoutType:{required:!0,tsType:{name:"union",raw:'"side-by-side" | "stacked" | "topName-bottomPrice"',elements:[{name:"literal",value:'"side-by-side"'},{name:"literal",value:'"stacked"'},{name:"literal",value:'"topName-bottomPrice"'}]},description:""},productImage:{required:!1,tsType:{name:"string"},description:""},productName:{required:!0,tsType:{name:"string"},description:""},basePrice:{required:!0,tsType:{name:"number"},description:""},currency:{required:!0,tsType:{name:"currencyType"},description:""},discountPercentageAmountAsNumber:{required:!0,tsType:{name:"number"},description:""},variants:{required:!1,tsType:{name:"Array",elements:[{name:"podVariant"}],raw:"podVariant[]"},description:""},showVariant:{required:!1,tsType:{name:"boolean"},description:""},brand:{required:!1,tsType:{name:"string"},description:""},showPrice:{required:!1,tsType:{name:"boolean"},description:""},actionFunc:{required:!0,tsType:{name:"Function"},description:""},actionLabel:{required:!0,tsType:{name:"string"},description:""},veilFunc:{required:!0,tsType:{name:"Function"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},rating:{required:!1,tsType:{name:"signature",type:"object",raw:"{\r\n  totalStars: 5,\r\n  starRating: number,\r\n  totalReviews: number\r\n}",signature:{properties:[{key:"totalStars",value:{name:"literal",value:"5",required:!0}},{key:"starRating",value:{name:"number",required:!0}},{key:"totalReviews",value:{name:"number",required:!0}}]}},description:""}}};try{ProductInfoItem.displayName="ProductInfoItem",ProductInfoItem.__docgenInfo={description:"",displayName:"ProductInfoItem",props:{layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"side-by-side"'},{value:'"topName-bottomPrice"'}]}},productImage:{defaultValue:null,description:"",name:"productImage",required:!1,type:{name:"string"}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},basePrice:{defaultValue:null,description:"",name:"basePrice",required:!0,type:{name:"number"}},currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:'"$"'}},discountPercentageAmountAsNumber:{defaultValue:null,description:"",name:"discountPercentageAmountAsNumber",required:!0,type:{name:"number"}},variants:{defaultValue:null,description:"",name:"variants",required:!1,type:{name:"podVariant[]"}},showVariant:{defaultValue:null,description:"",name:"showVariant",required:!1,type:{name:"boolean"}},brand:{defaultValue:null,description:"",name:"brand",required:!1,type:{name:"string"}},showPrice:{defaultValue:null,description:"",name:"showPrice",required:!1,type:{name:"boolean"}},actionFunc:{defaultValue:null,description:"",name:"actionFunc",required:!0,type:{name:"Function"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!0,type:{name:"string"}},veilFunc:{defaultValue:null,description:"",name:"veilFunc",required:!0,type:{name:"Function"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"ratingT"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductItemData/ProductInfoItem.tsx#ProductInfoItem"]={docgenInfo:ProductInfoItem.__docgenInfo,name:"ProductInfoItem",path:"src/components/ProductItemData/ProductInfoItem.tsx#ProductInfoItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Rating/Rating.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Rating});var _templateObject,ScrollToPlugin=__webpack_require__("./node_modules/gsap/dist/ScrollToPlugin.js"),ScrollToPlugin_default=__webpack_require__.n(ScrollToPlugin),gsap=__webpack_require__("./node_modules/gsap/dist/gsap.js"),gsap_default=__webpack_require__.n(gsap),react=__webpack_require__("./node_modules/react/index.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledRating=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --containerHeightBase: ",";\n  --containerHeight: calc(var(--containerHeightBase) * 0.8);\n  --medGray: ",";\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-y: visible;\n  &.horizontal{\n    flex-direction: row;\n  }\n  &.vertical{\n    flex-direction: column;\n  }\n  \n  .stars-container{\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 50%;\n    height: 100%;\n  }\n\n   .rating-info{\n     font-size: calc(var(--containerHeight) * 0.8);\n     white-space: nowrap;\n     span{\n       padding: 0 8%;\n     }\n   }\n\n  .ratings-data{\n    margin-left: 0.5rem;\n    margin-top: 2px;\n  }\n  \n  .star-bg{\n    fill: var(--medGray);\n  } \n\n  .rating-container{\n    display: flex;\n    .star-base{\n      .filled{\n        fill : var(--medGray);\n      }\n      .dark-bg{\n        fill: var(--medGray);\n      }\n    }\n  }\n  .rating-container{\n    width: auto;\n    position: relative;\n    .ratings-data{\n      display: flex;\n    }\n    .stars-container{\n      display: flex;\n      position: absolute;\n      top:0;\n      z-index: 1;\n    }\n    .life-bar-container{\n      position: absolute;\n      top: 0;\n      z-index: 0;\n      &.KCOM{\n        border-radius: 0 !important;\n        border: none !important;\n        background-color: $sepia;\n        width: 100%;\n        height: 100%;\n        margin-top: 3px;\n      }\n    }\n  }\n  \n"])),(function(props){return props.containerHeight+"px"}),(0,colorNameToValue.G)("medium-grey"));try{StyledRating.displayName="StyledRating",StyledRating.__docgenInfo={description:"",displayName:"StyledRating",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},containerHeight:{defaultValue:null,description:"",name:"containerHeight",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Rating/ratings.styled.tsx#StyledRating"]={docgenInfo:StyledRating.__docgenInfo,name:"StyledRating",path:"src/components/Rating/ratings.styled.tsx#StyledRating"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),__jsx=react.createElement,Rating=function Rating(props){gsap_default().registerPlugin(ScrollToPlugin_default());var _useResizeDetector=(0,index_esm.NB)({refreshMode:"throttle",refreshRate:100,refreshOptions:{},handleHeight:!1,skipOnMount:!1,onResize:function onResize(){}}),height=(_useResizeDetector.width,_useResizeDetector.height),ref=_useResizeDetector.ref;return __jsx(StyledRating,{className:"ratings-overall-container ".concat(props.layout),containerHeight:height||0},__jsx("div",{className:"stars-container",ref},__jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 82.61 15.8"},__jsx("defs",null,__jsx("mask",{id:"maskStars",maskContentUnits:"userSpaceOnUse"},__jsx("polygon",{points:"8.31 0 10.37 6.17 16.62 6.15 11.55 9.6 13.44 15.8 8.31 11.97 3.17 15.8 5.07 9.6 0 6.15 6.24 6.17 8.31 0",fill:"white"}),__jsx("polygon",{points:"24.93 0 26.99 6.17 33.24 6.15 28.16 9.6 30.06 15.8 24.93 11.97 19.79 15.8 21.69 9.6 16.62 6.15 22.86 6.17 24.93 0",fill:"white"}),__jsx("polygon",{points:"41.07 0 43.13 6.17 49.38 6.15 44.31 9.6 46.2 15.8 41.07 11.97 35.93 15.8 37.83 9.6 32.76 6.15 39 6.17 41.07 0",fill:"white"}),__jsx("polygon",{points:"57.69 0 59.75 6.17 66 6.15 60.92 9.6 62.82 15.8 57.69 11.97 52.55 15.8 54.45 9.6 49.38 6.15 55.62 6.17 57.69 0",fill:"white"}),__jsx("polygon",{points:"74.3 0 76.37 6.17 82.61 6.15 77.54 9.6 79.44 15.8 74.3 11.97 69.17 15.8 71.07 9.6 66 6.15 72.24 6.17 74.3 0",fill:"white"}),__jsx("path",{d:"M0.2,0.3 L0.3,0.2 L0.4,0.3 Q0.35,0.35 0.4,0.4 L0.3,0.5 Q0.35,0.45 0.4,0.4 Z",fill:"white"}),__jsx("path",{d:"M0.4,0.3 L0.5,0.2 L0.6,0.3 Q0.65,0.35 0.6,0.4 L0.5,0.5 Q0.55,0.45 0.5,0.4 Z",fill:"white"}))),__jsx("rect",{className:"star-bg",x:"0",y:"0",width:"100%",height:"100%",fill:"grey",mask:"url(#maskStars)"}),__jsx("rect",{className:"star-fill",x:"0",y:"0",width:"".concat(Math.round(props.ratingNumber/props.totalNumberOfStars*100),"%"),height:"100%",fill:(0,colorNameToValue.G)("secondaryGold"),mask:"url(#maskStars)"}))),__jsx("div",{className:"rating-info-container"},function getRatingInfo(){if("hidden"!==props.ratingVisible)return __jsx("div",{className:"rating-info"},__jsx("span",null,props.ratingNumber),"|",__jsx("span",null,"(",props.totalNumberOfReviews,")"))}()))};Rating.displayName="Rating",Rating.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{totalNumberOfStars:{required:!0,tsType:{name:"union",raw:"5 | 10",elements:[{name:"literal",value:"5"},{name:"literal",value:"10"}]},description:""},totalNumberOfReviews:{required:!0,tsType:{name:"number"},description:""},ratingNumber:{required:!0,tsType:{name:"number"},description:""},scrollToTargetID:{required:!1,tsType:{name:"string"},description:""},ratingActiveColor:{required:!1,tsType:{name:"colorByNameType"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},ratingVisible:{required:!1,tsType:{name:"union",raw:'"hidden" | "visible"',elements:[{name:"literal",value:'"hidden"'},{name:"literal",value:'"visible"'}]},description:""},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};try{Rating.displayName="Rating",Rating.__docgenInfo={description:"",displayName:"Rating",props:{totalNumberOfStars:{defaultValue:null,description:"",name:"totalNumberOfStars",required:!0,type:{name:"enum",value:[{value:"5"},{value:"10"}]}},totalNumberOfReviews:{defaultValue:null,description:"",name:"totalNumberOfReviews",required:!0,type:{name:"number"}},ratingNumber:{defaultValue:null,description:"",name:"ratingNumber",required:!0,type:{name:"number"}},scrollToTargetID:{defaultValue:null,description:"",name:"scrollToTargetID",required:!1,type:{name:"string"}},ratingActiveColor:{defaultValue:null,description:"",name:"ratingActiveColor",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},ratingVisible:{defaultValue:null,description:"",name:"ratingVisible",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Rating/Rating.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"src/components/Rating/Rating.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toggle/Toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fl:()=>KToggle,TW:()=>toggleStyleList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_resize_detector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Kbutton/KButton.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,toggleStyleList=["touch-edges","spaced-out","one-pill"],KToggle=function KToggle(props){var _useResizeDetector=(0,react_resize_detector__WEBPACK_IMPORTED_MODULE_2__.NB)(),ref=(_useResizeDetector.width,_useResizeDetector.height,_useResizeDetector.ref),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selectedIndex=_useState[0],updateSelectedIndex=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){props.overrideSelectedIndex&&updateSelectedIndex(props.overrideSelectedIndex)}),[]);var getSelected=function getSelected(index){return props.selectedIndexOverride&&props.selectedIndexOverride>-1&&index==props.selectedIndexOverride||index==selectedIndex?"toggle-selected":""},getCarat=function getCarat(index){return index==selectedIndex?props.selectedCaratPosition:"none"};return __jsx("div",{ref,className:"k-toggle-container ".concat(props.toggleType," ").concat(props.classes)},function createToggle(){for(var toggleItems=[],_loop=function _loop(i){toggleItems.push(__jsx("div",{key:i,className:"toggle-item-container ".concat(props.toggleStyle)},function getImage(index){return props.toggleOptions[index].imagePath?__jsx("div",{className:"image-container"},__jsx("img",{alt:"",src:props.toggleOptions[index].imagePath})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}(i),__jsx(_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__.Z,{classes:"toggle-item ".concat(getSelected(i)," "),label:props.toggleOptions[i].label,iconPlacement:"no-icon",buttonType:"secondary",actionFunc:function actionFunc(){return function performAction(index){console.log(selectedIndex),updateSelectedIndex(index);var action=props.toggleOptions[index];null!=action.action&&action.action()}(i)},carat:getCarat(i),transitionType:"expand-bg"})))},i=0;i<props.toggleOptions.length;i++)_loop(i);return toggleItems}())};KToggle.displayName="KToggle",KToggle.__docgenInfo={description:"",methods:[],displayName:"KToggle",props:{toggleOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  label : string;\r\n  action? : Function;\r\n  imagePath? : string;\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"Function",required:!1}},{key:"imagePath",value:{name:"string",required:!1}}]}}],raw:"toggleItem[]"},description:""},toggleType:{required:!0,tsType:{name:"union",raw:'"stacked" | "side-by-side"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"side-by-side"'}]},description:""},toggleStyle:{required:!0,tsType:{name:"union",raw:'"touch-edges" | "spaced-out" | "one-pill"',elements:[{name:"literal",value:'"touch-edges"'},{name:"literal",value:'"spaced-out"'},{name:"literal",value:'"one-pill"'}]},description:""},selectedIndexOverride:{required:!1,tsType:{name:"number"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},selectedCaratPosition:{required:!0,tsType:{name:"caratPositionT"},description:""},overrideSelectedIndex:{required:!1,tsType:{name:"number"},description:""}}};try{KToggle.displayName="KToggle",KToggle.__docgenInfo={description:"",displayName:"KToggle",props:{toggleOptions:{defaultValue:null,description:"",name:"toggleOptions",required:!0,type:{name:"toggleItem[]"}},toggleType:{defaultValue:null,description:"",name:"toggleType",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"side-by-side"'}]}},toggleStyle:{defaultValue:null,description:"",name:"toggleStyle",required:!0,type:{name:"enum",value:[{value:'"touch-edges"'},{value:'"spaced-out"'},{value:'"one-pill"'}]}},selectedIndexOverride:{defaultValue:null,description:"",name:"selectedIndexOverride",required:!1,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},selectedCaratPosition:{defaultValue:null,description:"",name:"selectedCaratPosition",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},overrideSelectedIndex:{defaultValue:null,description:"",name:"overrideSelectedIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#KToggle"]={docgenInfo:KToggle.__docgenInfo,name:"KToggle",path:"src/components/Toggle/Toggle.tsx#KToggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/pages/myBrews.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{KB:()=>filtersList,QT:()=>currencies,YS:()=>brands});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),brands=(react__WEBPACK_IMPORTED_MODULE_0__.createElement,{gmcr:"Green Mountain Coffee Roasters®",dunkin:"Dunkin' Donuts®",donutShop:"The Original Donut Shop®",starBucks:"Starbucks®",peets:"Peet's Coffee®"}),currencies={USD:"$",CAD:"$"},filtersList=["Medium Roast","Light Roast","Dark Roast","Flavored Roast","Specialty, Tea & Cocoa","Decaf"]},"./node_modules/gsap/dist/ScrollToPlugin.js":function(__unused_webpack_module,exports,__webpack_require__){var console=__webpack_require__("./node_modules/console-browserify/index.js");!function(exports){"use strict";var gsap,_coreInitted,_window,_docEl,_body,_toArray,_config,_windowExists=function _windowExists(){return"undefined"!=typeof window},_getGSAP=function _getGSAP(){return gsap||_windowExists()&&(gsap=window.gsap)&&gsap.registerPlugin&&gsap},_isString=function _isString(value){return"string"==typeof value},_isFunction=function _isFunction(value){return"function"==typeof value},_max=function _max(element,axis){var dim="x"===axis?"Width":"Height",scroll="scroll"+dim,client="client"+dim;return element===_window||element===_docEl||element===_body?Math.max(_docEl[scroll],_body[scroll])-(_window["inner"+dim]||_docEl[client]||_body[client]):element[scroll]-element["offset"+dim]},_buildGetter=function _buildGetter(e,axis){var p="scroll"+("x"===axis?"Left":"Top");return e===_window&&(null!=e.pageXOffset?p="page"+axis.toUpperCase()+"Offset":e=null!=_docEl[p]?_docEl:_body),function(){return e[p]}},_clean=function _clean(value,index,target,targets){if(_isFunction(value)&&(value=value(index,target,targets)),"object"!=typeof value)return _isString(value)&&"max"!==value&&"="!==value.charAt(1)?{x:value,y:value}:{y:value};if(value.nodeType)return{y:value,x:value};var p,result={};for(p in value)result[p]="onAutoKill"!==p&&_isFunction(value[p])?value[p](index,target,targets):value[p];return result},_getOffset=function _getOffset(element,container){if(!(element=_toArray(element)[0])||!element.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var rect=element.getBoundingClientRect(),isRoot=!container||container===_window||container===_body,cRect=isRoot?{top:_docEl.clientTop-(_window.pageYOffset||_docEl.scrollTop||_body.scrollTop||0),left:_docEl.clientLeft-(_window.pageXOffset||_docEl.scrollLeft||_body.scrollLeft||0)}:container.getBoundingClientRect(),offsets={x:rect.left-cRect.left,y:rect.top-cRect.top};return!isRoot&&container&&(offsets.x+=_buildGetter(container,"x")(),offsets.y+=_buildGetter(container,"y")()),offsets},_parseVal=function _parseVal(value,target,axis,currentVal,offset){return isNaN(value)||"object"==typeof value?_isString(value)&&"="===value.charAt(1)?parseFloat(value.substr(2))*("-"===value.charAt(0)?-1:1)+currentVal-offset:"max"===value?_max(target,axis)-offset:Math.min(_max(target,axis),_getOffset(value,target)[axis]-offset):parseFloat(value)-offset},_initCore=function _initCore(){gsap=_getGSAP(),_windowExists()&&gsap&&document.body&&(_window=window,_body=document.body,_docEl=document.documentElement,_toArray=gsap.utils.toArray,gsap.config({autoKillThreshold:7}),_config=gsap.config(),_coreInitted=1)},ScrollToPlugin={version:"3.9.1",name:"scrollTo",rawVars:1,register:function register(core){gsap=core,_initCore()},init:function init(target,value,tween,index,targets){_coreInitted||_initCore();var data=this,snapType=gsap.getProperty(target,"scrollSnapType");data.isWin=target===_window,data.target=target,data.tween=tween,value=_clean(value,index,target,targets),data.vars=value,data.autoKill=!!value.autoKill,data.getX=_buildGetter(target,"x"),data.getY=_buildGetter(target,"y"),data.x=data.xPrev=data.getX(),data.y=data.yPrev=data.getY(),snapType&&"none"!==snapType&&(data.snap=1,data.snapInline=target.style.scrollSnapType,target.style.scrollSnapType="none"),null!=value.x?(data.add(data,"x",data.x,_parseVal(value.x,target,"x",data.x,value.offsetX||0),index,targets),data._props.push("scrollTo_x")):data.skipX=1,null!=value.y?(data.add(data,"y",data.y,_parseVal(value.y,target,"y",data.y,value.offsetY||0),index,targets),data._props.push("scrollTo_y")):data.skipY=1},render:function render(ratio,data){for(var x,y,yDif,xDif,threshold,pt=data._pt,target=data.target,tween=data.tween,autoKill=data.autoKill,xPrev=data.xPrev,yPrev=data.yPrev,isWin=data.isWin,snap=data.snap,snapInline=data.snapInline;pt;)pt.r(ratio,pt.d),pt=pt._next;x=isWin||!data.skipX?data.getX():xPrev,yDif=(y=isWin||!data.skipY?data.getY():yPrev)-yPrev,xDif=x-xPrev,threshold=_config.autoKillThreshold,data.x<0&&(data.x=0),data.y<0&&(data.y=0),autoKill&&(!data.skipX&&(xDif>threshold||xDif<-threshold)&&x<_max(target,"x")&&(data.skipX=1),!data.skipY&&(yDif>threshold||yDif<-threshold)&&y<_max(target,"y")&&(data.skipY=1),data.skipX&&data.skipY&&(tween.kill(),data.vars.onAutoKill&&data.vars.onAutoKill.apply(tween,data.vars.onAutoKillParams||[]))),isWin?_window.scrollTo(data.skipX?x:data.x,data.skipY?y:data.y):(data.skipY||(target.scrollTop=data.y),data.skipX||(target.scrollLeft=data.x)),!snap||1!==ratio&&0!==ratio||(y=target.scrollTop,x=target.scrollLeft,snapInline?target.style.scrollSnapType=snapInline:target.style.removeProperty("scroll-snap-type"),target.scrollTop=y+1,target.scrollLeft=x+1,target.scrollTop=y,target.scrollLeft=x),data.xPrev=data.x,data.yPrev=data.y},kill:function kill(property){var both="scrollTo"===property;(both||"scrollTo_x"===property)&&(this.skipX=1),(both||"scrollTo_y"===property)&&(this.skipY=1)}};ScrollToPlugin.max=_max,ScrollToPlugin.getOffset=_getOffset,ScrollToPlugin.buildGetter=_buildGetter,_getGSAP()&&gsap.registerPlugin(ScrollToPlugin),exports.ScrollToPlugin=ScrollToPlugin,exports.default=ScrollToPlugin,Object.defineProperty(exports,"__esModule",{value:!0})}(exports)}}]);