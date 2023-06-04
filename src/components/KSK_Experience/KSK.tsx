import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {podItemT} from "../../pages/myBrews";
import {podLibrary} from "../../data/beverage-library";
import {CLP} from "../CLP/CLP";
import {KButton} from "../Kbutton/KButton"
import {ChooseBrewer} from "./ChooseBrewer";


export interface Iksk {
  name: string
  steps: KSK_stepType[]
}

export type KSK_stepType = {
  name: string,
  panel: ReactElement
}


export type savingsProgramT = "50off" | "Free" | "SMART";

export type productColorT = {
  colorName : string,
  colorValue : string,
  heroImagePath : string;
}

export interface CoffeeMakerItem {
  id:number;
  brand : string;
  productName: string;
  productImagePath: string;
  basePrice: string;
  kskProgram: savingsProgramT;
  colorVariants : productColorT[];
  tagLine:string;
  features:{
    cupSize : string,
    lattes: string,
    icedSetting : string,
    strengthControl : string,
    waterReservoirCapacity : string,
    colors : string,
    multiStreamTechnology : string,
    dimensions : string
  }
}

export let coffeeMakerList: CoffeeMakerItem[] = [
  {
    id : 0,
    brand : "KEURIG®",
    productName: "K-Café® SMART Single Serve Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Supreme-Single-Serve-Coffee-Maker_5000362102?fmt=png-alpha&hei=180",
    basePrice: "79.99",
    kskProgram: "SMART",
    tagLine : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.",
    colorVariants :[
      {
      colorName : "Black",
        colorValue: "rgb(0,0,0)",
        heroImagePath :"https://images.keurig.com/is/image/keurig/K-Cafe-SMART-Coffee-Latte-Cappuccino-Maker_5000365485?fmt=png-alpha&hei=180"
      }
    ],
    features:{
      cupSize : "4,6,8,10 and 12 oz.",
      lattes: "No",
      icedSetting : "Yes",
      strengthControl : "Yes",
      waterReservoirCapacity : "78 oz",
      colors : "Black Stainless",
      multiStreamTechnology : "Yes",
      dimensions : "Medium"
    }
  },
  {
    id : 1,
    brand : "KEURIG®",
    productName: "K-Mini Plus® ",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha&hei=180",
    basePrice: "99.99",
    kskProgram: "Free",
    tagLine:"Our Slimmest Brewer Yet",
    colorVariants :[
      {
        colorName : "Matte Black",
        colorValue: "rgb(44, 44, 51)",
        heroImagePath : "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      },
      {
        colorName : "Cardinal Red",
        colorValue: "rgb(187, 58, 86)",
        heroImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      },
      {
        colorName : "Studio Gray",
        colorValue: "rgb(169, 169, 166)",
        heroImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      },
      {
        colorName : "Evening Teal",
        colorValue: "rgb(87, 130, 149)",
        heroImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      },
      {
        colorName : "Matte White",
        colorValue: "rgb(255, 255, 255)",
        heroImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      },
      {
        colorName : "Cool Aqua",
        colorValue: "rgb(119, 188, 218)",
        heroImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      },
      {
        colorName : "Misty Green",
        colorValue: "rgb(176, 202, 203)",
        heroImagePath: "https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000202016?fmt=png-alpha"
      }
    ],
    features:{
      cupSize : "6 - 10 oz",
      lattes: "No",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "Add fresh water each time",
      colors : "Black, Cardinal Red, Evening Teal, Studio Gray",
      multiStreamTechnology : "No",
      dimensions : "Small"
    }
  },
  {
    id : 2,
    brand : "KEURIG®",
    productName: "Keurig® K-Select® Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Select-Coffee-Maker_5000359893_swatch?$pdp_general$&wid=352&hei=282&fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72&extend=0,0,0,0",
    basePrice: "139.99",
    kskProgram: "Free",
    colorVariants :[],
    tagLine : "",
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "No",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "52 oz removable",
      colors : "Black, Vintage Red, Matte White, Matte Navy, Oasis, Sandstone",
      multiStreamTechnology : "No",
      dimensions : "Small"
    }
  },
  {
    id : 3,
    brand : "KEURIG®",
    productName: "K-Café® Special Edition Single Serve Coffee Latte & Cappuccino Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Cafe-Special-Edition-Coffee-Latte-Cappuccino-Maker_5000341465?fmt=png-alpha&hei=180",
    basePrice: "199.99",
    kskProgram: "50off",
    tagLine : "Premium finish & Modern Design",
    colorVariants :[],
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "2oz shot Latte & Capp",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "60 oz removable",
      colors : "Nickel",
      multiStreamTechnology : "No",
      dimensions : "Large"
    }

  },
  {
    id : 4,
    brand : "KEURIG®",
    productName: "K-Supreme Plus® Single Serve Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Supreme-Single-Serve-Coffee-Maker_5000362101?fmt=png-alpha&hei=180",
    basePrice: "159.99",
    kskProgram: "50off",
    tagLine : "New! MultiStream Technology™",
    colorVariants :[],
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "2oz shot Latte & Capp",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "60 oz removable",
      colors : "Nickel",
      multiStreamTechnology : "No",
      dimensions : "Large"
    }
  },
  {
    id : 5,
    brand : "KEURIG®",
    productName: "Keurig® K-Elite® Single Serve Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Elite-Single-Serve-Coffee-Maker_5000359832?fmt=png-alpha&hei=180",
    basePrice: "79.99",
    kskProgram: "50off",
    tagLine : "Premium finish & Modern Design",
    colorVariants :[],
    features:{
      cupSize : "4, 6, 8, 10 & 12 oz.",
      lattes: "No",
      icedSetting : "Yes",
      strengthControl : "Yes",
      waterReservoirCapacity : "75 oz removable",
      colors : "Brushed Silver, Brushed Slate, Brushed Gold",
      multiStreamTechnology : "No",
      dimensions : "Medium"
    }
  },
  {
    id : 6,
    brand : "KEURIG®",
    productName: "Keurig® K-Classic® Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K50-Coffee-Maker_5000204441?fmt=png-alpha&hei=180",
    basePrice: "149.99",
    kskProgram: "50off",
    tagLine : "Everyday Essential",
    colorVariants :[],
    features:{
      cupSize : "6, 8 & 10 oz.",
      lattes: "No",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "48 oz removable",
      colors : "Black, Rhubarb",
      multiStreamTechnology : "No",
      dimensions : "Medium"
    }
  },
  {
    id : 7,
    brand : "KEURIG®",
    productName: "K-Duo® Special Edition Single Serve & Carafe Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Duo-Single-Serve-Carafe-Coffee-Maker_5000204977?fmt=png-alpha&hei=180",
    basePrice: "149.99",
    kskProgram: "50off",
    colorVariants :[],
    tagLine : "Brew a Cup & Carafe",
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "No",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "60 oz removable",
      colors : "Black",
      multiStreamTechnology : "No",
      dimensions : "Medium"
    }
  },
  {
    id : 8,
    brand : "KEURIG®",
    productName: "K-Duo Plus™ Single Serve & Carafe Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Duo-Plus-Single-Serve-Carafe-Coffee-Maker_5000363818?fmt=png-alpha&hei=180",
    basePrice: "229.99",
    kskProgram: "50off",
    colorVariants :[],
    tagLine : "Limited-Time Offer",
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "No",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "60 oz removable",
      colors : "Black",
      multiStreamTechnology : "No",
      dimensions : "Large"
    }
  },
  {
    id : 9,
    brand : "KEURIG®",
    productName: "K-Café® Special Edition Single Serve Coffee Latte & Cappuccino Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Cafe-Coffee-Latte-Cappuccino-Maker_5000201735?fmt=png-alpha&hei=180",
    basePrice: "189.99",
    kskProgram: "50off",
    tagLine : "All-In-One Coffeehouse Brewer",
    colorVariants :[],
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "2 oz shot Latte & Capp",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "60 oz removable",
      colors : "Charcoal",
      multiStreamTechnology : "No",
      dimensions : "Large"
    }
  },
  {
    id : 10,
    brand : "KEURIG®",
    productName: "K-Duo® Special Edition Single Serve & Carafe Coffee Maker",
    productImagePath: "https://images.keurig.com/is/image/keurig/K-Duo-SE-Single-Serve-Carafe-Coffee-Maker_5000362326?fmt=png-alpha&hei=180",
    basePrice: "199.99",
    kskProgram: "50off",
    tagLine : "Brew a Cup & Carafe",
    colorVariants :[],
    features:{
      cupSize : "6, 8, 10, 12 oz.",
      lattes: "No",
      icedSetting : "No",
      strengthControl : "No",
      waterReservoirCapacity : "60 oz removable",
      colors : "Silver",
      multiStreamTechnology : "No",
      dimensions : "Large"
    }
  }
]

