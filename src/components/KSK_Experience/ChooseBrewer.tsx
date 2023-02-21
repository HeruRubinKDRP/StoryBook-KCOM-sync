import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import React, {
  createRef,
  LegacyRef,
  MutableRefObject,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import {useResizeDetector} from "react-resize-detector";
import {BooleanToggle} from "../BooleanToggle/BooleanToggle";
import Graphic from "../Graphic/Graphic";
import {KButton} from "../Kbutton/KButton";
import {ProductInfoItem} from "../ProductItemData/ProductInfoItem";
import {CoffeeMakerItem, purchaseProgramT, savingsProgramT} from "./KSK";

export const getSavingsName =(name : savingsProgramT)=>{
  switch (name){
    case "50off":
      return "50% Off"

    case "Free":
      return "FREE"

    case "SMART":
      return "55% Off SMART"

  }
}

export interface iChooseBrewer {
  mainFunc: Function;
  detailsFunc? : Function;
  productsList: CoffeeMakerItem[]
  filterProgram : purchaseProgramT
}


export const ChooseBrewer = (props: iChooseBrewer) => {
  //Refs
  const cardsContainer = useRef<HTMLUListElement>(null);
  const carouselContainer = useRef<HTMLDivElement>(null);
  const { width, height, ref } = useResizeDetector();
  //component STATE
  const [brewerIndexForDetails, setBrewerIndex] = useState(-1)
  const [smartProgramFilter, setSmartFilter] = useState(true);
  const [fiftyOffFilter, setFiftyOffFilter] = useState(true);
  const [freeFilter, setFreeFilter] = useState(true);
  const [freePodsFilter, setFreePodsFilter] = useState(true);
  //GSAP
  gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

  let cardTransition = gsap.timeline({paused: true, smoothChildTiming:true});
  let cardIntro = gsap.timeline({paused: true, smoothChildTiming:true}).duration(1);

  //intro
  useLayoutEffect(()=>{
    cardTransition.pause();
    if(!cardsContainer.current){
      return;
    }
    let cards : HTMLCollectionOf<any>  = cardsContainer.current.getElementsByClassName("product-card");

  },[cardTransition, cardsContainer])

  useEffect(()=>{

    if(!cardsContainer.current){
      return;
    }
    let cards : HTMLCollectionOf<any>  = cardsContainer.current.getElementsByClassName("product-card");
    let prodImages : HTMLCollectionOf<any>  = cardsContainer.current.getElementsByClassName("pod-lid");
    const dragWidth : number = cardsContainer.current.getBoundingClientRect().width;
//get containers that the cards sit in, we'll use this for positioning
    let cardsOuter : HTMLCollectionOf<any> = cardsContainer.current.getElementsByClassName("list-item") ;

    const labels = cardsContainer.current.getElementsByClassName('product-name');
    const cardsLength = cards.length;
    console.log("cardsLength: ", cards);
    console.log("cardsLength: ", 1 / cards.length);

      const getSnaps = ()=>{
        let snaps : number[] = [];
        for(let i=0; i < cards.length+1; i++){
          // if(i==0){
          //   snaps.push(0)
          //   continue;
          // }
          if(!width){break}
          snaps.push( -( (width/2) * i) )

        }
        console.log(snaps)
        return snaps

      }

    let initializeTL = gsap.timeline({repeat : 1, paused:true}).duration(0);
    initializeTL.set(cards,{
      xPercent : 85, scale : 0.5
    });
    initializeTL.play();

   // const cardPositionEdge : number = dragWidth / (cardsLength+1) - ((cards[1].getBoundingClientRect().width) * 0.5);
    for(let c=0; c<cards.length; c++){
      cardTransition.to(
        cards[c],{
          keyframes:[
            {x : 1, scale : 0.5, duration:0},
            { x : 1, scale : 1, duration :0.2},
            {x : 1, scale : 1, duration :0.7},
            { x : 1, scale : 0.5, duration :0.1},
          ]
        })
    }

    initializeTL.seek(1/cards.length)

    console.log("drag width", dragWidth/cardsLength)

      let sliderCM = Draggable.create(
        cardsContainer.current,{
          type: "x",
          trigger: cardsContainer.current,
          overshootTolerance:0,
          edgeResistance: 1,
          inertia : true,
          allowContextMenu:true,
          snap : {x: getSnaps()},
          bounds :{
            minX : -457,
            maxX : -dragWidth
          },
          onMove: function () {
            cardTransition.progress(Math.abs( this.x / dragWidth ));

            // console.log("play", cardTransition.progress())
            // console.log("on drag X: ", this.x , "drag calc", this.x / dragWidth);
          },
          onThrowComplete : function (){

            console.log("****** throw complete *******", this.x,"progress: ",  cardTransition.progress() );
          },
          onThrowUpdate: function () {
            cardTransition.progress(Math.abs( this.x / dragWidth ));

            //console.log("play", cardTransition.progress())
          },
          onDrag: function() {

          },
          onDragEnd:function (){
            //console.log("on dragging: ", this.x);
          }
          }
      );

    cardTransition.seek(1 / (cardsLength*0.5)).paused()

    console.log("cards:", cardsLength)

  },[cardTransition, width]);


  const flyingCards = (carouselWidth : number | undefined)=>{
    const cards : ReactElement[] = [];
      if(!carouselWidth){return}
      for(let i=0; i<props.productsList.length; i++){
        if(i==0){
          cards.push(<li style={{ minWidth : carouselWidth/2  }}  className={"list-item"}  />)
        }
        cards.push(
          <li style={{ minWidth : carouselWidth/2  }}
              className={"list-item"}
          >

            <div className="product-card" key={i} style={{zIndex : props.productsList.length - i}}>
            <div className="product-data">
              {/*<div className="product-name">{i}</div>*/}

                <ProductInfoItem
                  actionLabel=""
                  key={`ksk-item-${i}`}
                  productImage={props.productsList[i].productImagePath}
                  layoutType="topName-bottomPrice"
                  productName={props.productsList[i].productName}
                  basePrice={Number(props.productsList[i].basePrice)}
                  currency="$"
                  discountPercentageAmountAsNumber={Number(props.productsList[i].basePrice)}
                  showPrice={false}
                 actionFunc={()=>{}}/>
                <div className="colors">
                  <div className="color-item selected">
                    <div className="color-selection" style={{backgroundColor : "#020202"}}/>
                  </div>
                  <div className="color-item">
                    <div className="color-selection" style={{backgroundColor : "#282525"}}/>
                  </div>
                  <div className="color-item">
                    <div className="color-selection" style={{backgroundColor : "#7e7474"}}/>
                  </div>
                </div>
                <div className="purchase-program">
                  {getSavingsName(props.productsList[i].kskProgram)}
                </div>

               <div className="messages">
                <p className="explanation"> $99.99 Brewer + 25% off pods with Auto-delivery</p>
                <div className="commitment-message">
                  <div className="aligner">
                    <Graphic graphicName="icon-pods" iconSize="1.5rem" />
                    <p>16 Box commitment, first 4 free</p>
                  </div>
                </div>
              </div>
                <div className="cta-container">
                    <KButton
                      actionFunc={()=>props.mainFunc(brewerIndexForDetails)}
                      buttonType="secondary"
                      buttonWidth="fit-to-content"
                      iconPlacement="right-edge"
                      iconStandard="chevron-right"
                      label="Product highlights"
                      classes="product-highlights"
                    />
                    <KButton
                      actionFunc={() => props.mainFunc(i)}
                      buttonType="primary"
                      buttonWidth="fit-to-content"
                      iconPlacement="no-icon"
                      iconStandard="none"
                      label="Select"
                    />
                  </div>
            </div>
          </div>
          </li>
        );
      }


    return(
          <>
            {cards}
          </>
    )
  }

  const navigateCards=(direction : "right" | "left")=>{
    return
    switch(direction){
      case "left":
        cardTransition.play("-=0.1" ).pause();
        console.log("left progress:" ,  cardTransition.progress());
        break;
      case "right":
        cardTransition.play("+=0.1" ).pause();
        console.log("right progress:",  cardTransition.progress());
        break;
    }
  }

  return <div className="brewer-selector-container">

    <div className="filters-container">
      <BooleanToggle actionFunc={()=>setSmartFilter(!smartProgramFilter)} isActive={smartProgramFilter} label="55% OFF + 4 Free boxes" customClasses="filter" toggleType={"checkbox"} toggleShape={"round-rect"} />
      <BooleanToggle actionFunc={()=>setFiftyOffFilter(!fiftyOffFilter)} isActive={fiftyOffFilter} label="50% OFF" customClasses="filter" toggleType={"checkbox"} toggleShape={"round-rect"} />
      <BooleanToggle actionFunc={()=>setFreeFilter(!freeFilter)} isActive={freeFilter} label="FREE " customClasses="filter" toggleType={"checkbox"} toggleShape={"round-rect"} />
      {/*<BooleanToggle actionFunc={()=>setFreePodsFilter(!freePodsFilter)} isActive={freePodsFilter} label="48 FREE Pods " customClasses="filter" toggleType={"checkbox"} toggleShape={"round-rect"} />*/}

    </div>
    <div className="carousel-container" ref={ref}>
      <div className="nav-container">
        <div className="right" onClick={()=>navigateCards("right")}>
          <Graphic graphicName="chevron-right" />
        </div>
        <div className="left" onClick={()=>navigateCards("left")}>
          <Graphic graphicName="chevron-left" />
        </div>
      </div>
      <div className="gallery" >
        <ul className="cards" ref={cardsContainer}>
          {flyingCards(width)}
        </ul>
      </div>

    </div>
  </div>

}
