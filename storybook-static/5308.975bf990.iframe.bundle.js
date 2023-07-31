"use strict";(self.webpackChunksb7=self.webpackChunksb7||[]).push([[5308],{"./src/components/Search Box/SearchBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Search_Box_SearchBox});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,react=__webpack_require__("./node_modules/react/index.js"),fuse_esm=__webpack_require__("./node_modules/fuse.js/dist/fuse.esm.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SearchStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  /* Styling for the container element to give it a rounded pill shape */\n  border-radius: 20px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  flex:1;\n .search-results-area{\n   position: absolute;\n   bottom: -50%;\n   background-color: aqua;\n   left: 0;\n   right: 0;\n }\n\n  /* Styling for the text input to add padding and place the icon */\n  .search-input-area{\n    position: relative;\n    width: 100%;\n    .clear-btn{\n      position: absolute;\n      right: 0;\n      top: 0;\n    }\n    .icon.icon-search{\n      position: absolute;\n      height: 100%;\n      width: 1.5rem;\n      top: 0;\n      left: 1rem;\n    }\n  }\n  .search-input{\n    padding: 0 40px 0 3.5rem;\n    font-size: 16px;\n    border: 1px solid grey;\n    border-radius: 100vw;\n    height: 3rem;\n    transition: all 0.2s;\n    width: 100%;\n    /* Animation for the active, hover, and focus states */\n    &:hover, &:focus, &.active {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    }\n    &::placeholder {\n      color: gray;\n    }\n  }\n"])));styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  /* Styling for the icon container to position it within the text input */\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  width: 20px;\n  height: 20px;\n"]))),styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  /* Styling for the search icon */\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 12px;\n"]))),styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  /* Styling for the results container */\n  background-color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px;\n  margin-top: 10px;\n"]))),styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  /* Styling for the results sections */\n  & + & {\n    margin-top: 10px;\n  }\n"]))),styled_components_browser_esm.ZP.button(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  /* Styling for the clear button */\n  border: none;\n  background-color: transparent;\n  font-size: 14px;\n  color: gray;\n  cursor: pointer;\n  &:hover {\n    color: black;\n  }\n"])));try{SearchStyled.displayName="SearchStyled",SearchStyled.__docgenInfo={description:"",displayName:"SearchStyled",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search Box/search-box-styled.tsx#SearchStyled"]={docgenInfo:SearchStyled.__docgenInfo,name:"SearchStyled",path:"src/components/Search Box/search-box-styled.tsx#SearchStyled"})}catch(__react_docgen_typescript_loader_error){}var Graphic=__webpack_require__("./src/components/Graphic/Graphic.tsx"),KButton=__webpack_require__("./src/components/Kbutton/KButton.tsx"),brewer_library=__webpack_require__("./src/data/brewer-library.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,SearchBox=function SearchBox(props){var _useState=(0,react.useState)(""),searchTerm=_useState[0],setSearchTerm=_useState[1],_useState2=(0,react.useState)(!1),showResults=_useState2[0],setShowResults=_useState2[1];(0,react.useEffect)((function(){getResults()}),[searchTerm]);var getResults=function getResults(){var result=new fuse_esm.Z(brewer_library.zv,{keys:["name","productFeatures.featureDetails","productFeatures.featureLabel"],shouldSort:!0,includeScore:!0,findAllMatches:!0,threshold:.2,minMatchCharLength:3,ignoreLocation:!0}).search(searchTerm);console.log(searchTerm),console.log(result)};return __jsx(SearchStyled,null,__jsx("div",{className:"search-input-area"},__jsx("input",{className:"search-input",type:"text",value:searchTerm,onChange:function handleChange(event){setSearchTerm(event.target.value),event.target.value.length>=3?setShowResults(!0):setShowResults(!1)}}),__jsx(Graphic.Z,{graphicName:"icon-search"}),searchTerm.length>0&&__jsx(KButton.Z,{actionFunc:function handleClear(){setSearchTerm(""),setShowResults(!1)},label:"",classes:"clear-btn",buttonType:"text-icon-noBG",iconStandard:"close",iconPlacement:"after-label",buttonWidth:"fit-to-content"})),showResults&&__jsx("div",{className:"search-results-area"},__jsx("div",null,"Search term suggestions"),__jsx("div",null,"Matching products")))};SearchBox.displayName="SearchBox",SearchBox.__docgenInfo={description:"",methods:[],displayName:"SearchBox",props:{placeHolder:{required:!1,tsType:{name:"string"},description:""}}};const Search_Box_SearchBox=SearchBox;try{SearchBox.displayName="SearchBox",SearchBox.__docgenInfo={description:"",displayName:"SearchBox",props:{placeHolder:{defaultValue:null,description:"",name:"placeHolder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search Box/SearchBox.tsx#SearchBox"]={docgenInfo:SearchBox.__docgenInfo,name:"SearchBox",path:"src/components/Search Box/SearchBox.tsx#SearchBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/data/brewer-library.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zv:()=>brewerLibrary});var E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),brewerFeatures=[{featureLabel:"BrewID™",featureIcon:"brew-id",showChevron:!1,featureDetails:"BrewID™ allows you to save your favorite settings to create your perfect cup every time."},{featureLabel:"Connected Convenience",featureIcon:"icon-wifi",showChevron:!1,featureDetails:"Brew a cup from anywhere with the Keurig® app."},{featureLabel:"Barista Mode™",featureIcon:"barista-mode",showChevron:!1,featureDetails:"Guided coffee house style recipes in the Keurig® app."},{featureLabel:"SMART Delivery",featureIcon:"SMART-logo",showChevron:!1,featureDetails:"Get beverages delivered just enough pods just in time."},{featureLabel:"Complete Customization",featureIcon:"icon-settings",showChevron:!1,featureDetails:"Customize your cup with 3 strength and 3 temperature options, or make it iced."},{featureLabel:"MultiStream™ Technology",featureIcon:"multistream",showChevron:!1,featureDetails:"Extracts more flavor and aroma* in every brew."},{featureLabel:"Brew Over Ice",featureIcon:"icon-iced-coffee",showChevron:!1,featureDetails:"Brew over ice with bold, full-flavored iced coffee."},{featureLabel:"66oz Dual-Position Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"Choose the perfect position for optimal counter space. Removable for easy refilling."},{featureLabel:"42oz Removable Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"Allows you to brew up to 7 cups before having to refill, saving you time"},{featureLabel:"78oz Removable Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"Allows you to brew up to 7 cups before having to refill, saving you time"},{featureLabel:"3 Cup Sizes",featureIcon:"icon-cup",showChevron:!1,featureDetails:"8, 10, 12 oz."},{featureLabel:"3 Cup Sizes",featureIcon:"icon-cup",showChevron:!1,featureDetails:"8, 10, 12 oz."},{featureLabel:"4 Brew Sizes",featureIcon:"icon-cup",showChevron:!1,featureDetails:"6, 8, 10, and 12 oz."},{featureLabel:"5 Brew Sizes",featureIcon:"icon-cup",showChevron:!1,featureDetails:"6, 8, 10, and 12 oz."},{featureLabel:"Space Saving Design",featureIcon:"icon-space-saver",showChevron:!1,featureDetails:"Less than 5 inches wide"},{featureLabel:"75oz Removable Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"The large 75oz removable water reservoir lets you brew 8 cups between refills."},{featureLabel:"Fast Brew Time",featureIcon:"icon-stop-watch",showChevron:!1,featureDetails:"Brew time is less than a minute."},{featureLabel:"46oz Removable Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"The large 46oz removable water reservoir lets you brew 5 cups between refills."},{featureLabel:"75oz Removable Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"The large 75oz removable water reservoir lets you brew 8 cups between refills."},{featureLabel:"52oz Removable Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"The large 52oz removable water reservoir lets you brew 5 cups between refills."},{featureLabel:"Removable One Cup Reservoir",featureIcon:"water-drop",showChevron:!1,featureDetails:"The large 52oz removable water reservoir lets you brew 5 cups between refills."},{featureLabel:"Fast & Fresh Brewed",featureIcon:"icon-stop-watch",showChevron:!1,featureDetails:"Delivers fresh brewed, delicious coffee from your favorite K-Cup® pods in minutes."}],searchTerms_commonTerms=["coffee maker","coffee machine","brewer","keurig","machine"],searchTerms_smartRelate=["wifi","wi-fi","wi fi","app","ios","android","phone","smart"],searchTerms_singleServe=["Moka Pot","pour over","makes-pods","single serve"],searchTerms_highEnd=["premium","fancy","nice","elegant"],searchTerms_audiencesCommon=["parents","mom","dad","remote","worker"],searchTerms_audiencesMature=["grand","gradparents","grandmother","grandfather"],brewerLibrary=[{productType:"brewer",image:"./brewer-images/KSPS.png",brand:"Keurig",name:"K-Supreme Plus® SMART Single Serve Coffee Maker",siloImagePath:"https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000365542_swatch?$pdp_general$&fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72&extend=0,0,0,0",productFeatures:[brewerFeatures[0],brewerFeatures[1],brewerFeatures[2],brewerFeatures[3],brewerFeatures[4],brewerFeatures[5],brewerFeatures[6],brewerFeatures[9],brewerFeatures[12]],searchTerms:[].concat((0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_smartRelate),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_smartRelate),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_singleServe),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_highEnd),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_audiencesCommon),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_audiencesMature)),prices:[{price:89.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:89.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["smart-wifi-enabled","single-serve-coffee-maker"]},{filterName:"features",filterValues:["display-screen","strength-control","temperature-control"]},{filterName:"color",filterValues:["black","grey","stainless-steel"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir","multi-position-reservoir"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-cafe.png",brand:"Keurig",name:"K-Café® SMART Single Serve Coffee Maker",prices:[{price:124.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:124.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["smart-wifi-enabled","single-serve-coffee-maker","brew-over-ice-coffee-makers"]},{filterName:"features",filterValues:["display-screen","strength-control","temperature-control","froths-milk","coffee-house-beverages-at-home","energy-saver-auto-off","auto-on"]},{filterName:"color",filterValues:["black","grey","stainless-steel"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir","multi-position-reservoir"]}],productFeatures:[brewerFeatures[0],brewerFeatures[1],brewerFeatures[2],brewerFeatures[3],brewerFeatures[4],brewerFeatures[5],brewerFeatures[6]],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-supreme.png",brand:"Keurig",name:"K-Supreme® SMART Single Serve Coffee Maker",prices:[{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],productFeatures:[brewerFeatures[0],brewerFeatures[1],brewerFeatures[2],brewerFeatures[3],brewerFeatures[4],brewerFeatures[5],brewerFeatures[6]],searchTerms:[].concat((0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_commonTerms),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_smartRelate),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_highEnd),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_singleServe),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_audiencesCommon),(0,E_Code_StoryBook_KCOM_sync_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(searchTerms_audiencesMature)),ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","smart-wifi-enabled","brew-over-ice-coffee-makers"]},{filterName:"features",filterValues:["strength-control","temperature-control"]},{filterName:"color",filterValues:["black","grey","stainless-steel"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-slim1.png",brand:"Keurig",name:"K-Slim® Single Serve Coffee Maker",prices:[{price:74.99,inStock:!0,variant:{quantity:12,variantName:"Black"}},{price:74.99,inStock:!0,variant:{quantity:12,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker"]},{filterName:"features",filterValues:["strength-control","temperature-control"]},{filterName:"color",filterValues:["black","grey","stainless-steel"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]}],productFeatures:[brewerFeatures[3],brewerFeatures[5],brewerFeatures[14]],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-elite.png",brand:"Keurig",name:"Keurig® K-Elite® Single Serve Coffee Maker",prices:[{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","brew-over-ice-coffee-makers"]},{filterName:"features",filterValues:["strength-control","iced-setting","temperature-control","fits-travel-mug","75oz-reservoir","auto-on","energy-saver-auto-off","display-screen","digital-clock","high-altitude-setting"]},{filterName:"color",filterValues:["black","grey","stainless-steel"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]}],productFeatures:[brewerFeatures[13],brewerFeatures[15],brewerFeatures[16],brewerFeatures[6]],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-mini.png",brand:"Keurig",name:"K-Mini® Single Serve Coffee Maker",prices:[{price:89.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:0,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,productFeatures:[brewerFeatures[5],brewerFeatures[14],brewerFeatures[10],brewerFeatures[17],brewerFeatures[16]],rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","brew-over-ice-coffee-makers"]},{filterName:"features",filterValues:["add-water-each-time","auto-on","energy-saver-auto-off"]},{filterName:"color",filterValues:["black","studio-grey","oasis","chili-green"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["add-water-each-time"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-select.png",brand:"Keurig",name:"Keurig® K-Select® Coffee Maker",prices:[{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],productFeatures:[brewerFeatures[12],brewerFeatures[19],brewerFeatures[16]],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","energy-saver-auto-off","high-altitude-setting"]},{filterName:"color",filterValues:["black","vintage-red","matte-white","matte-navy","oasis","sandstone"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-mini-plus.png",brand:"Keurig",name:"K-Mini Plus® Single Serve Coffee Maker",prices:[{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:0,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],productFeatures:[brewerFeatures[14],brewerFeatures[20],brewerFeatures[21]],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","brew-over-ice-coffee-makers"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","add-water-each-time","auto-on","energy-saver-auto-off"]},{filterName:"color",filterValues:["black","cardinal-red","evening-teal","studio-grey"]},{filterName:"Brew Type",filterValues:["k-cup"]},{filterName:"reservoir",filterValues:["add-water-each-time"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-duo.png",brand:"Keurig",name:"K-Duo™ Single Serve & Carafe Coffee Maker",prices:[{price:94.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:94.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","dual-coffee-makers"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","60oz-removable-reservoir","energy-saver-auto-off","glass-carafe-&-heating-plate","display-screen","digital-clock","high-altitude-setting"]},{filterName:"color",filterValues:["black"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]},{filterName:"Brew Type",filterValues:["bagged-coffee","k-cup"]}],rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-duo-special.png",brand:"Keurig",name:"K-Duo® Special Edition Single Serve & Carafe Coffee Maker",prices:[{price:49.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:49.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","dual-coffee-makers"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","60oz-removable-reservoir","energy-saver-auto-off","glass-carafe-&-heating-plate","display-screen","digital-clock","high-altitude-setting"]},{filterName:"color",filterValues:["black"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]},{filterName:"Brew Type",filterValues:["bagged-coffee","k-cup"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-classic.png",brand:"Keurig",name:"Keurig® K-Classic® Coffee Maker",prices:[{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:74.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","60oz-removable-reservoir","energy-saver-auto-off","glass-carafe-&-heating-plate","display-screen","digital-clock","high-altitude-setting"]},{filterName:"color",filterValues:["black"]},{filterName:"reservoir",filterValues:["48oz-removable-reservoir"]},{filterName:"Brew Type",filterValues:["k-cup"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-duo-plus.png",brand:"Keurig",name:"K-Duo Plus™ Single Serve & Carafe Coffee Maker",prices:[{price:149.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:149.99,inStock:!0,variant:{quantity:1,variantName:"Black"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","dual-coffee-makers"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","multi-position-reservoir","energy-saver-auto-off","glass-carafe-&-heating-plate","display-screen","digital-clock","high-altitude-setting"]},{filterName:"color",filterValues:["black"]},{filterName:"reservoir",filterValues:["60oz-removable-reservoir"]},{filterName:"Brew Type",filterValues:["bagged-coffee","k-cup"]}],onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-slim-iced.png",brand:"Keurig",name:"K-Slim + ICED™ Single Serve Coffee Maker",prices:[{price:49.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:49.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],filterData:[{filterName:"category",filterValues:["single-serve-coffee-maker","brew-over-ice-coffee-makers"]},{filterName:"features",filterValues:["strength-control","fits-travel-mug","strength-control","iced-setting","iced-tumbler-friendly","energy-saver-auto-off","high-altitude-setting"]},{filterName:"color",filterValues:["arctic-grey","white"]},{filterName:"reservoir",filterValues:["42oz-removable-reservoir"]},{filterName:"Brew Type",filterValues:["bagged-coffee","k-cup"]}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},onClick:function onClick(){return console.log("Add to Cart clicked")}},{productType:"brewer",image:"./brewer-images/k-express.png",brand:"Keurig",name:"K-Express™ Single Serve Coffee Maker",prices:[{price:49.99,inStock:!0,variant:{quantity:1,variantName:"Black"}},{price:49.99,inStock:!0,variant:{quantity:1,variantName:"Grey"}}],ratingVisible:!1,rating:{totalNumberOfStars:5,totalNumberOfReviews:1023,ratingNumber:4.25},onClick:function onClick(){return console.log("Add to Cart clicked")}}]}}]);