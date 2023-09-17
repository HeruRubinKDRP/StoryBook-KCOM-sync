
import {iFeatureBullet} from "../components/FeatureBullets/FeatureBulletItem/FeatureBullet";
import {iProductInfoCardProps} from "../components/CLP/product-card.interfaces";



export type filterOptionsT = "smart-wifi-enabled" |
    "single-serve-coffee-maker" |
    "coffee-house-beverages-at-home" |
    "dual-coffee-makers" |
    "brew-over-ice-coffee-makers" |
    "digital-clock" |
    "display-screen" |
    "fits-travel-mug" |
    "froths-milk" |
    "iced-setting" |
    "multi-position-reservoir" |
    "glass-carafe-&-heating-plate" |
    "strength-control" |
    "temperature-control" |
    "brushed-silver" |
    "evening-teal" |
    "studio-grey" |
    "matte-white" |
    "matte-navy" |
    "sandstone" |
    "white" |
    "black" |
    "grey" |
    "arctic-grey" |
    "bronze" |
    "gold" |
    "copper" |
    "stainless-steel" |
    "green" |
    "oasis" |
    "chili-green" |
    "dark-green" |
    "blue" |
    "light-blue" |
    "steel-blue" |
    "midnight-blue" |
    "vintage-red" |
    "cardinal-red" |
    "rhubarb" |
    "bagged-coffee" |
    "k-cup" |
    "42oz-removable-reservoir" |
    "48oz-removable-reservoir" |
    "60oz-removable-reservoir" |
    "75oz-reservoir" |
    "iced-tumbler-friendly" |
    "add-water-each-time" |
    "up-to-52-ounces" |
    "52-ounce-removable-reservoir" |
    "commercial" |
    "home" |
    "auto-on" |
    "energy-saver-auto-off" |
    "high-altitude-setting" |
    "not-found";

export const brewerFeatures : iFeatureBullet[] = [
    //BrewID 0
    {
        featureLabel : "BrewID™",
        featureIcon : "brew-id",
        showChevron : false,
        featureDetails : "BrewID™ allows you to save your favorite settings to create your perfect cup every time."
    },
    //connected 1
    {
        featureLabel : "Connected Convenience",
        featureIcon : "icon-wifi",
        showChevron : false,
        featureDetails : "Brew a cup from anywhere with the Keurig® app."
    },
    //barista mode 2
    {
        featureLabel : "Barista Mode™",
        featureIcon : "barista-mode",
        showChevron : false,
        featureDetails : "Guided coffee house style recipes in the Keurig® app."
    },
    //Smart delivery 3
    {
        featureLabel : "SMART Delivery",
        featureIcon : "SMART-logo",
        showChevron : false,
        featureDetails : "Get beverages delivered just enough pods just in time."
    },
    //customize 4
    {
        featureLabel : "Complete Customization",
        featureIcon : "icon-settings",
        showChevron : false,
        featureDetails : "Customize your cup with 3 strength and 3 temperature options, or make it iced."
    },
    //multi stream 5
    {
        featureLabel : "MultiStream™ Technology",
        featureIcon : "multistream",
        showChevron : false,
        featureDetails : "Extracts more flavor and aroma* in every brew."
    },
    //brew over ice 6
    {
        featureLabel : "Brew Over Ice",
        featureIcon : "icon-iced-coffee",
        showChevron : false,
        featureDetails : "Brew over ice with bold, full-flavored iced coffee."
    },
    // 66 oz dual reservoir : 7
    {
        featureLabel : "66oz Dual-Position Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "Choose the perfect position for optimal counter space. Removable for easy refilling."
    },
    // 42oz Removable Reservoir : 8
    {
        featureLabel : "42oz Removable Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "Allows you to brew up to 7 cups before having to refill, saving you time"
    },
    //78oz Removable Reservoir 9
    {
        featureLabel : "78oz Removable Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "Allows you to brew up to 7 cups before having to refill, saving you time"
    },
    //3 Cup Sizes : 10
    {
        featureLabel : "3 Cup Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "8, 10, 12 oz."
    },
    //3 Cup Sizes : 10
    {
        featureLabel : "3 Cup Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "8, 10, 12 oz."
    },
    //4 Cup Sizes : 12
    {
        featureLabel : "4 Brew Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "6, 8, 10, and 12 oz."
    },
    //5 Cup Sizes : 13
    {
        featureLabel : "5 Brew Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "6, 8, 10, and 12 oz."
    },
    //Space saving design : 14
    {
        featureLabel : "Space Saving Design",
        featureIcon : "icon-space-saver",
        showChevron : false,
        featureDetails : "Less than 5 inches wide"
    },
    //75oz Removable Reservoir 15
    {
        featureLabel : "75oz Removable Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "The large 75oz removable water reservoir lets you brew 8 cups between refills."
    },
    //Less than 1 minute brew time 16
    {
        featureLabel : "Fast Brew Time",
        featureIcon : "icon-stop-watch",
        showChevron : false,
        featureDetails : "Brew time is less than a minute."
    },
    //46oz Removable Reservoir 17
    {
        featureLabel : "46oz Removable Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "The large 46oz removable water reservoir lets you brew 5 cups between refills."
    },
    //75oz Removable Reservoir 18
    {
        featureLabel : "75oz Removable Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "The large 75oz removable water reservoir lets you brew 8 cups between refills."
    },
    //52oz Removable Reservoir 19
    {
        featureLabel : "52oz Removable Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "The large 52oz removable water reservoir lets you brew 5 cups between refills."
    },
    //Removable One Cup Reservoir 20
    {
        featureLabel : "Removable One Cup Reservoir",
        featureIcon : "water-drop",
        showChevron : false,
        featureDetails : "The large 52oz removable water reservoir lets you brew 5 cups between refills."
    },
    //fast & fresh brewed 21
    {
        featureLabel : "Fast & Fresh Brewed",
        featureIcon : "icon-stop-watch",
        showChevron : false,
        featureDetails : "Delivers fresh brewed, delicious coffee from your favorite K-Cup® pods in minutes."
    },

]