export const KSK_ProgramToDiscount = () => {

}

export type purchaseProgramT = "all" | "Free" | "50off" | "SMART";



//********************************************************************

export type Kcolors = "Silver" | "Charcoal" | "Black" | "Rhubarb" | "Brushed Silver" | "Brushed Slate" | "Brushed Gold" | "Vintage Red" | "Matte White" | "Matte Navy" | "Oasis" | "Sandstone" | "Cardinal Red" | "Evening Teal" | "Studio Gray";
export type cupSizeT = "6" | "8" | "10" | "12";
export type lattesT = "No" | string;
export type reservoirT = "Add fresh water each time" | "52 oz removable" | "60 oz removable" | "48 oz removable" | "75 oz removable" | "78 oz removable"
export type sizeT = "Huge" | "Large" | "Medium" | "Small" | "Tiny";

export type kskStepsT = "intro-video" | "select-brewer" | "select-pods";

interface iKSKswitches{
  kskProgram: "50off";
  features:{
    cupSize : cupSizeT,
    lattes: lattesT,
    icedSetting : boolean,
    strengthControl : boolean,
    waterReservoirCapacity : boolean ,
    colors : Kcolors[],
    multiStreamTechnology : boolean,
    dimensions : sizeT
  }
}

export const KSKswitches =()=>{

}

