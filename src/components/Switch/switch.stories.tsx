import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react/types-6-0';
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

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    leftValue: 'Off',
    rightValue: 'On',
    value: false,
    onChange: () => {
        console.log(`Switch value changed to: ${ Default.args?.value || false}`);
    },
};
