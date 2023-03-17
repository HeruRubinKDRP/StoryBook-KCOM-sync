import React, {useState} from "react";
import KButton from "../../../Kbutton/KButton";
import {CommonActionsMenuStyled} from "./common-actions-menu.styles";
import {useOutsideToggler} from "../../../_utilities/clickOutsideChecker/clickOutsideHook";

export interface iCommonActiosMenu{
    isNobo : boolean;
    isLoggedIn : boolean;
}

export const CommonActionsMenu=(props:iCommonActiosMenu)=>{

    const [accountMenuIsOpen, setAccountMenuIsOpen] = useState(false);
    const accountMenuRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const getLoggedIn = (loginStatus: boolean) => {
        if (!loginStatus) {
            return "not-logged-in"
        };
        return "logged-in";
    }

    const clickOutsideAccount = async () => {
        await setAccountMenuIsOpen(false)
    }

    useOutsideToggler(accountMenuRef.current, clickOutsideAccount);

    const handleAccountMenu = async (openOrClosed:boolean) => {
        // setCurrentHover(-1);
        await setAccountMenuIsOpen(openOrClosed);
    }



    const getActionsMenu = () => {
        return (
            <>
                <div className="free-shipping-message">
                    FREE SHIPPING $35+
                </div>
                <div className="action-item">
                    <KButton transitionType="expand-bg" label="" classes="support-btn" buttonType="text-icon-noBG"
                             buttonWidth="fit-to-content" iconPlacement="after-label" iconStandard="icon-support"/>
                    <label>Support</label>
                </div>
                <div className="action-item">
                    <KButton
                        transitionType="expand-bg"
                        label=""
                        classes={getLoggedIn(props.isLoggedIn)}
                        buttonType="text-icon-noBG"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard="icon-account"
                        hoverFunc={() => handleAccountMenu(true)}
                    />
                    <label>Account</label>
                    <div className="account-menu" ref={accountMenuRef}>

                    </div>
                </div>
                <div className="action-item">
                    <KButton transitionType="expand-bg" label="" buttonType="text-icon-noBG"
                             buttonWidth="fit-to-content" iconPlacement="after-label" iconStandard="icon-cart"/>
                    <label>Cart</label>
                </div>
            </>
        )
    }


    // handle NOBO which is the customer service menu
    const getNOBO = () => {
        if (!props.isNobo) {
            return ""
        }
        return "is-nobo";
    }

    return(
        <CommonActionsMenuStyled className={`${getNOBO()} common-actions-container` }>
            {getActionsMenu()}
        </CommonActionsMenuStyled>
    )
}

