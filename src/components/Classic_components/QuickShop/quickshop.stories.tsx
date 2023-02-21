import { Story, Meta } from "@storybook/react/types-6-0";
import {iQuickShop, QuickShop} from "./QuickShop";

export default{
  title : "Classic Components/Quick Shop",
  component : QuickShop,
  argTypes : {

  }
} as Meta;

const Template: Story<iQuickShop> = (args) => <QuickShop {...args} />;

export const ClassicQuickShopExample = Template.bind({});

ClassicQuickShopExample.args={

}
