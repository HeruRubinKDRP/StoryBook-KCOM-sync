"use strict";
(() => {
var exports = {};
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 9713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KSS": () => (/* binding */ KSS),
  "default": () => (/* binding */ _pid_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-resize-detector"
var external_react_resize_detector_ = __webpack_require__(6105);
// EXTERNAL MODULE: ./src/components/Carousel/Kcarousel.tsx + 1 modules
var Kcarousel = __webpack_require__(7015);
// EXTERNAL MODULE: ./src/components/ContentComponents/ContentComponent.tsx
var ContentComponent = __webpack_require__(7721);
// EXTERNAL MODULE: ./src/components/FeatureBullets/FeatureBulletsArea/FeatureBulletsArea.tsx + 1 modules
var FeatureBulletsArea = __webpack_require__(4868);
// EXTERNAL MODULE: ./src/components/PDP_Related/AddKSK.tsx
var AddKSK = __webpack_require__(5258);
// EXTERNAL MODULE: ./src/components/PDP_Related/FreeShipping/FreeShipping.tsx
var FreeShipping = __webpack_require__(3527);
// EXTERNAL MODULE: ./src/components/PDP_Related/ProductIdentity/ProductIdentityArea.tsx + 2 modules
var ProductIdentityArea = __webpack_require__(985);
// EXTERNAL MODULE: ./src/components/PDP_Related/SecondaryPurchaseOptions/SecondaryPurchaseOptions.tsx + 4 modules
var SecondaryPurchaseOptions = __webpack_require__(8017);
// EXTERNAL MODULE: ./src/components/ScrubVideo/ScrubVideo.tsx
var ScrubVideo = __webpack_require__(8458);
// EXTERNAL MODULE: ./src/components/SpecificationsArea/SpecificationsArea.tsx + 2 modules
var SpecificationsArea = __webpack_require__(3193);
// EXTERNAL MODULE: ./src/components/Kbutton/KButton.tsx + 4 modules
var KButton = __webpack_require__(5832);
;// CONCATENATED MODULE: ./src/components/Toggle/Toggle.tsx




const toggleLayoutList = (/* unused pure expression or super */ null && ([
    "stacked",
    "side-by-side"
]));
const toggleStyleList = (/* unused pure expression or super */ null && ([
    "touch-edges",
    "spaced-out",
    "one-pill"
]));
const KToggle = (props)=>{
    const { width , height , ref  } = (0,external_react_resize_detector_.useResizeDetector)();
    const { 0: selectedIndex , 1: updateSelectedIndex  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (!props.overrideSelectedIndex) {
            return;
        }
        updateSelectedIndex(props.overrideSelectedIndex);
    }, []);
    const performAction = (index)=>{
        console.log(selectedIndex);
        updateSelectedIndex(index);
        const action = props.toggleOptions[index];
        if (action.action != undefined) {
            action.action();
        }
    };
    const getSelected = (index)=>{
        if (props.selectedIndexOverride && props.selectedIndexOverride > -1 && index == props.selectedIndexOverride) {
            return "toggle-selected";
        }
        if (index == selectedIndex) {
            return "toggle-selected";
        } else {
            return "";
        }
    };
    const getCarat = (index)=>{
        if (index == selectedIndex) {
            return props.selectedCaratPosition;
        }
        return "none";
    };
    const getImage = (index)=>{
        if (!props.toggleOptions[index].imagePath) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "image-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                alt: "",
                src: props.toggleOptions[index].imagePath
            })
        });
    };
    const createToggle = ()=>{
        //if(!props.toggleOptions){return}
        let toggleItems = [];
        for(let i = 0; i < props.toggleOptions.length; i++){
            toggleItems.push(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `toggle-item-container ${props.toggleStyle}`,
                children: [
                    getImage(i),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(KButton/* default */.Z, {
                        classes: `toggle-item ${getSelected(i)} `,
                        label: props.toggleOptions[i].label,
                        iconPlacement: "no-icon",
                        buttonType: "secondary",
                        actionFunc: ()=>performAction(i),
                        carat: getCarat(i),
                        transitionType: "expand-bg"
                    })
                ]
            }, i));
        }
        return toggleItems;
    };
    // const getContainerQueries=(widthX : number | undefined)=>{
    //   if(!widthX){return "small-container"}
    //   if(widthX < 450){
    //     return "small-container"
    //   }
    // }
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        ref: ref,
        className: `k-toggle-container ${props.toggleType} ${props.classes}`,
        children: createToggle()
    });
};

