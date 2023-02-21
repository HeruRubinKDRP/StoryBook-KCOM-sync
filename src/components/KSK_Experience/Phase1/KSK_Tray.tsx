import React, {ReactElement, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {podItemT, podLibrary} from "../../../pages/myBrews";
import Graphic from "../../Graphic/Graphic";
import {Illustration} from "../../Graphic/Illustrations";
import {Incrementor} from "../../Incrementor/incrementor";
import KButton from "../../Kbutton/KButton";
import {coffeeMakerList} from "../KSK";
import {boxSelectionData, ksk_step_T} from "./KSK_Phase_One";
import {utilityCalcBoxes} from "./utitity-calc-boxes";

export interface iKSK_Tray{
  selectedIndex : number;
  actionFunc : Function;
  currentJourneyState : ksk_step_T;
  podSelectionComplete : boolean;
  coffeeMakerSelectedID : number;
  allRequirementsMet : boolean;
  selectedPods : boxSelectionData[];
  parentWidth? : number;
  // changeStepFunc : Function;
}

export const KSK_Tray=(props : iKSK_Tray)=>{
  const[isOpen, setIsOpen]=useState<boolean>(false)
  const [isCollapsed, setIsCollapsed]=useState(true)


  const getPodSelectionMessaging =()=>{
    if(props.podSelectionComplete && props.coffeeMakerSelectedID > -1){
      return (
        <div className="coffee-title">
          <h4>Savings unlocked!</h4>
          <p>You have great taste! Review your order and check out, or add more.</p>
        </div>
      )
    }

    if(props.podSelectionComplete && props.coffeeMakerSelectedID < 0){
      return (
        <div className="coffee-title">
          <h4>One more thing to do!</h4>
          <p>You still need to select your coffee maker to complete your savings.</p>
        </div>
      )
    }

    if( utilityCalcBoxes(props.selectedPods, 24).slotsUsed > 0){
      return (
        <h4>
          <div>
            Great Job!
          </div>
          <div>
            Select {4-utilityCalcBoxes(props.selectedPods, 24).slotsUsed} or more boxes to complete your savings
          </div>
        </h4>
      )
    }

    return (
      <h4>
        <div>
          Select {4-utilityCalcBoxes(props.selectedPods, 24).slotsUsed} or more boxes to complete your savings
        </div>
      </h4>
    )


  }

  const getExtraPods =()=>{

    let totalPods = 0;

    for(let i=3; i < props.selectedPods.length; i++){

      let boxCount = props.selectedPods[i].boxCount;

      if(boxCount == 22){
        boxCount = 24;
      }

      totalPods += boxCount * props.selectedPods[i].quantity;
    }

    let totalExtraCount = Math.round(totalPods / 24);


    const sizeForDoubleDigits =()=>{
      if(totalExtraCount > 9){
        return "small";
      }
    }

    if(totalExtraCount > 0){
      return <div className={`extra ${sizeForDoubleDigits()}`}>+{totalExtraCount}</div>
    }

    return <></>
  }

  const getPodSlots=()=>{
    let podSlots : ReactElement[] = [];
        if(!isOpen){

          let overallPods = 0;
          let slotsUsed = 0;

          //count all pods
          for(let i=0; i < props.selectedPods.length; i++){
            overallPods += props.selectedPods[i].boxCount * props.selectedPods[i].quantity;
          }

          for(let i=0; i < props.selectedPods.length; i++){
              if(slotsUsed >= 4){break;}
              slotsUsed += 1
            const getOverflow =(podSelection : boxSelectionData, index:number)=>{
                if(podSelection.quantity > 1){
                  return <div className={`extra-badge `}>{podSelection.quantity}</div>
                }
            }
              podSlots.push(
                <li className={`selected-pod-item `}>
                  {getOverflow(props.selectedPods[i], i)}
                  <img src={podLibrary[props.selectedPods[i].podId].productImagePrimaryPath }/>
                </li>
              )
          }

          const emptyPods = 4 - props.selectedPods.length;
          if(emptyPods > 0){
            for(let j=0; j < emptyPods; j++){
              podSlots.push(
                <li className="selected-pod-item">
                  <div className="fill-hole">
                    <Graphic graphicName="plus-icon" />
                  </div>
                </li>
              )
            }
          }
        }

        if(isOpen){

          let consolidatedList  : boxSelectionData[] = []
          let selectedPodsModifyMenu : ReactElement[] = [];
          //check each number in the list
          if(consolidatedList.length == 0 && props.selectedPods.length){
            consolidatedList.push({
              podId : props.selectedPods[0].podId,
              quantity : 1,
              boxCount : props.selectedPods[0].boxCount
            });
          }

          if(consolidatedList.length > 0){

            selectedPods: for(let i = 1; i < props.selectedPods.length; i++){

              for(let j=0; j < consolidatedList.length; j++){
                if(consolidatedList[j].podId == props.selectedPods[i].podId){
                  consolidatedList[j].boxCount++;
                  continue selectedPods;
                }
              }

              consolidatedList.push({
                podId : props.selectedPods[i].podId,
                boxCount : 1,
                quantity : 1
              })

            }

            console.log("consolidatedList: ", consolidatedList)


            for(let k=0; k < consolidatedList.length; k++){
              console.log(consolidatedList[k], podLibrary[k])
              selectedPodsModifyMenu.push(
                <li className="pod-modifier">
                  <div className="main-data">
                    <div className="pod-lid">
                      <KButton
                        label=""
                        iconStandard="close"
                        iconPlacement="after-label"
                        buttonType="secondary"
                        transitionType="expand-bg"
                        classes="close-btn"
                        buttonWidth="fit-to-content"
                      />
                      <img src={podLibrary[consolidatedList[k].podId].productImagePrimaryPath} />
                    </div>
                    <label className="pod-name">{podLibrary[consolidatedList[k].podId].podName}</label>

                      <Incrementor
                        initialValue={1}
                        maxValue={2}
                        minNumber={0}
                        incrementFunc={()=>{}}
                        label={"Qty"}
                      />

                  </div>

                </li>
              )
            }
          }

          return(
            <div className="edit-list-container">
              {editBtn()}
              {getPodSelectionMessaging()}
              <ul className="edit-pods-menu">
                {selectedPodsModifyMenu}
              </ul>
            </div>
          )
        }

        return(
          <div className="pod-selection-status">
            {editBtn()}
            {getPodSelectionMessaging()}
            <div className="pods-list-container">
              {getExtraPods()}
              <ul>
                {podSlots}
              </ul>
            </div>
          </div>
        )
  }

  const getCoffeeMakerSlot =()=>{

    if(props.coffeeMakerSelectedID < 0){
      return (
        <div className="coffee-maker-slot">
          <h4>Select a qualifying coffee maker to save big</h4>
          <div className="brewer-hole">
            <Graphic graphicName="plus-icon" />
            <div className="extended-outline dashed"/>
          </div>
        </div>
      )
    }

    return(
      <div className="coffee-maker-slot">
        <h4>Great choice!</h4>
        <div className="coff-maker-selected-display">
          <div className="coffee-maker-image">
            <img src={coffeeMakerList[props.coffeeMakerSelectedID].productImagePath} className="product-image" />
            <p>{coffeeMakerList[props.coffeeMakerSelectedID].productName}</p>
          </div>
        </div>
      </div>
    )
  }

  const getStepUI =(currentJourneyStep : ksk_step_T)=>{
    let headerText = ""
    let stepNumber = ""
    let activeStep = "inactive"
    let specialMenuItem : ReactElement = <></>;

    let isComplete : boolean = false;

    let selectionAreaContent : ReactElement = <></>

    console.log("props.currentJourneyState:", props.currentJourneyState);

    switch (currentJourneyStep){
      case "select-coffee-maker":
        stepNumber = "1"
        isComplete = props.coffeeMakerSelectedID > -1
        if(props.coffeeMakerSelectedID > -1){
          headerText = "Your Coffee Maker"
        }else{
          headerText = "Choose Coffee Maker"

        }
        selectionAreaContent = getCoffeeMakerSlot();
        break;

      case "select-pods":
        stepNumber = "2"
        isComplete = props.podSelectionComplete;
        specialMenuItem = (
          <div>
            <label>Qty: </label>
            <label onClick={()=>setIsOpen(!isOpen)}>{utilityCalcBoxes(props.selectedPods, 24).slotsUsed}/4</label>
          </div>
        )

        if(props.podSelectionComplete){
          headerText = "Your Pods";
        }else{
          headerText = "Choose Pods";
        }
        selectionAreaContent = getPodSlots();
    }

    const getActive =()=>{
      if(props.currentJourneyState === currentJourneyStep){
        activeStep = "active";
      }
    }

    return (
      <div className={`active ksk-step ${getActive()} `} onClick={()=>props.actionFunc(currentJourneyStep)}>
        <div className={`title-area ${isComplete}`}>
          <div className="step-marker">
            <label>{stepNumber}</label>
            <Graphic graphicName="checkmark-circled" />
          </div>
         <div className="your-pods">
           <h3>{headerText}</h3>
           {specialMenuItem}
         </div>
        </div>
        <div className={`selection-slot ${activeStep} `}>
          <Graphic graphicName="carat-pointing-left" />
          {selectionAreaContent}
        </div>
      </div>
    )
  }

  const editBtn=()=>{

    if(props.selectedPods.length == 0){return <></>}
    let btnLabel = "Edit";

    if(isOpen){btnLabel = "Done"}

    return(
     <KButton
       label={btnLabel}
       buttonType="ecommerce-primary"
       actionFunc={()=>setIsOpen(!isOpen)}
       classes="edit-menu-btn"
       transitionType="expand-bg"
     />
    )
  }

  const getOpenClosed=()=>{
   if(!isOpen){return "is-closed"}
   return "is-open"
  }

  const getIsCollapse=(widthX : number | undefined)=>{
      if(!widthX){return ""}

      if(widthX <= 800){
       if(isCollapsed){
         return "menu-expanded"
       }
       return "menu-collapsed"
      }
  }


  const getMobilePersistentFooterMenu =(journeyStep : ksk_step_T)=>{
    return getStepUI(journeyStep)
  }

  return (
    <div>
      <div className={`persistent-mobile-footer ${getIsCollapse(props.parentWidth)}`}>
        <div onPointerUp={()=>setIsCollapsed(!isCollapsed)} className="tray-affordance">
          <div className="inner-marker"></div>
        </div>
        {getMobilePersistentFooterMenu(props.currentJourneyState)}
      </div>
    <div className={`ksk-tray ${getOpenClosed()} ${getIsCollapse(props.parentWidth)}` }>
      <div onClick={()=>setIsCollapsed(!isCollapsed)} className="tray-affordance">
        <div className="inner-marker"></div>
      </div>
      <h2>Your Starter Kit</h2>
      <div className={`ksk-tray-item coffee-maker ${props.coffeeMakerSelectedID > -1}`} onClick={()=>{props.actionFunc("select-coffee-maker")}}>
        {getStepUI("select-coffee-maker")}
      </div>
      <div className={`ksk-tray-item pods ${props.podSelectionComplete}`} onClick={()=>{props.actionFunc("select-pods")}}>
        {getStepUI("select-pods")}
      </div>
      <div className="ksk-tray-item review-order" >
        <KButton
          label="Review Order"
          buttonType="secondary"
          transitionType="expand-bg"
          buttonWidth="fit-to-content"
          iconStandard="none"
          classes={`review-btn ${props.podSelectionComplete && props.coffeeMakerSelectedID > -1 }`}
          actionFunc={()=>{props.actionFunc("review-order")}}
        />
      </div>

    </div>
    </div>
  )
}
