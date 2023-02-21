import React, {ReactElement, useEffect, useState} from "react";
import styled, { keyframes } from "styled-components"
import Graphic from "../Graphic/Graphic";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";


export interface IlifeBar{
    barCurrentAmount? : number;
    barFullAmount? : number;
    barColor? : string;
    barBackgroundColor? : string;
    barHeight : string;
    barWidth : string;
    borderColor : string;
    stylePreset : "KCOM" | "none";
    showTicks? : boolean;
    potentialAmount? : number;
    useIndicator? : boolean;
}

export const LifeBar = (props : IlifeBar)=>{

    const barWidth = ()=>{
        if(props.barCurrentAmount != undefined && props.barFullAmount != undefined ){
          return (props.barCurrentAmount / props.barFullAmount) * 100;
        }else{
          return 0;
        }
    }

    const potentialBarWidth = ()=>{
      if(!props.potentialAmount){return 0}
      if(!props.barFullAmount){return 0}
      return props.potentialAmount / props.barFullAmount * 100;
    }

    const getIndicator=()=>{
      if(!props.useIndicator){return}
      return ( <Graphic graphicName="pointer-up" /> )
    }

    let LifeBar = styled.div`
      border: 1px solid ${props.borderColor};
      height: ${props.barHeight};
      width: ${props.barWidth};
      border-radius: 100vw;
      overflow: visible;
      background-color: ${props.barBackgroundColor};
      .life-bar{
        width : ${barWidth()}%;
        height: 100%;
        .bar-fill{
          background-color: ${props.barColor};
          width: 100%;
          height: 100%;
          position: relative;
          .pointer-up{
            position: absolute;
            right: 0;
            bottom: 0;
            height: 1rem;
            width: 1rem;
            filled : ${colorNameToValue("dark-roast")}
          }
        }
      }

      .potential-amount-bar{
        width: ${potentialBarWidth()}%;
        right: -${potentialBarWidth()}%;
        height: 100%;
        position: absolute;
        top: 0;
      }
      .potential-marker{
        background-color: white;
        width: 2%;
        height: 100%;
        position: absolute;
        top: 0;
        right: -${potentialBarWidth() + 2}%;
      }
      .ticks-container{
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: 1.5vw;
        .tick{
          position: absolute;
          height: 100%;
          background-color: #D8D9D9;
          &.small{
            width: 0.25vw;
          }
          &.large{
            width: 0.75vw;
          }
        }
      }
    `;

    const getTicks =()=>{
      if(!props.showTicks){return}
      const getStyle = (index : number)=>{
        if(index % 10 == 0){
          return "tick large"
        }

        return "tick small"
      }
      let ticks : ReactElement[] = [];
      for (let i=0; i < 40; i++){
          ticks.push(
            <div
              style={{left: `${i * (100/40)}%`}}
              className={getStyle(i)}
            />
          )
      }

      return(
        <div className="ticks-container">
          {ticks}
        </div>
      )
    }

  const getPotentialBar =()=>{
      if(!props.potentialAmount){return}
      if(props.potentialAmount > 0){
        return(
          <>
            <div className="potential-amount-bar" />
            <div className="potential-marker"/>
          </>
        )
      }
  }

    return(
        <LifeBar className={`life-bar-container ${props.stylePreset}`}>
          <div className="life-bar">
            <div className="bar-fill">
              {getIndicator()}
              <div className="glow-effect"/>
              {getPotentialBar()}
            </div>
          </div>
          {getTicks()}
        </LifeBar>
    )
}