// EXTERNAL MODULE: ./src/components/Graphic/Graphic.tsx + 1 modules
var Graphic = __webpack_require__(408);
// EXTERNAL MODULE: ./src/components/ValidationInput/ValidationInput.tsx
var ValidationInput = __webpack_require__(2538);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/colorPicker/ColorPickerStyled.tsx

const ColorPickerStyled = (external_styled_components_default()).div`
  margin: 1rem 0 1rem 0;
  .cta-container{
    margin-top: 1rem;
  }

  .notify-me{
    .notification.error{
      margin-bottom: 0;
    }

    .text-input{
      margin-bottom: 1.5rem;
    }

    .k-btn.secondary{
      margin-top: 1rem;
    }
  }
  .label-container {
    margin-bottom: 0.5rem;
    display: inline-flex;

    label {
      white-space: nowrap;
    }
  }

  .key, .value {
    font-size: 1rem
  }

  .key {
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .value {
    font-weight: 500;
  }

  ul {
    display: flex;
    list-style: none;
  }

  .color-dot, .selection-indicator {
    border-radius: 100vw;
  }

  .color-dot {
    width: 3rem;
    height: 3rem;
    transition: all 0.5s;
    margin-right: 1rem;
    position: relative;

    &.disabled{
      overflow: hidden;
      .out-of-stock {
        width: 100%;
        height: 1px;
        border-bottom: 2px solid gray;
        transform: rotateZ(45deg) translateY(-50%);
        mix-blend-mode: difference;
        position: absolute;
        top: 50%;
      }
    }

    &.selected {
      .selection-indicator {
        display: inline-flex;
        position: absolute;
        inset: -0.25rem;
        border: 2px solid;
      }
    }

    &:hover {
      transform: scale(1.25);
    }

    &.White {
      border: 1px solid black;
      margin-right: 1rem;
    }
  }

`;

;// CONCATENATED MODULE: ./src/components/colorPicker/colorPicker.tsx






