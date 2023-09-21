import Graphic from "../../../Graphic/Graphic";
import React from "react";
import Image from "next/image";

interface IkskContent{

}
export const KSK_Content = (props : IkskContent) => {
    return(
        <div className={"ksk-info-content"}>
            <Image src="./images/quickshop-ksk/ksktitle.png" alt="Choose Your Savings" className={"ksk-title-img"}/>
            <div>
                <h2>The best way to buy your Keurig Coffee Maker.</h2>
                <div>
                    <Image src="./images/quickshop-ksk/fpo-ksk-learnmore.png" alt="Choose Your Savings" className={"ksk-title-img"}/>
                </div>
                <div className={"kit-title"}>{`What's in your Kit:`}</div>
                <div className={"content-container"}>
                    <div className={"content"}><Graphic graphicName={"icon-checkmark"}></Graphic> {`50 % off on your brewer`}</div>
                    <div className={"content"}><Graphic graphicName={"icon-checkmark"}></Graphic> {`4 boxes of beverages of your choice`}</div>
                    <div className={"content"}><Graphic graphicName={"icon-checkmark"}></Graphic> {`Recurring delivery at 25% off`}</div>
                    <div className={"content"}><Graphic graphicName={"icon-checkmark"}></Graphic> {`Earn rewards on purchases`}</div>
                </div>
            </div>
            <div className={"how-to-title"}>How to build your Starter Kit</div>
            <div className={"how-to-container"}>
                <div>
                    <Image src="./images/quickshop-ksk/step1.png" alt="" className={"ksk-title-img"}/>
                </div>
                <div>
                    <Image src="./images/quickshop-ksk/step2.png" alt="" className={"ksk-title-img"}/>
                </div>
                <div>
                    <Image src="./images/quickshop-ksk/step3.png" alt="" className={"ksk-title-img"}/>
                </div>
                <div>
                    <Image src="./images/quickshop-ksk/step4.png" alt="" className={"ksk-title-img"}/>
                </div>
            </div>
        </div>
    )
}