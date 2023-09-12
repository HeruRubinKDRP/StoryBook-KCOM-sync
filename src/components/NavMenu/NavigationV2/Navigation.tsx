import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ProductCard} from "../../ContentComponents/ProductCard/ProductCard";
import Graphic, {iconType} from "../../Graphic/Graphic";
import KButton from "../../Kbutton/KButton";
import {ensureNotUndefinedString} from "../../_utilities/checkUndefined";
import {colorByNameType} from "../../_utilities/color-name-to-value/colorNameToValue";
import {iNavItem, modeType, NavItem} from "./navItem";
import {NavigationStyled} from "./styled-component/Full-Bleed-Styles/navigation-styled";
import {MenuButton} from "./menu-hamburger/menu-hamburger-btn";
import {useOutsideToggler} from "../../_utilities/clickOutsideChecker/clickOutsideHook";
import {EmailCollector} from "./email-collection/EmailCollector";
import {WelcomeArea} from "./welcome-area/WelcomeArea";
import {NotFullyResponsiveLikeProdNavigationStyled} from "./styled-component/Fixed-Size-Styles/not-fully-responsive-like-prod-navigation-styled";
import {CommonActionsMenuStyled} from "./CommonActionsMenu/common-actions-menu.styles";
import {CommonActionsMenu} from "./CommonActionsMenu/CommonActionsMenu";

export type highlightType = "no-highlight" | "highlight-bubble" | "highlight-by-color";
export type formFactorType = "mobile" | "desktop" | "pending";

export interface iSection{
    sectionMode: "nobo" | "links" | "links-large" | "hero-gallery" | "link-graveyard" | "footer";
    sectionLabel: string;
    sectionLinkTo: string;
    highlighted: highlightType;
    sectionNavItems: iNavItem[]
}

export interface iNavContentGroup {
    navLabel: string;
    linkTo: string;
    tagging: string;
    mobilePriority: "high" | "medium" | "low";
    requiresLoggedIn: boolean;
    highlighted: highlightType;
    image: string;
    icon?: iconType;
    sectionBackgroundColor?: colorByNameType;
    hoverMenu: iSection[]
}

export interface iNavigation {
    sizingMode: "liquid-design" | "hardcoded";
    loggedIn: boolean;
    emailErrorMessage: string;
    emailSuccessMessage: string;
    emailExplanationText: string;
    placeHolderText: string;
    defaultActiveHoverIndex: number;
    submitButtonText: string;
    isNobo: boolean;
    mobileSpecialMenu?: iSection[];
    navItems: iNavContentGroup[];
    //don't show the logo and the secondary items
    justMenuItems? : boolean;
    classes? : string;
}

export const breakPoints = {
    largeDesktop: 1920,
    desktop: 1280,
    tablet: 768,
    mobile: 390,
    tinyEmbedded : 200
}

