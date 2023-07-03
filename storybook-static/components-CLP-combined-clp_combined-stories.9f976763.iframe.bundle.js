"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[895],{"./src/components/CLP/combined/clp_combined.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>clp_combined_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),CLP_CombinedContainer_Styled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    .overlay{\n      z-index: 12000000;\n      position: fixed;\n      background-color: rgba(0,0,0,0.25);\n      inset: 0;\n      backdrop-filter: grayscale(1) brightness(0.75) blur(2px);\n    } \n    \n"])));try{CLP_CombinedContainer_Styled.displayName="CLP_CombinedContainer_Styled",CLP_CombinedContainer_Styled.__docgenInfo={description:"",displayName:"CLP_CombinedContainer_Styled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/combined/Styled_CLP_Combined.tsx#CLP_CombinedContainer_Styled"]={docgenInfo:CLP_CombinedContainer_Styled.__docgenInfo,name:"CLP_CombinedContainer_Styled",path:"src/components/CLP/combined/Styled_CLP_Combined.tsx#CLP_CombinedContainer_Styled"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,ClassicCardsContainer=__webpack_require__("./src/components/Classic_components/cards/ClassicCardsContainer.tsx"),beverage_library=__webpack_require__("./src/data/beverage-library.tsx"),BeverageQuickShop=__webpack_require__("./src/components/CLP/Beverage_QuickShop/BeverageQuickShop.tsx"),AddToCartJourneySmall=__webpack_require__("./src/components/Experimental/Add-to-cart/small-version/AddToCartJourneySmall.tsx"),AddToCartDemo=__webpack_require__("./src/components/Experimental/Add-to-cart/AddToCartDemo.tsx"),__jsx=react.createElement,CLP_Combined=function CLP_Combined(props){var _useState=(0,react.useState)(!1),quickShopOpen=_useState[0],setQuickShopOpen=_useState[1],_useState2=(0,react.useState)(!1),snackBarOpen=_useState2[0],setSnackBarOpen=_useState2[1],_useState3=(0,react.useState)(0),selectedPod=_useState3[0],setSelectedPod=_useState3[1],manageAddSuggestionToCart=function manageAddSuggestionToCart(productID){setSelectedPod(productID),setSnackBarOpen(!1),setQuickShopOpen(!0)};return __jsx(CLP_CombinedContainer_Styled,null,function getModal(open){var _props$podLibrary$sel,_props$podLibrary$sel2,_props$podLibrary$sel3;return open?__jsx(BeverageQuickShop.X,{productName:props.podLibrary[selectedPod].podName,brand:props.podLibrary[selectedPod].brand,productImageURL:null!==(_props$podLibrary$sel=props.podLibrary[selectedPod].productImagePrimaryPath)&&void 0!==_props$podLibrary$sel?_props$podLibrary$sel:"",productPrices:null!==(_props$podLibrary$sel2=props.podLibrary[selectedPod].productPrices)&&void 0!==_props$podLibrary$sel2?_props$podLibrary$sel2:[],boxSizes:null!==(_props$podLibrary$sel3=props.podLibrary[selectedPod].boxSizes)&&void 0!==_props$podLibrary$sel3?_props$podLibrary$sel3:[],isSmartEligible:!0,edlpOffer:props.edlpOffer,subscriptionVisible:!0,closeFunction:function closeFunction(){return setQuickShopOpen(!1)},addToCartFunction:function addToCartFunction(){return function manageAddToCart(){setQuickShopOpen(!1),setSnackBarOpen(!0)}()}}):__jsx(react.Fragment,null)}(quickShopOpen),function getSnackBar(open){return open?__jsx(AddToCartJourneySmall.d,{selectedProduct:(0,AddToCartDemo.N)([beverage_library.c[selectedPod]])[0],suggestedProducts:(0,AddToCartDemo.N)(beverage_library.c.slice(0,3)),numberOfSuggestions:3,currentCartTotal:props.numberOfSuggestions,freeShippingTarget:props.currentCartValue,closeFunc:function closeFunc(){return function manageContinueShopping(){setQuickShopOpen(!1),setSnackBarOpen(!1)}()},addSuggestionToCartFunc:manageAddSuggestionToCart}):__jsx(react.Fragment,null)}(snackBarOpen),__jsx(ClassicCardsContainer.h,{podLibrary:props.podLibrary,alwaysShowCTA:props.cardsAlwaysShowCTA,ctaAction:function manageQuickShop(open,index){setSelectedPod(index),setSnackBarOpen(!1),setQuickShopOpen(open)}}))};CLP_Combined.displayName="CLP_Combined",CLP_Combined.__docgenInfo={description:"",methods:[],displayName:"CLP_Combined",props:{podLibrary:{required:!0,tsType:{name:"Array",elements:[{name:"podItemT"}],raw:"podItemT[]"},description:""},cardsAlwaysShowCTA:{required:!0,tsType:{name:"boolean"},description:""},edlpOffer:{required:!0,tsType:{name:"string"},description:""},numberOfSuggestions:{required:!0,tsType:{name:"number"},description:""},currentCartValue:{required:!0,tsType:{name:"number"},description:""},freeShippingTarget:{required:!0,tsType:{name:"number"},description:""}}};try{CLP_Combined.displayName="CLP_Combined",CLP_Combined.__docgenInfo={description:"",displayName:"CLP_Combined",props:{podLibrary:{defaultValue:null,description:"",name:"podLibrary",required:!0,type:{name:"podItemT[]"}},cardsAlwaysShowCTA:{defaultValue:null,description:"",name:"cardsAlwaysShowCTA",required:!0,type:{name:"boolean"}},edlpOffer:{defaultValue:null,description:"",name:"edlpOffer",required:!0,type:{name:"string"}},numberOfSuggestions:{defaultValue:null,description:"",name:"numberOfSuggestions",required:!0,type:{name:"number"}},currentCartValue:{defaultValue:null,description:"",name:"currentCartValue",required:!0,type:{name:"number"}},freeShippingTarget:{defaultValue:null,description:"",name:"freeShippingTarget",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/combined/clp_combined.tsx#CLP_Combined"]={docgenInfo:CLP_Combined.__docgenInfo,name:"CLP_Combined",path:"src/components/CLP/combined/clp_combined.tsx#CLP_Combined"})}catch(__react_docgen_typescript_loader_error){}var clp_combined_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const clp_combined_stories={title:"CLP/Price-Per-Pod and Box Counts",component:CLP_Combined,argTypes:{podLibrary:{control:"array"},cardsAlwaysShowCTA:{control:"boolean"}}};var Template=function Template(args){return clp_combined_stories_jsx(CLP_Combined,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={podLibrary:beverage_library.c,cardsAlwaysShowCTA:!1},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <CLP_Combined {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/ExpandCollapse/expand-collapse.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ExpandCollapse});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Kbutton/KButton.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ExpandCollapse=function ExpandCollapse(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];return __jsx("div",{className:"expand-collapse ".concat(props.classes," ").concat(isOpen)},__jsx("div",{className:"button-area"},function getButton(isOpenStatus){var icon="chevron-down",btnLabel=props.expandText?props.expandText:"View More";isOpen&&(icon="chevron-up"),props.isExpandedText&&isOpenStatus&&(btnLabel=props.isExpandedText);return __jsx(_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__.Z,{actionFunc:function actionFunc(){return setIsOpen(!isOpenStatus)},label:btnLabel,buttonType:function getBtnType(){return props.buttonType?props.buttonType:"secondary"}(),iconPlacement:"after-label",iconStandard:icon,buttonWidth:"fit-to-content",transitionType:function getTransitionType(){return props.transitionType?props.transitionType:"expand-bg"}()})}(isOpen),__jsx("div",{className:"dividing-line"})),__jsx("div",{className:"content-area"},function getContent(){return isOpen?props.content:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}()))};ExpandCollapse.displayName="ExpandCollapse",ExpandCollapse.__docgenInfo={description:"",methods:[],displayName:"ExpandCollapse",props:{expanderStyle:{required:!0,tsType:{name:"union",raw:'"button" | "minimalist"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"minimalist"'}]},description:""},expandText:{required:!1,tsType:{name:"string"},description:""},isExpandedText:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactElement"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},buttonType:{required:!1,tsType:{name:"buttonType"},description:""},transitionType:{required:!1,tsType:{name:"btnTransitionType"},description:""}}};try{ExpandCollapse.displayName="ExpandCollapse",ExpandCollapse.__docgenInfo={description:"",displayName:"ExpandCollapse",props:{expanderStyle:{defaultValue:null,description:"",name:"expanderStyle",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"minimalist"'}]}},expandText:{defaultValue:null,description:"",name:"expandText",required:!1,type:{name:"string"}},isExpandedText:{defaultValue:null,description:"",name:"isExpandedText",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"primary-light"'},{value:'"primary-cart-action"'},{value:'"secondary"'},{value:'"action"'},{value:'"text-icon-noBG"'},{value:'"link-internal"'},{value:'"link-external"'},{value:'"round-no-label"'},{value:'"ecommerce-primary"'},{value:'"ecommerce-secondary"'},{value:'"ecommerce-secondary-2-lines"'}]}},transitionType:{defaultValue:null,description:"",name:"transitionType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"rise"'},{value:'"scale-up"'},{value:'"expand-bg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ExpandCollapse/expand-collapse.tsx#ExpandCollapse"]={docgenInfo:ExpandCollapse.__docgenInfo,name:"ExpandCollapse",path:"src/components/ExpandCollapse/expand-collapse.tsx#ExpandCollapse"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>getContainerQuery});var console=__webpack_require__("./node_modules/console-browserify/index.js"),getContainerQuery=function getContainerQuery(widthX){if(!widthX)return console.log("widthX not",widthX),"default";var sss_largeDesktop=1920,sss_desktop=1280,sss_tablet=768;return widthX>=sss_largeDesktop?"extra-large-dimensions":widthX<sss_largeDesktop&&widthX>=sss_desktop?"large-dimensions":widthX<sss_desktop&&widthX>=sss_tablet?"medium-dimensions":widthX<sss_tablet?"mobile-dimensions":"default"};try{getContainerQuery.displayName="getContainerQuery",getContainerQuery.__docgenInfo={description:"",displayName:"getContainerQuery",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx#getContainerQuery"]={docgenInfo:getContainerQuery.__docgenInfo,name:"getContainerQuery",path:"src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx#getContainerQuery"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PopUp/PopUp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>PopUp});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),PanelHeaderStyles=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\n  .page-level-nav{\n    backdrop-filter: blur(8px) brightness(0.5);\n  }\n  \n  &.mobile-dimensions{\n    .close.right{\n      label{\n        display: none;\n      }\n    }\n  }\n    \n    top: 0;\n    background: white;\n    width: 100%;\n    border-bottom: 1px solid #CECECE;\n    justify-content: space-between;\n    z-index: 200;\n    min-height: 4rem;\n    border-bottom: 1px solid ",";\n    padding: 0.5rem 0 0.5rem 0;\n  \n  .header-container{\n    width: 100%;\n    display: flex;\n    flex-flow: row;\n  }\n  \n  .left, .right{\n    flex-basis: 20%;\n    display: flex;\n    flex-direction: row;\n    \n  } \n  .right{\n    justify-content: flex-end;\n  }\n  \n  .left{\n    justify-content: flex-start;\n  }\n  \n  .middle{\n    flex-basis: 60%;\n  }\n    .icon{\n      max-width: 1.75rem;\n      max-height: 1.25rem;\n      min-height: 0.75rem;\n      min-width: 0.75rem;\n      margin-bottom: 0.25rem;\n    }\n    .panel-header-label{\n      color: $text;\n      display: flex;\n      text-align: center;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      pointer-events: none;\n    }\n    .k-btn.close{\n      background-color: transparent !important;\n      width: 4rem;\n      label{\n        display: block;\n      }\n      .filled{\n        fill : ",";\n      }\n    }\n \n\n  .width-between-100-and-399{\n    .k-btn.close{\n      label{\n        display: none;\n      }\n    }\n  }\n\n  .width-between-400-and-999{\n    .k-btn.close{\n      label{\n        display: none;\n      }\n    }\n  }\n\n"])),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("dark-roast"));try{PanelHeaderStyles.displayName="PanelHeaderStyles",PanelHeaderStyles.__docgenInfo={description:"",displayName:"PanelHeaderStyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeader/PanelHeader.styles.tsx#PanelHeaderStyles"]={docgenInfo:PanelHeaderStyles.__docgenInfo,name:"PanelHeaderStyles",path:"src/components/PanelHeader/PanelHeader.styles.tsx#PanelHeaderStyles"})}catch(__react_docgen_typescript_loader_error){}var PopUpStyled_templateObject,container_queries=__webpack_require__("./src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx"),__jsx=react.createElement,PanelHeader=function PanelHeader(props){var _useResizeDetector=(0,index_esm.NB)({refreshMode:"throttle",refreshRate:100,refreshOptions:{},handleHeight:!1,skipOnMount:!1,onResize:function onResize(){}}),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);return __jsx(PanelHeaderStyles,{className:"k-panel-header ".concat((0,container_queries.u)(width))},__jsx("header",{ref,className:"header-container"},__jsx("div",{className:"left"},function BackButton(){if(props.hasBackButton){var backBtnLabel="Back";return props.backButtonLabel&&(backBtnLabel=props.backButtonLabel),__jsx(KButton.Z,{label:backBtnLabel,buttonType:"text-icon-noBG",actionFunc:props.backButtonFunc,iconPlacement:"before-label",iconStandard:"chevron-left",iconSize:"2rem",buttonWidth:"fit-to-content",transitionType:"expand-bg",classes:""})}return null}()),__jsx("h2",{className:"panel-header-label middle"},props.headerText),__jsx("div",{className:"right"},function CloseButton(){return props.hasCloseButton?__jsx(KButton.Z,{label:"Close",buttonType:"text-icon-noBG",iconPlacement:"after-label",iconStandard:"close",buttonWidth:"fit-to-content",classes:"close",iconSize:"2.5rem",transitionType:"expand-bg",actionFunc:function actionFunc(){return function action(){props.closeFunc&&props.closeFunc()}()}}):__jsx(react.Fragment,null)}())))};PanelHeader.displayName="PanelHeader",PanelHeader.__docgenInfo={description:"",methods:[],displayName:"PanelHeader",props:{headerText:{required:!1,tsType:{name:"string"},description:""},hasCloseButton:{required:!0,tsType:{name:"boolean"},description:""},backButtonLabel:{required:!1,tsType:{name:"string"},description:""},closeFunc:{required:!1,tsType:{name:"Function"},description:""},hasBackButton:{required:!0,tsType:{name:"boolean"},description:""},backButtonFunc:{required:!1,tsType:{name:"Function"},description:""}}};try{PanelHeader.displayName="PanelHeader",PanelHeader.__docgenInfo={description:"",displayName:"PanelHeader",props:{headerText:{defaultValue:null,description:"",name:"headerText",required:!1,type:{name:"string"}},hasCloseButton:{defaultValue:null,description:"",name:"hasCloseButton",required:!0,type:{name:"boolean"}},backButtonLabel:{defaultValue:null,description:"",name:"backButtonLabel",required:!1,type:{name:"string"}},closeFunc:{defaultValue:null,description:"",name:"closeFunc",required:!1,type:{name:"Function"}},hasBackButton:{defaultValue:null,description:"",name:"hasBackButton",required:!0,type:{name:"boolean"}},backButtonFunc:{defaultValue:null,description:"",name:"backButtonFunc",required:!1,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeader/PanelHeader.tsx#PanelHeader"]={docgenInfo:PanelHeader.__docgenInfo,name:"PanelHeader",path:"src/components/PanelHeader/PanelHeader.tsx#PanelHeader"})}catch(__react_docgen_typescript_loader_error){}var PopUpStyled=styled_components_browser_esm.ZP.div(PopUpStyled_templateObject||(PopUpStyled_templateObject=(0,taggedTemplateLiteral.Z)(["\n\n  position: fixed;\n  inset: 5%;\n  display: flex;\n  z-index: 12000000;\n  box-shadow: -1px 8px 14px rgb(0 0 0 / 25%);\n  border-radius: 1vw;\n\n  --pop-up-width: ",";\n  \n  &.modal-large-dimensions { \n    // 90% to account for 5% offset on each side \n    // or auto depending on component sizeMode prop\n    height: var(--pop-up-width);\n    width: var(--pop-up-width);\n  }\n\n  &.modal-medium-dimensions { \n    height: 90%;\n    width: 90%;\n    transform: none;\n \n  }\n  &.MyPantryPopUp{\n    .pop-up-contents-container{background-color: #fff;\n      &.mobile,\n      &.tinyEmbedded {\n        .main-content {\n          display: flex;\n          flex-direction: column;\n          width: 100%;\n          align-items: center;\n          justify-content: space-between;\n        }\n\n        .TwoColContainer {\n          display: flex;\n          flex-direction: column;\n          padding: 20px;\n        }\n\n        .TabNavContainer {\n          width: 100%;\n          padding: 20px 0;\n        }\n\n        .ProductInfoContainer {\n          border-right: none;\n          border-bottom: 1px solid #ECE9E4;\n          padding: 20px 0;\n        }\n\n        .EditSubscriptionContainer {\n          padding: 20px;\n        }\n      }\n    }\n    &.medium-dimensions {\n      .main-content {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        align-items: center;\n        justify-content: space-between;\n      }\n\n      .TabNavContainer {\n        width: 100%;\n        padding: 20px 0;\n      }\n\n      .ProductInfoContainer {\n        border-right: 1px solid #ECE9E4;\n        padding: 20px;\n      }\n\n      .EditSubscriptionContainer {\n        padding: 20px;\n      }\n    }\n\n\n\n    //All Breakpoints\n    .pop-up-contents-container {\n      background-color: #fff;\n      margin: auto !important;\n      height: fit-content !important;\n      /*\n      min-height: 450px;\n      */\n      max-height: 90vh;\n      max-width: 90vw !important;\n\n      .k-panel-header {\n        position: relative;\n      }\n    }\n\n    .main-content {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      align-items: stretch;\n      justify-content: space-between;\n    }\n\n\n    .ProductInfoContainer {\n      width: 100%;\n      min-width: 30vw;\n      padding: 0 20px;\n      border-right: 1px solid #ECE9E4;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-start;\n    }\n\n    .EditSubscriptionContainer {\n      width: 100%;\n      min-width: 30vw;\n      padding: 0 20px;\n    }\n\n    .TabNavContainer {\n      background-color: rgb(236, 233, 228);\n      display: flex;\n      flex-direction: row;\n      height: auto;\n      justify-content: center;\n      align-items: center;\n      min-width: 30vw;\n    }\n\n    .TwoColContainer {\n      width: 100%;\n      height: auto;\n      min-width: 60vw;\n      display: flex;\n      flex-direction: row;\n      align-items: stretch;\n      justify-content: space-evenly;\n    }\n\n    .ShippingAddress {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      width: 100%;\n      padding: 20px\n    }\n\n    .PaymentInformation {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      width: 100%;\n      padding: 20px;\n    }\n\n    .k-btn {\n      margin: 10px 0;\n    }\n\n    .bottom-panel {\n      border-top: 1px solid #ECE9E4;\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n    }\n\n    .bottom-content {\n      padding: 0 20px;\n    }\n  }\n\n  &.modal-large-dimensions, &.modal-medium-dimensions {\n    animation: moveDownFromTop 1s ease-in forwards;\n  }\n\n\n  &.modal-mobile-dimensions {\n    inset: 0 !important;\n    height: 100%;\n    width: 100%;\n    animation: moveUpFromBottom 1s ease-in forwards;\n  }\n\n  &.minimal-header {\n    .k-panel-header {\n      border-bottom: none !important;\n\n      .close {\n        label {\n          display: none;\n        }\n      }\n    }\n  }\n\n  &.veil {\n    background-color: rgba(0, 0, 0, 0.25);\n    inset: 0;\n    backdrop-filter: grayscale(1) brightness(0.75) blur(2px);\n  }\n\n  &.white-bg {\n    background-color: white !important;\n  }\n\n\n  .pop-up-contents-container {\n\n    background-color: transparent;\n    border-radius: 0.5rem;\n    overflow: hidden;\n    height: auto;\n    width: 100%;\n    min-width: 30vw;\n    min-height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n\n  }\n\n  .k-panel-header {\n    background: transparent;\n    z-index: 1000;\n    position: relative;\n  }\n\n  .seo-item-container {\n    padding-top: 1rem;\n    padding-bottom: 2rem;\n\n    h1 {\n      font-size: 2rem;\n      position: sticky;\n      top: 0;\n      background-color: white;\n    }\n  }\n\n  .pop-up-child-content { \n    overflow-y: auto;\n    height: 100%;\n    width: 100%;\n    min-height: 30vh;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    z-index: 1;\n  }\n\n  &.desktop {\n    margin: 5% 10%;\n  }\n\n  &.mobile {\n    margin: 0;\n    border-radius: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n\n"])),(function(props){return"full-screen"===props.sizeMode?"90%":"auto"}));try{PopUpStyled.displayName="PopUpStyled",PopUpStyled.__docgenInfo={description:"",displayName:"PopUpStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},sizeMode:{defaultValue:null,description:"",name:"sizeMode",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full-screen"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopUp/PopUpStyled.tsx#PopUpStyled"]={docgenInfo:PopUpStyled.__docgenInfo,name:"PopUpStyled",path:"src/components/PopUp/PopUpStyled.tsx#PopUpStyled"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),PopUp_jsx=react.createElement,PopUp=function PopUp(props){var _useState=(0,react.useState)(props.isOpen),isPopUpVisible=_useState[0],_useResizeDetector=(_useState[1],(0,index_esm.NB)()),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);(0,react.useEffect)((function(){console.log(width)}),[width]);var veil=function veil(){return props.hasVeil?"veil":""},handleClose=function handleClose(){props.closeFunc&&props.closeFunc()},popUpStyle=function popUpStyle(widthX){return widthX&&widthX<700?"mobile":"desktop"};return react_dom.createPortal(function createPopUp(widthX){return isPopUpVisible?PopUp_jsx(PopUpStyled,{ref,className:"pop-up ".concat(veil()," ").concat(props.classes)},PopUp_jsx("div",{className:"pop-up-contents-container ".concat(popUpStyle(widthX))},function getHeader(){return props.hasHeader?PopUp_jsx(PanelHeader,{closeFunc:handleClose,headerText:props.windowTitle,hasCloseButton:!0,hasBackButton:!!props.hasBackButton&&props.hasBackButton,backButtonFunc:props.backButtonFunc}):PopUp_jsx(PanelHeader,{closeFunc:handleClose,headerText:"",hasCloseButton:!0,hasBackButton:!!props.hasBackButton&&props.hasBackButton})}(),PopUp_jsx("div",{className:"pop-up-child-content"},props.children)),props.hasVeil?PopUp_jsx("div",{className:"veil",onClick:handleClose}):null):PopUp_jsx(react.Fragment,null)}(width||window.innerWidth),function getAppendTo(){return props.appendTo&&"body"!==props.appendTo?document.getElementById(props.appendTo):document.body}())};try{PopUp.displayName="PopUp",PopUp.__docgenInfo={description:"",displayName:"PopUp",props:{hasVeil:{defaultValue:null,description:"",name:"hasVeil",required:!1,type:{name:"boolean"}},windowTitle:{defaultValue:null,description:"",name:"windowTitle",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},hasHeader:{defaultValue:null,description:"",name:"hasHeader",required:!0,type:{name:"boolean"}},closeFunc:{defaultValue:null,description:"",name:"closeFunc",required:!1,type:{name:"Function"}},hasBackButton:{defaultValue:null,description:"",name:"hasBackButton",required:!1,type:{name:"boolean"}},backButtonFunc:{defaultValue:null,description:"",name:"backButtonFunc",required:!1,type:{name:"Function"}},appendTo:{defaultValue:null,description:"",name:"appendTo",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},sizeMode:{defaultValue:null,description:"",name:"sizeMode",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full-screen"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopUp/PopUp.tsx#PopUp"]={docgenInfo:PopUp.__docgenInfo,name:"PopUp",path:"src/components/PopUp/PopUp.tsx#PopUp"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_utilities/clickOutsideChecker/clickOutsideHook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useOutsideToggler});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),useOutsideToggler=function useOutsideToggler(ref,setThisToFalse,isOpen){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleClickOutside=function handleClickOutside(event){var bla=event;ref&&!ref.contains(bla.target)&&(console.log("clicked outside"),setThisToFalse())};if(isOpen)return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[ref,setThisToFalse,isOpen])}}}]);