//********************************************************************
//********************************************************************

export const KSK = (props: Iksk) => {
  const [currentStep, setCurrentStep] = useState<kskStepsT>("intro-video");
  const { width, height, ref } = useResizeDetector();

  //Kit progress
  const [selectedBrewer, setSelectedBrewer] = useState(-1);
  const [selectedPods, setSelectedPods] = useState<number[]>([])

  const BrewerSelect =(brewerIndex : number)=>{
    setSelectedBrewer(brewerIndex);
    setCurrentStep("select-pods");
    console.log(brewerIndex)
    checkStatus()
  }

  const checkStatus = ()=>{
      console.log("checked status");
  }

  const stepsDisplay =(step : kskStepsT) =>{
    switch (step) {
      case "select-brewer":
        return selectBrewerMenu();
      case "intro-video":
        return intro();
      case "select-pods":
        return selectPods();
    }
  }

  const goToStep =(step : kskStepsT)=>{
      setCurrentStep(step)
  }

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

  const intro =()=>{
    return (
      <div className="intro-container">
          <KButton label={"Let's get started"} buttonType="primary" actionFunc={()=>goToStep("select-brewer")} />
    </div>)
  }

  const selectBrewerMenu = ()=>{
    return(
      <div className="select-coffee-maker-container">
        Select Coffee Maker
        <ChooseBrewer mainFunc={BrewerSelect} productsList={coffeeMakerList} filterProgram={"all"} />
        <KButton label={"Let's get started"} buttonType="primary" actionFunc={()=>goToStep("select-pods")} />
      </div>
    )
  }

  const selectPods =()=>{
    return(
      <div className="pod-select-pods">
        Select Pods
        <CLP productsList={podLibrary} includeSearch={true} actionFunc={selectPod}/>
        <KButton label={"Let's get started"} buttonType="primary" actionFunc={()=>checkStatus()} />
      </div>
    )
  }

  const reviewProgress = ()=>{
    return(
      <div className="progress-container">
        Progress
      </div>
    )
  }

  const getContainerQuery =(widthX : number | undefined)=>{

    if(!widthX){
      return 'less-than-399';
    }
    if(widthX >= 1000){
      return 'width-above-1000'
    }

    if(widthX >= 400 && widthX < 1000 ){
      return 'width-between-400-and-999'
    }

    if(widthX < 400 ){
      return 'less-than-399'
    }


    return "";
  }

  return (

          <div className={`starter-kit-container ${getContainerQuery(width)}`}>
            {stepsDisplay(currentStep)}
          </div>

  )
}



