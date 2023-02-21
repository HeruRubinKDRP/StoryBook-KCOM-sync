import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";

//import {ResizeChecker, IresizeChecker} from "packages/_utilities/ResizeChecker/src/ResizeChecker";
import {ResizeChecker, IresizeChecker} from "../src/ResizeChecker";

export default {
    title : "Utilities/Resize Checker",
    component : ResizeChecker,
    argTypes : {
      widthChecked : {
            control: {
                type: 'range', min: 100, max: 1200, step: 1
            }
        },
      heightChecked : {
            control : {
                type : 'range', min : 100, max : 1200, step : 1
            }
        }
    }
} as Meta;

const Template : Story<IresizeChecker> = (args) => <ResizeChecker {...args} />;

export const ResizeCheckerDemo = Template.bind({});

ResizeCheckerDemo.args = {
  widthChecked : 100,
  heightChecked : 100
}