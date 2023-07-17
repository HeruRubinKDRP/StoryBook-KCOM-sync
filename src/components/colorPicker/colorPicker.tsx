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



  function actionSecondary(){
    if(props.secondaryAction){
      props.secondaryAction()
    }
  }

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



      const getSelection=(index : number)=>{

        if(props.colorVariants.length == 1){
          return "selected";
        }

        if(index == selectedVariant && props.colorVariants[index].inStock){
          return "selected";
        }
        return "";
      }


      variants.push(
        <li
          key={i}
          onClick={()=>manageSetVariant(i)}
          className={`color-dot ${getSelection(i)}  ${props.colorVariants[i].colorName}  `}
          style={{backgroundColor : props.colorVariants[i].colorValue}}
        >

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






  return (
    <ColorPickerStyled className="color-options-container">
      <div className="label-container">

      </div>
      <div className="color-options">
        {getColorOptions()}
      </div>

    </ColorPickerStyled>
  )
}
