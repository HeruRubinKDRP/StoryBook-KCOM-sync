import {Dispatch, ReactElement, SetStateAction, useState} from "react";
import KButton from "../../Kbutton/KButton";
import {Rating} from "../../Rating/Rating";
import {KToggle} from "../../Toggle/Toggle";
import {ClassicCardStyled} from "./ClassicCardStyled";
import {useResizeDetector} from "react-resize-detector";

export interface iClassicCard {
  productIndex : number;
  bannerType?: "feature" | "new" | "promo" | "none";
  bannerText?: string;
  brandName : string;
  productName : string;
  productImage : string;
  productPrices : number[]
  selectedProductOverride : number;
  boxSizes : number[];
  alwaysShowCTA?: boolean;
  ctaAction : (open: boolean, index: number) => (void);
}

export function getPricePerPod(price : number, quantity : number) {
  // calculate the price per item
  const pricePerItem = price / quantity;

  // check if the price per item is greater than $1.00
  if (pricePerItem >= 1) {
    // format as dollars
    return '$' + pricePerItem.toFixed(2);
  } else {
    // format as cents
    const cents = Math.round(pricePerItem * 100);
    return cents + '¢';
  }
}

export function getDiscountedPrice(index : number, price : number) {
  // calculate the discounted price
  const discountedPrice = price - (price * (25 / 100));

  // format the discounted price with 2 decimal places and return as a string
  const formattedPrice = discountedPrice.toFixed(2);

  // convert the formatted price back to a number and return
  return parseFloat(formattedPrice);
}


export const ClassicCard = (props: iClassicCard) => {

  const bannerBadge = () => {
    if(!props.bannerText){return}
    return (
      <label className={`new oz-peel-badge badge ${props.bannerType}`}>
        {props.bannerText}
      </label>
    )
  }

  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(props.selectedProductOverride);



const {width, height, ref} = useResizeDetector({
    refreshMode : "throttle",
    refreshRate : 100,
    handleWidth : true,
    handleHeight : true,
    onResize : ()=>{
      console.log("resize")
    }
});


  const getVariants =()=>{

    return(
      <>
        <KToggle
          classes="variant-selection-menu-container "

          toggleOptions={[
            {
              label: `${props.boxSizes[0]}ct`,
              imagePath: "",
              action : ()=>{setCurrentSelectedIndex(0)}
            },
            {
              label: `${props.boxSizes[1]}ct`,
              action: ()=>{setCurrentSelectedIndex(1)},
              imagePath: ""
            },
            {
              label: `${props.boxSizes[2]}ct`,
              action: ()=>{setCurrentSelectedIndex(2)},
              imagePath: ""
            },
            {
              label: `${props.boxSizes[3]}ct`,
              action: ()=>{setCurrentSelectedIndex(3)},
              imagePath: ""
            },
          ]
        }
          overrideSelectedIndex={1}
          toggleType={"side-by-side"}
          toggleStyle={"one-pill"}
          selectedCaratPosition={"none"}
        />

      </>
    )

  }

  const handleCTA = (index : number) => {
    console.log("index", props.ctaAction)
    props.ctaAction(true, index);
  }

  return (
    <ClassicCardStyled ref={ref} className={`classic-card-container ${props.alwaysShowCTA? "always-show-cta" : ""}`}>

      <div className="container-classic">
          <div className="front" tabIndex={0}>
            <div className="inner">
              <div className="front-top">
                {bannerBadge()}
                <div className="top-content">
                  <a
                      href=""
                      data-selector="PT_ImageLnk" className=" css-w1464h">
                    <img
                        src={props.productImage}
                        alt={props.productName} title={props.productName} className="product-image"
                        data-selector="PR_Image"/>
                  </a>
                </div>
                <div className="product-naming-area desktop">
                  <div className="brand-name">{props.brandName}</div>
                  <a
                      href=""
                      data-selector="PR_TitleLnk" className="brand-name css-w1464h" title="Breakfast Blend Coffee">
                    <div className="product-name">{props.productName}</div>
                  </a>
                </div>
                {/*RATING STARS*/}
                <div className="rating">
                  <Rating
                      ratingNumber={4.2}
                      scrollToTargetID="Ratings"
                      totalNumberOfReviews={1431}
                      totalNumberOfStars={5}
                  />
                </div>

            </div>
              <div className="purchase-options-explainer">
                <div className="product-naming-area mobile">
                  <div className="brand-name">{props.brandName}</div>
                  <a
                      href=""
                      data-selector="PR_TitleLnk" className="brand-name css-w1464h" title="Breakfast Blend Coffee">
                    <div className="product-name">{props.productName}</div>
                  </a>
                </div>
                <div className="box-count-section">
                  <div className="box-count-title">Box Counts</div>
                  <div className="variant-selection-menu-container">
                    {getVariants()}
                  </div>
                </div>

               <div className="all-pricing-container">
                 <div className="program-group">
                   <div className="program-logo">
                     {/*<img*/}
                     {/*    src="https://images.keurig.com/is/content/keurig/Keurig-ssr-storefront/storefrontImages/icons/autodel-logo-clp.svg"*/}
                     {/*    alt="Auto-Delivery price"*/}
                     {/*    title="Auto-Delivery price"*/}
                     {/*    className=""*/}
                     {/*    data-selector="BPG_AutoDelivery_Image"*/}
                     {/*/>*/}
                     <label>
                       25% OFF with Auto-Delivery
                     </label>
                     
                   </div>

                   <div className="pricing-group">
                     <div className="price"><sup>$</sup><span className="price-amount">{getDiscountedPrice(currentSelectedIndex, props.productPrices[currentSelectedIndex])}</span></div>
                     <span className="price price-amount per-pod">{getPricePerPod(getDiscountedPrice(currentSelectedIndex, props.productPrices[currentSelectedIndex]), props.boxSizes[currentSelectedIndex] ) }/pod</span>
                   </div>
                 </div>
                 <div className="divider-horizontal"/>

                 <div className="one-time-group">
                   <div className="program-group">
                     <div className="program-logo">
                       <label>
                         One-Time Purchase
                       </label>
                     </div>
                   </div>
                   <div className="secondary-price">
                     <sup>$</sup>
                     <span className="price-amount">{props.productPrices[currentSelectedIndex]}</span>
                     <span className="price-amount per-pod">{getPricePerPod(props.productPrices[currentSelectedIndex], props.boxSizes[currentSelectedIndex])}/pod</span>
                   </div>
                 </div>
               </div>

                <div className="card-bottom-content desktop">
                  <KButton
                      label={"BUY NOW"}
                      buttonType="ecommerce-primary"
                      classes="btn-box"
                      iconStandard="none"
                      iconPlacement="after-label"
                      transitionType="expand-bg"
                      actionFunc={()=>handleCTA(props.productIndex)}
                  />
                </div>
              </div>
            </div>
            <div className="mobile cta-container">
              <KButton
                  label={"BUY NOW"}
                  buttonType="ecommerce-primary"
                  classes="btn-box"
                  iconStandard="none"
                  iconPlacement="after-label"
                  transitionType="expand-bg"
                  actionFunc={()=>handleCTA(props.productIndex)}
              />
            </div>
          </div>
       
        <div className="fader"></div>
          <div className="backing"></div>
        </div>
    </ClassicCardStyled>
  )
}
