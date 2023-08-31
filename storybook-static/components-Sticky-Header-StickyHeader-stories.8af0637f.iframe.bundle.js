/*! For license information please see components-Sticky-Header-StickyHeader-stories.8af0637f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksb7=self.webpackChunksb7||[]).push([[2261,999],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return exports},module.exports.__esModule=!0,module.exports.default=module.exports;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return{value:void 0,done:!0}}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable||""===iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}throw new TypeError(_typeof(iterable)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(obj){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(obj)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./src/components/Sticky Header/StickyHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StickyHeaderExample:()=>StickyHeaderExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _StickyHeaderExample$,_StickyHeaderExample$2,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_StickyHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Sticky Header/StickyHeader.tsx"),_NavMenu_NavigationV2_navigation_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/NavMenu/NavigationV2/navigation.stories.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_olabbe_Documents_GitHub_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation Global / Sticky Header",component:_StickyHeader__WEBPACK_IMPORTED_MODULE_2__.M,argTypes:{}};var StickyHeaderExample=function Template(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_StickyHeader__WEBPACK_IMPORTED_MODULE_2__.M,args),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}),__jsx("div",{style:{height:250,marginBottom:24,backgroundColor:"lightgray"}}))}.bind({});StickyHeaderExample.args={navigationRelated:{sizingMode:"liquid-design",loggedIn:!1,emailErrorMessage:"Please enter a valid email address",emailSuccessMessage:"Thank you for subscribing!",emailExplanationText:"Sign up for our newsletter to receive updates on new products and promotions.",placeHolderText:"Enter your email address",defaultActiveHoverIndex:-1,submitButtonText:"Subscribe",isNobo:!1,navItems:_NavMenu_NavigationV2_navigation_stories__WEBPACK_IMPORTED_MODULE_3__.navDemo}},StickyHeaderExample.parameters=_objectSpread(_objectSpread({},StickyHeaderExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StickyHeaderExample$=StickyHeaderExample.parameters)||void 0===_StickyHeaderExample$?void 0:_StickyHeaderExample$.docs),{},{source:_objectSpread({originalSource:'args => <>\n        <StickyHeader {...args} />\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n        <div style={{\n    height: 250,\n    marginBottom: 24,\n    backgroundColor: "lightgray"\n  }}></div>\n    </>'},null===(_StickyHeaderExample$2=StickyHeaderExample.parameters)||void 0===_StickyHeaderExample$2||null===(_StickyHeaderExample$2=_StickyHeaderExample$2.docs)||void 0===_StickyHeaderExample$2?void 0:_StickyHeaderExample$2.source)})})},"./src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>getContainerQuery});var console=__webpack_require__("./node_modules/console-browserify/index.js"),getContainerQuery=function getContainerQuery(widthX){if(!widthX)return console.log("widthX not",widthX),"default";var sss_largeDesktop=1920,sss_desktop=1280,sss_tablet=768;return widthX>=sss_largeDesktop?"extra-large-dimensions":widthX<sss_largeDesktop&&widthX>=sss_desktop?"large-dimensions":widthX<sss_desktop&&widthX>=sss_tablet?"medium-dimensions":widthX<sss_tablet?"mobile-dimensions":"default"};try{getContainerQuery.displayName="getContainerQuery",getContainerQuery.__docgenInfo={description:"",displayName:"getContainerQuery",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx#getContainerQuery"]={docgenInfo:getContainerQuery.__docgenInfo,name:"getContainerQuery",path:"src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx#getContainerQuery"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Sticky Header/StickyHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>StickyHeader});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StickyStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  z-index: 2000;\n  \n \n  .main-navigation{\n    &.full{\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: 2000;\n    }\n   \n  }\n  \n  \n    \n \n  \n"])));try{StickyStyled.displayName="StickyStyled",StickyStyled.__docgenInfo={description:"",displayName:"StickyStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sticky Header/StickyHeader.styled.tsx#StickyStyled"]={docgenInfo:StickyStyled.__docgenInfo,name:"StickyStyled",path:"src/components/Sticky Header/StickyHeader.styled.tsx#StickyStyled"})}catch(__react_docgen_typescript_loader_error){}var stickyItem_styled_templateObject,index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),Navigation=__webpack_require__("./src/components/NavMenu/NavigationV2/Navigation.tsx"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),__jsx=react.createElement,StickyItem=function StickyItem(_ref){var children=_ref.children,portalRoot=document.body;return(0,react_dom.createPortal)(__jsx(react.Fragment,null,children),portalRoot)};try{StickyItem.displayName="StickyItem",StickyItem.__docgenInfo={description:"",displayName:"StickyItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sticky Header/StickyItem.tsx#StickyItem"]={docgenInfo:StickyItem.__docgenInfo,name:"StickyItem",path:"src/components/Sticky Header/StickyItem.tsx#StickyItem"})}catch(__react_docgen_typescript_loader_error){}var StickyItemStyled=styled_components_browser_esm.ZP.div(stickyItem_styled_templateObject||(stickyItem_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  &.is-sticky{\n    background-color: white;\n    position: fixed;\n    right: 0;\n    left: 0;\n    top: 0;\n    animation: moveFromTop 0.5s ease-in-out forwards;\n    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);\n    z-index: 10000;\n  }  \n  \n  &.not-sticky{\n    display: none;\n  }\n  .secondary-btn{\n    padding: 0 !important;\n  }\n  \n  \n  @keyframes moveFromTop {\n    0% { transform: translateY(-100%); }\n    100% { transform: translateY(0); }\n  }\n  .sticky-menu-placement{\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .purchase-options-container,.price-area {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .purchase-options-container { \n    margin: 1rem;\n    .price-area{\n      margin-right: 0.5rem;\n    }\n    \n  }\n  \n  .left-area{\n    display: flex;\n    align-items: center;\n    .logo{\n      max-height: 8vh;\n      width: 10vw;\n      margin-left: 1vw;\n    }\n  }\n  \n  .search-area{\n    flex: 1;\n    padding: 0 5%;\n    display: flex;\n    align-items: center;\n  }\n  \n  \n  //Breakpoints\n  \n  &.mobile-dimensions{\n    .left-area{\n     .logo{\n       display: none;\n     } \n    }\n    .search-input{\n      display: none;\n    }\n\n    .purchase-options-container{\n      .price-area{\n        flex-direction: column;\n       \n        p{\n          line-height: 0.5rem;\n        }\n      }\n    }\n  }\n  \n  \n"])));try{StickyItemStyled.displayName="StickyItemStyled",StickyItemStyled.__docgenInfo={description:"",displayName:"StickyItemStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sticky Header/stickyItem.styled.tsx#StickyItemStyled"]={docgenInfo:StickyItemStyled.__docgenInfo,name:"StickyItemStyled",path:"src/components/Sticky Header/stickyItem.styled.tsx#StickyItemStyled"})}catch(__react_docgen_typescript_loader_error){}var SearchBox=__webpack_require__("./src/components/Search Box/SearchBox.tsx"),Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),container_queries=__webpack_require__("./src/components/Experimental/Add-to-cart/reusable css/container-queries.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),StickyHeader_jsx=react.createElement,StickyHeader=(0,react.forwardRef)((function(props,forwardedRef){var navRef=(0,react.createRef)(),_useState=(0,react.useState)(!1),isSticky=_useState[0],setSticky=_useState[1],_useState2=(0,react.useState)(0),navHeight=_useState2[0],setNavHeight=_useState2[1],_useState3=(0,react.useState)(!1),isMenuOpen=_useState3[0],setIsMenuOpen=_useState3[1];(0,react.useEffect)((function(){navRef.current&&setNavHeight(navRef.current.offsetHeight)}),[]);var _useResizeDetector=(0,index_esm.NB)({handleHeight:!1,refreshMode:"throttle",refreshOptions:{},refreshRate:100,skipOnMount:!1,onResize:function onResize(){navRef.current&&setNavHeight(navRef.current.offsetHeight)}}),width=_useResizeDetector.width,ref=(_useResizeDetector.height,_useResizeDetector.ref);(0,react.useEffect)((function(){ref.current&&(setNavHeight(ref.current.offsetHeight),document.body.style.paddingTop="".concat(ref.current.offsetHeight,"px !important"),console.log("navref useEffect ",ref," | ",ref.current.offsetHeight))}),[ref]);var handleScrollEvent=(0,react.useCallback)((function(){return function handleScroll(scrollPastThis){if(scrollPastThis)return window.scrollY>scrollPastThis&&!isSticky?(console.log("scroll after this ",scrollPastThis),void setSticky(!0)):(console.log("scroll before this ",scrollPastThis),void setSticky(!1))}(navHeight)}),[navHeight]);(0,react.useEffect)((function(){return window.addEventListener("scroll",handleScrollEvent),function(){window.removeEventListener("scroll",handleScrollEvent)}}),[handleScrollEvent]);return StickyHeader_jsx(StickyStyled,{ref,className:"sticky-header-container"},StickyHeader_jsx("div",{className:"zzzyyy",ref:navRef},StickyHeader_jsx(Navigation.W,{classes:props.stickyHeaderMode,sizingMode:props.navigationRelated.sizingMode,loggedIn:props.navigationRelated.loggedIn,emailErrorMessage:props.navigationRelated.emailErrorMessage,emailSuccessMessage:props.navigationRelated.emailSuccessMessage,emailExplanationText:props.navigationRelated.emailExplanationText,placeHolderText:props.navigationRelated.placeHolderText,defaultActiveHoverIndex:-1,submitButtonText:props.navigationRelated.submitButtonText,isNobo:props.navigationRelated.isNobo,navItems:props.navigationRelated.navItems,justMenuItems:!1}),"slim"===props.stickyHeaderMode&&StickyHeader_jsx(StickyItem,null,StickyHeader_jsx(StickyItemStyled,{className:"".concat(function getStickyMenuStyle(){return isSticky?"is-sticky":"not-sticky"}()," ").concat((0,container_queries.u)(width))},StickyHeader_jsx("div",{className:"sticky-menu-placement"},StickyHeader_jsx("div",{className:"left-area"},StickyHeader_jsx(Graphic.Z,{graphicName:"logo"}),StickyHeader_jsx(KButton.Z,{label:"Menu",iconStandard:isMenuOpen?"close":"icon-menu",iconPlacement:"before-label",buttonType:"primary-light",buttonWidth:"fit-to-content",actionFunc:function actionFunc(){return setIsMenuOpen(!isMenuOpen)}})),StickyHeader_jsx("div",{className:"search-area"},StickyHeader_jsx(SearchBox.Z,null)),props.children?StickyHeader_jsx("div",{className:"child-content"},props.children):null),isMenuOpen?StickyHeader_jsx(Navigation.W,{sizingMode:props.navigationRelated.sizingMode,loggedIn:props.navigationRelated.loggedIn,emailErrorMessage:props.navigationRelated.emailErrorMessage,emailSuccessMessage:props.navigationRelated.emailSuccessMessage,emailExplanationText:props.navigationRelated.emailExplanationText,placeHolderText:props.navigationRelated.placeHolderText,defaultActiveHoverIndex:-1,submitButtonText:props.navigationRelated.submitButtonText,isNobo:props.navigationRelated.isNobo,navItems:props.navigationRelated.navItems,justMenuItems:!0}):null))))}));StickyHeader.__docgenInfo={description:"",methods:[],displayName:"StickyHeader"};try{StickyHeader.displayName="StickyHeader",StickyHeader.__docgenInfo={description:"",displayName:"StickyHeader",props:{navigationRelated:{defaultValue:null,description:"",name:"navigationRelated",required:!0,type:{name:"iNavigation"}},stickyHeaderMode:{defaultValue:null,description:"",name:"stickyHeaderMode",required:!0,type:{name:"enum",value:[{value:'"slim"'},{value:'"full"'}]}},headerRef:{defaultValue:null,description:"",name:"headerRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sticky Header/StickyHeader.tsx#StickyHeader"]={docgenInfo:StickyHeader.__docgenInfo,name:"StickyHeader",path:"src/components/Sticky Header/StickyHeader.tsx#StickyHeader"})}catch(__react_docgen_typescript_loader_error){}}}]);