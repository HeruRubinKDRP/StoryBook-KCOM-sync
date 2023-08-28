import {productTypeT} from "../../pages/myBrews";
import {iFeatureBullet} from "../FeatureBullets/FeatureBulletItem/FeatureBullet";
import {filterDataItemT, purchaseInfo} from "./SimpleCard/SimpleCard";
import {colorByNameType} from "../_utilities/color-name-to-value/colorNameToValue";
import {iFlag} from "../Flag/Flag";


export type tPresentationMode = 'traditional-card' | 'flip-card' ;
export type tCardMode = 'simple' | 'ecom' ;
export interface iProductInfoCardProps {
    id?: number;
    flag?: iFlag;
    presentationMode?: tPresentationMode ;
    cardMode?: tCardMode ;
    productType: productTypeT
    image: string;
    brand: string;
    name: string;
    prices: purchaseInfo[];
    ratingVisible: boolean;
    priceDescriptor?: string;
    productDescription?: string;
    siloImagePath?: string;
    productFeatures? : iFeatureBullet[];
    filterData?: filterDataItemT[];
    searchTerms? : string[];
    rating: {
        totalNumberOfStars: 5 | 10;
        totalNumberOfReviews: number;
        ratingNumber: number;
    }
    onClick: unknown;
    classes?: string;
    flipFunction?: () => void;
    useBanner?: boolean;
    bannerSettings?: iFlag;
}

