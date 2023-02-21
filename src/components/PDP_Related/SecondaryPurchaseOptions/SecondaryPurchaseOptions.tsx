import React, {ReactElement, useState} from "react";
import {BooleanToggle} from "../../BooleanToggle/BooleanToggle";
import Graphic from "../../Graphic/Graphic";
import KButton from "../../Kbutton/KButton";
import {LearnMore} from "../../LearnMore/LearnMore";
import {PopUp} from "../../PopUp/PopUp";
import {JustItem} from "../JustItem/JustItem";
import {productInfoT, UpsellCombo} from "../UpsellCombo/UpsellCombo";

export type couponType = {
  couponLabel: string;
  couponActive: boolean;
  couponDetails: string;
}

export interface iSecondaryPurchaseOptions {
  mainActionLabel: string;
  basePrice: number;
  showStrikeThrough: boolean;
  couponDetails?: string;
  productImagePath: string;
  mainAddToCartLabel: string;
  coupons?: couponType[];
  onExpandAction? : Function;
  mainPurchaseOptionSettings: {
    mainLabel: string;
    productName: string;
    basePrice: number;
    finalPrice: number;
    showStrikeThrough: boolean;
    learnMoreSettings : {
      mode : "pop-up" | "slide-down",
      labelStandard : string;
      labelActive? :string;
      imagePath? : string;
      imageAlt? : string;
      articleTitle? : string;
      articleCopy? : string;
    }
  }
  upsellOptions?: {
    upsellSectionName : string;
    products: productInfoT[],
    comboFinalPrice : number;
    comboBasePrice : number;
    showStrikethrough : boolean;
  }
}


export const SecondaryPurchaseOptions = (props: iSecondaryPurchaseOptions) => {
  const [optionsOpenStatus, setOptionsOpenStatus] = useState(false);
  const [coupons, setCouponsState] = useState(props.coupons)

  const manageOptionsOpen = () => {
    setOptionsOpenStatus(!optionsOpenStatus);
    if(!props.onExpandAction){return}
    console.log("expand action inner");
    props.onExpandAction();
  }

  const manageCouponStates = (selectedIndex: number) => {
    if (!coupons) {
      return
    }
    let couponsToEdit = [...coupons]
    couponsToEdit[selectedIndex].couponActive = !couponsToEdit[selectedIndex].couponActive
    setCouponsState(couponsToEdit);
  }
  const [popUpOpen, setPopUpOpen] = useState(false)

  const getPopUp=()=>{
    if(!popUpOpen){return}

    return <PopUp
      isOpen={true}
      hasHeader={true}
      hasVeil={true}
      hasBackButton={false}
    />
  }

  const purchaseOptions = () => {
    if (!optionsOpenStatus) {
      return (<>
          <div>
            <KButton
              label={props.mainActionLabel}
              showPrice={true}
              finalPrice={props.mainPurchaseOptionSettings.finalPrice}
              iconPlacement="right-edge"
              transitionType="expand-bg"
              buttonWidth="fit-to-content"
              calcPrice={false}
              buttonType="primary"
              carat="none"
              showStrikeThroughPrice={props.showStrikeThrough}
              price={props.basePrice}
              actionFunc={manageOptionsOpen}
            />
          </div>
          <div className="fine-print">
            <p>{props.couponDetails}</p>
            {getLearnMore()}
          </div>
        </>
      )
    } else {
      return purchaseDetails();
    }
  }

  const getLearnMore=()=>{

    return (
      <>
        <LearnMore
          mode={"pop-up"}
          actionFunc={()=>setPopUpOpen(!popUpOpen)}
          learnMore={{
            label : props.mainPurchaseOptionSettings.learnMoreSettings.labelActive
          }}
        />
      </>
    )
  }

  const getCoupons = () => {
    if (!coupons) {
      return
    }
    let couponsElements: ReactElement[] = [];

    for (let i = 0; i < coupons.length; i++) {

      const getCouponMessage =()=>{
        if(!coupons[i].couponActive){
          return <KButton
            label={coupons[i].couponLabel}
            buttonType="secondary"
            actionFunc={()=>manageCouponStates(i)}
            buttonWidth="fit-to-content"
            classes="small-btn"
            backgroundColorOverride="transparent"
          />
        }else{
          return(
            <div className="notification success">
              <Graphic graphicName="checkmark-circled" iconSize="1.5rem" colorOverride=""/>
              <p>{"Coupon Applied"}</p>
            </div>
          )


        }
      }

      couponsElements.push(
        <div key={i} className="fine-print coupons">

          {getCouponMessage()}

          <label className="details">{coupons[i].couponDetails}</label>
          {getLearnMore()}
        </div>
      )
    }
    return (
      <div className="coupon-items-container">
        {couponsElements}
      </div>
    )
  }

  const getComboOptions = ()=>{
    if(!props.upsellOptions){return <></>}

    return(
      <UpsellCombo
        sectionName={props.upsellOptions.upsellSectionName}
        products={props.upsellOptions.products}
      />
    )
  }

  const purchaseDetails = () => {
    return (
      <>
        <div className="purchase-option-main">
          <JustItem
            productImage={props.productImagePath}
            productName={props.mainPurchaseOptionSettings.productName}
            productPricing={{
              productBasePrice: props.basePrice,
              productFinalPrice: props.mainPurchaseOptionSettings.finalPrice,
              showStrikeThrough: props.showStrikeThrough,
            }}
            mainLabel={props.mainPurchaseOptionSettings.mainLabel}
            mainAddToCartLabel={props.mainAddToCartLabel}
          />
          {getCoupons()}
        </div>
        {getComboOptions()}
      </>
    )
  }
  return (
    <div>
      <div className={`purchase-options-container open-is-${optionsOpenStatus}`}>
        {purchaseOptions()}
        {getPopUp()}
      </div>
    </div>
  )
}

