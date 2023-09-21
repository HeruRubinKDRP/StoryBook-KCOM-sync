import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import React, {ReactElement, useEffect, useRef} from "react";
import {useResizeDetector} from "react-resize-detector";

import {Kcarousel} from "../../Carousel/Kcarousel";
import {iSlideImages, SlideImages} from "../../Carousel/SlideImages";


import {getElementType} from "../../ContentComponents/getElements";
import {
    FeatureBulletsArea,
    iFeatureBulletsArea
} from "../../FeatureBullets/FeatureBulletsArea/FeatureBulletsArea";
import {flagStylesT} from "../../Flag/Flag";
import {AddKSK, iAddKSK} from "../../PDP_Related/AddKSK";
import {FreeShipping} from "../../PDP_Related/FreeShipping/FreeShipping";
import {ProductIdentity} from "../../PDP_Related/ProductIdentity/ProductIdentityArea";
import {
    iSecondaryPurchaseOptions,
    SecondaryPurchaseOptions
} from "../../PDP_Related/SecondaryPurchaseOptions/SecondaryPurchaseOptions";
import {iRating} from "../../Rating/Rating";
import {iScrubVideo, ScrubVideo} from "../../ScrubVideo/ScrubVideo";
import {SpecificationsArea} from "../../SpecificationsArea/SpecificationsArea";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {PDP_container, Pdp_frameworkStyled} from "./pdp_framework.styled";
import {iStickyHeader, StickyHeader} from "../../Sticky Header/StickyHeader";
import KButton from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";
import ScrollToTopButton from "../../Kbutton/scroll-to-top-button/SrollToTopBtn";
import Image from "next/image";


export interface iPdpFramework {
    testParams: {
        scrollToTop: boolean;
    }
    stickyHeader: iStickyHeader;
    carousel: iSlideImages
    specsArea: {
        contentArea: getElementType[],
        mediaElementPath: string,
        mediaType: "movie" | "image",
    }
    productIdentity: {
        productName: string,
        productNameExtended: string,
        tagline?: string,
        rating?: iRating,
        flag: {
            flagLabel: string,
            flagStyle: flagStylesT,
            flagColorOverride?: string,
        }
    }
    addKSK: {
        hasKSK: boolean,
        kskData: iAddKSK
    }
    secondaryPurchaseOptions: {
        hasSecondaryPurchaseOptions: boolean,
        secondaryData: iSecondaryPurchaseOptions
    }
    freeShipping: {
        colorOverride: colorByNameType;
        messageText: string;
        showFreeShipping: boolean;
        sizeOverride: string;
    }
    featureBullets: {
        SMART: {
            hasSMART: boolean,
            bullets: iFeatureBulletsArea
        },
        features: {
            hasBullets: boolean,
            bullets: iFeatureBulletsArea
        }
    }

    flyAround: {
        hasFlyAround: boolean,
        flyAroundSettings: iScrubVideo
    }

    contentArea: ReactElement

}

