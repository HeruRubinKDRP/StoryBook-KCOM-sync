import {brands} from "../../../pages/myBrews";
import {iRedemptionCard} from "../../Cards/SimpleProductRedemptionCard/RedemptionCard";

export const redeemBev : iRedemptionCard[] = [

  {
    brand : brands.gmcr,
    productName : "Dark Magic® Coffee",
    defaultVariant : 0,
    desiredWidth : 300,
    variants : [
      {
        variantName : "K-Cup® Box 24 ct.",
        variantImage : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
        variantNameShortened : "24 ct.",
        rewardGet : "Get it FREE"
      },
      {
        variantName : "K-Cup® Box 72 ct.",
        variantImage : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
        variantNameShortened : "72 ct.",
        rewardGet : "Get it 25% Off"
      },
      {
        variantName : "K-Cup® Box 96 ct.",
        variantImage : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
        variantNameShortened : "96 ct.",
        rewardGet : "Get it 10% Off"
      }
    ]
  }

]
