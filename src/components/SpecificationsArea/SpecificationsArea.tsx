import React from "react";
import {useResizeDetector} from "react-resize-detector";
import {ContentItem} from "../ContentComponents/ContentComponent";
import {GetElement, getElementType} from "../ContentComponents/getElements";
import {SpecificationsAreaStyled} from "./specifications-area.styled";

export interface iSpecificationsArea {
  contentStack: getElementType[],
  mediaElementPath : string;
  mediaType : "movie" | "image";
}

export const SpecificationsArea = (props: iSpecificationsArea) => {
  const { width, height, ref } = useResizeDetector();

  const getContentStack = () => {
    return  <GetElement key={1}
      cards={props.contentStack}
    />;
  }

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return }
    if(widthX < 800){
      return "mobile"
    }else{
      return "desktop"
    }
  }

  return (
    <SpecificationsAreaStyled ref={ref} className={`specifications-area ${getContainerQuery(width)}`}>
      <div className="images-area">
        <ContentItem
        customClasses="specs-media-container"
          backGroundType={props.mediaType}
          backgroundColor="transparent"
          backgroundUrlPath={props.mediaElementPath}
          contrastBackground="none"
          ctaLabel="Call to action"
          ctaLinkTo="www.google.com"
          heightMethod="stretch-to-parent"
          mainMessage=""
          mainMessageSize="Large"
          mainMessageWeight="regular-weight"
          messageTextAlignment="text-center"
          secondaryMessage=""
          sectionAppearance="inset-beveled"
          sectionType="content-front-and-center"
          termsAndConditionsCTA={{
            termsAndConditionsCtaLabel: 'See Details',
            termsAndConditionsLabelDetail: 'Restrictions apply'
          }}
          termsAndConditionsFullText={{
            header: '',
            termsAndConditionsDetailCopy: ''
          }}
         component="content"
         hasCTA={false}
         hasFocalImage={false}
         mainTextHasShadow={false}
         sectionName={"specsMedia"}

        />
      </div>
      <div className="specs-details-area">
        {getContentStack()}
      </div>
    </SpecificationsAreaStyled>
  )


}
