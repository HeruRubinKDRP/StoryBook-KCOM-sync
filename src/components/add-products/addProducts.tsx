import React, {ReactElement} from "react";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {AddProductStyled} from "./AddproductStyled";

export type mobilePositionType = "top" | "bottom";

interface IaddProducts{
  action : Function;
  dimensions : string;
}

export const AddProductMenu =(props : IaddProducts) =>{

  const bottomAddMenu=()=>{
    return (
      <AddProductStyled className="add-items-main small">
        <KButton actionFunc={props.action} iconStandard="icon-add" transitionType="rise" iconPlacement="right-edge" classes="add-items extra-large" label={"Add items"} linkTo={""} buttonType="primary-cart-action" />
        <div className="fader-up dark"/>
      </AddProductStyled>
    );
  }

  if(props.dimensions == undefined){
    return bottomAddMenu();
  }

  switch (props.dimensions){
    case "width-larger-than-1000":
      return (
        <AddProductStyled className="add-items-main large">
          <KButton actionFunc={props.action} iconStandard="icon-add" transitionType="rise" iconPlacement="right-edge" buttonWidth="fit-to-content" classes="add-items" label={"Add items"} linkTo={""} buttonType="secondary" />
          <Graphic graphicName="half-circle" classesOverride="add-products-bg"   />
        </AddProductStyled>
      );

    case "width-between-400-and-999":
      return bottomAddMenu();

    case "width-between-100-and-399":
      return bottomAddMenu();

    default:
      return bottomAddMenu();
  }

}
