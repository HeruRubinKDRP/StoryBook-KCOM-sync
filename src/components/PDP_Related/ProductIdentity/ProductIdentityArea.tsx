import React from "react";
import {useResizeDetector} from "react-resize-detector";
import {Flag, flagStylesT} from "../../Flag/Flag";
import {iRating, Rating} from "../../Rating/Rating";
import {colorByNameType, colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export interface iProductIdentity{
  productName : string;
  productNameExtended : string;
  tagline? : string;
  rating? : iRating;
  ratingHeight? : number;
  flag : {
    flagLabel : string;
    flagStyle : flagStylesT;
    flagColorOverride? : string;
    flagColorClass? : colorByNameType;
  }
}

export const ProductIdentity =(props : iProductIdentity)=>{

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false
  });

  const getRating=()=>{
    if(!props.rating){return}
    return <Rating
      ratingNumber={props.rating.ratingNumber}
      scrollToTargetID={props.rating.scrollToTargetID}
      totalNumberOfReviews={props.rating.totalNumberOfReviews}
      totalNumberOfStars={props.rating.totalNumberOfStars}
      ratingHeight={props.ratingHeight}
    />
  }

  const getContainerQuery=(widthX : number | undefined)=>{

  }

  return(
    <section ref={ref} className={`product-identity-container `}>
      <div className="name-area">
        <div className="flag-ratings-area">
          <Flag
              flagLabel={props.flag.flagLabel ? props.flag.flagLabel : ""}
              flagColor={props.flag?.flagColorClass || "Bold-CTA"}
              font={{
                fontWeight: "heavy-weight",
                fontSize: "Small"
              }}

              flagStyle="alternating-sharp-round"
          />
          <label className="brand-label">
            {props.productName}
          </label>
          {getRating()}
        </div>
        <h1>{props.productNameExtended}</h1>
        <p>{props.tagline}</p>
      </div>
    </section>
  )
}
