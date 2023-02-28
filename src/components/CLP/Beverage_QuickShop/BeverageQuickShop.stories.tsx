import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react/types-6-0";
import {BeverageQuickShop, iBeverageQuickShop} from "./BeverageQuickShop";
import {brands} from "../../../pages/myBrews";

export default {
    title: "CLP/Beverage Quick Shop",
    component : BeverageQuickShop,
    argTypes: {
        productName : {control : "text"},
        productImageURL : {control : "text"},
        productPrices : {control : "object"},
        productBoxSizes : {control : "object"},
    }

} as Meta;

const Template: Story<iBeverageQuickShop> = (args) => (<BeverageQuickShop {...args} />);

export const Default = Template.bind({});
Default.args = {
    productName : "Breakfast Blend Coffee",
    brand : brands.gmcr,
    edlpOffer : "Save 20% when you buy 5 or more boxes",
    productImageURL : "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha",
    productPrices : [
        12.99,
        11.99,
        10.99,
        9.99,
    ],
    boxSizes : [
        12,
        24,
        36,
        48,
    ]
}