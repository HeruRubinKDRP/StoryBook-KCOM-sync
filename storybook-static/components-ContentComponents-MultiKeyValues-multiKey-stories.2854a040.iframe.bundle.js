"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[5726],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/ContentComponents/MultiKeyValues/multiKey.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AreaExample:()=>AreaExample,LongFormStackedExample:()=>LongFormStackedExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _LongFormStackedExamp,_LongFormStackedExamp2,_AreaExample$paramete,_AreaExample$paramete2,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_MultiKeyValueArea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var multiKeyValueSettings={title:"Atoms/Multi Key Values Area",component:_MultiKeyValueArea__WEBPACK_IMPORTED_MODULE_2__.s,argTypes:{items:{control:"object"},layoutMode:{control:"radio",options:["stacked","inline"]}}},Template=function Template(args){return __jsx(_MultiKeyValueArea__WEBPACK_IMPORTED_MODULE_2__.s,args)};Template.displayName="Template";var LongFormStackedExample=Template.bind({});LongFormStackedExample.args={layoutMode:"stacked",items:[{layoutType:"stacked",primaryMessage:{label:"Phone Compatability"},secondaryMessage:{label:"The K-Café® SMART brewer is compatible with iOS 13 and higher and Android 8 or higher."},colorSchemes:"dark-roast"},{layoutType:"stacked",primaryMessage:{label:"Wi-Fi® Requirements"},secondaryMessage:{label:'The K-Café® SMART is optimized for home 2.4 GHz Wi-Fi® networks, using WPA2-PSK security. It is not compatible with networks that require an additional username and/or password, a webpage click through to establish a connection or 5 GHz Wi-Fi® networks."'},colorSchemes:"dark-roast"},{layoutType:"stacked",primaryMessage:{label:"Compatible with the My K-Cup® Universal Reusable Coffee Filter"},secondaryMessage:{label:"Brew your own ground coffee (sold separately)"},colorSchemes:"dark-roast"}]};var AreaExample=Template.bind({});AreaExample.args={layoutMode:"inline",items:[{layoutType:"inline",primaryMessage:{label:"Height:"},secondaryMessage:{label:'12.7"'},colorSchemes:"dark-roast"},{layoutType:"inline",primaryMessage:{label:"Height when open:"},secondaryMessage:{label:'17.2"'},colorSchemes:"dark-roast"},{layoutType:"inline",primaryMessage:{label:"Width:"},secondaryMessage:{label:'17.2"'},colorSchemes:"dark-roast"},{layoutType:"inline",primaryMessage:{label:"Weight:"},secondaryMessage:{label:'8.1lbs"'},colorSchemes:"dark-roast"}]};const __WEBPACK_DEFAULT_EXPORT__=multiKeyValueSettings;LongFormStackedExample.parameters=_objectSpread(_objectSpread({},LongFormStackedExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LongFormStackedExamp=LongFormStackedExample.parameters)||void 0===_LongFormStackedExamp?void 0:_LongFormStackedExamp.docs),{},{source:_objectSpread({originalSource:"args => <MultikeyValueArea {...args} />"},null===(_LongFormStackedExamp2=LongFormStackedExample.parameters)||void 0===_LongFormStackedExamp2||null===(_LongFormStackedExamp2=_LongFormStackedExamp2.docs)||void 0===_LongFormStackedExamp2?void 0:_LongFormStackedExamp2.source)})}),AreaExample.parameters=_objectSpread(_objectSpread({},AreaExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AreaExample$paramete=AreaExample.parameters)||void 0===_AreaExample$paramete?void 0:_AreaExample$paramete.docs),{},{source:_objectSpread({originalSource:"args => <MultikeyValueArea {...args} />"},null===(_AreaExample$paramete2=AreaExample.parameters)||void 0===_AreaExample$paramete2||null===(_AreaExample$paramete2=_AreaExample$paramete2.docs)||void 0===_AreaExample$paramete2?void 0:_AreaExample$paramete2.source)})})},"./src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>KeyValueContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Graphic_Graphic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Graphic/Graphic.tsx"),_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_utilities/color-name-to-value/colorNameToValue.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,KeyValueContent=function KeyValueContent(props){var getIcon=function getIcon(icon,positionMatch){if(positionMatch)return icon?__jsx(_Graphic_Graphic__WEBPACK_IMPORTED_MODULE_1__.z,{graphicName:icon.icon,colorOverride:(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__.G)(icon.color),iconSize:"1rem",classesOverride:icon.iconPosition}):void 0};return __jsx("div",{className:"".concat(props.layoutType," key-value-content-container")},function getPrimary(){return __jsx("p",{className:"primary-label",style:{color:(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__.G)(props.primaryMessage.color)}},getIcon(props.primaryMessage,"before"==props.primaryMessage.iconPosition),__jsx("label",null,props.primaryMessage.label),getIcon(props.primaryMessage,"after"==props.primaryMessage.iconPosition))}(),function getSecondary(){if(props.secondaryMessage)return __jsx("p",{style:{color:(0,_utilities_color_name_to_value_colorNameToValue__WEBPACK_IMPORTED_MODULE_2__.G)(props.secondaryMessage.color)}},getIcon(props.primaryMessage,"before"==props.primaryMessage.iconPosition),props.secondaryMessage.label,getIcon(props.primaryMessage,"after"==props.primaryMessage.iconPosition))}())};KeyValueContent.displayName="KeyValueContent",KeyValueContent.__docgenInfo={description:"",methods:[],displayName:"KeyValueContent",props:{layoutType:{required:!0,tsType:{name:"union",raw:'"stacked" | "inline"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"inline"'}]},description:""},primaryMessage:{required:!0,tsType:{name:"signature",type:"object",raw:'{\r\n  label : string;\r\n  icon? : iconType;\r\n  color? : colorByNameType;\r\n  iconPosition? : "before" | "after"\r\n}',signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"iconType",required:!1}},{key:"color",value:{name:"colorByNameType",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}],required:!1}}]}},description:""},secondaryMessage:{required:!1,tsType:{name:"signature",type:"object",raw:'{\r\n  label : string;\r\n  icon? : iconType;\r\n  color? : colorByNameType;\r\n  iconPosition? : "before" | "after"\r\n}',signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"iconType",required:!1}},{key:"color",value:{name:"colorByNameType",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}],required:!1}}]}},description:""},colorSchemes:{required:!1,tsType:{name:"colorByNameType"},description:""}}};try{KeyValueContent.displayName="KeyValueContent",KeyValueContent.__docgenInfo={description:"",displayName:"KeyValueContent",props:{layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"inline"'}]}},primaryMessage:{defaultValue:null,description:"",name:"primaryMessage",required:!0,type:{name:"keyValMessageT"}},secondaryMessage:{defaultValue:null,description:"",name:"secondaryMessage",required:!1,type:{name:"keyValMessageT"}},colorSchemes:{defaultValue:null,description:"",name:"colorSchemes",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"dark-roast"'},{value:'"light-roast"'},{value:'"latte"'},{value:'"latte70"'},{value:'"latteMed"'},{value:'"medium-roast"'},{value:'"white"'},{value:'"sepia"'},{value:'"sepia70"'},{value:'"discount"'},{value:'"KSK"'},{value:'"Bold-CTA"'},{value:'"Primary-CTA"'},{value:'"OK-Status"'},{value:'"secondaryGold"'},{value:'"medium-grey"'},{value:'"transparent"'},{value:'"faintWarm"'},{value:'"sepia-light"'},{value:'"light-grey"'},{value:'"forest-green"'},{value:'"milk-chocolate"'},{value:'"perks-spiced-red"'},{value:'"perks-light-beige"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx#KeyValueContent"]={docgenInfo:KeyValueContent.__docgenInfo,name:"KeyValueContent",path:"src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx#KeyValueContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>MultikeyValueArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_KeyValueContent_KeyValueContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ContentComponents/KeyValueContent/KeyValueContent.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,MultikeyValueArea=function MultikeyValueArea(props){return __jsx("div",{className:"multi-key-value-container ".concat(props.layoutMode)},function getItems(){for(var items=[],i=0;i<props.items.length;i++)items.push(__jsx(_KeyValueContent_KeyValueContent__WEBPACK_IMPORTED_MODULE_1__.M,{layoutType:props.items[i].layoutType,primaryMessage:props.items[i].primaryMessage,secondaryMessage:props.items[i].secondaryMessage,colorSchemes:props.items[i].colorSchemes}));return items}())};MultikeyValueArea.displayName="MultikeyValueArea",MultikeyValueArea.__docgenInfo={description:"",methods:[],displayName:"MultikeyValueArea",props:{layoutMode:{required:!0,tsType:{name:"union",raw:'"stacked" | "inline"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"inline"'}]},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"iKeyValueContent"}],raw:"iKeyValueContent[]"},description:""}}};try{MultikeyValueArea.displayName="MultikeyValueArea",MultikeyValueArea.__docgenInfo={description:"",displayName:"MultikeyValueArea",props:{layoutMode:{defaultValue:null,description:"",name:"layoutMode",required:!0,type:{name:"enum",value:[{value:'"stacked"'},{value:'"inline"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"iKeyValueContent[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx#MultikeyValueArea"]={docgenInfo:MultikeyValueArea.__docgenInfo,name:"MultikeyValueArea",path:"src/components/ContentComponents/MultiKeyValues/MultiKeyValueArea.tsx#MultikeyValueArea"})}catch(__react_docgen_typescript_loader_error){}}}]);