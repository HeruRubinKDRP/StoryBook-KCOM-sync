import React, {useEffect} from 'react';
import MemberPriceCard, {iMemberPricingCardProps} from '../member-price-card/card-member-pricing';
import {GridContainer, OuterContainer} from "./member-card-grid.styled";
import KButton from "../../../Kbutton/KButton";
import {AnimatedButton} from "../PromoOverlay/PerksPricing/perks-pricing-promo.styled";
import PerksPromo from "../PromoOverlay/PerksPricing/PerksPricingPromoOverlay";
import {useResizeDetector} from "react-resize-detector";
import {simplifiedPodItems} from "../../../Experimental/Add-to-cart/AddToCartDemo";
import {podItemT} from "../../../../pages/myBrews";
import {AddToCartJourneyLarge} from "../../../Experimental/Add-to-cart/large-version/AddToCartJourneyLarge";


export interface ProductGridProps {
    products: iMemberPricingCardProps[];
    isLoggedIn: boolean;
    priceLabel: string;
    freeShippingTarget: number;
    numberOfSuggestions: number;
    currentCartValue: number;
    suggestedProducts: podItemT[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
                                                     suggestedProducts,
                                                     currentCartValue,
                                                     numberOfSuggestions,
                                                     products,
                                                     isLoggedIn,
                                                     priceLabel,
                                                     freeShippingTarget
                                                 }) => {
    const [showIntro, setShowIntro] = React.useState<boolean>(true);
    const [showAddedToCart, setShowAddedToCart] = React.useState<boolean>(false);
    const [formFactor, setFormFactor] = React.useState<"small-mobile" | "mobile" | "desktop">("desktop");




    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 200,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {
        },
    })

    useEffect(() => {
        if (!width) return;


        if (width >= 1001) {
            setFormFactor("desktop");
            return;
        }

        if (width < 1001 && width >= 600) {
            setFormFactor("mobile");
            return;
        }

        if (width < 600 && width > 400) {
            setFormFactor("mobile");
            return;
        }

        if (width < 400) {
            setFormFactor("mobile");
            return;
        }


    }, [width]);


    useEffect(() => {
        setTimeout(() => {
            setShowIntro(false);
        }, 8000);
    }, []);

    return (
        <OuterContainer>
            {showIntro && (
                <div className="overlay">
                    <PerksPromo graphicName={"perks-logo-small"}/>
                    <AnimatedButton>
                        <KButton
                            transitionType="expand-bg"
                            classes={`cta-main subscribe `}
                            buttonWidth="fit-width"
                            label={'Continue'}
                            iconStandard="none"
                            iconPlacement="after-label"
                            buttonType="secondary"
                            actionFunc={() => {
                                setShowIntro(false);
                            }}
                        />
                    </AnimatedButton>
                </div>
            )
            }

            {
                showAddedToCart && (
                    <AddToCartJourneyLarge
                        freeShippingTarget={freeShippingTarget}
                        selectedProduct={simplifiedPodItems(suggestedProducts.slice(2))[0]}
                        suggestedProducts={simplifiedPodItems(suggestedProducts.slice(1, 4))}
                        numberOfSuggestions={numberOfSuggestions}
                        currentCartTotal={currentCartValue}
                        closeFunc={()=> setShowAddedToCart(false)}
                    />
                )
            }

            <GridContainer ref={ref} className={`grid-container ${showIntro ? "" : "hide-scroll" } ${showAddedToCart ? "" : "hide-scroll" } `}>
                {products.map((product, index) => (
                    <MemberPriceCard
                        calculateCardWidth={false}
                        key={index}
                        product={product.product}
                        isLoggedIn={isLoggedIn}
                        formFactor={formFactor} // You can make this dynamic based on screen size as well if needed
                        priceLabel={priceLabel}
                        actionFunction={() => setShowAddedToCart(true)}
                        infoFunction={() => setShowIntro(true)}
                    />
                ))}
            </GridContainer>
        </OuterContainer>
    );
};

export default ProductGrid;
