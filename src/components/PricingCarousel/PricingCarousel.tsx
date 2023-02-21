import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";

export interface iPricingCarousel{

}

export const PricingCarousel=(props:iPricingCarousel)=>{
  function onResize() {

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false,
    onResize
  });



return(
  <div ref={ref} className="pricing-items-carousel">

  </div>
)
}
