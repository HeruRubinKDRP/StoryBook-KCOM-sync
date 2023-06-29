import { StoryFn, Meta } from "@storybook/react";
import {iQuickShop, QuickShop} from "./QuickShop";

export default{
  title : "Classic Components/Quick Shop",
  component : QuickShop,
  argTypes : {

  }
} as Meta;

const Template: StoryFn<iQuickShop> = (args) => <QuickShop {...args} />;

export const ClassicQuickShopExample = Template.bind({});

ClassicQuickShopExample.args={

}
