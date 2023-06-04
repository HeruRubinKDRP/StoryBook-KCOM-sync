// PromoClaim.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import PromoClaim, { PromoClaimProps } from './PromoClaim';

export default {
    title: 'Components/PromoClaim',
    component: PromoClaim,
} as Meta;

const Template: Story<PromoClaimProps> = (args) => <PromoClaim {...args} />;

export const Default = Template.bind({});
Default.args = {
    promotion: {
        promoMode: "big-image",
        name: 'Sample Promotion',
        link: 'https://example.com/sample-promo-image.png',
        weight: 1,
        componentType : "image"
    },
    onClaim: (promo) => {
        console.log('Claimed:', promo.name);
    },
};
