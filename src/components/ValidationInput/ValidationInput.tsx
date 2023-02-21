import React, {ChangeEvent, useState} from "react";
import Graphic from "../Graphic/Graphic";


export interface iValidations{
  validationType : "email";
  inputValue : string;
  handlerFunction : Function
}

export const ValidationInput = (props : iValidations)=>{
const [currentInput, setCurrentInput]=useState("");

  const isValidEmail =(value : string)=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  const validateEmail =(value : string)=>{
    if(value.length < 3){ return }
    //basic check for email

    if(!isValidEmail(value)){
      return <div className="notification error">
                <Graphic graphicName="error-notification" iconSize="1rem" />
                <p >Enter a valid email address</p>
            </div>
    }
  }

  const getValidation=(inputValue : string)=>{
    switch(props.validationType){
      case "email":
        return validateEmail(inputValue);
    }
  }

  const handleInput=(event : ChangeEvent<HTMLInputElement>)=>{
    props.handlerFunction(event, isValidEmail(event.target.value));
    setCurrentInput(event.target.value);
  }

  return(
    <div className="validation-input">
      <input
        className="text-input"
        value={currentInput}
        onChange={(e)=>handleInput(e)}
      />
      {getValidation(currentInput)}

    </div>
  )

}
