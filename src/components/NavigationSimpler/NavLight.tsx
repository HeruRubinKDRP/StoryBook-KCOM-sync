import {BackButton, ChildItem, MainItem, MenuContainer, NavLightStyled} from "./nav-light.styled";
import Graphic from "../Graphic/Graphic";
import React, {useState, useEffect} from "react";

export interface NavLightProps{
    navItems: NavItem[];
}

export interface NavItem {
    label: string;
    link: string;
    children?: NavItem[];
}


export const NavLight: React.FC<NavLightProps> = (props: NavLightProps) => {
    const [showChildren, setShowChildren] = useState<NavItem | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <NavLightStyled id="header-wrapper">
            <div className="menu-container" onClick={toggleMenu}>
                <Graphic graphicName={"logo"} />
                <Graphic graphicName={"icon-menu"} />
            </div>
            <MenuContainer isVisible={isMenuVisible} isMobile={isMobile} showChildren={showChildren}>
                {isMobile ? (
                    showChildren ? (
                        <div className="child-items">
                            <BackButton onClick={() => setShowChildren(null)}>Back</BackButton>
                            <div className="child-items">
                                {showChildren.children?.map((child, index) => (
                                    <ChildItem className="child-item" key={index}>{child.label}</ChildItem>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="main-items">
                            {
                                props.navItems.map((item, index) => (
                                    <MainItem
                                        className="main-item"
                                        key={index}
                                        onClick={() => item.children && setShowChildren(item)}
                                    >
                                        {item.label}
                                    </MainItem>
                                ))
                            }
                        </div>
                    )
                ) : (
                    <>
                        <div className="main-items">
                            {props.navItems.map((item, index) => (
                                <MainItem
                                    className="main-item"
                                    key={index}
                                    onClick={() => item.children && setShowChildren(item)}
                                >
                                    {item.label}
                                </MainItem>
                            ))}
                        </div>
                        <div className="child-items">
                            {showChildren?.children?.map((child, index) => (
                                <ChildItem className="child-item" key={index}>{child.label}</ChildItem>
                            ))}
                        </div>
                    </>
                )}
            </MenuContainer>
        </NavLightStyled>
    );
};