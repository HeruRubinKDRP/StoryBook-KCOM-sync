"use strict";
(() => {
var exports = {};
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 9807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentPageContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ContentComponents_ContentPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2870);




function ContentPageContainer() {
    const { 0: sections , 1: setSection  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loadingDone , 1: setLoadingStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log("use effect", router.query.pageName);
        if (!loadingDone) {
            fetch(`/api/content/${router.query.pageName}`, {
                method: "GET"
            }).then((response)=>response.json()).then((content)=>{
                // Print emails
                console.log("content", content);
                setSection(content.pageSections);
                setLoadingStatus(true);
            }).catch((reason)=>{
                console.log(reason);
            });
        }
    }, [
        loadingDone,
        router
    ]);
    if (loadingDone) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContentComponents_ContentPage__WEBPACK_IMPORTED_MODULE_3__/* .ContentPage */ .L, {
            contentSections: sections
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "Loading"
        });
    }
}


/***/ }),

/***/ 995:
/***/ ((module) => {

module.exports = require("gsap/dist/Draggable");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = require("gsap/dist/InertiaPlugin");

/***/ }),

/***/ 8472:
/***/ ((module) => {

module.exports = require("gsap/dist/gsap");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6105:
/***/ ((module) => {

module.exports = require("react-resize-detector");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [721,15,534,870], () => (__webpack_exec__(9807)));
module.exports = __webpack_exports__;

})();