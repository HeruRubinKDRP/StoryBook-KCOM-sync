import { Meta, StoryFn } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

export default {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        leftValue: { control: 'text' },
        rightValue: { control: 'text' },
        value: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    leftValue: 'Off',
    rightValue: 'On',
    value: false,
    onChange: () => {
        console.log(`Switch value changed to: ${ Default.args?.value || false}`);
    },
};
