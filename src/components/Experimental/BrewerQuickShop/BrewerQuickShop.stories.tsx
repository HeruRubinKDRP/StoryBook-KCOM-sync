import {Meta} from "@storybook/react";
import {StoryFn} from "@storybook/react";
import {K155_BREWING_SYSTEM_5000375230, K50_COFFEE_MAKER_5000204441,
    K50_COFFEE_MAKER_5000345253, K_CAFE_COFFEE_LATTE_CAPPUCCINO_MAKER_5000201735,
    K_CAFE_GIFT_SET_5000201735,
    K_CAFE_SE_GIFT_SET_5000341465,
    K_CAFE_SMART_COFFEE_LATTE_CAPPUCCINO_MAKER_5000365485,
    K_CAFE_SPECIAL_EDITION_COFFEE_LATTE_CAPPUCCINO_MAKER_5000341465,
    K_CLASSIC_ESSENTIALS_BUNDLE_5000204441,
    K_CLASSIC_ESSENTIALS_BUNDLE_5000345253,
    K_COMPACT_COFFEE_MAKER_5000376527,
    K_DUO_GIFT_SET_5000204977,
    K_DUO_PLUS_GIFT_SET_5000363818,
    K_DUO_PLUS_MCCAFE_BEST_SELLER_BUNDLE_5000363818,
    K_DUO_PLUS_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000363818,
    K_DUO_SE_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000362326,
    K_DUO_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000204977,
    K_ELITE_GIFT_SET_5000359831,
    K_ELITE_GIFT_SET_5000359832,
    K_ELITE_GIFT_SET_5000359886,
    K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_5000359831,
    K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_5000359832,
    K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_Brushed_Slate,
    K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359831,
    K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359832,
    K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359886,
    K_EXPRESS_SINGLE_SERVE_COFFEE_MAKER_5000358267,
    K_ICED_BUNDLE_5000371871,
    K_ICED_BUNDLE_5000374055, K_ICED_SINGLE_SERVE_COFFEE_MAKER_5000371871, K_ICED_SINGLE_SERVE_COFFEE_MAKER_5000374055,
    K_MINI_BACK_TO_COLLEGE_BUNDLE_5000356890,
    K_MINI_COFFEE_MAKER_5000200237,
    K_MINI_COFFEE_MAKER_5000203382,
    K_MINI_COFFEE_MAKER_5000350704,
    K_MINI_COFFEE_MAKER_5000350706,
    K_MINI_COFFEE_MAKER_5000356890,
    K_MINI_COFFEE_MAKER_5000361864,
    K_MINI_COFFEE_MAKER_5000367898,
    K_MINI_ESSENTIALS_BUNDLE_5000200237,
    K_MINI_ESSENTIALS_BUNDLE_5000203382,
    K_MINI_ESSENTIALS_BUNDLE_5000350706,
    K_MINI_ESSENTIALS_BUNDLE_5000356890,
    K_MINI_PLUS_COFFEE_MAKER_5000200239,
    K_MINI_PLUS_COFFEE_MAKER_5000200240,
    K_MINI_PLUS_COFFEE_MAKER_5000202016,
    K_MINI_PLUS_COFFEE_MAKER_5000203817,
    K_MINI_PLUS_COFFEE_MAKER_5000341911,
    K_MINI_PLUS_COFFEE_MAKER_5000361863,
    K_MINI_PLUS_COFFEE_MAKER_5000367894,
    K_MINI_PLUS_ESSENTIALS_BUNDLE_5000200239,
    K_MINI_PLUS_ESSENTIALS_BUNDLE_5000200240,
    K_MINI_PLUS_ESSENTIALS_BUNDLE_5000202016,
    K_MINI_PLUS_ESSENTIALS_BUNDLE_5000203817,
    K_MINI_PLUS_ESSENTIALS_BUNDLE_5000341911,
    K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000200239,
    K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000200240,
    K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000202016,
    K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000203817,
    K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000341911,
    K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000361863,
    K_MINI_STARBUCKS_BUNDLE_5000367898,
    K_SELECT_COFFEE_MAKER_5000359828,
    K_SELECT_COFFEE_MAKER_5000359889,
    K_SELECT_COFFEE_MAKER_5000359890,
    K_SELECT_COFFEE_MAKER_5000359891,
    K_SELECT_COFFEE_MAKER_5000359892,
    K_SELECT_COFFEE_MAKER_5000359901,
    K_SELECT_ESSENTIALS_BUNDLE_5000359828,
    K_SELECT_ESSENTIALS_BUNDLE_5000359889,
    K_SELECT_ESSENTIALS_BUNDLE_5000359890,
    K_SELECT_ESSENTIALS_BUNDLE_5000359891,
    K_SELECT_ESSENTIALS_BUNDLE_5000359892,
    K_SELECT_ESSENTIALS_BUNDLE_5000359901,
    K_SLIM_ESSENTIALS_BUNDLE_5000363760,
    K_SLIM_EVERYDAY_HERO_BLK_AND_BOLD_BUNDLE_5000372063,
    K_SLIM_EVERYDAY_HERO_BLK_AND_BOLD_BUNDLE_5000372064,
    K_SLIM_ICED_BOI_DUNKIN_BUNDLE_5000365009,
    K_SLIM_ICED_SINGLE_SERVE_COFFEE_MAKER_5000365009,
    K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000363760,
    K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000363788,
    K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000367895,
    K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000361865,
    K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000363309,
    K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368400,
    K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368401,
    K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368402,
    K_SUPREME_PLUS_SINGLE_SERVE_COFFEE_MAKER_5000368403, K_SUPREME_PLUS_SMART_COFFEE_MAKER_5000361470, K_SUPREME_PLUS_SMART_COFFEE_MAKER_5000365542,
    K_SUPREME_PLUS_SMART_EXCEPTIONAL_BREWS_BUNDLE_5000361470,
    K_SUPREME_PLUS_WELCOME_BUNDLE_5000368403,
    K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000361865,
    K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000363309,
    K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368400,
    K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368401,
    K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368402, K_SUPREME_SMART_COFFEE_MAKER_5000367509, K_SUPREME_SMART_COFFEE_MAKER_5000367513, K_SUPREME_SMART_COFFEE_MAKER_5000367515, K_SUPREME_WELCOME_BUNDLE_5000368400, K_SUPREME_WELCOME_BUNDLE_5000368401, MCCAFE_RMHC_BUNDLE_5000371262, MCCAFE_RMHC_BUNDLE_5000371263, MCCAFE_RMHC_BUNDLE_5000371264} from "data/brewer-quickshop-images";
