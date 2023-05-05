import React from 'react';
import {CardBackStyled} from "./card-back.styles";
import KButton from "../../../Kbutton/KButton";

export interface iProductFeature {
    label: string;
    iconLink: string;
}

export interface iProductProps {
    name: string;
    description?: string;
    imageSrc?: string;
    features: iProductFeature[];
}

const CardBack: React.FC<iProductProps> = ({ name, description, imageSrc, features }) => {
    return (
        <CardBackStyled className="card-back">
            <div className="info-container">
                <img className="product-silo" src={imageSrc} alt={name} />
                <h1>{name}</h1>
                <p>{description}</p>
                <ul className="features-list-container">
                    {features.map((feature) => (
                        <li key={feature.label}>
                            <img src={feature.iconLink} alt={feature.label} />
                            <span>{feature.label}</span>
                        </li>
                    ))}
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
