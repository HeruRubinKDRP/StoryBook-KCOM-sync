import React, {ReactElement, useContext, useEffect, useState} from "react";
import {MyDestinations, MyDestinationsType} from "../../pages/myBrews";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {currentAppInfo} from "../my-brews/myBrewsManager";
import {getPodInfo} from "./subscription-config-panel";

export interface IselectDestinationPanel {
  destinations: MyDestinationsType;
   selectDestination : Function;
}


export interface IdestinationItem {
  children: ReactElement[];
  destinationType: "scheduled" | "SMART" | "one-time";
}

export const DestinationItem = (props: IdestinationItem) => {
  switch (props.destinationType) {
    case "scheduled":
      return (
        <div className="destination-item">
          <div className="destination-title">
            <div>
              <h2>Recurring Scheduled Delivery</h2>
              <p>Add to a regular delivery</p>
            </div>
            <Graphic graphicName="scheduled-logo" iconSize="2.5rem" />
          </div>
          <div className="buttons-menu">
            {props.children}
          </div>
        </div>
      )

    case "SMART":
      return (
        <div className="destination-item">
          <div className="destination-title">
            <div>
              <h2>Recurring SMART Delivery</h2>
              <p>Just enough pods, just in time</p>
            </div>
            <Graphic graphicName="SMART-logo" iconSize="2.5rem" />
          </div>
          <div className="buttons-menu">
            {props.children}
          </div>
        </div>
      )

    case "one-time":
      return (
        <div className="destination-item">
          <div className="destination-title">
           <div>
             <h2>Add a One-time Item</h2>
             <p>Add an item to an upcoming delivery</p>
           </div>
            <Graphic graphicName="add-to-order" iconSize="2.5rem" />
          </div>
          <div className="buttons-menu">
            {props.children}
          </div>
        </div>
      )
  }
}

export const SelectDestination = (props: IselectDestinationPanel) => {

  const context = useContext(currentAppInfo)
  const createDestinationItems = () => {
    let SMARTdestinations: ReactElement[] = [];
    let scheduledDestinations: ReactElement[] = [];
    let oneTimeDestinations: ReactElement[] = [];
    const targetPod = getPodInfo(context.data.targetProductID);



    //create SMART Destinations
    for (let i = 0; i < props.destinations.SMART.length; i++) {

      const SMARTbtn: ReactElement = <KButton key={`SMART${i}`}
                                              actionFunc={()=>props.selectDestination(props.destinations.scheduled[i].locationName, "SMART") }
                                              label={props.destinations.SMART[i].locationName}
                                              iconPlacement="no-icon"
                                              iconStandard="none"
                                              buttonType="secondary"
      />
      oneTimeDestinations.push(SMARTbtn);

      if( targetPod.subscribed.SMART.activeSub == true ){
        SMARTdestinations.push(
          <KButton actionFunc={()=>{} }
                   label={`Already subscribed at \n ${props.destinations.SMART[i].locationName}`}
                   iconPlacement="no-icon"
                   iconStandard="none"
                   buttonType="secondary"
                   classes="already-subscribed" />
        );
        //if it's already subbed, break out of loop and
        break;
      }


      SMARTdestinations.push(SMARTbtn);

    }

    //Create scheduled
    for (let i = 0; i < props.destinations.scheduled.length; i++) {
      const schedBtn: ReactElement = <KButton key={`Sched${i}`}
                                              label={props.destinations.scheduled[i].locationName}
                                              actionFunc={()=>props.selectDestination(props.destinations.scheduled[i].locationName, "scheduled") }
                                              iconPlacement="no-icon"
                                              iconStandard="none"
                                              buttonType="secondary"
                                      />;
      oneTimeDestinations.push(schedBtn);

      let found : boolean = false;
      checker: for(let j=0; j<targetPod.subscribed.scheduled.locations.length; j++){
        if(targetPod.subscribed.scheduled.locations[j].toLowerCase() == props.destinations.scheduled[i].locationName.toLowerCase()){
          found = true;
          break checker;
        }
      }

      if(found == true){
        scheduledDestinations.push(
          <KButton actionFunc={()=>{} }
                   label={`Already subscribed at ${props.destinations.scheduled[i].locationName}`}
                   iconPlacement="no-icon"
                   iconStandard="none"
                   buttonType="secondary"
                   classes="already-subscribed" />

        );
      }else{
        scheduledDestinations.push(schedBtn);
      }


    }

    return (
      <div className="destination-btns">
        <DestinationItem destinationType="SMART" >
          {SMARTdestinations}
        </DestinationItem>
        <DestinationItem destinationType="scheduled">
          {scheduledDestinations}
        </DestinationItem>
        <DestinationItem destinationType="one-time">
          {oneTimeDestinations}
        </DestinationItem>
      </div>
    )


  }

  return (
    <div className="destination-panel-container-main">
      {createDestinationItems()}
    </div>
  )
}
