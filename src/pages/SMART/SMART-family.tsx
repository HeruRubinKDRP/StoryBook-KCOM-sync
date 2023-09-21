import { useRouter } from 'next/router'
import React, {ReactElement, useCallback, useEffect, useState, useRef} from "react";
import {useResizeDetector} from "react-resize-detector";
import {Kcarousel} from "../../components/Carousel/Kcarousel";
import {ContentItem, iContentItem} from "../../components/ContentComponents/ContentComponent";
import {FocalImageContent} from "../../components/ContentComponents/FocalImage/FocalImage";
import {ProductCard} from "../../components/ContentComponents/ProductCard/ProductCard";
import {iPageNav, PageNav} from "../../components/PageNav/PageNav";
import {PanelHeader} from "../../components/PanelHeader/PanelHeader";
import {FeaturesList} from "../../components/ProductDetails/FeaturesList/features-list";
import {SEO_item} from "../../components/SEO_Component/SEOitem";
import {colorByNameType} from "../../components/_utilities/color-name-to-value/colorNameToValue";
import Image from "next/image";

export default function SMARTdemo() {
    const [isVersionsOpen, setVersionOpen] = useState<boolean>(false);
    const {width, height, ref} = useResizeDetector({
        handleHeight: false,
        refreshMode: 'debounce',
        refreshRate: 100,
        skipOnMount: false,

    });
    const router = useRouter()
    const {pid} = router.query


    const getContainerQuery = (widthX: number | undefined) => {
        if (!widthX) {
            return "small-container"
        }


        switch (router.query.version) {
            case "1.1":
                console.log("1.1")
                if (widthX > 1200) {
                    return "large-container begin-wrap"
                }

                if (widthX > 800) {
                    return "large-container"
                }

                if (widthX <= 800) {
                    return "small-container"
                }
                break;

            case "1.2":
                console.log("versioning test 1.2")

                if (widthX > 1200) {
                    return "large-container begin-wrap"
                }

                if (widthX > 821 && widthX <= 1200) {
                    return "large-container"
                }

                if (widthX >= 430 && widthX <= 821) {
                    return "medium-container"
                }

                return "small-container"

        }

    }

    console.log(router.query)
    const toggleVersionMenu = () => {
        setVersionOpen(!isVersionsOpen)
    }

    const getVersion = () => {
        if (!isVersionsOpen) {
            return
        }
        return (
            <div className="version-menu">
                <div className="versions">
                    <PanelHeader hasCloseButton={true} hasBackButton={false} closeFunc={() => toggleVersionMenu()}/>
                    <h2>Versions</h2>
                    <div className="version-item">
                        <a href="SMART-family?version=1.2">Version 1.2 20-JUL-2022</a>
                        <ul>
                            <li>
                                <p>adjusted layout for portrait iPad, feature bullets in row</p>
                            </li>
                            <li>
                                <p>adjusted testimonial element position at small/mobile container</p>
                            </li>
                            <li>
                                <p>adjusted text alignments </p>
                            </li>
                            <li>
                                <p>{`adjusted background color for "Discover BrewID section"`} </p>
                            </li>

                        </ul>
                    </div>

                    <div className="version-item">
                        <a href="SMART-family?version=1.1">Version 1.1 20-JUL-2022</a>
                        <p>initialized versioning system</p>
                    </div>
                </div>
            </div>
        )
    }

    const getVersionedBGColor = (id: string | undefined): colorByNameType => {
        if (!id) {
            return "latteMed"
        }
        if (router.query.version == "1.1") {
            switch (id) {
                case "BrewID_Intro":
                    return "latteMed"
            }

        }

        if (router.query.version == "1.2") {
            switch (id) {
                case "BrewID_Intro":
                    return "latte70"
            }
        }

        return "latteMed";
    }

    return (
        <div className={`smart-family ${getContainerQuery(width)} page-container`} ref={ref}>
            {getVersion()}
            <label onClick={() => setVersionOpen(true)} className="version">Version {router.query.version} </label>
            <div className="background-filler"></div>
            <PageNav
                useGlass={true}
                backGroundOpacity={0.75}
                background="dark-roast"
                collapsedLabel="Features Menu"
                links={[
                    {
                        classes: '',
                        label: 'BREWERS',
                        linkTo: ''
                    },
                    {
                        classes: '',
                        label: 'FEATURES',
                        linkTo: ''
                    },
                    {
                        classes: '',
                        label: 'FEATURES',
                        linkTo: ''
                    },
                    {
                        classes: '',
                        label: 'KEURIG APP',
                        linkTo: ''
                    },
                    {
                        classes: '',
                        label: 'BREW MATCH',
                        linkTo: ''
                    },
                    {
                        classes: 'highlighted',
                        label: 'BUILD YOUR STARTER KIT',
                        linkTo: ''
                    }
                ]}
                classes=""
                navName=""/>
            <ContentItem
                backGroundType="movie"
                backgroundUrlPath="/video/SMART-sampling.webm"
                contrastBackground="dark"
                ctaLabel="Call to action"
                ctaLinkTo="www.google.com"
                hasCTA={false}
                hasTermsConditions={false}
                heightMethod="fit-content"
                heightOverride={
                    {
                        minHeight: "70vh",
                        maxHeight: "90vh",
                        overallHeight: "100%"
                    }
                }
                mainMessage="A coffee experience perfectly personalized for you"
                mainMessageSize="Large"
                mainMessageWeight="heavy-weight"
                mainMessageColor={"white"}
                mainTextHasShadow
                messageTextAlignment="text-center"
                secondaryMessage=""
                sectionType="content-front-and-center"
                termsAndConditionsCTA={{
                    termsAndConditionsCtaLabel: 'See Details',
                    termsAndConditionsLabelDetail: 'Restrictions apply'
                }}
                termsAndConditionsFullText={{
                    header: 'Lorem ipsum tolem set',
                    termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet lectus, ac congue arcu ultricies eget. Curabitur id nunc quis sapien dictum iaculis. Fusce non faucibus eros. Etiam efficitur velit sit amet rutrum iaculis. Vivamus nec odio commodo, vestibulum nisl nec, aliquet nibh. Fusce finibus id lorem at commodo. Maecenas a varius velit. Nunc nunc enim, tempus a ultrices at, imperdiet quis mauris. Nulla faucibus, nibh quis lobortis convallis, velit metus porttitor metus, sed suscipit arcu leo id sapien. Curabitur varius laoreet urna non tincidunt. Nullam neque ex, luctus et ex sed, interdum vulputate leo. Nunc mollis pellentesque augue, pharetra suscipit nisl. Suspendisse ac dolor arcu. Vestibulum efficitur felis enim, non molestie diam rhoncus vitae. Mauris viverra vehicula diam, ut scelerisque nulla sollicitudin ut. Etiam dictum blandit ipsum, quis ultricies odio egestas quis.  Aenean ut dolor nulla. Proin semper in nisi id viverra. Quisque sed massa tristique, gravida orci id, lacinia enim. Quisque vestibulum nisl in dui suscipit, quis lobortis ex finibus. Nullam euismod, erat id viverra faucibus, magna tortor venenatis neque, tincidunt pharetra enim tellus ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed libero massa, convallis ut diam vitae, laoreet cursus ante. Mauris eleifend tellus lectus, ultricies porttitor lectus posuere ut. Aliquam et accumsan massa.'
                }}
                backgroundColor="sepia"

                component="content"
                hasFocalImage={false}
                sectionName=""/>
            <ContentItem
                hasFocalImage={false}
                mainTextHasShadow={false}
                backGroundType="solid-color"
                backgroundColor="white"
                backgroundUrlPath=""
                component="content"
                contrastBackground="none"
                hasCTA={false}
                ctaLabel=""
                ctaLinkTo=""
                ctaMode="button"
                heightMethod="fit-content"
                mainMessage="AS FEATURED IN"
                mainMessageColor="#3B2B2F"
                mainMessageSize="Tiny"
                messageTextAlignment="text-center"
                secondaryMessage=""
                mainMessageWeight="bold-weight"
                secondaryMessageWeight="heavy-weight"
                sectionName=""
                sectionType="content-front-and-center"
                customClasses="featured"
            />
            <Kcarousel

                carouselType="slider"
                component="carousel"
                itemsPerSlide={5}
                navPosition="bottom"
                containerBackgroundColor="white"
                slides={[
                    <div key="0" className="images-container logos">
                        <Image alt="" className="image-item" src="/logos/the_spoon_logo.svg"/>
                        <Image alt="" className="image-item" src="/logos/cnn_underscored_logo.svg"/>
                        <Image alt="" className="image-item" src="/logos/tiktok_logo.svg"/>
                        <Image alt="" className="image-item" src="/logos/Men_s_Health_logo.svg"/>
                        <Image alt="" className="image-item" src="/logos/logo_apartment_therapy.svg"/>
                        <Image alt="" className="image-item" src="/logos/logo_USA_today.svg"/>
                    </div>
                ]}
                keepNavButtons={false}
                navStyle="dots"
            />
            <ContentItem
                backGroundType="solid-color"
                backgroundColor={getVersionedBGColor("BrewID_Intro")}
                backgroundUrlPath=""
                component="content"
                contrastBackground="none"
                ctaLabel=""
                ctaLinkTo=""
                ctaMode="button"
                heightMethod="fit-content"
                mainMessage="Discover BrewID™, the simplest way to personalize your cup to perfection. "
                mainMessageColor="#473036"
                mainMessageSize="Large"
                messageTextAlignment="text-center"
                secondaryMessage=""
                secondaryMessageWeight="heavy-weight"
                sectionName="BrewID_Intro"
                sectionType="content-front-and-center"
                hasCTA={false}
                hasFocalImage={false}
                mainTextHasShadow={false}
            />
            <ContentItem
                customClasses="brew-id-section"
                backGroundType="movie"
                backgroundColor="latte70"
                backgroundTileImagePath=""
                backgroundTilingMethod="repeat-x"
                backgroundUrlPath="/video/BrewID_textless.webm"
                contrastBackground="dark"
                ctaLabel="Call to action"
                ctaLinkTo="www.google.com"
                hasCTA={false}
                hasTermsConditions={false}
                heightMethod="fit-content"
                heightOverride={
                    {
                        minHeight: "50vh",
                        maxHeight: "200vh",
                        overallHeight: "100%"
                    }
                }
                mainMessage="Expert results without having to be an expert"
                mainMessageColor="#473036"
                mainMessageSize="Medium"
                mainMessageWeight="heavy-weight"
                messageTextAlignment="text-left"
                secondaryMessage="BrewID™ recognizes your K-Cup® pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. "
                secondaryMessageWeight="regular-weight"
                secondaryMessageSize="Small"
                sectionAppearance="inset-beveled"
                sectionType="content-right"
                component="content"
                hasFocalImage={false}
                mainTextHasShadow={false}
                sectionName=""
            />
            <ContentItem
                backGroundType="solid-color"
                backgroundColor="white"
                backgroundUrlPath=""
                component="content"
                contrastBackground="none"
                ctaLabel=""
                ctaLinkTo=""
                ctaMode="button"
                heightMethod="fit-content"
                mainMessage="2 ways to make amazing coffee with our most advanced brewing technology"
                mainMessageColor="#3B2B2F"
                mainMessageSize="Medium"
                messageTextAlignment="text-center"
                secondaryMessage=""
                secondaryMessageWeight="heavy-weight"
                sectionName="BrewID_Intro"
                sectionType="content-front-and-center"
                hasCTA={false}
                hasFocalImage={false}
                mainTextHasShadow={false}
            />
            <Kcarousel
                carouselType="slider"
                component="carousel"
                itemsPerSlide={3}
                keepNavButtons={false}
                navLabels={[
                    'First Section',
                    'Second Section',
                    'Third Section'
                ]}
                navStyle="dots"
                slides={[
                    <>
                        <ProductCard
                            key="0"
                            colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]}
                            hasCTA
                            hasLearMoreLink
                            learnMoreLabel="See Full Page"
                            learnMoreLinkTo="#"
                            priceFinal={114.99}
                            priceOriginal={139.99}
                            primaryCtaButtonType="primary"
                            primaryCtaLabel="Build your kit"
                            primarySlogan="When you build a Starter Kit"
                            productColorValues={['black']}
                            productImagePath="/images/silos/KSPS/ksps.png"
                            productName="K-Supreme® Plus SMART"
                            secondarySlogan="Stainless Steel Metal Wrap, 5 Brew Sizes"
                            featuresList="MultiStream Technology™ extracts more flavor and aroma*"
                            pricingMessage="$229.99 List Price"
                            showPrice
                            showProductColors
                        />,
                        <ProductCard
                            key="1"
                            colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]}
                            hasCTA
                            hasLearMoreLink
                            learnMoreLabel="See Full Page"
                            learnMoreLinkTo="#"
                            priceFinal={99.99}
                            priceOriginal={249.99}
                            primaryCtaButtonType="primary"
                            primaryCtaLabel="Build your kit"
                            primarySlogan="When you build a Starter Kit"
                            productColorValues={['black']}
                            productImagePath="/images/silos/KCS_AltImages_KCOM-small.png"
                            productName="K-Café® SMART"
                            secondarySlogan="Fast & easy coffeehouse drinks, built-in milk frother"
                            showPrice
                            showProductColors
                            pricingMessage="$249.99 List Price"
                            featuresList=""
                        />
                    </>
                ]}

                navPosition="bottom"
            />

            <ContentItem
                customClasses="ksk-special"
                backGroundType="solid-color"
                backgroundColor="dark-roast"
                backgroundUrlPath=""
                component="content"
                contrastBackground="none"
                ctaLabel="Build Your Kit"
                ctaLinkTo=""
                ctaMode="button"
                flag={{
                    flagBackgroundColor: 'medium-roast',
                    flagLabel: 'KEURIG.COM EXCLUSIVE PRICING',
                    flagStyle: 'square',
                    flagTextColor: 'white',
                    useFlag: true
                }}
                hasCTA
                hasTermsConditions
                heightMethod="half-viewport"
                mainMessage="Get your SMART Brewer for 50% off"
                mainMessageColor="white"
                mainMessageSize="Huge"
                mainTextHasShadow
                messageTextAlignment="text-center"
                secondaryMessage="Our Keurig® Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping."
                secondaryMessageSize="Medium"
                secondaryMessageWeight="medium-weight"
                sectionName=""
                sectionType="content-front-and-center"
                heightOverride={{
                    minHeight: "30rem",
                    maxHeight: "100vh",
                    overallHeight: "100%"
                }}
                termsAndConditionsCTA={{
                    termsAndConditionsCtaLabel: 'See Details',
                    termsAndConditionsLabelDetail: 'Cancellation fees & restrictions apply. '
                }}
                termsAndConditionsFullText={{
                    header: 'Lorem ipsum tolem set',
                    termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci.'
                }}
                termsAndConditionsMode="pop-up-mode"
                hasFocalImage={false}
            />

            <ContentItem
                backGroundType="movie"
                backgroundColor="latte70"
                backgroundUrlPath="/video/Montage_3.webm"
                contrastBackground="dark"
                ctaLabel="Call to action"
                ctaLinkTo="www.google.com"
                hasCTA={false}
                hasTermsConditions={false}
                heightOverride={{
                    minHeight: "30rem",
                    maxHeight: "130vh",
                    overallHeight: "100%"
                }}
                heightMethod="fit-content"
                mainMessage="Delicious coffeehouse recipes in the palm of your hand"
                mainMessageColor="#473036"
                mainMessageSize="Medium"
                mainMessageWeight="heavy-weight"
                messageTextAlignment="text-left"
                secondaryMessage="Explore over 60 indulgent recipes in the Keurig® app with Café Creations. In minutes, you'll be enjoying an extra-foamy cappuccino or caramel latte precisely how you love them. "
                secondaryMessageWeight="regular-weight"
                secondaryMessageSize="Small"
                sectionAppearance="inset-beveled"
                sectionType="content-left"
                component="content"
                hasFocalImage={false}
                mainTextHasShadow={false}
                sectionName=""
            />
            <div className="double" style={{backgroundColor: "#faf7f3"}}>
                <ContentItem
                    backGroundType="movie"
                    backgroundColor="transparent"
                    backgroundUrlPath="/video/AutoDelivery_1.webm"
                    contrastBackground="dark"
                    ctaLabel="Call to action"
                    ctaLinkTo="www.google.com"
                    hasCTA={false}
                    hasTermsConditions={false}
                    heightMethod="fit-content"
                    mainMessage=""
                    mainMessageColor="#473036"
                    mainMessageSize="Medium"
                    heightOverride={{
                        minHeight: "30rem",
                        maxHeight: "70vh",
                        overallHeight: "100%"
                    }}
                    mainMessageWeight="heavy-weight"
                    messageTextAlignment="text-left"
                    secondaryMessage=""
                    secondaryMessageWeight="regular-weight"
                    secondaryMessageSize="Small"
                    sectionAppearance="inset-beveled"
                    sectionType="content-front-and-center"
                    component="content"
                    hasFocalImage={false}
                    mainTextHasShadow={false}
                    sectionName=""
                />

                <div className="carousel-area">
                    <h2>
                        Coffee how you want it,
                        only when you need it with Smart Delivery.
                    </h2>
                    <Kcarousel
                        heightOverride="100%"
                        carouselType="slider"
                        component="carousel"
                        keepNavButtons
                        navLabels={[
                            'Why you need it',
                            'How it works',
                            '96 Free Pods'
                        ]}
                        navPosition="top"
                        navStyle="text"
                        slides={[
                            <div key={0}>
                                <FeaturesList
                                    featuresList={
                                        [
                                            {
                                                featureName: "Easiest Coffee Delivery",
                                                featureDetail: "Get more only when you run low",
                                                featureStyle: "everything",
                                                iconName: "icon-shipping-truck"
                                            },
                                            {
                                                featureName: "Best Everyday Value",
                                                featureDetail: "Save 25% every time",
                                                featureStyle: "everything",
                                                iconName: "icon-savings"
                                            },
                                            {
                                                featureName: "You're In Control",
                                                featureDetail: "Change, delay, or cancel – with no hassles",
                                                featureStyle: "everything",
                                                iconName: "app-on-mobile"
                                            }
                                        ]
                                    }
                                />
                            </div>,
                            <div key={1}>
                                <FeaturesList
                                    featuresList={
                                        [
                                            {
                                                featureName: "We Help Keep Track",
                                                featureDetail: "BrewID™ checks how many pods you have",
                                                featureStyle: "everything",
                                                iconName: "icon-schedule"
                                            },
                                            {
                                                featureName: "Low Pod Alerts",
                                                featureDetail: "We’ll email or text when you’re running low",
                                                featureStyle: "everything",
                                                iconName: "icon-pod-logo"
                                            },
                                            {
                                                featureName: "You're In Control",
                                                featureDetail: "Change, delay, or cancel – with no hassles",
                                                featureStyle: "everything",
                                                iconName: "app-on-mobile"
                                            }
                                        ]
                                    }
                                />
                            </div>,
                            <div key={2}>
                                <ContentItem
                                    backGroundType="solid-color"
                                    backgroundColor="transparent"
                                    heightOverride={
                                        {
                                            minHeight: "auto",
                                            maxHeight: "auto",
                                            overallHeight: "100%"
                                        }
                                    }
                                    backgroundUrlPath=""
                                    component="content"
                                    contrastBackground="none"
                                    ctaLabel="Learn More"
                                    ctaLinkTo=""
                                    ctaMode="button"

                                    hasCTA
                                    ctaButtonType="primary"
                                    hasTermsConditions={false}
                                    heightMethod="one-viewport"
                                    mainMessage="Try SMART Delivery and Get up to 96 FREE Pods. Up to a $60 value."
                                    mainMessageColor="#3B2B2F"
                                    mainMessageSize="Medium"
                                    mainTextHasShadow={false}
                                    messageTextAlignment="text-left"
                                    secondaryMessage="You'll save 25% on every order with Free Shipping. No commitment required.  "
                                    secondaryMessageSize="Medium"
                                    secondaryMessageWeight="medium-weight"
                                    sectionName=""
                                    sectionType="content-front-and-center"
                                    termsAndConditionsCTA={{
                                        termsAndConditionsCtaLabel: 'See Details',
                                        termsAndConditionsLabelDetail: 'Restrictions apply'
                                    }}
                                    termsAndConditionsFullText={{
                                        header: 'Lorem ipsum tolem set',
                                        termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci.'
                                    }}
                                    termsAndConditionsMode="pop-up-mode" hasFocalImage={false}/>
                            </div>,

                        ]}

                        itemsPerSlide={1}/>
                </div>
            </div>
            {/*<Kcarousel*/}
            {/*  carouselType="slider"*/}
            {/*  component="carousel"*/}
            {/*  contentArea={{*/}
            {/*    contentElement: <ContentItem*/}
            {/*      backGroundType="movie"*/}
            {/*      backgroundColor="sepia"*/}
            {/*      backgroundUrlPath="/video/sample_coffee_general.mp4"*/}
            {/*      component="content"*/}
            {/*      contrastBackground="none"*/}
            {/*      heightMethod="stretch-to-parent"*/}
            {/*      heightOverride={{maxHeight: '100vh', minHeight: '60vh', overallHeight: '100%'}}*/}
            {/*      mainMessage=""*/}
            {/*      mainMessageColor="#3B2B2F"*/}
            {/*      mainMessageSize="Small"*/}
            {/*      mainMessageWeight="heavy-weight"*/}
            {/*      messageTextAlignment="text-left"*/}
            {/*      secondaryMessage=""*/}
            {/*      secondaryMessageSize="Small"*/}
            {/*      secondaryMessageWeight="regular-weight"*/}
            {/*      sectionAppearance="inset-beveled"*/}
            {/*      sectionName=""*/}
            {/*      sectionType="content-front-and-center"*/}
            {/*       hasCTA={false} hasFocalImage={false}*/}
            {/*      mainTextHasShadow={false}/>,*/}
            {/*    contentPosition: 'left',*/}
            {/*    useContentArea: true*/}
            {/*  }}*/}
            {/*  keepNavButtons*/}
            {/*  navLabels={[*/}
            {/*    'Why you need it',*/}
            {/*    'How it works',*/}
            {/*    '96 Free Pods'*/}
            {/*  ]}*/}
            {/*  navPosition="top"*/}
            {/*  navStyle="text"*/}
            {/*  slides={[*/}
            {/*    <div key={0}>*/}
            {/*      <p></p>*/}
            {/*    </div>,*/}
            {/*    <ContentItem*/}
            {/*      key={1}*/}
            {/*      backGroundType="movie"*/}
            {/*      backgroundColor="latte"*/}
            {/*      backgroundUrlPath="/video/sample_coffee_general.mp4"*/}
            {/*      component="content"*/}
            {/*       contrastBackground="dark" ctaLabel="" customClasses="" heightMethod="stretch-to-parent"*/}
            {/*       mainMessage="The SMART way to have the perfect cup, at any time, anywhere"*/}
            {/*       mainMessageColor="white" mainMessageSize="Medium" mainTextHasShadow secondaryMessage=""*/}
            {/*       secondaryMessageSize="Small" sectionName="" sectionType="content-front-and-center"*/}
            {/*       hasFocalImage={false} hasCTA={false}*/}
            {/*    />,*/}
            {/*    <ContentItem*/}
            {/*      key={2}*/}
            {/*      backGroundType="movie"*/}
            {/*      backgroundColor="latte"*/}
            {/*      backgroundUrlPath="https://www.w3schools.com/howto/rain.mp4" component="content"*/}
            {/*       contrastBackground="dark" ctaLabel="" customClasses="" heightMethod="stretch-to-parent"*/}
            {/*       mainMessage="An example slide"*/}
            {/*       mainMessageColor="white"*/}
            {/*       mainMessageSize="Small"*/}
            {/*       mainTextHasShadow={false}*/}
            {/*       secondaryMessage="This is an example showing different content components inside carousel, but any array of ReactElement[] will be rendered"*/}
            {/*       secondaryMessageSize="Small"*/}
            {/*       sectionName="t3"*/}
            {/*       sectionType="content-front-and-center"*/}
            {/*       hasCTA={false}*/}
            {/*       hasFocalImage={false}*/}
            {/*    />*/}
            {/*  ]}*/}

            {/* itemsPerSlide={1}/>*/}
            <ContentItem
                customClasses="testimonial"
                backGroundType="image"
                backgroundUrlPath="/images/lifestyle/making-drinks.jpg"
                calloutPosition="left-top"
                ctaLabel="This is a CTA"
                ctaLinkTo="&quot;&quot;"
                heightOverride={{
                    maxHeight: "100vh",
                    minHeight: "80vh",
                    overallHeight: "100%"
                }}
                mainMessage="“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” "
                testimonial={{
                    stars: 5,
                    name: "Leah"
                }}
                mainMessageColor="#473036"
                messageAsCallout
                messageTextAlignment="text-left"
                secondaryMessage=""
                sectionType="content-front-and-center"
                backgroundColor="sepia"
                component="content"
                contrastBackground="none"
                hasCTA={false}
                hasFocalImage={false}
                heightMethod="fit-content"
                mainTextHasShadow={false}
                sectionName=""/>
            <ContentItem
                customClasses="page-break"
                backGroundType="solid-color"
                backgroundColor="dark-roast"
                backgroundUrlPath=""
                component="content"
                contrastBackground="none"
                ctaLabel=""
                ctaLinkTo=""
                ctaMode="button"
                heightMethod="fit-content"
                mainMessage="Wi-Fi® enabled coffee maker works with Alexa and Google Home. "
                mainMessageColor="white"
                mainMessageSize="Medium"
                messageTextAlignment="text-center"
                secondaryMessage=""
                secondaryMessageWeight="heavy-weight"
                sectionName="BrewID_Intro"
                sectionType="content-front-and-center"
                hasCTA={false}
                hasFocalImage={false}
                mainTextHasShadow={false}
            />


            <Kcarousel
                customClasses="app-related"
                heightOverride="100%"
                carouselType="slider"
                component="carousel"
                keepNavButtons={false}
                navLabels={[
                    'Why you need it',
                    'How it works',
                    '96 Free Pods'
                ]}

                navPosition="bottom"
                navStyle="dots"
                slides={[
                    <div className="slide-item" key={0}>
                        <FocalImageContent
                            calloutBG_Color="latte"
                            calloutHeader="Step-By-Step Guided Recipes"
                            calloutLabel="Barista Mode™"
                            calloutParagraph="Explore a curated menu of Café Creations for your pod. See one you like?  Barista Mode™ will walk you through it. Before you know it, you'll be sipping on an iced vanilla latte. "
                            focalImagePath="/app/App-RecipeScreenshot.png"
                            hasCTA
                            mainBG_Color="latte70"
                            mainBG_imageCover=""
                            primaryMessageHeading="Get Connected to Amazing Coffee"
                            primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                            useAppStoreCTA
                            useCallOut
                            messageSize="Large"
                        />
                    </div>,
                    <div key={1} className="slide-item">
                        <FocalImageContent
                            calloutBG_Color="latte"
                            calloutHeader="Take Charge of Your Pods"
                            calloutLabel="My Pantry"
                            calloutParagraph="Need to add, change or snooze an item? Just tap My Pantry and follow the easy directions. You can even adjust how many pods you have if you purchase some elsewhere. "
                            focalImagePath="/app/app-reorder.png"
                            hasCTA
                            mainBG_Color="latte70"
                            mainBG_imageCover=""
                            primaryMessageHeading="Get Connected to Amazing Coffee"
                            primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                            useAppStoreCTA
                            useCallOut
                            messageSize="Large"
                        />
                    </div>,
                    <div key={2} className="slide-item">
                        <FocalImageContent
                            calloutBG_Color="latte"
                            calloutHeader="Fine Tune in the App"
                            calloutLabel="Customize Your Cup"
                            calloutParagraph="With the app, your smart phone becomes a precision remote control that makes it easy to change your size, temperature and brew strength to perfection."
                            focalImagePath="/app/app-pod.png"
                            hasCTA
                            mainBG_Color="latte70"
                            mainBG_imageCover=""
                            primaryMessageHeading="Get Connected to Amazing Coffee"
                            primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                            useAppStoreCTA
                            useCallOut
                            messageSize="Large"
                        />
                    </div>,

                ]}

                itemsPerSlide={1}/>


            <ContentItem
                backGroundType="movie"
                backgroundColor="white"
                backgroundUrlPath="/video/BrewFromAnywhere.webm"
                contrastBackground="dark"
                ctaLabel="Call to action"
                ctaLinkTo="www.google.com"
                hasCTA={false}
                hasTermsConditions={false}
                heightMethod="fit-content"
                mainMessage="Brew from just about anywhere"
                mainMessageColor="#473036"
                mainMessageSize="Medium"
                heightOverride={{
                    minHeight: "30rem",
                    maxHeight: "70vh",
                    overallHeight: "100%"
                }}
                mainMessageWeight="heavy-weight"
                messageTextAlignment="text-left"
                secondaryMessage="The possibilities are endless. Use the app to start your brew from bed or the car and have a hot cup ready and waiting for you."
                secondaryMessageWeight="regular-weight"
                secondaryMessageSize="Small"
                sectionAppearance="inset-beveled"
                sectionType="content-left"
                component="content"
                hasFocalImage={false}
                mainTextHasShadow={false}
                sectionName=""
            />

            <SEO_item
                bgColor="sepia70"
                expandText="Continue Reading"
                isExpandedText="Show Less"
                mainBody="Forget the traffic. The line. The expense. Keurig® SMART coffee makers with BrewID™ make it simple to enjoy rich, full-flavored coffee and coffeehouse beverages in the comfort of your home — without specialized skills or equipment. "
                mainTitle="Meet Our Family of SMART Coffee Makers"
                sections={[
                    {
                        body: 'Connecting your coffee maker to Wi-Fi® unlocks the power of BrewID™, our advanced brewing technology that recognizes your genuine K-Cup pod.  ',
                        title: 'Coffee experiences customized for your brew'
                    },
                    {
                        body: 'Select “Signature Brew” and your brewer will automatically adjust to the settings recommended by the coffee roasting expert who created your chosen variety. Prefer more control? Fine-tune your cup with a wide range of temperature, strength, and size settings using brewer controls or the Keurig® app. The app is also where you can explore Café Creations, a curated menu of simple coffeehouse recipes for the K-Café SMART Coffee Maker. When you find one you like, Barista Mode™ will guide you with easy, step-by-step directions. Before you know it, you’ll be sipping a delicious coffeehouse beverage.  ',
                        title: ''
                    },
                    {
                        body: 'Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  ',
                        title: 'Connect to convenience '
                    }
                ]}
                showAsCollapsed
            />


        </div>
    )
}