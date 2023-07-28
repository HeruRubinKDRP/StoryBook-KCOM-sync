import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iSEOitem, SEO_item} from "./SEOitem";

export default{
  title : "Molecules/SEO Article",
  argTypes : {
    mainTitle : {control : "text"},
    mainBody : {control : "text"},
    showAsCollapsed :{ control: "boolean"}
  }
} as Meta;

const Template: Story<iSEOitem> =(args)=><SEO_item {...args} />

export const ExampleArticle = Template.bind({});

ExampleArticle.args = {
  mainTitle : "Meet Our Family of SMART Coffee Makers",
  mainBody : "Forget the traffic. The line. The expense. Keurig® SMART coffee makers with BrewID™ make it simple to enjoy rich, full-flavored coffee and coffeehouse beverages in the comfort of your home — without specialized skills or equipment. ",
  showAsCollapsed : true,
  expandText : "Continue Reading",
  isExpandedText : "Show Less",
  sections : [
    {
      title : "Connecting your coffee maker to Wi-Fi® unlocks the power of BrewID™, our advanced brewing technology that recognizes your genuine K-Cup pod.  ",
      body : "Select “Signature Brew” and your brewer will automatically adjust to the settings recommended by the coffee roasting expert who created your chosen variety. Prefer more control? Fine-tune your cup with a wide range of temperature, strength, and size settings using brewer controls or the Keurig® app.  \n" +
        "\n" +
        "The app is also where you can explore Café Creations, a curated menu of simple coffeehouse recipes for the K-Café SMART Coffee Maker. When you find one you like, Barista Mode™ will guide you with easy, step-by-step directions. Before you know it, you’ll be sipping a delicious coffeehouse beverage.  "
    },
    {
      title : "Connect to convenience ",
      body : "Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  "
    },
    {
      title : "Connect to convenience ",
      body : "Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  "
    },
    {
      title : "Connect to convenience ",
      body : "Once you’re connected, you can control your coffee maker remotely using the app, Alexa, or Google Home. Start a brew from the driveway and have a hot cup waiting when you walk in. And, since BrewID™ knows which pods you’ve brewed, you can use SMART Delivery to have your favorites delivered automatically when you run low. Plus, you’ll get personalized recommendations in the app to help you find other varieties you might enjoy.  "
    }
  ]

}

export const FAQ_Example = Template.bind({});

FAQ_Example.args = {
  mainTitle : "Frequently Asked Questions",
  expandText : "View All FAQs",
  isExpandedText : "View Less",
  mainBody : "",
  showAsCollapsed : true,
  sections : [
    {
      title : "What types of pods are compatible with the Keurig® K-Elite™ coffee maker?",
      body : "The Keurig® K-Elite™ coffee maker brews all Keurig® branded K-Cup® pods"
    },
    {
      title : "Can I use the My K-Cup® reusable coffee filter with the K-Elite™ coffee maker?",
      body : "The Keurig® K-Elite™ coffee maker is compatible with the Keurig® My K-Cup® Universal Reusable Coffee Filter which allow you to brew with your own ground coffee."
    },
    {
      title : "Can I adjust the size of my beverage with the K-Elite™ coffee maker?",
      body : "The Keurig® K-EliteTM coffee maker allows you to brew five different cup sizes including 4 6 8 10 and 12oz."
    },
    {
      title : "Is there a removable water reservoir? How much water does it hold?",
      body : "The Keurig® K-Elite™ coffee maker has a large removable water reservoir that holds up to 75oz of water allowing you to brew 8 cups before having to refill."
    }
  ]

}
