import classNames from "classnames";
import React, {ReactElement, useCallback, useEffect, useState, createContext, useContext} from "react";

import {
  brandsType,
  currenciesType,
  currencyType, MyDestinations, MyLocationsType,
  podItemT,
  podLibrary,
  subscriptionLibType,
  subType
} from "../../pages/myBrews";
import {FinalConfirmation} from "../FlowPanel/FinalConfirmation";
import {QuickAddItem} from "../FlowPanel/QuickAddPanel";
import {SelectDestination} from "../FlowPanel/SelectDestinationPanel";
import {SubscriptionConfigPanel} from "../FlowPanel/subscription-config-panel";
import {AddProductMenu, mobilePositionType} from "../add-products/addProducts";
import {MyBrewsSubs} from "../myBrewsSubs/myBrewsSubs";

export let subsLib : subscriptionLibType = {
  SMART : [],
  scheduled : [],
  youAlsoBrewed : []
}

export const myBrewsQuery = {
  'width-larger-than-1000': {
    minWidth: 1000,
  },
  'width-between-400-and-999': {
    minWidth: 400,
    maxWidth: 999,
  },
  'width-between-100-and-399' : {
    minWidth : 100,
    maxWidth : 399
  }
};
export type myBrewFlows = "add-item" | "snooze-item" | "modify-item";

export const currentAppInfo = createContext<appState>(
  {
    data : {
      currentPanel : "initialize",
      lastPanel : "none",
      addMenuIsOpen : false,
      targetProductID : 0,
      isEditMenuOpen : false,
      targetDeliveryName : "gh",
      targetDeliverySubType :"SMART"  },
    update  : ()=>{console.log("missing update func")}
  });

export interface ImyBrewsManager {
  brands : brandsType;
  podLibrary : podItemT[];
  subsLib : subscriptionLibType;
  userHasConnected : boolean;
  userHasScheduled : boolean;
}

export type appGeneralData = {
  addMenuIsOpen : boolean,
  currentPanel : string;
  lastPanel : string;
  isEditMenuOpen : boolean;
  targetProductID : number;
  targetDeliveryName : string;
  targetDeliverySubType : subType;
}

export type appState = {
  data : appGeneralData,
  update : Function
}

async function createLib() :Promise<subscriptionLibType>{
  //clear out any existing array

  subsLib.SMART = [];
  subsLib.scheduled = [];
  subsLib.youAlsoBrewed = [];

  //SMART

   for (let i =0; i < podLibrary.length; i++){
     if(podLibrary[i].subscribed.SMART.activeSub){
       console.log(podLibrary[i]);
       // add item to the beginning
       subsLib.SMART.push(podLibrary[i]);
     }
   }


  //Scheduled

    for (let i =0; i < podLibrary.length; i++){
      if(podLibrary[i].subscribed.scheduled){
        console.log(podLibrary[i]);
        // add item to the beginning
        if(podLibrary[i].subscribed.scheduled.activeSub){
          subsLib.scheduled.push(podLibrary[i]);
        }
      }
    }


  // you also brewed
  for(let i=0; i < podLibrary.length; i++){
    if(
      !podLibrary[i].subscribed.SMART.activeSub &&
      // !podLibrary[i].subscribed.scheduled.activeSub &&
      podLibrary[i].subscribed.previouslySubbed
    ){
      subsLib.youAlsoBrewed.push(podLibrary[i])
    }
  }

  return subsLib;

}

