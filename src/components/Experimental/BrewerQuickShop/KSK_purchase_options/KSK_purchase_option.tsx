import {Flag} from "../../../Flag/Flag";
import KButton from "../../../Kbutton/KButton";
import React from "react";
import {Styled_KSKPurchaseOption} from "./Styled_KSKPurchaseOption";
import {useResizeDetector} from "react-resize-detector";
import Graphic from "components/Graphic/Graphic";
import { imageItemType } from "components/Carousel/SlideImages";
import Image from "next/image";

export interface iKSKPurchaseOption {
    openExternalLearnMoreFunction?: () => void;
    classes? : string;
}

export const KSKPurchaseOption = (props: iKSKPurchaseOption) => {

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 500,
        refreshOptions: {
            trailing: false,
            leading: true,
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {
        },
    });

    return (
        <Styled_KSKPurchaseOption className={`preferred-option ${props.classes}`} ref={ref} heightY={height || 0} widthX={width || 0}>
            <Flag
                flagLabel="Our Best Deal"
                flagColor="KSK"
                font={{fontWeight: "heavy-weight", fontSize: "Small"}}
                flagStyle="alternating-sharp-round"
            >
            </Flag>
            <div className="deal-area">
                <div className="deal-price">$124.99</div>
                <h3>Build a starter kit & save 50%</h3>
                <label className="strike-through-price">$249.99</label>
            </div>
            <div className={"ksk-container"}>
                <div className="visual-container">
                <Image
                    src="./product-images/kcs/kcs-0.png"
                    alt=""
                    className={"kcs-image"}
                    width={500} height={500}
                />
                <Graphic graphicName={"plus-icon"}></Graphic>
                <div className={"fill-pod"}>
                    <div className={"fill-pod"}>
                        <div className={"pod-ksk-container"}></div>
                        <div className={"pod-ksk-container"}></div>
                    </div>
                    <div className={"fill-pod"}>
                        <div className={"pod-ksk-container"}></div>
                        <div className={"pod-ksk-container"}></div>
                    </div>
                </div>
                </div>
                <div className="ksk-learn-more"><b>{`You're saving $125.00`}</b> {`with Coffee Subscription!`}
                    <KButton
                        label="What's in your Kit?"
                        buttonType="text-icon-noBG"
                        iconStandard="launch-pop-up"
                        iconPlacement="after-label"
                        buttonWidth="fit-to-content"
                        classes="best-deal"
                        transitionType="expand-bg"
                        actionFunc={props.openExternalLearnMoreFunction}
                    /></div>
            </div>

            <KButton
                iconStandard="none"
                label="Build Your Kit"
                buttonType="primary"
                buttonWidth="fit-width"
                classes="action"
                transitionType="expand-bg"
            />
        </Styled_KSKPurchaseOption>
    )
}