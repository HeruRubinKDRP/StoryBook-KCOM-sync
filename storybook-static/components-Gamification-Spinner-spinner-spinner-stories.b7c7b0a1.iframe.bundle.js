"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[6047],{"./src/components/Gamification/Spinner/spinner/spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconsFirst:()=>IconsFirst,TraditionalSpinner:()=>TraditionalSpinner,default:()=>spinner_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),PromotionStyled=styled_components_browser_esm.ZP.a(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  touch-action: none;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  text-decoration: none;\n  flex-wrap: wrap;\n  padding: 25% 10% 25% 25%;\n\n  &.spinner-mode-traditional{\n    \n  } \n  \n  &.spinner-mode-icons-first{\n    .text-area{\n      display: none !important;\n    }\n    img{\n        height: 60% !important;\n        width: 70% !important;\n    }\n  } \n  \n  &.spinner-mode-vertical-text{\n    \n  };\n  \n  .text-area{\n    p{\n     font-size: 1.5vw\n    }\n    h2{\n        font-size: 2vw;\n    }\n  };\n  \n  &.default {\n    h2{\n      font-size: 2vw;      \n    } \n  }\n  \n  &.highlighted{\n    h2{\n        font-size: 3.5vw;\n    }\n  }\n  \n  &.big-image{\n    flex-direction: row-reverse;\n    flex-wrap: nowrap;\n    \n    img{\n      height: 35%;\n      width: 35%;\n      object-fit: contain;\n      margin-right: 6%;\n    }\n    .text-area{\n      display: flex;\n      flex-direction: column;\n      p{\n        font-size: 1.5vw;\n      }\n    }\n  }\n\n"])));try{PromotionStyled.displayName="PromotionStyled",PromotionStyled.__docgenInfo={description:"",displayName:"PromotionStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoItem/promotion.styles.tsx#PromotionStyled"]={docgenInfo:PromotionStyled.__docgenInfo,name:"PromotionStyled",path:"src/components/Gamification/Spinner/PromoItem/promotion.styles.tsx#PromotionStyled"})}catch(__react_docgen_typescript_loader_error){}var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement,PromotionItem=function PromotionItem(props){return __jsx(PromotionStyled,{datatype:"data-promo-index",href:props.link,className:"promotion-item ".concat(props.promoMode," spinner-mode-").concat(props.spinnerMode)},__jsx("div",{className:"text-area"},props.highlightedText?__jsx("h2",null,props.highlightedText):null,__jsx("p",null,props.name)),props.highlightImage?__jsx(next_image.Z,{unoptimized:!0,width:500,height:500,style:{transform:"rotate(".concat(props.imageCounterRotation?-props.imageCounterRotation:0,"deg)")},src:props.highlightImage,alt:props.name}):null)};PromotionItem.displayName="PromotionItem",PromotionItem.__docgenInfo={description:"",methods:[],displayName:"PromotionItem",props:{name:{required:!0,tsType:{name:"string"},description:""},highlightedText:{required:!1,tsType:{name:"string"},description:""},link:{required:!0,tsType:{name:"string"},description:""},weight:{required:!0,tsType:{name:"number"},description:""},componentType:{required:!0,tsType:{name:"literal",value:'"image"'},description:""},promoMode:{required:!0,tsType:{name:"union",raw:'"default" | "highlighted" | "big-image"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"highlighted"'},{name:"literal",value:'"big-image"'}]},description:""},backgroundTexture:{required:!1,tsType:{name:"string"},description:""},highlightImage:{required:!1,tsType:{name:"string"},description:""},spinnerMode:{required:!1,tsType:{name:"spinnerModeType"},description:""},imageCounterRotation:{required:!1,tsType:{name:"number"},description:""}}};try{PromotionItem.displayName="PromotionItem",PromotionItem.__docgenInfo={description:"",displayName:"PromotionItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},highlightedText:{defaultValue:null,description:"",name:"highlightedText",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!0,type:{name:"number"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!0,type:{name:'"image"'}},promoMode:{defaultValue:null,description:"",name:"promoMode",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"highlighted"'},{value:'"big-image"'}]}},backgroundTexture:{defaultValue:null,description:"",name:"backgroundTexture",required:!1,type:{name:"string"}},highlightImage:{defaultValue:null,description:"",name:"highlightImage",required:!1,type:{name:"string"}},spinnerMode:{defaultValue:null,description:"",name:"spinnerMode",required:!1,type:{name:"enum",value:[{value:'"traditional"'},{value:'"icons-first"'},{value:'"vertical-text"'}]}},imageCounterRotation:{defaultValue:null,description:"",name:"imageCounterRotation",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoItem/Promotion.tsx#PromotionItem"]={docgenInfo:PromotionItem.__docgenInfo,name:"PromotionItem",path:"src/components/Gamification/Spinner/PromoItem/Promotion.tsx#PromotionItem"})}catch(__react_docgen_typescript_loader_error){}try{Promotion.displayName="Promotion",Promotion.__docgenInfo={description:"",displayName:"Promotion",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},highlightedText:{defaultValue:null,description:"",name:"highlightedText",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!0,type:{name:"number"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!0,type:{name:'"image"'}},promoMode:{defaultValue:null,description:"",name:"promoMode",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"highlighted"'},{value:'"big-image"'}]}},backgroundTexture:{defaultValue:null,description:"",name:"backgroundTexture",required:!1,type:{name:"string"}},highlightImage:{defaultValue:null,description:"",name:"highlightImage",required:!1,type:{name:"string"}},spinnerMode:{defaultValue:null,description:"",name:"spinnerMode",required:!1,type:{name:"enum",value:[{value:'"traditional"'},{value:'"icons-first"'},{value:'"vertical-text"'}]}},imageCounterRotation:{defaultValue:null,description:"",name:"imageCounterRotation",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoItem/Promotion.tsx#Promotion"]={docgenInfo:Promotion.__docgenInfo,name:"Promotion",path:"src/components/Gamification/Spinner/PromoItem/Promotion.tsx#Promotion"})}catch(__react_docgen_typescript_loader_error){}function getRandomWeightedIndex(promotions){for(var totalWeight=promotions.reduce((function(acc,p){return acc+p.weight}),0),randomWeight=Math.random()*totalWeight,weightSum=0,i=0;i<promotions.length;i++)if(randomWeight<=(weightSum+=promotions[i].weight))return i;return 0}try{getRandomWeightedIndex.displayName="getRandomWeightedIndex",getRandomWeightedIndex.__docgenInfo={description:"",displayName:"getRandomWeightedIndex",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/gamification-utils.tsx#getRandomWeightedIndex"]={docgenInfo:getRandomWeightedIndex.__docgenInfo,name:"getRandomWeightedIndex",path:"src/components/Gamification/Spinner/gamification-utils.tsx#getRandomWeightedIndex"})}catch(__react_docgen_typescript_loader_error){}var spinner_styled_templateObject,gsap=__webpack_require__("./node_modules/gsap/index.js"),Draggable=__webpack_require__("./node_modules/gsap/Draggable.js"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),SpinnerStyled=styled_components_browser_esm.ZP.div(spinner_styled_templateObject||(spinner_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --outerWidth: ","px;\n  --outerHeight: ","px;\n  cursor: grab;\n  &:active{\n    cursor: grabbing;\n  }\n\n  .promo-claim{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100000;  \n    backdrop-filter: blur(7px);\n    border-radius: 1vw;\n  }\n\n  /* spin complete */\n  @keyframes reducerVisual {\n    0% {\n      filter: brightness(100%) saturate(1) blur(0px);\n    }\n    100% {\n      filter: brightness(150%) saturate(0) blur(2vw);\n    } \n  }\n  \n  @keyframes fadeOut {\n    from {\n      opacity: 1;\n    }\n    to {\n      opacity: 0;\n    }\n  }\n  \n    &.spin-complete{\n      /* Apply the animation to an element */\n      .pointer, .inner-ring{\n        animation-name: fadeOut;\n        animation-fill-mode: forwards;\n        animation-duration: 1s;\n      }\n      .spinner-outer {\n        animation-name: reducerVisual, fadeOut;\n        animation-duration: 2s;\n        animation-iteration-count: initial ;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n      }\n    }\n  \n  \n  \n  //dark colors\n  --colorDarkRoast: ",";\n  --colorMediumRoast: ",";\n  --colorText: ",";\n  \n  //light colors\n  --colorLightRoast: ",";\n  --colorLatte: ",";\n  --colorFaintWarm: ",";\n  \n  width: var(--outerWidth);\n  height: var(--outerHeight);\n  border-radius: 100vw;\n  margin: auto;\n  position: relative;\n\n  filter: drop-shadow(1px 1px 10px rgba(0,0,0,0.25));\n  .inner-ring{\n    position: absolute;\n    inset: 0;\n    border-radius: 100vw;\n    border: 3px solid black;\n    z-index: 100;\n    pointer-events: none;\n    box-shadow: inset 20px 20px 60px #bebebeab, -20px -20px 60px #ffffffba\n  }\n  .center-dot{\n    background-color: var(--colorDarkRoast);\n    border-radius: 100vw;\n    position: absolute;\n    height: 10%;\n    width: 10%;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));\n  }\n  \n  .spinner-outer {\n    background: linear-gradient(145deg, #f0f0f0, #cacaca);\n    border: 1px solid black;\n    border-radius: 200vw;\n    width: calc(var(--outerWidth) * 2);\n    height: calc(var(--outerWidth) * 2);\n    overflow: hidden;\n  }\n  \n  .pointer{\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translate(50%, -50%);   \n    z-index: 10000;\n    height: 10%;\n    width: 10%;\n    border-radius: 5%;\n    overflow: visible;\n    svg{\n      overflow: visible;\n    }\n    .filled{      \n      stroke: rgba(255,255,255,0.5);      \n      filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));\n    }\n  }\n  \n  .promo-contents{\n    position: absolute;\n    top: 50%;\n    right: 15%;\n    transform: translateY(-50%);\n  }\n\n  .promo-item {\n    border: 1px solid black;\n    clip-path: polygon(100% 0%, 0% 50%, 100% 100%);\n    pointer-events: none;\n    &.promo0 {\n      p, h2, h3, label{\n        color: white !important;\n      }      \n      background-color: var(--colorDarkRoast);      \n    }\n\n    &.promo1 {\n      p, h2, h3, label{\n        color: var(--colorDarkRoast) !important;\n      }      \n      background-color: var(--colorLightRoast);     \n    }\n\n    &.promo1 {\n      p, h2, h3, label{\n        color: white !important;  \n      }      \n      background-color: var(--colorMediumRoast);\n    }\n\n    &.promo2 {\n      p, h2, h3, label{\n        color: var(--colorDarkRoast) !important;  \n      }\n      \n      background-color: var(--colorLatte)   \n    } \n\n    &.promo3 {      \n     p, h2, h3, label{\n       color: var(--colorDarkRoast) !important;\n     }\n      background-color: var(--colorLightRoast);\n    }\n\n    &.promo4 {\n      p, h2, h3, label{\n        color: var(--colorDarkRoast) !important;  \n      }      \n      background-color: var(--colorFaintWarm);\n    }\n\n    &.promo5 {\n      p, h2, h3, label{\n        color: white !important;\n      }\n      background-color: #342525;\n    }\n\n    &.promo6 {\n      p, h2, h3, label{\n        color: white !important;\n      }\n      background-color: #cbbfa6;\n    }\n\n\n  }\n\n"])),(function(props){return props.width}),(function(props){return props.height}),(0,colorNameToValue.G)("dark-roast"),(0,colorNameToValue.G)("medium-roast"),(0,colorNameToValue.G)("text"),(0,colorNameToValue.G)("light-roast"),(0,colorNameToValue.G)("latte"),(0,colorNameToValue.G)("faintWarm"));try{SpinnerStyled.displayName="SpinnerStyled",SpinnerStyled.__docgenInfo={description:"",displayName:"SpinnerStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/spinner/spinner.styled.tsx#SpinnerStyled"]={docgenInfo:SpinnerStyled.__docgenInfo,name:"SpinnerStyled",path:"src/components/Gamification/Spinner/spinner/spinner.styled.tsx#SpinnerStyled"})}catch(__react_docgen_typescript_loader_error){}var Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),PromoClaim=__webpack_require__("./src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),spinner_jsx=react.createElement;function getAbsoluteRotation(element){for(var currentElement=element,totalRotation=0;currentElement;){var transform=window.getComputedStyle(currentElement).transform,match=/rotate\(([^)]+)deg\)/.exec(transform);match&&(totalRotation+=parseFloat(match[1])),currentElement=currentElement.parentElement}return totalRotation}var Spinner=function Spinner(_ref){var promotions=_ref.promotions,onSpinEnd=_ref.onSpinEnd,wheelRadius=_ref.wheelRadius,spinnerMode=_ref.spinnerMode,containerRef=(0,react.useRef)(null),_useState=(0,react.useState)(!0),canSpin=_useState[0],_useState2=(_useState[1],(0,react.useState)(null)),selectedPromo=_useState2[0],setSelectedPromo=_useState2[1],_useState3=(0,react.useState)("stopped"),spinState=_useState3[0],setSpinState=_useState3[1];return(0,react.useEffect)((function(){if(containerRef.current){gsap.p8.registerPlugin(Draggable._);var draggable=Draggable._.create(containerRef.current,{type:"rotation",throwProps:!0,onDragStart:function onDragStart(){console.log("drag start"),canSpin||draggable[0].disable()},onRelease:function onRelease(){if(containerRef.current){draggable[0].disable();var selectedIndex=getRandomWeightedIndex(promotions),angle=360/promotions.length,targetRotation=selectedIndex*angle+angle/2;gsap.p8.to(containerRef.current,{rotation:"+=".concat(targetRotation+4320),duration:3,ease:"none",onComplete:function onComplete(){var finalRotation=function calculateFinalRotation(currentRotation,selectedIndex){var diff=270-selectedIndex*(360/promotions.length)+90-currentRotation%360;return currentRotation+diff+360*Math.ceil((diff+360)/360)}(gsap.p8.getProperty(containerRef.current,"rotation"),selectedIndex);gsap.p8.timeline();promotions.forEach((function(_,index){var sliceElement=containerRef.current.querySelector('[data-promo-index="'.concat(index,'"]')),imageElement=sliceElement.querySelector("img");if(sliceElement&&imageElement){var parentAbsoluteRotation=getAbsoluteRotation(sliceElement),counterRotation=getAbsoluteRotation(imageElement)-parentAbsoluteRotation;imageElement.style.transform="rotate(".concat(counterRotation,"deg)")}})),gsap.p8.to(containerRef.current,{rotation:finalRotation,duration:1,ease:"power2.out",onComplete:function onComplete(){console.log("Final rotation",gsap.p8.getProperty(containerRef.current,"rotation")),onSpinEnd(promotions[selectedIndex]),setSelectedPromo(promotions[selectedIndex]),setSpinState("spin-complete")}})}})}}});return function(){draggable[0].kill()}}}),[containerRef,promotions,canSpin,onSpinEnd]),spinner_jsx(SpinnerStyled,{width:2*wheelRadius,height:2*wheelRadius,className:"".concat(spinState)},spinner_jsx("div",{className:"inner-ring"},spinner_jsx("div",{className:"center-dot"})),spinner_jsx("div",{className:"pointer"},spinner_jsx(Graphic.Z,{graphicName:"indicator-trapezoid"})),spinner_jsx("div",{className:"spinner-outer",ref:containerRef,style:{position:"relative",width:2*wheelRadius,height:2*wheelRadius}},promotions.map((function(promo,index){var angle=360/promotions.length*index,angleRad=angle*Math.PI/180,radius=.5*wheelRadius,leftPosition=wheelRadius+radius*Math.cos(angleRad),topPosition=wheelRadius+radius*Math.sin(angleRad),promoHeight=2*Math.PI*wheelRadius/promotions.length*(1-promotions.length/100*10+1);return spinner_jsx("div",{key:index,className:"promo-item promo".concat(index),"data-promo-index":index,style:{position:"absolute",top:"".concat(topPosition,"px"),left:"".concat(leftPosition,"px"),width:"".concat(wheelRadius,"px"),height:"".concat(promoHeight,"px"),transform:"translate(-50%, -50%) rotate(".concat(angle,"deg)")}},spinner_jsx(PromotionItem,{name:promo.name,link:promo.link,weight:promo.weight,componentType:promo.componentType,promoMode:promo.promoMode,highlightedText:promo.highlightedText,backgroundTexture:promo.backgroundTexture,highlightImage:promo.highlightImage,spinnerMode,imageCounterRotation:angle}))}))),selectedPromo?spinner_jsx(PromoClaim.Z,{promotion:selectedPromo,onClaim:function onClaim(){}}):null)};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner"};const spinner_spinner=Spinner;try{spinner.displayName="spinner",spinner.__docgenInfo={description:"",displayName:"spinner",props:{promotions:{defaultValue:null,description:"",name:"promotions",required:!0,type:{name:"Promotion[]"}},onSpinEnd:{defaultValue:null,description:"",name:"onSpinEnd",required:!0,type:{name:"(selectedPromo: Promotion) => void"}},wheelRadius:{defaultValue:null,description:"",name:"wheelRadius",required:!0,type:{name:"number"}},spinnerMode:{defaultValue:null,description:"",name:"spinnerMode",required:!0,type:{name:"enum",value:[{value:'"traditional"'},{value:'"icons-first"'},{value:'"vertical-text"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/spinner/spinner.tsx#spinner"]={docgenInfo:spinner.__docgenInfo,name:"spinner",path:"src/components/Gamification/Spinner/spinner/spinner.tsx#spinner"})}catch(__react_docgen_typescript_loader_error){}var _TraditionalSpinner$p,_TraditionalSpinner$p2,_IconsFirst$parameter,_IconsFirst$parameter2,spinner_stories_console=__webpack_require__("./node_modules/console-browserify/index.js"),spinner_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const spinner_stories={title:"Components/Spinner",component:spinner_spinner,argTypes:{wheelRadius:{control:"number"}}};var Template=function Template(args){return spinner_stories_jsx(spinner_spinner,args)};Template.displayName="Template";var TraditionalSpinner=Template.bind({});TraditionalSpinner.args={wheelRadius:300,spinnerMode:"traditional",promotions:[{name:"Press or drag the wheel to spin",highlightedText:"Spin to Win!",promoMode:"default",link:"https://example.com/promo2-image.png",weight:2,componentType:"image"},{name:"Try Again Tomorrow",highlightedText:"Sorry!",promoMode:"highlighted",link:"https://example.com/promo3-image.png",weight:1,componentType:"image"},{name:"Get extra 5% Off any accessory",highlightedText:"5% Off",highlightImage:"https://images.keurig.com/is/image/keurig/Keurig-Hot-and-Cold-Milk-Frother_5000373729?fmt=png-alpha",link:"https://example.com/promo1-image.png",weight:1,componentType:"image",promoMode:"big-image"},{name:"Any Green Mountain Coffee Roasters® product ",highlightedText:"$1 Off",promoMode:"big-image",highlightImage:"https://www.gmcr.com/etc.clientlibs/keurig-sites/clientlibs/keurig-sites/keurig-brand-sites/gmcr/clientlibs/resources/images/logo.png",link:"https://example.com/promo3-image.png",weight:.01,componentType:"image"},{name:"Green Mountain Coffee Roasters® Southern Pecan",highlightedText:"$4 off ",link:"https://example.com/promo3-image.png",highlightImage:"https://images.keurig.com/is/image/keurig/Southern-Pecan-Coffee-K-Cup-Green-Mountain-Coffee_en_general?fmt=png-alpha",promoMode:"big-image",weight:.1,componentType:"image"}],onSpinEnd:function onSpinEnd(selectedPromo){spinner_stories_console.log("Selected promo:",selectedPromo.name)}};var IconsFirst=Template.bind({});IconsFirst.args={wheelRadius:300,spinnerMode:"icons-first",promotions:[{name:"Perks Points",highlightedText:"1000 Bonus",promoMode:"default",link:"https://example.com/promo2-image.png",highlightImage:"editorial/perks_points.svg",weight:2,componentType:"image"},{name:"1 Perks Reward",highlightedText:"Free!",promoMode:"big-image",highlightImage:"editorial/present.png",link:"",weight:1,componentType:"image"},{name:"Get extra 5% Off any accessory",highlightedText:"5% Off",highlightImage:"https://images.keurig.com/is/image/keurig/Keurig-Hot-and-Cold-Milk-Frother_5000373729?fmt=png-alpha",link:"https://example.com/promo1-image.png",weight:1,componentType:"image",promoMode:"big-image"},{name:"Any Green Mountain Coffee Roasters® product ",highlightedText:"$1 Off",promoMode:"big-image",highlightImage:"https://www.gmcr.com/etc.clientlibs/keurig-sites/clientlibs/keurig-sites/keurig-brand-sites/gmcr/clientlibs/resources/images/logo.png",link:"https://example.com/promo3-image.png",weight:.01,componentType:"image"},{name:"Green Mountain Coffee Roasters® Southern Pecan",highlightedText:"$4 off ",link:"https://example.com/promo3-image.png",highlightImage:"food-scenes/Pecan_Pie_and_Coffee.png",promoMode:"big-image",weight:.1,componentType:"image"}],onSpinEnd:function onSpinEnd(selectedPromo){spinner_stories_console.log("Selected promo:",selectedPromo.name)}},TraditionalSpinner.parameters=_objectSpread(_objectSpread({},TraditionalSpinner.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TraditionalSpinner$p=TraditionalSpinner.parameters)||void 0===_TraditionalSpinner$p?void 0:_TraditionalSpinner$p.docs),{},{source:_objectSpread({originalSource:"args => <Spinner {...args} />"},null===(_TraditionalSpinner$p2=TraditionalSpinner.parameters)||void 0===_TraditionalSpinner$p2||null===(_TraditionalSpinner$p2=_TraditionalSpinner$p2.docs)||void 0===_TraditionalSpinner$p2?void 0:_TraditionalSpinner$p2.source)})}),IconsFirst.parameters=_objectSpread(_objectSpread({},IconsFirst.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IconsFirst$parameter=IconsFirst.parameters)||void 0===_IconsFirst$parameter?void 0:_IconsFirst$parameter.docs),{},{source:_objectSpread({originalSource:"args => <Spinner {...args} />"},null===(_IconsFirst$parameter2=IconsFirst.parameters)||void 0===_IconsFirst$parameter2||null===(_IconsFirst$parameter2=_IconsFirst$parameter2.docs)||void 0===_IconsFirst$parameter2?void 0:_IconsFirst$parameter2.source)})})},"./src/components/Animated Effects/Typist/Typist.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TypingContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div(_templateObject||(_templateObject=(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  font-size: 16px;\n"]))),TypingEffect=(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span(_templateObject2||(_templateObject2=(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  display: inline-block;\n"]))),function TypingEffect(_ref){var message=_ref.message,_ref$speed=_ref.speed,speed=void 0===_ref$speed?100:_ref$speed,_ref$classes=(_ref.showCursor,_ref.classes),classes=void 0===_ref$classes?"":_ref$classes,containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var index=0,container=containerRef.current;!function typeCharacter(){if(container&&index<message.length){var charSpan=document.createElement("span");charSpan.innerText=message[index],container.appendChild(charSpan),index++,setTimeout(typeCharacter,speed)}}()}),[]),__jsx(TypingContainer,{className:"typing-effect ".concat(classes),ref:containerRef})});TypingEffect.displayName="TypingEffect",TypingEffect.__docgenInfo={description:"",methods:[],displayName:"TypingEffect",props:{speed:{defaultValue:{value:"100",computed:!1},required:!1},showCursor:{defaultValue:{value:"true",computed:!1},required:!1},classes:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=TypingEffect;try{Typist.displayName="Typist",Typist.__docgenInfo={description:"",displayName:"Typist",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},speed:{defaultValue:{value:"100"},description:"",name:"speed",required:!1,type:{name:"number"}},showCursor:{defaultValue:{value:"true"},description:"",name:"showCursor",required:!1,type:{name:"boolean"}},classes:{defaultValue:{value:""},description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animated Effects/Typist/Typist.tsx#Typist"]={docgenInfo:Typist.__docgenInfo,name:"Typist",path:"src/components/Animated Effects/Typist/Typist.tsx#Typist"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromoClaim_PromoClaim});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),PromoClaimStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 1vw 2vw 1vw;\n  background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 241, 234, 1) 100%);\n  @keyframes scaleUp {\n    from{\n        transform: scale(0);\n    }\n    to{\n        transform: scale(1);\n    }\n  }\n  @keyframes fadeIn {\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n  }\n  \n  .promo-claim-details{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    img{\n      animation: scaleUp 0.5s ease-in-out;\n      animation-fill-mode: forwards;\n      margin-top: -15%;\n      object-fit: contain;\n    }\n    .claim-btn{\n      animation: scaleUp 0.5s ease-in-out, fadeIn 0.25s ease-in-out;\n      animation-fill-mode: forwards;\n      animation-delay: 0.75s;\n      opacity: 0;\n    }\n    .decline{\n      font-size: calc(0.25vw + 8px);\n      animation: fadeIn 0.25s ease-in;\n      animation-fill-mode: forwards;\n      animation-delay: 1s;\n      opacity: 0;\n      margin-top: calc(0.5vw + 6px);\n    }\n    .title{\n      text-align: center;\n      font-size: calc(0.5vw + 18px);\n      line-height:  calc(0.5vw + 18px);\n      border: none;\n      margin-bottom: 1vw;\n    }\n    .fine-print{ \n      font-size: calc(0.5vw + 12px); \n      padding: 0 10% 5%;\n      justify-content: center;\n      animation: fadeIn 0.25s ease-in;\n      animation-fill-mode: forwards;\n      animation-delay: 1s;\n      opacity: 0;\n    }\n  }\n\n  \n\n"])));try{PromoClaimStyled.displayName="PromoClaimStyled",PromoClaimStyled.__docgenInfo={description:"",displayName:"PromoClaimStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoClaim/promoclaim.styled.tsx#PromoClaimStyled"]={docgenInfo:PromoClaimStyled.__docgenInfo,name:"PromoClaimStyled",path:"src/components/Gamification/Spinner/PromoClaim/promoclaim.styled.tsx#PromoClaimStyled"})}catch(__react_docgen_typescript_loader_error){}var Typist=__webpack_require__("./src/components/Animated Effects/Typist/Typist.tsx"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement,PromoClaim=function PromoClaim(_ref){var _promotion$highlightI,promotion=_ref.promotion,onClaim=_ref.onClaim;return __jsx(PromoClaimStyled,{className:"promo-claim"},__jsx("div",{className:"promo-claim-details"},__jsx(next_image.Z,{unoptimized:!0,width:500,height:500,src:null!==(_promotion$highlightI=promotion.highlightImage)&&void 0!==_promotion$highlightI?_promotion$highlightI:"",alt:promotion.name,style:{width:"100px",height:"100px"}}),__jsx(Typist.Z,{speed:.0025,classes:"title",message:promotion.name}),__jsx("p",{className:"fine-print"},"Restrictions apply. See terms & conditions for details. "),__jsx(KButton.Z,{actionFunc:function actionFunc(){return onClaim(promotion)},classes:"claim-btn",transitionType:"expand-bg",label:"Claim",buttonType:"primary",buttonWidth:"fit-to-content",iconPlacement:"no-icon"}),__jsx("a",{className:"decline"},"No thanks")))};PromoClaim.displayName="PromoClaim",PromoClaim.__docgenInfo={description:"",methods:[],displayName:"PromoClaim"};const PromoClaim_PromoClaim=PromoClaim;try{PromoClaim.displayName="PromoClaim",PromoClaim.__docgenInfo={description:"",displayName:"PromoClaim",props:{promotion:{defaultValue:null,description:"",name:"promotion",required:!0,type:{name:"Promotion"}},onClaim:{defaultValue:null,description:"",name:"onClaim",required:!0,type:{name:"(promo: Promotion) => void"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx#PromoClaim"]={docgenInfo:PromoClaim.__docgenInfo,name:"PromoClaim",path:"src/components/Gamification/Spinner/PromoClaim/PromoClaim.tsx#PromoClaim"})}catch(__react_docgen_typescript_loader_error){}}}]);