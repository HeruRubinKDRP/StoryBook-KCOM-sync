import React, {ReactElement, useEffect, useRef, useState} from "react";
import ScrollSpy from "react-ui-scrollspy";
import styled, {keyframes} from "styled-components"
import Graphic, {iconPlacementTYPE, iconType} from "../Graphic/Graphic";
import {KColors} from "../styles js/colors";

export interface Iscroller {

}


export const ScrollerSpy = (props: Iscroller) => {
  const parentRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  let ScrollerContainer = styled.div`
    overflow: auto;
    display: inline-flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: aliceblue;
    padding: 1rem;

    .scroll-item{
      height: 100vh;
      border : 1px solid;
      background-color: #e6e6e6;
    }

    .active-scroll-spy {
      background-color: yellowgreen;
      border-radius: 15px;
    }
  `;

  return (
    <ScrollerContainer ref={parentRef}>
      <ScrollSpy activeClass={"active-zzz"} parentScrollContainerRef={parentRef} >
        <div id="first" className="scroll-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
        <div id="second" className="scroll-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
        <div id="third" className="scroll-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
        <div id="fourth" className="scroll-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
      </ScrollSpy>
    </ScrollerContainer>
  )
}
