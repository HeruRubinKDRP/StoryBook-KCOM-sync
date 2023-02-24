import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #e6e6e6;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
`;

interface iValueLabel {
    selected: boolean;
}
export const ValueLabel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
  position: relative;
  z-index: 1;
  user-select: none;
  &.selected{
    color: white;
  }
   ;
    &.right{
      
    }
  
  &.left{
    
  } 
`


interface iIndicator{
    selected : boolean
}
export const Indicator = styled.div<iIndicator>`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: #0080ff;
  transition: transform 0.2s ease-out;
  position: absolute;
  z-index: 0;
  transform: ${(props: iIndicator) =>
    props.selected ? 'translateX(0)' : 'translateX(100%)'};
`;