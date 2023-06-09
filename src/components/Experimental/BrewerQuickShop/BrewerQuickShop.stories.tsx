import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react/types-6-0";
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