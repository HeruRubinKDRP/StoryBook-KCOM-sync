import React, {ReactElement, useContext, useEffect, useState} from "react";
import {currencies, podItemT, podLibrary, podVariant} from "../../pages/myBrews";
import KDropDown, {dropDownItem} from "../DropDown/drop-down";
import KButton from "../Kbutton/KButton";
import {ProductInfoItem} from "../ProductItemData/ProductInfoItem";
import {appState, currentAppInfo} from "../my-brews/myBrewsManager";

export interface IsubConfig {
  blaTemp?: string
}

export const getPodInfo = (podID: number):podItemT => {
  for (let i = 0; i < podLibrary.length; i++) {
    if (podLibrary[i].podId == podID) {
      return podLibrary[i]
    }
  }
  setTimeout(() => {
    console.log("getPodInfo", podID);
  }, 3222);
  return podLibrary[0]

}

export const getVariantInfo = (item: podItemT, variantCount: number): podVariant => {
  for (let i = 0; i < item.variant.length; i++) {
    if (item.variant[i].boxCount == variantCount) {
      return item.variant[i]
    }
  }
  return {
    boxCount: 22,
    basePrice: 17.99,
    discountAsNumber: 25,
    currency: currencies.USD,
    inStock: false
  }

}


export const SubscriptionConfigPanel = (props: IsubConfig) => {
  const [currentPodInfo, setPodInfo] = useState<podItemT>();
  const context = useContext(currentAppInfo)


  useEffect(() => {
    setPodInfo(getPodInfo(context.data.targetProductID))
  }, [context.data.targetProductID])

  const getBoxCounts = (podID : number) => {
    const boxQuantities: number[] = [];

    for(let i=0; i < podLibrary.length; i++){
      if(podLibrary[i].podId == podID){
        for(let j=0; j < podLibrary[i].variant.length; j++){
          boxQuantities.push(podLibrary[i].variant[j].boxCount)
        }
      }
    }

    let boxCounts: dropDownItem[] = []
    for (let i = 0; i < boxQuantities.length; i++) {
      boxCounts.push(
        {
          label: `${boxQuantities[i]} count box`,
          value: boxQuantities[i]
        }
      )
    }

    return boxCounts;
  }


  const createPanel = () => {
    const getInventoryLabel = () => {
      if (currentPodInfo?.inventory) {
        return currentPodInfo.inventory.toString()
      } else {
        return "0"
      }
    }

    switch (context.data.targetDeliverySubType) {
      case "SMART":
        if (currentPodInfo != undefined) {
          return (
            <div className="sub-config-items-container">
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
               veilFunc={()=>{}}/>
              <div className="data-inputs-container">
                <div className="data-input-item">
                  <label>Pods at home</label>
                  <KButton
                    classes="pod-inventory extra-large"
                    buttonType="action"
                    iconPlacement="after-label"
                    iconStandard="chevron-right"
                    label={getInventoryLabel()}
                  />
                </div>
                <div className="data-input-item">
                  <label>Box quantity to start with</label>
                  <KDropDown
                    defaultLabel="2 boxes"
                    dropDownType="thumb-sized"
                    label="2 boxes"
                    selected=""
                    selectionOptions={getBoxCounts(currentPodInfo.podId)}
                  />
                </div>
              </div>

            </div>
          )
        }
        break;

      case "scheduled":
        if (currentPodInfo != undefined) {
          return (
            <div className="sub-config-items-container">
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
               veilFunc={()=>{}}/>
              <div className="data-inputs-container">
                <div className="data-input-item">
                  <label>Box Count</label>
                  <KDropDown
                    defaultLabel="2 boxes"
                    dropDownType="thumb-sized"
                    label="2 boxes"
                    selected=""
                    selectionOptions={getBoxCounts(currentPodInfo.podId)}
                  />
                </div>
                <div className="data-input-item">
                  <label>Quantity</label>
                  <KDropDown
                    defaultLabel="2 boxes"
                    dropDownType="thumb-sized"
                    label="2 boxes"
                    selected=""
                    selectionOptions={[
                      {
                        label: "1 Boxes",
                        value: 1,
                        // TODO add change function
                      },
                      {
                        label: "2 Boxes",
                        value: 2,
                        // TODO add change function
                      },
                      {
                        label: "3 Boxes",
                        value: 3,
                        // TODO add change function
                      },
                      {
                        label: "4 Boxes",
                        value: 4,
                        // TODO add change function
                      },
                      {
                        label: "5 Boxes",
                        value: 5,
                        // TODO add change function
                      }
                    ]}
                  />
                </div>
                <div className="data-input-item">
                  <label>Frequency</label>
                  <div className="data-point selection-label">
                    Every 4 weeks
                  </div>
                </div>
                <div className="data-input-item">
                  <label>Delivery date</label>
                  <div className="data-point selection-label">
                    Feb 15, 2022
                  </div>
                </div>
              </div>

            </div>
          )
        }
    }
  }

  return (
    <div className="subscription-config">
      {createPanel()}
    </div>
  )

}

