import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PerksPromo, { PerksPromoProps } from './PerksPricingPromoOverlay';

export default {
    title: 'PerksPromo',
    component: PerksPromo,
} as Meta;

const Template: StoryFn<PerksPromoProps> = (args) => <PerksPromo {...args} />;

export const Default = Template.bind({});
Default.args = {
    /* here you can define args to pass to the PerksPromo component if any */
};
