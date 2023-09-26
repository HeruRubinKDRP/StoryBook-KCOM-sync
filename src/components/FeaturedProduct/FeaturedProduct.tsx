import React, {ReactElement} from "react";
import {useResizeDetector} from "react-resize-detector";
import {Kcarousel} from "../Carousel/Kcarousel";
import {ContentItem} from "../ContentComponents/ContentComponent";
import {FeaturesList, featureT} from "../FeaturesList/FeaturesList";
import {Flag, flagStylesT} from "../Flag/Flag";
import {buttonType, KButton} from "../Kbutton/KButton";
import {colorByNameType} from "../_utilities/color-name-to-value/colorNameToValue";
import {FeaturedProductStyled} from "./featured-product.styled";
import Image from "next/image";

export interface iFeaturedProduct{
  layout : "images-left" | "images-right"
  hasFlag : boolean;
  flagLabel?: string;
  flagStyle?: flagStylesT;
  flagColor? : colorByNameType;
  productName : string;
  productNameExtended : string;
  tagline : string;
  description : string;
  featuresList : featureT[];
  hasCTA? : boolean;
  ctaLabel? : string;
  ctaType : buttonType
}

export const FeaturedProduct=(props : iFeaturedProduct)=>{
  function onResize() {

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000,
    skipOnMount : false,
    onResize
  });



  const getFlag=()=>{
    if(!props.hasFlag || !props.flagLabel){return}

    return (
      <Flag
        flagLabel={props.flagLabel}
        flagColor={props.flagColor ? props.flagColor : "Bold-CTA"}

        font={{
          fontWeight: "heavy-weight",
          fontSize: "Small"
        }}
        flagStyle={props.flagStyle ? props.flagStyle : "alternating-sharp-round" as flagStylesT}
      />
    )
  }

  const getFeatures=()=>{
    if(!props.featuresList || props.featuresList.length == 0){return}
    return <FeaturesList features={props.featuresList} />
  }

  const getCTA=()=>{
    if(!props.hasCTA){return}
    return(
      <KButton
        buttonType={props.ctaType}
        buttonWidth="fit-to-content"
        iconPlacement="no-icon"
        iconStandard="none"
        label={props.ctaLabel ? props.ctaLabel : "Learn More"}
        transitionType="expand-bg"
      />
    )
  }

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "small-container"}
    if(widthX < 800){
      return "small-container"
    }
    return "large-container"
  }

  return (
    <FeaturedProductStyled ref={ref} className={`featured-product-container ${getContainerQuery(width)} `}>
      <div className="copy-area">
        <div className="flag-area">
          {getFlag()}
          <label>
            {props.productName}
          </label>
        </div>
        <div className="title-area">
          <h1>{props.productNameExtended}</h1>
          <p className="tag-line">{props.tagline}</p>
          <p className="description">{props.description}</p>
        </div>
        <div>
          {getCTA()}
          {getFeatures()}
        </div>
      </div>
      <div className="media-area">
        <Kcarousel
          carouselType="slider"
          component="carousel"
          itemsPerSlide={1}
          keepNavButtons={true}
          navPosition="bottom"
          navStyle="thumbnails"
          slides={[

            <div key="0" className="image-item-container video">
              <ContentItem
                backGroundType="movie"
                backgroundUrlPath="/video/SMART-sampling.webm"
                contrastBackground="dark"
                ctaLabel="Call to action"
                ctaLinkTo="www.google.com"
                hasCTA={false}
                hasTermsConditions={false}
                heightMethod="stretch-to-parent"
                mainMessage="This is an example here with video"
                mainMessageSize="Large"
                mainMessageWeight="regular-weight"
                mainMessageColor="white"
                mainTextHasShadow
                messageTextAlignment="text-center"
                secondaryMessage="test test test"
                sectionType="content-front-and-center"
                termsAndConditionsCTA={{
                  termsAndConditionsCtaLabel: 'See Details',
                  termsAndConditionsLabelDetail: 'Restrictions apply'
                }}
                termsAndConditionsFullText={{
                  header: 'Lorem ipsum tolem set',
                  termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet lectus, ac congue arcu ultricies eget. Curabitur id nunc quis sapien dictum iaculis. Fusce non faucibus eros. Etiam efficitur velit sit amet rutrum iaculis. Vivamus nec odio commodo, vestibulum nisl nec, aliquet nibh. Fusce finibus id lorem at commodo. Maecenas a varius velit. Nunc nunc enim, tempus a ultrices at, imperdiet quis mauris. Nulla faucibus, nibh quis lobortis convallis, velit metus porttitor metus, sed suscipit arcu leo id sapien. Curabitur varius laoreet urna non tincidunt. Nullam neque ex, luctus et ex sed, interdum vulputate leo. Nunc mollis pellentesque augue, pharetra suscipit nisl. Suspendisse ac dolor arcu. Vestibulum efficitur felis enim, non molestie diam rhoncus vitae. Mauris viverra vehicula diam, ut scelerisque nulla sollicitudin ut. Etiam dictum blandit ipsum, quis ultricies odio egestas quis.  Aenean ut dolor nulla. Proin semper in nisi id viverra. Quisque sed massa tristique, gravida orci id, lacinia enim. Quisque vestibulum nisl in dui suscipit, quis lobortis ex finibus. Nullam euismod, erat id viverra faucibus, magna tortor venenatis neque, tincidunt pharetra enim tellus ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed libero massa, convallis ut diam vitae, laoreet cursus ante. Mauris eleifend tellus lectus, ultricies porttitor lectus posuere ut. Aliquam et accumsan massa.'
                }}
               backgroundColor="white"
               component="content"
               hasFocalImage={false}
               sectionName=""/>
            </div>,
            <div key="1" className="image-item-container">
              <Image
                  alt=""
                  className="image-item"
                  src="/product-images/kss/kss-0.webp"
                  title=""
                  unoptimized={true}
                  width={500}
                  height={500}
              />
            </div>,
            <div key="2" className="image-item-container">
              <Image
                  unoptimized={true}
                  width={500}
                  height={500}
                  alt=""
                  className="image-item"
                  src="/product-images/kcs/kcs-open.png"
                  title=""
              />
            </div>,
            <div key="3" className="image-item-container">
              <Image
                  unoptimized={true}
                  width={500}
                  height={500}
                  alt=""
                  className="image-item"
                  src="/product-images/kcs/kcs-mug.png"
                  title=""
              />
            </div>,
            <div key="4" className="image-item-container">
              <Image
                  unoptimized={true}
                  width={500}
                  height={500}
                  alt=""
                  className="image-item"
                  src="/product-images/kcs/scene.jpg"
                  title=""
              />
            </div>,

          ]}
        />

      </div>
    </FeaturedProductStyled>
  )
}
