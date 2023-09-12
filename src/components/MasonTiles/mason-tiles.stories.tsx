import { StoryFn, Meta } from "@storybook/react/";
import React, { ReactElement } from "react";
import {iMasonTileGroup, MasonTileGroup, masonTileType} from "./MasonTile";

export default{
  title : "Organisms/Tile Group",
  component : MasonTileGroup,
  argTypes:{
    tiles : { control : "object"},
    layoutType : {control : "select", options : ["auto-fit" , "two-right" , "two-left" , "two-bottom"]}
  }
} as Meta;

const Template: StoryFn<iMasonTileGroup> = (args) => <MasonTileGroup {...args} />

export const ExampleTilesGroup = Template.bind({});

const exampleTiles : masonTileType[] =
  [
    {
      componentType : "content-tile",
      weight : 4,
      content : {
        component : "content",
        sectionName : "",
        hasFocalImage : false,
        sectionType: "content-front-and-center",
        mainMessage:"Test",
        mainMessageSize:"Medium",
        mainMessageColor:"white",
        secondaryMessage:"The SMART way to have the perfect cup, at any time, anywhere",
        secondaryMessageSize:"Small",
        messageAlignment : "center",
        backGroundType:"image",
        hasVideoPlayButton:false,
        backgroundUrlPath:"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        backgroundColor : "white",
        mainTextHasShadow : true,
        heightMethod: "one-viewport",
        contrastBackground:"dark",
        hasCTA:true,
        ctaLabel:"test 123",
        ctaLinkTo:"",

      },
    },
    {
      componentType : "content-tile",
      weight : 2,
      content : {
        component : "content",
        sectionName: "",
        hasFocalImage : false,
        sectionType: "content-front-and-center",
        mainMessage:"Test",
        mainMessageSize:"Medium",
        mainMessageColor:"white",
        messageAlignment : "center",
        secondaryMessage:"The SMART way to have the perfect cup, at any time, anywhere",
        secondaryMessageSize:"Small",
        backGroundType:"image",
        hasVideoPlayButton:false,
        backgroundUrlPath:"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        backgroundColor : "white",
        mainTextHasShadow : true,
        heightMethod: "one-viewport",
        contrastBackground:"dark",
        hasCTA:true,
        ctaLabel:"test 123",
        ctaLinkTo:"",

      },
    },
    {
      componentType : "content-tile",
      weight : 2,
      content : {
        component : "content",
        sectionName: "",
        hasFocalImage : false,
        sectionType: "content-front-and-center",
        mainMessage:"Test",
        mainMessageSize:"Medium",
        mainMessageColor:"white",
        messageAlignment : "center",
        secondaryMessage:"The SMART way to have the perfect cup, at any time, anywhere",
        secondaryMessageSize:"Small",
        backGroundType:"image",
        hasVideoPlayButton:false,
        backgroundUrlPath:"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        backgroundColor : "white",
        mainTextHasShadow : true,
        heightMethod: "one-viewport",
        contrastBackground:"dark",
        hasCTA:true,
        ctaLabel:"test 123",
        ctaLinkTo:"",

      },
    }
  ]


ExampleTilesGroup.args={
  cellsWide : 4,
  cellsHigh : 5,
  tiles : exampleTiles
}



























































