"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[1155],{"./src/components/SpecificationsArea/specifications-area.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommonExample:()=>CommonExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _CommonExample$parame,_CommonExample$parame2,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_data_product_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/data/product-data.tsx"),_SpecificationsArea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/SpecificationsArea/SpecificationsArea.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var specAreaSettings={title:"Molecules/Specifications Area",component:_SpecificationsArea__WEBPACK_IMPORTED_MODULE_3__.I,argTypes:{contentStack:{control:"object"},mediaType:{control:"radio",options:["movie","image"]},mediaElementPath:{control:"text"}}},Template=function Template(args){return __jsx(_SpecificationsArea__WEBPACK_IMPORTED_MODULE_3__.I,args)};Template.displayName="Template";var CommonExample=Template.bind({});CommonExample.args={contentStack:[{cardType:"header-area",cardData:{headerAlignment:"center",colorScheme:"dark-roast",headerLabel:"Brew Possibilities",headerStyle:"line-through",hierarchyLevel:3}},{cardType:"multi-card-presenter",cardData:{cards:_data_product_data__WEBPACK_IMPORTED_MODULE_2__.oU}},{cardType:"header-area",cardData:{colorScheme:"dark-roast",headerLabel:"Specifications",headerStyle:"line-through",hierarchyLevel:3,headerAlignment:"center"}},{cardType:"header-area",cardData:{headerAlignment:"left",colorScheme:"dark-roast",headerLabel:"Dimensions",headerStyle:"medium-light",hierarchyLevel:3}},{cardType:"multi-key-value-area",cardData:{layoutMode:"inline",items:[{layoutType:"inline",primaryMessage:{label:"Height:"},secondaryMessage:{label:'12.7"'},colorSchemes:"dark-roast"},{layoutType:"inline",primaryMessage:{label:"Height when open:"},secondaryMessage:{label:'17.2"'},colorSchemes:"dark-roast"},{layoutType:"inline",primaryMessage:{label:"Width:"},secondaryMessage:{label:'17.2"'},colorSchemes:"dark-roast"},{layoutType:"inline",primaryMessage:{label:"Weight:"},secondaryMessage:{label:'8.1lbs"'},colorSchemes:"dark-roast"}]}},{cardType:"multi-card-presenter",cardData:{cards:[{cardType:"simple",simpleCardData:{title:"",titlePosition:"after-image",mainImageSize:"default-size",alignment:"center",mainFocalImage:{imagePath:"/product-images/kcs/kcs-dimensions.png",cropStyle:"no-crop"}}}]}},{cardType:"multi-key-value-area",cardData:{layoutMode:"inline",items:[{layoutType:"stacked",primaryMessage:{label:"Phone Compatability"},secondaryMessage:{label:"The K-Café® SMART brewer is compatible with iOS 13 and higher and Android 8 or higher."},colorSchemes:"dark-roast"},{layoutType:"stacked",primaryMessage:{label:"Wi-Fi® Requirements"},secondaryMessage:{label:'The K-Café® SMART is optimized for home 2.4 GHz Wi-Fi® networks, using WPA2-PSK security. It is not compatible with networks that require an additional username and/or password, a webpage click through to establish a connection or 5 GHz Wi-Fi® networks."'},colorSchemes:"dark-roast"},{layoutType:"stacked",primaryMessage:{label:"Compatible with the My K-Cup® Universal Reusable Coffee Filter"},secondaryMessage:{label:"Brew your own ground coffee (sold separately)"},colorSchemes:"dark-roast"}]}}],mediaType:"movie",mediaElementPath:"/video/kcs_pdp.webm"};const __WEBPACK_DEFAULT_EXPORT__=specAreaSettings;CommonExample.parameters=_objectSpread(_objectSpread({},CommonExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CommonExample$parame=CommonExample.parameters)||void 0===_CommonExample$parame?void 0:_CommonExample$parame.docs),{},{source:_objectSpread({originalSource:"args => <SpecificationsArea {...args} />"},null===(_CommonExample$parame2=CommonExample.parameters)||void 0===_CommonExample$parame2||null===(_CommonExample$parame2=_CommonExample$parame2.docs)||void 0===_CommonExample$parame2?void 0:_CommonExample$parame2.source)})})},"./src/components/ContentComponents/ProductCard/ProductCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ProductCard});var esm=__webpack_require__("./node_modules/interweave/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),Price=__webpack_require__("./src/components/Price/Price.tsx"),__jsx=react.createElement,ValidationInput=function ValidationInput(props){var _useState=(0,react.useState)(""),currentInput=_useState[0],setCurrentInput=_useState[1],isValidEmail=function isValidEmail(value){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)};return __jsx("div",{className:"validation-input"},__jsx("input",{className:"text-input",value:currentInput,onChange:function onChange(e){return function handleInput(event){props.handlerFunction(event,isValidEmail(event.target.value)),setCurrentInput(event.target.value)}(e)}}),function getValidation(inputValue){if("email"===props.validationType)return function validateEmail(value){if(!(value.length<3))return isValidEmail(value)?void 0:__jsx("div",{className:"notification error"},__jsx(Graphic.Z,{graphicName:"error-notification",iconSize:"1rem"}),__jsx("p",null,"Enter a valid email address"))}(inputValue)}(currentInput))};ValidationInput.displayName="ValidationInput",ValidationInput.__docgenInfo={description:"",methods:[],displayName:"ValidationInput",props:{validationType:{required:!0,tsType:{name:"literal",value:'"email"'},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},handlerFunction:{required:!0,tsType:{name:"Function"},description:""}}};try{ValidationInput.displayName="ValidationInput",ValidationInput.__docgenInfo={description:"",displayName:"ValidationInput",props:{validationType:{defaultValue:null,description:"",name:"validationType",required:!0,type:{name:'"email"'}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!0,type:{name:"string"}},handlerFunction:{defaultValue:null,description:"",name:"handlerFunction",required:!0,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ValidationInput/ValidationInput.tsx#ValidationInput"]={docgenInfo:ValidationInput.__docgenInfo,name:"ValidationInput",path:"src/components/ValidationInput/ValidationInput.tsx#ValidationInput"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),ProductCardStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-content: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 2rem;\n  .features{\n    .bullet-point{\n      .feature-description{\n        margin-left: 0;\n        margin-bottom: 0.25rem;\n        text-align: center;\n      }\n    }\n  }\n  .cta-container{\n    margin-top: auto;\n  }\n  .price-container-main {\n    .final-price{\n      margin-left: 0;\n      padding: 0;\n      font-size: 2rem;\n      color: ",";\n      .currency{\n        left: -0.5rem;\n      }\n    }\n  }\n  .fly-out{\n    &.notify-me{\n      .text-input{\n        margin-bottom: 1.5rem;\n      }\n      .k-btn{\n        margin: 0;\n        &:first-of-type{\n          margin-bottom: 0.5rem;\n        }\n      }\n    }\n  }\n  .k-btn{\n    margin: 1rem;\n\n  }\n  .price-container-main{\n    align-self: center;\n  }\n  h3{\n    margin-bottom: 0.5rem;\n  }\n  p{\n    font-size: 1.25rem;\n    font-weight: 200;\n  }\n  h3,p{\n    text-align: center;\n    color: $text;\n  }\n  p{\n    margin: 0.5rem 1rem;\n  }\n\n  .color-options{\n    display: flex;\n    justify-content: center;\n\n    ul{\n      display: flex;\n      list-style: none;\n      margin: 1rem;\n    }\n    .color-dot{\n      transition: all 0.5s;\n      position: relative;\n      margin-right: 0.5rem;\n      height: 2rem;\n      width:2rem;\n      border-radius: 100vw;\n      cursor: pointer;\n      overflow: visible;\n      display: flex;\n      align-content: center;\n      align-items: center;\n      justify-content: center;\n\n      .out-of-stock{\n        width: 100%;\n        height: 1px;\n        border-bottom: 2px solid gray;\n        transform: rotateZ(45deg);\n        mix-blend-mode: difference;\n        position: absolute;\n        top: 50%;\n      }\n      &:hover{\n        transform: scale(1.35);\n      }\n      &.white{\n        border : 1px solid $dark-roast;\n      }\n\n      &.selected{\n        .selected-marker{\n          position: absolute;\n          left: -0.25rem;\n          right: -0.25rem;\n          top: -0.25rem;\n          bottom: -0.25rem;\n          border: 1px solid;\n          border-radius: 100vw;\n        }\n      }\n\n    }\n  }\n  .learn-more{\n    color: $dark-roast;\n    label{text-decoration: underline}\n  }\n  .product-name{\n    text-align: center;\n    font-size: 1.5rem;\n    margin: 1rem 0.5rem;\n    color: $dark-roast;\n  }\n  .product-image{\n    max-height: 20vh;\n    object-fit: contain;\n  }\n\n"])),(0,colorNameToValue.G)("text"));try{ProductCardStyled.displayName="ProductCardStyled",ProductCardStyled.__docgenInfo={description:"",displayName:"ProductCardStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/ProductCard/product-card.styled.tsx#ProductCardStyled"]={docgenInfo:ProductCardStyled.__docgenInfo,name:"ProductCardStyled",path:"src/components/ContentComponents/ProductCard/product-card.styled.tsx#ProductCardStyled"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),ProductCard_jsx=react.createElement,ProductCard=function ProductCard(props){var _useState=(0,react.useState)(0),selectedVariant=_useState[0],setSelectedVariant=_useState[1],_useState2=(0,react.useState)(!1),emailValid=_useState2[0],setEmailValid=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(_useState3[0],_useState3[1],(0,react.useState)(!1)),notifyOpenStatus=_useState4[0],setNotifyOpenStatus=_useState4[1];function actionPrimary(){isItOutOfStock()&&props.notifyMeFunction&&(setNotifyOpenStatus(!0),props.notifyMeFunction()),!isItOutOfStock()&&props.addToCartFunction&&(console.log("add to cart"),props.addToCartFunction()),isItOutOfStock()&&(console.log("out of stock"),function notifyMeOpen(){console.log("notify me"),setNotifyOpenStatus(!0)}())}function actionSecondary(){props.secondaryAction&&props.secondaryAction()}function notifyMeAction(){console.log("submit email"),props.notifyMeFunction&&props.notifyMeFunction(),setNotifyOpenStatus(!1)}(0,react.useEffect)((function(){for(var i=0;i<props.colorVariants.length;i++)if(!props.colorVariants[i].inStock&&i==selectedVariant)for(var j=0;j<props.colorVariants.length;j++)props.colorVariants[j].inStock&&setSelectedVariant(j);setSelectedVariant(-1)}),[props.colorVariants,selectedVariant]);var isItOutOfStock=function isItOutOfStock(){if(0==props.colorVariants.length)return!1;for(var outOfStockCount=0,i=0;i<props.colorVariants.length;i++)props.colorVariants[i].inStock||outOfStockCount++;return props.colorVariants.length==outOfStockCount||void 0},handleNotifyMe=function handleNotifyMe(event,validationStatus){console.log(event.target.value),validationStatus&&setEmailValid(validationStatus),setEmailValid(validationStatus)},getNotifyMeFlyout=function getNotifyMeFlyout(notifyStatus){if(notifyStatus)return ProductCard_jsx("div",{className:"notify-me fly-out"},ProductCard_jsx("div",{className:"fly-out-content"},ProductCard_jsx("label",null,"Email:"),ProductCard_jsx(ValidationInput,{validationType:"email",inputValue:"",handlerFunction:handleNotifyMe}),function getSubmitButton(){if(emailValid)return ProductCard_jsx(KButton.z,{buttonType:"primary",iconPlacement:"no-icon",transitionType:"expand-bg",iconStandard:"none",label:"Submit",classes:"dark",actionFunc:notifyMeAction})}(),ProductCard_jsx(KButton.z,{buttonType:"secondary",buttonWidth:"fit-width",iconPlacement:"no-icon",iconStandard:"none",transitionType:"expand-bg",label:"Close",classes:"light",actionFunc:function actionFunc(){return setNotifyOpenStatus(!1)}})))},getPriceInfo=function getPriceInfo(){var priceData={basePrice:0,finalPrice:0,showStrikeThrough:!1};return props.priceOriginal&&(priceData.basePrice=props.priceOriginal),props.priceFinal&&(priceData.finalPrice=props.priceFinal),props.showStrikeThrough&&(priceData.showStrikeThrough=props.showStrikeThrough),priceData};return ProductCard_jsx(ProductCardStyled,{className:"product-item-card"},ProductCard_jsx("h1",{className:"product-name"},props.productName),ProductCard_jsx("img",{alt:"",className:"product-image",src:props.productImagePath}),ProductCard_jsx("div",{className:"color-options"},function getColorOptions(){if(props.showProductColors){for(var variants=[],_loop=function _loop(i){var colorValueChecked=function colorValueChecked(index){return props.productColorValues[index]?props.productColorValues[index]:""};variants.push(ProductCard_jsx("li",{key:i,onClick:function onClick(){return function manageSetVariant(selectedIndex){props.colorVariants[selectedIndex].inStock&&setSelectedVariant(selectedIndex)}(i)},className:"color-dot ".concat(function getSelection(index){return 1==props.colorVariants.length||i==selectedVariant&&props.colorVariants[i].inStock?"selected":""}()," ").concat(function getOutOfStockDisabled(index){return props.colorVariants[index].inStock?"":"disabled"}(i),"  ").concat(function specialColorConsiderations(colorValue){return"white"==colorValue.toLowerCase()||"white"==colorValue.toLowerCase()?"white":""}(colorValueChecked(i))," "),style:{backgroundColor:colorValueChecked(i)}},function inStockStatus(){return props.colorVariants[i].inStock?ProductCard_jsx(react.Fragment,null):ProductCard_jsx("div",{className:"out-of-stock"})}(),ProductCard_jsx("div",{className:"selected-marker"})))},i=0;i<props.colorVariants.length;i++)_loop(i);return ProductCard_jsx("ul",null,variants)}}()),function getPriceDisplay(){if(props.showPrice)return ProductCard_jsx(Price.t,{basePrice:getPriceInfo().basePrice,currency:"$",finalPrice:getPriceInfo().finalPrice,discountPercentAsNumber:20,showStrikeThrough:getPriceInfo().showStrikeThrough})}(),ProductCard_jsx("h3",null,ProductCard_jsx(esm.wZ,{content:props.primarySlogan})),function getFeaturesList(){if(props.featuresList)return ProductCard_jsx("div",{className:"features-list"},ProductCard_jsx(esm.wZ,{content:props.featuresList}))}(),ProductCard_jsx("p",null,props.pricingMessage),function getCTA(notificationStatus){if(!props.hasCTA)return ProductCard_jsx(react.Fragment,null);var getCTAlabel=function getCTAlabel(){return isItOutOfStock()?"Notify me":props.hasCTA&&props.primaryCtaLabel?props.primaryCtaLabel:"Add to cart"},determinePrimaryStatus=function determinePrimaryStatus(){return isItOutOfStock()?"secondary":"primary"},secondaryLabelChecked=function secondaryLabelChecked(){return props.secondaryLabel?props.secondaryLabel:""};return ProductCard_jsx("div",{className:"cta-container"},function getPrimaryCTA(){return notificationStatus?getNotifyMeFlyout(notificationStatus):emailValid?ProductCard_jsx("div",{className:"notification success"},ProductCard_jsx(Graphic.z,{graphicName:"checkmark-circled",iconSize:"1.5rem",colorOverride:""}),ProductCard_jsx("p",null,"You'll receive an email from Keurig when the item becomes available")):ProductCard_jsx(KButton.z,{transitionType:"expand-bg",buttonType:determinePrimaryStatus(),buttonWidth:"fit-to-content",classes:"light",backgroundColorOverride:props.ctaColorOverride,iconPlacement:"after-label",iconStandard:props.primaryCtaIcon,actionFunc:actionPrimary,label:getCTAlabel()})}(),function getSecondaryCTA(){if(props.hasSecondaryCTA)return ProductCard_jsx(KButton.z,{transitionType:"expand-bg",buttonType:"secondary",buttonWidth:"fit-to-content",classes:"light",backgroundColorOverride:props.ctaColorOverride,iconPlacement:"after-label",iconStandard:"icon-add",actionFunc:actionSecondary,label:secondaryLabelChecked()})}())}(notifyOpenStatus),function getLearnMoreLink(){if(!props.hasLearMoreLink)return ProductCard_jsx(react.Fragment,null);return ProductCard_jsx(react.Fragment,null,ProductCard_jsx(KButton.z,{transitionType:"none",buttonType:"link-internal",buttonWidth:"fit-to-content",classes:"light learn-more",iconPlacement:"no-icon",iconStandard:"none",label:function labelChecked(){return props.hasLearMoreLink&&props.learnMoreLabel?props.learnMoreLabel:"Learn more"}()}))}(),function getFinePrint(){if(props.finePrint)return ProductCard_jsx("div",{className:"fine-print"},ProductCard_jsx(esm.wZ,{content:props.finePrint}))}())};ProductCard.displayName="ProductCard",ProductCard.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{primarySlogan:{required:!1,tsType:{name:"string"},description:""},secondarySlogan:{required:!1,tsType:{name:"string"},description:""},productImagePath:{required:!0,tsType:{name:"string"},description:""},productName:{required:!0,tsType:{name:"string"},description:""},showProductColors:{required:!0,tsType:{name:"boolean"},description:""},productColorValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},colorVariants:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  variantName : string;\r\n  inStock : boolean;\r\n}",signature:{properties:[{key:"variantName",value:{name:"string",required:!0}},{key:"inStock",value:{name:"boolean",required:!0}}]}}],raw:"variant[]"},description:""},hasCTA:{required:!0,tsType:{name:"boolean"},description:""},primaryCtaLabel:{required:!0,tsType:{name:"string"},description:""},ctaColorOverride:{required:!1,tsType:{name:"string"},description:""},primaryCtaButtonType:{required:!1,tsType:{name:"buttonType"},description:""},primaryCtaIcon:{required:!1,tsType:{name:"iconType"},description:""},hasSecondaryCTA:{required:!1,tsType:{name:"boolean"},description:""},pricingMessage:{required:!1,tsType:{name:"string"},description:""},finePrint:{required:!1,tsType:{name:"string"},description:""},secondaryAction:{required:!1,tsType:{name:"Function"},description:""},secondaryLabel:{required:!1,tsType:{name:"string"},description:""},hasLearMoreLink:{required:!1,tsType:{name:"boolean"},description:""},learnMoreLabel:{required:!1,tsType:{name:"string"},description:""},learnMoreLinkTo:{required:!1,tsType:{name:"string"},description:""},addToCartFunction:{required:!1,tsType:{name:"Function"},description:""},notifyMeFunction:{required:!1,tsType:{name:"Function"},description:""},featuresList:{required:!1,tsType:{name:"string"},description:""},showPrice:{required:!0,tsType:{name:"boolean"},description:""},priceOriginal:{required:!1,tsType:{name:"number"},description:""},priceFinal:{required:!1,tsType:{name:"number"},description:""},showStrikeThrough:{required:!1,tsType:{name:"boolean"},description:""}}};try{ProductCard.displayName="ProductCard",ProductCard.__docgenInfo={description:"",displayName:"ProductCard",props:{primarySlogan:{defaultValue:null,description:"",name:"primarySlogan",required:!1,type:{name:"string"}},secondarySlogan:{defaultValue:null,description:"",name:"secondarySlogan",required:!1,type:{name:"string"}},productImagePath:{defaultValue:null,description:"",name:"productImagePath",required:!0,type:{name:"string"}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},showProductColors:{defaultValue:null,description:"",name:"showProductColors",required:!0,type:{name:"boolean"}},productColorValues:{defaultValue:null,description:"",name:"productColorValues",required:!0,type:{name:"string[]"}},colorVariants:{defaultValue:null,description:"",name:"colorVariants",required:!0,type:{name:"variant[]"}},hasCTA:{defaultValue:null,description:"",name:"hasCTA",required:!0,type:{name:"boolean"}},primaryCtaLabel:{defaultValue:null,description:"",name:"primaryCtaLabel",required:!0,type:{name:"string"}},ctaColorOverride:{defaultValue:null,description:"",name:"ctaColorOverride",required:!1,type:{name:"string"}},primaryCtaButtonType:{defaultValue:null,description:"",name:"primaryCtaButtonType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"primary-light"'},{value:'"primary-cart-action"'},{value:'"secondary"'},{value:'"action"'},{value:'"text-icon-noBG"'},{value:'"link-internal"'},{value:'"link-external"'},{value:'"round-no-label"'},{value:'"ecommerce-primary"'},{value:'"ecommerce-secondary"'},{value:'"ecommerce-secondary-2-lines"'}]}},primaryCtaIcon:{defaultValue:null,description:"",name:"primaryCtaIcon",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"app-on-mobile"'},{value:'"icon-shipping-truck"'},{value:'"icon-favorite"'},{value:'"logo"'},{value:'"close"'},{value:'"icon-add"'},{value:'"icon-cart"'},{value:'"icon-menu"'},{value:'"chevron-down"'},{value:'"chevron-right"'},{value:'"chevron-left"'},{value:'"chevron-up"'},{value:'"icon-brand-mug"'},{value:'"icon-hot-cup"'},{value:'"icon-orders-box"'},{value:'"icon-messages"'},{value:'"icon-settings"'},{value:'"icon-account"'},{value:'"icon-pod-logo"'},{value:'"icon-checkmark"'},{value:'"info-icon"'},{value:'"checkmark-circled"'},{value:'"delivery-truck"'},{value:'"icon-pod-filled"'},{value:'"scheduled-logo"'},{value:'"SMART-logo"'},{value:'"icon-boxes"'},{value:'"half-circle"'},{value:'"logo-you-also-brewed"'},{value:'"add-to-order"'},{value:'"icon-order-details"'},{value:'"carat-pointing-up"'},{value:'"carat-pointing-down"'},{value:'"carat-pointing-left"'},{value:'"carat-pointing-right"'},{value:'"icon-star"'},{value:'"icon-coffee-foam"'},{value:'"icon-pods"'},{value:'"barista-mode"'},{value:'"milk-frother"'},{value:'"ultimate-customization"'},{value:'"multistream"'},{value:'"brew-id"'},{value:'"icon-wifi"'},{value:'"pod-and-shot"'},{value:'"specialty-beverage"'},{value:'"error-notification"'},{value:'"plus-icon"'},{value:'"minus-icon"'},{value:'"launch-pop-up"'},{value:'"icon-free-shipping"'},{value:'"hollow-star"'},{value:'"frother-icon"'},{value:'"clock-icon"'},{value:'"star-full"'},{value:'"star-half"'},{value:'"star-quarter"'},{value:'"star-three-quarters"'},{value:'"circle"'},{value:'"circle-and-ring"'},{value:'"banner-tail"'},{value:'"tri-bot-l"'},{value:'"icon-savings"'},{value:'"icon-schedule"'},{value:'"cup-size"'},{value:'"water-drop"'},{value:'"icon-cup"'},{value:'"icon-iced-coffee"'},{value:'"play-icon"'},{value:'"icon-present"'},{value:'"icon-support"'},{value:'"icon-deal-tag"'},{value:'"pointer-up"'},{value:'"icon-envelope"'},{value:'"perks-logo"'},{value:'"free-shipping-truck"'},{value:'"icon-volume-on"'},{value:'"icon-volume-off"'},{value:'"icon-pause"'},{value:'"icon-play"'},{value:'"icon-expand"'},{value:'"closed-captioning-icon"'},{value:'"closed-captioning-off-icon"'},{value:'"replay-icon"'},{value:'"icon-AD-Delivery"'},{value:'"icon-product-canceled-OOO"'},{value:'"remove-icon"'},{value:'"icon_Edit_delivery"'},{value:'"icon-pause-item"'},{value:'"icon-swap-item"'},{value:'"icon-shipping-truck-no-logo"'},{value:'"icon-backup-product"'},{value:'"icon-search"'},{value:'"indicator-trapezoid"'},{value:'"icon-filters"'},{value:'"icon-images"'},{value:'"icon-features"'},{value:'"icon-space-saver"'},{value:'"icon-stop-watch"'},{value:'"icon-bagged-and-pod"'},{value:'"icon-subscribe"'},{value:'"perks-logo-small"'}]}},hasSecondaryCTA:{defaultValue:null,description:"",name:"hasSecondaryCTA",required:!1,type:{name:"boolean"}},pricingMessage:{defaultValue:null,description:"",name:"pricingMessage",required:!1,type:{name:"string"}},finePrint:{defaultValue:null,description:"",name:"finePrint",required:!1,type:{name:"string"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"Function"}},secondaryLabel:{defaultValue:null,description:"",name:"secondaryLabel",required:!1,type:{name:"string"}},hasLearMoreLink:{defaultValue:null,description:"",name:"hasLearMoreLink",required:!1,type:{name:"boolean"}},learnMoreLabel:{defaultValue:null,description:"",name:"learnMoreLabel",required:!1,type:{name:"string"}},learnMoreLinkTo:{defaultValue:null,description:"",name:"learnMoreLinkTo",required:!1,type:{name:"string"}},addToCartFunction:{defaultValue:null,description:"",name:"addToCartFunction",required:!1,type:{name:"Function"}},notifyMeFunction:{defaultValue:null,description:"",name:"notifyMeFunction",required:!1,type:{name:"Function"}},featuresList:{defaultValue:null,description:"",name:"featuresList",required:!1,type:{name:"string"}},showPrice:{defaultValue:null,description:"",name:"showPrice",required:!0,type:{name:"boolean"}},priceOriginal:{defaultValue:null,description:"",name:"priceOriginal",required:!1,type:{name:"number"}},priceFinal:{defaultValue:null,description:"",name:"priceFinal",required:!1,type:{name:"number"}},showStrikeThrough:{defaultValue:null,description:"",name:"showStrikeThrough",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/ProductCard/ProductCard.tsx#ProductCard"]={docgenInfo:ProductCard.__docgenInfo,name:"ProductCard",path:"src/components/ContentComponents/ProductCard/ProductCard.tsx#ProductCard"})}catch(__react_docgen_typescript_loader_error){}}}]);