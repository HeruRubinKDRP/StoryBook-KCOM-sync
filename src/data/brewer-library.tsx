import {iProductInfoCardProps} from "../components/CLP/SimpleCard/SimpleCard";
import {iFeatureBullet} from "../components/FeatureBullets/FeatureBulletItem/FeatureBullet";


//Reference
// import {iFeatureBullet} from "../components/FeatureBullets/FeatureBulletItem/FeatureBullet";
// import {iconType} from "../components/Graphic/Graphic";

// export interface iProductInfoCardProps {
//     productType: productTypeT
//     image: string;
//     brand: string;
//     name: string;
//     prices: purchaseInfo[];
//     ratingVisible: boolean;
//     priceDescriptor?: string;
//     productDescription?: string;
//     siloImagePath?: string;

//     productFeatures? : iFeatureBullet[];
// {
//     featureLabel : string;
//     featureIcon : iconType;
//     iconSizeOverride? : string;
//     index? : number;
//     actionFunc? : Function;
//     featureDetails? : string;
//     showChevron : boolean;
// }

//     filterData?: filterDataItemT[];
//     rating: {
//         totalNumberOfStars: 5 | 10;
//         totalNumberOfReviews: number;
//         ratingNumber: number;
//     }
//     onClick: () => void;
//     classes?: string;
//     flipFunction?: () => void;
// }

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
    //4 Cup Sizes : 11
    {
        featureLabel : "4 Brew Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "6, 8, 10, and 12 oz."
    },
    //5 Cup Sizes : 12
    {
        featureLabel : "5 Brew Sizes",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "6, 8, 10, and 12 oz."
    },
    //Space saving design : 13
    {
        featureLabel : "Space Saving Design",
        featureIcon : "icon-cup",
        showChevron : false,
        featureDetails : "Less than 5 inches wide"
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
        image: "./brewer-images/KSPS.png",
        brand: "Keurig",
        name : "K-Supreme Plus® SMART Single Serve Coffee Maker",
        siloImagePath : "https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000365542_swatch?$pdp_general$&fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72&extend=0,0,0,0",
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
                filterValues : ["smart", "single-serve" ]
            },
            {
                filterName : "features",
                filterValues : ["display-screen", "strength-control", "temperature-controls" ]
            },
            {
                filterName : "color",
                filterValues : ["black", "grey", "stainless-steel"]
            }
        ],
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
        productFeatures :[
            //Smart delivery
            brewerFeatures[3],
            //multi stream
            brewerFeatures[5],
            //space saving design
            brewerFeatures[13],
        ],
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
        productFeatures :[
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