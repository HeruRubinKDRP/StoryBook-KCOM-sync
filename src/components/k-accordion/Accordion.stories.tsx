import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion, { iAccordionProps } from './KAccordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        items: {
            control: {
                type: 'array',
                defaultValue: ['Item 1', 'Item 2', 'Item 3'],
            },
        },
        children: {
            control: null,
        },
    },
} as Meta;

const Template: Story<iAccordionProps> = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: ['Item 1', 'Item 2', 'Item 3'],
    children: [
        <p>Child elements for all items</p>,
        <div>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
        </div>,
        <div>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
        </div>
    ]
};
