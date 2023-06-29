import { StoryFn, Meta } from "@storybook/react";
import {podLibrary} from "../../../data/beverage-library";
import {ClassicCardsContainer, iClassicCardsContainer} from "./ClassicCardsContainer";

export default {
  title : "Classic Components/Classic Cards Area",
  component : ClassicCardsContainer,
  argTypes : {
    podLibrary : {control : "object"}
  }
} as Meta;

const Template: StoryFn<iClassicCardsContainer> = (args) => <ClassicCardsContainer {...args} />;

export const ClassicCardsAreaExample = Template.bind({})

ClassicCardsAreaExample.args={
  podLibrary : podLibrary
}
