import {BrewerQuickShopStyled} from "./BrewerQuickShopStyled";
import {useResizeDetector} from "react-resize-detector";
import {ProductIdentity} from "../../PDP_Related/ProductIdentity/ProductIdentityArea";
import {Kcarousel} from "../../Carousel/Kcarousel";
import React, {ReactElement, useState} from "react";
import {imageItemType, iSlideImages} from "../../Carousel/SlideImages";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {ColorPicker, iColorPicker, productVariantColor} from "../../colorPicker/colorPicker";
import KButton from "../../Kbutton/KButton";
import {KSKPurchaseOption} from "./KSK_purchase_options/KSK_purchase_option";
import {BrewerOnlyPurchaseOption} from "./KSK_purchase_options/BrewerOnly_Purchase_option";
import {getContainerQuery} from "../Add-to-cart/reusable css/container-queries";
import Graphic from "../../Graphic/Graphic";
import {css} from "styled-components";
import {ModalStyled} from "../Modal-Styled";
import {KSK_Content} from "./quick-shop-content/KSK_Content";
import ColorVariantSelector from "../../colorPicker/simple-color-picker/color-picker-simple";
import {OutOfStock} from "../../OutOfStock/OutOfStock";

export interface iBrewerQuickShop {
    productName: string;
    productNameExtended: string;
    tagline?: string;
    hasKSK: boolean;
    hasCoupon: boolean;
    couponMessage: string;
    couponAppliedMessage: string;
    learnMoreTitleKSK: string;
    learnMoreTitleBrewerOnly: string;
    learnMoreMessaging: string;
    learnMoreMessagingKSK: string
    learnMoreMessagingBrewerOnly: string
    carousel: {
        slideImageURLs: imageItemType[]
    };

    maxQuantityAllowed: number

    colorVariants: productVariantColor[];
    mainFlagColor: colorByNameType;
    mainFlagLabel: string;
    KSK_BannerMessage: string;
    portalTarget: string;
    hasFreeShipping: boolean;
    freeShippingMessage: string;

    starRating: {
        ratingNumber: number;
        totalNumberOfReviews: number;
        totalNumberOfStars: 5 | 10;
    }

    closeFunc?: () => void;
    addToCartFunction?: () => void;
}

