import {Interweave} from "interweave";
import React, {
  ChangeEvent,
  createRef,
  LegacyRef,
  MutableRefObject,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import {Graphic, iconType} from "../../Graphic/Graphic";
import {KButton} from "../../Kbutton/KButton";
import {buttonType} from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";
import {featureItemT, FeaturesList, iFeaturesList} from "../../ProductDetails/FeaturesList/features-list";
import {ValidationInput} from "../../ValidationInput/ValidationInput";
import {ProductCardStyled} from "./ProductCardStyled";

export type variant ={
  variantName : string;
  inStock : boolean;
}

export interface iProductCard {
  primarySlogan?: string;
  secondarySlogan?: string;
  productImagePath: string;
  productName: string;
  showProductColors: boolean;
  productColorValues: string[];
  colorVariants: variant[];
  hasCTA: boolean;
  primaryCtaLabel : string;
  ctaColorOverride? : string;
  primaryCtaButtonType?: buttonType;
  primaryCtaIcon? : iconType;
  hasSecondaryCTA? : boolean;

  pricingMessage? : string;

  finePrint? : string;

  secondaryAction? : Function;
  secondaryLabel? : string;
  hasLearMoreLink? : boolean;
  learnMoreLabel? : string;
  learnMoreLinkTo? : string;
  addToCartFunction? : Function;
  notifyMeFunction? : Function;
  featuresList? : string;

  showPrice : boolean;
  priceOriginal? : number;
  priceFinal?: number;
  showStrikeThrough? : boolean;

}

export const ProductCard = (props: iProductCard) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [emailValid, setEmailValid]=useState<boolean | null>(false);
  const [completelyOutOfStock, setCompletelyOutOfStock] = useState<boolean>(false);
  const [notifyOpenStatus, setNotifyOpenStatus] = useState<boolean>(false);


  useEffect(()=>{
      for(let i=0; i < props.colorVariants.length; i++){
        if(!props.colorVariants[i].inStock && i == selectedVariant){
          for(let j=0; j < props.colorVariants.length; j++){
            if(props.colorVariants[j].inStock){
              setSelectedVariant(j)
            }
          }
        }
      }
      setSelectedVariant(-1);
  },[props.colorVariants, selectedVariant]);

  function actionPrimary(){

    if(isItOutOfStock() && props.notifyMeFunction){
      setNotifyOpenStatus(true)
      props.notifyMeFunction();
    }

    if(!isItOutOfStock() && props.addToCartFunction){
      console.log("add to cart");
      props.addToCartFunction();
    }

    if(isItOutOfStock()){
      console.log("out of stock");
      notifyMeOpen();
    }
  }

  function actionSecondary(){
    if(props.secondaryAction){
      props.secondaryAction()
    }
  }

  function notifyMeOpen(){
    console.log("notify me")
    setNotifyOpenStatus(true)
  }

  function notifyMeAction(){
    console.log("submit email")
    if(props.notifyMeFunction){
      props.notifyMeFunction();
    }
    setNotifyOpenStatus(false)
  }

  const isItOutOfStock=()=>{
    if(props.colorVariants.length==0){
      return false;
    }

    let outOfStockCount=0;
    for(let i=0; i < props.colorVariants.length; i++){
      if(!props.colorVariants[i].inStock){
        outOfStockCount++
      }
    }

    if(props.colorVariants.length == outOfStockCount){
      return true;
    }
  }

  const getCTA = (notificationStatus:boolean) => {
    if (!props.hasCTA) {
      return <></>
    }

    const getCTAlabel=()=>{
      if(isItOutOfStock()){
        return "Notify me";
      }
      if(!props.hasCTA || !props.primaryCtaLabel){
        return "Add to cart"
      }else{
        return props.primaryCtaLabel;
      }
    }

    const determinePrimaryStatus =():buttonType=>{
      if(isItOutOfStock()){
        return "secondary";
      }else{
        return "primary"
      }
    }
    const secondaryLabelChecked=()=>{if(props.secondaryLabel){ return props.secondaryLabel } return "";
    }

    const getSecondaryCTA=()=>{
      if(props.hasSecondaryCTA){

        return (
          <KButton
            transitionType="expand-bg"
            buttonType={"secondary"}
            buttonWidth="fit-to-content"
            classes="light"
            backgroundColorOverride={props.ctaColorOverride}
            iconPlacement="after-label"
            iconStandard="icon-add"
            actionFunc={actionSecondary}
            label={secondaryLabelChecked() }
          />
        )
      }
    }

    const getPrimaryCTA=()=>{
      if(notificationStatus){
        return (
          getNotifyMeFlyout(notificationStatus)
        )
      }

      if(emailValid){
        return <div className="notification success">
          <Graphic graphicName="checkmark-circled" iconSize="1.5rem" colorOverride="" />
          <p>{"You'll receive an email from Keurig when the item becomes available"}</p>
        </div>
      }

      return <KButton
        transitionType="expand-bg"
        buttonType={determinePrimaryStatus()}
        buttonWidth="fit-to-content"
        classes="light"
        backgroundColorOverride={props.ctaColorOverride}
        iconPlacement="after-label"
        iconStandard={props.primaryCtaIcon}
        actionFunc={actionPrimary}
        label={getCTAlabel()}
      />
    }

    return (
      <div className="cta-container">
        {getPrimaryCTA()}
        {getSecondaryCTA()}
      </div>
    )
  }

  const getLearnMoreLink=()=>{
    if(!props.hasLearMoreLink){return<></>}
    const labelChecked=()=>{
      if(!props.hasLearMoreLink || !props.learnMoreLabel){return "Learn more"}
      else{return props.learnMoreLabel}
    }
    return(
      <>
        <KButton
          transitionType="none"
          buttonType="link-internal"
          buttonWidth="fit-to-content"
          classes="light learn-more"
          iconPlacement="no-icon"
          iconStandard="none"
          label={labelChecked()}
        />
      </>
    )
  }

  const manageSetVariant=(selectedIndex : number)=>{
    //only allow setState for in stock items;
    if(props.colorVariants[selectedIndex].inStock){
      setSelectedVariant(selectedIndex);
    }
  }

  const getColorOptions =()=>{
    if(!props.showProductColors){return}

    let variants : ReactElement[] = [];

    for(let i=0; i < props.colorVariants.length; i++){

      const colorValueChecked =(index:number):string=>{
        if(props.productColorValues[index]){
          return props.productColorValues[index]
        }
        return ""
      };

      const specialColorConsiderations=(colorValue : string)=>{
        if(colorValue.toLowerCase() == "white" || colorValue.toLowerCase() == "white"){
          return "white";
        }
        return  ""
      }

      const inStockStatus =()=>{
        if(!props.colorVariants[i].inStock){
          return <div className="out-of-stock"></div>
        }
        return <></>;
      }

      const getSelection=(index : number)=>{
        if(props.colorVariants.length == 1){
          return "selected";
        }

        if(i == selectedVariant && props.colorVariants[i].inStock){
          return "selected";
        }
        return "";
      }

      const getOutOfStockDisabled=(index:number):string=>{
        if(!props.colorVariants[index].inStock){
          return "disabled";
        }else{return ""}
      }

      variants.push(
        <li
          key={i}
          onClick={()=>manageSetVariant(i)}
          className={`color-dot ${getSelection(i)} ${getOutOfStockDisabled(i)}  ${specialColorConsiderations(colorValueChecked(i))} `}
          style={{backgroundColor : colorValueChecked(i)}}
        >
          {inStockStatus()}
        <div className="selected-marker"/>
        </li>
      )
    }

    return(
      <ul>
        {variants}
      </ul>
    )
  }

  const getFeaturesList =()=>{
    if(!props.featuresList){return}
    return (
        <div className="features-list">
          <Interweave content={props.featuresList} />
        </div>

    )
  }



  const handleNotifyMe=(event : ChangeEvent<HTMLInputElement>, validationStatus : boolean)=>{
      console.log(event.target.value)
    if(validationStatus){
      setEmailValid(validationStatus)
    }
    setEmailValid(validationStatus)
  }

  const getSubmitButton=()=>{
    if(emailValid){
      return <KButton
        buttonType="primary"
        iconPlacement="no-icon"
        transitionType="expand-bg"
        iconStandard="none"
        label="Submit"
        classes="dark"
        actionFunc={notifyMeAction}
      />
    }
  }

  const getNotifyMeFlyout=(notifyStatus : boolean)=>{
    if(notifyStatus){
      return (
        <div className="notify-me fly-out">
          <div className="fly-out-content">
            <label>Email:</label>
            <ValidationInput
              validationType={"email"}
              inputValue={""}
              handlerFunction={handleNotifyMe}
            />
            {getSubmitButton()}
            <KButton
              buttonType="secondary"
              buttonWidth="fit-width"
              iconPlacement="no-icon"
              iconStandard="none"
              transitionType="expand-bg"
              label="Close"
              classes="light"
              actionFunc={()=>setNotifyOpenStatus(false)}
            />
          </div>
        </div>
      )
    }
  }

  const getPriceInfo =()=>{
    let priceData= {
      basePrice : 0,
      finalPrice : 0,
      showStrikeThrough : false
    }
    if(props.priceOriginal){priceData.basePrice = props.priceOriginal}
    if(props.priceFinal){priceData.finalPrice = props.priceFinal}
    if(props.showStrikeThrough){priceData.showStrikeThrough = props.showStrikeThrough}


    return priceData;
  }

  const getPriceDisplay =()=>{
    if(!props.showPrice){return}
    return(
      <Price
        basePrice={getPriceInfo().basePrice}
        currency={"$"}
        finalPrice={getPriceInfo().finalPrice}
        discountPercentAsNumber={20}
        showStrikeThrough={getPriceInfo().showStrikeThrough}
      />
    )
  }

  const getFinePrint=()=>{
    if(!props.finePrint){return}
    return(
        <div className="fine-print">
          <Interweave content={props.finePrint} />
        </div>
    )
  }

  return (
    <ProductCardStyled className="product-item-card">
      <h1 className="product-name">{props.productName}</h1>
      <img alt="" className="product-image" src={props.productImagePath}/>
      <div className="color-options">
        {getColorOptions()}
      </div>
      {getPriceDisplay()}
      <h3>
        <Interweave content={props.primarySlogan}/>
      </h3>
      {getFeaturesList()}
      <p>{props.pricingMessage}</p>
      {getCTA(notifyOpenStatus)}


      {getLearnMoreLink()}
      {getFinePrint()}
    </ProductCardStyled>
  )

}
