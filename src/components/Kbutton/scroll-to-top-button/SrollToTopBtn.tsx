import React, { useState, useEffect } from 'react';
import KButton, {Ibutton} from "../KButton";

export interface iScrollToTopButtonProps {
    buttonProps : Ibutton
    scrollToPosition : number;
    scrollDuration : number;
}

const ScrollToTopButton: React.FC<iScrollToTopButtonProps> = (props : iScrollToTopButtonProps ) => {
    const scrollToTop = () => {
        const scrollHeight = window.scrollY;
        const scrollStep = Math.PI / (props.scrollDuration / 15);
        const cosParameter = scrollHeight / 2;
        let scrollCount = 0;
        let scrollMargin;
        const scrollInterval = setInterval(() => {
            if (window.scrollY >= props.scrollToPosition) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(props.scrollToPosition, (scrollHeight - scrollMargin));
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
                <KButton
                    actionFunc={()=>scrollToTop()}
                    label={props.buttonProps.label}
                    buttonType={props.buttonProps.buttonType}
                    buttonWidth={props.buttonProps.buttonWidth}
                    iconStandard={props.buttonProps.iconStandard}
                    transitionType={props.buttonProps.transitionType}
                    backgroundColorOverride={props.buttonProps.backgroundColorOverride}
                />
    );
};

export default ScrollToTopButton;
