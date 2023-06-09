"use strict";
(() => {
var exports = {};
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 7866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SMARTdemo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
// EXTERNAL MODULE: ./src/components/ContentComponents/FocalImage/FocalImage.tsx + 1 modules
var FocalImage = __webpack_require__(6225);
// EXTERNAL MODULE: ./src/components/ContentComponents/ProductCard/ProductCard.tsx + 1 modules
var ProductCard = __webpack_require__(9958);
// EXTERNAL MODULE: ./src/components/PageNav/PageNav.tsx
var PageNav = __webpack_require__(8534);
// EXTERNAL MODULE: ./src/components/PanelHeader/PanelHeader.tsx + 1 modules
var PanelHeader = __webpack_require__(3895);
// EXTERNAL MODULE: ./src/components/Graphic/Graphic.tsx + 1 modules
var Graphic = __webpack_require__(408);
;// CONCATENATED MODULE: ./src/components/ProductDetails/FeaturesList/features-list.tsx



const FeaturesList = (props)=>{
    const getFadeOut = (doFade)=>{
        if (doFade) {
            return "fader";
        }
        return "";
    };
    const getFeatures = ()=>{
        let list = [];
        for(let i = 0; i < props.featuresList.length; i++){
            list.push(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: `bullet-point ${getFadeOut(props.featuresList[i].fadeOutOnScrollOut)}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(Graphic/* default */.Z, {
                        graphicName: props.featuresList[i].iconName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "feature-description",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                className: "feature-title",
                                children: props.featuresList[i].featureName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: props.featuresList[i].featureDetail
                            })
                        ]
                    })
                ]
            }, `${i}${props.featuresList[i].featureName}`));
        }
        return list;
    };
    const getHeader = ()=>{
        if (!props.header) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
            className: "fader",
            children: props.header
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "features",
        children: [
            getHeader(),
            getFeatures()
        ]
    });
};

// EXTERNAL MODULE: ./src/components/SEO_Component/SEOitem.tsx
var SEOitem = __webpack_require__(5907);
;// CONCATENATED MODULE: ./src/pages/SMART/SMART-family.tsx












function SMARTdemo() {
    const { 0: isVersionsOpen , 1: setVersionOpen  } = (0,external_react_.useState)(false);
    const { width , height , ref  } = (0,external_react_resize_detector_.useResizeDetector)({
        handleHeight: false,
        refreshMode: "debounce",
        refreshRate: 100,
        skipOnMount: false
    });
    const router = (0,router_.useRouter)();
    const { pid  } = router.query;
    const getContainerQuery = (widthX)=>{
        if (!widthX) {
            return "small-container";
        }
        switch(router.query.version){
            case "1.1":
                console.log("1.1");
                if (widthX > 1200) {
                    return "large-container begin-wrap";
                }
                if (widthX > 800) {
                    return "large-container";
                }
                if (widthX <= 800) {
                    return "small-container";
                }
                break;
            case "1.2":
                console.log("versioning test 1.2");
                if (widthX > 1200) {
                    return "large-container begin-wrap";
                }
                if (widthX > 821 && widthX <= 1200) {
                    return "large-container";
                }
                if (widthX >= 430 && widthX <= 821) {
                    return "medium-container";
                }
                return "small-container";
        }
    };
    console.log(router.query);
    const toggleVersionMenu = ()=>{
        setVersionOpen(!isVersionsOpen);
    };
    const getVersion = ()=>{
        if (!isVersionsOpen) {
            return;
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "version-menu",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "versions",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(PanelHeader/* PanelHeader */.V, {
                        hasCloseButton: true,
                        hasBackButton: false,
                        closeFunc: ()=>toggleVersionMenu()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                        children: "Versions"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "version-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                href: "SMART-family?version=1.2",
                                children: "Version 1.2 20-JUL-2022"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "adjusted layout for portrait iPad, feature bullets in row"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "adjusted testimonial element position at small/mobile container"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "adjusted text alignments "
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                `adjusted background color for "Discover BrewID section"`,
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "version-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                href: "SMART-family?version=1.1",
                                children: "Version 1.1 20-JUL-2022"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                children: "initialized versioning system"
                            })
                        ]
                    })
                ]
            })
        });
    };
    const getVersionedBGColor = (id)=>{
        if (!id) {
            return "latteMed";
        }
        if (router.query.version == "1.1") {
            switch(id){
                case "BrewID_Intro":
                    return "latteMed";
            }
        }
        if (router.query.version == "1.2") {
            switch(id){
                case "BrewID_Intro":
                    return "latte70";
            }
        }
        return "latteMed";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `smart-family ${getContainerQuery(width)} page-container`,
        ref: ref,
        children: [
            getVersion(),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                onClick: ()=>setVersionOpen(true),
                className: "version",
                children: [
                    "Version ",
                    router.query.version,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "background-filler"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageNav/* PageNav */.TK, {
                useGlass: true,
                backGroundOpacity: 0.75,
                background: "dark-roast",
                collapsedLabel: "Features Menu",
                links: [
                    {
                        classes: "",
                        label: "BREWERS",
                        linkTo: ""
                    },
                    {
                        classes: "",
                        label: "FEATURES",
                        linkTo: ""
                    },
                    {
                        classes: "",
                        label: "FEATURES",
                        linkTo: ""
                    },
                    {
                        classes: "",
                        label: "KEURIG APP",
                        linkTo: ""
                    },
                    {
                        classes: "",
                        label: "BREW MATCH",
                        linkTo: ""
                    },
                    {
                        classes: "highlighted",
                        label: "BUILD YOUR STARTER KIT",
                        linkTo: ""
                    }
                ],
                classes: "",
                navName: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "movie",
                backgroundUrlPath: "/video/SMART-sampling.webm",
                contrastBackground: "dark",
                ctaLabel: "Call to action",
                ctaLinkTo: "www.google.com",
                hasCTA: false,
                hasTermsConditions: false,
                heightMethod: "fit-content",
                heightOverride: {
                    minHeight: "70vh",
                    maxHeight: "90vh",
                    overallHeight: "100%"
                },
                mainMessage: "A coffee experience perfectly personalized for you",
                mainMessageSize: "Large",
                mainMessageWeight: "heavy-weight",
                mainMessageColor: "white",
                mainTextHasShadow: true,
                messageTextAlignment: "text-center",
                secondaryMessage: "",
                sectionType: "content-front-and-center",
                termsAndConditionsCTA: {
                    termsAndConditionsCtaLabel: "See Details",
                    termsAndConditionsLabelDetail: "Restrictions apply"
                },
                termsAndConditionsFullText: {
                    header: "Lorem ipsum tolem set",
                    termsAndConditionsDetailCopy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet lectus, ac congue arcu ultricies eget. Curabitur id nunc quis sapien dictum iaculis. Fusce non faucibus eros. Etiam efficitur velit sit amet rutrum iaculis. Vivamus nec odio commodo, vestibulum nisl nec, aliquet nibh. Fusce finibus id lorem at commodo. Maecenas a varius velit. Nunc nunc enim, tempus a ultrices at, imperdiet quis mauris. Nulla faucibus, nibh quis lobortis convallis, velit metus porttitor metus, sed suscipit arcu leo id sapien. Curabitur varius laoreet urna non tincidunt. Nullam neque ex, luctus et ex sed, interdum vulputate leo. Nunc mollis pellentesque augue, pharetra suscipit nisl. Suspendisse ac dolor arcu. Vestibulum efficitur felis enim, non molestie diam rhoncus vitae. Mauris viverra vehicula diam, ut scelerisque nulla sollicitudin ut. Etiam dictum blandit ipsum, quis ultricies odio egestas quis.  Aenean ut dolor nulla. Proin semper in nisi id viverra. Quisque sed massa tristique, gravida orci id, lacinia enim. Quisque vestibulum nisl in dui suscipit, quis lobortis ex finibus. Nullam euismod, erat id viverra faucibus, magna tortor venenatis neque, tincidunt pharetra enim tellus ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed libero massa, convallis ut diam vitae, laoreet cursus ante. Mauris eleifend tellus lectus, ultricies porttitor lectus posuere ut. Aliquam et accumsan massa."
                },
                backgroundColor: "sepia",
                component: "content",
                hasFocalImage: false,
                sectionName: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                hasFocalImage: false,
                mainTextHasShadow: false,
                backGroundType: "solid-color",
                backgroundColor: "white",
                backgroundUrlPath: "",
                component: "content",
                contrastBackground: "none",
                hasCTA: false,
                ctaLabel: "",
                ctaLinkTo: "",
                ctaMode: "button",
                heightMethod: "fit-content",
                mainMessage: "AS FEATURED IN",
                mainMessageColor: "#3B2B2F",
                mainMessageSize: "Tiny",
                messageTextAlignment: "text-center",
                secondaryMessage: "",
                mainMessageWeight: "bold-weight",
                secondaryMessageWeight: "heavy-weight",
                sectionName: "",
                sectionType: "content-front-and-center",
                customClasses: "featured"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Kcarousel/* Kcarousel */.c, {
                carouselType: "slider",
                component: "carousel",
                itemsPerSlide: 5,
                navPosition: "bottom",
                containerBackgroundColor: "white",
                slides: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "images-container logos",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/the_spoon_logo.svg"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/cnn_underscored_logo.svg"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/tiktok_logo.svg"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/Men_s_Health_logo.svg"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/logo_apartment_therapy.svg"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/logo_USA_today.svg"
                            })
                        ]
                    }, "0")
                ],
                keepNavButtons: false,
                navStyle: "dots"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "solid-color",
                backgroundColor: getVersionedBGColor("BrewID_Intro"),
                backgroundUrlPath: "",
                component: "content",
                contrastBackground: "none",
                ctaLabel: "",
                ctaLinkTo: "",
                ctaMode: "button",
                heightMethod: "fit-content",
                mainMessage: "Discover BrewID™, the simplest way to personalize your cup to perfection. ",
                mainMessageColor: "#473036",
                mainMessageSize: "Large",
                messageTextAlignment: "text-center",
                secondaryMessage: "",
                secondaryMessageWeight: "heavy-weight",
                sectionName: "BrewID_Intro",
                sectionType: "content-front-and-center",
                hasCTA: false,
                hasFocalImage: false,
                mainTextHasShadow: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                customClasses: "brew-id-section",
                backGroundType: "movie",
                backgroundColor: "latte70",
                backgroundTileImagePath: "",
                backgroundTilingMethod: "repeat-x",
                backgroundUrlPath: "/video/BrewID_textless.webm",
                contrastBackground: "dark",
                ctaLabel: "Call to action",
                ctaLinkTo: "www.google.com",
                hasCTA: false,
                hasTermsConditions: false,
                heightMethod: "fit-content",
                heightOverride: {
                    minHeight: "50vh",
                    maxHeight: "200vh",
                    overallHeight: "100%"
                },
                mainMessage: "Expert results without having to be an expert",
                mainMessageColor: "#473036",
                mainMessageSize: "Medium",
                mainMessageWeight: "heavy-weight",
                messageTextAlignment: "text-left",
                secondaryMessage: "BrewID™ recognizes your K-Cup\xae pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. ",
                secondaryMessageWeight: "regular-weight",
                secondaryMessageSize: "Small",
                sectionAppearance: "inset-beveled",
                sectionType: "content-right",
                component: "content",
                hasFocalImage: false,
                mainTextHasShadow: false,
                sectionName: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "solid-color",
                backgroundColor: "white",
                backgroundUrlPath: "",
                component: "content",
                contrastBackground: "none",
                ctaLabel: "",
                ctaLinkTo: "",
                ctaMode: "button",
                heightMethod: "fit-content",
                mainMessage: "2 ways to make amazing coffee with our most advanced brewing technology",
                mainMessageColor: "#3B2B2F",
                mainMessageSize: "Medium",
                messageTextAlignment: "text-center",
                secondaryMessage: "",
                secondaryMessageWeight: "heavy-weight",
                sectionName: "BrewID_Intro",
                sectionType: "content-front-and-center",
                hasCTA: false,
                hasFocalImage: false,
                mainTextHasShadow: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Kcarousel/* Kcarousel */.c, {
                carouselType: "slider",
                component: "carousel",
                itemsPerSlide: 3,
                keepNavButtons: false,
                navLabels: [
                    "First Section",
                    "Second Section",
                    "Third Section"
                ],
                navStyle: "dots",
                slides: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ProductCard/* ProductCard */.I, {
                                colorVariants: [
                                    {
                                        inStock: true,
                                        variantName: "Black Stainless Steel"
                                    }
                                ],
                                hasCTA: true,
                                hasLearMoreLink: true,
                                learnMoreLabel: "See Full Page",
                                learnMoreLinkTo: "#",
                                priceFinal: 114.99,
                                priceOriginal: 139.99,
                                primaryCtaButtonType: "primary",
                                primaryCtaLabel: "Build your kit",
                                primarySlogan: "When you build a Starter Kit",
                                productColorValues: [
                                    "black"
                                ],
                                productImagePath: "/images/silos/KSPS/ksps.png",
                                productName: "K-Supreme\xae Plus SMART",
                                secondarySlogan: "Stainless Steel Metal Wrap, 5 Brew Sizes",
                                featuresList: "MultiStream Technology™ extracts more flavor and aroma*",
                                pricingMessage: "$229.99 List Price",
                                showPrice: true,
                                showProductColors: true
                            }, "0"),
                            ",",
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ProductCard/* ProductCard */.I, {
                                colorVariants: [
                                    {
                                        inStock: true,
                                        variantName: "Black Stainless Steel"
                                    }
                                ],
                                hasCTA: true,
                                hasLearMoreLink: true,
                                learnMoreLabel: "See Full Page",
                                learnMoreLinkTo: "#",
                                priceFinal: 99.99,
                                priceOriginal: 249.99,
                                primaryCtaButtonType: "primary",
                                primaryCtaLabel: "Build your kit",
                                primarySlogan: "When you build a Starter Kit",
                                productColorValues: [
                                    "black"
                                ],
                                productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
                                productName: "K-Caf\xe9\xae SMART",
                                secondarySlogan: "Fast & easy coffeehouse drinks, built-in milk frother",
                                showPrice: true,
                                showProductColors: true,
                                pricingMessage: "$249.99 List Price",
                                featuresList: ""
                            }, "1")
                        ]
                    })
                ],
                navPosition: "bottom"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                customClasses: "ksk-special",
                backGroundType: "solid-color",
                backgroundColor: "dark-roast",
                backgroundUrlPath: "",
                component: "content",
                contrastBackground: "none",
                ctaLabel: "Build Your Kit",
                ctaLinkTo: "",
                ctaMode: "button",
                flag: {
                    flagBackgroundColor: "medium-roast",
                    flagLabel: "KEURIG.COM EXCLUSIVE PRICING",
                    flagStyle: "square",
                    flagTextColor: "white",
                    useFlag: true
                },
                hasCTA: true,
                hasTermsConditions: true,
                heightMethod: "half-viewport",
                mainMessage: "Get your SMART Brewer for 50% off",
                mainMessageColor: "white",
                mainMessageSize: "Huge",
                mainTextHasShadow: true,
                messageTextAlignment: "text-center",
                secondaryMessage: "Our Keurig\xae Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping.",
                secondaryMessageSize: "Medium",
                secondaryMessageWeight: "medium-weight",
                sectionName: "",
                sectionType: "content-front-and-center",
                heightOverride: {
                    minHeight: "30rem",
                    maxHeight: "100vh",
                    overallHeight: "100%"
                },
                termsAndConditionsCTA: {
                    termsAndConditionsCtaLabel: "See Details",
                    termsAndConditionsLabelDetail: "Cancellation fees & restrictions apply. "
                },
                termsAndConditionsFullText: {
                    header: "Lorem ipsum tolem set",
                    termsAndConditionsDetailCopy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci."
                },
                termsAndConditionsMode: "pop-up-mode",
                hasFocalImage: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "movie",
                backgroundColor: "latte70",
                backgroundUrlPath: "/video/Montage_3.webm",
                contrastBackground: "dark",
                ctaLabel: "Call to action",
                ctaLinkTo: "www.google.com",
                hasCTA: false,
                hasTermsConditions: false,
                heightOverride: {
                    minHeight: "30rem",
                    maxHeight: "130vh",
                    overallHeight: "100%"
                },
                heightMethod: "fit-content",
                mainMessage: "Delicious coffeehouse recipes in the palm of your hand",
                mainMessageColor: "#473036",
                mainMessageSize: "Medium",
                mainMessageWeight: "heavy-weight",
                messageTextAlignment: "text-left",
                secondaryMessage: "Explore over 60 indulgent recipes in the Keurig\xae app with Caf\xe9 Creations. In minutes, you'll be enjoying an extra-foamy cappuccino or caramel latte precisely how you love them. ",
                secondaryMessageWeight: "regular-weight",
                secondaryMessageSize: "Small",
                sectionAppearance: "inset-beveled",
                sectionType: "content-left",
                component: "content",
                hasFocalImage: false,
                mainTextHasShadow: false,
                sectionName: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "double",
                style: {
                    backgroundColor: "#faf7f3"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                        backGroundType: "movie",
                        backgroundColor: "transparent",
                        backgroundUrlPath: "/video/AutoDelivery_1.webm",
                        contrastBackground: "dark",
                        ctaLabel: "Call to action",
                        ctaLinkTo: "www.google.com",
                        hasCTA: false,
                        hasTermsConditions: false,
                        heightMethod: "fit-content",
                        mainMessage: "",
                        mainMessageColor: "#473036",
                        mainMessageSize: "Medium",
                        heightOverride: {
                            minHeight: "30rem",
                            maxHeight: "70vh",
                            overallHeight: "100%"
                        },
                        mainMessageWeight: "heavy-weight",
                        messageTextAlignment: "text-left",
                        secondaryMessage: "",
                        secondaryMessageWeight: "regular-weight",
                        secondaryMessageSize: "Small",
                        sectionAppearance: "inset-beveled",
                        sectionType: "content-front-and-center",
                        component: "content",
                        hasFocalImage: false,
                        mainTextHasShadow: false,
                        sectionName: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "carousel-area",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                children: "Coffee how you want it, only when you need it with Smart Delivery."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Kcarousel/* Kcarousel */.c, {
                                heightOverride: "100%",
                                carouselType: "slider",
                                component: "carousel",
                                keepNavButtons: true,
                                navLabels: [
                                    "Why you need it",
                                    "How it works",
                                    "96 Free Pods"
                                ],
                                navPosition: "top",
                                navStyle: "text",
                                slides: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(FeaturesList, {
                                            featuresList: [
                                                {
                                                    featureName: "Easiest Coffee Delivery",
                                                    featureDetail: "Get more only when you run low",
                                                    featureStyle: "everything",
                                                    iconName: "icon-shipping-truck"
                                                },
                                                {
                                                    featureName: "Best Everyday Value",
                                                    featureDetail: "Save 25% every time",
                                                    featureStyle: "everything",
                                                    iconName: "icon-savings"
                                                },
                                                {
                                                    featureName: "You're In Control",
                                                    featureDetail: "Change, delay, or cancel – with no hassles",
                                                    featureStyle: "everything",
                                                    iconName: "app-on-mobile"
                                                }
                                            ]
                                        })
                                    }, 0),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(FeaturesList, {
                                            featuresList: [
                                                {
                                                    featureName: "We Help Keep Track",
                                                    featureDetail: "BrewID™ checks how many pods you have",
                                                    featureStyle: "everything",
                                                    iconName: "icon-schedule"
                                                },
                                                {
                                                    featureName: "Low Pod Alerts",
                                                    featureDetail: "We’ll email or text when you’re running low",
                                                    featureStyle: "everything",
                                                    iconName: "icon-pod-logo"
                                                },
                                                {
                                                    featureName: "You're In Control",
                                                    featureDetail: "Change, delay, or cancel – with no hassles",
                                                    featureStyle: "everything",
                                                    iconName: "app-on-mobile"
                                                }
                                            ]
                                        })
                                    }, 1),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                                            backGroundType: "solid-color",
                                            backgroundColor: "transparent",
                                            heightOverride: {
                                                minHeight: "auto",
                                                maxHeight: "auto",
                                                overallHeight: "100%"
                                            },
                                            backgroundUrlPath: "",
                                            component: "content",
                                            contrastBackground: "none",
                                            ctaLabel: "Learn More",
                                            ctaLinkTo: "",
                                            ctaMode: "button",
                                            hasCTA: true,
                                            ctaButtonType: "primary",
                                            hasTermsConditions: false,
                                            heightMethod: "one-viewport",
                                            mainMessage: "Try SMART Delivery and Get up to 96 FREE Pods. Up to a $60 value.",
                                            mainMessageColor: "#3B2B2F",
                                            mainMessageSize: "Medium",
                                            mainTextHasShadow: false,
                                            messageTextAlignment: "text-left",
                                            secondaryMessage: "You'll save 25% on every order with Free Shipping. No commitment required. ",
                                            secondaryMessageSize: "Medium",
                                            secondaryMessageWeight: "medium-weight",
                                            sectionName: "",
                                            sectionType: "content-front-and-center",
                                            termsAndConditionsCTA: {
                                                termsAndConditionsCtaLabel: "See Details",
                                                termsAndConditionsLabelDetail: "Restrictions apply"
                                            },
                                            termsAndConditionsFullText: {
                                                header: "Lorem ipsum tolem set",
                                                termsAndConditionsDetailCopy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci."
                                            },
                                            termsAndConditionsMode: "pop-up-mode",
                                            hasFocalImage: false
                                        })
                                    }, 2), 
                                ],
                                itemsPerSlide: 1
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                customClasses: "testimonial",
                backGroundType: "image",
                backgroundUrlPath: "/images/lifestyle/making-drinks.jpg",
                calloutPosition: "left-top",
                ctaLabel: "This is a CTA",
                ctaLinkTo: '""',
                heightOverride: {
                    maxHeight: "100vh",
                    minHeight: "80vh",
                    overallHeight: "100%"
                },
                mainMessage: "“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” ",
                testimonial: {
                    stars: 5,
                    name: "Leah"
                },
                mainMessageColor: "#473036",
                messageAsCallout: true,
                messageTextAlignment: "text-left",
                secondaryMessage: "",
                sectionType: "content-front-and-center",
                backgroundColor: "sepia",
                component: "content",
                contrastBackground: "none",
                hasCTA: false,
                hasFocalImage: false,
                heightMethod: "fit-content",
                mainTextHasShadow: false,
                sectionName: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                customClasses: "page-break",
                backGroundType: "solid-color",
                backgroundColor: "dark-roast",
                backgroundUrlPath: "",
                component: "content",
                contrastBackground: "none",
                ctaLabel: "",
                ctaLinkTo: "",
                ctaMode: "button",
                heightMethod: "fit-content",
                mainMessage: "Wi-Fi\xae enabled coffee maker works with Alexa and Google Home. ",
                mainMessageColor: "white",
                mainMessageSize: "Medium",
                messageTextAlignment: "text-center",
                secondaryMessage: "",
                secondaryMessageWeight: "heavy-weight",
                sectionName: "BrewID_Intro",
                sectionType: "content-front-and-center",
                hasCTA: false,
                hasFocalImage: false,
                mainTextHasShadow: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Kcarousel/* Kcarousel */.c, {
                customClasses: "app-related",
                heightOverride: "100%",
                carouselType: "slider",
                component: "carousel",
                keepNavButtons: false,
                navLabels: [
                    "Why you need it",
                    "How it works",
                    "96 Free Pods"
                ],
                navPosition: "bottom",
                navStyle: "dots",
                slides: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "slide-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(FocalImage/* FocalImageContent */.M, {
                            calloutBG_Color: "latte",
                            calloutHeader: "Step-By-Step Guided Recipes",
                            calloutLabel: "Barista Mode™",
                            calloutParagraph: "Explore a curated menu of Caf\xe9 Creations for your pod. See one you like? Barista Mode™ will walk you through it. Before you know it, you'll be sipping on an iced vanilla latte. ",
                            focalImagePath: "/app/App-RecipeScreenshot.png",
                            hasCTA: true,
                            mainBG_Color: "latte70",
                            mainBG_imageCover: "",
                            primaryMessageHeading: "Get Connected to Amazing Coffee",
                            primaryMessageParagraph: "Connect your brewer to the Keurig\xae app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. ",
                            useAppStoreCTA: true,
                            useCallOut: true,
                            messageSize: "Large"
                        })
                    }, 0),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "slide-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(FocalImage/* FocalImageContent */.M, {
                            calloutBG_Color: "latte",
                            calloutHeader: "Take Charge of Your Pods",
                            calloutLabel: "My Pantry",
                            calloutParagraph: "Need to add, change or snooze an item? Just tap My Pantry and follow the easy directions. You can even adjust how many pods you have if you purchase some elsewhere. ",
                            focalImagePath: "/app/app-reorder.png",
                            hasCTA: true,
                            mainBG_Color: "latte70",
                            mainBG_imageCover: "",
                            primaryMessageHeading: "Get Connected to Amazing Coffee",
                            primaryMessageParagraph: "Connect your brewer to the Keurig\xae app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. ",
                            useAppStoreCTA: true,
                            useCallOut: true,
                            messageSize: "Large"
                        })
                    }, 1),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "slide-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(FocalImage/* FocalImageContent */.M, {
                            calloutBG_Color: "latte",
                            calloutHeader: "Fine Tune in the App",
                            calloutLabel: "Customize Your Cup",
                            calloutParagraph: "With the app, your smart phone becomes a precision remote control that makes it easy to change your size, temperature and brew strength to perfection.",
                            focalImagePath: "/app/app-pod.png",
                            hasCTA: true,
                            mainBG_Color: "latte70",
                            mainBG_imageCover: "",
                            primaryMessageHeading: "Get Connected to Amazing Coffee",
                            primaryMessageParagraph: "Connect your brewer to the Keurig\xae app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. ",
                            useAppStoreCTA: true,
                            useCallOut: true,
                            messageSize: "Large"
                        })
                    }, 2), 
                ],
                itemsPerSlide: 1
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "movie",
                backgroundColor: "white",
                backgroundUrlPath: "/video/BrewFromAnywhere.webm",
                contrastBackground: "dark",
                ctaLabel: "Call to action",
                ctaLinkTo: "www.google.com",
                hasCTA: false,
                hasTermsConditions: false,
                heightMethod: "fit-content",
                mainMessage: "Brew from just about anywhere",
                mainMessageColor: "#473036",
                mainMessageSize: "Medium",
                heightOverride: {
                    minHeight: "30rem",
                    maxHeight: "70vh",
                    overallHeight: "100%"
                },
                mainMessageWeight: "heavy-weight",
                messageTextAlignment: "text-left",
                secondaryMessage: "The possibilities are endless. Use the app to start your brew from bed or the car and have a hot cup ready and waiting for you.",
                secondaryMessageWeight: "regular-weight",
                secondaryMessageSize: "Small",
                sectionAppearance: "inset-beveled",
                sectionType: "content-left",
                component: "content",
                hasFocalImage: false,
                mainTextHasShadow: false,
                sectionName: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SEOitem/* SEO_item */.h, {
                bgColor: "sepia70",
                expandText: "Continue Reading",
                isExpandedText: "Show Less",
                mainBody: "Forget the traffic. The line. The expense. Keurig\xae SMART coffee makers with BrewID™ make it simple to enjoy rich, full-flavored coffee and coffeehouse beverages in the comfort of your home — without specialized skills or equipment. ",
                mainTitle: "Meet Our Family of SMART Coffee Makers",
                sections: [
                    {
                        body: "Connecting your coffee maker to Wi-Fi\xae unlocks the power of BrewID™, our advanced brewing technology that recognizes your genuine K-Cup pod.  ",
                        title: "Coffee experiences customized for your brew"
                    },
                    {
                        body: "Select “Signature Brew” and your brewer will automatically adjust to the settings recommended by the coffee roasting expert who created your chosen variety. Prefer more control? Fine-tune your cup with a wide range of temperature, strength, and size settings using brewer controls or the Keurig\xae app. The app is also where you can explore Caf\xe9 Creations, a curated menu of simple coffeehouse recipes for the K-Caf\xe9 SMART Coffee Maker. When you find one you like, Barista Mode™ will guide you with easy, step-by-step directions. Before you know it, you’ll be sipping a delicious coffeehouse beverage.  ",
                        title: ""
                    },
                    {
                        body: "Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  ",
                        title: "Connect to convenience "
                    }
                ],
                showAsCollapsed: true
            })
        ]
    });
// return (
//   <div className="page-view-container">
//
//     <PageNav
//       navName={headerManu.navName}
//       links={headerManu.links}
//       classes={headerManu.classes}
//       collapsedLabel={headerManu.collapsedLabel}
//       background={headerManu.background}
//       useGlass={true}
//       />
//     <ContentItem
//       component="content"
//       sectionName=""
//       hasFocalImage={false}
//       sectionType="content-front-and-center"
//       mainMessage="A coffee experience perfectly personalized for you"
//       mainMessageColor="white"
//       mainMessageSize="Medium"
//       messageAlignment="center"
//       secondaryMessage=""
//       secondaryMessageSize="Small"
//       backGroundType="image"
//       backgroundUrlPath="/product-images/kcs/lifestyle/lifestyle-1-50.jpg"
//       backgroundColor="dark-roast"
//       mainTextHasShadow={true}
//       heightMethod="stretch-to-parent"
//       contrastBackground="dark"
//       heightOverride={{
//         minHeight : "70vh",
//         maxHeight : "100vh",
//         overallHeight : "100%"
//       }}
//       hasCTA={true}
//       ctaMode="entire-tile"
//       ctaLabel="Special deal"
//       ctaLinkTo=""
//       ctaButtonType="primary-light"
//     />
//
//     <ContentItem
//       hasFocalImage={false}
//       mainTextHasShadow={false}
//       hasCTA={false}
//       backGroundType="solid-color"
//       backgroundColor="latte"
//       backgroundUrlPath=""
//       component="content"
//       contrastBackground="none"
//       ctaLabel="Discover BrewID"
//       ctaLinkTo=""
//       ctaMode="button"
//       heightMethod="fit-content"
//       mainMessage="Discover BrewID™, the simplest way to personalize your cup to perfection. "
//       mainMessageColor="#3B2B2F"
//       messageTextAlignment="text-center"
//       secondaryMessage=""
//       secondaryMessageWeight="heavy-weight"
//       sectionName="BrewID_Intro"
//       sectionType="content-front-and-center"
//     />
//     <ContentItem
//       backGroundType="movie"
//       backgroundColor="latte"
//       backgroundUrlPath="/video/sample_coffee_general.mp4"
//       contrastBackground="dark"
//       sectionAppearance="inset-beveled"
//       ctaLabel="Call to action"
//       ctaLinkTo="www.google.com"
//       hasCTA={false}
//       heightMethod="fit-content"
//       mainMessage="Expert results without having to be an expert"
//       mainMessageColor="#3B2B2F"
//       mainMessageSize="Small"
//       mainMessageWeight="heavy-weight"
//       messageTextAlignment="text-left"
//       secondaryMessage="BrewID™ recognizes your K-Cup® pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. "
//       secondaryMessageWeight="regular-weight"
//       secondaryMessageSize="Small"
//       sectionType="content-right"
//       component="content"
//       hasFocalImage={false}
//       mainTextHasShadow={false}
//       sectionName=""
//     />
//     <ContentItem
//       hasFocalImage={false}
//       mainTextHasShadow={false}
//       backGroundType="solid-color"
//       backgroundColor="white"
//       backgroundUrlPath=""
//       component="content"
//       contrastBackground="none"
//       hasCTA={false}
//       ctaLabel=""
//       ctaLinkTo=""
//       ctaMode="button"
//       heightMethod="fit-content"
//       mainMessage="3 ways to make amazing coffee with our most advanced brewing technology"
//       mainMessageColor="#3B2B2F"
//       messageTextAlignment="text-center"
//       secondaryMessage=""
//       secondaryMessageWeight="heavy-weight"
//       sectionName="BrewID_Intro"
//       sectionType="content-front-and-center"
//     />
//
//     <Kcarousel
//       carouselType="slider"
//       component="carousel"
//       itemsPerSlide={3}
//       keepNavButtons
//       navLabels={[
//         'First Section',
//         'Second Section',
//         'Third Section'
//       ]}
//       navStyle="dots"
//       slides={[
//         <ProductCard
//           key="0"
//           colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]}
//           hasCTA
//           hasLearMoreLink
//           learnMoreLabel="See Full Page"
//           learnMoreLinkTo="#"
//           showPrice={true}
//           priceFinal={89.99}
//           priceOriginal={179.99}
//           pricingMessage="$179.99 List Price"
//           primaryCtaButtonType="primary"
//           primaryCtaLabel="Build Your Kit"
//           primarySlogan="When you build a Starter Kit"
//           productColorValues={['black']}
//           productImagePath="/images/silos/kss/kss.jpg"
//           productName="K-Supreme® SMART"
//           secondarySlogan="3 Sleek Colors 4 Brew Sizes"
//           showProductColors
//         />,
//         <ProductCard
//           key="1"
//           colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]}
//           hasCTA
//           hasLearMoreLink
//           learnMoreLabel="See Full Page"
//           learnMoreLinkTo="#"
//           showPrice={true}
//           priceFinal={99.99}
//           priceOriginal={199.99}
//           pricingMessage="$219.99 List Price"
//           primaryCtaButtonType="primary"
//           primaryCtaLabel="Build your kit"
//           primarySlogan="When you build a Starter Kit"
//           productColorValues={['black']}
//           productImagePath="/images/silos/KSPS/KSPS+award.jpg"
//           productName="K-Supreme® SMART Plus"
//           secondarySlogan="Stainless Steel Metal Wrap, 5 Brew Sizes"
//           showProductColors
//         />,
//         <ProductCard
//           key="2"
//           colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]}
//           hasCTA
//           hasLearMoreLink
//           learnMoreLabel="See Full Page"
//           learnMoreLinkTo="#"
//           showPrice={true}
//           priceFinal={99.99}
//           priceOriginal={199.99}
//           pricingMessage="$199.99 List Price"
//           primaryCtaButtonType="primary"
//           primaryCtaLabel="Build your kit"
//           primarySlogan="When you build a Starter Kit"
//           productColorValues={['black']}
//           productImagePath="/product-images/kcs/kcs-0.png"
//           productName="K-Café® SMART"
//           secondarySlogan="Fast & easy coffeehouse drinks, built-in milk frother"
//           showProductColors/>
//       ]}
//      navPosition="bottom"/>
//
//      <section>
//        <ExpandCollapse
//          expanderStyle="button"
//          content={<KTable rows={sampleTable} columnWidths={["33%", "33%", "33%"]} ensureProperGrid={false}/>}
//          expandText={"Compare"}
//        />
//      </section>
//
//     <ContentItem
//       backGroundType="solid-color"
//       backgroundColor="dark-roast"
//       backgroundUrlPath=""
//       ctaLabel="Build Your Kit"
//       ctaLinkTo=""
//       ctaMode="button"
//       hasCTA={true}
//       hasTermsConditions={true}
//       heightMethod="one-viewport"
//       heightOverride={{
//         minHeight : "50vh",
//         maxHeight : "120vh",
//         overallHeight : "auto"
//       }}
//       mainMessage="Get your SMART Brewer for up to 55% off"
//       mainMessageColor="white"
//       mainTextHasShadow
//       messageTextAlignment="text-center"
//       mainMessageSize="Large"
//       secondaryMessage="Our Keurig® Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping."
//       secondaryMessageWeight="heavy-weight"
//       secondaryMessageSize="Medium"
//       sectionType="content-front-and-center"
//       // termsAndConditionsCtaLabel="See details."
//       // termsAndConditionsText="Cancelation fees & restrictions apply."
//       component="content"
//       contrastBackground={"none"}
//       hasFocalImage={false}
//       sectionName=""
//       flag={{
//         useFlag : true,
//         flagLabel :"Keurig.com Exclusive Pricing",
//         flagStyle : "square",
//         flagBackgroundColor : "medium-roast",
//         flagTextColor : "white"
//       }}
//     />
//     <ContentItem
//       backGroundType="image"
//       backgroundColor="sepia"
//       backgroundUrlPath="/images/lifestyle/various-drinks.jpg"
//       contrastBackground="dark"
//       sectionAppearance="inset-beveled"
//       ctaLabel="Call to action"
//       ctaLinkTo="www.google.com"
//       hasCTA={false}
//       heightMethod="fit-content"
//       heightOverride={{
//         minHeight : "60vh",
//         maxHeight : "80vh",
//         overallHeight : "auto"
//       }}
//       mainMessage="Delicious coffeehouse recipes in the palm of your hand"
//       mainMessageColor="#3B2B2F"
//       mainMessageSize="Small"
//       mainMessageWeight="heavy-weight"
//       messageTextAlignment="text-left"
//       secondaryMessage="Explore over 60 indulgent recipes in the Keurig® app with Café Creations. In minutes, you'll be enjoying an extra-foamy cappuccino or caramel latte precisely how you love them. "
//       secondaryMessageWeight="regular-weight"
//       secondaryMessageSize="Small"
//       sectionType="content-left"
//       component="content"
//       hasFocalImage={false}
//       mainTextHasShadow={false}
//       sectionName=""
//     />
//     <ContentItem
//       backGroundType="image"
//       backgroundColor="sepia"
//       backgroundUrlPath="/images/lifestyle/delivery.jpg"
//       contrastBackground="dark"
//       sectionAppearance="inset-beveled"
//       ctaLabel="Call to action"
//       ctaLinkTo="www.google.com"
//       hasCTA={false}
//       heightMethod="fit-content"
//       mainMessage="Coffee how you want it, only when you need it with Smart Delivery."
//       mainMessageColor="#3B2B2F"
//       mainMessageSize="Small"
//       mainMessageWeight="heavy-weight"
//       messageTextAlignment="text-left"
//       secondaryMessage="BrewID™ recognizes your K-Cup® pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. "
//       secondaryMessageWeight="regular-weight"
//       secondaryMessageSize="Small"
//       sectionType="content-right"
//       component="content"
//       hasFocalImage={false}
//       mainTextHasShadow={false}
//       sectionName=""
//     />
//     <ContentItem
//       backGroundType="image"
//       backgroundUrlPath="/images/lifestyle/making-drinks.jpg"
//       calloutPosition="left-top"
//       ctaLabel="This is a CTA"
//       ctaLinkTo="&quot;&quot;"
//       heightOverride={{
//        minHeight : "70vh",
//        maxHeight : "100vh",
//        overallHeight : "100%"
//       }}
//       mainMessage="“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” — Leah R ⭑ ⭑ ⭑ ⭑ ⭑"
//       mainMessageColor="#473036"
//       messageAsCallout
//       messageTextAlignment="text-left"
//       secondaryMessage=""
//       sectionType="content-front-and-center"
//       // termsAndConditionsCtaLabel="Learn More"
//       // termsAndConditionsText="Terms & Conditions apply"
//       backgroundColor="sepia"
//       component="content"
//       contrastBackground="none"
//       hasCTA={false}
//       hasFocalImage={false}
//       heightMethod="fit-content"
//       mainTextHasShadow={false}
//       sectionName=""/>
//     <ContentItem
//       backGroundType="solid-color"
//       backgroundColor="dark-roast"
//       backgroundUrlPath=""
//       component="content"
//       contrastBackground="none"
//       ctaLabel=""
//       ctaLinkTo=""
//       ctaMode="button"
//       heightMethod="fit-content"
//       mainMessage="Wi-Fi® enabled coffee maker works with Alexa and Google Home. "
//       mainMessageColor="white"
//       messageTextAlignment="text-center"
//       secondaryMessage=""
//       secondaryMessageWeight="heavy-weight"
//       sectionName="wifi"
//       sectionType="content-front-and-center"
//       hasCTA={false}
//       hasFocalImage={false}
//       mainTextHasShadow={false}
//     />
//     <Kcarousel
//       carouselType="slider"
//       component="carousel"
//       contentArea={{
//         contentElement: <ContentItem backGroundType="solid-color" backgroundColor="latte" backgroundUrlPath="" component="content" contrastBackground="none" ctaLabel="Click here for a test" customClasses="" heightMethod="stretch-to-parent" mainMessage="The Best" mainMessageColor="#473036" mainMessageSize="Small" secondaryMessage="This is a test, only a test. In the event of a real coffee emergency..." secondaryMessageSize="Small" sectionName="" sectionType="content-front-and-center" hasCTA={false} hasFocalImage={false} mainTextHasShadow={false}/>,
//         contentPosition: 'left',
//         useContentArea: true
//       }}
//       keepNavButtons
//       navLabels={[
//         'First Section',
//         'Second Section',
//         'Third Section'
//       ]}
//       navPosition="top"
//       navStyle="text"
//       slides={[
//         <ContentItem
//           key={0}
//           backGroundType="image"
//           backgroundColor="dark-roast"
//           backgroundUrlPath="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//           component="content"
//           contrastBackground="dark"
//           ctaLabel="Click here for a test"
//           customClasses=""
//           hasCTA
//           heightMethod="stretch-to-parent"
//           mainMessage="The SMART way to have the perfect cup"
//           mainMessageColor="white"
//           mainMessageSize="Medium"
//           mainTextHasShadow
//           secondaryMessage="This is a test, only a test. In the event of a real coffee emergency..."
//           secondaryMessageSize="Medium"
//           sectionName=""
//           sectionType="content-left"
//           hasFocalImage={false}/>,
//         <ContentItem
//           key={1}
//           backGroundType="movie"
//           backgroundColor="dark-roast"
//           backgroundUrlPath="/video/sample_coffee_general.mp4"
//           component="content"
//           contrastBackground="dark"
//           ctaLabel=""
//           customClasses=""
//           heightMethod="stretch-to-parent"
//           mainMessage="The SMART way to have the perfect cup, at any time, anywhere"
//           mainMessageColor="white"
//           mainMessageSize="Medium"
//           mainTextHasShadow secondaryMessage=""
//           secondaryMessageSize="Small"
//           sectionName=""
//           sectionType="content-front-and-center"
//           hasFocalImage={false}
//           hasCTA={false}
//         />,
//         <ContentItem key={2} hasCTA={false} backGroundType="movie" backgroundColor="dark-roast" backgroundUrlPath="https://www.w3schools.com/howto/rain.mp4" component="content" contrastBackground="dark" ctaLabel="" customClasses="" heightMethod="stretch-to-parent" mainMessage="An example slide" mainMessageColor="white" mainMessageSize="Small" mainTextHasShadow secondaryMessage="This is an example showing different content components inside carousel, but any array of ReactElement[] will be rendered" secondaryMessageSize="Small" sectionName="t3" sectionType="content-front-and-center" hasFocalImage={false}/>
//       ]}
//
//      itemsPerSlide={1}/>
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '3rem'
//       }}
//     >
//       <ProductCard
//         colorVariants={[
//           {
//             inStock: true,
//             variantName: 'Black Stainless Steel'
//           },
//           {
//             inStock: true,
//             variantName: 'Stainless Steel'
//           },
//           {
//             inStock: false,
//             variantName: 'White'
//           }
//         ]}
//         ctaColorOverride="#947259"
//         hasCTA
//         learnMoreLabel=""
//         learnMoreLinkTo="#"
//         priceFinal={0}
//         priceOriginal={0}
//         pricingMessage="Throw away the scale and measuring spoon."
//         primaryCtaButtonType="primary"
//         primaryCtaLabel="Your Match"
//         primarySlogan="Expert Brews for Everyone"
//         productColorValues={[]}
//         productImagePath="/editorial/brew_style_1.png"
//         productName=""
//         secondarySlogan=""
//         showPrice={false}
//         showProductColors={false}
//       />
//
//       <ProductCard
//         colorVariants={[
//           {
//             inStock: true,
//             variantName: 'Black Stainless Steel'
//           },
//           {
//             inStock: true,
//             variantName: 'Stainless Steel'
//           },
//           {
//             inStock: false,
//             variantName: 'White'
//           }
//         ]}
//         ctaColorOverride="#947259"
//         hasCTA
//         learnMoreLabel=""
//         learnMoreLinkTo="#"
//         priceFinal={0}
//         priceOriginal={0}
//         pricingMessage="Matches your kitchen, exceeds expectations."
//         primaryCtaButtonType="primary"
//         primaryCtaLabel="Your Match"
//         primarySlogan="Rich Taste Meets Sophisticated Styling"
//         productColorValues={[
//           'black',
//           'gray',
//           'white'
//         ]}
//         productImagePath="/editorial/brew_style_2.png"
//         productName=""
//         secondarySlogan=""
//         showPrice={false}
//         showProductColors={false}
//       />
//       <ProductCard
//         colorVariants={[]}
//         ctaColorOverride="#947259"
//         hasCTA
//         learnMoreLabel=""
//         learnMoreLinkTo="#"
//         priceFinal={0}
//         priceOriginal={0}
//         pricingMessage="Under 5 ingredients, no special skills required."
//         primaryCtaButtonType="primary"
//         primaryCtaLabel="Your Match"
//         primarySlogan="Café Drinks Made Easy"
//         productColorValues={[]}
//         productImagePath="/editorial/brew_style_2.png"
//         productName=""
//         secondarySlogan=""
//         showPrice={false}
//         showProductColors={false}
//       />
//     </div>
//
//     <Kcarousel
//       containerBackgroundColor="#EBE7E3"
//       carouselType="slider"
//       component="carousel"
//       itemsPerSlide={5}
//       navPosition="bottom"
//       slides={[
//         <div key="0" className="images-container"><img alt="" className="image-item" src="/logos/the-spoon.png"/><img alt="" className="image-item" src="/logos/cnn.png"/><img alt="" className="image-item" src="/logos/mens-health.png"/><img alt="" className="image-item" src="/logos/apartment-therapy.png"/><img alt="" className="image-item" src="/logos/usa-today.png"/></div>
//       ]}
//
//      keepNavButtons={false}
//      navStyle="dots"
//     />
//
//     <SEO_item
//       mainBody="Forget the traffic. The line. The expense. Keurig® SMART coffee makers with BrewID™ make it simple to enjoy rich, full-flavored coffee and coffeehouse beverages in the comfort of your home — without specialized skills or equipment. "
//       mainTitle="Meet Our Family of SMART Coffee Makers"
//       sections={[
//         {
//           body: 'Select “Signature Brew” and your brewer will automatically adjust to the settings recommended by the coffee roasting expert who created your chosen variety. Prefer more control? Fine-tune your cup with a wide range of temperature, strength, and size settings using brewer controls or the Keurig® app.  \n\nThe app is also where you can explore Café Creations, a curated menu of simple coffeehouse recipes for the K-Café SMART Coffee Maker. When you find one you like, Barista Mode™ will guide you with easy, step-by-step directions. Before you know it, you’ll be sipping a delicious coffeehouse beverage.  ',
//           title: 'Connecting your coffee maker to Wi-Fi® unlocks the power of BrewID™, our advanced brewing technology that recognizes your genuine K-Cup pod.  '
//         },
//         {
//           body: 'Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  ',
//           title: 'Connect to convenience '
//         },
//         {
//           body: 'Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  ',
//           title: 'Connect to convenience '
//         },
//         {
//           body: 'Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  ',
//           title: 'Connect to convenience '
//         }
//       ]}
//       showAsCollapsed
//     />
//
//   </div>
// )
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
var __webpack_exports__ = __webpack_require__.X(0, [721,15,958,534,225], () => (__webpack_exec__(7866)));
module.exports = __webpack_exports__;

})();