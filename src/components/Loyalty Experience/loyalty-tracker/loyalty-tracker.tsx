// @ts-ignore
import AnimatedNumber from "animated-number-react";
import {useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {iRedemptionCard} from "../../Cards/SimpleProductRedemptionCard/RedemptionCard";
import Graphic from "../../Graphic/Graphic";
import KButton from "../../Kbutton/KButton";
import {LifeBar} from "../../LifeBar/LifeBar";
import {getPlural} from "../../_utilities/getPlural";
import {RedemptionArea} from "../redemption-area/redemption-control";
import {LoyaltyTrackerStyled} from "./loyalty-tracker-styles";

export let LOYALTY_TRACKER_WIDTH: number  = 0;

export interface iLoyaltyTracker {
  points: number;
  maxPoints: number;
  potentialPoints? : number;
  tickets: { ticketCount: number, expirationDate: string }[];
  showTicks?: boolean;
  beverageLibrary? : iRedemptionCard[]
}

export const LoyaltyTracker = (props: iLoyaltyTracker) => {
  const [redemptionOpen, setRedemptionOpen] = useState(false);

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

    const getRedemptionArea=()=>{
      if(!redemptionOpen){return}
      if(!props.beverageLibrary){return}
      return (
        <RedemptionArea
          beverageLibrary={props.beverageLibrary}
        />
      )
    }

  const getContainerQueries = (widthX: number | undefined) => {
    if (!widthX) {
      return "fff"
    }

    if (widthX <= 1200 && widthX > 600) {
      return "medium-loyalty"
    }

    if (widthX < 600 && widthX > 300) {
      return "small-loyalty"
    }

    if(widthX < 300){
      return "tiny-loyalty"
    }
  }


  return (
    <LoyaltyTrackerStyled theme={{widthX : width}} ref={ref} className={`${getContainerQueries(width)}`}>

      <div className="loyalty-data-container">

        <div className="progress-bar-area">
          <h3 className="title">[Zeus] Rewards Points Progress</h3>
         <div className="data-area-container">
           <div className="data-area">
             <div className="points-counter-area">
               <h2 className="main-points">
                 <AnimatedNumber
                   value={props.points}
                   duration={1500}
                   formatValue={(n: number) => n.toFixed(0)}
                 />

               </h2>
               <div className="points-label">
                 <label className="points">
                   Points
                 </label>
                 <label className="max-points">
                  /{props.maxPoints}
                 </label>
               </div>
             </div>
             <div className="next-reward">
               <div className="divider horizontal"/>
               <div className="next-reward-label">
                 Next reward: <span className="highlight-points">{props.maxPoints - props.points} Points</span>
               </div>
             </div>
           </div>
         </div>
          <div className="tracker-area">
            <div className="tracker-bar">
              <LifeBar
                barHeight="4vw"
                barWidth="100%"
                borderColor="transparent"
                stylePreset="KCOM"
                barCurrentAmount={props.points}
                barFullAmount={props.maxPoints}
                showTicks={props.showTicks}
                useIndicator={true}
                potentialAmount={props.potentialPoints}
              />
              <div className="rewards-bubble">
                <div className="inner-bubble">
                  <div className="fader" />
                  <Graphic graphicName="icon-present"/>
                </div>
              </div>
            </div>
            <div className="tracker-numbers-axis">
              <label>0</label>
              <label className="max-end">{props.maxPoints}</label>
            </div>
          </div>
        </div>
        <div className="rewards-area">
          <div className="rewards-graphics">
            <KButton
              label="Redeem"
              buttonType="primary"
              buttonWidth="fit-width"
              transitionType="expand-bg"
              actionFunc ={() => setRedemptionOpen(!redemptionOpen)}
            />
          </div>
          <div className="rewards-count-area">
            <label className="rewards-count">{props.tickets.length}</label>
           <div className="rewards-count-label-area">
             <label className="rewards-label">Reward{getPlural(props.tickets.length)}</label>
             <label className="expiring">Expiring on June 15, 2023</label>
           </div>
          </div>
        </div>
      </div>
      {getRedemptionArea()}
    </LoyaltyTrackerStyled>
  )
}
