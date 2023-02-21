import React, {ReactElement, useState} from "react";
import {Flag} from "../Flag/Flag";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {LearnMore} from "../LearnMore/LearnMore";
import {PopUp} from "../PopUp/PopUp";
import {Price} from "../Price/Price";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";


export interface iAddKSK{
  flag : {
    flagLabel : string;
    flagColor : string;
  }
  numberOfRequiredPods : number;
  message : {
    primaryMessage : string;
    secondaryMessage? : string;
  }
  price :{
      basePrice : number;
      finalPrice : number;
  }
  themeColor : colorByNameType;
  brewerImagePath : string;
  finePrint : string;
  learnMore? : {
    label? : string;
    mode? : "pop-up" | "slide-down";
    articleContent? : string;
    articleTitle? : string;
  }
}

export const AddKSK = (props : iAddKSK)=>{
    const [popUpOpen, setPopUpOpen]=useState(false)

    const getPopUp=()=>{
      console.log("pop up clicked");
        if(!popUpOpen){return}
        return(
          <PopUp hasVeil={true} windowTitle={props.learnMore?.articleTitle} isOpen={true} hasHeader={true} hasBackButton={false} closeFunc={()=>setPopUpOpen(false)}/>
        )
    }

    const getPodSlots=()=>{
      let slots : ReactElement[] = [];
      for(let i=0; i < props.numberOfRequiredPods; i++){
        slots.push(
          <div key={i} className="slot" style={{borderColor : colorNameToValue(props.themeColor)}}/>
        )
      }
      return slots;
    }

    const getLearnMore=()=>{
      if(!props.learnMore){return}
      return (
          <LearnMore
            mode={"pop-up"}
            actionFunc={()=>setPopUpOpen(!popUpOpen)}
            learnMore={
              {
                label : props.learnMore.label
              }
          }
          />
      )
    }

  return (
    <div className="add-ksk-container">
      <Flag
        flagColor={props.themeColor}
        flagLabel={"Our Best Deal"}
        flagStyle="squared-curved"
        flagTextColorOverride={"white"}
        font ={{
          fontSize : "Medium",
          fontWeight : "bold-weight"
        }}
      />
      <div className="details-area">
        <Price
          basePrice={props.price.basePrice}
          calculateDiscountForMe={false}
          currency={"$"}
          showStrikeThrough={true}
          finalPrice={props.price.finalPrice}
          colorOverride={colorNameToValue(props.themeColor)}
        />
        <p className="pricing-message">
          <span className="primary">{props.message.primaryMessage}</span>
          <span className="secondary">{props.message.secondaryMessage}</span>
        </p>
        <div className="explanation-area">
          <img src={props.brewerImagePath} alt=""/>
          <span className="plus" >
            <Graphic graphicName="plus-icon" iconSize="1.25rem" colorOverride={colorNameToValue(props.themeColor)}/>
          </span>

          <div className="slots">
            {getPodSlots()}
          </div>
        </div>
        <KButton
          label={"Build Your Kit"}
          buttonWidth={"fit-to-content"}
          buttonType="primary"
          iconPlacement={"right-edge"}
          showPrice={true}
          finalPrice={99.99}
          carat="none"
          discount={25}
          price={12.99}
          transitionType="expand-bg"
          classes="ksk-item"
          backgroundColorOverride={colorNameToValue(props.themeColor)}
        />
       <div className="fine-print">
         <label >{props.finePrint}</label>
         {getLearnMore()}
       </div>
      </div>
      {getPopUp()}
  </div>)
}
