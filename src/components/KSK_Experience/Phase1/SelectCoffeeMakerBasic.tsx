import React, {ReactElement} from "react";
import {Kcarousel} from "../../Carousel/Kcarousel";
import KButton from "../../Kbutton/KButton";
import {CoffeeMakerItem} from "../KSK";
import Image from "next/image";

export interface iSelectCoffeeMaker{
  coffeeMakers : CoffeeMakerItem[];
  selectFunc : Function;
  widthX? : number
}

export const SelectCoffeeMakerBasic=(props : iSelectCoffeeMaker)=>{


  const createColorMenu =()=>{

  }

  const createCoffeeMakersList=()=>{
    let items : ReactElement[] = [];
    for(let i=0; i < props.coffeeMakers.length; i++){
      items.push(
        <div className="coffee-maker-item">
          <h4 className="tagline">{props.coffeeMakers[i].tagLine}</h4>
          <div className="coffee-maker-image-title">
            <div className="product-image-name">
              <Image
                  unoptimized={true}
                  width={500}
                  height={500}
                  alt={props.coffeeMakers[i].productName}
                  src={props.coffeeMakers[i].productImagePath}
              />
            </div>
            <h2>{props.coffeeMakers[i].productName}</h2>
          </div>
          <KButton
            label="Select"
            buttonType="secondary"
            transitionType="expand-bg"
            buttonWidth="fit-width"
            iconPlacement="no-icon"
            iconStandard="none"
            actionFunc={()=>props.selectFunc(props.coffeeMakers[i].id)}
          />
        </div>
      )
    }

    if(props.widthX  && props.widthX <= 600){
      return (
        <div className="list-area">
          {items}
        </div>
      )
    }

    return (
      <Kcarousel
        itemsPerSlide={4}
        component="carousel"
        carouselType="slider"
        keepNavButtons={true}
        navPosition="bottom"
        navStyle="dots"
        slides={items}
        dragRule="no-drag"
      />
    )

  }
  return(
    <div className="coffee-makers-list">
      {createCoffeeMakersList()}
    </div>
  )
}
