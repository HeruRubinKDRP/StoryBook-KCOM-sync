"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[1436],{"./src/components/RecipeDetails/RecipeHero/recipe-hero.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RecipeHeroExample:()=>RecipeHeroExample,default:()=>recipe_hero_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),ContentComponent=__webpack_require__("./src/components/ContentComponents/ContentComponent.tsx"),KeyValueContent=__webpack_require__("./src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),RecipeHeroStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(['\n  font-family: "Mark OT", sans-serif;\n  display: flex;\n  height: 70vh;\n  .features-area{\n    display: flex;\n    justify-content: space-around;\n    margin-top: 1rem;\n  }\n  .key-value-content-container{\n    align-items: center;\n    border-right: 1px solid $sepia;\n    &:last-child{\n      border-right: 0;\n    }\n    flex-grow: 1;\n    h2 label{\n      font-size: 4rem;\n    }\n  }\n\n  &.small-container{\n    flex-direction: column-reverse;\n    .content-area{\n      text-align: center;\n      padding: 1rem 2rem 3rem 1rem;\n    }\n    .content-container{\n      height: 100% !important;\n    }\n  }\n  &.large-container{\n    flex-direction: row;\n    .content-area{\n      flex-basis: 50%;\n      padding: 5% 2rem;\n      h1{\n        font-size: 3.5rem;\n        line-height: 3.75rem;\n        padding-bottom: 1rem;\n      }\n      p{\n        font-size: 1.5rem;\n        line-height: 1.75rem;\n      }\n    }\n  }\n\n  .small-container{\n    flex-direction: column;\n  }\n\n'])));try{RecipeHeroStyled.displayName="RecipeHeroStyled",RecipeHeroStyled.__docgenInfo={description:"",displayName:"RecipeHeroStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RecipeDetails/RecipeHero/recipe-hero.styled.tsx#RecipeHeroStyled"]={docgenInfo:RecipeHeroStyled.__docgenInfo,name:"RecipeHeroStyled",path:"src/components/RecipeDetails/RecipeHero/recipe-hero.styled.tsx#RecipeHeroStyled"})}catch(__react_docgen_typescript_loader_error){}var _RecipeHeroExample$pa,_RecipeHeroExample$pa2,_RecipeHeroExample$pa3,__jsx=react.createElement,RecipeHero=function RecipeHero(props){var _useResizeDetector=(0,index_esm.NB)({handleHeight:!1,refreshMode:"debounce",refreshRate:200,skipOnMount:!1,onResize:function onResize(){}}),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);return __jsx(RecipeHeroStyled,{ref,className:"".concat(function getContainerQuery(widthX){return widthX?widthX<1e3?"small-container":"large-container":"small-container"}(width)," recipe-hero-container")},__jsx("div",{className:"content-area"},__jsx("h1",null,props.title),__jsx("p",null,props.details),function getRecipeFeatures(){for(var features=[],i=0;i<props.features.length;i++)features.push(__jsx(KeyValueContent.M,{layoutType:props.features[i].layoutType,primaryMessage:props.features[i].primaryMessage,secondaryMessage:props.features[i].secondaryMessage}));return __jsx("div",{className:"features-area"},features)}()),__jsx(ContentComponent.S,{backGroundType:"image",backgroundColor:"none",backgroundUrlPath:props.heroImagePath,ctaLabel:"",ctaLinkTo:"",ctaMode:"button",hasCTA:!1,heightMethod:"stretch-to-parent",mainMessage:"",mainMessageColor:"white",mainMessageWeight:"regular-weight",mainTextHasShadow:!1,messageTextAlignment:"text-left",secondaryMessage:"",secondaryMessageWeight:"heavy-weight",sectionType:"content-front-and-center",component:"content",contrastBackground:"none",hasFocalImage:!1,sectionName:""}))};RecipeHero.displayName="RecipeHero",RecipeHero.__docgenInfo={description:"",methods:[],displayName:"RecipeHero",props:{title:{required:!0,tsType:{name:"string"},description:""},details:{required:!0,tsType:{name:"string"},description:""},heroImagePath:{required:!0,tsType:{name:"string"},description:""},features:{required:!0,tsType:{name:"Array",elements:[{name:"iKeyValueContent"}],raw:"iKeyValueContent[]"},description:""}}};try{RecipeHero.displayName="RecipeHero",RecipeHero.__docgenInfo={description:"",displayName:"RecipeHero",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!0,type:{name:"string"}},heroImagePath:{defaultValue:null,description:"",name:"heroImagePath",required:!0,type:{name:"string"}},features:{defaultValue:null,description:"",name:"features",required:!0,type:{name:"iKeyValueContent[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RecipeDetails/RecipeHero/RecipeHero.tsx#RecipeHero"]={docgenInfo:RecipeHero.__docgenInfo,name:"RecipeHero",path:"src/components/RecipeDetails/RecipeHero/RecipeHero.tsx#RecipeHero"})}catch(__react_docgen_typescript_loader_error){}var recipe_hero_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const recipe_hero_stories={title:"Molecules/Recipe Hero",component:RecipeHero,argTypes:{title:{control:"text"},details:{control:"text"},heroImagePath:{control:"text"}}};var Template=function Template(args){return recipe_hero_stories_jsx(RecipeHero,args)};Template.displayName="Template";var RecipeHeroExample=Template.bind({});RecipeHeroExample.args={title:"Caramel Frozen Blended Coffee",details:"Caramel sauce adds a hint of sweetness to this luscious coffee treat. The perfect refreshment for your next virtual watch party.",heroImagePath:"/recipes/hero-iced-caramel-latte.webp",features:[{layoutType:"stacked",primaryMessage:{label:"5",color:"medium-roast"},secondaryMessage:{label:"Minutes",color:"text"}},{layoutType:"stacked",primaryMessage:{label:"3",color:"medium-roast"},secondaryMessage:{label:"Ingredients",color:"text"}},{layoutType:"stacked",primaryMessage:{label:"5",color:"medium-roast"},secondaryMessage:{label:"Steps",color:"text"}}]},RecipeHeroExample.parameters=_objectSpread(_objectSpread({},RecipeHeroExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RecipeHeroExample$pa=RecipeHeroExample.parameters)||void 0===_RecipeHeroExample$pa?void 0:_RecipeHeroExample$pa.docs),{},{source:_objectSpread({originalSource:"args => <RecipeHero {...args} />"},null===(_RecipeHeroExample$pa2=RecipeHeroExample.parameters)||void 0===_RecipeHeroExample$pa2||null===(_RecipeHeroExample$pa3=_RecipeHeroExample$pa2.docs)||void 0===_RecipeHeroExample$pa3?void 0:_RecipeHeroExample$pa3.source)})})},"./src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>KeyValueContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Graphic_Graphic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Graphic/Graphic.tsx"),_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,KeyValueContent=function KeyValueContent(props){var getIcon=function getIcon(icon,positionMatch){if(positionMatch)return icon?__jsx(_Graphic_Graphic__WEBPACK_IMPORTED_MODULE_1__.z,{graphicName:icon.icon,colorOverride:(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__.G)(icon.color),iconSize:"1rem",classesOverride:icon.iconPosition}):void 0};return __jsx("div",{className:"".concat(props.layoutType," key-value-content-container")},function getPrimary(){return __jsx("p",{className:"primary-label",style:{color:(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__.G)(props.primaryMessage.color)}},getIcon(props.primaryMessage,"before"==props.primaryMessage.iconPosition),__jsx("label",null,props.primaryMessage.label),getIcon(props.primaryMessage,"after"==props.primaryMessage.iconPosition))}(),function getSecondary(){if(props.secondaryMessage)return __jsx("p",{style:{color:(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__.G)(props.secondaryMessage.color)}},getIcon(props.primaryMessage,"before"==props.primaryMessage.iconPosition),props.secondaryMessage.label,getIcon(props.primaryMessage,"after"==props.primaryMessage.iconPosition))}())};KeyValueContent.displayName="KeyValueContent",KeyValueContent.__docgenInfo={description:"",methods:[],displayName:"KeyValueContent",props:{layoutType:{required:!0,tsType:{name:"union",raw:'"stacked" | "inline"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"inline"'}]},description:""},primaryMessage:{required:!0,tsType:{name:"signature",type:"object",raw:'{\n  label : string;\n  icon? : iconType;\n  color? : colorByNameType;\n  iconPosition? : "before" | "after"\n}',signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"iconType",required:!1}},{key:"color",value:{name:"colorByNameType",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}],required:!1}}]}},description:""},secondaryMessage:{required:!1,tsType:{name:"signature",type:"object",raw:'{\n  label : string;\n  icon? : iconType;\n  color? : colorByNameType;\n  iconPosition? : "before" | "after"\n}',signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"iconType",required:!1}},{key:"color",value:{name:"colorByNameType",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}],required:!1}}]}},description:""},colorSchemes:{required:!1,tsType:{name:"colorByNameType"},description:""}}};try{KeyValueContent.displayName="KeyValueContent",KeyValueContent.__docgenInfo={description:"",displayName:"KeyValueContent",props:{layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"inline"'}]}},primaryMessage:{defaultValue:null,description:"",name:"primaryMessage",required:!0,type:{name:"keyValMessageT"}},secondaryMessage:{defaultValue:null,description:"",name:"secondaryMessage",required:!1,type:{name:"keyValMessageT"}},colorSchemes:{defaultValue:null,description:"",name:"colorSchemes",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx#KeyValueContent"]={docgenInfo:KeyValueContent.__docgenInfo,name:"KeyValueContent",path:"src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx#KeyValueContent"})}catch(__react_docgen_typescript_loader_error){}}}]);