export const Navigation = (props: iNavigation) => {
    // negative state for no-hover
    const [currentHover, setCurrentHover] = useState(-1);
    const [mobileIsOpen, setMobileIsOpen] = useState(false)
    const [activeAnimationClass, setActiveAnimationClass] = useState<string>("slide-in-from-right")


    const [fixedMenuPadding, setMenuPadding] = useState(0);

    //reference for the hover menu
    //a reference useRef is used to get the DOM node of the element
    const hoverMenuRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const mainMenuRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;


    //hook for checking if user is clicking outside the container
    //if they do, we will close the menu by setting isopen state to false

    const clickOutsideToggle = async () => {
        await setCurrentHover(-1)
    }

    useOutsideToggler(hoverMenuRef.current, clickOutsideToggle, currentHover !== -1);


    //slide in animation track
    const [useAnimation, setUseAnimation] = useState(true)
    const [formFactor, setFormFactor] = useState<formFactorType>("pending")


    const {width, height, ref} = useResizeDetector({
        handleHeight: false,
        refreshMode: 'debounce',
        refreshOptions: {},
        refreshRate: 100,
        skipOnMount: false
    });

const onResize = useCallback(() => {
    if (width) {
        if (width >= breakPoints.desktop) {
            setMenuPadding(0);
            setFormFactor("desktop")
        }
        if (width < breakPoints.desktop) {
            setMenuPadding(mainMenuRef.current.offsetHeight);
            setFormFactor("mobile")
        }
    }
}, [width]);


    useEffect(() => {
        onResize();
    }, [width, onResize]);

    const handleHoverInteraction = async (index: number) => {
        if (!width) {
            return
        }
        if (width > 1000) {
            setCurrentHover(index)
        }
    }

    const handleClickInteraction = (index: number) => {
        if (!width) {
            return
        }
        if (width > 1000) {
            //open url
        }
        setActiveAnimationClass("slide-in-from-right")
        setCurrentHover(index);
    }

    const handleCloseMobileMenu = async () => {
        await setActiveAnimationClass("slide-right")
        setTimeout(() => {
            setCurrentHover(-1)
        }, 500)
    }

    //*** open/close the top level nav in mobile mode
    const handleOpenMainNav = async () => {
        await setMobileIsOpen(!mobileIsOpen);
        await setActiveAnimationClass("slide-right");

        if (mobileIsOpen) {
            await setUseAnimation(false);
        } else {
            await setUseAnimation(true);
            setTimeout(() => {
                setUseAnimation(false);
                setCurrentHover(-1);
            }, 500)
        }
    }


    const getMobileExtrasMenu=()=>{
        console.log("getMobileExtrasMenu")
        if(formFactor !== "mobile" || !props.mobileSpecialMenu){
            return;
        }

        let sections : ReactElement[] = [];


        for(let i=0; i < props.mobileSpecialMenu.length; i++){
            let sectionItems : ReactElement[] = [];
            for(let j=0; j <  props.mobileSpecialMenu[i].sectionNavItems.length; j++){
                sectionItems.push(
                    <NavItem
                        key={j + "NavItem"}
                        mode={props.mobileSpecialMenu[i].sectionNavItems[j].mode}
                        label={props.mobileSpecialMenu[i].sectionNavItems[j].label}
                        textLook={props.mobileSpecialMenu[i].sectionNavItems[j].textLook}
                        secondaryText={props.mobileSpecialMenu[i].sectionNavItems[j].secondaryText}
                        textBlock={props.mobileSpecialMenu[i].sectionNavItems[j].textBlock}
                        linkTo={props.mobileSpecialMenu[i].sectionNavItems[j].linkTo}
                        highlighted={props.mobileSpecialMenu[i].sectionNavItems[j].highlighted}
                        image={""}
                        classes={props.mobileSpecialMenu[i].sectionNavItems[j].highlighted}
                        icon={props.mobileSpecialMenu[i].sectionNavItems[j].icon}
                        ctaLinkLabel={props.mobileSpecialMenu[i].sectionNavItems[j].ctaLinkLabel}
                        finePrint={props.mobileSpecialMenu[i].sectionNavItems[j].finePrint}
                    />
                )
            }
            sections.push(<div key={"section"+i} className={props.mobileSpecialMenu[i].sectionMode}>{sectionItems}</div>)
        }

        return(
            <div className="mobile-extras-menu">{sections}</div>
        )

    }

//******* Navigation render
// construction
    const getNav = (formFactorCheck: formFactorType) => {
        if (!mobileIsOpen && formFactor == "mobile") {
            return
        }
        let menuNavItems: ReactElement[] = [];
        let sectionsForActiveHover: ReactElement[] = [];
        let graveYardSection: ReactElement[] = [];
        let footerSection: ReactElement[] = [];

        //set active class if hovered on
        const getActiveClass = (index: number) => {
            if (index == currentHover) {
                return "active-hover-state"
            }
            return ""
        }

        for (let i = 0; i < props.navItems.length; i++) {
            //create main nav top-level items

            const getIcon = () => {
                if (formFactorCheck == "desktop") {
                    return props.navItems[i].icon
                }
                if (formFactorCheck == "mobile" && props.navItems[i].highlighted != "no-highlight" && props.navItems[i].icon) {
                    return props.navItems[i].icon;
                }
                if (formFactorCheck == "mobile") {
                    return "chevron-right"
                }
                return props.navItems[i].icon
            }
            menuNavItems.push(
                <KButton
                    key={props.navItems[i].navLabel + i}
                    label={props.navItems[i].navLabel}
                    buttonType="secondary"
                    classes={`main-nav ${props.navItems[i].highlighted} ${getActiveClass(i)} ${props.navItems[i].mobilePriority} `}
                    iconStandard={getIcon()}
                    iconPlacement="before-label"
                    buttonWidth="fit-to-content"
                    transitionType="expand-bg"
                    actionFunc={() => handleClickInteraction(i)}
                    hoverFunc={() => handleHoverInteraction(i)}
                />
            );

            if (i + 1 == props.navItems.length && currentHover == -1) {

                return (<nav>
                        <div className="top-level-nav-items-container">
                            {getWelcomeArea()}
                            {menuNavItems}
                            {getMobileExtrasMenu()}
                            {getEmailCollector()}
                        </div>
                    </nav>
                )
            }

            if (i != currentHover) {
                continue;
            }
//Bucket for nav items that will go into each section inside hover menu

            for (let j = 0; j < props.navItems[i].hoverMenu.length; j++) {
// nav items for section
                let navItemsForSection: ReactElement[] = [];

//this will make a bucket for small links for a subsection for in the footer
                let footerSmallLinksSubSection: ReactElement[] = [];

                for (let k = 0; k < props.navItems[i].hoverMenu[j].sectionNavItems.length; k++) {
                    //calc grid settings
                    const halvedList = props.navItems[i].hoverMenu[j].sectionNavItems.length / 2
                    const getGridColSetting = () => {
                        if (k < halvedList) {
                            return k + 1
                        }
                        return (k - halvedList) + 1;
                    }
                    const getGridRowSetting = () => {
                        if (k < halvedList) {
                            return 1
                        }
                        return 2
                    }
                    const getGrid = () => {
                        if (props.navItems[i].hoverMenu[j].sectionMode == "links-large") {
                            return {
                                gridColumnStart: getGridColSetting(),
                                gridColumnEnd: getGridColSetting(),
                                gridRowStart: getGridRowSetting(),
                                gridRowEnd: getGridRowSetting()
                            }
                        }
                    }


//create bulk links
                    const getIcon = (icon: iconType | undefined): iconType => {
                        if (!icon || icon.length < 1 || props.navItems[i].hoverMenu[j].sectionMode == "link-graveyard" && icon == "none") {
                            return "chevron-right"
                        }
                        return icon;
                    }


//CONTENT CARD get proper card
                    const getProperCard = () => {
                        switch (props.navItems[i].hoverMenu[j].sectionNavItems[k].mode) {
                            case "product-hero":

                                const getHeroImage = (image: string | undefined): string => {
                                    if (!image) {
                                        return ""
                                    }
                                    return image;
                                }
                                return (
                                    <ProductCard
                                        colorVariants={[
                                            {
                                                inStock: true,
                                                variantName: ''
                                            }
                                        ]}
                                        finePrint={props.navItems[i].hoverMenu[j].sectionNavItems[k].secondaryText}
                                        hasCTA
                                        hasLearMoreLink={props.navItems[i].hoverMenu[j].sectionNavItems[k].secondaryLinkLabel ? true : false}
                                        learnMoreLabel={ensureNotUndefinedString(props.navItems[i].hoverMenu[j].sectionNavItems[k].secondaryLinkLabel)}
                                        learnMoreLinkTo={ensureNotUndefinedString(props.navItems[i].hoverMenu[j].sectionNavItems[k].secondaryLinkTo)}
                                        featuresList={ensureNotUndefinedString(props.navItems[i].hoverMenu[j].sectionNavItems[k].textBlock)}
                                        priceFinal={99.99}
                                        priceOriginal={199.99}
                                        primaryCtaButtonType="primary"
                                        primaryCtaLabel={ensureNotUndefinedString(props.navItems[i].hoverMenu[j].sectionNavItems[k].ctaLinkLabel)}
                                        primarySlogan={""}
                                        productColorValues={['']}
                                        productImagePath={getHeroImage(props.navItems[i].hoverMenu[j].sectionNavItems[k].image)}
                                        productName={ensureNotUndefinedString(props.navItems[i].hoverMenu[j].sectionNavItems[k].label)}
                                        secondarySlogan={props.navItems[i].hoverMenu[j].sectionNavItems[k].secondaryText}
                                        showProductColors
                                        showPrice={false}
                                    />

                                )
                            default:
                                const skipImagesForMobile = (imagePath: string | undefined) => {
                                    if (!imagePath) {
                                        return ""
                                    }
                                    if (
                                        formFactor == "mobile" &&
                                        props.navItems[i].hoverMenu[j].sectionNavItems[k].mode != "promo" &&
                                        props.navItems[i].hoverMenu[j].sectionNavItems[k].mode != "article-large" &&
                                        props.navItems[i].hoverMenu[j].sectionNavItems[k].mode != "article-small" &&
                                        props.navItems[i].hoverMenu[j].sectionMode != "footer" &&
                                        props.navItems[i].hoverMenu[j].sectionMode != "link-graveyard"

                                    ) {
                                        return ""
                                    }
                                    return imagePath
                                }

                                return (
                                    <NavItem
                                        mode={props.navItems[i].hoverMenu[j].sectionNavItems[k].mode}
                                        label={props.navItems[i].hoverMenu[j].sectionNavItems[k].label}
                                        textLook={props.navItems[i].hoverMenu[j].sectionNavItems[k].textLook}
                                        secondaryText={props.navItems[i].hoverMenu[j].sectionNavItems[k].secondaryText}
                                        textBlock={props.navItems[i].hoverMenu[j].sectionNavItems[k].textBlock}
                                        linkTo={props.navItems[i].hoverMenu[j].sectionNavItems[k].linkTo}
                                        highlighted={props.navItems[i].hoverMenu[j].sectionNavItems[k].highlighted}
                                        image={skipImagesForMobile(props.navItems[i].hoverMenu[j].sectionNavItems[k].image)}
                                        classes={props.navItems[i].hoverMenu[j].sectionNavItems[k].highlighted}
                                        icon={getIcon(props.navItems[i].hoverMenu[j].sectionNavItems[k].icon)}
                                        ctaLinkLabel={props.navItems[i].hoverMenu[j].sectionNavItems[k].ctaLinkLabel}
                                        finePrint={props.navItems[i].hoverMenu[j].sectionNavItems[k].finePrint}
                                    />
                                )
                        }
                    }

// **** ITEM Constructed
                    const getModeWithSpecialCases = (mode: modeType) => {
                        switch (mode) {
                            case "promo":
                                if (!props.navItems[i].hoverMenu[j].sectionNavItems[k].image) {
                                    return "promo solid-color"
                                }

                                // @ts-ignore // this can't be undefined since the above return statement catches undefined
                                if (props.navItems[i].hoverMenu[j].sectionNavItems[k].image.length < 1) {
                                    return "promo solid-color"
                                }

                            default:
                                return mode
                        }
                    }

                    let constructedNavItem: ReactElement = (
                        <div
                            key={i + j + k + "constructedNavItem"}
                            className={`nav-item-container ${getModeWithSpecialCases(props.navItems[i].hoverMenu[j].sectionNavItems[k].mode)}`}
                            style={getGrid()}>
                            {getProperCard()}
                        </div>
                    );

// **** Put it in the right place

                    if (props.navItems[i].hoverMenu[j].sectionNavItems[k].mode == "small"
                        && props.navItems[i].hoverMenu[j].sectionMode == "footer"
                    ) {
                        footerSmallLinksSubSection.push(constructedNavItem)
                    } else {
                        navItemsForSection.push(constructedNavItem);
                    }


//wrap items in section container
                    if (k == props.navItems[i].hoverMenu[j].sectionNavItems.length - 1) {

                        const getGridTemplate = () => {
                            if (props.navItems[i].hoverMenu[j].sectionMode == "links-large") {
                                return {
                                    gridTemplateRows: `repeat(2, 1fr)`
                                }
                            }
                        }

// Create section with clickable header
// if a link is provided make it a link, else make it a label

                        const getLinkNotLink = (checkThis: string): iconType => {
                            if (checkThis.length < 1) {
                                return "none"
                            }
                            return "chevron-right";
                        }

                        const sectionItem: ReactElement = (
                            <section key={"section-container" + i + j + k} className={`section-container ${props.navItems[i].hoverMenu[j].sectionMode}`}>
                                <NavItem
                                    mode="section-main"
                                    label={props.navItems[i].hoverMenu[j].sectionLabel}
                                    linkTo={props.navItems[i].hoverMenu[j].sectionLinkTo}
                                    highlighted={props.navItems[i].hoverMenu[j].highlighted}
                                    icon={getLinkNotLink(props.navItems[i].hoverMenu[j].sectionLinkTo)}
                                />
                                <div className="nav-items-area"
                                     style={getGridTemplate()}
                                >
                                    {navItemsForSection}
                                    <div className="footer-small-links-sub-section">
                                        {footerSmallLinksSubSection}
                                    </div>
                                </div>
                            </section>
                        );


//put the nav item into the right container

                        switch (props.navItems[i].hoverMenu[j].sectionMode) {
                            case "link-graveyard":
                                graveYardSection.push(sectionItem);
                                break;

                            case "footer":
                                footerSection.push(sectionItem);
                                break;

                            default:
                                sectionsForActiveHover.push(sectionItem);
                        }

                    }
                }
            }
        }

        return (<>
                <nav>
                    <div className="top-level-nav-items-container">
                        {menuNavItems}
                    </div>
                </nav>

                <div
                    className={`nav-sections-main ${props.navItems[currentHover].sectionBackgroundColor} ${activeAnimationClass} ${checkIfEmpty(currentHover)}`}>
                    {mobileBackMenu()}
                    <div className="main-nav-content">
                        <div className="base-nav-sections">
                            {sectionsForActiveHover}
                        </div>
                        <div className="link-graveyard main">
                            {graveYardSection}
                        </div>
                    </div>
                    {}
                    <div className="footer-area">
                        {footerSection}
                    </div>
                </div>
            </>
        )
    }



    const getContainerQueries = (widthX: number | undefined) => {
        if (!widthX) {
            return ""
        }

        if (widthX > 1000) {
            return "large"
        }
        return "mobile";
    }





    //the menu with chevron pointing left
    const mobileBackMenu = () => {
        if (currentHover < 0) {
            return
        }
        return (
            <div className={`mobile-back-menu `}>
                <KButton actionFunc={() => handleCloseMobileMenu()} label="" classes="back-btn"
                         buttonType="round-no-label" iconStandard="chevron-left"/>
                <h2 className="section-title">
                    {props.navItems[currentHover].navLabel}
                </h2>
            </div>
        )
    }

    const desktopCheckIfHoverOpen = (hoverIndex: number) => {
        if (hoverIndex < 0) {
            return "empty"
        }
    }

    const getEmailCollector = () => {
        if (formFactor !== "mobile") {
            return
        }
        return (
            <EmailCollector
                explanationText={props.emailExplanationText}
                emailErrorMessage={props.emailErrorMessage}
                emailValidMessage={props.emailSuccessMessage}
                submitButtonText={props.submitButtonText}
                placeHolderText={props.placeHolderText}
            />)
    }

    const getWelcomeArea = () => {
        if (formFactor !== "mobile") {
            return
        }
        return <WelcomeArea/>
    }






    //handle if hover menus are empty
    const checkIfEmpty = (hoverIndex: number) => {

        if (props.navItems[hoverIndex].hoverMenu.length < 1) {
            return "empty"
        }

    }


    const getHeight = async () => {


    }
    //this is the meat of the nav
    const getInnerMenu = () => {
        return (
            <>
                <div className="container-upper">
                    <div className="global-navigation">
                        <header className="main-header" ref={mainMenuRef}>
                            <div className="persistent-menu-items">
                                {props.justMenuItems ? null : <>
                                    <MenuButton actionFunc={() => handleOpenMainNav()} isOpen={mobileIsOpen}/>
                                    <Graphic graphicName="logo" classesOverride=""/>
                                    <div className="search-container desktop">
                                        <div className="search-placeholder"></div>
                                    </div>
                                    <div className="secondary-importance-items">
                                        <CommonActionsMenu
                                            isNobo={props.isNobo}
                                            isLoggedIn={props.loggedIn}
                                        />
                                    </div>
                                </> }
                            </div>
                            <div className="search-container mobile">
                                <div className="search-placeholder"></div>
                            </div>
                        </header>

                        <div ref={hoverMenuRef} className={`main-navigation-container`}  >
                            {getNav(formFactor)}
                        </div>
                    </div>
                </div>
                <div onMouseOver={() => setCurrentHover(-1)}
                     className={`${desktopCheckIfHoverOpen(currentHover)} veil`}/>
            </>
        )
    }

    const UseNavMainAnimation = (isMobileOpen: boolean) => {
        if (isMobileOpen) {
            return "slide-nav-in"
        }
        return "x";
    }

    const getNavBasedOnSizingMode = (navPaddingTop : number) => {
        // store fullBleed
        const fullBleed : ReactElement = (
            <NavigationStyled
                className={` ${getContainerQueries(width)} ${UseNavMainAnimation(useAnimation)}`}
                ref={ref}>
                {getInnerMenu()}
            </NavigationStyled>
        )

        switch (props.sizingMode){
            case "liquid-design":
                return fullBleed;
            case "hardcoded":
                return (
                    <NotFullyResponsiveLikeProdNavigationStyled theme={{mobileMenuPadding : navPaddingTop }}
                                                                className={` ${getContainerQueries(width)} ${UseNavMainAnimation(useAnimation)}`}
                                                                ref={ref}>
                        {getInnerMenu()}
                    </NotFullyResponsiveLikeProdNavigationStyled>
                )
        }
// by default return full bleed
        return fullBleed
    }

    return (
        <header className={`main-navigation ${props.classes}`}>{ getNavBasedOnSizingMode(fixedMenuPadding)}</header>
    )


}
