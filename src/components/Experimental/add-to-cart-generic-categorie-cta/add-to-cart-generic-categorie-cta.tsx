import React, {useState} from 'react';
import {Graphic, Igraphics} from "../../Graphic/Graphic";
import { GenericCategorieCtaStyled } from './GenericCategorieCtaStyled';

export interface iGenericCategorieCta {
    beveragesIcon?: Igraphics;
    brewersIcon?: Igraphics;
    accessoriesIcon?: Igraphics
}

export const GenericCategorieCta = (props: iGenericCategorieCta) =>{
    return(
        <GenericCategorieCtaStyled>
            <div><Graphic graphicName="icon-bagged-and-pod"/>Brewers</div>
            <div><Graphic graphicName="icon-bagged-and-pod"/>Beverages</div>
            <div><Graphic graphicName="icon-bagged-and-pod"/>Accessories</div>

        </GenericCategorieCtaStyled>
    )
}