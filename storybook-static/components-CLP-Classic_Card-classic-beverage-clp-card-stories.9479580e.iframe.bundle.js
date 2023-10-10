"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[9278],{"./src/components/CLP/Classic_Card/classic-beverage-clp-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClassicCardExample:()=>ClassicCardExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _podLibrary$0$product,_podLibrary$0$product2,_ClassicCardExample$p,_ClassicCardExample$p2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/data/beverage-library.tsx"),_ProductList_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/CLP/ProductList/utils.tsx"),_classic_beverage_clp_card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/CLP/Classic_Card/classic-beverage-clp-card.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"CLP/Classic Grid",component:_classic_beverage_clp_card__WEBPACK_IMPORTED_MODULE_4__.Z,argTypes:{isLoggedIn:{control:"boolean"},product:{control:"object"},formFactor:{control:"radio",options:["mobile","desktop"]},calculateCardWidth:{control:"boolean"},pricingStyle:{control:"radio",options:["classic","member-pricing-simple","member-price-no-icon"]}}};var Template=function Template(args){return __jsx(_classic_beverage_clp_card__WEBPACK_IMPORTED_MODULE_4__.Z,args)};Template.displayName="Template";var ClassicCardExample=Template.bind({});ClassicCardExample.args={isLoggedIn:!0,formFactor:"mobile",priceLabel:"Member Price",calculateCardWidth:!0,product:{productType:null!==(_podLibrary$0$product=_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].productType)&&void 0!==_podLibrary$0$product?_podLibrary$0$product:"pod",ratingVisible:!0,flag:_ProductList_utils__WEBPACK_IMPORTED_MODULE_3__.qK,prices:_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].productPrices.map((function(price,index){var _index;return{price,inStock:!0,variant:{quantity:null!==(_index=_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].boxSizes[index])&&void 0!==_index?_index:0,variantName:"ct"}}})),name:_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].podName,brand:_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].brand,image:null!==(_podLibrary$0$product2=_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].productImagePrimaryPath)&&void 0!==_podLibrary$0$product2?_podLibrary$0$product2:"",rating:{totalNumberOfStars:5,totalNumberOfReviews:(0,_ProductList_utils__WEBPACK_IMPORTED_MODULE_3__.t$)(400,1623,"integer"),ratingNumber:(0,_ProductList_utils__WEBPACK_IMPORTED_MODULE_3__.t$)(3.8,4.9,"float")},onClick:function onClick(){return console.log("Add to Cart clicked for ".concat(_data_beverage_library__WEBPACK_IMPORTED_MODULE_2__.c[0].podName))}},rating:{totalNumberOfStars:5,totalNumberOfReviews:(0,_ProductList_utils__WEBPACK_IMPORTED_MODULE_3__.t$)(400,1623,"integer"),ratingNumber:(0,_ProductList_utils__WEBPACK_IMPORTED_MODULE_3__.t$)(3.8,4.9,"float")},pricingStyle:"classic"},ClassicCardExample.parameters=_objectSpread(_objectSpread({},ClassicCardExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ClassicCardExample$p=ClassicCardExample.parameters)||void 0===_ClassicCardExample$p?void 0:_ClassicCardExample$p.docs),{},{source:_objectSpread({originalSource:"args => <ClassicClpCard {...args} />"},null===(_ClassicCardExample$p2=ClassicCardExample.parameters)||void 0===_ClassicCardExample$p2||null===(_ClassicCardExample$p2=_ClassicCardExample$p2.docs)||void 0===_ClassicCardExample$p2?void 0:_ClassicCardExample$p2.source)})})},"./src/components/CLP/Classic_Card/classic-beverage-clp-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>classic_beverage_clp_card});var _templateObject,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),common_styled=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),MemberCardStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\n  &.classic {\n    .square-btn {\n      border-radius: 0 !important;\n      font-weight: bold;\n      font-size: 14px;\n    }\n    button.k-btn.toggle-item {\n      border-width: 1px !important;\n      border-color: var(--colorDarkRoast) !important;\n      background-color: white;\n      border-radius: 0.5rem;\n      .expander{\n        opacity: 0!important;\n      }\n      transition: none!important;\n      //margin-top: auto;\n      flex-basis: 0;\n      /*      &:active{\n              .expander{\n                background-color: var(--colorDarkRoast);\n              }\n            }*/\n\n      &:hover {\n        .expander{\n          opacity: 0!important;\n        }\n        label {\n          /*\n          color: var(--colorDarkRoast) !important;\n          */\n        }\n      }\n\n      .expander {\n        border-radius: 0.5rem;\n      }\n\n      &.toggle-selected {\n        pointer-events: none;\n        /* background-color: var(--colorDarkRoast) !important;*/\n        box-shadow: 0 0 0 1px var(--colorDarkRoast);\n        font-weight: bold;\n        color: white !important;\n        border: -1px !important;\n        overflow: visible;\n\n        .icon.carat {\n          margin-top: -1px !important;\n          /*\n          animation: moveDownFromTop 1s forwards;\n          */\n\n          &.carat-pointing-up {\n            margin-bottom: -1px;\n          }\n        }\n\n        .filled {\n          fill: white;\n        }\n      }\n    }\n\n    &.desktop{\n      .invisible-button {\n        box-sizing: border-box;\n        position: relative;\n        height: 100%;\n        width: 100%;\n        background-color: white;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        box-shadow: inset 0px -20px 20px 0px rgb(0 0 0 / 5%);\n        z-index: 100;\n        border: 2px solid transparent;\n        \n        .options-container{\n          display: none;\n        }\n        &:hover {\n          z-index: 1000;\n          .options-container {\n            display: flex;\n            position: absolute;\n            height: 75px;\n            bottom: -75px;\n            background-color: white;\n            border-bottom: 2px solid #000;\n            border-left: 2px solid #000;\n            border-right: 2px solid #000;\n            padding: 15px;\n            left: -2px; /* Adjust for the parent's left border */\n            right: -2px; /* Adjust for the parent's right border */\n            width: calc(100% + 4px); /* Adjust the width */\n          }\n\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n          border: 2px solid #000;\n        }\n      }\n      .card-primary-section {\n        padding-bottom: 1rem;\n      }\n    }\n    &.mobile {\n\n      .options-container {\n        display: flex;\n        padding: 0 15px 15px 15px;\n      }\n\n      .card-primary-section {\n        padding-bottom: 0;\n      }\n\n      .product-image {\n        margin: 12px;\n        display: flex;\n        align-items: center;\n      }\n\n      .RegularPrice {\n        border-top: 1px solid ",";\n      }\n    }\n  }\n\n  &.member-pricing-simple{\n  \n  }\n  ",";\n  --colorDiscount: ",";\n  background-color: white;\n  padding: 0.3rem 0.3rem;\n\n\n  .k-btn.secondary {\n    label {\n      color: #3B2B2F;\n    }\n\n    &:hover {\n      font-weight: bold;\n    }\n  }\n\n  .product-card {\n    position: relative;\n    background-color: ",";\n    box-shadow: rgb(210, 210, 210) 0px 5px 25px 0px;\n    border-radius: 0 !important;\n    height: 100%;\n  }\n\n  * {\n    box-sizing: border-box;\n    user-select: none;\n  }\n\n  .k-btn {\n    padding: 1.25rem 0.5rem !important;\n  }\n\n  &.small-mobile {\n    .brand {\n      font-size: 10px;\n    }\n  }\n\n  &.mobile {\n    .just-once {\n      padding-right: 12px !important;\n      padding-left: 12px !important;\n    }\n    /*\n    .invisible-button {\n      &:hover {\n        z-index: 1000;\n\n        .options-container {\n          display: flex;\n          position: absolute;\n          padding: 15px;\n        }\n\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n        border: 2px solid #000;\n      }\n    }\n    */\n\n    .product-info-container {\n      .brand {\n        font-size: 12px;\n      }\n\n      .product-name {\n        font-size: 18px;\n        margin-bottom: 6px;\n      }\n\n      .toggle-item {\n        padding: 0.25rem;\n\n        label {\n          font-size: 12px;\n        }\n      }\n    }\n  }\n\n\n\n  .product-info-container {\n    width: 100%;\n    padding: 15px;\n  }\n\n  .just-once {\n    border: none !important;\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .subscribe {\n    border-color: var(--colorBoldCTA) !important;\n    border-width: 2px !important;\n    justify-content: center !important;\n\n    label {\n      font-weight: 600 !important;\n    }\n  }\n\n  .icon-add {\n    width: 112px !important;\n  }\n\n  //Toggle\n  .k-toggle-container {\n    display: flex;\n    gap: 1%;\n    padding: 10px 0 20px 0;\n\n    .toggle-item-container {\n      flex-basis: 100%;\n\n      .toggle-item {\n        overflow: visible;\n\n        .expander {\n          border-radius: 2px;\n        }\n\n        .carat {\n          bottom: -6px;\n          width: 100%;\n        }\n      }\n\n      .carat {\n        background-color: var(--colorDarkRoast);\n        height: 2px;\n\n        svg {\n          display: none !important;\n        }\n      }\n    }\n\n    .secondary {\n      background-color: white;\n      border: 1px solid rgb(153, 153, 153) !important;\n      border-radius: 4px;\n      padding: 0.5rem;\n\n      &:hover {\n        /*\n        box-shadow: 0 0 0 1px var(--colorDarkRoast);\n        */\n      }\n    }\n  }\n\n  .options-container {\n    display: flex;\n    gap: 4px;\n    padding-top: 1rem;\n      /*\n    border-top: 1px solid ",";\n*/\n  }\n\n  .pod-info {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .product-name {\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  .brand {\n    font-size: 12px;\n  }\n\n  .final-price {\n    color: var(--colorDiscount);\n\n    .label {\n      font-size: 12px;\n      position: absolute;\n    }\n  }\n\n  .main-pricing {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .price {\n    display: flex;\n\n    .dollar {\n      font-size: 36px;\n      font-weight: 600;\n    }\n\n    .dollar, .cents, .currency {\n      line-height: 1;\n    }\n  }\n\n  .member-price-display {\n    display: flex;\n    margin-bottom: 0;\n    margin-top: 20px;\n    justify-content: center;\n  }\n\n  .strike-through {\n    display: flex;\n    align-content: center;\n    flex-wrap: wrap;\n    position: relative;\n    font-size: 18px;\n    margin-left: 12px;\n\n    .striker {\n      height: 1px;\n      width: 100%;\n      background-color: grey;\n      position: absolute;\n      top: 50%;\n    }\n  }\n\n  .ratings-overall-container {\n    height: 18px;\n    margin: 2% 0;\n  }\n\n  //Subscription config\n  .subscription-configuration {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  .drop-down {\n    .k-btn {\n      width: 3rem !important;\n      height: 3rem !important;\n      padding: 0.75rem !important;\n    }\n  }\n\n  .drop-down-container {\n    width: 100%;\n\n    .selection-label {\n      width: 100%;\n    }\n\n    .drop-down {\n      display: flex;\n      flex-direction: row-reverse;\n      width: 100%;\n      justify-content: space-between;\n    }\n  }\n\n  .drop-down-item {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n\n    .icon.icon-checkmark {\n      height: 1rem;\n      width: 1rem;\n      margin-left: 0.5rem;\n    }\n  }\n\n  &.desktop {\n    .product-image {\n      img {\n        object-fit: contain;\n        width: 100%;\n        height: auto;\n        padding: 10%;\n        box-sizing: border-box;\n      }\n    }\n  }\n\n  &.mobile {\n    .pod-info {\n      flex-direction: row;\n    }\n\n    .product-image {\n      width: 40%;\n      margin-right: 12px;\n      min-width: 7rem;\n\n      img {\n        width: 100%;\n      }\n    }\n  }\n\n"])),(0,colorNameToValue.G)("sepia"),common_styled.oe,(0,colorNameToValue.G)("discount"),(0,colorNameToValue.G)("white"),(0,colorNameToValue.G)("sepia"));try{MemberCardStyled.displayName="MemberCardStyled",MemberCardStyled.__docgenInfo={description:"",displayName:"MemberCardStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/Classic_Card/classic-beverage-clp-card.styled.tsx#MemberCardStyled"]={docgenInfo:MemberCardStyled.__docgenInfo,name:"MemberCardStyled",path:"src/components/CLP/Classic_Card/classic-beverage-clp-card.styled.tsx#MemberCardStyled"})}catch(__react_docgen_typescript_loader_error){}var PodInfo=__webpack_require__("./src/components/CLP/general_card_components/PodInfo.tsx"),index_esm=(__webpack_require__("./src/components/DropDown/drop-down.tsx"),__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js")),Rating=__webpack_require__("./src/components/Rating/Rating.tsx"),__jsx=react.createElement,ClassicClpCard=function ClassicClpCard(props){var _React$useState=react.useState(1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),_React$useState3=(_React$useState2[0],_React$useState2[1],react.useState(!0)),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),_React$useState5=(_React$useState4[0],_React$useState4[1],react.useState("start")),_React$useState6=(0,slicedToArray.Z)(_React$useState5,2),navState=_React$useState6[0],_React$useState7=(_React$useState6[1],react.useState(0)),_React$useState8=(0,slicedToArray.Z)(_React$useState7,2),selectedVariantIndex=_React$useState8[0],_React$useState9=(_React$useState8[1],react.useState("desktop")),_React$useState10=(0,slicedToArray.Z)(_React$useState9,2),formFactor=_React$useState10[0],setFormFactor=_React$useState10[1],_useResizeDetector=(0,index_esm.NB)({refreshMode:"throttle",refreshRate:200,refreshOptions:{leading:!0,trailing:!1},handleHeight:!1,skipOnMount:!1,onResize:function onResize(){}}),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);(0,react.useEffect)((function(){getFormFactor(width)}),[width]);var getFormFactor=function getFormFactor(width){width&&setFormFactor(width<600&&width>360?"mobile":width<360?"small-mobile":"desktop")};return __jsx(MemberCardStyled,{ref,className:"product-card classic ".concat(props.calculateCardWidth?formFactor:props.formFactor," ")},function getNavState(currentNavState){switch(currentNavState){case"sub-or-once":return __jsx("div",{className:"options-container ".concat(currentNavState)});case"start":return __jsx("div",{className:"invisible-button"},__jsx("div",{className:"product-card"},__jsx("div",{className:"card-primary-section"},__jsx(PodInfo.q,{productImage:props.product.image,productName:props.product.name,brandName:props.product.brand,productType:props.product.productType,price:.75*props.product.prices[selectedVariantIndex].price,priceLabel:props.priceLabel,strikeThroughPrice:props.product.prices[selectedVariantIndex].price,rating:props.product.rating,enableRating:!1,infoFunction:props.infoFunction,pricingStyle:props.pricingStyle})),__jsx("div",{className:"options-container ".concat(currentNavState)},__jsx("div",{className:"card-primary-section"},props.rating&&__jsx(Rating.i,{ratingNumber:props.rating.ratingNumber,scrollToTargetID:"",totalNumberOfReviews:props.rating.totalNumberOfReviews,totalNumberOfStars:props.rating.totalNumberOfStars,classes:"mobile-only",layout:"vertical"})),__jsx(KButton.Z,{transitionType:"none",classes:"cta-main square-btn",buttonWidth:"fit-width",label:"BUY NOW",iconStandard:"icon-subscribe",iconPlacement:"no-icon",buttonType:"ecommerce-secondary",actionFunc:props.actionFunction}))))}}(navState))};ClassicClpCard.displayName="ClassicClpCard",ClassicClpCard.__docgenInfo={description:"",methods:[],displayName:"ClassicClpCard",props:{rating:{required:!1,tsType:{name:"iRating"},description:""},product:{required:!0,tsType:{name:"iProductInfoCardProps"},description:""},isLoggedIn:{required:!0,tsType:{name:"boolean"},description:""},formFactor:{required:!0,tsType:{name:"union",raw:'"mobile" | "small-mobile" | "desktop"',elements:[{name:"literal",value:'"mobile"'},{name:"literal",value:'"small-mobile"'},{name:"literal",value:'"desktop"'}]},description:""},priceLabel:{required:!0,tsType:{name:"string"},description:""},calculateCardWidth:{required:!0,tsType:{name:"boolean"},description:""},actionFunction:{required:!0,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""},infoFunction:{required:!0,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""},pricingStyle:{required:!0,tsType:{name:"union",raw:'"classic" | "member-pricing-simple" | "member-price-no-icon"',elements:[{name:"literal",value:'"classic"'},{name:"literal",value:'"member-pricing-simple"'},{name:"literal",value:'"member-price-no-icon"'}]},description:""}}};const classic_beverage_clp_card=ClassicClpCard;try{classicbeverageclpcard.displayName="classicbeverageclpcard",classicbeverageclpcard.__docgenInfo={description:"",displayName:"classicbeverageclpcard",props:{rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"iRating"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"iProductInfoCardProps"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},formFactor:{defaultValue:null,description:"",name:"formFactor",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"desktop"'},{value:'"small-mobile"'}]}},priceLabel:{defaultValue:null,description:"",name:"priceLabel",required:!0,type:{name:"string"}},calculateCardWidth:{defaultValue:null,description:"",name:"calculateCardWidth",required:!0,type:{name:"boolean"}},actionFunction:{defaultValue:null,description:"",name:"actionFunction",required:!0,type:{name:"() => void"}},infoFunction:{defaultValue:null,description:"",name:"infoFunction",required:!0,type:{name:"() => void"}},pricingStyle:{defaultValue:null,description:"",name:"pricingStyle",required:!0,type:{name:"enum",value:[{value:'"classic"'},{value:'"member-pricing-simple"'},{value:'"member-price-no-icon"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CLP/Classic_Card/classic-beverage-clp-card.tsx#classicbeverageclpcard"]={docgenInfo:classicbeverageclpcard.__docgenInfo,name:"classicbeverageclpcard",path:"src/components/CLP/Classic_Card/classic-beverage-clp-card.tsx#classicbeverageclpcard"})}catch(__react_docgen_typescript_loader_error){}}}]);