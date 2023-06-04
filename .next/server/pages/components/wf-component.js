"use strict";
(() => {
var exports = {};
exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 9062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WFdemo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap/dist/Draggable"
var Draggable_ = __webpack_require__(995);
var Draggable_default = /*#__PURE__*/__webpack_require__.n(Draggable_);
// EXTERNAL MODULE: external "gsap/dist/InertiaPlugin"
var InertiaPlugin_ = __webpack_require__(4753);
var InertiaPlugin_default = /*#__PURE__*/__webpack_require__.n(InertiaPlugin_);
// EXTERNAL MODULE: external "gsap/dist/gsap"
var gsap_ = __webpack_require__(8472);
var gsap_default = /*#__PURE__*/__webpack_require__.n(gsap_);
// EXTERNAL MODULE: external "react-resize-detector"
var external_react_resize_detector_ = __webpack_require__(6105);
// EXTERNAL MODULE: ./src/components/ContentComponents/ContentComponent.tsx
var ContentComponent = __webpack_require__(7721);
;// CONCATENATED MODULE: ./src/components/WF_layout_component/wfLayout.tsx







const WFlayout = (props)=>{
    const { width , height , ref  } = (0,external_react_resize_detector_.useResizeDetector)();
    const extraItemsDragArea = (0,external_react_.useRef)(null);
    const dragContainer = (0,external_react_.useRef)(null);
    const { 0: dragContainerMode , 1: setDragContainerMode  } = (0,external_react_.useState)("scrollable");
    (0,external_react_.useEffect)(()=>{
        gsap_default().registerPlugin((Draggable_default()), (InertiaPlugin_default()));
        if (!dragContainer.current || !width) {
            return;
        }
        Draggable_default().create(extraItemsDragArea.current, {
            type: "x",
            inertia: true,
            allowContextMenu: true,
            allowNativeTouchScrolling: true,
            bounds: {
                minX: -dragContainer.current.getBoundingClientRect().width,
                maxX: 2
            }
        });
    }, [
        width
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!extraItemsDragArea.current || !width) {
            return;
        }
        const dragAreaWidth = extraItemsDragArea.current.getBoundingClientRect().width;
        if (dragAreaWidth + 20 > width) {
            setDragContainerMode("scrollable");
            console.log(dragContainerMode);
        } else {
            setDragContainerMode("centered");
            console.log(dragContainerMode);
            return;
        }
    }, [
        width,
        dragContainerMode
    ]);
    const getRemainingItems = (startingIndex)=>{
        let list = [];
        for(let i = startingIndex; i < props.contentItems.length; i++){
            list.push(/*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "extra-item",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                    component: "content",
                    hasFocalImage: false,
                    sectionName: props.contentItems[0].sectionName,
                    mainMessage: props.contentItems[i].mainMessage,
                    mainMessageColor: props.contentItems[i].mainMessageColor,
                    mainMessageSize: props.contentItems[i].mainMessageSize,
                    messageAlignment: props.contentItems[i].messageAlignment,
                    secondaryMessage: props.contentItems[i].secondaryMessage,
                    secondaryMessageSize: props.contentItems[i].mainMessageSize,
                    sectionType: props.contentItems[i].sectionType,
                    backGroundType: props.contentItems[i].backGroundType,
                    backgroundUrlPath: props.contentItems[i].backgroundUrlPath,
                    backgroundColor: props.contentItems[i].backgroundColor,
                    mainTextHasShadow: props.contentItems[i].mainTextHasShadow,
                    heightMethod: props.contentItems[i].heightMethod,
                    contrastBackground: props.contentItems[i].contrastBackground,
                    hasCTA: props.contentItems[i].hasCTA,
                    ctaMode: props.contentItems[i].ctaMode,
                    ctaLabel: props.contentItems[i].ctaLabel,
                    ctaLinkTo: props.contentItems[i].ctaLinkTo
                })
            }, i));
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "draggable-container",
            ref: extraItemsDragArea,
            children: list
        });
    };
    const getLayouts = (layoutType)=>{
        switch(layoutType){
            case "large-container":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `wf-container large ${props.elementsMode}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "main-section",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "main-hero",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                                        component: "content",
                                        hasFocalImage: false,
                                        sectionName: props.contentItems[0].sectionName,
                                        mainMessage: props.contentItems[0].mainMessage,
                                        mainMessageColor: props.contentItems[0].mainMessageColor,
                                        mainMessageSize: props.contentItems[0].mainMessageSize,
                                        messageAlignment: props.contentItems[0].messageAlignment,
                                        secondaryMessage: props.contentItems[0].secondaryMessage,
                                        secondaryMessageSize: props.contentItems[0].mainMessageSize,
                                        sectionType: props.contentItems[0].sectionType,
                                        backGroundType: props.contentItems[0].backGroundType,
                                        backgroundUrlPath: props.contentItems[0].backgroundUrlPath,
                                        backgroundColor: props.contentItems[0].backgroundColor,
                                        mainTextHasShadow: props.contentItems[0].mainTextHasShadow,
                                        heightMethod: props.contentItems[0].heightMethod,
                                        contrastBackground: props.contentItems[0].contrastBackground,
                                        hasCTA: props.contentItems[0].hasCTA,
                                        ctaMode: props.contentItems[0].ctaMode,
                                        ctaLabel: props.contentItems[0].ctaLabel,
                                        ctaLinkTo: props.contentItems[0].ctaLinkTo
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "secondary-items",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                                            component: "content",
                                            hasFocalImage: false,
                                            sectionName: props.contentItems[0].sectionName,
                                            mainMessage: props.contentItems[1].mainMessage,
                                            mainMessageColor: props.contentItems[1].mainMessageColor,
                                            mainMessageSize: props.contentItems[1].mainMessageSize,
                                            messageAlignment: props.contentItems[1].messageAlignment,
                                            secondaryMessage: props.contentItems[1].secondaryMessage,
                                            secondaryMessageSize: props.contentItems[1].mainMessageSize,
                                            sectionType: props.contentItems[1].sectionType,
                                            backGroundType: props.contentItems[1].backGroundType,
                                            backgroundUrlPath: props.contentItems[1].backgroundUrlPath,
                                            backgroundColor: props.contentItems[1].backgroundColor,
                                            mainTextHasShadow: props.contentItems[1].mainTextHasShadow,
                                            heightMethod: props.contentItems[1].heightMethod,
                                            contrastBackground: props.contentItems[1].contrastBackground,
                                            hasCTA: props.contentItems[1].hasCTA,
                                            ctaMode: props.contentItems[1].ctaMode,
                                            ctaLabel: props.contentItems[1].ctaLabel,
                                            ctaLinkTo: props.contentItems[1].ctaLinkTo
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                                            component: "content",
                                            hasFocalImage: false,
                                            sectionName: props.contentItems[0].sectionName,
                                            mainMessage: props.contentItems[2].mainMessage,
                                            mainMessageColor: props.contentItems[2].mainMessageColor,
                                            mainMessageSize: props.contentItems[2].mainMessageSize,
                                            messageAlignment: props.contentItems[2].messageAlignment,
                                            secondaryMessage: props.contentItems[2].secondaryMessage,
                                            secondaryMessageSize: props.contentItems[2].mainMessageSize,
                                            sectionType: props.contentItems[2].sectionType,
                                            backGroundType: props.contentItems[2].backGroundType,
                                            backgroundUrlPath: props.contentItems[2].backgroundUrlPath,
                                            backgroundColor: props.contentItems[2].backgroundColor,
                                            mainTextHasShadow: props.contentItems[2].mainTextHasShadow,
                                            heightMethod: props.contentItems[2].heightMethod,
                                            contrastBackground: props.contentItems[2].contrastBackground,
                                            hasCTA: props.contentItems[2].hasCTA,
                                            ctaMode: props.contentItems[2].ctaMode,
                                            ctaLabel: props.contentItems[2].ctaLabel,
                                            ctaLinkTo: props.contentItems[2].ctaLinkTo
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: `lower-items ${dragContainerMode}`,
                            ref: dragContainer,
                            children: getRemainingItems(3)
                        })
                    ]
                });
            case "medium-container":
            case "small-container":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `wf-container small ${props.elementsMode}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "main-section",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "main-hero",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                                    component: "content",
                                    hasFocalImage: false,
                                    sectionName: props.contentItems[0].sectionName,
                                    mainMessage: props.contentItems[0].mainMessage,
                                    mainMessageColor: props.contentItems[0].mainMessageColor,
                                    mainMessageSize: props.contentItems[0].mainMessageSize,
                                    messageAlignment: props.contentItems[0].messageAlignment,
                                    secondaryMessage: props.contentItems[0].secondaryMessage,
                                    secondaryMessageSize: props.contentItems[0].mainMessageSize,
                                    sectionType: props.contentItems[0].sectionType,
                                    backGroundType: props.contentItems[0].backGroundType,
                                    backgroundUrlPath: props.contentItems[0].backgroundUrlPath,
                                    backgroundColor: props.contentItems[0].backgroundColor,
                                    mainTextHasShadow: props.contentItems[0].mainTextHasShadow,
                                    heightMethod: props.contentItems[0].heightMethod,
                                    contrastBackground: props.contentItems[0].contrastBackground,
                                    hasCTA: props.contentItems[0].hasCTA,
                                    ctaLabel: props.contentItems[0].ctaLabel,
                                    ctaLinkTo: props.contentItems[0].ctaLinkTo
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: `lower-items ${dragContainerMode}`,
                            ref: dragContainer,
                            children: getRemainingItems(1)
                        })
                    ]
                });
        }
    };
    const getLayoutSizeClasses = (widthX)=>{
        if (!widthX) {
            return "small-container";
        }
        if (widthX > 800) {
            return "large-container";
        } else if (widthX < 800 && widthX >= 500) {
            return "medium-container";
        } else if (widthX < 500) {
            return "small-container";
        }
        return "small-container";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        ref: ref,
        className: `resizer ${props.elementsMode}`,
        children: getLayouts(getLayoutSizeClasses(width))
    });
};

// EXTERNAL MODULE: ./src/data/product-data.tsx
var product_data = __webpack_require__(2422);
;// CONCATENATED MODULE: ./src/pages/components/wf-component.tsx





function WFdemo() {
    const { 0: containerStyle , 1: setContainerStyle  } = (0,external_react_.useState)("rounded");
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        console.log("query", router.query);
        if (!router.query.style) {
            return;
        }
        const routeData = router.query;
        setContainerStyle(routeData.style);
    }, [
        router,
        containerStyle
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "demo",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(WFlayout, {
            elementsMode: containerStyle,
            contentItems: product_data/* contentTestWF */.Rc
        })
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [721,38,422], () => (__webpack_exec__(9062)));
module.exports = __webpack_exports__;

})();