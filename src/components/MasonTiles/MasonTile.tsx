import React, {ReactElement, useCallback, useEffect, useState, useRef} from "react";
import {iContentItem} from "../ContentComponents/ContentComponent";


export type masonTileType = {
  componentType : "content-tile" | "carousel";
  content : iContentItem;
  weight : 0 | 1 | 2 | 3 | 4;
}

export interface iMasonTileGroup{
  layoutType : "auto-fit" | "two-right" | "two-left" | "two-bottom";
  cellsWide? : number;
  cellsHigh? : number;
  tiles : masonTileType[];
}

export const MasonTileGroup = (props : iMasonTileGroup)=>{

  const createGridTwin = (gridWidth : number | undefined, gridHeight : number | undefined) : number[][] =>{
    let grid : number[][] =[];
   if(gridWidth && gridHeight){
     for(let i=0; i < gridHeight; i++){
       let row : number[] = [];
       for (let j=0; j < gridWidth; j++){
         row.push(0)
       }
       grid.push(row)
     }
     console.log(Error("when creating grid twin, no height and width were provided"))
   }

    console.log(grid);
    return grid;
  }

  const autoFitTiles = ()=>{
    let cursor = 0;
    let gridTwin : number[][] = createGridTwin( props.cellsWide, props.cellsHigh);
    let tiles : ReactElement[] = [];


    for(let i=0; i < props.tiles.length; i++){
      let colStart : number = 0;
      let colEnd : number = 0;
      let rowStart = 0;
      let rowEnd = 0;
      for(let row=0; row < props.tiles[i].weight; row++){

      }

      console.log(gridTwin)
      tiles.push(
        <div
          style={{
            gridColumnStart : colStart,
            gridColumnEnd: colEnd,
        }}
          className="grid-item">{i}</div>)
    }

    return tiles;

  }

  const getTiles = ()=>{

     let tilesContent : ReactElement[] = [];


    return (
      <div className={`${props.layoutType}`}>
        <div className="primary-cell"></div>
        <div className="second-cell"></div>
        <div className="third-cell"></div>
      </div>
    )

  }

  return(<div className="masonry-group">{getTiles()}</div>)
}
