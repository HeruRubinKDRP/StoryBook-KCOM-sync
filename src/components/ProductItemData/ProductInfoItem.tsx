import React, {ReactElement, useEffect, useState} from "react";
import {brandsType, currencies, currencyType} from "../../pages/myBrews";
import {podVariant} from "../../pages/myBrews";
import KButton from "../Kbutton/KButton";
import {Price} from "../Price/Price";
import {ProductImage} from "../ProductImage/ProductImage";
import {Rating} from "../Rating/Rating";
import {KToggle, toggleItem} from "../Toggle/Toggle";
import {ProductIfoItemStyled} from "./product-info-item.styled";
import Image from "next/image";

export type ratingT = {
  totalStars: 5,
  starRating: number,
  totalReviews: number
}

export interface IproductItem {
  layoutType: "side-by-side" | "stacked" | "topName-bottomPrice"
  productImage?: string;
  productName: string;
  basePrice: number;
  currency: currencyType;
  discountPercentageAmountAsNumber: number
  variants?: podVariant[];
  showVariant?: boolean;
  brand?: string;
  showPrice?: boolean;
  actionFunc: Function;
  actionLabel: string;
  veilFunc: Function;
  classes?: string;
  rating?: ratingT
}


export const ProductInfoItem = (props: IproductItem) => {

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)

  const SelectVariant = (index: number) => {
    setSelectedVariantIndex(index)
  }

  const createVariantsMenu = () => {
    if (props.variants) {

      let toggleItems: toggleItem[] = []

      for (let i = 0; i < props.variants.length; i++) {
        let toggleOption: toggleItem = {label: "", action: () => SelectVariant(i)};
        toggleOption.label = props.variants[i].boxCount.toString();
        toggleItems.push(toggleOption)
      }

      return <KToggle toggleOptions={toggleItems} toggleType="side-by-side" selectedCaratPosition="top"
                      toggleStyle="spaced-out"/>

    }
  }


  const getPrice = () => {
    if (!props.showPrice) {
      return <></>
    }
    return (
      <Price
        basePrice={props.basePrice}
        currency={currencies.USD}
        discountPercentAsNumber={props.discountPercentageAmountAsNumber}
        calculateDiscountForMe={true}

      />
    )
  }

  const getQuantVariantMenu = () => {
    if(!props.variants){return <></>}
    let btnItems : ReactElement[] = [];

    for(let i=0; i < props.variants.length; i++){
      btnItems.push(
        <KButton
          buttonType="secondary"
          buttonWidth="fit-width"
          iconPlacement="no-icon"
          iconStandard="none"
          transitionType="expand-bg"
          label="22ct"
          classes="variant"
        />
      )
    }


    return (
      <div className="quant-variant">
        {btnItems}
      </div>
    )
  }

  const actionsFunc = () => {
    props.actionFunc();
    props.veilFunc(true);
  }

  const getRating=()=>{
    if(!props.rating){return}
    return <Rating
      totalNumberOfStars={props.rating.totalStars }
      totalNumberOfReviews={props.rating.totalReviews}
      ratingNumber={props.rating?.starRating}
      ratingActiveColor="Primary-CTA"
      />
  }

  const getProdItem = () => {
    if (props.layoutType == "side-by-side" || props.layoutType == "stacked") {
      return (
        <>
          <div className="product-image-name">
            {props.productImage &&
              <Image
                  alt=""
                  className="pod-lid"
                  src={props.productImage}
              />
            }
            <div className="prod-info-area">
              <div className="labels-area">
                <p className="brand-title">{props.brand}</p>
                <h2>{props.productName}</h2>

              </div>
              <div className="price-rating-group">
                {getQuantVariantMenu()}
                <div className="price-area">
                  {getPrice()}
                  <div className="discount-area">
                    <label>25% Off</label>
                    <Image
                        alt=""
                        src="https://www.keurig.com/_ui/desktop/common/images/category-landing/autodel-logo-clp.svg"
                    />
                  </div>
                </div>
                {getRating()}
              </div>
            </div>
          </div>
          <div className="data-text">

            <div className="action-menu">


              <KButton
                buttonType="primary"
                iconPlacement="after-label"
                iconStandard="icon-add"
                label={props.actionLabel}
                actionFunc={actionsFunc}
                transitionType="expand-bg"
              />
            </div>
          </div>
        </>
      )
    }

    switch (props.layoutType) {
      case "topName-bottomPrice":
        return (
          <>
            <div className="data-text">
              {
                props.productImage &&
                  <Image
                      alt=""
                      className="pod-lid"
                      src={props.productImage}
                  />
              }
              <p>{props.brand}</p>
              <h2>{props.productName}</h2>
              {getPrice()}
              {getRating()}
            </div>
          </>
        )
      default:


    }
  }


  return (
    <ProductIfoItemStyled className={`product-info-container ${props.classes}`}>
      {getProdItem()}
    </ProductIfoItemStyled>
  )

}
