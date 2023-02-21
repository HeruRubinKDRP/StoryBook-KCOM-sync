//create a React hooks component for a header navigation that will present an alternative menu that slides down once the user has scrolled past the height of the initial header that is a container that will remain sticky as the user scrolls. when the user scrolls up to where the initial header is visible the alternative menu will fade away.
import {createRef, useEffect, useRef, useState} from "react";
import {StickyStyled} from "./StickyHeader.styled";
import {useResizeDetector} from "react-resize-detector";
import {iNavigation, Navigation} from "../NavMenu/NavigationV2/Navigation";
import {StickyItem} from "./StickyItem";
import {StickyItemStyled} from "./stickyItem.styled";
import {withTheme} from 'styled-components';
import SearchBox from "../Search Box/SearchBox";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";

export interface iStickyHeader {
    navigationRelated: iNavigation
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
        refreshMode: 'debounce',
        refreshOptions: {},
        refreshRate: 100,
        skipOnMount: false,
        onResize
    });

    useEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
            console.log("navref useEffect ", navRef, " | ", navRef.current.offsetHeight);
        } else {
            return
        }
    }, [navRef]);



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
        <StickyStyled ref={stickyRef} className="sticky-header-container">
            <div className="zzzyyy" ref={navRef}>
                <Navigation
                    sizingMode={props.navigationRelated.sizingMode}
                    loggedIn={props.navigationRelated.loggedIn}
                    emailErrorMessage={props.navigationRelated.emailErrorMessage}
                    emailSuccessMessage={props.navigationRelated.emailSuccessMessage}
                    emailExplanationText={props.navigationRelated.emailExplanationText}
                    placeHolderText={props.navigationRelated.placeHolderText}
                    defaultActiveHoverIndex={props.navigationRelated.defaultActiveHoverIndex}
                    submitButtonText={props.navigationRelated.submitButtonText}
                    isNobo={props.navigationRelated.isNobo}
                    navItems={props.navigationRelated.navItems}
                />
                <StickyItem>
                    <StickyItemStyled className={getStickyMenuStyle()}>
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
                            <div></div>
                        </div>
                    </StickyItemStyled>
                </StickyItem>

            </div>
        </StickyStyled>
    )
}