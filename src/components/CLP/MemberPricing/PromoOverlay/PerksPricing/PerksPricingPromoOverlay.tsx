import React, { FC, useEffect, useState } from 'react';
import {AnimatedSvgContainer, AnimatedButton, PerksPromoStyled} from "./perks-pricing-promo.styled";
import Graphic from "../../../../Graphic/Graphic";
import Typist from "../../../../Animated Effects/Typist/Typist";
import KButton from "../../../../Kbutton/KButton";
import {PerksPricingExplainer} from "../../../../Graphic/Promos/PerksPricingPromo";

export interface PerksPromoProps {
    graphicName: string;
}

const PerksPromo = (props : PerksPromoProps) => {

    const messages = [
        {
            message: "With Perks you get 25% off everything.",
            duration: 2000
        },
        {
            message: "Just have an active Auto-Delivery item and you're in!",
            duration: 1200
        }
    ]

    const [currentMessage, setCurrentMessage] = useState(messages[0].message);

    useEffect(() => {
        let totalDuration = 0;
        const timers = messages.map((messageObj, index) => {
            totalDuration += messageObj.duration;
            return setTimeout(() => {
                setCurrentMessage(messageObj.message);
            }, totalDuration);
        });

        // Clear timers on unmount
        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []); // Empty dependency array to ensure this effect only runs on mount and unmount


    const TypingMessage = (message : string)=>{
        return <Typist speed="medium" message={message}  />
    }

    return (
        <PerksPromoStyled>
            <div className="perks-logo">
                <AnimatedSvgContainer >
                    <Graphic graphicName="perks-logo-small" />
                </AnimatedSvgContainer>
                <div className="text-container" >
                    {TypingMessage(currentMessage)}
                </div>
                <PerksPricingExplainer />

            </div>

        </PerksPromoStyled>
    );
};

export default PerksPromo;
