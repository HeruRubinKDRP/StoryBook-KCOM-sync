import MasonTiles from "../../MasonTiles/MasonTiles";
import {BeverageGridData} from "../../../data/demo-product-libraries";
import {BigAcross} from "../ConversationBubbles/ContentBubbles/BigAcross/BigAcrossSection";
import React, { useEffect } from "react";
import GetAndPlayVoice from "../../Audio/PlayAudio/GetAndPlayVoice";

export interface iChatPage{
    route : string;
    actionFunction : () => void;
    isMuted : boolean;
}

export const ChatPage = (props : iChatPage) => {
    const { route, actionFunction, isMuted } = props;

    useEffect(() => {
        const playVoice = async () => {
            if (route.toLowerCase() === "home" && !isMuted) {
                console.log("play voice")
                await GetAndPlayVoice("Welcome to Keurig. I'm here to help you find the perfect coffee maker. I can also help you find the perfect coffee to go with it. If you have any questions, just ask.");
            }
        };

        playVoice();
    }, [route, isMuted]);

    switch (route.toLowerCase()) {
        case "beverages":
            return(
                <MasonTiles cellItems={BeverageGridData} layout="layout1"/>
            );
        case "home":
            return(
                <>
                    <BigAcross
                        backgroundImage="/editorial/home/intro_clipped2.png"
                        mainMessage="25% Off Your Entire Order When You Bundle"
                        secondaryMessage="Buy a coffee maker and 4+ boxes of K-Cup® pods"
                        ctaLabel="Shop Coffee Makers"
                        backgroundColor="#ecd8c1"
                        actionFunction={actionFunction}
                    />
                </>
            );
        default:
            return <></>;
    }
};
