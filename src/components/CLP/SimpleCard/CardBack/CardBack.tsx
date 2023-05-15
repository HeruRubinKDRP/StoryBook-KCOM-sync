import React from 'react';
import {CardBackStyled} from "./card-back.styles";
import KButton from "../../../Kbutton/KButton";
import {FeatureBulletsArea} from "../../../FeatureBullets/FeatureBulletsArea/FeatureBulletsArea";
import {iFeatureBullet} from "../../../FeatureBullets/FeatureBulletItem/FeatureBullet";

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
        <CardBackStyled className="card-back">
            <div className="info-container">
                <div className="product-title-area">
                    <img className="product-silo" src={imageSrc} alt={name} />
                    <h1>{name}</h1>
                </div>
                <p>{description}</p>
                <ul className="features-list-container">
                    <FeatureBulletsArea
                        height={"100%"}
                        featuresAreaName={""}
                        features={features}
                    />
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
