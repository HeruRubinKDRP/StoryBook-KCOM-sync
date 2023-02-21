import React from "react";
import {SubscriberSavingsStyled} from "./SubscriberSavingsStyled";

const SubscriberSavings =()=>{
  return(
    <SubscriberSavingsStyled className="subscriber-savings-main">
      <h2>Total Subscriber Savings</h2>
      <label>Member since Jan 16, 2021</label>
      <div className="main-savings-amount">
        $852.24
      </div>
      <p className="details">
        Total savings by being a Keurig® Auto-Delivery™ subscriber.
      </p>
    </SubscriberSavingsStyled>
  )
}
