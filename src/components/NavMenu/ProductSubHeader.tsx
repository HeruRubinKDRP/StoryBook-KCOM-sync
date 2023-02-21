import React, {LegacyRef} from "react";
import KButton from "../Kbutton/KButton";

export interface iProductSubHeader {
  ctaMode : "mobile" | "inline";
}

export  const ProductSubHeader=React.forwardRef(
  (props : iProductSubHeader, ref)=>{

    const getCTA = ()=>{
      if(props.ctaMode == "inline"){
        return (
          <div className="header-cta-group">

              <KButton
                buttonType="primary"
                buttonWidth="fit-width"
                transitionType={"expand-bg"}
                carat="none"
                discount={25}
                finalPrice={199.99}
                iconPlacement="after-label"
                iconStandard="none"
                label="Coffee maker only"
                classes="fader dark only-coffee-maker"
                price={199.99}
                showPrice
              />
              <KButton
                label={"Build your kit"}
                buttonType={"primary"}
                buttonWidth="fit-width"
                transitionType="expand-bg"
                classes="fader dark"
                showPrice={true}
                finalPrice={199.99}
                price={199.99}
                iconPlacement="after-label"
                iconStandard="none"
                backgroundColorOverride={"#007C91"}
              />


          </div>
        )
      }
    }

    return (
      <div ref={ref as LegacyRef<HTMLDivElement>} id="productHeader" className="pdp-sub-header-main">
        <div className="nav-items-container">
          <KButton
            buttonType="round-no-label"
            buttonWidth="fit-to-content"
            fontColorOverride="#ffffff"
            iconPlacement="before-label"
            iconStandard="icon-menu"
            label="K-Button"
          />
          <KButton
            buttonType="primary-light"
            buttonWidth="fit-to-content"
            iconPlacement="after-label"
            iconStandard="chevron-down"
            label="K-Café® SMART"
            transitionType="expand-bg"
          />
        </div>
        <div className="buy-it-now">
          {getCTA()}
        </div>
      </div>
    )
  }
);

ProductSubHeader.displayName = "ProductSubHeader";

export default ProductSubHeader;


