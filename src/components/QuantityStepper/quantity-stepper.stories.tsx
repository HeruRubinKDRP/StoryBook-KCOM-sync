import React from 'react';
import QuantityStepper, {StepperProps} from "./QuantityStepper";
import {Story} from "@storybook/react/types-6-0";


export default {
    title: 'Example/QuantityStepper',
    component: QuantityStepper,
};

const Template: Story<StepperProps> = (args) => <QuantityStepper {...args} />;

export const Default = Template.bind({});
Default.args = {
    lowThreshold: 1,
    highThreshold: 20,
    onValueChange: () => { },
    soundFile: "/sounds/pop_1.wav"
};
