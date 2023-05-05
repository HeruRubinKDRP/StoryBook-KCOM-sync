import React from 'react';
import { Promotion } from '../PromoItem/Promotion';
import KButton from "../../../Kbutton/KButton";
import {PromoClaimStyled} from "./promoclaim.styled";
import Typist from "../../../Animated Effects/Typist/Typist";

export interface PromoClaimProps {
    promotion: Promotion;
    onClaim: (promo: Promotion) => void;
    classes?: string;
}

const PromoClaim: React.FC<PromoClaimProps> = ({ promotion, onClaim }) => {
    return (
        <PromoClaimStyled className="promo-claim">
           <div className="promo-claim-details">
               <img src={promotion.highlightImage} alt={promotion.name} style={{ width: '100px', height: '100px' }} />
               <Typist speed="medium" classes="title" message={promotion.name} />
               <p className="fine-print">Restrictions apply. See terms & conditions for details. </p>
               <KButton actionFunc={()=>onClaim(promotion)} classes="claim-btn" transitionType="expand-bg" label="Claim" buttonType="primary" buttonWidth="fit-to-content" iconPlacement="no-icon"/>
               <a className="decline">No thanks</a>
           </div>
        </PromoClaimStyled>
    );
};

export default PromoClaim;