const ColorPicker = (props)=>{
    const { 0: selectedVariant , 1: setSelectedVariant  } = (0,external_react_.useState)(0);
    const { 0: emailValid , 1: setEmailValid  } = (0,external_react_.useState)(false);
    const { 0: notifyOpenStatus , 1: setNotifyOpenStatus  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
    // for(let i=0; i < props.colorVariants.length; i++){
    //   if(!props.colorVariants[i].inStock && i == selectedVariant){
    //     for(let j=0; j < props.colorVariants.length; j++){
    //       if(props.colorVariants[j].inStock){
    //         setSelectedVariant(j)
    //       }
    //     }
    //   }
    // }
    // setSelectedVariant(-1);
    }, [
        props.colorVariants,
        selectedVariant
    ]);
    const specialColorConsiderations = (colorValue)=>{
        if (!colorValue) {
            return;
        }
        switch(colorValue){
            case "white":
                return "black";
            case "#FFFFFF":
                return "black";
            default:
                return colorValue;
        }
        return "";
    };
    function actionPrimary() {
        if (isItOutOfStock() && props.notifyMeFunction) {
            setNotifyOpenStatus(true);
            props.notifyMeFunction();
        }
        if (!isItOutOfStock() && props.addToCartFunction) {
            console.log("add to cart");
            props.addToCartFunction();
        }
        if (isItOutOfStock()) {
            console.log("out of stock");
            notifyMeOpen();
        }
    }
    function actionSecondary() {
        if (props.secondaryAction) {
            props.secondaryAction();
        }
    }
    function notifyMeOpen() {
        console.log("notify me");
        setNotifyOpenStatus(true);
    }
    function notifyMeAction() {
        console.log("submit email");
        if (props.notifyMeFunction) {
            props.notifyMeFunction();
        }
        setNotifyOpenStatus(false);
    }
    const isItOutOfStock = ()=>{
        if (props.colorVariants.length == 0) {
            return false;
        }
        let outOfStockCount = 0;
        for(let i = 0; i < props.colorVariants.length; i++){
            if (!props.colorVariants[i].inStock) {
                outOfStockCount++;
            }
        }
        if (props.colorVariants.length == outOfStockCount) {
            return true;
        }
    };
    const determinePrimaryStatus = ()=>{
        if (isItOutOfStock()) {
            return "secondary";
        } else {
            return "primary";
        }
    };
    const getCTA = (notificationStatus)=>{
        if (!isItOutOfStock()) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
        }
        const getCTAlabel = ()=>{
            if (isItOutOfStock()) {
                return "Notify me";
            } else {
                return "";
            }
        };
        const getPrimaryCTA = ()=>{
            if (notificationStatus) {
                return getNotifyMeFlyout(notificationStatus);
            }
            if (emailValid) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "notification success",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(Graphic/* default */.Z, {
                            graphicName: "checkmark-circled",
                            iconSize: "1.5rem",
                            colorOverride: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            children: "You'll receive an email from Keurig when the item becomes available"
                        })
                    ]
                });
            }
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)(KButton/* default */.Z, {
                transitionType: "expand-bg",
                buttonType: determinePrimaryStatus(),
                buttonWidth: "fit-to-content",
                classes: "light",
                backgroundColorOverride: props.ctaColorOverride,
                iconPlacement: "after-label",
                iconStandard: props.primaryCtaIcon,
                actionFunc: actionPrimary,
                label: getCTAlabel()
            });
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "cta-container",
            children: getPrimaryCTA()
        });
    };
    // const getLearnMoreLink=()=>{
    //   if(!props.hasLearMoreLink){return<></>}
    //   const labelChecked=()=>{
    //     if(!props.hasLearMoreLink || !props.learnMoreLabel){return "Learn more"}
    //     else{return props.learnMoreLabel}
    //   }
    //   return(
    //     <>
    //       <KButton
    //         transitionType="none"
    //         buttonType="link-internal"
    //         buttonWidth="fit-to-content"
    //         classes="light learn-more"
    //         iconPlacement="no-icon"
    //         iconStandard="none"
    //         label={labelChecked()}
    //       />
    //     </>
    //   )
    // }
    const manageSetVariant = (selectedIndex)=>{
        //only allow setState for in stock items;
        if (props.colorVariants[selectedIndex].inStock) {
            setSelectedVariant(selectedIndex);
        }
    };
    const getColorOptions = ()=>{
        if (!props.showProductColors) {
            return;
        }
        let variants = [];
        for(let i = 0; i < props.colorVariants.length; i++){
            const inStockStatus = ()=>{
                if (!props.colorVariants[i].inStock) {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "out-of-stock"
                    });
                }
                return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
            };
            const getSelection = (index)=>{
                if (props.colorVariants.length == 1) {
                    return "selected";
                }
                if (index == selectedVariant && props.colorVariants[index].inStock) {
                    return "selected";
                }
                return "";
            };
            const getOutOfStockDisabled = (index)=>{
                if (!props.colorVariants[index].inStock) {
                    return "disabled";
                } else {
                    return "";
                }
            };
            variants.push(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                onClick: ()=>manageSetVariant(i),
                className: `color-dot ${getSelection(i)} ${getOutOfStockDisabled(i)} ${props.colorVariants[i].colorName}  `,
                style: {
                    backgroundColor: props.colorVariants[i].colorValue
                },
                children: [
                    inStockStatus(),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "selection-indicator",
                        style: {
                            borderColor: specialColorConsiderations(props.colorVariants[i].colorValue)
                        }
                    })
                ]
            }, i));
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
            children: variants
        });
    };
    const handleNotifyMe = (event, validationStatus)=>{
        console.log(event.target.value);
        if (validationStatus) {
            setEmailValid(validationStatus);
        }
        setEmailValid(validationStatus);
    };
    const getSubmitButton = ()=>{
        if (emailValid) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)(KButton/* default */.Z, {
                buttonType: "primary",
                iconPlacement: "no-icon",
                transitionType: "expand-bg",
                iconStandard: "none",
                label: "Submit",
                classes: "dark",
                actionFunc: notifyMeAction
            });
        }
    };
    const getNotifyMeFlyout = (notifyStatus)=>{
        if (notifyStatus) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "notify-me fly-out",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fly-out-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            children: "Email:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ValidationInput/* ValidationInput */.y, {
                            validationType: "email",
                            inputValue: "",
                            handlerFunction: handleNotifyMe
                        }),
                        getSubmitButton(),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(KButton/* default */.Z, {
                            buttonType: "secondary",
                            buttonWidth: "fit-width",
                            iconPlacement: "no-icon",
                            iconStandard: "none",
                            transitionType: "expand-bg",
                            label: "Close",
                            classes: "light",
                            actionFunc: ()=>setNotifyOpenStatus(false)
                        })
                    ]
                })
            });
        }
    };
    const getMessagingLabels = ()=>{
        if (!isItOutOfStock()) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                        className: "key",
                        children: "Selected Color: "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "value",
                        children: [
                            " ",
                            props.colorVariants[selectedVariant].colorName,
                            " "
                        ]
                    })
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                className: "key",
                children: "Out of Stock"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColorPickerStyled, {
        className: "color-options-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "label-container",
                children: getMessagingLabels()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "color-options",
                children: getColorOptions()
            }),
            getCTA(notifyOpenStatus)
        ]
    });
};

