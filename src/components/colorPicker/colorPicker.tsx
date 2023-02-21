import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import Graphic, {iconType} from "../Graphic/Graphic";
import KButton, {buttonType} from "../Kbutton/KButton";
import {ValidationInput} from "../ValidationInput/ValidationInput";
import {ColorPickerStyled} from "./ColorPickerStyled";

export type productVariantColor = {
  inStock: boolean;
  colorValue : string;
  colorName : string;
}

export interface iColorPicker{
  showProductColors: Boolean;
  colorVariants : productVariantColor[];
  notifyMeFunction? : Function;
  addToCartFunction? : Function;
  secondaryAction? : Function;
  hasSecondaryCTA? : boolean;
  secondaryLabel? : string;
  ctaColorOverride? : string;
  primaryCtaIcon? : iconType;
}

export const ColorPicker=(props : iColorPicker)=>{

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [emailValid, setEmailValid]=useState<boolean | null>(false);
  const [notifyOpenStatus, setNotifyOpenStatus] = useState<boolean>(false);



  useEffect(()=>{
    // for(let i=0; i < props.colorVariants.length; i++){
    //   if(!props.colorVariants[i].inStock && i == selectedVariant){
    //     for(let j=0; j < props.colorVariants.length; j++){
    //       if(props.colorVariants[j].inStock){
    //         setSelectedVariant(j)
    //       }
    //     }
    //   }
    // }
    // setSelectedVariant(-1);
  },[props.colorVariants, selectedVariant]);


  const specialColorConsiderations=(colorValue : string | undefined)=>{
    if(!colorValue){return}

    switch(colorValue){
      case "white":
        return "black";
      case "#FFFFFF":
        return "black";
      default:
        return colorValue;
    }

    return ""
  }

  function actionPrimary(){

    if(isItOutOfStock() && props.notifyMeFunction){
      setNotifyOpenStatus(true)
      props.notifyMeFunction();
    }

    if(!isItOutOfStock() && props.addToCartFunction){
      console.log("add to cart");
      props.addToCartFunction();
    }

    if(isItOutOfStock()){
      console.log("out of stock");
      notifyMeOpen();
    }
  }

  function actionSecondary(){
    if(props.secondaryAction){
      props.secondaryAction()
    }
  }

  function notifyMeOpen(){
    console.log("notify me")
    setNotifyOpenStatus(true)
  }

  function notifyMeAction(){
    console.log("submit email")
    if(props.notifyMeFunction){
      props.notifyMeFunction();
    }
    setNotifyOpenStatus(false)
  }

  const isItOutOfStock=()=>{
    if(props.colorVariants.length==0){
      return false;
    }

    let outOfStockCount=0;
    for(let i=0; i < props.colorVariants.length; i++){
      if(!props.colorVariants[i].inStock){
        outOfStockCount++
      }
    }

    if(props.colorVariants.length == outOfStockCount){
      return true;
    }
  }

  const determinePrimaryStatus =():buttonType=>{
    if(isItOutOfStock()){
      return "secondary";
    }else{
      return "primary"
    }
  }

  const getCTA = (notificationStatus:boolean) => {
    if(!isItOutOfStock()){
      return <></>
    }

    const getCTAlabel=()=>{
      if(isItOutOfStock()){
        return "Notify me";
      }else{return ""}
    }


    const getPrimaryCTA=()=>{
      if(notificationStatus){
        return (
          getNotifyMeFlyout(notificationStatus)
        )
      }

      if(emailValid){
        return <div className="notification success">
          <Graphic graphicName="checkmark-circled" iconSize="1.5rem" colorOverride="" />
          <p>{"You'll receive an email from Keurig when the item becomes available"}</p>
        </div>
      }

      return <KButton
        transitionType="expand-bg"
        buttonType={determinePrimaryStatus()}
        buttonWidth="fit-to-content"
        classes="light"
        backgroundColorOverride={props.ctaColorOverride}
        iconPlacement="after-label"
        iconStandard={props.primaryCtaIcon}
        actionFunc={actionPrimary}
        label={getCTAlabel()}
      />
    }

    return (
      <div className="cta-container">
        {getPrimaryCTA()}
      </div>
    )
  }

  // const getLearnMoreLink=()=>{
  //   if(!props.hasLearMoreLink){return<></>}
  //   const labelChecked=()=>{
  //     if(!props.hasLearMoreLink || !props.learnMoreLabel){return "Learn more"}
  //     else{return props.learnMoreLabel}
  //   }
  //   return(
  //     <>
  //       <KButton
  //         transitionType="none"
  //         buttonType="link-internal"
  //         buttonWidth="fit-to-content"
  //         classes="light learn-more"
  //         iconPlacement="no-icon"
  //         iconStandard="none"
  //         label={labelChecked()}
  //       />
  //     </>
  //   )
  // }

  const manageSetVariant=(selectedIndex : number)=>{
    //only allow setState for in stock items;
    if(props.colorVariants[selectedIndex].inStock){
      setSelectedVariant(selectedIndex);
    }
  }

  const getColorOptions =()=>{
    if(!props.showProductColors){return}

    let variants : ReactElement[] = [];

    for(let i=0; i < props.colorVariants.length; i++){

      const inStockStatus =()=>{
        if(!props.colorVariants[i].inStock){
          return <div className="out-of-stock"></div>
        }
        return <></>;
      }

      const getSelection=(index : number)=>{

        if(props.colorVariants.length == 1){
          return "selected";
        }

        if(index == selectedVariant && props.colorVariants[index].inStock){
          return "selected";
        }
        return "";
      }

      const getOutOfStockDisabled=(index:number):string=>{
        if(!props.colorVariants[index].inStock){
          return "disabled";
        }else{return ""}
      }

      variants.push(
        <li
          key={i}
          onClick={()=>manageSetVariant(i)}
          className={`color-dot ${getSelection(i)} ${getOutOfStockDisabled(i)} ${props.colorVariants[i].colorName}  `}
          style={{backgroundColor : props.colorVariants[i].colorValue}}
        >
          {inStockStatus()}
          <div className="selection-indicator" style={{borderColor : specialColorConsiderations(props.colorVariants[i].colorValue)}}/>
        </li>
      )
    }

    return(
      <ul>
        {variants}
      </ul>
    )
  }

  const handleNotifyMe=(event : ChangeEvent<HTMLInputElement>, validationStatus : boolean)=>{
    console.log(event.target.value)
    if(validationStatus){
      setEmailValid(validationStatus)
    }
    setEmailValid(validationStatus)
  }

  const getSubmitButton=()=>{
    if(emailValid){
      return <KButton
        buttonType="primary"
        iconPlacement="no-icon"
        transitionType="expand-bg"
        iconStandard="none"
        label="Submit"
        classes="dark"
        actionFunc={notifyMeAction}
      />
    }
  }

  const getNotifyMeFlyout=(notifyStatus : boolean)=>{
    if(notifyStatus){
      return (
        <div className="notify-me fly-out">
          <div className="fly-out-content">
            <label>Email:</label>
            <ValidationInput
              validationType={"email"}
              inputValue={""}
              handlerFunction={handleNotifyMe}
            />
            {getSubmitButton()}
            <KButton
              buttonType="secondary"
              buttonWidth="fit-width"
              iconPlacement="no-icon"
              iconStandard="none"
              transitionType="expand-bg"
              label="Close"
              classes="light"
              actionFunc={()=>setNotifyOpenStatus(false)}
            />
          </div>
        </div>
      )
    }
  }

  const getMessagingLabels =()=>{
    if(!isItOutOfStock()){
      return <>
        <label className="key">Selected Color: </label>
        <label className="value"> {props.colorVariants[selectedVariant].colorName} </label>
      </>
    }else{
      return <label className="key">Out of Stock</label>
    }
  }

  return (
    <ColorPickerStyled className="color-options-container">
      <div className="label-container">
        {getMessagingLabels()}
      </div>
      <div className="color-options">
        {getColorOptions()}
      </div>
      {getCTA(notifyOpenStatus)}
    </ColorPickerStyled>
  )
}
