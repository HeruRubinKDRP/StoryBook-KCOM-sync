import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import gsap from "gsap/dist/gsap";
import React, {ReactElement, useEffect, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {podItemT, podLibrary} from "../../../pages/myBrews";
import {Kcarousel} from "../../Carousel/Kcarousel";
import KButton from "../../Kbutton/KButton";
import {KToggle} from "../../Toggle/Toggle";
import {coffeeMakerList} from "../KSK";
import {KSK_Tray} from "./KSK_Tray";
import {SelectCoffeeMakerBasic} from "./SelectCoffeeMakerBasic";
import {getPodCards} from "./getPodCards";

export interface iKSK_PhaseOne{
  podLibrary : podItemT[],
  helpMeChooseFilters : string[]
}

export type ksk_step_T = "select-coffee-maker" | "select-pods" | "review-order";
export type ksk_ui_state = "help-me-choose" | "expert-mode";

export type boxSelectionData = {
  podId : number,
  boxCount : number,
  quantity : number
}



export const KSK_Phase_One = (props : iKSK_PhaseOne)=>{

  function onResize(){

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false,
    onResize
  });

  //ui visual states
  const [isVeilActive, setVeilActive] = useState<boolean>(false);
  const [podSelectMode, setPodSelectMode] = useState<ksk_ui_state>("help-me-choose");

  //get data driven classes
  const getVeilClasses =(isVeilActive : boolean)=>{
    if(isVeilActive){
      return "veil-active";
    }
    return ""
  }


  //collection of pods in the kit
  const [podSelectionSet, setPodSelectionSet] = useState<boxSelectionData[]>([]);

  const [allPodsSelected, setAllPodsSelected] =useState<boolean>(false);
  const [allRequirementsMet, setAllRequirementsSet] = useState<boolean>(false)

  const [coffeeMakerSelectedID, setCoffeeMakerSelectedID] = useState<number>(-1);
  const [currentJourneyStep, setJourneyStep] = useState<ksk_step_T>("select-coffee-maker");

  const [selectedPodForModification, setSelectedPodForModification] = useState<number>(-1);



  const [selectedPods, setSelectedPods] = useState<number[]>([])
  // const [currentStep, setCurrentStep] = useState<ksk_step_T>("select-coffee-maker");

  const [currentFilter, setCurrentFilter] = useState("Medium Roast");

  // const [scratchPod, setScratchPod] = useState<boxSelectionData>({boxCount:0, podId:0, quantity:1})


  useEffect(()=>{
    gsap.registerPlugin(Draggable, InertiaPlugin);
  }, [width]);

  //adjust
  const selectPod =(podIndex : number, mode : "add" | "remove")=>{
    console.log("select pod", mode);
    switch(mode){
      case "add":
        let clone = Array.from(selectedPods);
        clone.push(podIndex)
        setSelectedPods(clone);
        break;
      case "remove":
        console.log(mode);
        break;
    }
  }

  const manageModal= async ()=>{
   await setSelectedPodForModification(-1);
   await setVeilActive(false)
  }

  const getToggleState =()=>{
    if(podSelectMode == "help-me-choose"){
      return 0
    }
    return 1
  }

  const getFilters =()=>{
    let filterItems : ReactElement[] = [];
    for(let i=0; i < props.helpMeChooseFilters.length; i++){
      const checkActive =()=>{
        if(props.helpMeChooseFilters[i] == currentFilter){ return "active"; }
      }
      filterItems.push(
        <li className={`filter-item ${checkActive()}`}>
          <KButton
            actionFunc={()=>setCurrentFilter(props.helpMeChooseFilters[i])}
            label={props.helpMeChooseFilters[i]}
            buttonType="secondary"
            transitionType="expand-bg" />
        </li>
      )
    }
    return <ul>{filterItems}</ul>
  }

  const getSearchFilters=()=>{

  }




  const getPodSelectionArea =()=>{


//get pod tiles
    const getPodContainer=(mode : ksk_ui_state)=>{

      switch (mode){
        case "help-me-choose":
          if(width && width > 600){
            return(
              <Kcarousel
                itemsPerSlide={1}
                component="carousel"
                carouselType="slider"
                keepNavButtons={true}
                dragRule="no-drag"
               // slides={clpGroups}
                slides={
                  getPodCards({
                    cardOrganizationMode: "cards-in-groups",
                    podLibrary: podLibrary,
                    cardsPerGroup : 4,
                    podSelectionMode : podSelectMode,
                    selectedPodForModification : selectedPodForModification,
                    manageModalFunc : manageModal,
                    recordPodsFunc : recordSelectedPods,
                    setVeilActiveFunc : setVeilActive,
                    setSelectedPodForModificationFunc : setSelectedPodForModification
                  })
                }
                navStyle={"dots"}
                navPosition={"bottom"}
              />
            )
          }
          return (
            <div className="selected-pods-list">
              {
                getPodCards({
                cardOrganizationMode: "loose-cards",
                  podLibrary :podLibrary,
                  cardsPerGroup : 4,
                  podSelectionMode : podSelectMode,
                  selectedPodForModification : selectedPodForModification,
                  manageModalFunc : manageModal,
                  recordPodsFunc : recordSelectedPods,
                  setVeilActiveFunc : setVeilActive,
                  setSelectedPodForModificationFunc : setSelectedPodForModification
              })
              }
            </div>
          )

        case "expert-mode":
          return(
            <div className="expert-mode selected-pods-list">
              {
                getPodCards({
                  cardOrganizationMode: "loose-cards",
                  podLibrary :podLibrary,
                  cardsPerGroup : 4,
                  podSelectionMode : podSelectMode,
                  selectedPodForModification : selectedPodForModification,
                  manageModalFunc : manageModal,
                  recordPodsFunc : recordSelectedPods,
                  setVeilActiveFunc : setVeilActive,
                  setSelectedPodForModificationFunc : setSelectedPodForModification
                })
              }
            </div>
          )
      }

    }

    let podSelectionArea : ReactElement = <></>;

    switch (podSelectMode){
      case "expert-mode":
        podSelectionArea=
          <>
            <div className={`draggable-container ${getVeilClasses(isVeilActive)}`}>
              {getFilters()}
            </div>
            {getPodContainer("expert-mode")}
          </>
        break;

      case "help-me-choose":
        podSelectionArea = (
          <>
            <div className={`draggable-container ${getVeilClasses(isVeilActive)}`}>
              {getFilters()}
            </div>
            {getPodContainer("help-me-choose")}
          </>
        )

    }


    return (
      <div className="ksk-selection">
        <KToggle
          selectedCaratPosition="bottom"
          toggleOptions={[
            {
              action: () => setPodSelectMode("help-me-choose"),
              label: 'Help me choose'
            },
            {
              action: ()=>setPodSelectMode("expert-mode"),
              label: 'Search & Filter'
            }
          ]}
          toggleStyle="one-pill"
          toggleType="side-by-side"
          classes={`select-mode ${getVeilClasses(isVeilActive)}`}
          overrideSelectedIndex={ getToggleState() }
        />
        {podSelectionArea}
      </div>
    )
  }

  const getCoffeeMakerSelectionArea=(coffeeMakerID : number)=>{
    setCoffeeMakerSelectedID(coffeeMakerID);
    setJourneyStep("select-pods");
    console.log("coffeeMakerID", coffeeMakerID)
    setTimeout(()=>{
      console.log("coffeeMakerID: ", coffeeMakerID)
      console.log("journey: ", currentJourneyStep)
    }, 500)
  }

  const getStep=(step : ksk_step_T | undefined)=>{
    if(!step){return <>error</>}
    switch(step){
      case "select-pods":
        return getPodSelectionArea();
      case "select-coffee-maker":
        return (<SelectCoffeeMakerBasic widthX={width} coffeeMakers={coffeeMakerList} selectFunc={getCoffeeMakerSelectionArea} />)
    }
    return <></>
  }

  const checkStatus = (podSet : boxSelectionData[])=>{
    console.log("pod length: ", podSelectionSet.length);

    let podsCounted = 0;

    for(let i=0; i < podSelectionSet.length; i++){
      let val = podSelectionSet[i].boxCount * podSelectionSet[i].quantity
      podsCounted += val;
    }

    if (podsCounted / 24 >= 4){
      return true
    }

    if( allPodsSelected && coffeeMakerSelectedID){
      setAllRequirementsSet(true);
    }

    //if other conditions aren't met default to false
    return false;
  }

  const recordSelectedPods = async (podID : number, quantity : number, boxCount: number)=>{
    console.log("podID: ", podID)

    let newSelectionSet: boxSelectionData[];
    newSelectionSet = [...podSelectionSet];

    let foundMatch :boolean = false;
    for(let i=0; i<newSelectionSet.length; i++){
      if(newSelectionSet[i].podId == podID){
        newSelectionSet[i].quantity = quantity;
        newSelectionSet[i].boxCount = boxCount;
        foundMatch = true;
      }
    }

    if(!foundMatch){
      newSelectionSet.push({
        podId : podID,
        boxCount : boxCount,
        quantity : quantity
      })
    }

    console.log("podSelectionSet: ", podSelectionSet)

   await setPodSelectionSet(newSelectionSet);
    setSelectedPodForModification(-1)
    //check the
  }

  const getTitleArea=()=>{
    return (
      <div className="title-area-main">
        <h1>Build Your Starter Kit In Two Easy Steps</h1>
        <p>Free K-Select® or Free K-Mini Plus® & 25% off Beverages Cancellation fees & Restrictions apply. See details*</p>
      </div>
    )
  }


  const checkAllRequirementsMet =(coffeeMakerID : number, podsDone : boolean)=>{
    if(coffeeMakerID > -1 && podsDone == true){
      return true
    }
    return false
  }

  const getVeil =(isVeilOpen : boolean)=>{
    if(!isVeilOpen){return}
    return <div className="veil"/>
  }

  const manageJourneyStep = (journeyStep : ksk_step_T)=>{
    setVeilActive(false);
    setSelectedPodForModification(-1)
    setJourneyStep(journeyStep);
  }

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "mobile"}

    if(widthX > 1200){
      return "desktop large"
    }
    if(widthX > 600 && widthX <= 1200){
      return "desktop"
    }

    if(widthX <= 600){
      return "mobile"
    }
  }

  const getModalOpenClass=(itemOpenForEdit : number)=>{
    if(itemOpenForEdit > -1){
      return "modal-active";
    }
    return "";
  }

  //render
  return(
    <div ref={ref} className={`ksk-container ${getModalOpenClass(selectedPodForModification)} ${getContainerQuery(width)} `}>
      <div className="selection-area">
        <div className="select-items-container">
          <KButton
            label="Close"
            buttonType="text-icon-noBG"
            iconStandard="close"
            iconPlacement="after-label"
            transitionType="expand-bg"
            buttonWidth="fit-to-content"
            classes="quit"
          />
          {getTitleArea()}
          {getStep(currentJourneyStep)}

        </div>
        <div className="tray">
            <KSK_Tray
              selectedIndex={1}
              actionFunc={manageJourneyStep}
              currentJourneyState={currentJourneyStep}
              podSelectionComplete={checkStatus(podSelectionSet)}
              coffeeMakerSelectedID={coffeeMakerSelectedID}
              allRequirementsMet={checkAllRequirementsMet(coffeeMakerSelectedID, allPodsSelected)}
              selectedPods={podSelectionSet}
              parentWidth={width}
            />
        </div>
      </div>
      {getVeil(isVeilActive)}
      <div className="backdrop"/>
    </div>
  )
}
