import {brewerFeatures, searchTerms} from "../../brewer-library";
import {iconType, Igraphics} from "../../../components/Graphic/Graphic";
import {brewerFeaturesList} from "./brewerFeatures";


export type brewerVariant = {
    variantName : string,
    variantImages : string[],
    variantBasePrice : number,
    style : string,
}

export type brewerFeature = {
    featureName : string,
    icon : iconType,
    description : string,
}

export type brewerFAQ ={
    question : string,
    answer : string,
}

export type brewerDimensions = {
    height : number,
    heightOpened? : number,
    width : number,
    depth : number,
    unit : "standard" | "metric",
    weight : number,
}

export type coffeeMakerType = {
    productType: 'coffee-maker',
    id : number,
    variants : brewerVariant[],
    kskProgram : "none" | "50% off" | "SMART" | "free",
    displayName : string,
    description? : string,
    keyFeatures? : string[],
    features? : brewerFeature[],
    dimensions? : brewerDimensions,
    faqs? : brewerFAQ[],
}

export const coffeeMakerProducts : coffeeMakerType[] = [
    {
        productType: 'coffee-maker',
        id:0,
        variants : [
            {
                variantName : "K-Elite® Single Serve Coffee Maker",
                variantImages : [],
                variantBasePrice : 189.99,
                style : "Silver",
            }
        ],
        kskProgram : "50% off",
        displayName : "K-Elite® Single Serve Coffee Maker",
        description : `The Keurig® K-Elite™ brewer blends a premium finish and programmable features to deliver both modern design and the ultimate in beverage customization. With a striking brushed finish and metal details, it’s a stylish addition to any kitchen. The Keurig® K-Elite™ coffee maker features Strong Brew for when you want to brew a bolder cup of coffee, and an Iced button to brew hot over ice for a refreshing, full-flavored iced coffee. It features five brew sizes, so you can brew 4, 6, 8, 10, or 12oz of your favorite coffee, tea, hot cocoa, or iced beverage at the touch of a button. Choose from hundreds of delicious varieties of K-Cup® pods, or brew your own ground coffee using the Universal My K-Cup® Reusable Coffee Filter (sold separately). In addition to a host of programmable features like auto on and temperature control, the Keurig® K-Elite™ coffee maker provides hot water on demand for instant soups and oatmeal, and the large 75oz removable water reservoir lets you brew 8 cups between refills.`,
        features : [
            //5 cup sizes
            brewerFeaturesList[0],
            //strong brew
            brewerFeaturesList[1],
            //fast brew
            brewerFeaturesList[2],
            //75oz water reservoir
            brewerFeaturesList[3],
            //hot water on demand
            brewerFeaturesList[4],
            //simple button controls
            brewerFeaturesList[5],
            //removable drip tray
            brewerFeaturesList[6],
            //quiet brew technology
            brewerFeaturesList[7],
            //brews a variety of beverages
            brewerFeaturesList[8],
            //my k-cup universal reusable coffee filter
            brewerFeaturesList[9],
            // programmable auto on
            brewerFeaturesList[10],
            // programmable auto off
            brewerFeaturesList[11],
            //adjustable temperature
            brewerFeaturesList[12],
        ],
        dimensions : {
            height : 13.1,
            heightOpened : 16.5,
            width : 9.9,
            depth : 12.7,
            unit : "standard",
            weight : 8,
        }
    },
    {
        productType: 'coffee-maker',
        id:1,
        variants : [
            {
                variantName : " K-Café® Barista Bar Single Serve Coffee Maker and Frother",
                variantImages : [],
                variantBasePrice : 139.99,
                style : "Black",
            }
        ],
        kskProgram : "50% off",
        displayName : "K-Elite® Single Serve Coffee Maker",
        description : `With the Keurig® K-Café® Barista Bar single-serve coffee maker, you can enjoy all your go-to coffeehouse beverages — without the go. Easily create hot or iced favorites like creamy lattes, rich cappuccinos, and more at home with the included frother, or enjoy full-flavored iced coffee at the touch of a button. All your hot and iced coffeehouse favorites — always simply made, always delicious. In the mood for something indulgent? The K-Café® Barista Bar coffee maker lets you create any coffee beverage you’re craving with its included milk frother. Just pour in fresh milk or your favorite dairy alternatives such as oat, almond, or soy to make perfectly frothed milk in minutes. And with both hot and cold temperature settings, you can add froth to all your hot and iced beverages. Enjoying refreshingly delicious iced coffee is simple with the Brew Over Ice button. One push and the K-Café® Barista Bar coffee maker automatically adjusts the brew temperature, starting hotter to extract full flavor, then cooling down to minimize ice melt. The result is a vibrant, balanced iced coffee that never tastes watered down. Use any K-Cup® pod with the Shot button — which brews a 2oz coffee shot for a more intense, bold flavor — and you can transform your house into a coffeehouse with magnificent macchiatos, impressive iced lattes, and more delicious coffee creations. This multitalented, tumbler-and-travel-mug-friendly coffee maker also brews the same full-flavored hot coffee you love. And whether you’re brewing hot or iced, you can choose from three different cup sizes — 8, 10, and 12oz (including ice) — and with a 42oz removable reservoir, you can enjoy up to 4 delicious cups between refills.`,
        features : [
            //coffee house variety
            brewerFeaturesList[13],
            //frother
            brewerFeaturesList[14],
            //coffee shot
            brewerFeaturesList[15],
            //3 cup sizes
            brewerFeaturesList[16],
            //42oz water reservoir
            brewerFeaturesList[17],
            //iced tumblers friendly
            brewerFeaturesList[18],
            //fast brew
            brewerFeaturesList[2],
            //hot water on demand
            brewerFeaturesList[4],
            //simple button controls
            brewerFeaturesList[5],
            //removable drip tray
            brewerFeaturesList[6],
            //quiet brew technology
            brewerFeaturesList[7],
            //brews a variety of beverages
            brewerFeaturesList[8],
            //my k-cup universal reusable coffee filter
            brewerFeaturesList[9],
            //energy efficient
            brewerFeaturesList[19],
        ],
        dimensions : {
            height : 12.6,
            width : 5.1,
            depth : 12.8,
            unit : "standard",
            weight : 8,
        }
    },
    {
        productType: 'coffee-maker',
        id:2,
        variants : [
            {
                variantName : "K-Iced™ Single Serve Coffee Maker",
                variantImages : [],
                variantBasePrice : 99.99,
                style : "Arctic Gray",
            },
            {
                variantName : "K-Iced™ Single Serve Coffee Maker",
                variantImages : [],
                variantBasePrice : 99.99,
                style : "White",
            }
        ],
        kskProgram : "50% off",
        displayName : "K-Iced™ Single Serve Coffee Maker",
        description : `Introducing the new Keurig® K-Iced™ coffee maker. Enjoy refreshingly delicious iced coffee and full-flavored hot coffee from one multitalented coffee maker. Brew the perfect coffee for any craving, mood, or mouthwatering moment. Always easy, always right.
It's all in the new blue Brew Over Ice button. One push and the K-Iced™ coffee maker automatically adjust the brew temperature, starting hotter to extract full flavor, then cooling down to minimize ice melt. All for a vibrant, balanced iced coffee that never tastes watered down.
The K-Iced™ coffee maker also brews the same full-flavored hot coffee that you love. And if you want a stronger cup, the Strong Brew setting gives your hot coffee a bolder, more intense taste.
Whether you're brewing iced or hot, choose from 3 cup sizes — 8, 10, and 12oz (for iced coffee, including ice). And the 42oz removable reservoir lets you enjoy multiple deliciously refreshing cups between refills.`,
        features : [
            //42oz water reservoir:
            brewerFeaturesList[17],
            //3 cup sizes:
            brewerFeaturesList[16],
            //brew over ice:
            brewerFeaturesList[16],
            //fast & fresh-brewed:
             brewerFeaturesList[24],
            //iced tumblers friendly:
            brewerFeaturesList[18],
            //fast brew:
            brewerFeaturesList[2],
            //hot water on demand:
            brewerFeaturesList[4],
            //simple button controls:
            brewerFeaturesList[5],
            //removable drip tray:
            brewerFeaturesList[6],
            //quiet brew technology:
            brewerFeaturesList[7],
            //brews a variety of beverages:
            brewerFeaturesList[8],
            //my k-cup universal reusable coffee filter:
            brewerFeaturesList[9],
            //energy efficient:
            brewerFeaturesList[19],
        ],
        dimensions : {
            height : 12.6,
            width : 5.1,
            depth : 12.8,
            unit : "standard",
            weight : 8,
        }
    }
]



/////

export const coffeeMakersData = [
    {
        productType: 'brewer',
        id: 0,
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
            // hot water on demand
            brewerFeatures[12],
            //simple button controls
            brewerFeatures[13],
            //removable drip tray
            brewerFeatures[14],
            //quiet brew technology
            brewerFeatures[15],
            //brews a variety of beverages
            brewerFeatures[16],
            //my k-cup universal reusable coffee filter
            brewerFeatures[17],
            // programmable auto on
            brewerFeatures[18],
            // programmable auto off
            brewerFeatures[19],
            //adjustable temperature
            brewerFeatures[20],
            //high altitude setting
            brewerFeatures[21],

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
]