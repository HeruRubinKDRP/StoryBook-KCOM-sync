//create a React hooks component for a header navigation that will present an alternative menu that slides down once the user has scrolled past the height of the initial header that is a container that will remain sticky as the user scrolls. when the user scrolls up to where the initial header is visible the alternative menu will fade away.
import {createRef, forwardRef, ReactElement, ReactNode, Ref, useCallback, useEffect, useRef, useState} from "react";
import {StickyStyled} from "./StickyHeader.styled";
import {useResizeDetector} from "react-resize-detector";
import {iNavigation, Navigation} from "../NavMenu/NavigationV2/Navigation";
import {StickyItem} from "./StickyItem";
import {StickyItemStyled} from "./stickyItem.styled";
import SearchBox from "../Search Box/SearchBox";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";

export interface iStickyHeader {
    navigationRelated: iNavigation;
    children?: ReactNode;
    stickyHeaderMode: "slim" | "full";
    headerRef?: Ref<HTMLDivElement>

}

export const StickyHeader = forwardRef<HTMLDivElement, iStickyHeader>((props, forwardedRef) => {

    const navRef = createRef<HTMLDivElement>();

    const [isSticky, setSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(0); // Initialize navHeight with 0

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
    }, [navRef]); // Empty dependency array to run this effect only once on mountXD


    function onResize() {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
    }

    const {width, height, ref} = useResizeDetector({
        handleHeight: false,
        refreshMode: 'throttle',
        refreshOptions: {},
        refreshRate: 100,
        skipOnMount: false,
        onResize
    });

    useEffect(() => {
        if (ref.current) {
            setNavHeight(ref.current.offsetHeight);
            document.body.style.paddingTop = `${ref.current.offsetHeight}px !important`;
            console.log("navref useEffect ", ref, " | ", ref.current.offsetHeight);
        } else {
            return
        }
    }, [ref]);


    const handleScroll = (scrollPastThis: number | undefined) => {
        if (!scrollPastThis) {
            return;
        }


        if (window.scrollY > scrollPastThis && !isSticky) {
            console.log("scroll after this ", scrollPastThis);
            setSticky(true);
            return;
        } else {
            console.log("scroll before this ", scrollPastThis);
            setSticky(false);
            return;
        }
    };

    // Wrap handleScrollEvent in useCallback to memoize it
    const handleScrollEvent = useCallback(() => handleScroll(navHeight), [navHeight]);


    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, [handleScrollEvent]); // Only handleScrollEvent as a dependency


    const getStickyMenuStyle = () => {
        if (isSticky) {
            return "is-sticky"
        }
        return "not-sticky"
    }

    return (
        <StickyStyled ref={ref} className="sticky-header-container">
            <div className="zzz" ref={navRef}>
                <Navigation
                    classes={props.stickyHeaderMode}
                    sizingMode={props.navigationRelated.sizingMode}
                    loggedIn={props.navigationRelated.loggedIn}
                    emailErrorMessage={props.navigationRelated.emailErrorMessage}
                    emailSuccessMessage={props.navigationRelated.emailSuccessMessage}
                    emailExplanationText={props.navigationRelated.emailExplanationText}
                    placeHolderText={props.navigationRelated.placeHolderText}
                    defaultActiveHoverIndex={-1}
                    submitButtonText={props.navigationRelated.submitButtonText}
                    isNobo={props.navigationRelated.isNobo}
                    navItems={props.navigationRelated.navItems}
                    justMenuItems={false}
                />
                {props.stickyHeaderMode === "slim" && <StickyItem>
                    <StickyItemStyled
                        className={`${getStickyMenuStyle()} ${getContainerQuery(width)}`}>
                        <div className="sticky-menu-placement">
                            <div className="left-area">
                                <Graphic graphicName={"logo"}/>
                                <KButton
                                    label={"Menu"}
                                    iconStandard={(isMenuOpen ? "close" : "icon-menu")}
                                    iconPlacement={"before-label"}
                                    buttonType="primary-light"
                                    buttonWidth={"fit-to-content"}
                                    actionFunc={() => setIsMenuOpen(!isMenuOpen)}
                                />
                            </div>
                            <div className="search-area">
                                <SearchBox/>
                            </div>
                            {props.children ?
                                (<div className="child-content">
                                    {props.children}
                                </div>)
                                :
                                null
                            }
                        </div>
                        {isMenuOpen ? <Navigation
                            sizingMode={props.navigationRelated.sizingMode}
                            loggedIn={props.navigationRelated.loggedIn}
                            emailErrorMessage={props.navigationRelated.emailErrorMessage}
                            emailSuccessMessage={props.navigationRelated.emailSuccessMessage}
                            emailExplanationText={props.navigationRelated.emailExplanationText}
                            placeHolderText={props.navigationRelated.placeHolderText}
                            defaultActiveHoverIndex={-1}
                            submitButtonText={props.navigationRelated.submitButtonText}
                            isNobo={props.navigationRelated.isNobo}
                            navItems={props.navigationRelated.navItems}
                            justMenuItems={true}
                        /> : null}
                    </StickyItemStyled>
                </StickyItem>}

            </div>
        </StickyStyled>
    )
});