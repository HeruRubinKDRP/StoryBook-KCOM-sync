import React, {ReactElement, useContext, useEffect, useState} from "react";
import {MyDestinations, subscriptionLibType} from "../../pages/myBrews";
import {ContainerHeader} from "../ContainerHeader/ContainerHeader";
import GridPanel from "../GridPanel/GridPanel";
import KButton from "../Kbutton/KButton";
import {currentAppInfo} from "../my-brews/myBrewsManager";

export interface ImyBrews {
  subscriptions :subscriptionLibType;
  viewSize : string;
  userHasConnected : boolean;
  userHasScheduled : boolean;
  useSectionHeaderSMART : boolean;
}

export const MyBrewsSubs =(props : ImyBrews)=>{
  const context = useContext(currentAppInfo)

    console.log("my library", props.subscriptions);
    //set up our blank tiles
    const SMART =()=>{
      if(!props.userHasConnected){
        return <></>
      }
      if(props.subscriptions.SMART.length <= 0){
        return <></>
      }

      let tiles : ReactElement[] = [];

      for(let i=0; i < props.subscriptions.SMART.length; i++){
        tiles.push(
          <GridPanel
            panelGridType="mobile-item-panel"
            focalImagePath={props.subscriptions.SMART[i].productImagePrimaryPath}
            columnRows={4}
            customClasses="active"
            productType="pod-lid"
            uniqueID={"55"}
            productStatus="active"
            gridWidth="100%"
            minGridHeight="3rem"
            nextShipDate="soon"
            podsLeft={4}
            boxCount={22}
          />
        )

      }

      return <ContainerHeader icon="scheduled-logo" containerType="no-top-hat" headerText="SMART Auto-Delivery">
              <div className="tiles-section">
                {tiles}
              </div>
          </ContainerHeader>
    }

    const Scheduled = ()=>{
      if(!props.userHasScheduled){
        return <></>
      }

      //if no scheduled
      if(props.subscriptions.scheduled.length <= 0){
        return <></>
      }

      let tiles : ReactElement[] = [];

      for(let i=0; i<MyDestinations.scheduled.length; i++){

        let section :ReactElement[] = [];

        //if the item belongs to a location
        //test locations: John's Office  Home  Lake house
        for(let j=0; j < props.subscriptions.scheduled.length; j++){

          //check over each of the locations
          for (let k=0; k< props.subscriptions.scheduled[j].subscribed.scheduled.locations.length; k++){
            if( props.subscriptions.scheduled[j].subscribed.scheduled.locations[k].toLowerCase() ==
              MyDestinations.scheduled[i].locationName.toLowerCase()
            ){
              section.push(
                <GridPanel
                  panelGridType="scheduled-item"
                  focalImagePath={props.subscriptions.scheduled[j].productImagePrimaryPath}
                  columnRows={4}
                  customClasses="active"
                  productType="pod-lid"
                  uniqueID={"55"}
                  productStatus="active"
                  gridWidth="100%"
                  minGridHeight="3rem"
                  nextShipDate="soon"
                  podsLeft={props.subscriptions.scheduled[j].inventory}
                  boxCount={props.subscriptions.scheduled[j].subscribed.scheduled.variant}
                  //TODO update this with real value
                  scheduledBoxesPer={2}
                  scheduledFrequency="every 4 weeks"
                />
              )
            }
          }
        }


        if(section.length > 0){
          tiles.push(
            <div className="tiles-section">
              <KButton
                classes="section-title"
                buttonType="primary"
                buttonWidth="fit-width"
                iconPlacement="right-edge"
                iconStandard="chevron-right"
                label={MyDestinations.scheduled[i].locationName}
              />
              {section}
            </div>
          )
        }

      }



      return <ContainerHeader icon="SMART-logo" containerType="iconLeft" headerText="Scheduled Auto-Delivery">
        {tiles}
      </ContainerHeader>
    }

    const YouAlsoBrewed =()=>{
      if(props.subscriptions.youAlsoBrewed.length <= 0){
        return <>empty</>
      }
      let tiles : ReactElement[] = [];
      for(let i=0; i < props.subscriptions.youAlsoBrewed.length; i++){
        tiles.push(
          <GridPanel
            panelGridType="you-also-brewed"
            focalImagePath={props.subscriptions.youAlsoBrewed[i].productImagePrimaryPath}
            columnRows={4}
            customClasses="active"
            productType="pod-lid"
            uniqueID={"55"}
            productStatus="active"
            gridWidth="100%"
            minGridHeight="3rem"
            nextShipDate="soon"
            podsLeft={props.subscriptions.youAlsoBrewed[i].inventory}
            boxCount={props.subscriptions.youAlsoBrewed[i].subscribed.scheduled.variant}
            scheduledBoxesPer={2}
            scheduledFrequency="every 4 weeks"
          />
        )
      }

      return <ContainerHeader icon="logo-you-also-brewed" containerType="no-top-hat" headerText="You Also Brewed">
        <div className="tiles-section">
          {tiles}
        </div>
      </ContainerHeader>

    }

    const PromoBrew =()=>{
      if(!props.userHasScheduled && !props.userHasConnected ){
        return <div className="promo subscription-group-section">Subscription Promotional</div>
      }
    }

    return <>

      <div className="subscriptions-main">
        {PromoBrew()}
        {SMART()}
        {Scheduled()}
        {YouAlsoBrewed()}
      </div>
    </>;


}
