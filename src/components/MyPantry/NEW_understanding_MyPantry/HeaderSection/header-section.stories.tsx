import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HeaderSection, iHeaderSection } from './HeaderSection';

export default {
    title: 'WIP-MYPANTRY /HeaderSection',
    component: HeaderSection,
} as Meta;

const Template: Story<iHeaderSection> = (args) => <HeaderSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    subscriptiontype: 'Smart Delivery',
};
