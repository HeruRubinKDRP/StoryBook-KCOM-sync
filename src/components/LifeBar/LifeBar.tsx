import React, {ReactElement, useEffect, useState} from "react";
import styled, {keyframes} from "styled-components"
import Graphic from "../Graphic/Graphic";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {LifeBarStyled} from "./LifeBarStyled";
import {prop} from "cheerio/lib/api/attributes";


export interface IlifeBar {
    barCurrentAmount?: number;
    barFullAmount?: number;
    barColor?: string;
    barBackgroundColor?: string;
    barHeight: string;
    barWidth: string;
    borderColor: string;
    stylePreset: "KCOM" | "none";
    showTicks?: boolean;
    potentialAmount?: number;
    useIndicator?: boolean;
}

export const LifeBar = (props: IlifeBar) => {

    const barWidth = () => {
        if (props.barCurrentAmount != undefined && props.barFullAmount != undefined) {
            return (props.barCurrentAmount / props.barFullAmount) * 100;
        } else {
            return 0;
        }
    }

    const potentialBarWidth = () => {
        if (!props.potentialAmount) {
            return 0
        }
        if (!props.barFullAmount) {
            return 0
        }
        return props.potentialAmount / props.barFullAmount * 100;
    }

    const getIndicator = () => {
        if (!props.useIndicator) {
            return
        }
        return (<Graphic graphicName="pointer-up"/>)
    }


    const getTicks = () => {
        if (!props.showTicks) {
            return
        }
        const getStyle = (index: number) => {
            if (index % 10 == 0) {
                return "tick large"
            }

            return "tick small"
        }
        let ticks: ReactElement[] = [];
        for (let i = 0; i < 40; i++) {
            ticks.push(
                <div
                    style={{left: `${i * (100 / 40)}%`}}
                    className={getStyle(i)}
                />
            )
        }

        return (
            <div className="ticks-container">
                {ticks}
            </div>
        )
    }

    const getPotentialBar = () => {
        if (!props.potentialAmount) {
            return
        }
        if (props.potentialAmount > 0) {
            return (
                <>
                    <div className="potential-amount-bar"/>
                    <div className="potential-marker"/>
                </>
            )
        }
    }

    return (
        <LifeBarStyled className={`life-bar-container ${props.stylePreset}`}
                       barBackgroundColor={props.barBackgroundColor!}
                       barColor={props.barColor!}
                       barHeight={props.barHeight}
                       barWidth={props.barWidth}
                       borderColor={""}
                       calculatedBarWidth={barWidth()}>
            <div className="life-bar">
                <div className="bar-fill">
                    {getIndicator()}
                    <div className="glow-effect"/>
                    {getPotentialBar()}
                </div>
            </div>
            {getTicks()}
        </LifeBarStyled>
    )
}