import React, {ReactElement, useEffect} from "react";
import {Graphic, iconType} from "../Graphic/Graphic";
import {KTableStyled} from "./k-table.styled";

export type kTableCellType = {
  cellType : "header" | "full-row-header" | "details";
  cellLabel : string;
  cellHeader? : string;
  cellParagraph? : string;
  cellIcon? : iconType;
  cellIconSize? : string;
  cellImagePath? : string;
  cellImageSizeOverride? : string;
  cellImageClasses? : string;
  cellIconClasses? : string;
  cellClasses? : string;
}

export type rowT={
  rowType : "standard" | "stacked";
  rowBackgroundColor? : string;
  fontColorOverride? : string;
  rowCells : kTableCellType[];
}

export interface iKTable{
  rows : rowT[];
  columnWidths? : string[];
  ensureProperGrid? : boolean;
}

export const KTable=(props : iKTable)=>{

  useEffect(()=>{
    let longestCells = 0
    for(let i = 0; i < props.rows.length; i++){
      if (props.rows[i].rowCells.length > longestCells){
        longestCells = props.rows[i].rowCells.length;
      }
    }

    // if dev has entered in a row with less cells than the rest, we will add in some blank cells
    for(let i=0; i < props.rows.length; i++){
      if( props.ensureProperGrid &&  props.rows[i].rowCells.length < longestCells ){
        let blankCellsToAdd :number =  longestCells - props.rows[i].rowCells.length;
        for(let j=0; j < blankCellsToAdd; j++){
          props.rows[i].rowCells.push({
            cellLabel:"",
            cellType : "details"
          })
        }
      }
    }
  },[props.rows, props.ensureProperGrid]);

  const getRows=()=>{
    let rows : ReactElement[] = [];
    for(let i=0; i < props.rows.length; i++){
      let cells : ReactElement[] = [];

      for(let j=0; j < props.rows[i].rowCells.length; j++){
        //if dev has entered in some column widths we will add here, or just divide them up evenly
        const getColumnWidth =()=>{
          if(props.rows[i].rowCells[j].cellType == "full-row-header"){
            return "100%"
          }
          if(!props.columnWidths){
            return `calc(100% / ${props.rows[i].rowCells.length})`
          }
          return props.columnWidths[j];
        }
        const getHeader=()=>{
          if(props.rows[i].rowCells[j].cellHeader){
            return <h2 className="cell-header">{props.rows[i].rowCells[j].cellHeader}</h2>
          }
        }
        const getIcon=()=>{
          if(!props.rows[i].rowCells[j].cellIcon){return}
          return <Graphic
            iconSize={props.rows[i].rowCells[j].cellIconSize}
            graphicName={props.rows[i].rowCells[j].cellIcon}
            classesOverride={props.rows[i].rowCells[j].cellIconClasses}   />
        }
        const getParagraph=()=>{
          if(!props.rows[i].rowCells[j].cellParagraph){return <></>}
          return <p>{props.rows[i].rowCells[j].cellParagraph}</p>
        }

        cells.push(
          <div
            className={`cell ${props.rows[i].rowCells[j].cellType}`}
             key={"cell" + j}
             style={{width: getColumnWidth()}}
          >
            {getIcon()}
            <div className="text-area">
              {getHeader()}
              <div style={{backgroundColor : props.rows[i].fontColorOverride}} className="before"/>
              <label style={{color : props.rows[i].fontColorOverride}}>{props.rows[i].rowCells[j].cellLabel}</label>
              <div style={{backgroundColor : props.rows[i].fontColorOverride}} className="after"/>
              {getParagraph()}
            </div>

          </div>
        );
      }
      //CREATE ROW ITEM, push into list

      const rowWidth = ()=>{
        if(props.ensureProperGrid){
          return "fit-content"
        }
        return "100%"
      }
      rows.push(
        <div
        key={i+"row"}
        className={`row ${props.rows[i].rowType}`}
        style={{
          backgroundColor : props.rows[i].rowBackgroundColor,
          color : props.rows[i].fontColorOverride,
          width : rowWidth()
        }}
        >
          {cells}
        </div>);
    }

    return rows;
  }

  return (<KTableStyled className="k-table-container">{getRows()}</KTableStyled>)

}

