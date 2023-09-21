import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
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

const Template: StoryFn<iAccordionProps> = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    useInternalOpenClosedState : true,
    initialOpenItems : [0],
    onlyOneOpenAtOnce : true,
    items: [
        {
            name: 'Item 1',
            id: 0,
            isOpen: true,
        },{
            name: 'Item 2',
            id: 1,
            isOpen: false,
        },{
            name: 'Item 3',
            id: 2,
            isOpen: false,
        }
        ],
    children: [
        <p key={1}>Child elements for all items</p>,
        <div key={2}>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
        </div>,
        <div key={3}>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
            <p>Child elements for all items</p>
        </div>
    ]
};
