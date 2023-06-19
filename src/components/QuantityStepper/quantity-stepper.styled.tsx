import styled from "styled-components";
import {flexCentered} from "../_commonStyles/common.styled";


interface IquantityStepper{

}
export const QuantityStepperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .shake-animation {
    animation: shake 0.5s;
  }
  .value{
    ${flexCentered}; 
    padding: 0 2%;
    font-size: 1.5rem;
  }
  
  .stepper{
    padding: 0;
    width: 30px !important;
    height: 30px !important;
    ${flexCentered};
    
    .icon{
      width: 100% !important;
      height: 100% !important;
      padding: 20%;
      margin: 0;
    }
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(1px, 1px) rotate(0deg); }
    30% { transform: translate(-1px, -2px) rotate(-1deg); }
    40% { transform: translate(1px, 1px) rotate(0deg); }
    50% { transform: translate(-1px, -2px) rotate(-1deg); }
    60% { transform: translate(1px, 1px) rotate(0deg); }
    70% { transform: translate(-1px, -2px) rotate(-1deg); }
    80% { transform: translate(1px, 1px) rotate(0deg); }
    90% { transform: translate(-1px, 2px) rotate(1deg); }
    100% { transform: translate(1px, -2px) rotate(0deg); }
}


`;