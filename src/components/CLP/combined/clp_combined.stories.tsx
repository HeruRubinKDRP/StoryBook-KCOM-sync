import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CLP_Combined, iCLP_Combined } from './clp_combined';
import {podLibrary} from "../../../pages/myBrews";

export default {
    title: 'CLP/CLP Combined',
    component: CLP_Combined,
    argTypes: {
        podLibrary: { control: 'array' },
        cardsAlwaysShowCTA: { control: 'boolean' },
    },
} as Meta;

const Template: Story<iCLP_Combined> = (args) => <CLP_Combined {...args} />;

export const Default = Template.bind({});
Default.args = {
    podLibrary: podLibrary,
    cardsAlwaysShowCTA: false,
};
