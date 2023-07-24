import React, {useEffect,} from "react";
import Graphic from "../Graphic/Graphic";

import KButton from "../Kbutton/KButton";

import {LifeBar} from "../LifeBar/LifeBar";
import {ProductImage} from "../ProductImage/ProductImage";

import {KColors} from "../styles js/colors";
import {GridPanelStyled} from "./grid-panel.styled";


export type GridPanelType =
  "primary" |
  "secondary" |
  "action" |
  "link-internal" |
  "link-external" |
  "round-no-label";

export interface IgridPanel {
  panelGridType: `one-interactive` | "individual-elements" | "mobile-item-panel" | "mobile-item-panel medium" | "scheduled-item"  | "you-also-brewed";
  focalImagePath: string;
  columnRows: number;
  customClasses: string;
  actionFunc?: Function;
  productType: "pod-lid" | "coffee-maker";
  uniqueID: string;
  productStatus: "active" | "out-of-stock";
  gridWidth: string;
  minGridHeight: string;
  nextShipDate: string;
  podsLeft?: number;
  boxCount?: number;
  scheduledBoxesPer?: number;
  scheduledFrequency?: string
}

export const gridPanelQuery = {
  'grid-panel-width-larger-than-600': {
    minWidth: 600,
  },
  'grid-panel-width-between-400-and-599': {
    minWidth: 400,
    maxWidth: 599,
  },
  'grid-panel-width-between-200-and-399' : {
    minWidth : 200,
    maxWidth : 399
  },
  'grid-panel-width-between-50-and-199' : {
    minWidth : 50,
    maxWidth : 199
  }
};


export function GridPanel(props: IgridPanel) {

  useEffect(() => {

  }, [])


  const funcChecker = () => {
    console.log("ssdsd")
    if (props.actionFunc != undefined) {
      props.actionFunc();
    }

  }

  const productType = () => {

    //this feeds into which
    switch (props.productType) {
      case "coffee-maker":
        return "coffee-maker"

      case "pod-lid":
        return "pod-lid"

    }
  }

  const statusIcon = () => {
    switch (props.productStatus) {
      case "active":
        return (
          <div className="status-group">
            <label>{props.productStatus}</label>

            <Graphic graphicName="checkmark-circled" iconSize="2.5rem"/>

          </div>
        )
    }
  }

  const gridGen = (containerQueryClass : string) => {

    switch (props.panelGridType) {
      case 'mobile-item-panel':
        return (
          <div onClick={() => funcChecker()} className={`${props.panelGridType} ${containerQueryClass} panel-grid item`}>
            <div className="bg-container"/>
            <div className="grid-item product-image">
              <ProductImage
                podLid={props.focalImagePath}
                elementType={productType()}
                uniqueID={props.uniqueID}
                containerDimensions={{height: "6rem", width: "6rem"}}
              />
              <div className="divider vertical right top bottom"/>
            </div>
            <div className="grid-item status">
              {statusIcon()}
              <div className="divider vertical right top bottom"/>
            </div>
            <div className="grid-item pods-remaining">
              <div className="pods-inventory-main">
                <Graphic graphicName="icon-pod-filled" />
                <div className="pods-inventory-group">
                  <label className="focus">{props.podsLeft}</label>
                  <label> Left</label>
                  <LifeBar
                    barCurrentAmount={props.podsLeft}
                    barFullAmount={props.boxCount}
                    barColor={KColors.darkRoast.hex}
                    barBackgroundColor="white"
                    barHeight="0.25rem"
                    barWidth="4rem"
                    borderColor="none"
                    stylePreset="none"
                  />
                </div>
              </div>
            </div>
            <div className="grid-item next-shipment">
                <div className="divider horizontal top"/>
                <Graphic graphicName="icon-shipping-truck" classesOverride="data-icon"/>
                <div>
                  <label className="next-date-label">Next Ship</label>
                  <div className="next-ship-date">{props.nextShipDate}</div>
                </div>

            </div>
            <div className="grid-item cta">
              <Graphic graphicName="chevron-right"/>
            </div>
          </div>
        )


      case 'scheduled-item':
        return (
          <div onClick={() => funcChecker()} className={`${props.panelGridType} ${containerQueryClass} mobile-item-panel panel-grid item`}>
            <div className="bg-container"/>
            <div className="grid-item product-image">
              <ProductImage
                podLid={props.focalImagePath}
                elementType={productType()}
                uniqueID={props.uniqueID}
                containerDimensions={{height: "6rem", width: "6rem"}}
              />
              <div className="divider vertical right top bottom"/>
            </div>
            <div className="grid-item status">
              {statusIcon()}
              <div className="divider vertical right top bottom"/>
            </div>
            <div className="grid-item pods-remaining">
              <div className="pods-inventory-main">
                <Graphic graphicName="icon-boxes" classesOverride="data-icon" />
                <div className="pods-inventory-group">
                  <label className="focus">{props.scheduledBoxesPer}</label>
                  <label> Boxes</label>
                  <p className="small-p">{props.scheduledFrequency}</p>
                </div>
              </div>
            </div>
            <div className="grid-item next-shipment">

                <div className="divider horizontal top"/>
                  <Graphic graphicName="icon-shipping-truck" classesOverride="data-icon" />
                  <div>
                    <label className="next-date-label">Next Ship</label>
                    <div className="next-ship-date">{props.nextShipDate}</div>
                  </div>
                </div>

            <div className="grid-item cta">
              <Graphic graphicName="chevron-right" classesOverride="data-icon" />
            </div>
          </div>
        )


      case "you-also-brewed":
        return (
          <div onClick={() => funcChecker()} className={`${props.panelGridType} ${containerQueryClass} mobile-item-panel panel-grid item`}>

            <div className="bg-container"/>
            <div className="grid-item product-image">
              <ProductImage
                podLid={props.focalImagePath}
                elementType={productType()}
                uniqueID={props.uniqueID}
                containerDimensions={{height: "6rem", width: "6rem"}}
              />
              <div className="divider vertical right top bottom"/>
            </div>

            <div className="grid-item cta-container">
              <div className="cta-group">
                <KButton
                  buttonType="secondary"
                  iconPlacement="right-edge"
                  iconStandard="icon-add"
                  buttonWidth="fit-width"
                  transitionType="rise"
                  label="Make SMART"
                  classes="extra-large you-also-brewed"
                />
                <KButton
                  buttonType="secondary"
                  iconPlacement="right-edge"
                  iconStandard="icon-add"
                  transitionType="rise"
                  label="Buy again"
                  classes="extra-large you-also-brewed"
                />
              </div>
            </div>


          </div>

        )
    }
  }

  return (

        <GridPanelStyled>
          {gridGen("")}
        </GridPanelStyled>

  )

}

export default GridPanel;
