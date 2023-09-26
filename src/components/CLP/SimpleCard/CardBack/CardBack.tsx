import React from 'react';
import {CardBackStyled} from "./card-back.styles";
import KButton from "../../../Kbutton/KButton";
import {FeatureBulletsArea} from "../../../FeatureBullets/FeatureBulletsArea/FeatureBulletsArea";
import {iFeatureBullet} from "../../../FeatureBullets/FeatureBulletItem/FeatureBullet";
import AsyncImage from "../../../AsyncImage/AsyncImage";
import {Kcarousel} from "../../../Carousel/Kcarousel";
import {useResizeDetector} from "react-resize-detector";
import Image from "next/image";

export interface iProductFeature {
    label: string;
    iconLink: string;
}

export interface iProductProps {
    name: string;
    description?: string;
    imageSrc?: string;
    features: iFeatureBullet[];
}



const CardBack: React.FC<iProductProps> = ({ name, description, imageSrc, features }) => {


    return (
        <CardBackStyled  className="card-back"  >
            <div className="info-container">
                <div className="product-title-area">
                    {imageSrc && <Image
                        className="product-silo"
                        src={imageSrc ?? ""}
                        alt={name}
                        unoptimized={true}
                        width={500}
                        height={500}
                    />}
                    <h1>{name}</h1>
                </div>
                <p>{description}</p>
                <ul className="features-list-container">
                    <FeatureBulletsArea
                        key={1}
                        height={"100%"}
                        featuresAreaName={""}
                        features={features}
                    />
                    <div
                        key={2}
                        className="dimensions-container">
                        <AsyncImage
                            imageType="image"
                            src="https://images.keurig.com/is/image/keurig/KSPS-black-size?fmt=png-alpha&wid=1000"
                            alt=""
                        />
                    </div>
                    <div key={3}>Specifications</div>
                </ul>
            </div>
            <div className="cta-container">
                <KButton
                    transitionType="expand-bg"
                    classes={`cta-main brewer-cta`}
                    buttonWidth="fit-to-content"
                    label={'Buy Now'}
                    iconStandard="icon-add"
                    iconPlacement="after-label"
                    buttonType="primary"
                    actionFunc={() => {}}
                />
            </div>
        </CardBackStyled>
    );
};

export default CardBack;
