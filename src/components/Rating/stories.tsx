import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react"
import {iRating, Rating} from "./Rating";

export default {
  title : "Atoms/Rating Stars",
  component : Rating,
  argTypes :{
    totalNumberOfStars : {control:"number"},
    ratingNumber : {control:"number"},
    height : {control : "number"},
    
  }
} as Meta;

const Template:Story<iRating>=(args)=>(
    <div style={{padding:"8% 20%", width: "100%"}}>
      <Rating {...args} />
      <div id="Ratings" style={{height:"5rem", backgroundColor:"grey", marginTop: "200vh"}}>Ratings Component</div>
    </div>
  );

export const StarsExample = Template.bind({});

StarsExample.args={
  totalNumberOfStars : 5,
  ratingNumber : 4.2,
  totalNumberOfReviews : 1431,
  scrollToTargetID : "Ratings",
}
