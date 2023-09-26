import React, {ReactElement, useState} from "react";
import {podVariant} from "../../../pages/myBrews";
import {Incrementor} from "../../Incrementor/incrementor";
import KButton from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";
import {Rating} from "../../Rating/Rating";
import {utilityCalcBoxes} from "./utitity-calc-boxes";
import Image from "next/image";


export interface iPodSettings {
  podID: number;
  podImageUrl: string;
  podName: string;
  podSizes: podVariant[];
  finalConfirmFunc: Function;
  quantity: number;
  brand: string;
  manageVeil : Function;
  classes? : string;
}

export const PodSettings = (props: iPodSettings) => {

  const [currentSize, setCurrentSize] = useState(0);
  const [quantity, setQuantity] = useState(props.quantity);

  const getSelectedClass = (index: number) => {

    if (index == currentSize) {
      return "active"
    }

    return "";
  }

  const getSizes = (currentSizePassed: number) => {
    let sizes: ReactElement[] = [];
    for (let i = 0; i < props.podSizes.length; i++) {



      if (props.podSizes[i].boxCount < 22  ) {
        if (currentSizePassed == 0) {
          setCurrentSize(currentSizePassed + 1)
        }
        continue;
      }

      sizes.push(
        <li className={`${getSelectedClass(i)}`}>
          <KButton
            label={`${props.podSizes[i].boxCount} Count`}
            buttonType="secondary"
            classes={`${getSelectedClass(i)}`}
            transitionType="expand-bg"
            actionFunc={() => setCurrentSize(i)}
          />
        </li>
      )
    }
    return (
      <>
        <ul className="size-list">
          {sizes}
        </ul>
      </>
    );
  }

  const transmitPodSettings = () => {
    props.finalConfirmFunc(props.podID, quantity, props.podSizes[currentSize].boxCount);
    props.manageVeil(false)
  }

  const incrementFunc = (quantity: number) => {
    setQuantity(quantity);
    console.log("quantity: ", quantity)
  }

  return (
    <>
      <div className="section"></div>
      <div className="product-image-name">
        <Image
            unoptimized={true}
            width={500}
            height={500}
            alt=""
            className="pod-lid"
            src={props.podImageUrl}
        />
        <div className="prod-info-area">
          <div>
            <p className="brand-title">{props.brand}</p>
            <h2>{props.podName}</h2>
          </div>
          <Rating
              totalNumberOfStars={5}
              totalNumberOfReviews={1023}
              ratingNumber={4.2}
          />
        </div>
      </div>


      <div className="product-configuration-area intro">

        <div className="switches">
          <Price
            basePrice={Math.round((props.podSizes[currentSize].basePrice * quantity) * 100) / 100}
            showStrikeThrough={true}
            currency="$"
          />
          <div className="line-break"></div>
          <div className="box-sizes">
            <label className="settings-label">Box Size:</label>
            {getSizes(currentSize)}
          </div>
          <div className="line-break"></div>
          <Incrementor
            initialValue={quantity}
            maxValue={99}
            minNumber={1}
            incrementFunc={incrementFunc}
            label="Qty"
          />
          <div className="line-break"></div>


          <p className="results">
            This would add
            <span className="highlighted-text">
              {
                ` ${
                  utilityCalcBoxes(
                    [
                      {
                        podId : props.podID,
                        boxCount : props.podSizes[currentSize].boxCount,
                        quantity: quantity
                      }
                    ],
                    24
                  ).slotsUsed
                } `
              }
            </span>
            towards your <span className="highlighted-text">4</span> box commitment.
          </p>

        </div>


        <KButton
          label={`Confirm & Add to Your Kit`}
          buttonType="primary"
          iconPlacement="after-label"
          iconStandard="none"
          classes="ksk-add"
          transitionType="expand-bg"
          actionFunc={() => transmitPodSettings()}
        />
      </div>
    </>
  )

}