import {carousel_images_KCS} from "../../../data/pdp-data";
import {colorNamesList} from "../../_utilities/color-name-to-value/colorNameToValue";
import BrewerQuickShop, { iBrewerQuickShop } from "./BrewerQuickShop";


export default {
    title: "Experimental/Brewer Quick Shop",
    component : BrewerQuickShop,
    argTypes: {
        mainFlagColor: { control: "select", options : colorNamesList },
        mainFlagLabel: { control: "text" },
        productName : {control : "text"},
        productNamesExtended : {control : "text"},
        carousel : {control : "object"},
        color : {control : "object"},
        hasKSK : {control : "boolean"},
        hasCoupon : {control : "boolean"},
        couponMessage : {control : "text"},
        couponAppliedMessage : {control : "text"},
        learnMoreMessagingKSK : {control : "text"},
        learnMoreMessagingBrewerOnly : {control : "text"},
        freeShippingMessaging : {control : "text"},
    }
} as Meta;

const Template: StoryFn<iBrewerQuickShop> = (args) => (
    <BrewerQuickShop {...args} />
);

export const Default = Template.bind({});
Default.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : carousel_images_KCS
    },
    hasCoupon : true,
    couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : false,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Iced_Arctic_Gray_Example = Template.bind({});
K_Iced_Arctic_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "{use flag}",
    productNameExtended : K_ICED_SINGLE_SERVE_COFFEE_MAKER_5000371871.brewerName,
    productName : "Keurig®",
    tagline : "Brews Hot & Iced",
    carousel : {
        slideImageURLs : K_ICED_SINGLE_SERVE_COFFEE_MAKER_5000371871.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api provided}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Arctic Grey",
            colorValue : "grey",
        },
        {
            inStock : true,
            colorName : "White",
            colorValue : "white",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Iced_White_Example = Template.bind({});
K_Iced_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ICED_SINGLE_SERVE_COFFEE_MAKER_5000374055.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ICED_SINGLE_SERVE_COFFEE_MAKER_5000374055.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Cafe_Smart_Black_Example = Template.bind({});
K_Cafe_Smart_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CAFE_SMART_COFFEE_LATTE_CAPPUCCINO_MAKER_5000365485.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_CAFE_SMART_COFFEE_LATTE_CAPPUCCINO_MAKER_5000365485.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api provided data}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Plus_Smart_Black_Stainless_Example = Template.bind({});
K_Supreme_Plus_Smart_Black_Stainless_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_PLUS_SMART_COFFEE_MAKER_5000361470.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless.",
    carousel : {
        slideImageURLs : K_SUPREME_PLUS_SMART_COFFEE_MAKER_5000361470.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use coupon data}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Plus_Smart_Stainless_Steel_Example = Template.bind({});
