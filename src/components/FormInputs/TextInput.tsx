import React, {ReactElement} from "react";
import {FormInputStyled} from "./form-input.styled";

export type validationTypes= "email" | "address" | "only-numbers"

export interface iTextInput{
 validations : validationTypes[]
}

export const KTextInput=()=>{
 return(
     <FormInputStyled>
        <input type="text" />
     </FormInputStyled>
 )
}
