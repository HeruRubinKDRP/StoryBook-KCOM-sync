"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[6576],{"./src/components/DropDown/drop-down.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>drop_down});var react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),__jsx=react.createElement;function KPanel(props){var panelType;switch(props.panelType){case"column":default:panelType="column";break;case"thumb-sized":panelType="thumb-sized"}return __jsx("div",{className:"".concat(panelType," panel")},props.children)}KPanel.displayName="KPanel",KPanel.__docgenInfo={description:"",methods:[],displayName:"KPanel",props:{panelType:{required:!0,tsType:{name:"union",raw:'"column" | "modal-full" | "thumb-sized" | "slide-up"',elements:[{name:"literal",value:'"column"'},{name:"literal",value:'"modal-full"'},{name:"literal",value:'"thumb-sized"'},{name:"literal",value:'"slide-up"'}]},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""}}};try{KPanel.displayName="KPanel",KPanel.__docgenInfo={description:"",displayName:"KPanel",props:{panelType:{defaultValue:null,description:"",name:"panelType",required:!0,type:{name:"enum",value:[{value:'"thumb-sized"'},{value:'"column"'},{value:'"modal-full"'},{value:'"slide-up"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#KPanel"]={docgenInfo:KPanel.__docgenInfo,name:"KPanel",path:"src/components/Panel/Panel.tsx#KPanel"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,clickOutsideHook=__webpack_require__("./src/components/_utilities/clickOutsideChecker/clickOutsideHook.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),KDropDownStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --colorDarkRoast: ",";\n  --colorSepia: ",';\n  font-family: "Mark OT", sans-serif;\n  \n  .panel{\n    &.column{\n      position: relative;\n      .panel-bg{\n        border: 1px #cecece solid;\n        border-radius: 0 0 0.5rem 0.5rem;\n        background-color: white;\n        padding-left: 1rem;\n        font-family: inherit;\n        position: absolute;\n        top: -0.75rem;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n      }\n      .drop-down-item{\n        display: flex;\n      }\n\n      .drop-down-items{\n        display: flex;\n        flex-flow: column;\n      }\n\n      .drop-down-item{\n        &.active{\n          color: white !important;\n          .hover-panel{\n            display: flex !important;\n            background-color: '," !important;\n            transition: background-color 0.5s;\n          }\n        }\n      }\n\n\n\n    }\n\n    position: relative;\n    .panel-bg{\n      .shadow-top-down{\n        position: absolute;\n        height: 1.25rem;\n        top: 0;\n        z-index: 1;\n        left: 0;\n        right: 0;\n      }\n      border: 1px #cecece solid;\n      background-color: white;\n      padding-left: 1rem;\n      font-family: inherit;\n      border-radius: 0 0 0.5rem 0.5rem;\n      position: absolute;\n      top: -0.75rem;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1;\n    }\n  }\n\n  .drop-down{\n    font-family: inherit;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 100vw;\n    z-index: 1;\n    user-select: none;\n\n    label.selection-label{\n      display: flex;\n      align-items: center;\n      color: var(--colorDarkRoast);\n\n    }\n    .filler{\n      background-color: var(--colorSepia);\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n\n  \n  &.is-open{\n    &.thumb-sized{\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n\n      .filler{\n        display: none;\n      }\n    }\n  }\n  .drop-down-item{\n    padding-left: 0.25rem;\n    user-select: none;\n    border: solid $sepia;\n    border-width: 1px 0 0 0;\n    color: $dark-roast;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    font-size: 1.25rem;\n    &:hover{\n      .filled{\n        fill: white;\n      }\n      color: white;\n      animation: hoverAnim 0.5s forwards;\n    }\n    &:first-child{\n      margin-top: 0.5rem;\n      border-width: 0;\n    }\n    &.active{\n      color: white !important;\n      .hover-panel{\n        display: flex !important;\n        background-color: $dark-roast !important;\n        transition: background-color 0.5s;\n      }\n    }\n    .icon{\n      margin-right: 0.25rem;\n    }\n  }\n\n  &.thumb-sized{\n    .drop-down-items{\n      margin-top: 4.25rem;\n    }\n    .drop-down{\n      padding: 0;\n      z-index: 101;\n    }\n    .panel{\n      z-index: 100;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      .drop-down-item{\n        border: solid $sepia;\n        border-width: 1px 0 0 0;\n        padding: 1rem;\n        &:last-child{\n          border-bottom-width: 1px !important;\n        }\n      }\n    }\n  }\n  \n\n  &.thumb-sized{\n    &.is-open{\n      box-shadow: none;\n      .round-no-label{\n        background-color: transparent;\n        .filled {\n          fill : var(--colorDarkRoast)\n        }\n      }\n\n      .panel-bg{\n        border: 0;\n      }\n\n      .drop-down{\n        label{\n          font-weight: bold;\n        }\n      }\n\n      .drop-down-items{\n        .drop-down-item{\n          &:first-child{\n            border-width: 1px 0 1px 0;\n          }\n          padding: 1.5rem !important;\n        }\n      }\n\n      .filler{\n        display: none;\n      }\n    }\n    .round-no-label{\n      padding: 0.25rem;\n      display: flex;\n      align-items: center;\n      justify-content: center !important;\n      .icon{\n        width: 45% !important;\n        height: 45% !important;\n      }\n    }\n\n  }\n\n  button{\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  //size specific\n  \n  \n  &.small{\n    button{\n      height: 1.25rem;\n      width: 1.25rem;\n      padding: 0;\n      .icon{\n        height: 0.5rem;\n        width: 0.5rem;\n      }\n    }\n    .panel{\n      .drop-down-item{\n        font-size: 0.75rem;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        .icon{\n          height: 0.5rem;\n          width: 0.5rem;\n        }\n      }\n    }\n\n    .drop-down{\n      height: 1.25rem;\n      padding: 0 0 0 0.75rem;\n    }\n    label{\n      font-size: 0.75rem;\n    }\n  }\n\n  &.medium{\n    button{\n      height: 2rem;\n      width: 2rem;\n      .icon{\n        height: 0.75rem;\n        width: 0.75rem;\n      }\n    }\n    .panel{\n      .drop-down-item{\n        font-size: 1rem;\n        .icon{\n          height: 1rem;\n          width: 1rem;\n        }\n      }\n    }\n\n    .drop-down{\n      height: 2rem;\n      padding: 0 0 0 0.75rem;\n    }\n    label{\n      font-size: 1rem;\n    }\n\n  }\n\n  &.large{\n    button{\n      height: 2.5rem;\n      width: 2.5rem;\n      .icon{\n        height: 1rem;\n        width: 1rem;\n      }\n    }\n    .panel{\n      .drop-down-item{\n        font-size: 1.25rem;\n        .icon{\n          height: 1.25rem;\n          width: 1.25rem;\n        }\n      }\n    }\n\n    .drop-down{\n      height: 2.5rem;\n      padding: 0;\n    }\n    label{\n      font-size: 1.25rem;\n    }\n  }\n\n  &.thumb-sized{\n    button{\n      height: 2.75rem;\n      width: 2.75rem;\n      .icon{\n        height: 1rem;\n        width: 1rem;\n      }\n    }\n    .panel{\n      .drop-down-item{\n        font-size: 1.25rem;\n        .icon{\n          height: 1.25rem;\n          width: 1.25rem;\n        }\n      }\n    }\n\n    .drop-down{\n      height: 2.75rem;\n      padding: 0 0 0 1rem;\n    }\n    label{\n      font-size: 1.25rem;\n    }\n  }\n\n\n  @keyframes pulse {\n    0% {\n      background-color: #ffffff;\n    }\n    100% {\n      background-color: var(--colorDarkRoast);\n    }\n  }\n\n  .drop-down{\n    button{\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n    }\n  }\n\n\n  @keyframes hoverAnim {\n    0% { background-color: #ffffff; }\n    100% { background-color: var(--colorDarkRoast); }\n  }\n\n\n"])),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("sepia"),(0,colorNameToValue.G)("dark-roast"));try{KDropDownStyled.displayName="KDropDownStyled",KDropDownStyled.__docgenInfo={description:"",displayName:"KDropDownStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropDown/k-drop-down-styled.tsx#KDropDownStyled"]={docgenInfo:KDropDownStyled.__docgenInfo,name:"KDropDownStyled",path:"src/components/DropDown/k-drop-down-styled.tsx#KDropDownStyled"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),drop_down_jsx=react.createElement;function KDropDown(props){var _useState=(0,react.useState)(props.defaultLabel),selection=_useState[0],setSelection=_useState[1],_useState2=(0,react.useState)(!1),isOpen=_useState2[0],setIsOpen=_useState2[1],mainReference=react.useRef(),containerReference=(0,react.useRef)(null),getMenuItems=function getMenuItems(){for(var menuOptions=[],_loop=function _loop(i){console.log(props.selectionOptions[i]);menuOptions.push(drop_down_jsx("div",{key:"op".concat(i),className:"drop-down-item",onClick:function onClick(){return function setSelectionAction(selection){console.log(selection),setSelection(selection),setIsOpen(!1)}(props.selectionOptions[i].label)}},drop_down_jsx("div",{className:"hover-panel"}),function checkMark(){if(props.selectionOptions[i].label===selection)return drop_down_jsx(Graphic.Z,{graphicName:"icon-checkmark",iconPlacement:"before-label"})}(),props.selectionOptions[i].label))},i=0;i<props.selectionOptions.length;i++)_loop(i);return menuOptions};(0,react.useEffect)((function(){setSelection(props.defaultLabel)}),[props.defaultLabel]);(0,clickOutsideHook.S)(containerReference.current,(function clickOutsideToggle(){console.log("set this to false"),setIsOpen(!1)}),isOpen);var dropDownShadow="0 0 0 rgb(0 0 0 / 0%)";return 1==isOpen&&(dropDownShadow="0 0 0.75rem rgb(0 0 0 / 25%)"),drop_down_jsx(KDropDownStyled,{style:{boxShadow:dropDownShadow},className:"drop-down-container ".concat(props.dropDownType," ").concat(function statusStyles(){return 1==isOpen?"is-open":""}()," ").concat(props.classes),ref:containerReference},drop_down_jsx("div",{onClick:function onClick(){return function onApplyChange(){setIsOpen(!isOpen),setTimeout((function(){props.onChangeFunc&&(props.onChangeFunc(!isOpen),console.log("1 on apply changes",!isOpen))}),200)}()},ref:mainReference,className:"drop-down"},drop_down_jsx("div",{className:"filler"}),drop_down_jsx("label",{className:"selection-label"},selection),drop_down_jsx(KButton.z,{classes:"round-btn-large primary",label:"",linkTo:"",backgroundColorOverride:props.downButtonColorOverride,buttonType:"round-no-label",iconOverride:function buttonIcon(isOpenStatus,btnType){var iconForButton="chevron-down";return isOpenStatus&&"thumb-sized"==btnType&&(iconForButton="close"),drop_down_jsx(Graphic.Z,{graphicName:iconForButton})}(isOpen,props.dropDownType)})),function menuItemsPanel(){if(!0===isOpen)return drop_down_jsx(KPanel,{panelType:"column"},drop_down_jsx("div",{className:"panel-bg"},drop_down_jsx("div",{className:"shadow-top-down "})),drop_down_jsx("div",{className:"drop-down-items"},getMenuItems()))}())}KDropDown.displayName="KDropDown",KDropDown.__docgenInfo={description:"",methods:[],displayName:"KDropDown",props:{dropDownType:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large" | "thumb-sized"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"thumb-sized"'}]},description:""},defaultLabel:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},selected:{required:!0,tsType:{name:"string"},description:""},selectionOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  label : string,\r\n  value : stringOrNum,\r\n  displayElement? : ReactElement,\r\n  action? : Function\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"displayElement",value:{name:"ReactElement",required:!1}},{key:"action",value:{name:"Function",required:!1}}]}}],raw:"dropDownItem[]"},description:""},onChangeFunc:{required:!1,tsType:{name:"Function"},description:""},downButtonColorOverride:{required:!1,tsType:{name:"string"},description:""},classes:{required:!1,tsType:{name:"string"},description:""}}};const drop_down=KDropDown;try{KDropDown.displayName="KDropDown",KDropDown.__docgenInfo={description:"",displayName:"KDropDown",props:{dropDownType:{defaultValue:null,description:"",name:"dropDownType",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'},{value:'"thumb-sized"'}]}},defaultLabel:{defaultValue:null,description:"",name:"defaultLabel",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"string"}},selectionOptions:{defaultValue:null,description:"",name:"selectionOptions",required:!0,type:{name:"dropDownItem[]"}},onChangeFunc:{defaultValue:null,description:"",name:"onChangeFunc",required:!1,type:{name:"Function"}},downButtonColorOverride:{defaultValue:null,description:"",name:"downButtonColorOverride",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropDown/drop-down.tsx#KDropDown"]={docgenInfo:KDropDown.__docgenInfo,name:"KDropDown",path:"src/components/DropDown/drop-down.tsx#KDropDown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/LearnMore/LearnMore.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>LearnMore});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ContentStoryStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)([" \n\n  margin-left: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap !important;\n  .icon{\n    margin-left: 0.25rem;\n  }\n  label{\n    font-weight: 600;\n    text-decoration: underline;\n  }\n\n  .fine-print{\n    display: flex;\n  } \n\n"])));try{ContentStoryStyled.displayName="ContentStoryStyled",ContentStoryStyled.__docgenInfo={description:"",displayName:"ContentStoryStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LearnMore/learn-more.styled.tsx#ContentStoryStyled"]={docgenInfo:ContentStoryStyled.__docgenInfo,name:"ContentStoryStyled",path:"src/components/LearnMore/learn-more.styled.tsx#ContentStoryStyled"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,LearnMore=function LearnMore(props){return __jsx(ContentStoryStyled,{className:"learn-more"},__jsx("label",{onClick:function onClick(){return props.actionFunc()}},props.learnMore.label?props.learnMore.label:"Learn More"),__jsx(Graphic.Z,{graphicName:"launch-pop-up",iconSize:"1rem"}))};LearnMore.displayName="LearnMore",LearnMore.__docgenInfo={description:"",methods:[],displayName:"LearnMore",props:{mode:{required:!0,tsType:{name:"union",raw:'"pop-up" | "inline"',elements:[{name:"literal",value:'"pop-up"'},{name:"literal",value:'"inline"'}]},description:""},actionFunc:{required:!0,tsType:{name:"Function"},description:""},learnMore:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n  label? : string;\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}},description:""}}};try{LearnMore.displayName="LearnMore",LearnMore.__docgenInfo={description:"",displayName:"LearnMore",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"inline"'},{value:'"pop-up"'}]}},actionFunc:{defaultValue:null,description:"",name:"actionFunc",required:!0,type:{name:"Function"}},learnMore:{defaultValue:null,description:"",name:"learnMore",required:!0,type:{name:"{ label?: string | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LearnMore/LearnMore.tsx#LearnMore"]={docgenInfo:LearnMore.__docgenInfo,name:"LearnMore",path:"src/components/LearnMore/LearnMore.tsx#LearnMore"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PDP_Related/SecondaryPurchaseOptions/SecondaryPurchaseOptions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>SecondaryPurchaseOptions});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),LearnMore=__webpack_require__("./src/components/LearnMore/LearnMore.tsx"),PopUp=__webpack_require__("./src/components/PopUp/PopUp.tsx"),drop_down=__webpack_require__("./src/components/DropDown/drop-down.tsx"),Price=__webpack_require__("./src/components/Price/Price.tsx"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement,JustItem=function JustItem(props){return __jsx("div",{className:"purchase-option-container combo-container"},__jsx("h3",null,props.mainLabel),__jsx("div",{className:"product-area"},__jsx("div",{className:"product-descriptive-area"},__jsx(next_image.Z,{alt:"",src:props.productImage,unoptimized:!0,width:500,height:500}),__jsx("div",{className:"product-details-area"},__jsx("h4",null,props.productName),__jsx(Price.t,{basePrice:props.productPricing.productBasePrice,currency:"$",showStrikeThrough:props.productPricing.showStrikeThrough,discountPercentAsNumber:0,calculateDiscountForMe:!1,finalPrice:props.productPricing.productFinalPrice}))),__jsx("div",{className:"actions-container"},__jsx(drop_down.Z,{defaultLabel:"1",dropDownType:"thumb-sized",label:"1",onChangeFunc:function onChangeFunc(){},selected:"",downButtonColorOverride:"transparent",selectionOptions:[{label:"1",value:""},{label:"2",value:""},{label:"3",value:""},{label:"4",value:""},{label:"5",value:""}]}),__jsx(KButton.Z,{buttonType:"primary",iconPlacement:"no-icon",iconStandard:"none",buttonWidth:"fit-to-content",transitionType:"expand-bg",label:props.mainAddToCartLabel,actionFunc:props.addToCartFunction}))))};JustItem.displayName="JustItem",JustItem.__docgenInfo={description:"",methods:[],displayName:"JustItem",props:{mainLabel:{required:!0,tsType:{name:"string"},description:""},productImage:{required:!0,tsType:{name:"string"},description:""},productName:{required:!0,tsType:{name:"string"},description:""},addToCartFunction:{required:!1,tsType:{name:"Function"},description:""},mainAddToCartLabel:{required:!0,tsType:{name:"string"},description:""},productPricing:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n  productBasePrice : number;\r\n  productFinalPrice : number;\r\n  showStrikeThrough : boolean;\r\n}",signature:{properties:[{key:"productBasePrice",value:{name:"number",required:!0}},{key:"productFinalPrice",value:{name:"number",required:!0}},{key:"showStrikeThrough",value:{name:"boolean",required:!0}}]}},description:""}}};try{JustItem.displayName="JustItem",JustItem.__docgenInfo={description:"",displayName:"JustItem",props:{mainLabel:{defaultValue:null,description:"",name:"mainLabel",required:!0,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"string"}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},addToCartFunction:{defaultValue:null,description:"",name:"addToCartFunction",required:!1,type:{name:"Function"}},mainAddToCartLabel:{defaultValue:null,description:"",name:"mainAddToCartLabel",required:!0,type:{name:"string"}},productPricing:{defaultValue:null,description:"",name:"productPricing",required:!0,type:{name:"{ productBasePrice: number; productFinalPrice: number; showStrikeThrough: boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PDP_Related/JustItem/JustItem.tsx#JustItem"]={docgenInfo:JustItem.__docgenInfo,name:"JustItem",path:"src/components/PDP_Related/JustItem/JustItem.tsx#JustItem"})}catch(__react_docgen_typescript_loader_error){}var UpsellCombo_jsx=react.createElement,UpsellCombo=function UpsellCombo(props){return UpsellCombo_jsx("div",{className:"purchase-option-container upsell-combo"},function getProductDisplayItems(){for(var productElements=[],i=0;i<props.products.length;i++)productElements.push(UpsellCombo_jsx("div",{key:i,className:"product-item product-descriptive-area"},UpsellCombo_jsx(next_image.Z,{src:props.products[i].productImagePath,alt:"",unoptimized:!0,width:500,height:500}),UpsellCombo_jsx("div",{className:"product-description"},UpsellCombo_jsx("div",null,UpsellCombo_jsx("label",null,props.products[i].brand),UpsellCombo_jsx("h3",null,props.products[i].productName)),UpsellCombo_jsx(Price.t,{basePrice:props.products[i].basePrice,finalPrice:props.products[i].finalPrice,showStrikeThrough:!1,calculateDiscountForMe:!1,currency:"$"}))));return productElements}(),UpsellCombo_jsx("div",{className:"upsell-cta"},UpsellCombo_jsx(KButton.Z,{buttonType:"primary",buttonWidth:"fit-to-content",carat:"none",discount:0,finalPrice:219.99,iconPlacement:"after-label",label:"Add Both to Cart",price:250.99,showPrice:!0,showStrikeThroughPrice:!0,transitionType:"expand-bg"})))};UpsellCombo.displayName="UpsellCombo",UpsellCombo.__docgenInfo={description:"",methods:[],displayName:"UpsellCombo",props:{sectionName:{required:!0,tsType:{name:"string"},description:""},products:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  productName : string;\r\n  brand : string;\r\n  basePrice : number;\r\n  finalPrice : number;\r\n  showStrikeThrough : boolean;\r\n  productImagePath : string;\r\n}",signature:{properties:[{key:"productName",value:{name:"string",required:!0}},{key:"brand",value:{name:"string",required:!0}},{key:"basePrice",value:{name:"number",required:!0}},{key:"finalPrice",value:{name:"number",required:!0}},{key:"showStrikeThrough",value:{name:"boolean",required:!0}},{key:"productImagePath",value:{name:"string",required:!0}}]}}],raw:"productInfoT[]"},description:""}}};try{UpsellCombo.displayName="UpsellCombo",UpsellCombo.__docgenInfo={description:"",displayName:"UpsellCombo",props:{sectionName:{defaultValue:null,description:"",name:"sectionName",required:!0,type:{name:"string"}},products:{defaultValue:null,description:"",name:"products",required:!0,type:{name:"productInfoT[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PDP_Related/UpsellCombo/UpsellCombo.tsx#UpsellCombo"]={docgenInfo:UpsellCombo.__docgenInfo,name:"UpsellCombo",path:"src/components/PDP_Related/UpsellCombo/UpsellCombo.tsx#UpsellCombo"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),SecondaryPurchaseOptions_jsx=react.createElement,SecondaryPurchaseOptions=function SecondaryPurchaseOptions(props){var _useState=(0,react.useState)(!1),optionsOpenStatus=_useState[0],setOptionsOpenStatus=_useState[1],_useState2=(0,react.useState)(props.coupons),coupons=_useState2[0],setCouponsState=_useState2[1],manageOptionsOpen=function manageOptionsOpen(){setOptionsOpenStatus(!optionsOpenStatus),props.onExpandAction&&(console.log("expand action inner"),props.onExpandAction())},_useState3=(0,react.useState)(!1),popUpOpen=_useState3[0],setPopUpOpen=_useState3[1],getLearnMore=function getLearnMore(){return SecondaryPurchaseOptions_jsx(react.Fragment,null,SecondaryPurchaseOptions_jsx(LearnMore.F,{mode:"pop-up",actionFunc:function actionFunc(){return setPopUpOpen(!popUpOpen)},learnMore:{label:props.mainPurchaseOptionSettings.learnMoreSettings.labelActive}}))},getCoupons=function getCoupons(){if(coupons){for(var couponsElements=[],_loop=function _loop(i){couponsElements.push(SecondaryPurchaseOptions_jsx("div",{key:i,className:"fine-print coupons"},function getCouponMessage(){return coupons[i].couponActive?SecondaryPurchaseOptions_jsx("div",{className:"notification success"},SecondaryPurchaseOptions_jsx(Graphic.Z,{graphicName:"checkmark-circled",iconSize:"1.5rem",colorOverride:""}),SecondaryPurchaseOptions_jsx("p",null,"Coupon Applied")):SecondaryPurchaseOptions_jsx(KButton.Z,{label:coupons[i].couponLabel,buttonType:"secondary",actionFunc:function actionFunc(){return function manageCouponStates(selectedIndex){if(coupons){var couponsToEdit=(0,toConsumableArray.Z)(coupons);couponsToEdit[selectedIndex].couponActive=!couponsToEdit[selectedIndex].couponActive,setCouponsState(couponsToEdit)}}(i)},buttonWidth:"fit-to-content",classes:"small-btn",backgroundColorOverride:"transparent"})}(),SecondaryPurchaseOptions_jsx("label",{className:"details"},coupons[i].couponDetails),getLearnMore()))},i=0;i<coupons.length;i++)_loop(i);return SecondaryPurchaseOptions_jsx("div",{className:"coupon-items-container"},couponsElements)}},purchaseDetails=function purchaseDetails(){return SecondaryPurchaseOptions_jsx(react.Fragment,null,SecondaryPurchaseOptions_jsx("div",{className:"purchase-option-main"},SecondaryPurchaseOptions_jsx(JustItem,{productImage:props.productImagePath,productName:props.mainPurchaseOptionSettings.productName,productPricing:{productBasePrice:props.basePrice,productFinalPrice:props.mainPurchaseOptionSettings.finalPrice,showStrikeThrough:props.showStrikeThrough},mainLabel:props.mainPurchaseOptionSettings.mainLabel,mainAddToCartLabel:props.mainAddToCartLabel}),getCoupons()),function getComboOptions(){return props.upsellOptions?SecondaryPurchaseOptions_jsx(UpsellCombo,{sectionName:props.upsellOptions.upsellSectionName,products:props.upsellOptions.products}):SecondaryPurchaseOptions_jsx(react.Fragment,null)}())};return SecondaryPurchaseOptions_jsx("div",null,SecondaryPurchaseOptions_jsx("div",{className:"purchase-options-container open-is-".concat(optionsOpenStatus)},function purchaseOptions(){return optionsOpenStatus?purchaseDetails():SecondaryPurchaseOptions_jsx(react.Fragment,null,SecondaryPurchaseOptions_jsx("div",null,SecondaryPurchaseOptions_jsx(KButton.Z,{label:props.mainActionLabel,showPrice:!0,finalPrice:props.mainPurchaseOptionSettings.finalPrice,iconPlacement:"right-edge",transitionType:"expand-bg",buttonWidth:"fit-to-content",calcPrice:!1,buttonType:"primary",carat:"none",showStrikeThroughPrice:props.showStrikeThrough,price:props.basePrice,actionFunc:manageOptionsOpen})),SecondaryPurchaseOptions_jsx("div",{className:"fine-print"},SecondaryPurchaseOptions_jsx("p",null,props.couponDetails),getLearnMore()))}(),function getPopUp(){if(popUpOpen)return SecondaryPurchaseOptions_jsx(PopUp.N,{isOpen:!0,hasHeader:!0,hasVeil:!0,hasBackButton:!1})}()))};SecondaryPurchaseOptions.displayName="SecondaryPurchaseOptions",SecondaryPurchaseOptions.__docgenInfo={description:"",methods:[],displayName:"SecondaryPurchaseOptions",props:{mainActionLabel:{required:!0,tsType:{name:"string"},description:""},basePrice:{required:!0,tsType:{name:"number"},description:""},showStrikeThrough:{required:!0,tsType:{name:"boolean"},description:""},couponDetails:{required:!1,tsType:{name:"string"},description:""},productImagePath:{required:!0,tsType:{name:"string"},description:""},mainAddToCartLabel:{required:!0,tsType:{name:"string"},description:""},coupons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  couponLabel: string;\r\n  couponActive: boolean;\r\n  couponDetails: string;\r\n}",signature:{properties:[{key:"couponLabel",value:{name:"string",required:!0}},{key:"couponActive",value:{name:"boolean",required:!0}},{key:"couponDetails",value:{name:"string",required:!0}}]}}],raw:"couponType[]"},description:""},onExpandAction:{required:!1,tsType:{name:"Function"},description:""},mainPurchaseOptionSettings:{required:!0,tsType:{name:"signature",type:"object",raw:'{\r\n  mainLabel: string;\r\n  productName: string;\r\n  basePrice: number;\r\n  finalPrice: number;\r\n  showStrikeThrough: boolean;\r\n  learnMoreSettings : {\r\n    mode : "pop-up" | "slide-down",\r\n    labelStandard : string;\r\n    labelActive? :string;\r\n    imagePath? : string;\r\n    imageAlt? : string;\r\n    articleTitle? : string;\r\n    articleCopy? : string;\r\n  }\r\n}',signature:{properties:[{key:"mainLabel",value:{name:"string",required:!0}},{key:"productName",value:{name:"string",required:!0}},{key:"basePrice",value:{name:"number",required:!0}},{key:"finalPrice",value:{name:"number",required:!0}},{key:"showStrikeThrough",value:{name:"boolean",required:!0}},{key:"learnMoreSettings",value:{name:"signature",type:"object",raw:'{\r\n  mode : "pop-up" | "slide-down",\r\n  labelStandard : string;\r\n  labelActive? :string;\r\n  imagePath? : string;\r\n  imageAlt? : string;\r\n  articleTitle? : string;\r\n  articleCopy? : string;\r\n}',signature:{properties:[{key:"mode",value:{name:"union",raw:'"pop-up" | "slide-down"',elements:[{name:"literal",value:'"pop-up"'},{name:"literal",value:'"slide-down"'}],required:!0}},{key:"labelStandard",value:{name:"string",required:!0}},{key:"labelActive",value:{name:"string",required:!1}},{key:"imagePath",value:{name:"string",required:!1}},{key:"imageAlt",value:{name:"string",required:!1}},{key:"articleTitle",value:{name:"string",required:!1}},{key:"articleCopy",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},upsellOptions:{required:!1,tsType:{name:"signature",type:"object",raw:"{\r\n  upsellSectionName : string;\r\n  products: productInfoT[],\r\n  comboFinalPrice : number;\r\n  comboBasePrice : number;\r\n  showStrikethrough : boolean;\r\n}",signature:{properties:[{key:"upsellSectionName",value:{name:"string",required:!0}},{key:"products",value:{name:"Array",elements:[{name:"productInfoT"}],raw:"productInfoT[]",required:!0}},{key:"comboFinalPrice",value:{name:"number",required:!0}},{key:"comboBasePrice",value:{name:"number",required:!0}},{key:"showStrikethrough",value:{name:"boolean",required:!0}}]}},description:""}}};try{SecondaryPurchaseOptions.displayName="SecondaryPurchaseOptions",SecondaryPurchaseOptions.__docgenInfo={description:"",displayName:"SecondaryPurchaseOptions",props:{mainActionLabel:{defaultValue:null,description:"",name:"mainActionLabel",required:!0,type:{name:"string"}},basePrice:{defaultValue:null,description:"",name:"basePrice",required:!0,type:{name:"number"}},showStrikeThrough:{defaultValue:null,description:"",name:"showStrikeThrough",required:!0,type:{name:"boolean"}},couponDetails:{defaultValue:null,description:"",name:"couponDetails",required:!1,type:{name:"string"}},productImagePath:{defaultValue:null,description:"",name:"productImagePath",required:!0,type:{name:"string"}},mainAddToCartLabel:{defaultValue:null,description:"",name:"mainAddToCartLabel",required:!0,type:{name:"string"}},coupons:{defaultValue:null,description:"",name:"coupons",required:!1,type:{name:"couponType[]"}},onExpandAction:{defaultValue:null,description:"",name:"onExpandAction",required:!1,type:{name:"Function"}},mainPurchaseOptionSettings:{defaultValue:null,description:"",name:"mainPurchaseOptionSettings",required:!0,type:{name:'{ mainLabel: string; productName: string; basePrice: number; finalPrice: number; showStrikeThrough: boolean; learnMoreSettings: { mode: "pop-up" | "slide-down"; labelStandard: string; labelActive?: string | undefined; imagePath?: string | undefined; imageAlt?: string | undefined; articleTitle?: string | undefined; a...'}},upsellOptions:{defaultValue:null,description:"",name:"upsellOptions",required:!1,type:{name:"{ upsellSectionName: string; products: productInfoT[]; comboFinalPrice: number; comboBasePrice: number; showStrikethrough: boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PDP_Related/SecondaryPurchaseOptions/SecondaryPurchaseOptions.tsx#SecondaryPurchaseOptions"]={docgenInfo:SecondaryPurchaseOptions.__docgenInfo,name:"SecondaryPurchaseOptions",path:"src/components/PDP_Related/SecondaryPurchaseOptions/SecondaryPurchaseOptions.tsx#SecondaryPurchaseOptions"})}catch(__react_docgen_typescript_loader_error){}}}]);