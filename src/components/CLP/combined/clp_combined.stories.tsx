import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CLP_Combined, iCLP_Combined } from './clp_combined';
import {podLibrary} from "../../../data/beverage-library";

export default {
    title: 'CLP/Price-Per-Pod and Box Counts',
    component: CLP_Combined,
    argTypes: {
        podLibrary: { control: 'array' },
        cardsAlwaysShowCTA: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<iCLP_Combined> = (args) => <CLP_Combined {...args} />;

export const Default = Template.bind({});
Default.args = {
    podLibrary: podLibrary,
    cardsAlwaysShowCTA: false,
};
