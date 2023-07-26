import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";
import {PricingCarouselStyled} from "./pricing-carousel.styled";

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
  <PricingCarouselStyled ref={ref} className="pricing-items-carousel">

  </PricingCarouselStyled>
)
}
