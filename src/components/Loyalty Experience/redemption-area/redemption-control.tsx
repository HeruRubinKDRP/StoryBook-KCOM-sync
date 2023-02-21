import {useResizeDetector} from "react-resize-detector";
import {RedemptionAreaStyled} from "./RedemptionStyled";
import {iRedemptionCard} from "../../Cards/SimpleProductRedemptionCard/RedemptionCard";

export interface iRedemption{
  beverageLibrary : iRedemptionCard[]
}

export const RedemptionArea=(props : iRedemption)=>{
  function onResize() {

  }

  const {width, height, ref} = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshOptions: {},
    refreshRate: 100,
    skipOnMount: false,
    onResize
  });

  const getSimpleCards =()=>{

  }

  return (
    <RedemptionAreaStyled theme={{widthX : width}} className="redemption-container">
      <h1>Redemption</h1>
    </RedemptionAreaStyled>
  )
}
