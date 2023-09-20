// MasonTiles.tsx
import React from 'react';
import styled from 'styled-components';
import {GridStyled} from "./mason-tiles.styled";
import Image from "next/image";
import {CellBase, iCellItem} from "./Cells/CellBasic/CellBase";

// Define TypeScript types


export type MasonTilesProps = {
    cellItems: iCellItem[];
    layout: 'layout1' | 'layout2'; // Add more layouts as needed
};



// Component
const MasonTiles: React.FC<MasonTilesProps> = (props : MasonTilesProps) => {
    // Layout algorithm based on the chosen layout


    return (
        <GridStyled className={`${props.layout}`}>
            {props.cellItems.map((item : iCellItem, index: number) => (
             <CellBase
                 key={index}
                 index={index}
                 backgroundImage={item.backgroundImage}
                 title={item.title}
                 secondaryTitle={item.secondaryTitle}
                 fontColor={item.fontColor}
                 highlightImage={item.highlightImage}
                 CTA={item.CTA}
                 cellType={item.cellType}
                 backgroundColor={item.backgroundColor}
                 iconStandard={item.iconStandard}
             />
            ))}
        </GridStyled>
    );
};

export default MasonTiles;
