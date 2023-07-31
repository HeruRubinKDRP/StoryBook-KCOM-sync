"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[6400],{"./src/components/Toggle/toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,TogglePillShaped:()=>TogglePillShaped,ToggleWithImages:()=>ToggleWithImages,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_ToggleWithImages$par,_ToggleWithImages$par2,_ToggleWithImages$par3,_TogglePillShaped$par,_TogglePillShaped$par2,_TogglePillShaped$par3,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Toggle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Toggle/Toggle.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/K-Toggle",component:_Toggle__WEBPACK_IMPORTED_MODULE_2__.Fl,argTypes:{toggleType:{control:"select",options:_Toggle__WEBPACK_IMPORTED_MODULE_2__.TW},toggleOptions:{control:"object"}}};var Template=function Template(args){return __jsx(_Toggle__WEBPACK_IMPORTED_MODULE_2__.Fl,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={selectedCaratPosition:"top",toggleOptions:[{label:"one",action:function action(){}},{label:"two",action:function action(){}},{label:"three",action:function action(){}}]};var ToggleWithImages=Template.bind({});ToggleWithImages.args={selectedCaratPosition:"top",toggleOptions:[{label:"K-Supreme® SMART",imagePath:"/product-selection/kss-thumb.webp"},{label:"K-Supreme® Plus SMART",imagePath:"/product-selection/ksps-thumb.webp"}]};var TogglePillShaped=Template.bind({});TogglePillShaped.args={selectedCaratPosition:"bottom",toggleStyle:"one-pill",toggleOptions:[{label:"K-Supreme® SMART"},{label:"K-Supreme® Plus SMART"}]},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <KToggle {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),ToggleWithImages.parameters=_objectSpread(_objectSpread({},ToggleWithImages.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ToggleWithImages$par=ToggleWithImages.parameters)||void 0===_ToggleWithImages$par?void 0:_ToggleWithImages$par.docs),{},{source:_objectSpread({originalSource:"args => <KToggle {...args} />"},null===(_ToggleWithImages$par2=ToggleWithImages.parameters)||void 0===_ToggleWithImages$par2||null===(_ToggleWithImages$par3=_ToggleWithImages$par2.docs)||void 0===_ToggleWithImages$par3?void 0:_ToggleWithImages$par3.source)})}),TogglePillShaped.parameters=_objectSpread(_objectSpread({},TogglePillShaped.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TogglePillShaped$par=TogglePillShaped.parameters)||void 0===_TogglePillShaped$par?void 0:_TogglePillShaped$par.docs),{},{source:_objectSpread({originalSource:"args => <KToggle {...args} />"},null===(_TogglePillShaped$par2=TogglePillShaped.parameters)||void 0===_TogglePillShaped$par2||null===(_TogglePillShaped$par3=_TogglePillShaped$par2.docs)||void 0===_TogglePillShaped$par3?void 0:_TogglePillShaped$par3.source)})})},"./src/components/Toggle/Toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fl:()=>KToggle,TW:()=>toggleStyleList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_resize_detector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Kbutton/KButton.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,toggleStyleList=["touch-edges","spaced-out","one-pill"],KToggle=function KToggle(props){var _useResizeDetector=(0,react_resize_detector__WEBPACK_IMPORTED_MODULE_2__.NB)(),ref=(_useResizeDetector.width,_useResizeDetector.height,_useResizeDetector.ref),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selectedIndex=_useState[0],updateSelectedIndex=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){props.overrideSelectedIndex&&updateSelectedIndex(props.overrideSelectedIndex)}),[]);var getSelected=function getSelected(index){return props.selectedIndexOverride&&props.selectedIndexOverride>-1&&index==props.selectedIndexOverride||index==selectedIndex?"toggle-selected":""},getCarat=function getCarat(index){return index==selectedIndex?props.selectedCaratPosition:"none"};return __jsx("div",{ref,className:"k-toggle-container ".concat(props.toggleType," ").concat(props.classes)},function createToggle(){for(var toggleItems=[],_loop=function _loop(i){toggleItems.push(__jsx("div",{key:i,className:"toggle-item-container ".concat(props.toggleStyle)},function getImage(index){return props.toggleOptions[index].imagePath?__jsx("div",{className:"image-container"},__jsx("img",{alt:"",src:props.toggleOptions[index].imagePath})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}(i),__jsx(_Kbutton_KButton__WEBPACK_IMPORTED_MODULE_1__.Z,{classes:"toggle-item ".concat(getSelected(i)," "),label:props.toggleOptions[i].label,iconPlacement:"no-icon",buttonType:"secondary",actionFunc:function actionFunc(){return function performAction(index){console.log(selectedIndex),updateSelectedIndex(index);var action=props.toggleOptions[index];null!=action.action&&action.action()}(i)},carat:getCarat(i),transitionType:"expand-bg"})))},i=0;i<props.toggleOptions.length;i++)_loop(i);return toggleItems}())};KToggle.displayName="KToggle",KToggle.__docgenInfo={description:"",methods:[],displayName:"KToggle",props:{toggleOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  label : string;\r\n  action? : Function;\r\n  imagePath? : string;\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"Function",required:!1}},{key:"imagePath",value:{name:"string",required:!1}}]}}],raw:"toggleItem[]"},description:""},toggleType:{required:!0,tsType:{name:"union",raw:'"stacked" | "side-by-side"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"side-by-side"'}]},description:""},toggleStyle:{required:!0,tsType:{name:"union",raw:'"touch-edges" | "spaced-out" | "one-pill"',elements:[{name:"literal",value:'"touch-edges"'},{name:"literal",value:'"spaced-out"'},{name:"literal",value:'"one-pill"'}]},description:""},selectedIndexOverride:{required:!1,tsType:{name:"number"},description:""},classes:{required:!1,tsType:{name:"string"},description:""},selectedCaratPosition:{required:!0,tsType:{name:"caratPositionT"},description:""},overrideSelectedIndex:{required:!1,tsType:{name:"number"},description:""}}};try{KToggle.displayName="KToggle",KToggle.__docgenInfo={description:"",displayName:"KToggle",props:{toggleOptions:{defaultValue:null,description:"",name:"toggleOptions",required:!0,type:{name:"toggleItem[]"}},toggleType:{defaultValue:null,description:"",name:"toggleType",required:!0,type:{name:"enum",value:[{value:'"side-by-side"'},{value:'"stacked"'}]}},toggleStyle:{defaultValue:null,description:"",name:"toggleStyle",required:!0,type:{name:"enum",value:[{value:'"touch-edges"'},{value:'"spaced-out"'},{value:'"one-pill"'}]}},selectedIndexOverride:{defaultValue:null,description:"",name:"selectedIndexOverride",required:!1,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},selectedCaratPosition:{defaultValue:null,description:"",name:"selectedCaratPosition",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},overrideSelectedIndex:{defaultValue:null,description:"",name:"overrideSelectedIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#KToggle"]={docgenInfo:KToggle.__docgenInfo,name:"KToggle",path:"src/components/Toggle/Toggle.tsx#KToggle"})}catch(__react_docgen_typescript_loader_error){}}}]);