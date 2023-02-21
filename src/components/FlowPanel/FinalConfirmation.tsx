import React, {ReactElement, useContext, useEffect, useState} from "react";
import {ProductInfoItem} from "../ProductItemData/ProductInfoItem";
import {currentAppInfo} from "../my-brews/myBrewsManager";
import {getPodInfo, getVariantInfo} from "./subscription-config-panel";


export interface IfinalConfirmation {

}

export const FinalConfirmation =()=>{
  const context = useContext(currentAppInfo)

  const createPanel =()=>{
    const currentPodInfo = getPodInfo(context.data.targetProductID);
//TODO
    return(
      <ProductInfoItem
        actionLabel={""}
        actionFunc={()=>{}}
        layoutType="side-by-side"
        productImage={currentPodInfo.productImagePrimaryPath}
        productName={currentPodInfo.podName}
        basePrice={getVariantInfo(currentPodInfo, 22).basePrice}
        currency={getVariantInfo(currentPodInfo, 22).currency}
        brand={currentPodInfo.brand}
        discountPercentageAmountAsNumber={getVariantInfo(currentPodInfo, 22).discountAsNumber}
      />
    )
  }


  return(
    <div className="final-confirmation-main">
      {createPanel()}
    </div>
  )
}
