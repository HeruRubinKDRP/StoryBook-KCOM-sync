"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[8346],{"./src/components/Cards/SimpleProductRedemptionCard/redemption-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RedemptionCardExample:()=>RedemptionCardExample,default:()=>redemption_card_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),myBrews=__webpack_require__("./src/pages/myBrews.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),Toggle=__webpack_require__("./src/components/Toggle/Toggle.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),RedemptionStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: ","px;\n  display: flex;\n  flex-direction: column;\n\n  .product-image {\n    img{\n      width: 100%;\n    }\n  }\n\n  .product-id-area{\n    .brand{\n      font-size: ","px;\n    }\n    .product-name{\n      font-weight: 600;\n      font-size: ","px;\n    }\n    .selected-variant-name{\n      font-size: ","px;\n    }\n  }\n\n  //variant selection\n\n  .k-toggle-container{\n    margin-top: ","px;\n    margin-bottom: ","px;\n    .toggle-item{\n      padding: ","px;\n      font-size : ","px;\n    }\n  }\n\n  .reward-cost{\n    width: 100%;\n    text-align: center;\n    font-weight: 600;\n    font-size: ","px;\n  }\n\n  //Toggle\n.k-toggle-container{\n\n  button.toggle-item{\n    padding: ","px;\n    border-radius: ","px;\n    &.secondary{\n      border-color: "," !important;\n    }\n\n    &.toggle-selected{\n      background-color: "," !important;\n      border-color: ","; !important;\n    }\n  }\n}\n\n\n\n"])),(function(props){return props.theme.widthX}),(function(props){return.05*props.theme.widthX}),(function(props){return.075*props.theme.widthX}),(function(props){return.05*props.theme.widthX}),(function(props){return.025*props.theme.widthX}),(function(props){return.025*props.theme.widthX}),(function(props){return.05*props.theme.widthX}),(function(props){return.05*props.theme.widthX}),(function(props){return.065*props.theme.widthX}),(function(props){return.065*props.theme.widthX}),(function(props){return.025*props.theme.widthX}),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("light-roast"),(0,colorNameToValue.G)("dark-roast"));try{RedemptionStyled.displayName="RedemptionStyled",RedemptionStyled.__docgenInfo={description:"",displayName:"RedemptionStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/SimpleProductRedemptionCard/RedemptionStyled.tsx#RedemptionStyled"]={docgenInfo:RedemptionStyled.__docgenInfo,name:"RedemptionStyled",path:"src/components/Cards/SimpleProductRedemptionCard/RedemptionStyled.tsx#RedemptionStyled"})}catch(__react_docgen_typescript_loader_error){}var _RedemptionCardExampl,_RedemptionCardExampl2,next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement,RedemptionCard=function RedemptionCard(props){var _useState=(0,react.useState)(0),selectedVariant=_useState[0],setSelectedVariant=_useState[1],_useState2=(0,react.useState)("Get it FREE"),getItFor=_useState2[0],setGetItFor=_useState2[1];(0,react.useEffect)((function(){setSelectedVariant(props.defaultVariant)}),[props.defaultVariant]),(0,react.useEffect)((function(){setGetItFor(props.variants[selectedVariant].rewardGet)}),[props.variants,selectedVariant]);return __jsx(RedemptionStyled,{theme:{widthX:props.desiredWidth}},__jsx("div",{className:"product-name"},__jsx("div",{className:"product-image ".concat(selectedVariant," ")},__jsx(next_image.Z,{src:props.variants[selectedVariant].variantImage,alt:""})),__jsx("div",{className:"product-id-area"},__jsx("div",{className:"brand"},props.brand),__jsx("div",{className:"product-name"},props.productName),__jsx("div",{className:"selected-variant-name"},props.variants[selectedVariant].variantName))),function variantsMenu(selectedIndex){for(var menuItems=[],_loop=function _loop(i){menuItems.push({label:props.variants[i].variantNameShortened,action:function action(){return setSelectedVariant(i)},imagePath:""})},i=0;i<props.variants.length;i++)_loop(i);return __jsx(Toggle.Fl,{toggleOptions:menuItems,toggleType:"side-by-side",toggleStyle:"touch-edges",selectedCaratPosition:"none",selectedIndexOverride:selectedIndex})}(selectedVariant),__jsx("div",{className:"reward-cost"},"1 Reward"),__jsx(KButton.Z,{label:getItFor,buttonType:"primary",buttonWidth:"fit-width",iconStandard:"none",transitionType:"expand-bg"}))};RedemptionCard.displayName="RedemptionCard",RedemptionCard.__docgenInfo={description:"",methods:[],displayName:"RedemptionCard",props:{productName:{required:!0,tsType:{name:"string"},description:""},brand:{required:!0,tsType:{name:"string"},description:""},variants:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  variantName : string;\r\n  variantImage : string;\r\n  variantNameShortened : string;\r\n  rewardGet : getRewardForT;\r\n}",signature:{properties:[{key:"variantName",value:{name:"string",required:!0}},{key:"variantImage",value:{name:"string",required:!0}},{key:"variantNameShortened",value:{name:"string",required:!0}},{key:"rewardGet",value:{name:"union",raw:'"Get it FREE" | "Get it 25% Off" | "Get it 15% Off" | "Get it 10% Off"',elements:[{name:"literal",value:'"Get it FREE"'},{name:"literal",value:'"Get it 25% Off"'},{name:"literal",value:'"Get it 15% Off"'},{name:"literal",value:'"Get it 10% Off"'}],required:!0}}]}}],raw:"redemptionVariantT[]"},description:""},desiredWidth:{required:!1,tsType:{name:"number"},description:""},defaultVariant:{required:!0,tsType:{name:"number"},description:""}}};try{RedemptionCard.displayName="RedemptionCard",RedemptionCard.__docgenInfo={description:"",displayName:"RedemptionCard",props:{productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},brand:{defaultValue:null,description:"",name:"brand",required:!0,type:{name:"string"}},variants:{defaultValue:null,description:"",name:"variants",required:!0,type:{name:"redemptionVariantT[]"}},desiredWidth:{defaultValue:null,description:"",name:"desiredWidth",required:!1,type:{name:"number"}},defaultVariant:{defaultValue:null,description:"",name:"defaultVariant",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/SimpleProductRedemptionCard/RedemptionCard.tsx#RedemptionCard"]={docgenInfo:RedemptionCard.__docgenInfo,name:"RedemptionCard",path:"src/components/Cards/SimpleProductRedemptionCard/RedemptionCard.tsx#RedemptionCard"})}catch(__react_docgen_typescript_loader_error){}var redemption_card_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const redemption_card_stories={title:"Loyalty/Simple Loyalty Redemption CardFlip",component:RedemptionCard,argTypes:{desiredWidth:{title:"Width of card, can be set from parent and calculated",control:{type:"range",min:200,max:500,step:1}}}};var Template=function Template(args){return redemption_card_stories_jsx(RedemptionCard,args)};Template.displayName="Template";var RedemptionCardExample=Template.bind({});RedemptionCardExample.args={brand:myBrews.YS.gmcr,productName:"Dark Magic® Coffee",defaultVariant:0,desiredWidth:300,variants:[{variantName:"K-Cup® Box 24 ct.",variantImage:"https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",variantNameShortened:"24 ct.",rewardGet:"Get it FREE"},{variantName:"K-Cup® Box 72 ct.",variantImage:"https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",variantNameShortened:"72 ct.",rewardGet:"Get it 25% Off"},{variantName:"K-Cup® Box 96 ct.",variantImage:"https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",variantNameShortened:"96 ct.",rewardGet:"Get it 10% Off"}]},RedemptionCardExample.parameters=_objectSpread(_objectSpread({},RedemptionCardExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RedemptionCardExampl=RedemptionCardExample.parameters)||void 0===_RedemptionCardExampl?void 0:_RedemptionCardExampl.docs),{},{source:_objectSpread({originalSource:"args => <RedemptionCard {...args} />"},null===(_RedemptionCardExampl2=RedemptionCardExample.parameters)||void 0===_RedemptionCardExampl2||null===(_RedemptionCardExampl2=_RedemptionCardExampl2.docs)||void 0===_RedemptionCardExampl2?void 0:_RedemptionCardExampl2.source)})})},"./src/components/Toggle/Toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fl:()=>KToggle,TW:()=>toggleStyleList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_resize_detector__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Kbutton/KButton.tsx"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,toggleStyleList=["touch-edges","spaced-out","one-pill"],KToggle=function KToggle(props){var _useResizeDetector=(0,react_resize_detector__WEBPACK_IMPORTED_MODULE_3__.NB)(),ref=(_useResizeDetector.width,_useResizeDetector.height,_useResizeDetector.ref),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selectedIndex=_useState[0],updateSelectedIndex=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){props.overrideSelectedIndex&&updateSelectedIndex(props.overrideSelectedIndex)}),[props.overrideSelectedIndex]);var getSelected=function getSelected(index){return props.selectedIndexOverride&&props.selectedIndexOverride>-1&&index==props.selectedIndexOverride||index==selectedIndex?"toggle-selected":""},getCarat=function getCarat(index){return index==selectedIndex?props.selectedCaratPosition:"none"};return __jsx("div",{ref,className:"k-toggle-container ".concat(props.toggleType," ").concat(props.classes)},function createToggle(){for(var toggleItems=[],_loop=function _loop(i){toggleItems.push(__jsx("div",{key:i,className:"toggle-item-container ".concat(props.toggleStyle)},function getImage(index){var _props$toggleOptions$;return props.toggleOptions[index].imagePath?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,props.toggleOptions[index].imagePath&&__jsx("div",{className:"image-container"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.Z,{alt:"",src:null!==(_props$toggleOptions$=props.toggleOptions[index].imagePath)&&void 0!==_props$toggleOptions$?_props$toggleOptions$:""}))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}(i),__jsx(_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__.Z,{classes:"toggle-item ".concat(getSelected(i)," "),label:props.toggleOptions[i].label,iconPlacement:"no-icon",buttonType:"secondary",actionFunc:function actionFunc(){return function performAction(index){console.log(selectedIndex),updateSelectedIndex(index);var action=props.toggleOptions[index];null!=action.action&&action.action()}(i)},carat:getCarat(i),transitionType:"expand-bg"})))},i=0;i<props.toggleOptions.length;i++)_loop(i);return toggleItems}())};KToggle.displayName="KToggle",KToggle.__docgenInfo={description:"",methods:[],displayName:"KToggle",props:{toggleOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  label : string;\r\n  action? : Function;\r\n  imagePath? : string;\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"Function",required:!1}},{key:"imagePath",value:{name:"string",required:!1}}]}}],raw:"toggleItem[]"},description:""},toggleType:{required:!0,tsType:{name:"union",raw:'"stacked" | "side-by-side"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"side-by-side"'}]},description:""},toggleStyle:{required:!0,tsType:{name:"union",raw:'"touch-edges" | "spaced-out" | "one-pill"',elements:[{name:"literal",value:'"touch-edges"'},{name:"literal",value:'"spaced-out"'},{name:"literal",value:'"one-pill"'}]},description:""},selectedIndexOverride:{required:!1,tsType:{name:"number"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},selectedCaratPosition:{required:!0,tsType:{name:"caratPositionT"},description:""},overrideSelectedIndex:{required:!1,tsType:{name:"number"},description:""}}};try{KToggle.displayName="KToggle",KToggle.__docgenInfo={description:"",displayName:"KToggle",props:{toggleOptions:{defaultValue:null,description:"",name:"toggleOptions",required:!0,type:{name:"toggleItem[]"}},toggleType:{defaultValue:null,description:"",name:"toggleType",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"side-by-side"'}]}},toggleStyle:{defaultValue:null,description:"",name:"toggleStyle",required:!0,type:{name:"enum",value:[{value:'"touch-edges"'},{value:'"spaced-out"'},{value:'"one-pill"'}]}},selectedIndexOverride:{defaultValue:null,description:"",name:"selectedIndexOverride",required:!1,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},selectedCaratPosition:{defaultValue:null,description:"",name:"selectedCaratPosition",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},overrideSelectedIndex:{defaultValue:null,description:"",name:"overrideSelectedIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#KToggle"]={docgenInfo:KToggle.__docgenInfo,name:"KToggle",path:"src/components/Toggle/Toggle.tsx#KToggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/pages/myBrews.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KB:()=>filtersList,QT:()=>currencies,YS:()=>brands});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),brands=(react__WEBPACK_IMPORTED_MODULE_0__.createElement,{gmcr:"Green Mountain Coffee Roasters®",dunkin:"Dunkin' Donuts®",donutShop:"The Original Donut Shop®",starBucks:"Starbucks®",peets:"Peet's Coffee®"}),currencies={USD:"$",CAD:"$"},filtersList=["Medium Roast","Light Roast","Dark Roast","Flavored Roast","Specialty, Tea & Cocoa","Decaf"]}}]);