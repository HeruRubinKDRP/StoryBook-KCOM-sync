import React, {ReactElement} from "react";
import { Meta, Story } from "@storybook/react";
import CardFlip from "./CardFlip";

export default {
    title: "Animated/CardFlip Flip",
    component: CardFlip,
} as Meta;


const demoFrontContent : ReactElement = <div>Front content</div>
const demoBackContent : ReactElement = <div>Back content</div>

const Template: Story = (args) => (
    <div style={{padding : "15%"}}>
        <CardFlip
            frontContent={demoFrontContent}
            backContent={demoBackContent}
            sideShowing="front"
        />
    </div>);

export const Default = Template.bind({});
Default.args = {
    frontContent : demoFrontContent,
    backContent : demoBackContent
};
