import React from 'react';
import { Meta, Story } from '@storybook/react';
import SaleToggle from './sale-toggle';

export default {
    title: 'WIP /SaleToggle',
    component: SaleToggle,
} as Meta;

const Template: Story = (args) => <SaleToggle {...args} />;

export const Default = Template.bind({});