export const searchTerms = {
    commonTerms: ["coffee maker", "coffee machine", "brewer", "keurig", "machine"],
    smartRelate : ["wifi", "wi-fi", "wi fi", "app", "ios", "android", "phone", "smart"],
    singleServe : ["Moka Pot", "pour over", "makes-pods", "single serve"],
    lowEnd : ["cheap", "affordable", "simple"],
    highEnd: ["premium", "fancy", "nice", "elegant"],
    audiencesCommon :["parents", "mom", "dad", "remote", "worker" ],
    audiencesYoung : ["teen", "student", "budget"],
    audiencesMid : ["first apartment"],
    audiencesMature : ["grand", "gradparents", "grandmother", "grandfather"]

}

export const brewerLibrary : iProductInfoCardProps[] =[
    {
        productType: 'brewer',
        index: 0,
        image: "/brewer-images/KSPS.png",
        brand: "Keurig",
        name : "K-Supreme Plus® SMART Single Serve Coffee Maker",
        siloImagePath : "https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000365542_swatch?$pdp_general$&fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72&extend=0,0,0,0",
        productDescription:"With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
        productFeatures : [
            //BrewID
            brewerFeatures[0],
            //connected
            brewerFeatures[1],
            //barista mode
            brewerFeatures[2],
            //Smart delivery
            brewerFeatures[3],
            //customize
            brewerFeatures[4],
            //multi stream
            brewerFeatures[5],
            //brew over  ice
            brewerFeatures[6],
            //78oz Removable Reservoir 9
            brewerFeatures[9],
            // 5 cup sizes
            brewerFeatures[12],
        ],
        searchTerms:[
            ...searchTerms.smartRelate,
            ...searchTerms.smartRelate,
            ...searchTerms.singleServe,
            ...searchTerms.highEnd,
            ...searchTerms.audiencesCommon,
            ...searchTerms.audiencesMature
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
        filterData : [
            {
                filterName : "category",
                filterValues : ["smart-wifi-enabled", "single-serve-coffee-maker" ]
            },
            {
                filterName : "features",
                filterValues : ["display-screen", "strength-control", "temperature-control" ]
            },
            {
                filterName : "color",
                filterValues : ["black", "grey", "stainless-steel"]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir", "multi-position-reservoir"]
            }
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 1,
        image: "/brewer-images/k-cafe.png",
        brand: "Keurig",
        name : "K-Café® SMART Single Serve Coffee Maker",
        productDescription: "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
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
        filterData :[
            {
                filterName : "category",
                filterValues : ["smart-wifi-enabled", "single-serve-coffee-maker", "brew-over-ice-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "display-screen",
                    "strength-control",
                    "temperature-control",
                    "froths-milk",
                    "coffee-house-beverages-at-home",
                    "energy-saver-auto-off",
                    "auto-on"
                ]
            },
            {
                filterName : "color",
                filterValues : ["black", "grey", "stainless-steel"]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir", "multi-position-reservoir"]
            }
        ],
        productFeatures : [
            //BrewID
            brewerFeatures[0],
            //connected
            brewerFeatures[1],
            //barista mode
            brewerFeatures[2],
            //Smart delivery
            brewerFeatures[3],
            //customize
            brewerFeatures[4],
            //multi stream
            brewerFeatures[5],
            //brew over ice
            brewerFeatures[6],

        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 2,
        image: "/brewer-images/k-supreme.png",
        brand: "Keurig",
        name : "K-Supreme® SMART Single Serve Coffee Maker",
        productDescription :"",
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
        productFeatures : [
            //BrewID
            brewerFeatures[0],
            //connected
            brewerFeatures[1],
            //barista mode
            brewerFeatures[2],
            //Smart delivery
            brewerFeatures[3],
            //customize
            brewerFeatures[4],
            //multi stream
            brewerFeatures[5],
            //brew over ice
            brewerFeatures[6],
        ],
        searchTerms : [
            ...searchTerms.commonTerms,
            ...searchTerms.smartRelate,
            ...searchTerms.highEnd,
            ...searchTerms.singleServe,
            ...searchTerms.audiencesCommon,
            ...searchTerms.audiencesMature
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "smart-wifi-enabled", "brew-over-ice-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : ["strength-control", "temperature-control"  ]
            },
            {
                filterName : "color",
                filterValues : ["black", "grey", "stainless-steel"]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir" ]
            }
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 3,
        image: "/brewer-images/k-slim1.png",
        brand: "Keurig",
        name : "K-Slim® Single Serve Coffee Maker",
        productDescription :"At just 5” wide, the K-Slim® single serve coffee maker fits neatly on your countertop.",
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
        filterData :[
        {
            filterName : "category",
            filterValues : [ "single-serve-coffee-maker" ]
        },
        {
            filterName : "features",
            filterValues : ["strength-control", "temperature-control" ]
        },
        {
            filterName : "color",
            filterValues : ["black", "grey", "stainless-steel"]
        },
        {
            filterName : "Brew Type",
            filterValues : ["k-cup"]
        },
        {
            filterName : "reservoir",
            filterValues : ["60oz-removable-reservoir" ]
        }
        ],
        productFeatures :[
            //Smart delivery
            brewerFeatures[3],
            //multi stream
            brewerFeatures[5],
            //space saving design
            brewerFeatures[14],
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 4,
        image: "/brewer-images/k-elite.png",
        brand: "Keurig",
        name : "Keurig® K-Elite® Single Serve Coffee Maker",
        productDescription:"Sleek & Versatile",
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
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "brew-over-ice-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "iced-setting",
                    "temperature-control",
                    "fits-travel-mug",
                    "75oz-reservoir",
                    "auto-on",
                    "energy-saver-auto-off",
                    "display-screen",
                    "digital-clock",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : ["black", "grey", "stainless-steel"]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir" ]
            }
        ],
        productFeatures :[
            //5 Cup Sizes : 12
            brewerFeatures[13],
            //75oz Removable Reservoir 15
            brewerFeatures[15],
            //Less than 1 minute brew time 16
            brewerFeatures[16],
            //brew over ice 6
            brewerFeatures[6],
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 5,
        image: "/brewer-images/k-mini.png",
        brand: "Keurig",
        name : "K-Mini® Single Serve Coffee Maker",
        productDescription:"Say hello to our slimmest brewer yet.",
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
        productFeatures:[
            //multi stream 5
            brewerFeatures[5],
            //Space saving design : 14
            brewerFeatures[14],
            //3 Cup Sizes : 10
            brewerFeatures[10],
            //46oz Removable Reservoir 17
            brewerFeatures[17],
            //Less than 1 minute brew time 16
            brewerFeatures[16],
        ],
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "brew-over-ice-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "add-water-each-time",
                    "auto-on",
                    "energy-saver-auto-off",
                ]
            },
            {
                filterName : "color",
                filterValues : ["black", "studio-grey", "oasis", "chili-green"]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["add-water-each-time" ]
            }
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 6,
        image: "/brewer-images/k-select.png",
        brand: "Keurig",
        name : "Keurig® K-Select® Coffee Maker",
        productDescription:"Combines sleek design and simple button controls to help you brew your perfect cup every time.",
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
        productFeatures :[
            //4 Cup Sizes : 12
            brewerFeatures[12],
            //52oz Removable Reservoir 19
            brewerFeatures[19],
            //Less than 1 minute brew time 16
            brewerFeatures[16],
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "energy-saver-auto-off",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : [
                    "black",
                    "vintage-red",
                    "matte-white",
                    "matte-navy",
                    "oasis",
                    "sandstone"
                ]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir" ]
            }
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 7,
        image: "/brewer-images/k-mini-plus.png",
        brand: "Keurig",
        name : "K-Mini Plus® Single Serve Coffee Maker",
        productDescription:"Combines sleek design with space-saving convenience in a portable, stylish package.",
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
        productFeatures:[
            //Space saving design : 14
            brewerFeatures[14],
            //Removable One Cup Reservoir 20
            brewerFeatures[20],
            //fast & fresh brewed 21
            brewerFeatures[21],
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        filterData :[
            {
                filterName : "category",
                filterValues : [
                    "single-serve-coffee-maker",
                    "brew-over-ice-coffee-makers"
                ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "add-water-each-time",
                    "auto-on",
                    "energy-saver-auto-off",
                ]
            },
            {
                filterName : "color",
                filterValues : [
                    "black",
                    "cardinal-red",
                    "evening-teal",
                    "studio-grey"
                ]
            },
            {
                filterName : "Brew Type",
                filterValues : ["k-cup"]
            },
            {
                filterName : "reservoir",
                filterValues : ["add-water-each-time" ]
            }
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 8,
        image: "/brewer-images/k-duo.png",
        brand: "Keurig",
        name : "K-Duo™ Single Serve & Carafe Coffee Maker",
        productDescription:"This versatile brewer is the best of both worlds.",
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
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "dual-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "60oz-removable-reservoir",
                    "energy-saver-auto-off",
                    "glass-carafe-&-heating-plate",
                    "display-screen",
                    "digital-clock",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : ["black"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir" ]
            },
            {
                filterName : "Brew Type",
                filterValues: ["bagged-coffee", "k-cup"]
            }
        ],

        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 9,
        image: "/brewer-images/k-duo-special.png",
        brand: "Keurig",
        name : "K-Duo® Special Edition Single Serve & Carafe Coffee Maker",
        productDescription:"The perfect brewer for any occasion with a sleek, silver finish that will compliment any kitchen and stand out on your countertop",
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
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "dual-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "60oz-removable-reservoir",
                    "energy-saver-auto-off",
                    "glass-carafe-&-heating-plate",
                    "display-screen",
                    "digital-clock",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : ["black"]
            },
            {
                filterName : "reservoir",
                filterValues : ["60oz-removable-reservoir" ]
            },
            {
                filterName : "Brew Type",
                filterValues: ["bagged-coffee", "k-cup"]
            }
        ],

        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 10,
        image: "/brewer-images/k-classic.png",
        brand: "Keurig",
        name : "Keurig® K-Classic® Coffee Maker",
        productDescription:"Brews a perfect cup of coffee, tea, hot cocoa or iced beverage in under one minute at the touch of a button.",
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
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "60oz-removable-reservoir",
                    "energy-saver-auto-off",
                    "glass-carafe-&-heating-plate",
                    "display-screen",
                    "digital-clock",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : ["black"]
            },
            {
                filterName : "reservoir",
                filterValues : ["48oz-removable-reservoir" ]
            },
            {
                filterName : "Brew Type",
                filterValues: ["k-cup"]
            }
        ],


        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 11,
        image: "/brewer-images/k-duo-plus.png",
        brand: "Keurig",
        name : "K-Duo Plus™ Single Serve & Carafe Coffee Maker",
        productDescription:"The included 12-cup thermal carafe is perfect for keeping your coffee warm for up to 2 hours.",
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
        filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "dual-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "multi-position-reservoir",
                    "energy-saver-auto-off",
                    "glass-carafe-&-heating-plate",
                    "display-screen",
                    "digital-clock",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : ["black"]
            },
            {
                filterName : "reservoir",
                filterValues : [ "60oz-removable-reservoir" ]
            },
            {
                filterName : "Brew Type",
                filterValues: ["bagged-coffee", "k-cup"]
            }
        ],
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        index: 12,
        image: "/brewer-images/k-slim-iced.png",
        brand: "Keurig",
        name : "K-Slim + ICED™ Single Serve Coffee Maker",
        productDescription:" Full-flavored hot coffee and refreshing iced – always easy, always right. ",
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
        ],filterData :[
            {
                filterName : "category",
                filterValues : [ "single-serve-coffee-maker", "brew-over-ice-coffee-makers" ]
            },
            {
                filterName : "features",
                filterValues : [
                    "strength-control",
                    "fits-travel-mug",
                    "strength-control",
                    "iced-setting",
                    "iced-tumbler-friendly",
                    "energy-saver-auto-off",
                    "high-altitude-setting",
                ]
            },
            {
                filterName : "color",
                filterValues : ["arctic-grey", "white"]
            },
            {
                filterName : "reservoir",
                filterValues : [ "42oz-removable-reservoir" ]
            },
            {
                filterName : "Brew Type",
                filterValues: ["bagged-coffee", "k-cup"]
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
        index: 13,
        image: "/brewer-images/k-express.png",
        brand: "Keurig",
        name : "K-Express™ Single Serve Coffee Maker",
        productDescription:"Welcome to Keurig® quality, at our most welcoming price.",
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