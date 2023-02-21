import React, {ReactElement} from "react";
import {podItemT, podLibrary, podVariant} from "../../../pages/myBrews";
import KButton from "../../Kbutton/KButton";
import {ProductInfoItem} from "../../ProductItemData/ProductInfoItem";
import {PodSettings} from "./edit-pod-settings";

export interface iPodCards{
  podLibrary : podItemT[];
  cardOrganizationMode : "cards-in-groups" | "loose-cards";
  cardsPerGroup : number;
  podSelectionMode : "help-me-choose" | "expert-mode";
  selectedPodForModification : number;
  manageModalFunc: Function;
  recordPodsFunc : Function;
  setVeilActiveFunc : Function;
  setSelectedPodForModificationFunc : Function;
}

export const getPodCards =(props:iPodCards)=>{
  let clpItems : ReactElement[] = [];
  let clpItemsUngrouped : ReactElement[] = [];
  let clpGroups : ReactElement[]=[];

  const getModalClasses =()=>{
    if(props.selectedPodForModification >= 0){
      return "unselected";
    }
    return  "";
  }

  const getPodVariantsMenuData=(podDataItem : podVariant[])=>{
    return podDataItem.filter(item=> { return item.boxCount >= 22 });
  }

  for(let i=0; i < props.podLibrary.length; i++){
// if it's a carousel then push it into groups
    if(i % 4 == 0 && i > 0 && props.podSelectionMode == "help-me-choose"){
      clpGroups.push(
        <div className="slide-item">
          {clpItems}
        </div>
      )
      clpItems = [];
    }

    // set the pod item here and then push it to right list later on
    let podItem : ReactElement=<></>;

    // create an editable modal from the card
    if(props.selectedPodForModification == props.podLibrary[i].podId){
      podItem = <>
        <div className="product-info-container unselected"/>
        <div className="product-info-container selected modal">
          <KButton
            actionFunc={()=>props.manageModalFunc()}
            classes="close-modal"
            label=""
            buttonType="round-no-label"
            iconStandard="close"
          />
          <PodSettings
            quantity={1}
            podID={props.selectedPodForModification}
            podImageUrl={podLibrary[i].productImagePrimaryPath}
            podName={podLibrary[i].podName}
            podSizes={getPodVariantsMenuData(podLibrary[i].variant)}
            finalConfirmFunc={props.recordPodsFunc}
            brand={podLibrary[i].brand}
            manageVeil={props.setVeilActiveFunc}
            classes="modal"
          />
        </div>
      </>
    }

    // insert as regular display card:

    if(props.selectedPodForModification != props.podLibrary[i].podId) {
      podItem = (
        <ProductInfoItem
          key={i}
          brand={podLibrary[i].brand}
          layoutType="stacked"
          productName={podLibrary[i].podName}
          productImage={podLibrary[i].productImagePrimaryPath}
          basePrice={podLibrary[i].variant[0].basePrice}
          currency={"$"}
          showPrice={true}
          discountPercentageAmountAsNumber={25}
          actionFunc={() => props.setSelectedPodForModificationFunc(podLibrary[i].podId)}
          //actionFunc={()=>recordSelectedPods(podLibrary[i].podId)}
          actionLabel="Add to kit"
          veilFunc={props.setVeilActiveFunc}
          classes={getModalClasses()}
          variants={getPodVariantsMenuData(podLibrary[i].variant)}
          rating={{
            totalReviews: 812,
            starRating: 4.2,
            totalStars: 5,
          }}
        />
      )
    }


    if(props.podSelectionMode == "help-me-choose"){
      clpItems.push(podItem)
    }

    if(props.podSelectionMode == "expert-mode"){
      clpItemsUngrouped.push(podItem)
    }
  }

  if(props.podSelectionMode == "help-me-choose"){
    return clpGroups;
  }

  if(props.podSelectionMode == "expert-mode"){
   return clpItemsUngrouped
  }

  return clpItems;
}
