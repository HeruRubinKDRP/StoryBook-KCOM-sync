import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iFeaturedProduct} from "../../FeaturedProduct/FeaturedProduct";
import {ContentStory, iContentStory} from "./ContentStory";

export default{
  title: "Molecules/Content Story Item",
  component : ContentStory,
  argTypes :{

  }
} as Meta;

const Template:StoryFn<iContentStory>=(args)=><ContentStory {...args} />

export const BasicExample = Template.bind({});

BasicExample.args={
  articleTitle : "Our Commitment to Sustainability",
  linkToArticle : "",
  articleImagePath : "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  itemSize : "small",
  tags : ["sustainability", "recycling", "environmental"],
  articleDescription : "Chevron’s commitment to sustainability has never been stronger. Our approach is integrated throughout our business to strive to protect the environment, empower people, and get results the right way—today and tomorrow."
}

export const MinimalExample = Template.bind({});

MinimalExample.args={
  articleTitle : "Our Commitment to Sustainability",
  linkToArticle : "",
  articleImagePath : "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  itemSize : "small",
  tags : ["sustainability", "recycling", "environmental"],

}