// EXTERNAL MODULE: ./src/data/product-data.tsx
var product_data = __webpack_require__(2422);
;// CONCATENATED MODULE: ./src/pages/PDP/[pid].tsx


















function KSS() {
    function onResize() {
        ScrollTrigger_.ScrollTrigger.refresh();
    }
    const { width , height , ref  } = (0,external_react_resize_detector_.useResizeDetector)({
        handleHeight: false,
        refreshMode: "debounce",
        refreshRate: 1000,
        skipOnMount: false,
        onResize
    });
    const carouselRef = (0,external_react_.useRef)(null);
    const mediaContainerRef = (0,external_react_.useRef)(null);
    const endPin = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const { pid  } = router.query;
    console.log(router.query);
    (0,external_react_.useEffect)(()=>{
        if (!carouselRef.current || !mediaContainerRef.current) {
            return;
        }
        external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
        ScrollTrigger_.ScrollTrigger.create({
            trigger: mediaContainerRef.current,
            start: "top top",
            end: `bottom bottom`,
            pin: carouselRef.current,
            pinSpacing: false,
            scrub: false,
            onUpdate: function(self) {
                console.log("scrolled by: ", self.scroll());
            },
            onEnter: function(item) {
                console.log("trigger enter", item.start);
            },
            onLeave: function(item) {
                console.log("leave", item.end);
            }
        });
        ScrollTrigger_.ScrollTrigger.refresh();
    }, [
        width
    ]);
    const getContainerQuery = (widthX)=>{
        if (!widthX) {
            return "mobile no-w";
        }
        if (widthX > 660) {
            return "desktop";
        } else {
            return "mobile";
        }
    };
    const onExpandBuyingOptions = ()=>{
        ScrollTrigger_.ScrollTrigger.refresh();
    };
    const getWidth = (widthX)=>{
        if (!widthX) {
            return "100%";
        }
        return "500px";
    };
    const getOOS = ()=>{
        if (!router.query.oos) {
            console.log("getOOS false");
            return product_data/* KSS_IN */.E3;
        }
        if (router.query.oos == "false") {
            return product_data/* KSS_IN */.E3;
        } else if (router.query.oos == "true") {
            return product_data/* KSS_OOS */.$q;
        }
        return product_data/* KSS_IN */.E3;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        className: `${getContainerQuery(width)} pdp-outer`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "background-fader"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-pdp-section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        ref: carouselRef,
                        className: "media-area",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Kcarousel/* Kcarousel */.c, {
                                carouselType: "slider",
                                component: "carousel",
                                itemsPerSlide: 1,
                                keepNavButtons: true,
                                navPosition: "bottom",
                                navStyle: "thumbnails",
                                slides: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image-item-container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            alt: "",
                                            className: "image-item",
                                            src: "/product-images/kss/kss-0.webp",
                                            title: ""
                                        })
                                    }, "0"),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image-item-container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            alt: "",
                                            className: "image-item",
                                            src: "/product-images/kcs/kcs-open.png",
                                            title: ""
                                        })
                                    }, "1"),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image-item-container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            alt: "",
                                            className: "image-item",
                                            src: "/product-images/kcs/kcs-mug.png",
                                            title: ""
                                        })
                                    }, "2"),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image-item-container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            alt: "",
                                            className: "image-item",
                                            src: "/product-images/kcs/scene.jpg",
                                            title: ""
                                        })
                                    }, "3"),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image-item-container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            alt: "",
                                            className: "image-item",
                                            src: "/product-images/kcs/kcs-open.png",
                                            title: ""
                                        })
                                    }, "4"),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image-item-container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            alt: "",
                                            className: "image-item",
                                            src: "/product-images/kcs/kcs-mug.png",
                                            title: ""
                                        })
                                    }, "5")
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: mediaContainerRef,
                        className: "product-details",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ProductIdentityArea/* ProductIdentity */.Z, {
                                productName: "K-Supreme\xae SMART",
                                productNameExtended: "K-Supreme\xae SMART Single-Serve Coffee Maker",
                                rating: {
                                    ratingNumber: 4.2,
                                    scrollToTargetID: "Ratings",
                                    totalNumberOfReviews: 1431,
                                    totalNumberOfStars: 5
                                },
                                flag: {
                                    flagLabel: "NEW",
                                    flagStyle: "squared-curved"
                                },
                                tagline: "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless. "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(KToggle, {
                                toggleOptions: [
                                    {
                                        imagePath: "/product-selection/kss-thumb.webp",
                                        label: "K-Supreme\xae SMART"
                                    },
                                    {
                                        imagePath: "/product-selection/ksps-thumb.webp",
                                        label: "K-Supreme\xae Plus SMART"
                                    }
                                ],
                                toggleType: "side-by-side",
                                selectedCaratPosition: "top",
                                toggleStyle: "spaced-out"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ColorPicker, {
                                colorVariants: getOOS(),
                                showProductColors: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(AddKSK/* AddKSK */.B, {
                                brewerImagePath: "/product-images/kss/kss-0.webp",
                                finePrint: "1 year, 16 box Auto-Delivery commitment",
                                numberOfRequiredPods: 4,
                                flag: {
                                    flagColor: "KSK",
                                    flagLabel: "Our Best Deal"
                                },
                                message: {
                                    primaryMessage: `You're saving $100`,
                                    secondaryMessage: "with Keurig Starter Kit"
                                },
                                learnMore: {
                                    label: "Learn More",
                                    mode: "pop-up",
                                    articleTitle: "Benefits of Keurig\xae Starter Kit",
                                    articleContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ante vitae commodo mollis. Cras dui nunc, mollis venenatis nunc vel, condimentum dapibus ipsum. Quisque auctor lacus quam, quis dignissim nisl rutrum vel. Ut tristique ante sit amet diam placerat ultrices et hendrerit sem."
                                },
                                price: {
                                    basePrice: 199.99,
                                    finalPrice: 99.99
                                },
                                themeColor: "KSK"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SecondaryPurchaseOptions/* SecondaryPurchaseOptions */.B, {
                                onExpandAction: ()=>onExpandBuyingOptions(),
                                basePrice: 199.99,
                                couponDetails: "Coupon: 20% Off Select Brewers",
                                coupons: [
                                    {
                                        couponActive: false,
                                        couponLabel: "Apply Coupon",
                                        couponDetails: "20% Off Select Brewers. "
                                    }
                                ],
                                mainActionLabel: "Brewer Only",
                                mainAddToCartLabel: " Add to Cart",
                                mainPurchaseOptionSettings: {
                                    basePrice: 199.99,
                                    finalPrice: 199.99,
                                    mainLabel: "Just Brewer",
                                    productName: "K-Caf\xe9\xae SMART",
                                    showStrikeThrough: false,
                                    learnMoreSettings: {
                                        mode: "pop-up",
                                        labelStandard: "Learn more",
                                        articleTitle: "Offer Details",
                                        articleCopy: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend velit sem, auctor rutrum ipsum consequat sed. Duis tortor dui, eleifend nec blandit a, scelerisque in neque. Duis et metus quis neque facilisis iaculis vitae nec est."
                                    }
                                },
                                productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
                                upsellOptions: {
                                    comboBasePrice: 219.99,
                                    comboFinalPrice: 239.99,
                                    products: [
                                        {
                                            basePrice: 39.99,
                                            brand: "Keurig\xae",
                                            finalPrice: 19.99,
                                            productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
                                            productName: "K-Cafe SMART Coffee Maker",
                                            showStrikeThrough: false
                                        },
                                        {
                                            basePrice: 39.99,
                                            brand: "HyperChiller\xae",
                                            finalPrice: 19.99,
                                            productImagePath: "/product-images/HyperChiller.webp",
                                            productName: "HyperChiller",
                                            showStrikeThrough: false
                                        }
                                    ],
                                    showStrikethrough: true,
                                    upsellSectionName: "Better Together"
                                },
                                showStrikeThrough: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(FreeShipping/* FreeShipping */.U, {
                                messageText: "This item ships FREE",
                                showFreeShipping: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(FeatureBulletsArea/* FeatureBulletsArea */.S, {
                                height: "auto",
                                features: [
                                    {
                                        featureDetails: "Recognizes your K-Cup\xae pod and recommends a curated menu of caf\xe9 creations to explore on your Keurig\xae app",
                                        featureIcon: "brew-id",
                                        featureLabel: "BrewId™",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Brew from anywhere, get personalized recommendations, manage your favorites",
                                        featureIcon: "icon-wifi",
                                        featureLabel: "Connected Convenience",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Get easy step-by-step directions in the Keurig\xae app to make lattes, cappuccinos, or your favorite Caf\xe9 Creations",
                                        featureIcon: "barista-mode",
                                        featureLabel: "Barista Mode™",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Get just enough pods, just when you need them",
                                        featureIcon: "icon-shipping-truck",
                                        featureLabel: "Smart Auto-Delivery",
                                        showChevron: true
                                    }
                                ],
                                featuresAreaName: "SMART Features"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(FeatureBulletsArea/* FeatureBulletsArea */.S, {
                                height: "auto",
                                features: [
                                    {
                                        featureDetails: "Recognizes your K-Cup\xae pod and recommends a curated menu of caf\xe9 creations to explore on your Keurig\xae app",
                                        featureIcon: "brew-id",
                                        featureLabel: "Hot & Cold Milk Frother",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Brew from anywhere, get personalized recommendations, manage your favorites",
                                        featureIcon: "ultimate-customization",
                                        featureLabel: "Ultimate Customization",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Get easy step-by-step directions in the Keurig\xae app to make lattes, cappuccinos, or your favorite Caf\xe9 Creations",
                                        featureIcon: "multistream",
                                        featureLabel: "MultiStream™ Technology",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Get just enough pods, just when you need them",
                                        featureIcon: "icon-shipping-truck",
                                        featureLabel: "4 Cup Sizes",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Get just enough pods, just when you need them",
                                        featureIcon: "icon-shipping-truck",
                                        featureLabel: "65oz Removable Reservoir",
                                        showChevron: true
                                    },
                                    {
                                        featureDetails: "Get just enough pods, just when you need them",
                                        featureIcon: "icon-shipping-truck",
                                        featureLabel: "Brew Over Ice",
                                        showChevron: true
                                    }
                                ],
                                featuresAreaName: "Brewer Features"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                ref: endPin,
                className: "end-pin"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SpecificationsArea/* SpecificationsArea */.I, {
                contentStack: [
                    {
                        cardData: {
                            colorScheme: "dark-roast",
                            headerAlignment: "center",
                            headerLabel: "Brew Possibilities",
                            headerStyle: "line-through",
                            hierarchyLevel: 3
                        },
                        cardType: "header-area"
                    },
                    {
                        cardData: {
                            cards: [
                                {
                                    cardType: "simple",
                                    simpleCardData: {
                                        alignment: "center",
                                        mainFocalImage: {
                                            cropStyle: "circle",
                                            imagePath: "/editorial/hot.png"
                                        },
                                        mainImageSize: "default-size",
                                        title: "Hot",
                                        titlePosition: "after-image"
                                    }
                                },
                                {
                                    cardType: "simple",
                                    simpleCardData: {
                                        alignment: "center",
                                        mainFocalImage: {
                                            cropStyle: "circle",
                                            imagePath: "/editorial/iced.png"
                                        },
                                        mainImageSize: "default-size",
                                        title: "Iced",
                                        titlePosition: "after-image"
                                    }
                                },
                                {
                                    cardType: "simple",
                                    simpleCardData: {
                                        alignment: "center",
                                        mainFocalImage: {
                                            cropStyle: "circle",
                                            imagePath: "/editorial/Specialty.png"
                                        },
                                        mainImageSize: "default-size",
                                        title: "Specialty",
                                        titlePosition: "after-image"
                                    }
                                }
                            ]
                        },
                        cardType: "multi-card-presenter"
                    },
                    {
                        cardData: {
                            colorScheme: "dark-roast",
                            headerAlignment: "center",
                            headerLabel: "Specifications",
                            headerStyle: "line-through",
                            hierarchyLevel: 3
                        },
                        cardType: "header-area"
                    },
                    {
                        cardData: {
                            colorScheme: "dark-roast",
                            headerAlignment: "left",
                            headerLabel: "Dimensions",
                            headerStyle: "medium-light",
                            hierarchyLevel: 3
                        },
                        cardType: "header-area"
                    },
                    {
                        cardData: {
                            items: [
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "inline",
                                    primaryMessage: {
                                        label: "Height:"
                                    },
                                    secondaryMessage: {
                                        label: '12.7"'
                                    }
                                },
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "inline",
                                    primaryMessage: {
                                        label: "Height when open:"
                                    },
                                    secondaryMessage: {
                                        label: '17.2"'
                                    }
                                },
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "inline",
                                    primaryMessage: {
                                        label: "Width:"
                                    },
                                    secondaryMessage: {
                                        label: '17.2"'
                                    }
                                },
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "inline",
                                    primaryMessage: {
                                        label: "Weight:"
                                    },
                                    secondaryMessage: {
                                        label: '8.1lbs"'
                                    }
                                }
                            ],
                            layoutMode: "inline"
                        },
                        cardType: "multi-key-value-area"
                    },
                    {
                        cardData: {
                            cards: [
                                {
                                    cardType: "simple",
                                    simpleCardData: {
                                        customClasses: "full-width",
                                        alignment: "center",
                                        mainFocalImage: {
                                            cropStyle: "no-crop",
                                            imagePath: "/product-images/kcs/kcs-dimensions.png"
                                        },
                                        mainImageSize: "full-width",
                                        title: "",
                                        titlePosition: "after-image"
                                    }
                                }
                            ]
                        },
                        cardType: "multi-card-presenter"
                    },
                    {
                        cardData: {
                            items: [
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "stacked",
                                    primaryMessage: {
                                        label: "Phone Compatability"
                                    },
                                    secondaryMessage: {
                                        label: "The K-Caf\xe9\xae SMART brewer is compatible with iOS 13 and higher and Android 8 or higher."
                                    }
                                },
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "stacked",
                                    primaryMessage: {
                                        label: "Wi-Fi\xae Requirements"
                                    },
                                    secondaryMessage: {
                                        label: 'The K-Caf\xe9\xae SMART is optimized for home 2.4 GHz Wi-Fi\xae networks, using WPA2-PSK security. It is not compatible with networks that require an additional username and/or password, a webpage click through to establish a connection or 5 GHz Wi-Fi\xae networks."'
                                    }
                                },
                                {
                                    colorSchemes: "dark-roast",
                                    layoutType: "stacked",
                                    primaryMessage: {
                                        label: "Compatible with the My K-Cup\xae Universal Reusable Coffee Filter"
                                    },
                                    secondaryMessage: {
                                        label: "Brew your own ground coffee (sold separately)"
                                    }
                                }
                            ],
                            layoutMode: "inline"
                        },
                        cardType: "multi-key-value-area"
                    }
                ],
                mediaElementPath: "/video/kcs_pdp.webm",
                mediaType: "movie"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ScrubVideo/* ScrubVideo */.k, {
                duration: 8.5,
                mediaPath: "/360s/kcs7.webm",
                scrollDuration: 450,
                videoHeight: "100vh"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                    customClasses: "max-height",
                    backGroundType: "movie",
                    backgroundUrlPath: "/video/frother-pour.mp4",
                    contrastBackground: "none",
                    ctaLabel: "Call to action",
                    ctaLinkTo: "www.google.com",
                    heightMethod: "fit-content",
                    mainMessage: "Perfectly frothed milk",
                    mainMessageSize: "Large",
                    mainMessageColor: "#473036",
                    secondaryMessageSize: "Medium",
                    secondaryMessage: "Create creamy lattes, frothy cappuccinos and so much more using milk or your favorite dairy substitute and K-Caf\xe9\xae’s built-in milk frother",
                    sectionType: "content-front-and-center",
                    backgroundColor: "none",
                    component: "content",
                    hasCTA: false,
                    hasFocalImage: false,
                    mainTextHasShadow: false,
                    sectionName: "milk-frother-intro"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "connected",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                    backgroundColor: "white",
                    backgroundUrlPath: "/product-images/kcs/connected-convenience.jpg",
                    contrastBackground: "light",
                    ctaLabel: "Get the Keurig\xae App",
                    ctaLinkTo: "",
                    hasCTA: true,
                    ctaButtonType: "primary",
                    heightMethod: "fit-content",
                    mainMessage: "“Alexa, tell Keurig\xae to brew me a single shot.”",
                    mainMessageSize: "Large",
                    mainMessageColor: "#473036",
                    mainMessageWeight: "heavy-weight",
                    mainTextHasShadow: true,
                    messageAlignment: "left",
                    secondaryMessageSize: "Medium",
                    secondaryMessage: "Connect your SMART brewer to Wi-Fi\xae and brew from anywhere — even bed — with a simple Alexa or Google Home voice routine",
                    sectionType: "content-left",
                    backGroundType: "image",
                    component: "content",
                    sectionName: "connected_con",
                    hasFocalImage: true,
                    focalImageIcon: "none",
                    focalImagePath: "/images/app-stores.png",
                    focalImagePosition: "bottom",
                    focalImageSize: "auto"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                    backGroundType: "image",
                    backgroundColor: "medium-roast",
                    backgroundUrlPath: "/images/SMART-fam.png",
                    component: "content",
                    contrastBackground: "none",
                    ctaButtonType: "primary",
                    ctaLabel: "Learn More",
                    ctaLinkTo: "",
                    ctaMode: "button",
                    hasCTA: true,
                    heightMethod: "fit-content",
                    mainMessage: "Meet the Whole SMART Family",
                    mainMessageColor: "#473036",
                    messageTextAlignment: "text-center",
                    mainMessageSize: "Large",
                    secondaryMessage: "",
                    secondaryMessageWeight: "heavy-weight",
                    sectionName: "meetSmart",
                    sectionType: "content-front-and-center",
                    hasFocalImage: false,
                    mainTextHasShadow: false,
                    customClasses: "message-upper"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                    customClasses: "duo-tiled",
                    backGroundType: "image",
                    backgroundColor: "none",
                    backgroundUrlPath: "/images/kcs-kit.webp",
                    contrastBackground: "dark",
                    ctaLabel: "Call to action",
                    ctaLinkTo: "www.google.com",
                    ctaButtonType: "primary",
                    hasCTA: true,
                    hasTermsConditions: true,
                    heightMethod: "fit-content",
                    mainMessage: "Get Your K-Cafe\xae SMART for 50% Off",
                    mainMessageColor: "#473036",
                    mainMessageSize: "Medium",
                    mainMessageWeight: "heavy-weight",
                    messageTextAlignment: "text-left",
                    secondaryMessage: "Includes SMART Deliver with up to 96 FREE Pods, 25% Off Beverages & Free Shipping",
                    secondaryMessageWeight: "heavy-weight",
                    secondaryMessageSize: "Small",
                    sectionAppearance: "default",
                    sectionType: "content-right",
                    termsAndConditionsCTA: {
                        termsAndConditionsCtaLabel: "See Details",
                        termsAndConditionsLabelDetail: "Restrictions apply"
                    },
                    termsAndConditionsFullText: {
                        header: "Lorem ipsum tolem set",
                        termsAndConditionsDetailCopy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet."
                    },
                    termsAndConditionsMode: "slide-down-mode",
                    component: "content",
                    hasFocalImage: false,
                    mainTextHasShadow: false,
                    sectionName: "kcsKit"
                })
            })
        ]
    });
}
/* harmony default export */ const _pid_ = (KSS);


/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 995:
/***/ ((module) => {

module.exports = require("gsap/dist/Draggable");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = require("gsap/dist/InertiaPlugin");

/***/ }),

/***/ 3183:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 8472:
/***/ ((module) => {

module.exports = require("gsap/dist/gsap");

/***/ }),

/***/ 8445:
/***/ ((module) => {

module.exports = require("interweave");

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
var __webpack_exports__ = __webpack_require__.X(0, [721,15,958,38,146,665,422], () => (__webpack_exec__(9713)));
module.exports = __webpack_exports__;

})();