//create a React hooks component for a header navigation that will present an alternative menu that slides down once the user has scrolled past the height of the initial header that is a container that will remain sticky as the user scrolls. when the user scrolls up to where the initial header is visible the alternative menu will fade away.
import {createRef, ReactElement, ReactNode, useEffect, useRef, useState} from "react";
import {StickyStyled} from "./StickyHeader.styled";
import {useResizeDetector} from "react-resize-detector";
import {iNavigation, Navigation} from "../NavMenu/NavigationV2/Navigation";
import {StickyItem} from "./StickyItem";
import {StickyItemStyled} from "./stickyItem.styled";
import {withTheme} from 'styled-components';
import SearchBox from "../Search Box/SearchBox";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";

export interface iStickyHeader {
    navigationRelated: iNavigation;
    children? : ReactNode;
}

export const StickyHeader = (props: iStickyHeader) => {
    const stickyRef = createRef<HTMLDivElement>();
    const navRef = createRef<HTMLDivElement>();

    const [isSticky, setSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(navRef.current?.clientHeight);

    const [isScrolledPast, setIsScrolledPast] = useState(false);

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
            console.log("navref useEffect ", ref, " | ", ref.current.offsetHeight);
        } else {
            return
        }
    }, [ref]);



    const handleScroll = (scrollPastThis: number | undefined) => {
        if(!scrollPastThis){return }

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

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll(navHeight));

        return () => {
            window.removeEventListener("scroll", () => handleScroll(navHeight));
        };
    }, [navHeight]);


    const getStickyMenuStyle = () => {
        if (isSticky) {
            return "is-sticky"
        }
        return "not-sticky"
    }

    return (
        <StickyStyled ref={ref} className="sticky-header-container">
            <div className="zzzyyy" ref={navRef}>
                <Navigation
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
                />
                <StickyItem>
                    <StickyItemStyled
                        className={`${getStickyMenuStyle()} ${getContainerQuery(width)}` }>
                        <div className="sticky-menu-placement">
                            <div className="left-area">
                                <Graphic graphicName={"logo"}/>
                                <KButton
                                    label={"Menu"}
                                    iconStandard={"icon-menu"}
                                    iconPlacement={"before-label"}
                                    buttonType="primary-light"
                                    buttonWidth={"fit-to-content"}
                                />
                            </div>
                            <SearchBox/>
                            { props.children ?
                                (<div className="child-content">
                                    {props.children}
                                </div>)
                                :
                                null
                            }
                        </div>
                    </StickyItemStyled>
                </StickyItem>

            </div>
        </StickyStyled>
    )
}