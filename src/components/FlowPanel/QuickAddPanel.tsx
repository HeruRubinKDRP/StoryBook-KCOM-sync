import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {currencies, podItemT} from "../../pages/myBrews";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {Price} from "../Price/Price";
import {currentAppInfo} from "../my-brews/myBrewsManager";

export interface Iadditems {
  podsLibrary: podItemT[];
  addFunc: Function;
  changePanelFunc: Function;
  afterAddGoToThisPanel: string;
}

export const QuickAddItem = (props: Iadditems) => {
  const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const context = useContext(currentAppInfo)
  const [searchText, updateSearchText] = useState("");
  const createIteList = () => {
    let products: ReactElement[] = [];
    for (let i = 0; i < props.podsLibrary.length; i++) {
      if (
        (
          props.podsLibrary[i].podName.toLowerCase().includes(searchText.toLowerCase()) ||
          props.podsLibrary[i].brand.toLowerCase().includes(searchText.toLowerCase())
        )

        || searchText.length < 3) {
        console.log(searchText)
        products.push(
          <div key={`${i}prod`} className="product-item">
            <img src={props.podsLibrary[i].productImagePrimaryPath} className="product-image" alt={""}/>
            <div>
              <label className="prod-name">
                {props.podsLibrary[i].podName}
              </label>
              <Price basePrice={15.99}
                     currency={currencies.USD}
                     calculateDiscountForMe={true}
                     discountPercentAsNumber={25}
              />
              <div className="action">
                <KButton
                  label="Add"
                  buttonType="primary"
                  iconStandard="icon-add"
                  iconPlacement="right-edge"
                  actionFunc={() => props.addFunc(props.podsLibrary[i-1].podId, props.afterAddGoToThisPanel)}
                  buttonWidth="fit-width"
                  transitionType="rise"/>
              </div>
            </div>
          </div>
        )
      }
    }


    if(products.length < 1){
      return <h2 className="no-matches">Sorry, nothing found matching {searchText}</h2>
    }
    return products;
  }


  return (
    <>
      <div ref={searchRef} className="search-box">
        <input placeholder={"Search"} onChange={(event) => updateSearchText(event.target.value)}/>
      </div>
      <div className="quick-add-container">

        <div className="quick-add-main">
          <div className="nav-container right">
            <Graphic graphicName="chevron-right" />
          </div>
          {createIteList()}
        </div>
      </div>
    </>
  )
}
