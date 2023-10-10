import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {GenericCategorieCta, iGenericCategorieCta } from './add-to-cart-generic-categorie-cta';


export default {
    title: 'Experimental /Generic Cta Add-to-cart',
    component: GenericCategorieCta,
    argTypes:{
        isLoggedIn: {control: "boolean"},
        product: {control: "object"},
        formFactor: {control: "radio", options: ["mobile", "desktop"]},
        calculateCardWidth: {control: "boolean"},
    }
} as Meta;

const Template: StoryFn<iGenericCategorieCta> = (args) => <GenericCategorieCta {...args} />;

export const GenericCategorieExample = Template.bind({ });

GenericCategorieExample.args = {

}