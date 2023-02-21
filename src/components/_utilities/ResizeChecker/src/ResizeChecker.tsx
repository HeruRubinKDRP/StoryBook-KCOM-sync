import React from "react";
import {useResizeDetector} from 'react-resize-detector';
import styled from "styled-components";


export interface IresizeChecker{
    widthChecked : number;
    heightChecked : number;
}

export const ResizeChecker = (props : IresizeChecker)=>{

  function onResize() {

  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100,
    skipOnMount : false,
    onResize
  });

    let ResizeCheckerContainer = styled.div`
      width : ${props.widthChecked}px;
      height : ${props.heightChecked}px;
      background-color: #473036;
      color: #cecece;
      padding: 1rem;
      box-sizing: content-box;
    `;

    return <ResizeCheckerContainer ref={ref}>{`${width}x${height}`}</ResizeCheckerContainer>;
}
