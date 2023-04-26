import {Story, Meta} from "@storybook/react/types-6-0";
import {ClassicCard, iClassicCard} from "./ClassicCard";

export default {
    title: "Classic Components/Classic Beverage CardFlip",
    component: ClassicCard,
    argTypes: {
        bannerType: {control: "select", options: ["feature", "new", "promo"]},
        bannerText: {control: "text"},
        productImage: {control: "text"},
        alwaysShowCTA: {title:"Always Show CTA", control: "boolean"},
    }
} as Meta;

const Template: Story<iClassicCard> = (args) => <div style={{padding: "5%"}}><ClassicCard {...args} /></div>;

export const ClassicCardExample = Template.bind({});

ClassicCardExample.args = {
    bannerText: "NEW EASY-PEEL LID",
    brandName: "Green Mountain Coffee Roasters®",
    productName: "Breakfast Blend Coffee",
    productImage: "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha&wid=300&hei=300&qlt=80&op_usm=0.5,0.5,0,0&resMode=sharp2&op_sharpen=1",
    selectedProductOverride: 1,
    productPrices: [10.49, 16.99, 49.99, 53.96],
    boxSizes: [12, 24, 72, 96],
    alwaysShowCTA: false
}