K_Supreme_Plus_Smart_Stainless_Steel_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_PLUS_SMART_COFFEE_MAKER_5000365542.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless.",
    carousel : {
        slideImageURLs : K_SUPREME_PLUS_SMART_COFFEE_MAKER_5000365542.productImage
    },
    hasCoupon : true,
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use data}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Smart_Black_Example = Template.bind({});
K_Supreme_Smart_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SMART_COFFEE_MAKER_5000367509.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless.",
    carousel : {
        slideImageURLs : K_SUPREME_SMART_COFFEE_MAKER_5000367509.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Smart_Gray_Example = Template.bind({});
K_Supreme_Smart_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SMART_COFFEE_MAKER_5000367513.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless.",
    carousel : {
        slideImageURLs : K_SUPREME_SMART_COFFEE_MAKER_5000367513.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api coupon}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Smart_White_Example = Template.bind({});
K_Supreme_Smart_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SMART_COFFEE_MAKER_5000367515.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless.",
    carousel : {
        slideImageURLs : K_SUPREME_SMART_COFFEE_MAKER_5000367515.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api coupon}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "White",
            colorValue : "white",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Duo_Special_Edition_Example = Template.bind({});
K_Duo_Special_Edition_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_DUO_SE_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000362326.brewerName,
    productName : "Keurig®",
    tagline : "This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties.",
    carousel : {
        slideImageURLs : K_DUO_SE_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000362326.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api coupon}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api for message content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Duo_Example = Template.bind({});
K_Duo_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_DUO_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000204977.brewerName,
    productName : "Keurig®",
    tagline : "This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties.",
    carousel : {
        slideImageURLs : K_DUO_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000204977.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{use api}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api content} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Duo_Plus_Example = Template.bind({});
K_Duo_Plus_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_DUO_PLUS_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000363818.brewerName,
    productName : "Keurig®",
    tagline : "This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties.",
    carousel : {
        slideImageURLs : K_DUO_PLUS_SINGLE_SERVE_CARAFE_COFFEE_MAKER_5000363818.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{coupon api}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{use api content}*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Cafe_Special_Edition_Example = Template.bind({});
K_Cafe_Special_Edition_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CAFE_SPECIAL_EDITION_COFFEE_LATTE_CAPPUCCINO_MAKER_5000341465.brewerName,
    productName : "Keurig®",
    tagline : "Delicious coffee, creamy lattes, and frothy cappuccinos - simply made in minutes",
    carousel : {
        slideImageURLs : K_CAFE_SPECIAL_EDITION_COFFEE_LATTE_CAPPUCCINO_MAKER_5000341465.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Cafe_Example = Template.bind({});
K_Cafe_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CAFE_COFFEE_LATTE_CAPPUCCINO_MAKER_5000201735.brewerName,
    productName : "Keurig®",
    tagline : "Delicious coffee, creamy lattes, and frothy cappuccinos - simply made in minutes",
    carousel : {
        slideImageURLs : K_CAFE_COFFEE_LATTE_CAPPUCCINO_MAKER_5000201735.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "{coupon api}. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "{coupon api} *Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Plus_Example = Template.bind({});
K_Supreme_Plus_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_PLUS_SINGLE_SERVE_COFFEE_MAKER_5000368403.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_PLUS_SINGLE_SERVE_COFFEE_MAKER_5000368403.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Farmhouse_White_Example = Template.bind({});
K_Supreme_Farmhouse_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000361865.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000361865.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Silver_Sage_Example = Template.bind({});
K_Supreme_Silver_Sage_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000363309.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000363309.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Gray_Example = Template.bind({});
K_Supreme_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368400.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368400.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Black_Example = Template.bind({});
K_Supreme_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368401.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368401.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_White_Example = Template.bind({});
K_Supreme_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368402.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_SINGLE_SERVE_COFFEE_MAKER_5000368402.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Matte_Black_Example = Template.bind({});
K_Mini_Plus_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000200239.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000200239.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Cardinal_Red_Example = Template.bind({});
K_Mini_Plus_Cardinal_Red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000200240.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000200240.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Gray_Example = Template.bind({});
K_Mini_Plus_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000202016.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000202016.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Evening_Teal_Example = Template.bind({});
K_Mini_Plus_Evening_Teal_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000203817.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000203817.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Matte_White_Example = Template.bind({});
K_Mini_Plus_Matte_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000341911.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000341911.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Cool_Aqua_Example = Template.bind({});
K_Mini_Plus_Cool_Aqua_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000361863.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000361863.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Misty_Green_Example = Template.bind({});
K_Mini_Plus_Misty_Green_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_COFFEE_MAKER_5000367894.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_COFFEE_MAKER_5000367894.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Matte_Black_Example = Template.bind({});
K_Mini_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000200237.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000200237.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Studio_Gray_Example = Template.bind({});
K_Mini_Studio_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000203382.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000203382.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Chill_Green_Example = Template.bind({});
K_Mini_Chill_Green_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000350704.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000350704.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Dusty_Rose_Example = Template.bind({});
K_Mini_Dusty_Rose_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000350706.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000350706.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Oasis_Example = Template.bind({});
K_Mini_Oasis_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000356890.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000356890.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Poppy_Red_Example = Template.bind({});
K_Mini_Poppy_Red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000361864.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000361864.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Evergreen_Example = Template.bind({});
K_Mini_Evergreen_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_COFFEE_MAKER_5000367898.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_COFFEE_MAKER_5000367898.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Starbucks_Bundle_Example = Template.bind({});
K_Mini_Starbucks_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_STARBUCKS_BUNDLE_5000367898.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_STARBUCKS_BUNDLE_5000367898.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Welcome_Bundle_Gray_Example = Template.bind({});
K_Supreme_Welcome_Bundle_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_WELCOME_BUNDLE_5000368400.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_WELCOME_BUNDLE_5000368400.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Welcome_Bundle_Black_Example = Template.bind({});
K_Supreme_Welcome_Bundle_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_WELCOME_BUNDLE_5000368401.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_WELCOME_BUNDLE_5000368401.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Duo_Plus_Gift_Set_Bundle_Example = Template.bind({});
K_Duo_Plus_Gift_Set_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_DUO_PLUS_GIFT_SET_5000363818.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_DUO_PLUS_GIFT_SET_5000363818.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_McCafe_Best_Seller_Bundle_Brushed_Gold_Example = Template.bind({});
K_Elite_McCafe_Best_Seller_Bundle_Brushed_Gold_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_5000359831.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_5000359831.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_McCafe_Best_Seller_Bundle_Brushed_Silver_Example = Template.bind({});
K_Elite_McCafe_Best_Seller_Bundle_Brushed_Silver_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_5000359832.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_5000359832.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_McCafe_Best_Seller_Bundle_Brushed_Slate_Example = Template.bind({});
K_Elite_McCafe_Best_Seller_Bundle_Brushed_Slate_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_Brushed_Slate.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ELITE_MCCAFE_BEST_SELLER_BUNDLE_Brushed_Slate.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Essentials_Bundle_Matte_Black_Example = Template.bind({});
K_Select_Essentials_Bundle_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_ESSENTIALS_BUNDLE_5000359828.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_ESSENTIALS_BUNDLE_5000359828.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Essentials_Bundle_Matte_Navy_Example = Template.bind({});
K_Select_Essentials_Bundle_Matte_Navy_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_ESSENTIALS_BUNDLE_5000359892.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_ESSENTIALS_BUNDLE_5000359892.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Essentials_Bundle_Matte_White_Example = Template.bind({});
K_Select_Essentials_Bundle_Matte_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_ESSENTIALS_BUNDLE_5000359901.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_ESSENTIALS_BUNDLE_5000359901.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Essentials_Bundle_Oasis_Example = Template.bind({});
K_Select_Essentials_Bundle_Oasis_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_ESSENTIALS_BUNDLE_5000359890.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_ESSENTIALS_BUNDLE_5000359890.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Essentials_Bundle_Sandstone_Example = Template.bind({});
K_Select_Essentials_Bundle_Sandstone_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_ESSENTIALS_BUNDLE_5000359891.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_ESSENTIALS_BUNDLE_5000359891.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Essentials_Bundle_Vintage_Red_Example = Template.bind({});
K_Select_Essentials_Bundle_Vintage_Red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_ESSENTIALS_BUNDLE_5000359889.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_ESSENTIALS_BUNDLE_5000359889.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Essentials_Bundle_Matte_Black_Example = Template.bind({});
K_Mini_Plus_Essentials_Bundle_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000200239.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000200239.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Essentials_Bundle_Cardinal_Red_Example = Template.bind({});
K_Mini_Plus_Essentials_Bundle_Cardinal_Red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000200240.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000200240.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Essentials_Bundle_Studio_Gray_Example = Template.bind({});
K_Mini_Plus_Essentials_Bundle_Studio_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000202016.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000202016.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Essentials_Bundle_Evening_Teal_Example = Template.bind({});
K_Mini_Plus_Essentials_Bundle_Evening_Teal_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000203817.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000203817.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Essentials_Bundle_Matte_White_Example = Template.bind({});
K_Mini_Plus_Essentials_Bundle_Matte_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000341911.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_PLUS_ESSENTIALS_BUNDLE_5000341911.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Essentials_Bundle_Example = Template.bind({});
K_Slim_Essentials_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_ESSENTIALS_BUNDLE_5000363760.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_ESSENTIALS_BUNDLE_5000363760.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Plus_Welcome_Bundle_Example = Template.bind({});
K_Supreme_Plus_Welcome_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_PLUS_WELCOME_BUNDLE_5000368403.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_PLUS_WELCOME_BUNDLE_5000368403.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Cafe_Special_Edition_Gift_Set_Bundle_Example = Template.bind({});
K_Cafe_Special_Edition_Gift_Set_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CAFE_SE_GIFT_SET_5000341465.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_CAFE_SE_GIFT_SET_5000341465.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Essentials_Bundle_Dusty_Rose_Example = Template.bind({});
K_Mini_Essentials_Bundle_Dusty_Rose_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_ESSENTIALS_BUNDLE_5000350706.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_ESSENTIALS_BUNDLE_5000350706.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Essentials_Bundle_Oasis_Example = Template.bind({});
K_Mini_Essentials_Bundle_Oasis_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_ESSENTIALS_BUNDLE_5000356890.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_ESSENTIALS_BUNDLE_5000356890.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Essentials_Bundle_Studio_Gray_Example = Template.bind({});
K_Mini_Essentials_Bundle_Studio_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_ESSENTIALS_BUNDLE_5000203382.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_ESSENTIALS_BUNDLE_5000203382.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Essentials_Bundle_Matte_Black_Example = Template.bind({});
K_Mini_Essentials_Bundle_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_ESSENTIALS_BUNDLE_5000200237.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_ESSENTIALS_BUNDLE_5000200237.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Duo_Gift_Set_Bundle_Example = Template.bind({});
K_Duo_Gift_Set_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_DUO_GIFT_SET_5000204977.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_DUO_GIFT_SET_5000204977.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_Brushed_Gold_Example = Template.bind({});
K_Elite_Brushed_Gold_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359831.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359831.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_Brushed_Silver_Example = Template.bind({});
K_Elite_Brushed_Silver_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359832.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359832.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_Brushed_Slate_Example = Template.bind({});
K_Elite_Brushed_Slate_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359886.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_ELITE_SINGLE_SERVE_COFFEE_MAKER_5000359886.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Black_Example = Template.bind({});
K_Slim_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000363760.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000363760.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_White_Example = Template.bind({});
K_Slim_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000363788.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000363788.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Scarlet_Red_Example = Template.bind({});
K_Slim_Scarlet_Red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000367895.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_SINGLE_SERVE_COFFEE_MAKER_5000367895.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Matte_Black_Example = Template.bind({});
K_Select_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_COFFEE_MAKER_5000359828.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_COFFEE_MAKER_5000359828.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Vintage_Red_Example = Template.bind({});
K_Select_Vintage_Red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_COFFEE_MAKER_5000359889.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_COFFEE_MAKER_5000359889.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Oasis_Example = Template.bind({});
K_Select_Oasis_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_COFFEE_MAKER_5000359890.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_COFFEE_MAKER_5000359890.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Sandstone_Example = Template.bind({});
K_Select_Sandstone_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_COFFEE_MAKER_5000359891.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_COFFEE_MAKER_5000359891.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Matte_NavyExample = Template.bind({});
K_Select_Matte_NavyExample.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_COFFEE_MAKER_5000359892.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_COFFEE_MAKER_5000359892.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Select_Matte_WhiteExample = Template.bind({});
K_Select_Matte_WhiteExample.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SELECT_COFFEE_MAKER_5000359901.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SELECT_COFFEE_MAKER_5000359901.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Everyday_Hero_BLK_Bold_Bundle_Blue_Example = Template.bind({});
K_Slim_Everyday_Hero_BLK_Bold_Bundle_Blue_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_EVERYDAY_HERO_BLK_AND_BOLD_BUNDLE_5000372063.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_EVERYDAY_HERO_BLK_AND_BOLD_BUNDLE_5000372063.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Everyday_Hero_BLK_Bold_Bundle_Yellow_Example = Template.bind({});
K_Slim_Everyday_Hero_BLK_Bold_Bundle_Yellow_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_EVERYDAY_HERO_BLK_AND_BOLD_BUNDLE_5000372064.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_EVERYDAY_HERO_BLK_AND_BOLD_BUNDLE_5000372064.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const McCafe_RMHC_Bundle_Gold_Example = Template.bind({});
McCafe_RMHC_Bundle_Gold_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : MCCAFE_RMHC_BUNDLE_5000371262.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : MCCAFE_RMHC_BUNDLE_5000371262.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const McCafe_RMHC_Bundle_Brown_Example = Template.bind({});
McCafe_RMHC_Bundle_Brown_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : MCCAFE_RMHC_BUNDLE_5000371263.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : MCCAFE_RMHC_BUNDLE_5000371263.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const McCafe_RMHC_Bundle_Blue_Example = Template.bind({});
McCafe_RMHC_Bundle_Blue_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : MCCAFE_RMHC_BUNDLE_5000371264.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : MCCAFE_RMHC_BUNDLE_5000371264.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Classic_Black_Example = Template.bind({});
K_Classic_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K50_COFFEE_MAKER_5000204441.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K50_COFFEE_MAKER_5000204441.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Classic_Rhubarb_Example = Template.bind({});
K_Classic_Rhubarb_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K50_COFFEE_MAKER_5000345253.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K50_COFFEE_MAKER_5000345253.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Back_To_College_Bundle_Example = Template.bind({});
K_Mini_Back_To_College_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_BACK_TO_COLLEGE_BUNDLE_5000356890.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_MINI_BACK_TO_COLLEGE_BUNDLE_5000356890.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Iced_Dunkin_Bundle_Example = Template.bind({});
K_Slim_Iced_Dunkin_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_ICED_BOI_DUNKIN_BUNDLE_5000365009.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_ICED_BOI_DUNKIN_BUNDLE_5000365009.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Express_Example = Template.bind({});
K_Express_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_EXPRESS_SINGLE_SERVE_COFFEE_MAKER_5000358267.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_EXPRESS_SINGLE_SERVE_COFFEE_MAKER_5000358267.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K155_OfficePro_Premier_Example = Template.bind({});
K155_OfficePro_Premier_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K155_BREWING_SYSTEM_5000375230.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K155_BREWING_SYSTEM_5000375230.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Community_Coffee_Bundle_Gray_Example = Template.bind({});
K_Supreme_Community_Coffee_Bundle_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368400.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368400.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Community_Coffee_Bundle_Black_Example = Template.bind({});
K_Supreme_Community_Coffee_Bundle_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368401.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368401.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Community_Coffee_Bundle_White_Example = Template.bind({});
K_Supreme_Community_Coffee_Bundle_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368402.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000368402.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Community_Coffee_Bundle_Farmhouse_White_Example = Template.bind({});
K_Supreme_Community_Coffee_Bundle_Farmhouse_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000361865.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000361865.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Community_Coffee_Bundle_Silver_Sage_Example = Template.bind({});
K_Supreme_Community_Coffee_Bundle_Silver_Sage_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000363309.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SUPREME_COMMUNITY_COFFEE_BUNDLE_5000363309.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Slim_Iced_Example = Template.bind({});
K_Slim_Iced_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SLIM_ICED_SINGLE_SERVE_COFFEE_MAKER_5000365009.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_SLIM_ICED_SINGLE_SERVE_COFFEE_MAKER_5000365009.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Iced_Bundle_Arctic_Gray_Example = Template.bind({});
K_Iced_Bundle_Arctic_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ICED_BUNDLE_5000371871.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_ICED_BUNDLE_5000371871.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Iced_Bundle_White_Example = Template.bind({});
K_Iced_Bundle_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ICED_BUNDLE_5000374055.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_ICED_BUNDLE_5000374055.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Compact_Example = Template.bind({});
K_Compact_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_COMPACT_COFFEE_MAKER_5000376527.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_COMPACT_COFFEE_MAKER_5000376527.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Milk_Frother_Bundle_Matte_Black_Example = Template.bind({});
K_Mini_Plus_Milk_Frother_Bundle_Matte_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000200239.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000200239.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Milk_Frother_Bundle_Cardinal_red_Example = Template.bind({});
K_Mini_Plus_Milk_Frother_Bundle_Cardinal_red_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000200240.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000200240.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Milk_Frother_Bundle_Cool_Aqua_Example = Template.bind({});
K_Mini_Plus_Milk_Frother_Bundle_Cool_Aqua_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000361863.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000361863.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Milk_Frother_Bundle_Matte_White_Example = Template.bind({});
K_Mini_Plus_Milk_Frother_Bundle_Matte_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000341911.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000341911.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Milk_Frother_Bundle_Evening_Teal_Example = Template.bind({});
K_Mini_Plus_Milk_Frother_Bundle_Evening_Teal_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000203817.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000203817.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Mini_Plus_Milk_Frother_Bundle_Studio_Gray_Example = Template.bind({});
K_Mini_Plus_Milk_Frother_Bundle_Studio_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000202016.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_MINI_PLUS_MILK_FROTHER_BUNDLE_5000202016.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Cafe_Gift_Set_Bundle_Example = Template.bind({});
K_Cafe_Gift_Set_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CAFE_GIFT_SET_5000201735.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_CAFE_GIFT_SET_5000201735.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Duo_Plus_McCafe_Best_Seller_Bundle_Example = Template.bind({});
K_Duo_Plus_McCafe_Best_Seller_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_DUO_PLUS_MCCAFE_BEST_SELLER_BUNDLE_5000363818.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_DUO_PLUS_MCCAFE_BEST_SELLER_BUNDLE_5000363818.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Classic_Essentials_Bundle_Rhubarb_Example = Template.bind({});
K_Classic_Essentials_Bundle_Rhubarb_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CLASSIC_ESSENTIALS_BUNDLE_5000345253.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_CLASSIC_ESSENTIALS_BUNDLE_5000345253.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Classic_Essentials_Bundle_Black_Example = Template.bind({});
K_Classic_Essentials_Bundle_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_CLASSIC_ESSENTIALS_BUNDLE_5000204441.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_CLASSIC_ESSENTIALS_BUNDLE_5000204441.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Supreme_Plus_Smart_Exceptional_Brews_Bundle_Example = Template.bind({});
K_Supreme_Plus_Smart_Exceptional_Brews_Bundle_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_SUPREME_PLUS_SMART_EXCEPTIONAL_BREWS_BUNDLE_5000361470.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_SUPREME_PLUS_SMART_EXCEPTIONAL_BREWS_BUNDLE_5000361470.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_Gift_Set_Bundle_Brushed_Gold_Example = Template.bind({});
K_Elite_Gift_Set_Bundle_Brushed_Gold_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_GIFT_SET_5000359831.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_ELITE_GIFT_SET_5000359831.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_Gift_Set_Bundle_Brushed_Silver_Example = Template.bind({});
K_Elite_Gift_Set_Bundle_Brushed_Silver_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_GIFT_SET_5000359832.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_ELITE_GIFT_SET_5000359832.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};
export const K_Elite_Gift_Set_Bundle_Brushed_Slate_Example = Template.bind({});
K_Elite_Gift_Set_Bundle_Brushed_Slate_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : K_ELITE_GIFT_SET_5000359886.brewerName,
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs :K_ELITE_GIFT_SET_5000359886.productImage
    },
    hasCoupon : true,
    /*couponMessage : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",*/
    couponAppliedMessage : "Coupon Applied. Add item to the cart to see the discount.",
    learnMoreTitleKSK : "Why choose a Keurig Starter Kit?",
    learnMoreMessagingKSK : "Choose the Starter Kit that's right for you, select your beverages, and set your schedule for convenient Auto-Delivery.",
    learnMoreTitleBrewerOnly : "20% Off on Eligible Coffee Makers. Add to cart to see discount.",
    learnMoreMessagingBrewerOnly : "*Offer valid for 20% off select coffee makers purchased on www.Keurig.com or on the Keurig® App through 11:59 p.m. PST on 02/14/2023. Does not include Keurig® K-Express Coffee Maker, Keurig® K155 OfficePRO® Premier Brewing System, my Keurig® Custom Coffee Makers, illy® products or any Keurig® bundles. Enter code BREWLOVE23 in the “Coupon(s)” box during checkout. Free standard shipping to contiguous U.S. addresses on all brewers and orders of $35 or more, after any promo codes, discounts, and coupons are applied. Cannot be combined with other offers, previous purchases, Auto-Delivery orders or Rewards Catalog purchases. Keurig reserves the right to cancel, remove, or make changes to the products and/or product pricing available under this offer at any time. All trademarks are the property of their respective owners, used with permission.",
    hasKSK : true,
    colorVariants : [
        {
            inStock : true,
            colorName : "Black",
            colorValue : "black",
        },
        {
            inStock : true,
            colorName : "Stainless Steel",
            colorValue : "grey",
        }
    ],
    starRating :{
        ratingNumber : 4.5,
        totalNumberOfReviews : 1034,
        totalNumberOfStars : 5
    },
    freeShippingMessage : "This item ships FREE"

};