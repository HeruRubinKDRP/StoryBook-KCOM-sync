"use strict";
(() => {
var exports = {};
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 1941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SMART_Family＿Content)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Carousel/Kcarousel.tsx + 1 modules
var Kcarousel = __webpack_require__(7015);
// EXTERNAL MODULE: ./src/components/ContentComponents/ContentComponent.tsx
var ContentComponent = __webpack_require__(7721);
// EXTERNAL MODULE: ./src/components/ContentComponents/ProductCard/ProductCard.tsx + 1 modules
var ProductCard = __webpack_require__(9958);
// EXTERNAL MODULE: ./src/components/ExpandCollapse/expand-collapse.tsx
var expand_collapse = __webpack_require__(5825);
// EXTERNAL MODULE: ./src/components/PageNav/PageNav.tsx
var PageNav = __webpack_require__(8534);
// EXTERNAL MODULE: ./src/components/Graphic/Graphic.tsx + 1 modules
var Graphic = __webpack_require__(408);
;// CONCATENATED MODULE: ./src/components/Table/KTable.tsx



const KTable = (props)=>{
    (0,external_react_.useEffect)(()=>{
        let longestCells = 0;
        for(let i = 0; i < props.rows.length; i++){
            if (props.rows[i].rowCells.length > longestCells) {
                longestCells = props.rows[i].rowCells.length;
            }
        }
        // if dev has entered in a row with less cells than the rest, we will add in some blank cells
        for(let i1 = 0; i1 < props.rows.length; i1++){
            if (props.ensureProperGrid && props.rows[i1].rowCells.length < longestCells) {
                let blankCellsToAdd = longestCells - props.rows[i1].rowCells.length;
                for(let j = 0; j < blankCellsToAdd; j++){
                    props.rows[i1].rowCells.push({
                        cellLabel: "",
                        cellType: "details"
                    });
                }
            }
        }
    }, [
        props.rows,
        props.ensureProperGrid
    ]);
    const getRows = ()=>{
        let rows = [];
        for(let i = 0; i < props.rows.length; i++){
            let cells = [];
            for(let j = 0; j < props.rows[i].rowCells.length; j++){
                //if dev has entered in some column widths we will add here, or just divide them up evenly
                const getColumnWidth = ()=>{
                    if (props.rows[i].rowCells[j].cellType == "full-row-header") {
                        return "100%";
                    }
                    if (!props.columnWidths) {
                        return `calc(100% / ${props.rows[i].rowCells.length})`;
                    }
                    return props.columnWidths[j];
                };
                const getHeader = ()=>{
                    if (props.rows[i].rowCells[j].cellHeader) {
                        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                            className: "cell-header",
                            children: props.rows[i].rowCells[j].cellHeader
                        });
                    }
                };
                const getIcon = ()=>{
                    if (!props.rows[i].rowCells[j].cellIcon) {
                        return;
                    }
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(Graphic/* Graphic */.z, {
                        iconSize: props.rows[i].rowCells[j].cellIconSize,
                        graphicName: props.rows[i].rowCells[j].cellIcon,
                        classesOverride: props.rows[i].rowCells[j].cellIconClasses
                    });
                };
                const getParagraph = ()=>{
                    if (!props.rows[i].rowCells[j].cellParagraph) {
                        return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
                    }
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                        children: props.rows[i].rowCells[j].cellParagraph
                    });
                };
                cells.push(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `cell ${props.rows[i].rowCells[j].cellType}`,
                    style: {
                        width: getColumnWidth()
                    },
                    children: [
                        getIcon(),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-area",
                            children: [
                                getHeader(),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    style: {
                                        backgroundColor: props.rows[i].fontColorOverride
                                    },
                                    className: "before"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                    style: {
                                        color: props.rows[i].fontColorOverride
                                    },
                                    children: props.rows[i].rowCells[j].cellLabel
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    style: {
                                        backgroundColor: props.rows[i].fontColorOverride
                                    },
                                    className: "after"
                                }),
                                getParagraph()
                            ]
                        })
                    ]
                }, "cell" + j));
            }
            //CREATE ROW ITEM, push into list
            const rowWidth = ()=>{
                if (props.ensureProperGrid) {
                    return "fit-content";
                }
                return "100%";
            };
            rows.push(/*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: `row ${props.rows[i].rowType}`,
                style: {
                    backgroundColor: props.rows[i].rowBackgroundColor,
                    color: props.rows[i].fontColorOverride,
                    width: rowWidth()
                },
                children: cells
            }, i + "row"));
        }
        return rows;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "k-table-container",
        children: getRows()
    });
};

;// CONCATENATED MODULE: ./src/pages/SMART-Family/index_old.tsx








function SMART_Family＿Content() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "smart-family",
        children: [
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
                        label: "TESTIMONIALS",
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
                slides: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "images-container logos",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/the-spoon.png"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/cnn.png"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/tikTok.png"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/mens-health.png"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/apartment-therapy.png"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                alt: "",
                                className: "image-item",
                                src: "/logos/usa-today.png"
                            })
                        ]
                    }, "0")
                ],
                keepNavButtons: false,
                navStyle: "dots"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "solid-color",
                backgroundColor: "latte",
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
                backGroundType: "movie",
                backgroundColor: "latte70",
                backgroundUrlPath: "/video/sample_coffee_general.mp4",
                contrastBackground: "dark",
                ctaLabel: "Call to action",
                ctaLinkTo: "www.google.com",
                hasCTA: false,
                hasTermsConditions: false,
                heightMethod: "fit-content",
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
                mainMessage: "3 ways to make amazing coffee with our most advanced brewing technology",
                mainMessageColor: "#473036",
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
                                learnMoreLabel: "Full Page",
                                learnMoreLinkTo: "#",
                                priceFinal: 89.99,
                                priceOriginal: 139.99,
                                primaryCtaButtonType: "primary",
                                primaryCtaLabel: "Build your kit",
                                primarySlogan: "When you build a Starter Kit",
                                productColorValues: [
                                    "black"
                                ],
                                productImagePath: "/images/silos/KSPS/ksps.png",
                                productName: "K-Supreme\xae SMART Plus",
                                secondarySlogan: "Stainless Steel Metal Wrap, 5 Brew Sizes",
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
                                learnMoreLabel: "Full Page",
                                learnMoreLinkTo: "#",
                                priceFinal: 99.99,
                                priceOriginal: 199.99,
                                primaryCtaButtonType: "primary",
                                primaryCtaLabel: "Build your kit",
                                primarySlogan: "When you build a Starter Kit",
                                productColorValues: [
                                    "black"
                                ],
                                productImagePath: "/images/silos/KCS_AltImages_KCOM-01.png",
                                productName: "K-Caf\xe9\xae SMART",
                                secondarySlogan: "Fast & easy coffeehouse drinks, built-in milk frother",
                                showPrice: true,
                                showProductColors: true
                            }, "1")
                        ]
                    })
                ],
                navPosition: "bottom"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(expand_collapse/* ExpandCollapse */.R, {
                classes: "comparison-chart",
                expanderStyle: "button",
                isExpandedText: "View Less",
                expandText: "Compare",
                content: /*#__PURE__*/ (0,jsx_runtime_.jsx)(KTable, {
                    columnWidths: [
                        "33%",
                        "33%",
                        "33%"
                    ],
                    rows: [
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "K-Supreme\xae SMART",
                                    cellType: "header"
                                },
                                {
                                    cellLabel: "K-Supreme Plus\xae SMART",
                                    cellType: "header"
                                },
                                {
                                    cellLabel: "K-Caf\xe9\xae SMART",
                                    cellType: "header"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "Personalize your cup to perfection",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Personalize your cup to perfection + Award-winning design for your home",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Personalize your cup to perfection + Coffeehouse beverages just the way you like",
                                    cellType: "details"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            fontColorOverride: "#473036",
                            rowBackgroundColor: "#EADECF",
                            rowCells: [
                                {
                                    cellLabel: "All SMART Brewers Include",
                                    cellType: "full-row-header"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            fontColorOverride: "#473036",
                            rowBackgroundColor: "#EADECF",
                            rowCells: [
                                {
                                    cellLabel: "BrewID™",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Advanced features when connected to Keurig\xae App",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Signature Brew Settings",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Exclusive Coffeehouse Recipes in Keurig\xae App",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "SMART Delivery Enabled ",
                                    cellType: "details"
                                }
                            ],
                            rowType: "stacked"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "Individual Brewer Features ",
                                    cellType: "full-row-header"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "5 Strength Settings and  6 Temperature Settings",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Multistream™ Technology",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Iced Setting",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Up to 10 Custom Favorite Settings",
                                    cellType: "details"
                                }
                            ],
                            rowType: "stacked"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "Color/Finish",
                                    cellType: "full-row-header"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "Black, Gray, White",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Premium Metal Wrap Black Stainless, Stainless",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "Black",
                                    cellType: "details"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "Brew Sizes",
                                    cellType: "full-row-header"
                                }
                            ],
                            rowType: "standard"
                        },
                        {
                            rowBackgroundColor: "#EBE7E3",
                            rowCells: [
                                {
                                    cellLabel: "6, 8, 10, & 12 oz",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "4, 6, 8, 10, & 12 oz",
                                    cellType: "details"
                                },
                                {
                                    cellLabel: "6, 8, 10, & 12 oz + Single and Double Shots + for caf\xe9-style beverages",
                                    cellType: "details"
                                }
                            ],
                            rowType: "standard"
                        }
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
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
                    flagLabel: "Keurig.com Exclusive Pricing",
                    flagStyle: "square",
                    flagTextColor: "white",
                    useFlag: true
                },
                hasCTA: true,
                hasTermsConditions: true,
                heightMethod: "half-viewport",
                mainMessage: "Get your SMART Brewer for up to 55% off",
                mainMessageColor: "white",
                mainMessageSize: "Large",
                mainTextHasShadow: true,
                messageTextAlignment: "text-center",
                secondaryMessage: "Our Keurig\xae Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping.",
                secondaryMessageSize: "Medium",
                secondaryMessageWeight: "heavy-weight",
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
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "movie",
                backgroundColor: "white",
                backgroundUrlPath: "/video/sample_coffee_general.mp4",
                contrastBackground: "dark",
                ctaLabel: "Call to action",
                ctaLinkTo: "www.google.com",
                hasCTA: false,
                hasTermsConditions: false,
                heightOverride: {
                    minHeight: "30rem",
                    maxHeight: "70vh",
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
                mainMessage: "“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” — Leah R ⭑ ⭑ ⭑ ⭑ ⭑",
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
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContentComponent/* ContentItem */.S, {
                backGroundType: "movie",
                backgroundColor: "white",
                backgroundUrlPath: "/video/sample_coffee_general.mp4",
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
                sectionType: "content-right",
                component: "content",
                hasFocalImage: false,
                mainTextHasShadow: false,
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
                mainMessage: "FIND YOUR MATCH",
                mainMessageColor: "#3B2B2F",
                mainMessageSize: "Tiny",
                messageTextAlignment: "text-center",
                secondaryMessage: "",
                secondaryMessageWeight: "heavy-weight",
                sectionName: "",
                sectionType: "content-front-and-center",
                customClasses: "featured"
            })
        ]
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

/***/ 8445:
/***/ ((module) => {

module.exports = require("interweave");

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
var __webpack_exports__ = __webpack_require__.X(0, [721,15,958,534], () => (__webpack_exec__(1941)));
module.exports = __webpack_exports__;

})();