export const PdpFramework = (props: iPdpFramework) => {
    const {width, height, ref} = useResizeDetector({
        handleHeight: false,
        refreshMode: 'debounce',
        refreshRate: 1000,
        skipOnMount: false
    });
    const carouselRef = useRef<HTMLDivElement>(null)
    const mediaContainerRef = useRef<HTMLDivElement>(null)
    const endPin = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!carouselRef.current || !mediaContainerRef.current) {
            return
        }

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create(
            {
                trigger: mediaContainerRef.current,
                start: "top top",
                end: `bottom bottom`,
                pin: carouselRef.current,
                pinSpacing: false,
                scrub: false,
                onUpdate: function (self) {
                    console.log("scrolled by: ", self.scroll())
                },
                onEnter: function (item: ScrollTrigger) {
                    console.log("trigger enter", item.start)
                },
                onLeave: function (item: ScrollTrigger) {
                    console.log("leave", item.end)
                }
            }
        )
        ScrollTrigger.refresh()

    }, [width])

    const getContainerQuery = (widthX: number | undefined) => {
        if (!widthX) {
            return "mobile no-w"
        }
        if (widthX > 660) {
            return "desktop";
        } else {
            return "mobile";
        }
    }

    const onExpandBuyingOptions = () => {
        ScrollTrigger.refresh();
    }

    const getImageSlides = () => {
        let slideImages: ReactElement[] = [];

        for (let i = 0; i < props.carousel.slideImageURLs.length; i++) {
            slideImages.push(
                <div key={i} className="image-item-container">
                    <Image alt={props.carousel.slideImageURLs[i].altText} className="image-item"
                         src={props.carousel.slideImageURLs[i].path} title=""/>
                </div>
            )
        }

        return slideImages;
    }

    const getKSK = () => {
        if (!props.addKSK.hasKSK) {
            return
        }
        return (
            <AddKSK
                brewerImagePath={props.addKSK.kskData.brewerImagePath}
                finePrint={props.addKSK.kskData.finePrint}
                numberOfRequiredPods={props.addKSK.kskData.numberOfRequiredPods}
                flag={{
                    flagColor: props.addKSK.kskData.flag.flagColor,
                    flagLabel: props.addKSK.kskData.flag.flagLabel
                }}
                message={{
                    primaryMessage: props.addKSK.kskData.message.primaryMessage,
                    secondaryMessage: props.addKSK.kskData.message.secondaryMessage
                }}
                learnMore={{
                    label: props.addKSK.kskData.learnMore?.label,
                    mode: props.addKSK.kskData.learnMore?.mode,
                    articleTitle: props.addKSK.kskData.learnMore?.articleTitle,
                    articleContent: props.addKSK.kskData.learnMore?.articleContent,
                }}
                price={{
                    basePrice: props.addKSK.kskData.price.basePrice,
                    finalPrice: props.addKSK.kskData.price.finalPrice
                }}
                themeColor="KSK"
            />
        )
    }

    const getSMART_bullets = () => {
        if (!props.featureBullets.SMART.hasSMART) {
            return
        }
        return (
            <FeatureBulletsArea
                height={props.featureBullets.SMART.bullets.height}
                featuresAreaName={props.featureBullets.SMART.bullets.featuresAreaName}
                features={props.featureBullets.SMART.bullets.features}
            />
        )
    }

    const getFeatureBullets = () => {
        if (!props.featureBullets.features.hasBullets) {
            return
        }
        return (
            <FeatureBulletsArea
                height={props.featureBullets.features.bullets.height}
                featuresAreaName={props.featureBullets.features.bullets.featuresAreaName}
                features={props.featureBullets.features.bullets.features}
            />
        )
    }

    const getScrubVideo = () => {
        if (!props.flyAround.hasFlyAround) {
            return
        }
        return (
            <ScrubVideo
                duration={8.5}
                mediaPath="/360s/kcs7.webm"
                scrollDuration={450}
                videoHeight="100vh"
            />
        )
    }

    return (
        <PDP_container>
            <StickyHeader navigationRelated={{
                sizingMode: props.stickyHeader.navigationRelated.sizingMode,
                loggedIn: props.stickyHeader.navigationRelated.loggedIn,
                emailErrorMessage: props.stickyHeader.navigationRelated.emailErrorMessage,
                emailSuccessMessage: props.stickyHeader.navigationRelated.emailSuccessMessage,
                emailExplanationText: props.stickyHeader.navigationRelated.emailExplanationText,
                placeHolderText: props.stickyHeader.navigationRelated.placeHolderText,
                defaultActiveHoverIndex: -1,
                submitButtonText: props.stickyHeader.navigationRelated.submitButtonText,
                isNobo: props.stickyHeader.navigationRelated.isNobo,
                navItems: props.stickyHeader.navigationRelated.navItems
            }}
             stickyHeaderMode={props.stickyHeader.stickyHeaderMode}
            >
                <div className="purchase-options-container">
                    <div className="price-area">
                        <p>As low as</p>
                        <Price basePrice={props.addKSK.kskData.price.finalPrice} currency="$"/>
                    </div>
                    {
                        props.testParams.scrollToTop ?

                            <ScrollToTopButton
                                scrollDuration={799}
                                scrollToPosition={window.innerHeight * 0.2}
                                buttonProps={
                                    {
                                        label: "Buy Now",
                                        buttonType: "primary",
                                        buttonWidth: "fit-to-content",
                                        iconStandard: "none",
                                        transitionType: "expand-bg",
                                        backgroundColorOverride: colorNameToValue("KSK")
                                    }
                                }
                            />
                            :
                            <KButton
                                label="Buy Now"
                                buttonType="primary"
                                buttonWidth="fit-to-content"
                                iconStandard="none"
                                transitionType="expand-bg"
                                backgroundColorOverride={colorNameToValue("KSK")}
                            />
                    }


                </div>
            </StickyHeader>
            <Pdp_frameworkStyled ref={ref} className={`${getContainerQuery(width)} pdp-outer page-container`}>
                <div className="background-fader"></div>
                <div className="main-pdp-section">
                    <div ref={carouselRef} className="media-area">
                        <div>
                            <Kcarousel
                                carouselType="slider"
                                component="carousel"
                                itemsPerSlide={1}
                                keepNavButtons={true}
                                navPosition="bottom"
                                navStyle="thumbnails"
                                slides={getImageSlides()}
                            />
                        </div>
                    </div>
                    <div ref={mediaContainerRef} className="product-details">
                        <ProductIdentity
                            productName={props.productIdentity.productName}
                            productNameExtended={props.productIdentity.productNameExtended}
                            rating={props.productIdentity.rating}
                            tagline={props.productIdentity.tagline}
                            flag={{
                                flagStyle: props.productIdentity.flag.flagStyle,
                                flagLabel: "KSK",
                            }}
                        />
                        {getKSK()}
                        <SecondaryPurchaseOptions
                            onExpandAction={() => onExpandBuyingOptions()}
                            basePrice={props.secondaryPurchaseOptions.secondaryData.basePrice}
                            couponDetails={props.secondaryPurchaseOptions.secondaryData.couponDetails}
                            coupons={props.secondaryPurchaseOptions.secondaryData.coupons}
                            mainActionLabel={props.secondaryPurchaseOptions.secondaryData.mainActionLabel}
                            mainAddToCartLabel={props.secondaryPurchaseOptions.secondaryData.mainAddToCartLabel}
                            mainPurchaseOptionSettings={props.secondaryPurchaseOptions.secondaryData.mainPurchaseOptionSettings}
                            productImagePath={props.secondaryPurchaseOptions.secondaryData.productImagePath}
                            upsellOptions={props.secondaryPurchaseOptions.secondaryData.upsellOptions}
                            showStrikeThrough={props.secondaryPurchaseOptions.secondaryData.showStrikeThrough}
                        />
                        <FreeShipping
                            messageText={props.freeShipping.messageText}
                            showFreeShipping={props.freeShipping.showFreeShipping}
                        />
                        {getSMART_bullets()}
                        {getFeatureBullets()}

                    </div>
                </div>
                <div ref={endPin} className="end-pin"/>
                <SpecificationsArea
                    contentStack={
                        props.specsArea.contentArea
                    }
                    mediaElementPath={props.specsArea.mediaElementPath}
                    mediaType={props.specsArea.mediaType}
                />
                {getScrubVideo()}

                {props.contentArea}
            </Pdp_frameworkStyled>
        </PDP_container>
    )
}

export default PdpFramework;