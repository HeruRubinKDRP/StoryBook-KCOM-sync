"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/screenshot";
exports.ids = ["pages/api/screenshot"];
exports.modules = {

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),

/***/ "(api)/./src/pages/api/screenshot/index.ts":
/*!*******************************************!*\
  !*** ./src/pages/api/screenshot/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\n// Take a screenshot of a website\n\nconst screenshot = async ()=>{\n    console.log(\"screenshot\", puppeteer__WEBPACK_IMPORTED_MODULE_0___default().executablePath());\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0___default().launch({\n        headless: \"new\"\n    });\n    const page = await browser.newPage();\n    await page.goto(\"https://www.keurig.com/\");\n    await page.screenshot({\n        path: \"example.png\"\n    });\n    await browser.close();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screenshot);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NjcmVlbnNob3QvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQWlDO0FBQ0M7QUFDbEMsTUFBTUMsVUFBVSxHQUFHLFVBQVk7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRUgsK0RBQXdCLEVBQUUsQ0FBQztJQUNyRCxNQUFNSyxPQUFPLEdBQUcsTUFBTUwsdURBQWdCLENBQUM7UUFDbkNPLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7SUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxPQUFPLEVBQUU7SUFDcEMsTUFBTUQsSUFBSSxDQUFDRSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxNQUFNRixJQUFJLENBQUNQLFVBQVUsQ0FBQztRQUFFVSxJQUFJLEVBQUUsYUFBYTtLQUFFLENBQUMsQ0FBQztJQUMvQyxNQUFNTixPQUFPLENBQUNPLEtBQUssRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFFRCxpRUFBZVgsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2NvbS1kZXNpZ24tc3lzdGVtLy4vc3JjL3BhZ2VzL2FwaS9zY3JlZW5zaG90L2luZGV4LnRzPzU4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFrZSBhIHNjcmVlbnNob3Qgb2YgYSB3ZWJzaXRlXHJcbmltcG9ydCBwdXBwZXRlZXIgZnJvbSAncHVwcGV0ZWVyJztcclxuY29uc3Qgc2NyZWVuc2hvdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2NyZWVuc2hvdFwiLCBwdXBwZXRlZXIuZXhlY3V0YWJsZVBhdGgoKSlcclxuICAgIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBwdXBwZXRlZXIubGF1bmNoKHtcclxuICAgICAgICBoZWFkbGVzczogXCJuZXdcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XHJcbiAgICBhd2FpdCBwYWdlLmdvdG8oJ2h0dHBzOi8vd3d3LmtldXJpZy5jb20vJyk7XHJcbiAgICBhd2FpdCBwYWdlLnNjcmVlbnNob3QoeyBwYXRoOiAnZXhhbXBsZS5wbmcnIH0pO1xyXG4gICAgYXdhaXQgYnJvd3Nlci5jbG9zZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuc2hvdDtcclxuXHJcbiJdLCJuYW1lcyI6WyJwdXBwZXRlZXIiLCJzY3JlZW5zaG90IiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGFibGVQYXRoIiwiYnJvd3NlciIsImxhdW5jaCIsImhlYWRsZXNzIiwicGFnZSIsIm5ld1BhZ2UiLCJnb3RvIiwicGF0aCIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/screenshot/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/screenshot/index.ts"));
module.exports = __webpack_exports__;

})();