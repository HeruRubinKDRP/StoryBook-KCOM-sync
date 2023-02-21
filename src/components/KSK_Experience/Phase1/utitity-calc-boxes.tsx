import {boxSelectionData} from "./KSK_Phase_One";


export const utilityCalcBoxes =(pods : boxSelectionData[], podsPerSlot : number):{overallPodCount: number, slotsUsed : number}=>{
  let overallPods = 0;
  let slotsUsed = 0;

  for(let i=0; i < pods.length; i++){
    overallPods += pods[i].boxCount * pods[i].quantity;
  }

  slotsUsed = Math.round(overallPods / podsPerSlot);




  return {
    overallPodCount : overallPods,
    slotsUsed : slotsUsed
  }
}
