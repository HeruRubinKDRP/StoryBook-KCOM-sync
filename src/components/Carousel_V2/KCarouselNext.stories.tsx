import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import KCarouselNext, {iKCarouselNext} from "./KCarouselNext";

export default {
    title: "Components/K_Carousel Next V2",
    component: KCarouselNext,
    argTypes: {
        transitionTime: {
            control: "number",
        },
        children: {control: "object"}
    },
} as Meta;

const Template: Story<iKCarouselNext> = (args) => (
    <div style={{ height: "100vh" }}>
        <KCarouselNext {...args} />
    </div>
);

export const BasicCarousel = Template.bind({});
BasicCarousel.args = {
    slides: [
        <div key={1} style={{ backgroundColor: "red", height: "100%" }}>
            Slide 1
        </div>,
        <div key={2} style={{ backgroundColor: "blue", height: "100%" }}>
            Slide 2
        </div>,
        <div key={3} style={{ backgroundColor: "green", height: "100%" }}>
            Slide 3
        </div>,
    ],
    transitionTime: 1

};