export const MyBrewsManager =(props : ImyBrewsManager)=>{
  const context = useContext(currentAppInfo)
  const [currentWorkingData, setCurrentWorkingData] = useState({
    currentPanel : "initialize",
    targetProductID : 0,
    isEditMenuOpen : false,
    targetDeliveryName : "none",
    targetDeliverySubType : "SMART"
  } as appGeneralData);




  const upDateAppData = (
    panelName : string,
    podID : number,
    targetDeliveryName : string,
    targetDeliverySubType : subType,
    addMenuIsOpen :boolean,
    lastPanel : string
    )=>{

    setCurrentWorkingData({
      addMenuIsOpen : addMenuIsOpen,
      currentPanel : panelName,
      lastPanel : lastPanel,
      isEditMenuOpen : false,
      targetProductID :podID,
      targetDeliveryName: targetDeliveryName,
      targetDeliverySubType: targetDeliverySubType
    });
    setTimeout(()=>{
      console.log("setCurrentWorkingData", podID);
    }, 2222);
  }

    return(
      <currentAppInfo.Provider value={{ data: currentWorkingData, update: upDateAppData} }>
        <InterimBrewsContainer userHasScheduled={props.userHasScheduled} userHasConnected={props.userHasConnected} updateState={upDateAppData} />
      </currentAppInfo.Provider>
    )
 }



 //__________________________________________________________

 interface IbrewsInterim {
  updateState : Function;
   userHasConnected : boolean;
   userHasScheduled : boolean;
 }




 const InterimBrewsContainer =(props : IbrewsInterim)=>{

   const [myLibrary, updateMyLibrary] = useState(subsLib);
   const [isLoading, setIsLoading] = useState(true);
   const context = useContext(currentAppInfo)


   useEffect(()=>{
     getData();
   },[]);

   const getData =()=>{
     createLib().then(
       (res)=>{
         updateMyLibrary(res);
         setIsLoading(false)
       }
     )
   }

   const updateSubscriptionData = (podID : number)=>{
     createLib().then((res)=>{

     })
   }

   const manageAppData = (panelName : string, podID : number,targetDeliveryName : string,targetDeliverySubType : subType,addMenuIsOpen :boolean, lastPanel:string)=>{

     context.update(
       // panelName :
      panelName,
       // podID :
       podID,
       // targetDeliveryName :
       targetDeliveryName,
       // targetDeliverySubType :
       targetDeliverySubType,
       // addMenuIsOpen :
       addMenuIsOpen,
       // last panel
       lastPanel
     );
   }

   //adding new items menu
   const manageAddMenu=(isOpen : boolean)=>{
    manageAppData(
           // panelName :
     "initialize",
           // podID :
     0,
           // targetDeliveryName :
     "",
           // targetDeliverySubType :
     "SMART",
           // addMenuIsOpen
     isOpen,
      // lastPanel
      "none"
    )
     setTimeout(()=>{
       console.log("manageAddMenu", context)
     }, 1000)
   }

   const addNewItemAction = (itemIDtoAdd : number )=>{
     manageAppData(
       // panelName :
       "Choose where item will go",
       // podID :
       itemIDtoAdd,
       // targetDeliveryName :
       context.data.targetDeliveryName,
       // targetDeliverySubType :
       context.data.targetDeliverySubType,
       // addMenuIsOpen
       context.data.addMenuIsOpen,
       // last panel
       context.data.currentPanel
     )

     setTimeout(()=>{
       console.log("addNewItemAction", context);
     }, 1000)
   }

   const finalConfirmAddNew = ()=>{
     manageAppData(
       // panelName :
       "Final confirmation",
       // podID :
       context.data.targetProductID,
       // targetDeliveryName :
       context.data.targetDeliveryName,
       // targetDeliverySubType :
       context.data.targetDeliverySubType,
       // addMenuIsOpen
       context.data.addMenuIsOpen,
       // last panel
       context.data.currentPanel
     )

     //update in source pod lib
     for(let i=0; i < podLibrary.length; i++){
       if(podLibrary[i].podId == context.data.targetProductID){
         switch(context.data.targetDeliverySubType){
           case "scheduled":
             podLibrary[i].subscribed.scheduled.activeSub = true;
             podLibrary[i].subscribed.previouslySubbed = true;

             let found : boolean = false;
             for(let j=0; j < podLibrary[j].subscribed.scheduled.locations.length; j++){
               if(podLibrary[i].subscribed.scheduled.locations[j] == context.data.targetDeliveryName){
                 found = true;
                 break;
               }
             }

             if(found == false){
               podLibrary[i].subscribed.scheduled.locations.push(context.data.targetDeliveryName)
             }
             break;

           case "SMART":
             podLibrary[i].subscribed.SMART.activeSub = true;
             podLibrary[i].subscribed.previouslySubbed = true;
             break;
         }
       }
     }

     updateSubscriptionData(context.data.targetProductID)

     setTimeout(()=>{
       console.log("finalConfirmAddNew", context);
     }, 1000)
   }

   const addAnotherAction =()=>{
     manageAppData(
       // panelName :
       "Add Item",
       // podID :
       context.data.targetProductID,
       // targetDeliveryName :
       context.data.targetDeliveryName,
       // targetDeliverySubType :
       context.data.targetDeliverySubType,
       // addMenuIsOpen
       context.data.addMenuIsOpen,
       // last panel
       context.data.currentPanel
     )

     setTimeout(()=>{
       console.log("finalConfirmAddNew", context);
     }, 1000)
   }

   const backButtonAction =()=>{
     setTimeout(()=>{
       console.log("back button", context);
     }, 1000);

     if(context.data.currentPanel == "initialize"){
       manageAddMenu(false);
       return;
     }

     manageAppData(
       // panelName :
      context.data.lastPanel,
       // podID :
       context.data.targetProductID,
       // targetDeliveryName :
       context.data.targetDeliveryName,
       // targetDeliverySubType :
       context.data.targetDeliverySubType,
       // addMenuIsOpen
       context.data.addMenuIsOpen,
       // last panel
       context.data.currentPanel
     )


   }

   const selectTargetDestinationAction = (selectDestination : string, subscriptionType : subType)=>{
     manageAppData(
       // panelName :
       "Configure subscription",
       // podID :
       context.data.targetProductID,
       // targetDeliveryName :
       selectDestination,
       // targetDeliverySubType :
       subscriptionType,
       // addMenuIsOpen
       context.data.addMenuIsOpen,
       //last panel
       context.data.currentPanel
     )

    setTimeout(()=>{
      console.log("selectTargetDestinationAction", context)
    }, 1000)
   }

   const createFlowPanels =()=>{
     return [
        {
          panelName: "Add Item",
          panelContent: <QuickAddItem
            addFunc={addNewItemAction }
            afterAddGoToThisPanel={"Choose where item will go"}
            podsLibrary={podLibrary}
            changePanelFunc={()=>{console.log("dfgfh")}}
          />,

          buttonsMenu: [
            {
              buttonLabel: "Nevermind",
              buttonAction: () => manageAddMenu(false),
              buttonNav: "close",
              buttonClasses: "secondary"
            }
          ]
        },
        {
          panelName: "Choose where item will go",
          panelContent: <SelectDestination selectDestination={selectTargetDestinationAction}  destinations={MyDestinations}/>,
          buttonsMenu: [
            {
              buttonLabel: "Nevermind",
              buttonClasses : "secondary",
              buttonAction: () => manageAddMenu(false),
              buttonNav: "close"
            }
          ]
        },
        {
          panelName: "Configure subscription",
          panelContent: <SubscriptionConfigPanel    />,
          buttonsMenu: [
            {
              buttonLabel: "Nevermind",
              buttonAction: () => manageAddMenu(false),
              buttonNav: "close",
              buttonClasses : "secondary",
            },
            {
              buttonLabel: "Confirm",
              buttonAction: finalConfirmAddNew,
              buttonClasses : "cta-cart",
              buttonNav: "Final confirm"
            }
          ]
        },
       {
         panelName: "Final confirmation",
         panelContent: <FinalConfirmation    />,
         buttonsMenu: [
           {
             buttonLabel: "Close",
             buttonAction: () => manageAddMenu(false),
             buttonNav: "close",
             buttonClasses : "secondary",
           },
           {
             buttonLabel: "Add another",
             buttonAction: addAnotherAction,
             buttonClasses : "cta-cart",
             buttonNav: "Add Item"
           }
         ]
       }
      ]
   }



   const scrollDefocused =(isScroll : boolean)=>{
      if(isScroll == true){
        return "yes-scroll";
      }else{
        return "no-scroll";
      }
   }

   if(isLoading == true){
     return <>Loading</>
   }else {
     return (

           <div className={`  ${scrollDefocused(!context.data.addMenuIsOpen)} resizer my-brews-main`}>
             <AddProductMenu action={()=>manageAddMenu(true)} dimensions={` `}/>
             <MyBrewsSubs
               userHasConnected={props.userHasConnected}
               userHasScheduled={props.userHasScheduled}
               viewSize={""}
               subscriptions={myLibrary}
               useSectionHeaderSMART={false}
             />

           </div>

     )
   }
 }
