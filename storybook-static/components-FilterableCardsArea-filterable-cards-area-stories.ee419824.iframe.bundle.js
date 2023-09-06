"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[4125],{"./src/components/FilterableCardsArea/filterable-cards-area.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RecipesExample:()=>RecipesExample,default:()=>filterable_cards_area_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),product_data=__webpack_require__("./src/data/product-data.tsx"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),ContentComponent=__webpack_require__("./src/components/ContentComponents/ContentComponent.tsx"),expand_collapse=__webpack_require__("./src/components/ExpandCollapse/expand-collapse.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),colorNameToValue=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),common_styled=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),FilterableCardsStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\n  ",";\n  \n  .messaging-container{\n    h1{\n      &.Medium{\n        font-size: 3vw !important;\n        line-height: 3vw !important;}\n    }\n  }\n  position: relative;\n  .content-container{\n    .section-front-center{\n      padding: 4rem 10% !important;\n    }\n  }\n\n  .expand-collapse{\n    .content-area{\n      padding-top: 4rem !important;\n    }\n  }\n\n  .filters-menu-container{\n    position: sticky;\n    z-index: 200;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 1rem;\n    background-color: rgba(255, 255, 255, 0.7);\n    backdrop-filter: blur(8px);\n    .k-btn{\n      margin-right: 1rem;\n      border-color: var(--colorMediumRoast) !important;\n      &.active{\n        background-color: var(--colorMediumRoast) !important;\n        &:hover{\n          label{\n            color: var(--colorMediumRoast) !important;\n          }\n        }\n        label{\n          color: white !important;\n        }\n      }\n      label{\n        color: var(--colorMediumRoast) !important;;\n      }\n    }\n    .filter-label{\n      font-weight: 600;\n      margin-right: 0.5rem;\n    }\n  }\n\n  .filterable-cards-area{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n\n    .filters-menu-container{\n      display: flex;\n      padding: 1rem;\n    }\n\n    .key-value-content-container{\n      margin: 0 0 1vw;\n      label{\n        color: var(--colorDarkRoast) !important;\n        font-weight: 400;\n      }\n    }\n\n\n\n\n    &.small-container{\n      .highlight-card-container{\n        .image-container{\n          height:70vw!important;\n          width:70vw!important;\n        }\n        margin-bottom: 2rem;\n        margin-right: 4.5%;\n        margin-left: 4.5%;\n        width:70vw !important;\n        min-height: 70vw !important;\n        min-width: 70vw !important;\n        max-width: 70vw !important;\n\n        h3{\n          font-size: 0.75rem !important;\n        }\n        h2{\n          font-size: 1.25rem !important;\n        }\n        .key-value-content-container{\n          label{\n            font-size: 0.75rem !important;\n          }\n          .icon{\n            height: 0.75rem !important;\n            width: 0.75rem !important;\n            svg{\n              margin-bottom: 0.75rem;\n            }\n          }\n        }\n        .title-area{\n          margin-bottom: 3rem;\n        }\n      }\n    }\n\n    &.medium-container{\n      .highlight-card-container{\n        .image-container{\n          height:40vw!important;\n          width:40vw!important;\n        }\n        width:40vw!important;\n        min-height: 40vw!important;\n        min-width: 40vw!important;\n        max-width: 40vw!important;\n        margin-bottom: 2.5rem;\n        margin-left: 4.12%;\n        margin-right: 4.12%;\n        .title-area{\n          margin-bottom: 3rem;\n        }\n      }\n    }\n    &.medium-large-container{\n      .highlight-card-container{\n        .image-container{\n          height:20vw!important;\n          width:20vw!important;\n        }\n        width:20vw!important;\n        min-height: 20vw!important;\n        min-width: 20vw!important;\n        max-width: 20vw!important;\n        margin-bottom: 2.5rem;\n        margin-left: 4.12%;\n        margin-right: 4.12%;\n        .title-area{\n          margin-bottom: 3rem;\n        }\n      }\n    }\n\n\n\n    &.large-container{\n      justify-content: center;\n      .highlight-card-container{\n        .image-container{\n          height:20vw!important;\n          width:20vw!important;\n        }\n        width:20vw!important;\n        min-height: 20vw!important;\n        min-width: 20vw!important;\n        max-width: 20vw!important;\n        margin-bottom: 3.5rem;\n        margin-left: 2.5%;\n        margin-right: 2.5%;\n        .title-area{\n          margin-bottom: 3rem;\n        }\n        .key-value-content-container{\n          margin-top: auto;\n        }\n      }\n    }\n  }\n  \n"])),common_styled.oe);try{FilterableCardsStyled.displayName="FilterableCardsStyled",FilterableCardsStyled.__docgenInfo={description:"",displayName:"FilterableCardsStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FilterableCardsArea/filterable-cards.styled.tsx#FilterableCardsStyled"]={docgenInfo:FilterableCardsStyled.__docgenInfo,name:"FilterableCardsStyled",path:"src/components/FilterableCardsArea/filterable-cards.styled.tsx#FilterableCardsStyled"})}catch(__react_docgen_typescript_loader_error){}var _RecipesExample$param,_RecipesExample$param2,console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,FilterableCardsArea=function FilterableCardsArea(props){var _useResizeDetector=(0,index_esm.NB)(),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref),_useState=(0,react.useState)(null),filters=_useState[0],setFilterActiveStates=_useState[1],_useState2=(0,react.useState)(!0);_useState2[0],_useState2[1];(0,react.useEffect)((function(){for(var filterTerms=[],i=0;i<props.filterTerms.length;i++)filterTerms.push({filterText:props.filterTerms[i],isActive:!1});setFilterActiveStates(filterTerms)}),[props.filterTerms]),(0,react.useEffect)((function(){checkFilters()}),[filters]);var getContainerSize=function getContainerSize(widthX){return widthX?widthX<450?"small-container":widthX<700&&widthX>=450?"medium-container":widthX<900&&widthX>=700?"medium-large-container":"large-container":"small-container"},checkFilters=function checkFilters(){if(!filters||null==filters)return!0;for(var selectedCount=0,i=0;i<filters.length;i++)filters[i].isActive&&selectedCount++;return!(selectedCount>0)};return __jsx(FilterableCardsStyled,{ref,className:"filterable-cards-container ".concat(function getContainerQuery(widthX){return widthX?widthX<450?"small-container":widthX<768&&widthX>=450?"medium-container":"large-container":"small-container"}(width))},function getFilterMenu(){if(filters){for(var menuItems=[],getActive=function getActive(isActive){return isActive?"active":""},_loop=function _loop(i){menuItems.push(__jsx(KButton.Z,{buttonType:"secondary",buttonWidth:"fit-to-content",iconPlacement:"no-icon",iconStandard:"none",transitionType:"expand-bg",label:filters[i].filterText,actionFunc:function actionFunc(){return function manageFilters(index){if(null!=filters){console.log(index);var bla=JSON.parse(JSON.stringify(filters));bla[index].isActive=!filters[index].isActive,setFilterActiveStates(bla),console.log(filters)}}(i)},classes:"".concat(getActive(filters[i].isActive))}))},i=0;i<filters.length;i++)_loop(i);return __jsx("div",{className:"filters-menu-container ".concat(props.menuColorScheme)},__jsx("label",{className:"filter-label",style:{color:(0,colorNameToValue.G)(props.menuColorScheme)}},"Filter by:"),menuItems)}}(),function getHeaderArea(){if(props.headerArea)return __jsx(ContentComponent.S,{customClasses:"max-height ",backGroundType:"movie",backgroundUrlPath:"",contrastBackground:"none",ctaLabel:"",ctaLinkTo:"",heightMethod:"fit-content",mainMessage:props.headerArea.mainTitle,mainMessageSize:"Medium",mainMessageColor:"#473036",secondaryMessageSize:"Medium",secondaryMessage:props.headerArea.secondaryTitle,sectionType:"content-front-and-center",backgroundColor:"none",component:"content",hasCTA:!1,hasFocalImage:!1,mainTextHasShadow:!1,sectionName:"milk-frother-intro"})}(),__jsx("div",{ref,className:"filterable-cards-area ".concat(getContainerSize(width))},function getCards(filterS){if(filterS&&null!=filterS){var cards=[],cardsForLarger=[],allUnselected=checkFilters(),totalMatchingCards=0;cards:for(var i=0;i<props.cards.length;i++)for(var j=0;j<filterS.length;j++)if(filterS[j].isActive||allUnselected)for(var k=0;k<props.cards[i].filterTerms.length;k++)if(filterS[j].filterText==props.cards[i].filterTerms[k]||allUnselected){if(totalMatchingCards<8){cards.push(props.cards[i].card),totalMatchingCards++;continue cards}cardsForLarger.push(props.cards[i].card),totalMatchingCards++;continue cards}return totalMatchingCards<=8?__jsx(react.Fragment,null,cards):__jsx(react.Fragment,null,cards,__jsx(expand_collapse.R,{expanderStyle:"button",expandText:"View More",isExpandedText:"View Less",buttonType:"primary",content:__jsx("div",{className:"filterable-cards-area ".concat(getContainerSize(width))},cardsForLarger)}))}}(filters)))};FilterableCardsArea.displayName="FilterableCardsArea",FilterableCardsArea.__docgenInfo={description:"",methods:[],displayName:"FilterableCardsArea",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  cardName : string;\n  filterTerms : string[],\n  card : ReactElement\n}",signature:{properties:[{key:"cardName",value:{name:"string",required:!0}},{key:"filterTerms",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"card",value:{name:"ReactElement",required:!0}}]}}],raw:"filterableCardT[]"},description:""},filterTerms:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},menuColorScheme:{required:!0,tsType:{name:"colorByNameType"},description:""},headerArea:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  mainTitle : string;\n  secondaryTitle : string;\n  color? : colorByNameType\n}",signature:{properties:[{key:"mainTitle",value:{name:"string",required:!0}},{key:"secondaryTitle",value:{name:"string",required:!0}},{key:"color",value:{name:"colorByNameType",required:!1}}]}},description:""},mode:{required:!0,tsType:{name:"union",raw:'"rows" | "carousel"',elements:[{name:"literal",value:'"rows"'},{name:"literal",value:'"carousel"'}]},description:""}}};try{FilterableCardsArea.displayName="FilterableCardsArea",FilterableCardsArea.__docgenInfo={description:"",displayName:"FilterableCardsArea",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"filterableCardT[]"}},filterTerms:{defaultValue:null,description:"",name:"filterTerms",required:!0,type:{name:"string[]"}},menuColorScheme:{defaultValue:null,description:"",name:"menuColorScheme",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}},headerArea:{defaultValue:null,description:"",name:"headerArea",required:!1,type:{name:"{ mainTitle: string; secondaryTitle: string; color?: colorByNameType; }"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"carousel"'},{value:'"rows"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FilterableCardsArea/FilterableCardsArea.tsx#FilterableCardsArea"]={docgenInfo:FilterableCardsArea.__docgenInfo,name:"FilterableCardsArea",path:"src/components/FilterableCardsArea/FilterableCardsArea.tsx#FilterableCardsArea"})}catch(__react_docgen_typescript_loader_error){}var filterable_cards_area_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const filterable_cards_area_stories={title:"Organisms/Filterable Area",argTypes:{}};var Template=function Template(args){return filterable_cards_area_stories_jsx(FilterableCardsArea,args)};Template.displayName="Template";var RecipesExample=Template.bind({});RecipesExample.args={headerArea:{mainTitle:"Café Creations, the coffeehouse experience",secondaryTitle:"Simple and delicious coffee recipes to make at home."},menuColorScheme:"medium-roast",filterTerms:["hot","iced","frother","no frother"],cards:product_data.KP},RecipesExample.parameters=_objectSpread(_objectSpread({},RecipesExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RecipesExample$param=RecipesExample.parameters)||void 0===_RecipesExample$param?void 0:_RecipesExample$param.docs),{},{source:_objectSpread({originalSource:"args => <FilterableCardsArea {...args} />"},null===(_RecipesExample$param2=RecipesExample.parameters)||void 0===_RecipesExample$param2||null===(_RecipesExample$param2=_RecipesExample$param2.docs)||void 0===_RecipesExample$param2?void 0:_RecipesExample$param2.source)})})}}]);