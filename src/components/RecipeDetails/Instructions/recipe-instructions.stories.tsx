import {StoryFn, Meta} from "@storybook/react";
import React from "react"
import {iInstructions, Instructions} from "./Instructions";

export default {
  title : "Molecules/Instructions",
  argTypes : {

  }
}as Meta;

const Template: StoryFn<iInstructions>=(args)=><Instructions {...args} />;

export const InstructionSetExample = Template.bind({});

InstructionSetExample.args={
instructionSet : [
  {
    title : "01",
    details : "Fill a 16 oz. tumbler two-thirds full of ice and transfer into a blender.",
    imagePath : "/recipes/CaramelFrozenBlendedCoffee/step1.webp"
  },
  {
    title : "02",
    details : "Add caramel syrup into the tumbler, brew a pod on the single shot setting in the same tumbler, and mix well. ",
    imagePath : "/recipes/CaramelFrozenBlendedCoffee/step2.webp"
  },
  {
    title : "03",
    details : "Add milk into the tumbler and stir. ",
    imagePath : "/recipes/CaramelFrozenBlendedCoffee/step3.webp"
  },
  {
    title : "04",
    details : "Pour the coffee mix into the blender and blend until well mixed.",
    imagePath : "/recipes/CaramelFrozenBlendedCoffee/step4.webp"
  },
  {
    title : "05",
    details : "Pour the blended drink into the tumbler and enjoy! ",
    imagePath : "/recipes/CaramelFrozenBlendedCoffee/step5.webp"
  }
]
}

