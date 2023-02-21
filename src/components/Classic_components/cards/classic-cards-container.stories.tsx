import { Story, Meta } from "@storybook/react/types-6-0";
import {podLibrary} from "../../../pages/myBrews";
import {ClassicCardsContainer, iClassicCardsContainer} from "./ClassicCardsContainer";

export default {
  title : "Classic Components/Classic Cards Area",
  component : ClassicCardsContainer,
  argTypes : {
    podLibrary : {control : "object"}
  }
} as Meta;

const Template: Story<iClassicCardsContainer> = (args) => <ClassicCardsContainer {...args} />;

export const ClassicCardsAreaExample = Template.bind({})

ClassicCardsAreaExample.args={
  podLibrary : podLibrary
}
