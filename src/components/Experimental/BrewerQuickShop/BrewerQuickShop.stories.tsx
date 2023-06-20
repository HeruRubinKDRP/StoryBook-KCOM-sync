import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react/types-6-0";
import { K_Iced_Arctic_Gray, K_Iced_White, K_Cafe_Smart_Black, K_Supreme_Plus_Smart_Black_Stainless, K_Supreme_Plus_Smart_Stainless_Steel, K_Supreme_Smart_Black, K_Supreme_Smart_Gray, K_Supreme_Smart_White, K_Duo_Special_Edition, K_Duo, K_Duo_Plus, K_Cafe_Special_Edition, K_Cafe, K_Supreme_Plus, K_Supreme_Farmhouse_White, K_Supreme_Silver_Sage, K_Supreme_Gray, K_Supreme_Black, K_Supreme_White, K_Mini_Plus_Matte_Black, K_Mini_Plus_Cardinal_Red, K_Mini_Plus_Gray, K_Mini_Plus_Evening_Teal, K_Mini_Plus_Matte_White, K_Mini_Plus_Cool_Aqua, K_Mini_Plus_Misty_Green, K_Duo_Plus_Gift_Set_Bundle, K_Slim_Essentials_Bundle, K_Supreme_Plus_Welcome_Bundle, K_Cafe_Special_Edition_Gift_Set_Bundle, K_Duo_Gift_Set_Bundle, K_Mini_Essentials_Bundle_Dusty_Rose, K_Mini_Essentials_Bundle_Oasis, K_Mini_Essentials_Bundle_Studio_Gray, K_Mini_Essentials_Bundle_Matte_Black, K_Mini_Plus_Essentials_Bundle_Matte_Black, K_Mini_Plus_Essentials_Bundle_Cardinal_Red, K_Mini_Plus_Essentials_Bundle_Studio_Gray, K_Mini_Plus_Essentials_Bundle_Evening_Teal, K_Mini_Plus_Essentials_Bundle_Matte_White, K_Select_Essentials_Bundle_Matte_Black, K_Select_Essentials_Bundle_Matte_Navy, K_Select_Essentials_Bundle_Matte_White, K_Select_Essentials_Bundle_Oasis, K_Select_Essentials_Bundle_Sandstone, K_Select_Essentials_Bundle_Vintage_Red, K_Elite_McCafe_Best_Seller_Bundle_Brushed_Gold, K_Elite_McCafe_Best_Seller_Bundle_Brushed_Slate, K_Elite_McCafe_Best_Seller_Bundle_Brushed_Silver, K_Supreme_Welcome_Bundle_Gray, K_Supreme_Welcome_Bundle_Black, K_Mini_Starbucks_Bundle, K_Mini_Matte_Black, K_Mini_Evergreen, K_Mini_Poppy_Red, K_Mini_Oasis, K_Mini_Dusty_Rose, K_Mini_Chill_Green, K_Mini_Studio_Gray} from "data/brewer-quickshop-images";
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

const Template: Story<iBrewerQuickShop> = (args) => (
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
export const K_Iced_Arctic_Gray_Example = Template.bind({});
K_Iced_Arctic_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Iced_Arctic_Gray
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

export const K_Iced_White_Example = Template.bind({});
K_Iced_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Iced_White
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

export const K_Cafe_Smart_Black_Example = Template.bind({});
K_Cafe_Smart_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Cafe_Smart_Black
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

export const K_Supreme_Plus_Smart_Black_Stainless_Example = Template.bind({});
K_Supreme_Plus_Smart_Black_Stainless_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Plus_Smart_Black_Stainless
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

export const K_Supreme_Plus_Smart_Stainless_Steel_Example = Template.bind({});
K_Supreme_Plus_Smart_Stainless_Steel_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Plus_Smart_Stainless_Steel
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

export const K_Supreme_Smart_Black_Example = Template.bind({});
K_Supreme_Smart_Black_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Smart_Black
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

export const K_Supreme_Smart_Gray_Example = Template.bind({});
K_Supreme_Smart_Gray_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Smart_Gray
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

export const K_Supreme_Smart_White_Example = Template.bind({});
K_Supreme_Smart_White_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Smart_White
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

export const K_Duo_Special_Edition_Example = Template.bind({});
K_Duo_Special_Edition_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Duo_Special_Edition
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

export const K_Duo_Example = Template.bind({});
K_Duo_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Duo
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

export const K_Duo_Plus_Example = Template.bind({});
K_Duo_Plus_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Duo_Plus
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

export const K_Cafe_Special_Edition_Example = Template.bind({});
K_Cafe_Special_Edition_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Cafe_Special_Edition
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Cafe
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

export const K_Supreme_Plus_Example = Template.bind({});
K_Supreme_Plus_Example.args = {
    mainFlagColor : "KSK",
    mainFlagLabel : "Create a kit and save",
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Plus
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Farmhouse_White
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Silver_Sage
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Gray
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_White
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Matte_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Cardinal_Red
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Gray
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Evening_Teal
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Matte_White
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Cool_Aqua
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Misty_Green
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Matte_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Studio_Gray
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Chill_Green
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Dusty_Rose
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Oasis
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Poppy_Red
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Evergreen
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Starbucks_Bundle
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Welcome_Bundle_Gray
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Welcome_Bundle_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Duo_Plus_Gift_Set_Bundle
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Elite_McCafe_Best_Seller_Bundle_Brushed_Gold
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Elite_McCafe_Best_Seller_Bundle_Brushed_Silver
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Elite_McCafe_Best_Seller_Bundle_Brushed_Slate
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Select_Essentials_Bundle_Matte_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Select_Essentials_Bundle_Matte_Navy
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Select_Essentials_Bundle_Matte_White
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Select_Essentials_Bundle_Oasis
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Select_Essentials_Bundle_Sandstone
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Select_Essentials_Bundle_Vintage_Red
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Essentials_Bundle_Matte_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Essentials_Bundle_Cardinal_Red
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Essentials_Bundle_Studio_Gray
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Essentials_Bundle_Evening_Teal
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Plus_Essentials_Bundle_Matte_White
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Slim_Essentials_Bundle
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Supreme_Plus_Welcome_Bundle
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Cafe_Special_Edition_Gift_Set_Bundle
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Essentials_Bundle_Dusty_Rose
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Essentials_Bundle_Oasis
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Essentials_Bundle_Studio_Gray
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Mini_Essentials_Bundle_Matte_Black
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
    productNameExtended : "K-Café® SMART Single Serve Coffee Maker",
    productName : "Keurig®",
    tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    carousel : {
        slideImageURLs : K_Duo_Gift_Set_Bundle
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

