"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[4961],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Filters/filterableList/FilterableList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StatefulCheckboxList:()=>StatefulCheckboxList,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _StatefulCheckboxList,_StatefulCheckboxList2,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FilterableCheckboxList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Filters/filterableList/FilterableCheckboxList.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Example/FilterableCheckboxList",component:_FilterableCheckboxList__WEBPACK_IMPORTED_MODULE_2__.Z};var initialItems=[{label:"Example item 1",isChecked:!1,detailsText:"This is a detail text"},{label:"Example item 2",isChecked:!1,detailsText:"This is a detail text"},{label:"Example item 3",isChecked:!1,detailsText:"This is a detail text"}],StatefulCheckboxList=function StatefulCheckboxList(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialItems),items=_useState[0],setItems=_useState[1];return __jsx(_FilterableCheckboxList__WEBPACK_IMPORTED_MODULE_2__.Z,{sectionIndex:0,items,onSelectionChange:function handleSelectionChange(index){console.log("index",index),setItems((function(items){return items.map((function(item,i){return i===index?{label:item.label,isChecked:!item.isChecked,detailsText:item.detailsText}:item}))})),console.log("Selection changed")}})};StatefulCheckboxList.displayName="StatefulCheckboxList",StatefulCheckboxList.parameters=_objectSpread(_objectSpread({},StatefulCheckboxList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StatefulCheckboxList=StatefulCheckboxList.parameters)||void 0===_StatefulCheckboxList?void 0:_StatefulCheckboxList.docs),{},{source:_objectSpread({originalSource:"() => {\n  const [items, setItems] = useState<CheckboxItem[]>(initialItems);\n  const handleSelectionChange = (index: number) => {\n    console.log(\"index\", index);\n    setItems(items => items.map((item, i) => {\n      if (i === index) {\n        return {\n          label: item.label,\n          isChecked: !item.isChecked,\n          detailsText: item.detailsText\n        };\n      }\n      return item;\n    }));\n    console.log('Selection changed');\n  };\n  return <FilterableCheckboxList sectionIndex={0} items={items} onSelectionChange={handleSelectionChange} />;\n}"},null===(_StatefulCheckboxList2=StatefulCheckboxList.parameters)||void 0===_StatefulCheckboxList2||null===(_StatefulCheckboxList2=_StatefulCheckboxList2.docs)||void 0===_StatefulCheckboxList2?void 0:_StatefulCheckboxList2.source)})}),StatefulCheckboxList.__docgenInfo={description:"",methods:[],displayName:"StatefulCheckboxList"};try{StatefulCheckboxList.displayName="StatefulCheckboxList",StatefulCheckboxList.__docgenInfo={description:"",displayName:"StatefulCheckboxList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Filters/filterableList/FilterableList.stories.tsx#StatefulCheckboxList"]={docgenInfo:StatefulCheckboxList.__docgenInfo,name:"StatefulCheckboxList",path:"src/components/Filters/filterableList/FilterableList.stories.tsx#StatefulCheckboxList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AsyncImage/AsyncImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AsyncImage_AsyncImage});var _templateObject,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),AsyncImageWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.img(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  object-fit: contain;\n"])));try{AsyncImageWrapper.displayName="AsyncImageWrapper",AsyncImageWrapper.__docgenInfo={description:"",displayName:"AsyncImageWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AsyncImage/Async.styled.tsx#AsyncImageWrapper"]={docgenInfo:AsyncImageWrapper.__docgenInfo,name:"AsyncImageWrapper",path:"src/components/AsyncImage/Async.styled.tsx#AsyncImageWrapper"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement,AsyncImage=function AsyncImage(props){var _React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),loaded=_React$useState2[0],setLoaded=_React$useState2[1],handleImageLoad=function handleImageLoad(){setLoaded(!0)};return __jsx(react.Fragment,null,function getImage(){switch(props.imageType){case"icon":return __jsx(Graphic.z,{graphicName:props.src});case"image":return __jsx(AsyncImageWrapper,{src:props.src,alt:props.alt,className:"".concat(props.className||""," ").concat(loaded?"":"hidden"," async-image"),onLoad:handleImageLoad})}}(),!loaded&&__jsx("div",{className:"placeholder ".concat(loaded?"hidden":"")}))};AsyncImage.__docgenInfo={description:"",methods:[],displayName:"AsyncImage",props:{src:{required:!0,tsType:{name:"union",raw:"string | iIllustration | iconType",elements:[{name:"string"},{name:"iIllustration"},{name:"iconType"}]},description:""},imageType:{required:!0,tsType:{name:"union",raw:'"icon" | "illustration" | "image"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"illustration"'},{name:"literal",value:'"image"'}]},description:""},alt:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const AsyncImage_AsyncImage=AsyncImage;try{AsyncImage.displayName="AsyncImage",AsyncImage.__docgenInfo={description:"",displayName:"AsyncImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string | iIllustration"}},imageType:{defaultValue:null,description:"",name:"imageType",required:!0,type:{name:"enum",value:[{value:'"image"'},{value:'"icon"'},{value:'"illustration"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AsyncImage/AsyncImage.tsx#AsyncImage"]={docgenInfo:AsyncImage.__docgenInfo,name:"AsyncImage",path:"src/components/AsyncImage/AsyncImage.tsx#AsyncImage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Filters/filterableList/FilterableCheckboxList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>filterableList_FilterableCheckboxList});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),common_styled=__webpack_require__("./src/components/_commonStyles/common.styled.tsx"),FilterableCheckboxListStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n \n  .list-container{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    li{\n      margin: 0 0 1.5rem !important\n    }\n  }\n  \n  .overlay-btn{\n    ",";\n  }\n  \n  .check-list-item-container{\n    ",";\n    img{\n      margin-left: 1rem;\n    }\n  }\n  \n  .check-container, .check-container .icon{\n    ",";\n  }\n  .check-list-item{\n    position: relative;\n  }\n  \n  .check-container{\n    width: 2rem;\n    height: 1.5rem;\n    border: 1px solid;\n    margin: 0 0.25rem 0 0;\n    border-radius: 0.25rem;\n    \n   .icon{\n     padding: 0.15rem;\n   }\n  }\n\n  .text-area{\n    margin-left: 0.75rem;;\n    label{\n      cursor: pointer;\n      font-size: 16px;\n      color: rgb(112, 80, 67);\n      font-weight: bold;\n      margin-right: 5px;\n    }\n    .checkbox-item-details{\n      font-size: 12px;\n      color: rgb(136, 136, 136);\n      margin-top: 2px;\n    }\n  }\n  \n  \n"])),common_styled.g7,common_styled.xI,common_styled.Pp);try{FilterableCheckboxListStyled.displayName="FilterableCheckboxListStyled",FilterableCheckboxListStyled.__docgenInfo={description:"",displayName:"FilterableCheckboxListStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Filters/filterableList/filterable-toggle-list.styled.tsx#FilterableCheckboxListStyled"]={docgenInfo:FilterableCheckboxListStyled.__docgenInfo,name:"FilterableCheckboxListStyled",path:"src/components/Filters/filterableList/filterable-toggle-list.styled.tsx#FilterableCheckboxListStyled"})}catch(__react_docgen_typescript_loader_error){}var FilterableCheckboxList_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,AsyncImage=__webpack_require__("./src/components/AsyncImage/AsyncImage.tsx"),__jsx=react.createElement,FilterableCheckboxList=function FilterableCheckboxList(props){var _useState=(0,react.useState)(""),filterText=_useState[0],setFilterText=_useState[1],_useState2=(0,react.useState)([]),filteredItems=(_useState2[0],_useState2[1],props.items.filter((function(item){return item.label.toLowerCase().includes(filterText.toLowerCase())})));return __jsx(FilterableCheckboxListStyled,null,props.useFilter&&__jsx(Input,{className:"filter-input",type:"text",placeholder:"Filter...",value:filterText,onChange:function handleInputChange(event){setFilterText(event.target.value)}}),0===filteredItems.length?__jsx(NoResults,null,"No results found. ",__jsx(ClearButton,{onClick:function onClick(){return setFilterText("")}},"Clear filters")):__jsx("ul",{className:"list-container"},filteredItems.map((function(item,index){var _item$detailsText;return __jsx(ListItem,{className:"check-list-item",key:index},__jsx(KButton.Z,{classes:"overlay-btn",label:"",buttonType:"text-icon-noBG",actionFunc:function actionFunc(){return props.onSelectionChange(index,props.sectionIndex)}}),__jsx("div",{className:"".concat(item.isChecked?"is-checked":""," check-list-item-container")},__jsx("div",{className:"selection-main"},__jsx("div",{className:"check-container"},item.isChecked&&__jsx(Graphic.z,{graphicName:"icon-checkmark"})),__jsx("div",{className:"text-area"},__jsx(Label,null,item.label),item.detailsText&&__jsx("p",{className:"checkbox-item-details"},item.detailsText))),item.imageSrc&&__jsx(AsyncImage.Z,{imageType:"image",src:item.imageSrc,alt:null!==(_item$detailsText=item.detailsText)&&void 0!==_item$detailsText?_item$detailsText:""})))}))))};FilterableCheckboxList.displayName="FilterableCheckboxList";var Input=styled_components_browser_esm.ZP.input(FilterableCheckboxList_templateObject||(FilterableCheckboxList_templateObject=(0,taggedTemplateLiteral.Z)(["\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]))),ListItem=styled_components_browser_esm.ZP.li(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex; \n  align-items: center;\n  margin-bottom: 5px;\n  .selection-main{\n    display: flex;\n    align-items: center;\n  }\n"]))),Label=(styled_components_browser_esm.ZP.input.attrs({type:"checkbox"})(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  margin-right: 10px;\n"]))),styled_components_browser_esm.ZP.label(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  cursor: pointer;\n"])))),NoResults=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]))),ClearButton=styled_components_browser_esm.ZP.button(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  margin-left: 10px;\n  padding: 5px 10px;\n  border: none;\n  background-color: #ccc;\n  border-radius: 5px;\n  cursor: pointer;\n"])));FilterableCheckboxList.__docgenInfo={description:"",methods:[],displayName:"FilterableCheckboxList",props:{useFilter:{required:!1,tsType:{name:"boolean"},description:""},sectionIndex:{required:!0,tsType:{name:"number"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxItem"}],raw:"CheckboxItem[]"},description:""},onSelectionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, sectionIndex: number) => void",signature:{arguments:[{name:"index",type:{name:"number"}},{name:"sectionIndex",type:{name:"number"}}],return:{name:"void"}}},description:""}}};const filterableList_FilterableCheckboxList=FilterableCheckboxList;try{FilterableCheckboxList.displayName="FilterableCheckboxList",FilterableCheckboxList.__docgenInfo={description:"",displayName:"FilterableCheckboxList",props:{useFilter:{defaultValue:null,description:"",name:"useFilter",required:!1,type:{name:"boolean"}},sectionIndex:{defaultValue:null,description:"",name:"sectionIndex",required:!0,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!0,type:{name:"(index: number, sectionIndex: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Filters/filterableList/FilterableCheckboxList.tsx#FilterableCheckboxList"]={docgenInfo:FilterableCheckboxList.__docgenInfo,name:"FilterableCheckboxList",path:"src/components/Filters/filterableList/FilterableCheckboxList.tsx#FilterableCheckboxList"})}catch(__react_docgen_typescript_loader_error){}}}]);