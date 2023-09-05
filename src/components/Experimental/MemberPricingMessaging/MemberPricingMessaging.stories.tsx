import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { iMemberPriceMessagingProps, MemberPriceMessaging } from './MemberPricingMessaging';

export default {
    title: 'Experimental /Member Pricing Messaging',
    component: MemberPriceMessaging,
    argTypes:{
        isLoggedIn: {control: "boolean"},
        product: {control: "object"},
        formFactor: {control: "radio", options: ["mobile", "desktop"]},
        calculateCardWidth: {control: "boolean"},
    }
} as Meta;

const Template: StoryFn<iMemberPriceMessagingProps> = (args) => <MemberPriceMessaging {...args} />;

export const MemberPriceMessagingExample = Template.bind({ });

MemberPriceMessagingExample.args = {

}