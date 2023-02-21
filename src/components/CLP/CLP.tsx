import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import React, {ReactElement, useContext, useEffect, useLayoutEffect, useRef, useState} from "react";

import {podItemT, podLibrary} from "../../pages/myBrews";
import {ProductInfoItem} from "../ProductItemData/ProductInfoItem";


export interface Iclp{
  designVersion? : "standard" | "large-image" | "box-art";
  productsList : podItemT[];
  includeSearch : boolean;
  actionFunc : Function
}

export const CLP=(props:Iclp)=>{
    const podsContainerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    if(!podsContainerRef.current){return}
    let podsTL = gsap;
    podsTL.registerPlugin(ScrollTrigger)
    //get animate-ables
    const cards = Array.from(podsContainerRef.current.getElementsByClassName("pod-lid"));
    const dataSections = Array.from(podsContainerRef.current.getElementsByClassName("data-text"));
    const actionMenus = Array.from(podsContainerRef.current.getElementsByClassName("action-menu"))

    for(let i=0; i<cards.length;i++ ){
      podsTL.set(
        cards[i],{
          scale : 0.5
        }
      );
        podsTL.to(
        cards[i],{
          scale : 1.25,
            scrollTrigger:{
            trigger:cards[i],
              scroller : podsContainerRef.current,
              markers : false,
              scrub : true,
              start : 'top 75%',
              toggleActions : 'play none none reverse',
              immediateRender : false,
              onEnter : self=> {console.log("scroll progress", self.progress )}
            }
        }
      );
      podsTL.to(
        cards[i],{
          scale : 0.5,
            scrollTrigger :{
            trigger : cards[i],
              scroller : podsContainerRef.current,
              markers : false,
              scrub : true,
              start : "top 25%",
              toggleActions : 'play none none reverse',
              immediateRender : false
            }
          }
        );


      podsTL.set(
        dataSections[i],{
          marginLeft : 0
        }
      )

      podsTL.to(
        dataSections[i],{
          marginLeft : 24,
          scrollTrigger :{
            trigger : cards[i],
            scroller : podsContainerRef.current,
            markers : false,
            scrub : true,
            start : "top 75%",
            toggleActions : 'play none none reverse',
            immediateRender : false
          }
        }
      )

      podsTL.set(
        actionMenus[i],{
          opacity : 0,

          yPercent : -100
        }
      )

      podsTL.to(
        actionMenus[i],{
          opacity : 1,

          yPercent : 0,
          duration : 0.25,
          scrollTrigger :{
            trigger : cards[i],
            scroller : podsContainerRef.current,
            markers : false,
            scrub : false,
            start : "top 40%",
            toggleActions : 'play none none reverse',
            immediateRender : false
          }
      })

      podsTL.to(
        actionMenus[i],{
        opacity : 0,

          duration : 0.25,
          yPercent : 100,
          scrollTrigger :{
          trigger : cards[i],
            scroller : podsContainerRef.current,
            markers : false,
            scrub : false,
            start : "top 20%",
            toggleActions : 'play none none reverse',
            immediateRender : false
        }
      }
      )
    }





  },[])

  const createCards =()=>{
    let cards : ReactElement[] = []
    for(let i=0; i < props.productsList.length; i++){
      cards.push(

          <ProductInfoItem
            actionLabel={"Add"}
            key={i}
            brand={podLibrary[i].brand}
            layoutType="stacked"
            productName={podLibrary[i].podName}
            productImage={podLibrary[i].productImagePrimaryPath}
            basePrice={podLibrary[i].variant[0].basePrice}
            currency={"$"}
            showPrice={true}
            discountPercentageAmountAsNumber={25}
            actionFunc={()=>props.actionFunc(podLibrary[i].podId, "add")}
           veilFunc={()=>{}}/>

      )
    }

    return cards;
  }

  return(
    <div className="pods-container" ref={podsContainerRef} >
      <div className="center-column">
        {createCards()}
      </div>
    </div>
  )
}
