import React from 'react';
import { Promotion } from '../PromoItem/Promotion';

export interface PromoClaimProps {
    promotion: Promotion;
    onClaim: (promo: Promotion) => void;
}

const PromoClaim: React.FC<PromoClaimProps> = ({ promotion, onClaim }) => {
    return (
        <div>
            <h2>{promotion.name}</h2>
            <img src={promotion.link} alt={promotion.name} style={{ width: '100px', height: '100px' }} />
            <button onClick={()=>onClaim}>Claim Promo</button>
        </div>
    );
};

export default PromoClaim;