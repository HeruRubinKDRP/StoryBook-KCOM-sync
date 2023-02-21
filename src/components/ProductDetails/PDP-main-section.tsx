import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import React, {LegacyRef, useEffect, useRef} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ExpandCollapse} from "../ExpandCollapse/expand-collapse";
import KButton from "../Kbutton/KButton";
import {FeaturesList} from "./FeaturesList/features-list";
import {KSKspecial} from "./KSKspecial";


export interface iPDPmain{
  productName : string;
  hasNewFlag : boolean;
  footerStatus : "inline" | "mobile" | "sticky-bottom" | undefined
}


// eslint-disable-next-line react/display-name
export const PDPmain = React.forwardRef((props:iPDPmain, introRef : LegacyRef<any>)=>{

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false
  });
  const ctaGroupRef = useRef<HTMLDivElement>(null)
  const buyItFooterRef = useRef<HTMLDivElement>(null)
  const createFlag =()=>{
    return (
      <div className="new-flag">
        <label className="flag">
          NEW
        </label>
      </div>
    )
  }

  useEffect(()=>{
    if(!ctaGroupRef || !buyItFooterRef){return}
    gsap.registerPlugin(ScrollTrigger);
    let footerTL = gsap;
    footerTL.timeline({defaults: {ease: "in"}});
    footerTL.set(
      buyItFooterRef.current, {
        yPercent : 100
      }
    );

    footerTL.to(
      buyItFooterRef.current,{
        yPercent: 0,
        scrollTrigger :{
          trigger : ctaGroupRef.current,
          start : "bottom 60%",
          fastScrollEnd : false,
          toggleActions : "play none reverse reverse",
          markers : false
        },
        onUpdate:function(){console.log(this.progress())},
        duration: 0.5,
        delay: 0.25
      }
    );



  },[])


  console.log("footer inside pdp main:", props.footerStatus)
const getFooter=()=>{
    if(props.footerStatus == "mobile"){
      return <KButton
        backgroundColorOverride="rgba(253, 232, 155, 1)"
        buttonType="secondary"
        buttonWidth="fit-width"
        iconPlacement="after-label"
        iconStandard="icon-add"
        label="Add to cart"
        transitionType="rise"
      />
    }
}

const getContainerQuery =(widthX : number | undefined)=>{
    if(!widthX){return}
    if(widthX > 1200){
      return "large-container"
    }

    if(widthX <= 1200 && widthX > 400){
      return "medium-container"
    }
    return "small-container"
}

  return (
        <div ref={ref} className={`content-details pdp-main ${getContainerQuery(width)}`}>
          <div className="flag-area fader">
            {createFlag()}
            <div>
              Keurig
            </div>
          </div>
          <h1 className="fader" id="title">{props.productName} </h1>
          <p className="message fader">{"With BrewID™ and a built in milk frother, its easy to create indulgent Café Creations"}</p>
          <div id="ctaGroup" ref={ctaGroupRef}>
            {/*<KButton showPrice={true} calcPrice={false} finalPrice={99.99} price={199.99} discount={50} iconPlacement="right-edge" classes="cta-main fader " showStrikeThroughPrice={true} label="Build your kit" buttonType="secondary" transitionType="expand-bg"/>*/}
            {/*<KButton classes="cta-main fader " label="Just coffee maker" price={199.99} showPrice={true} iconPlacement="right-edge" buttonType="secondary" transitionType="expand-bg"/>*/}
          </div>
          <KSKspecial/>

          <div ref={buyItFooterRef} className="buy-it-now-footer sticky-bottom">
            {getFooter()}
          </div>
        </div>

  )


})
