"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[8773],{"./src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>MultikeyValueArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_KeyValueContent_KeyValueContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,MultikeyValueArea=function MultikeyValueArea(props){return __jsx("div",{className:"multi-key-value-container ".concat(props.layoutMode)},function getItems(){for(var items=[],i=0;i<props.items.length;i++)items.push(__jsx(_KeyValueContent_KeyValueContent__WEBPACK_IMPORTED_MODULE_1__.M,{layoutType:props.items[i].layoutType,primaryMessage:props.items[i].primaryMessage,secondaryMessage:props.items[i].secondaryMessage,colorSchemes:props.items[i].colorSchemes}));return items}())};MultikeyValueArea.displayName="MultikeyValueArea",MultikeyValueArea.__docgenInfo={description:"",methods:[],displayName:"MultikeyValueArea",props:{layoutMode:{required:!0,tsType:{name:"union",raw:'"stacked" | "inline"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"inline"'}]},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"iKeyValueContent"}],raw:"iKeyValueContent[]"},description:""}}};try{MultikeyValueArea.displayName="MultikeyValueArea",MultikeyValueArea.__docgenInfo={description:"",displayName:"MultikeyValueArea",props:{layoutMode:{defaultValue:null,description:"",name:"layoutMode",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"inline"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"iKeyValueContent[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx#MultikeyValueArea"]={docgenInfo:MultikeyValueArea.__docgenInfo,name:"MultikeyValueArea",path:"src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx#MultikeyValueArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HeaderArea/HeaderArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>HeaderArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,HeaderArea=function HeaderArea(props){return __jsx("div",{className:"header-area ".concat(props.colorScheme," align-").concat(props.headerAlignment)},function getHeader(){var headerContents=function headerContents(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"before"}),__jsx("span",{className:"title-label"},props.headerLabel," "),__jsx("div",{className:"after"}))},commonStyles="".concat(props.headerStyle," header");switch(props.hierarchyLevel){case 1:return __jsx("h1",{className:commonStyles},headerContents());case 2:return __jsx("h2",{className:commonStyles},headerContents());case 3:return __jsx("h3",{className:commonStyles},headerContents());case 4:return __jsx("h4",{className:commonStyles},headerContents())}}())};HeaderArea.displayName="HeaderArea",HeaderArea.__docgenInfo={description:"",methods:[],displayName:"HeaderArea",props:{headerLabel:{required:!0,tsType:{name:"string"},description:""},headerStyle:{required:!0,tsType:{name:"union",raw:'"line-through" | "large-light" | "bold-small" | "medium-light"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"large-light"'},{name:"literal",value:'"bold-small"'},{name:"literal",value:'"medium-light"'}]},description:""},hierarchyLevel:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""},colorScheme:{required:!0,tsType:{name:"union",raw:'"medium-roast" | "dark-roast"',elements:[{name:"literal",value:'"medium-roast"'},{name:"literal",value:'"dark-roast"'}]},description:""},headerAlignment:{required:!0,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:""}}};try{HeaderArea.displayName="HeaderArea",HeaderArea.__docgenInfo={description:"",displayName:"HeaderArea",props:{headerLabel:{defaultValue:null,description:"",name:"headerLabel",required:!0,type:{name:"string"}},headerStyle:{defaultValue:null,description:"",name:"headerStyle",required:!0,type:{name:"enum",value:[{value:'"line-through"'},{value:'"large-light"'},{value:'"bold-small"'},{value:'"medium-light"'}]}},hierarchyLevel:{defaultValue:null,description:"",name:"hierarchyLevel",required:!0,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!0,type:{name:"enum",value:[{value:'"dark-roast"'},{value:'"medium-roast"'}]}},headerAlignment:{defaultValue:null,description:"",name:"headerAlignment",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HeaderArea/HeaderArea.tsx#HeaderArea"]={docgenInfo:HeaderArea.__docgenInfo,name:"HeaderArea",path:"src/components/HeaderArea/HeaderArea.tsx#HeaderArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SpecificationsArea/SpecificationsArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>SpecificationsArea});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),ContentComponent=__webpack_require__("./src/components/ContentComponents/ContentComponent.tsx"),HeaderArea=__webpack_require__("./src/components/HeaderArea/HeaderArea.tsx"),ProductCard=__webpack_require__("./src/components/ContentComponents/ProductCard/ProductCard.tsx"),SimpleHighlightCard=__webpack_require__("./src/components/ContentComponents/SimpleHighlightCard/SimpleHighlightCard.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MultiCardPresenterStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  &.mobile{\n\n    .highlight-card-container{\n      &.full-width{\n        padding: 0.5rem;\n        margin-left: 0;\n        margin-bottom: 0;\n      }\n    }\n    .image-container img{\n      width: 100% !important;\n    }\n  }\n\n"])));try{MultiCardPresenterStyled.displayName="MultiCardPresenterStyled",MultiCardPresenterStyled.__docgenInfo={description:"",displayName:"MultiCardPresenterStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/MultiCardContainer/MultiCard-presenter.styled.tsx#MultiCardPresenterStyled"]={docgenInfo:MultiCardPresenterStyled.__docgenInfo,name:"MultiCardPresenterStyled",path:"src/components/ContentComponents/MultiCardContainer/MultiCard-presenter.styled.tsx#MultiCardPresenterStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,MultiCardPresenter=function MultiCardPresenter(props){var _useResizeDetector=(0,index_esm.NB)(),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref),productCard=function productCard(cardProps){return cardProps?__jsx(ProductCard.I,{primarySlogan:cardProps.primarySlogan,secondaryLabel:cardProps.secondaryLabel,productImagePath:cardProps.productImagePath,productName:cardProps.productName,showProductColors:cardProps.showProductColors,productColorValues:cardProps.productColorValues,colorVariants:cardProps.colorVariants,hasCTA:cardProps.hasCTA,primaryCtaLabel:cardProps.primaryCtaLabel,showPrice:cardProps.showPrice,priceOriginal:cardProps.priceOriginal,priceFinal:cardProps.priceFinal,pricingMessage:cardProps.pricingMessage,addToCartFunction:cardProps.addToCartFunction,notifyMeFunction:cardProps.notifyMeFunction,secondaryAction:cardProps.secondaryAction,featuresList:cardProps.featuresList}):__jsx(react.Fragment,null)},getSimpleHighlightCard=function getSimpleHighlightCard(cardProps){return cardProps?__jsx(SimpleHighlightCard.Q,{title:cardProps.title,titlePosition:cardProps.titlePosition,alignment:cardProps.alignment,mainFocalImage:cardProps.mainFocalImage,mainCTA:cardProps.mainCTA,secondaryCTA:cardProps.secondaryCTA,mainImageSize:cardProps.mainImageSize}):__jsx(react.Fragment,null)};return __jsx(MultiCardPresenterStyled,{ref,className:"multi-card-container ".concat(props.customClasses," ").concat(function getContainerQuery(widthX){return widthX?widthX<500?"mobile":"desktop":"mobile-defaulted"}(width))},function getCards(){for(var cards=[],i=0;i<props.cards.length;i++)switch(props.cards[i].cardType){case"product":if(!props.cards[i].productCardData)return;cards.push(productCard(props.cards[i].productCardData));break;case"simple":if(!props.cards[i].simpleCardData)return;cards.push(getSimpleHighlightCard(props.cards[i].simpleCardData))}return cards}())};MultiCardPresenter.displayName="MultiCardPresenter",MultiCardPresenter.__docgenInfo={description:"",methods:[],displayName:"MultiCardPresenter",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n  cardType : "simple" | "product";\n  simpleCardData?: iSimpleHighlightCard;\n  productCardData? : iProductCard;\n\n}',signature:{properties:[{key:"cardType",value:{name:"union",raw:'"simple" | "product"',elements:[{name:"literal",value:'"simple"'},{name:"literal",value:'"product"'}],required:!0}},{key:"simpleCardData",value:{name:"iSimpleHighlightCard",required:!1}},{key:"productCardData",value:{name:"iProductCard",required:!1}}]}}],raw:"cardType[]"},description:""},customClasses:{required:!1,tsType:{name:"string"},description:""}}};try{MultiCardPresenter.displayName="MultiCardPresenter",MultiCardPresenter.__docgenInfo={description:"",displayName:"MultiCardPresenter",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"cardType[]"}},customClasses:{defaultValue:null,description:"",name:"customClasses",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/MultiCardContainer/MultiCardPresenter.tsx#MultiCardPresenter"]={docgenInfo:MultiCardPresenter.__docgenInfo,name:"MultiCardPresenter",path:"src/components/ContentComponents/MultiCardContainer/MultiCardPresenter.tsx#MultiCardPresenter"})}catch(__react_docgen_typescript_loader_error){}var specifications_area_styled_templateObject,MultiKeyValueArea=__webpack_require__("./src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx"),getElements_jsx=react.createElement,GetElement=function GetElement(props){var getHeaderArea=function getHeaderArea(cardData,index){return cardData?getElements_jsx(HeaderArea.M,{key:index,headerAlignment:cardData.headerAlignment,headerLabel:cardData.headerLabel,headerStyle:cardData.headerStyle,hierarchyLevel:cardData.hierarchyLevel,colorScheme:cardData.colorScheme}):getElements_jsx(react.Fragment,null)},getMultiCardPresenter=function getMultiCardPresenter(cardData,index){return getElements_jsx(MultiCardPresenter,{key:index,cards:cardData.cards})},getMultiKeyValueArea=function getMultiKeyValueArea(cardData,index){return getElements_jsx(MultiKeyValueArea.s,{key:index,layoutMode:cardData.layoutMode,items:cardData.items})};return getElements_jsx(react.Fragment,null,function getItems(){for(var elements=[],i=0;i<props.cards.length;i++)switch(props.cards[i].cardType){case"header-area":elements.push(getHeaderArea(props.cards[i].cardData,i));break;case"multi-card-presenter":elements.push(getMultiCardPresenter(props.cards[i].cardData,i));break;case"multi-key-value-area":elements.push(getMultiKeyValueArea(props.cards[i].cardData,i))}return elements}())};GetElement.__docgenInfo={description:"",methods:[],displayName:"GetElement",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n  cardType : "header-area" | "simple-highlight-card" | "multi-card-presenter" | "product-card" | "multi-key-value-area",\n  cardData : cardElementsT\n}',signature:{properties:[{key:"cardType",value:{name:"union",raw:'"header-area" | "simple-highlight-card" | "multi-card-presenter" | "product-card" | "multi-key-value-area"',elements:[{name:"literal",value:'"header-area"'},{name:"literal",value:'"simple-highlight-card"'},{name:"literal",value:'"multi-card-presenter"'},{name:"literal",value:'"product-card"'},{name:"literal",value:'"multi-key-value-area"'}],required:!0}},{key:"cardData",value:{name:"union",raw:"iHeaderArea | iSimpleHighlightCard | iMultiCardPresenter | iProductCard | iMultikeyvalueArea",elements:[{name:"iHeaderArea"},{name:"iSimpleHighlightCard"},{name:"iMultiCardPresenter"},{name:"iProductCard"},{name:"iMultikeyvalueArea"}],required:!0}}]}}],raw:"getElementType[]"},description:""}}};try{GetElement.displayName="GetElement",GetElement.__docgenInfo={description:"",displayName:"GetElement",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"getElementType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/getElements.tsx#GetElement"]={docgenInfo:GetElement.__docgenInfo,name:"GetElement",path:"src/components/ContentComponents/getElements.tsx#GetElement"})}catch(__react_docgen_typescript_loader_error){}var SpecificationsAreaStyled=styled_components_browser_esm.ZP.div(specifications_area_styled_templateObject||(specifications_area_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  position: relative;\n\n  .multi-card-container.desktop {\n\n    .highlight-card-container {\n      &.full-width {\n        .image-container {\n          width: 100% !important;\n          height: 100% !important;\n        }\n      }\n\n      .image-container {\n        height: 12rem !important;\n        width: 12rem !important;\n        max-width: 16rem;\n        max-height: 16rem;\n      }\n    }\n  }\n\n  .specs-media-container {\n    height: 45vh;\n    position: relative;\n    .content {\n      height: 100%;\n    }\n\n    video {\n      top: -3px;\n      left: -5px;\n      height: 105%;\n      width: 105%;\n      object-fit: cover;\n    }\n  }\n\n  .multi-card-container {\n    margin-bottom: 2rem;\n    justify-content: space-around;\n  }\n\n  &.desktop {\n    .specs-details-area, .images-area {\n      flex-basis: 50%;\n      height: 65%;\n      width: 50%;\n    }\n\n    .images-area {\n      position: sticky;\n      top: 0;\n      padding: 1rem;\n      .content-item {\n        height: 100%;\n      }\n    }\n  }\n\n\n  &.mobile {\n    .specs-details-area, .images-area {\n      flex-basis: 100%;\n      width: 100%;\n    }\n\n\n    .specs-details-area {\n      .multi-card-container {\n        padding: 3rem;\n      }\n    }\n\n    .multi-card-container {\n      &.default-size {\n\n      }\n\n      .image-container {\n        flex-grow: 1;\n      }\n    }\n\n    &.specifications-area {\n      flex-direction: column;\n      .images-area {\n        flex-basis: 40%;\n        position: sticky !important;\n\n        img {\n          height: auto !important;\n        }\n      }\n    }\n\n    .images-area {\n      position: sticky;\n      top: 0;\n      padding: 0;\n      z-index: 1000;\n      height: 40vh;\n      overflow: hidden;\n      margin-bottom: 4rem;\n      .content-item {\n        height: 100%;\n      }\n\n      .inset-beveled {\n        border-radius: 0 !important;\n        margin: 0 !important;\n      }\n\n      .highlight-card-container {\n        height: 100%;\n\n        img {\n          height: 100%;\n          width: auto !important;\n        }\n\n        .image-container {\n          height: 100%;\n        }\n      }\n    }\n  }\n\n\n  .multi-key-value-container, .header-area {\n    padding-top: 0 !important;\n  }\n\n  .header-area {\n    width: 100%;\n    padding-bottom: 0 !important;\n  }\n\n  article {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: 1rem;\n\n  }\n\n  h3 {\n    color: $medium-roast;\n    text-align: center;\n    margin-bottom: 0.75rem;\n  }\n\n  h4 {\n    font-weight: 400;\n    color: $dark-roast;\n    font-size: 1.75rem;\n  }\n\n  .spec-combo {\n    padding: 2rem;\n\n  }\n\n  .product-highlight {\n    max-height: 60vh;\n  }\n\n  .key {\n    font-weight: bold;\n    color: $dark-roast;\n    margin-right: 0.5rem;\n  }\n\n  .spec-combos {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  .image-group {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: $dark-roast;\n\n    label {\n      font-weight: bold;\n      color: $dark-roast;\n    }\n  }\n\n"])));try{SpecificationsAreaStyled.displayName="SpecificationsAreaStyled",SpecificationsAreaStyled.__docgenInfo={description:"",displayName:"SpecificationsAreaStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SpecificationsArea/specifications-area.styled.tsx#SpecificationsAreaStyled"]={docgenInfo:SpecificationsAreaStyled.__docgenInfo,name:"SpecificationsAreaStyled",path:"src/components/SpecificationsArea/specifications-area.styled.tsx#SpecificationsAreaStyled"})}catch(__react_docgen_typescript_loader_error){}var SpecificationsArea_jsx=react.createElement,SpecificationsArea=function SpecificationsArea(props){var _useResizeDetector=(0,index_esm.NB)(),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);return SpecificationsArea_jsx(SpecificationsAreaStyled,{ref,className:"specifications-area ".concat(function getContainerQuery(widthX){if(widthX)return widthX<800?"mobile":"desktop"}(width))},SpecificationsArea_jsx("div",{className:"images-area"},SpecificationsArea_jsx(ContentComponent.S,{customClasses:"specs-media-container",backGroundType:props.mediaType,backgroundColor:"transparent",backgroundUrlPath:props.mediaElementPath,contrastBackground:"none",ctaLabel:"Call to action",ctaLinkTo:"www.google.com",heightMethod:"stretch-to-parent",mainMessage:"",mainMessageSize:"Large",mainMessageWeight:"regular-weight",messageTextAlignment:"text-center",secondaryMessage:"",sectionAppearance:"inset-beveled",sectionType:"content-front-and-center",termsAndConditionsCTA:{termsAndConditionsCtaLabel:"See Details",termsAndConditionsLabelDetail:"Restrictions apply"},termsAndConditionsFullText:{header:"",termsAndConditionsDetailCopy:""},component:"content",hasCTA:!1,hasFocalImage:!1,mainTextHasShadow:!1,sectionName:"specsMedia"})),SpecificationsArea_jsx("div",{className:"specs-details-area"},function getContentStack(){return SpecificationsArea_jsx(GetElement,{key:1,cards:props.contentStack})}()))};SpecificationsArea.displayName="SpecificationsArea",SpecificationsArea.__docgenInfo={description:"",methods:[],displayName:"SpecificationsArea",props:{contentStack:{required:!0,tsType:{name:"Array",elements:[{name:"getElementType"}],raw:"getElementType[]"},description:""},mediaElementPath:{required:!0,tsType:{name:"string"},description:""},mediaType:{required:!0,tsType:{name:"union",raw:'"movie" | "image"',elements:[{name:"literal",value:'"movie"'},{name:"literal",value:'"image"'}]},description:""}}};try{SpecificationsArea.displayName="SpecificationsArea",SpecificationsArea.__docgenInfo={description:"",displayName:"SpecificationsArea",props:{contentStack:{defaultValue:null,description:"",name:"contentStack",required:!0,type:{name:"getElementType[]"}},mediaElementPath:{defaultValue:null,description:"",name:"mediaElementPath",required:!0,type:{name:"string"}},mediaType:{defaultValue:null,description:"",name:"mediaType",required:!0,type:{name:"enum",value:[{value:'"movie"'},{value:'"image"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SpecificationsArea/SpecificationsArea.tsx#SpecificationsArea"]={docgenInfo:SpecificationsArea.__docgenInfo,name:"SpecificationsArea",path:"src/components/SpecificationsArea/SpecificationsArea.tsx#SpecificationsArea"})}catch(__react_docgen_typescript_loader_error){}}}]);