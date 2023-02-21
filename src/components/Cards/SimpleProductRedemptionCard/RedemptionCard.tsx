import {ReactElement, useEffect, useState} from "react";
import KButton from "../../Kbutton/KButton";
import {KToggle, toggleItem} from "../../Toggle/Toggle";
import {RedemptionStyled} from "./RedemptionStyled";

export type redemptionVariantT = {
  variantName : string;
  variantImage : string;
  variantNameShortened : string;
  rewardGet : getRewardForT;
}

export interface iRedemptionCard{
  productName : string;
  brand : string;
  variants : redemptionVariantT[];
  desiredWidth? : number;
  defaultVariant : number;
}

export type getRewardForT = "Get it FREE" | "Get it 25% Off" | "Get it 15% Off" | "Get it 10% Off"

export const RedemptionCard =(props : iRedemptionCard)=>{

  const [selectedVariant, setSelectedVariant] = useState(0)

  const [getItFor, setGetItFor] = useState<getRewardForT>("Get it FREE")
  useEffect(()=>{
    setSelectedVariant(props.defaultVariant);
  },[]);

  useEffect(()=>{
    setGetItFor(props.variants[selectedVariant].rewardGet)
  }, [selectedVariant])

  const variantsMenu =(selectedIndex : number)=>{
    let menuItems : toggleItem[] = []

    for(let i=0; i < props.variants.length; i++){
      menuItems.push(
        {
          label : props.variants[i].variantNameShortened,
          action: ()=>setSelectedVariant(i),
          imagePath : ""
        }
      )
    }

    return (
      <KToggle
        toggleOptions={menuItems}
        toggleType="side-by-side"
        toggleStyle="touch-edges"
        selectedCaratPosition="none"
        selectedIndexOverride={selectedIndex}
      />
    )
  }

  return(
    <RedemptionStyled theme={{widthX : props.desiredWidth }}>
      <div className="product-name">
        <div className={`product-image ${selectedVariant} `}>
          <img src={props.variants[selectedVariant].variantImage}/>
        </div>
        <div className="product-id-area">
          <div className="brand">
            {props.brand}
          </div>
          <div className="product-name">
            {props.productName}
          </div>
          <div className="selected-variant-name">
            {props.variants[selectedVariant].variantName}
          </div>
        </div>
      </div>
      {variantsMenu(selectedVariant)}
      <div className="reward-cost">1 Reward</div>
      <KButton
        label={getItFor}
         buttonType="primary"
         buttonWidth="fit-width"
         iconStandard="none"
         transitionType="expand-bg"
      />
    </RedemptionStyled>
  )
}
