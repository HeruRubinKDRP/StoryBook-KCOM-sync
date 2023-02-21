import React from "react";
import KButton from "../Kbutton/KButton";
import {Price} from "../Price/Price";

export const KSKspecial=()=>{
  return (
    <div className="ksk-special-offers">
      <div className="as-ksk">
        <div className="best-deal fader">Our Best Deal</div>
        <Price
          basePrice={199.99}
          calculateDiscountForMe={false}
          currency="$"
          discountPercentAsNumber={50}
          finalPrice={99.99}
          showStrikeThrough={true}
          classes={"fader"}
        />
        <p className="fader">
          <em>{"You're saving $100 "}</em>
          <span>{"with Keurig® Starter Kit"}</span>
        </p>
        <div className="brewer-plus fader">
          <img src="/product-images/kcs/kcs-0.png" className="small-product-image" alt="small-product-image"/>
          <label>+</label>
          <div className="pod-slots">
            <div className="pod-slot-item"/>
            <div className="pod-slot-item"/>
            <div className="pod-slot-item"/>
            <div className="pod-slot-item"/>
          </div>
        </div>
        <p className="fader">
          Pick up to 4 boxes of your favorites & save 25%
        </p>
        <KButton
          label={"Build your kit"}
          buttonType={"primary"}
          buttonWidth="fit-to-content"
          transitionType="expand-bg"
          classes="fader dark"
          iconPlacement="after-label"
          iconStandard="none"
          showPrice
          finalPrice={99.99}
          price={199.99}
          showStrikeThroughPrice={false}
          calcPrice={false}
          backgroundColorOverride={"#007C91"}
        />
        <p className="fine-print fader">
          1 year, 16-box Auto-Delivery commitment
        </p>
      </div>
      <div className="just-brewer">
        <KButton
          buttonType="primary"
          buttonWidth="fit-to-content"
          carat="none"
          label="Coffee maker only"
          iconPlacement="after-label"
          iconStandard="none"
          discount={25}
          finalPrice={199.99}
          price={199.99}
          showPrice
        />
        <p className="fine-print fader">
          96 free pods with purchase
        </p>
      </div>
    </div>
  )
}