const BrewerQuickShop = (props: iBrewerQuickShop) => {

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {
        },
    })

    const getDynamicStyles = (widthX: number) => {
        return css`
          --overallWidth: ${widthX}px;
          --colorKSK: ${colorNameToValue("KSK")};
          --colorOK: ${colorNameToValue("OK-Status")};
          --colorDiscount: ${colorNameToValue("discount")};
          --colorMedGrey: ${colorNameToValue("medium-grey")};
          --colorDarkRoast: ${colorNameToValue("dark-roast")};
        `
    }
    const [learnMoreTitle, setLearnMoreTitle] = React.useState("");
    const [learnMoreContent, setLearnMoreContent] = React.useState<React.ReactNode>("");
    const [learnMoreOpen, setLearnMoreOpen] = React.useState(false);
    const [outOfStock, setOutOfStock] = useState<boolean>(false);

    const [selectedVariant, setSelectedVariant] = useState<number>(0);
    const getImageSlides = () => {
        let slideImages: ReactElement[] = [];

        for (let i = 0; i < props.carousel.slideImageURLs.length; i++) {
            slideImages.push(
                <div key={i} className="image-item-container">
                    <img alt={props.carousel.slideImageURLs[i].altText} className="image-item"
                         src={props.carousel.slideImageURLs[i].path} title=""/>
                </div>
            )
        }

        return slideImages;
    }

    const variantAction = (inStock: boolean, colorValue: string, colorName: string, index: number) => {
        setSelectedVariant(index);
        setOutOfStock(!inStock)
        console.log("variantAction", inStock, colorValue, colorName);
    }

    return (
        <ModalStyled ref={ref} className={`modal modal-${getContainerQuery(width)}`} style={{}}>
            <BrewerQuickShopStyled
                className={`brewer-quickshop-container ${props.mainFlagColor} ${getContainerQuery(width)}`}
                overallWidth={width ? width : 0}
                calculatedOverallWidthVar={getDynamicStyles(width ? width : 0)}
            >
                {
                    learnMoreOpen ?
                        <div className="learn-more-container">
                            <div className="learn-more-content">
                                <div className="messaging-area">
                                    <h3>{learnMoreTitle}</h3>
                                    <p>{learnMoreContent}
                                    </p>
                                </div>
                                <div className="actions">
                                    <KButton
                                        buttonWidth="fit-width"
                                        buttonType="secondary"
                                        actionFunc={() => setLearnMoreOpen(false)}
                                        label="Close"
                                        iconPlacement="right-edge"
                                        iconStandard="close"
                                    />
                                </div>
                            </div>

                        </div> : <></>
                }
                <KButton
                    buttonType="text-icon-noBG"
                    buttonWidth="fit-to-content"
                    classes="close-btn"
                    iconPlacement="right-edge"
                    iconStandard="close"
                    label=""
                    actionFunc={props.closeFunc}
                />

                <Kcarousel
                    carouselType="slider"
                    component="carousel"
                    itemsPerSlide={1}
                    keepNavButtons={true}
                    navPosition="bottom"
                    navStyle="thumbnails"
                    slides={getImageSlides()}
                    useContainerQueries="ignore"
                />
                <div className="product-info-container">
                    <ProductIdentity
                        productName={props.productName}
                        productNameExtended={props.productNameExtended}
                        tagline={props.tagline}
                        rating={{
                            totalNumberOfStars: props.starRating.totalNumberOfStars,
                            ratingNumber: props.starRating.ratingNumber,
                            totalNumberOfReviews: props.starRating.totalNumberOfReviews,
                            scrollToTargetID: "reviews"
                        }}
                        flag={{
                            flagStyle: "alternating-sharp-round",
                            flagColorClass: props.mainFlagColor,
                            flagLabel: props.mainFlagLabel
                        }}
                    />

                    {/*//Variant Selector*/}
                    {
                        props.colorVariants.length > 0 ?
                            <>
                                <div className="variant-selector-label">
                                    <h3>Color</h3>
                                    <h3>{props.colorVariants[selectedVariant].colorName}</h3>
                                </div>
                                <ColorVariantSelector
                                    variants={props.colorVariants}
                                    onVariantClick={variantAction }
                                />
                            </>
                             : <></>
                    }

                    {
                        !outOfStock && <div className="purchase-options">
                            {props.hasKSK ?
                                <KSKPurchaseOption
                                    openExternalLearnMoreFunction={() => {
                                        setLearnMoreTitle(props.learnMoreTitleKSK);
                                        setLearnMoreContent(
                                            <KSK_Content />
                                        );
                                        setLearnMoreOpen(true);
                                    }}
                                />
                                :
                                <></>
                            }
                            <BrewerOnlyPurchaseOption
                                couponAppliedMessage={props.couponAppliedMessage}
                                hasCoupon={props.hasCoupon}
                                couponMessage={props.couponMessage}
                                openExternalLearnMoreFunction={() => {
                                    setLearnMoreTitle(props.learnMoreTitleBrewerOnly);
                                    setLearnMoreContent(<div>{props.learnMoreMessagingBrewerOnly}
                                    </div>);
                                    setLearnMoreOpen(true);
                                }}
                                addToCartFunction={props.addToCartFunction ? props.addToCartFunction : () => {
                                }}
                            />
                        </div>
                    }
                    {
                        outOfStock && <OutOfStock />
                    }
                    {props.hasFreeShipping ?
                        <div className="free-shipping-container">
                            <Graphic graphicName="free-shipping-truck"/>
                            <span>{props.freeShippingMessage}</span>
                        </div> : <></>}
                </div>

            </BrewerQuickShopStyled>
        </ModalStyled>
    )

}

export default BrewerQuickShop;