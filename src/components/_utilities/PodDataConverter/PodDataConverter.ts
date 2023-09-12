import {podItemT, productTypeT} from "../../../pages/myBrews";
import { iProductInfoCardProps} from "../../CLP/product-card.interfaces";
import {iFlag} from "../../Flag/Flag";
import {iMemberPricingCardProps} from "../../CLP/MemberPricing/member-price-card/card-member-pricing"; // Update the import path


export function transformPodItemsToProductInfoCardProps(
    podItems: podItemT[],
    defaultProductType: productTypeT,
    ratingVisible: boolean,
    onClick: () => void,
    classes?: string,
    flipFunction?: () => void,
    useBanner?: boolean,
    bannerSettings?: iFlag
): iProductInfoCardProps[] {
    return podItems.map(podItem => (

        {
            image: podItem.productImagePrimaryPath || '',
            brand: podItem.brand,
            name: podItem.podName,
            isLoggedIn: true,
            formFactor: 'mobile',
            priceLabel: 'Member Pricing',
            calculateCardWidth : false,
            actionFunction: () => {},
            infoFunction: () => {},
            pricingMode: 'member',
            pricingStyle : 'one-price',
            cardVisualStyle : "control",
            showRatings : false,
            ratingsLayout : "horizontal",
            cardMode: 'simple',
            prices: podItem.variant
                ? podItem.variant.map(variant => ({
                    price: variant.basePrice || 0, // assuming price is a field in variant
                    inStock: true, // set a default value or get it from the data
                    variant:{
                        quantity: variant.boxCount || 0,
                        variantName: "ct",
                    }
                }))
                : [],
            ratingVisible,
            rating: {
                totalNumberOfStars: 5,
                totalNumberOfReviews: 1231, // You might want to get this info from somewhere else
                ratingNumber: 4.2, // You might want to get this info from somewhere else
            },
            onClick,
            // prices, ratingVisible, rating, onClick
            product: {
                id: podItem.podId,
                image: podItem.productImagePrimaryPath || '',
                brand: podItem.brand,
                name: podItem.podName,
                prices: podItem.variant
                    ? podItem.variant.map(variant => ({
                        price: variant.basePrice || 0, // assuming price is a field in variant
                        inStock: true, // set a default value or get it from the data
                        variant:{
                            quantity: variant.boxCount || 0,
                            variantName: "ct",
                        }
                    }))
                    : [],
                ratingVisible,
                rating: {
                    totalNumberOfStars: 5,
                    totalNumberOfReviews: 1231, // You might want to get this info from somewhere else
                    ratingNumber: 4.2, // You might want to get this info from somewhere else
                },
                onClick,
                classes,
                flipFunction,
                useBanner,
                bannerSettings,
            }
        }
    ));
}
