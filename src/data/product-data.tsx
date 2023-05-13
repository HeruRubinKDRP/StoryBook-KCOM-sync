import {cardType} from "../components/ContentComponents/MultiCardContainer/MultiCardPresenter";
import {
  iSimpleHighlightCard,
  SimpleHighlightCard
} from "../components/ContentComponents/SimpleHighlightCard/SimpleHighlightCard";
import {filterableCardT} from "../components/FilterableCardsArea/FilterableCardsArea";
import {buttonType} from "../components/Kbutton/KButton";
import {iPageNav} from "../components/PageNav/PageNav";
import {featureItemT} from "../components/ProductDetails/FeaturesList/features-list";
import {Itoggle, toggleItem} from "../components/Toggle/Toggle";
import {productVariantColor} from "../components/colorPicker/colorPicker";
import {iContentItem} from "../components/ContentComponents/ContentComponent";
import {iProductInfoCardProps} from "../components/CLP/SimpleCard/SimpleCard";

export const buttonTypesList : buttonType[] =[
  "primary",
  "primary-light",
  "primary-cart-action",
  "secondary",
  "action",
  "text-icon-noBG",
  "link-internal",
  "link-external",
  "round-no-label"
]

export const brewerLibrary : iProductInfoCardProps[] =[
  {
    productType: 'brewer',
    image: "./brewer-images/KSPS.png",
    brand: "Keurig",
    name : "K-Supreme Plus® SMART Single Serve Coffee Maker",
    siloImagePath : "https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000365542_swatch?$pdp_general$&fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72&extend=0,0,0,0",
    productFeatures : [
      {
        featureLabel : "BrewID™",
        featureIcon : "brew-id",
        showChevron : false,
        featureDetails : "BrewID™ allows you to save your favorite settings to create your perfect cup every time."
      },
      {
        featureLabel : "Connected Convenience",
        featureIcon : "icon-wifi",
        showChevron : false,
        featureDetails : "Brew a cup from anywhere with the Keurig® app."
      },
      {
        featureLabel : "Barista Mode™",
        featureIcon : "barista-mode",
        showChevron : false,
        featureDetails : "Guided coffee house style recipes in the Keurig® app."
      },
      {
        featureLabel : "SMART Delivery",
        featureIcon : "SMART-logo",
        showChevron : false,
        featureDetails : "Get beverages delivered just enough pods just in time."
      },
      {
        featureLabel : "Complete Customization",
        featureIcon : "icon-settings",
        showChevron : false,
        featureDetails : "Customize your cup with 3 strength and 3 temperature options, or make it iced."
      },
      {
        featureLabel : "MultiStream™ Technology",
        featureIcon : "multistream",
        showChevron : false,
        featureDetails : "Extracts more flavor and aroma* in every brew."
      },
      {
        featureLabel : "4 Brew Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "6, 8, 10, and 12 oz."
      },
      {
        featureLabel : "66oz Dual-Position Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "Choose the perfect position for optimal counter space. Removable for easy refilling."
      },
      {
        featureLabel : "Brew Over Ice",
        featureIcon : "icon-iced-coffee",
        showChevron : false,
        featureDetails : "Brew over ice with bold, full-flavored iced coffee."
      }
    ],
    prices : [
      {
        price : 89.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 89.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },
  {
    productType: 'brewer',
    image: "./brewer-images/k-cafe.png",
    brand: "Keurig",
    name : "K-Café® SMART Single Serve Coffee Maker",
    prices : [
      {
        price : 124.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 124.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-supreme.png",
    brand: "Keurig",
    name : "K-Supreme® SMART Single Serve Coffee Maker",
    prices : [
      {
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-slim1.png",
    brand: "Keurig",
    name : "K-Slim® Single Serve Coffee Maker",
    prices : [
      {
        price : 74.99,
        inStock : true,
        variant: {quantity : 12, variantName : "Black"}
      },{
        price : 74.99,
        inStock : true,
        variant: {quantity : 12, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-elite.png",
    brand: "Keurig",
    name : "Keurig® K-Elite® Single Serve Coffee Maker",
    prices : [
      {
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-mini.png",
    brand: "Keurig",
    name : "K-Mini® Single Serve Coffee Maker",
    prices : [
      {
        price : 89.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 0,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-select.png",
    brand: "Keurig",
    name : "Keurig® K-Select® Coffee Maker",
    prices : [
      {
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-mini-plus.png",
    brand: "Keurig",
    name : "K-Mini Plus® Single Serve Coffee Maker",
    prices : [
      {
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 0,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-duo.png",
    brand: "Keurig",
    name : "K-Duo™ Single Serve & Carafe Coffee Maker",
    prices : [
      {
        price : 94.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 94.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-duo-special.png",
    brand: "Keurig",
    name : "K-Duo® Special Edition Single Serve & Carafe Coffee Maker",
    prices : [
      {
        price : 49.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 49.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-classic.png",
    brand: "Keurig",
    name : "Keurig® K-Classic® Coffee Maker",
    prices : [
      {
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 74.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-duo-plus.png",
    brand: "Keurig",
    name : "K-Duo Plus™ Single Serve & Carafe Coffee Maker",
    prices : [
      {
        price : 149.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 149.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-slim-iced.png",
    brand: "Keurig",
    name : "K-Slim + ICED™ Single Serve Coffee Maker",
    prices : [
      {
        price : 49.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 49.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  },{
    productType: 'brewer',
    image: "./brewer-images/k-express.png",
    brand: "Keurig",
    name : "K-Express™ Single Serve Coffee Maker",
    prices : [
      {
        price : 49.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Black"}
      },{
        price : 49.99,
        inStock : true,
        variant: {quantity : 1, variantName : "Grey"}
      }
    ],
    ratingVisible : false,
    rating : {
      totalNumberOfStars : 5,
      totalNumberOfReviews : 1023,
      ratingNumber : 4.25
    },
    onClick: () => console.log('Add to Cart clicked'),
  }
]


const stepByStepData: featureItemT[] = [
  {
    featureName: "",
    featureDetail: "Brew your favorite Keurig® K-Cup® pod",
    iconName: "pod-and-shot",
    featureStyle: "everything",
    fadeOutOnScrollOut: false
  },
  {
    featureName: "",
    featureDetail: "FROTH any milk of your choosing using the hot and cold milk frother",
    iconName: "milk-frother",
    featureStyle: "everything",
    fadeOutOnScrollOut: false
  },
  {
    featureName: "",
    featureDetail: "ENJOY your Keurig® 3-step specialty beverage",
    iconName: "specialty-beverage",
    featureStyle: "everything",
    fadeOutOnScrollOut: false
  },
]

export const brewerFeatures: featureItemT[] = [
  {
    featureName: "Hot & Cold Milk Frother",
    featureDetail: "Multiple froth settings let you use fresh milk or any dairy alternative like oat, almond or soy",
    iconName: "milk-frother",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  },
  {
    featureName: "Multistream Technology",
    featureDetail: "5 Strengths, 6 Temperatures, 5 cup sizes, brew over ice settings and coffee shots for specialty drinks",
    iconName: "multistream",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  },
  {
    featureName: "Ultimate Customization",
    featureDetail: "5 Strengths, 6 Temperatures, 5 cup sizes, brew over ice settings and coffee shots for specialty drinks",
    iconName: "ultimate-customization",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  }
]

export const SMARTfeaturesList: featureItemT[] = [
  {
    featureName: "BrewID™",
    featureDetail: "Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app",
    iconName: "brew-id",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  },
  {
    featureName: "Barista Mode™",
    featureDetail: "Get easy, step-by-step directions in the Keurig® app to make lattes, cappucinos, or your favorite café creations",
    iconName: "barista-mode",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  },
  {
    featureName: "Connected Convenience",
    featureDetail: "Brew from anywhere using the Keurig® app or Alexa™ and Google Home™, get personalized recommendations, manage your favorites",
    iconName: "icon-wifi",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  },
  {
    featureName: "SMART Auto-Delivery",
    featureDetail: "Automatically get more coffee just when you need it",
    iconName: "delivery-truck",
    featureStyle: "everything",
    fadeOutOnScrollOut: true
  }
]

export const stepByStep: featureItemT[] = [
  {
    featureName: "BREW your favorite Keurig® K-Cup® pod",
    featureDetail: "Get easy, step-by-step directions in the Keurig® app to make lattes, cappucinos, or your favorite café creations",
    iconName: "pod-and-shot",
    featureStyle: "everything",
    fadeOutOnScrollOut: false
  },
]

export const KSS_Variants : productVariantColor[] = [
  {
    inStock : true,
    colorName : "Black",
    colorValue : "#000000",
  },
  {
    inStock : true,
    colorName : "Stainless Steel",
    colorValue : "#CECECE",
  },
  {
    inStock : true,
    colorName : "White",
    colorValue : "#FFFFFF",
  }
]

export const KSS_OutOfStock : productVariantColor[] = [
  {
    inStock : false,
    colorName : "Black",
    colorValue : "#000000",
  },
  {
    inStock : false,
    colorName : "Stainless Steel",
    colorValue : "#CECECE",
  },
  {
    inStock : false,
    colorName : "White",
    colorValue : "#FFFFFF",
  }
]

//selection options for K-Select
export const KSupreme_ProductVariants : toggleItem[]=[
  {
    label : "K-Supreme® SMART",
  },
  {
    label : "K-Supreme® SMART Plus",
  }
]

export const KSS_OOS : productVariantColor[] = [
  {
    colorName: 'Black',
    colorValue: '#000000',
    inStock: false
  },
  {
    colorName: 'Stainless Steel',
    colorValue: '#CECECE',
    inStock: false
  },
  {
    colorName: 'White',
    colorValue: '#FFFFFF',
    inStock: false
  }
]

export const KSS_IN : productVariantColor[] = [
  {
    colorName: 'Black',
    colorValue: '#000000',
    inStock: true
  },
  {
    colorName: 'Stainless Steel',
    colorValue: '#CECECE',
    inStock: true
  },
  {
    colorName: 'White',
    colorValue: '#FFFFFF',
    inStock: true
  }
]
export let contentTestWF: iContentItem[] = [
  {
    component:"content",
    sectionName : "",
    hasFocalImage: false,
    sectionType: "content-front-and-center",
    mainMessage: "The SMART way to have the perfect cup, at any time, anywhere",
    mainMessageColor: "white",
    mainMessageSize: "Medium",
    messageAlignment : "center",
    secondaryMessage: "",
    secondaryMessageSize: "Small",
    backGroundType: "movie",
    backgroundUrlPath: "/video/sample_coffee_general.mp4",
    backgroundColor: "dark-roast",
    mainTextHasShadow: true,
    heightMethod: "stretch-to-parent",
    contrastBackground: "dark",
    hasCTA: true,
    ctaLabel: "Test test",
    ctaMode : "button",
    ctaButtonType : "primary-light",
    ctaLinkTo: "",
  },
  {
    component:"content",
    sectionName : "",
    hasFocalImage: false,
    sectionType: "content-front-and-center",
    mainMessage: "Get your SMART Coffee Maker for 50% off",
    mainMessageColor: "white",
    mainMessageSize: "Medium",
    messageAlignment : "center",
    secondaryMessage: "Plus, get SMART Auto-Delivery with up to 96 free pods",
    secondaryMessageSize: "Small",
    backGroundType: "movie",
    backgroundUrlPath: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    backgroundColor: "dark-roast",
    mainTextHasShadow: true,
    heightMethod: "stretch-to-parent",
    contrastBackground: "dark",
    hasCTA: true,
    ctaLabel: "Get Started",
    ctaLinkTo: "",
    ctaButtonType : "primary-light",
    ctaMode : "button",

  },
  {
    component:"content",
    sectionName : "",
    hasFocalImage: false,
    sectionType: "content-front-and-center",
    mainMessage: "Test content 3",
    messageAlignment : "center",
    mainMessageColor: "white",
    mainMessageSize: "Medium",
    secondaryMessage: "Plus, get SMART Auto-Delivery with up to 96 free pods",
    secondaryMessageSize: "Small",
    backGroundType: "image",
    backgroundUrlPath: "https://images.unsplash.com/photo-1609533707860-81048ef25438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    backgroundColor: "dark-roast",
    mainTextHasShadow: true,
    heightMethod: "stretch-to-parent",
    contrastBackground: "dark",
    hasCTA: true,
    ctaLabel: "Get Started",
    ctaMode : "button",
    ctaButtonType : "primary-light",
    ctaLinkTo: "",
  },
  {
    component:"content",
    sectionName : "",
    hasFocalImage: false,
    sectionType: "content-front-and-center",
    mainMessage: "Test content 4",
    mainMessageColor: "white",
    messageAlignment : "center",
    mainMessageSize: "Medium",
    secondaryMessage: "some other ideas",
    secondaryMessageSize: "Small",
    backGroundType: "image",
    backgroundUrlPath: "https://images.unsplash.com/photo-1593543294918-ca3634e04cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    backgroundColor: "dark-roast",
    mainTextHasShadow: true,
    heightMethod: "stretch-to-parent",
    contrastBackground: "dark",
    hasCTA: true,
    ctaLabel: "Get Started",
    ctaLinkTo: "",
    ctaButtonType : "primary",

  },
  {
    component:"content",
    sectionName : "",
    hasFocalImage: false,
    sectionType: "content-front-and-center",
    mainMessage: "Test content 4",
    mainMessageColor: "white",
    messageAlignment : "center",
    mainMessageSize: "Medium",
    secondaryMessage: "some other ideas",
    secondaryMessageSize: "Small",
    backGroundType: "solid-color",
    backgroundUrlPath: "",
    backgroundColor: "dark-roast",
    mainTextHasShadow: true,
    heightMethod: "stretch-to-parent",
    contrastBackground: "dark",
    hasCTA: true,
    ctaMode : "entire-tile",
    ctaLabel: "Special deal",
    ctaLinkTo: "",
    ctaButtonType : "primary",
  },
  {
    component:"content",
    sectionName : "",
    hasFocalImage: false,
    sectionType: "content-front-and-center",
    mainMessage: "Test content 5",
    mainMessageColor: "white",
    mainMessageSize: "Medium",
    messageAlignment : "center",
    secondaryMessage: "some other ideas",
    secondaryMessageSize: "Small",
    backGroundType: "solid-color",
    backgroundUrlPath: "",
    backgroundColor: "dark-roast",
    mainTextHasShadow: true,
    heightMethod: "stretch-to-parent",
    contrastBackground: "dark",
    hasCTA: true,
    ctaMode : "entire-tile",
    ctaLabel: "Special deal",
    ctaLinkTo: "",
    ctaButtonType : "primary-light",
  }
];

export const multiBoxExampleData : iSimpleHighlightCard[]=[

  {
    title: "Easy & Fresh Coffee",
    mainMessageSize:"Large",
    subTitle :"Get your favorites delivered on your schedule",
    mainCTA :{
      label : "Get Started",
      linktTo : "",
      style : "primary",
      fullComponentCTA: false
    },
    titlePosition: "after-image",
    mainImageSize: "default-size",
    imageSizeMethod : "bg-image",
    alignment: "left",
    mainFocalImage: {
      imagePath: "recipes/hero-iced-caramel-latte.webp",
      cropStyle: "rounded-rectangle"
    }
  },
  {
    title: "Easy & Fresh Coffee",
    mainMessageSize:"Large",
    subTitle :"Get your favorites delivered on your schedule",
    mainCTA :{
      label : "Get Started",
      linktTo : "",
      style : "primary",
      fullComponentCTA: false
    },
    titlePosition: "after-image",
    mainImageSize: "default-size",
    imageSizeMethod : "bg-image",
    alignment: "left",
    mainFocalImage: {
      imagePath: "editorial/Specialty.png",
      cropStyle: "rounded-rectangle"
    }
  },{
    title: "Dessert Coffee",
    mainMessageSize:"Large",
    subTitle :"Try something new before you subscribe",
    mainCTA :{
      label : "Get Started",
      linktTo : "",
      style : "primary",
      fullComponentCTA: false
    },
    titlePosition: "after-image",
    mainImageSize: "default-size",
    imageSizeMethod : "bg-image",
    alignment: "left",
    mainFocalImage: {
      imagePath: "editorial/iced.png",
      cropStyle: "rounded-rectangle"
    }
  }

]

export const simpleCardPresenterExample  : cardType[]=[
  {
    cardType: "simple",
    simpleCardData : {
      title : "Hot",
      titlePosition : "after-image",
      mainImageSize : "default-size",
      alignment : "center",
      mainFocalImage : {
        imagePath : "editorial/hot.png",
        cropStyle : "circle"
      }
    }
  },
  {
    cardType: "simple",
    simpleCardData : {
      title : "Iced",
      titlePosition : "after-image",
      mainImageSize : "default-size",
      alignment : "center",
      mainFocalImage : {
        imagePath : "editorial/iced.png",
        cropStyle : "circle"
      }
    }
  },
  {
    cardType : "simple",
    simpleCardData : {
      title : "Specialty",
      titlePosition : "after-image",
      mainImageSize : "default-size",
      alignment : "center",
      mainFocalImage : {
        imagePath : "editorial/Specialty.png",
        cropStyle : "circle"
      }
    }
  }
]


export const imageSequence : string[]=[
  "/product-images/kcs/kcs-0.png",
  "/product-images/kcs/kcs-open.png",
  "/product-images/kcs/kcs-mug.png",
  "/product-images/kcs/scene.jpg",
  "/product-images/kcs/kcs-open.png",
  "/product-images/kcs/kcs-mug.png",
]

export const KSSimages : string[] = [
  "/product-images/kcs/kcs-0.png",
  "/product-images/kcs/kcs-open.png",
  "/product-images/kcs/kcs-mug.png",
  "/product-images/kcs/scene.jpg",
  "/product-images/kcs/kcs-open.png",
  "/product-images/kcs/kcs-mug.png",
]



export const navExample : iPageNav = {
  navName : "SMART",
  background : "dark-roast",
  collapsedLabel : "Features Menu",
  classes : "",
  links : [
    {
      label : "BREWERS",
      linkTo : "",
      classes : ""
    },{
      label : "TESTIMONIALS",
      linkTo : "",
      classes : ""
    },{
      label : "FEATURES",
      linkTo : "",
      classes : ""
    },{
      label : "KEURIG APP",
      linkTo : "",
      classes : ""
    },{
      label : "BREW MATCH",
      linkTo : "",
      classes : ""
    },{
      label : "BUILD YOUR STARTER KIT",
      linkTo : "",
      classes : "highlighted"
    }
  ]

}


export const recipeCards : filterableCardT[]=[
  {
    cardName : "OatMilkLatte",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={1}
      title="Oak Milk Latte 1"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-oak-milk-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
       mainImageSize="fit-parent"/>
  },
  {
    cardName : "Cappuccino",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={2}
      title="Cappuccino 2"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "IcedCappuccino",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={3}
      title="Iced Cappuccino 3"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "ICED COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-iced-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "LondonFogLatte",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={4}
      title="London Fog Latte 4"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT TEA",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-london-fog-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {

    cardName : "Cinnamon Macchiato",
    filterTerms : ["hot", "no frother"],
    card : <SimpleHighlightCard
      key={5}
      title="Cinnamon Macchiato 5"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cinnamon-macchiato.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "No Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "sepia"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "OatMilkLatte 2",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={6}
      title="Oak Milk Latte 6"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-oak-milk-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "Cappuccino 2",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={7}
      title="Cappuccino 7"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "IcedCappuccino 2",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={8}
      title="Iced Cappuccino 8"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "ICED COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-iced-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "LondonFogLatte 3",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={9}
      title="London Fog Latte 9"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT TEA",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-london-fog-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {

    cardName : "Iced Cinnamon Macchiato 3",
    filterTerms : ["iced", "no frother"],
    card : <SimpleHighlightCard
      key={10}
      title="Iced Cinnamon Macchiato 10"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "ICED COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cinnamon-macchiato.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "No Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "sepia"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "OatMilkLatte 4",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={11}
      title="Oak Milk Latte 11"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-oak-milk-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "Cappuccino 4",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={12}
      title="Cappuccino 12"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "IcedCappuccino 4",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={13}
      title="Iced Cappuccino 13"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "ICED COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-iced-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "LondonFogLatte 4",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={14}
      title="London Fog Latte 15"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT TEA",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-london-fog-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {

    cardName : "Cinnamon Macchiato 5",
    filterTerms : ["hot", "no frother"],
    card : <SimpleHighlightCard
      key={15}
      title="Cinnamon Macchiato 16"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cinnamon-macchiato.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "No Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "sepia"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "OatMilkLatte 5",
    filterTerms : ["hot", "frother"],
    card : <SimpleHighlightCard
      key={16}
      title="Oak Milk Latte 17"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-oak-milk-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "Lorem Ipsum 5",
    filterTerms : ["hot", "no frother"],
    card : <SimpleHighlightCard
      key={2}
      title="Cappuccino 18"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "sepia"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "IcedCappuccino",
    filterTerms : ["iced", "no frother"],
    card : <SimpleHighlightCard
      key={17}
      title="Iced Cappuccino 19"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "ICED COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-iced-cappuccino.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "sepia"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "LondonFogLatte",
    filterTerms : ["iced", "frother"],
    card : <SimpleHighlightCard
      key={18}
      title="London Fog Latte 20"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT TEA",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "recipes/recipe-london-fog-latte.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  },
  {
    cardName : "Cinnamon Macchiato",
    filterTerms : ["iced", "no frother"],
    card : <SimpleHighlightCard
      key={19}
      title="Cinnamon Macchiato"
      titlePosition="after-image"
      alignment="left"
      maxSize="50%"
      mainMessageSize="Large"
      secondaryMessage={
        {
          label : "HOT COFFEE",
          color : "medium-roast",
          size : "Small"
        }
      }
      mainFocalImage={
        {
          imagePath : "/recipes/recipe-cinnamon-macchiato.webp",
          cropStyle : "rounded-rectangle"
        }
      }
      featuresList = {
        [
          {
            layoutType :"inline",
            primaryMessage :{
              label : "3 minutes",
              icon :"clock-icon",
              iconPosition : "before",
              color : "secondaryGold"
            }
          },
          {
            layoutType :"inline",
            primaryMessage :{
              label : "No Frother Required",
              icon :"frother-icon",
              iconPosition : "before",
              color : "sepia"
            }
          }
        ]
      }
      mainImageSize="fit-parent"/>
  }


]
