import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Graphic,{Igraphics} from "./Graphic";
import {iconsList} from "./iconData";

export default {
  title: "Atoms/Graphic",
  component: Graphic,
  argTypes: {
    colorOverride: { control: "color" },
    graphicName : {
      control: "select",
      options: iconsList.sort()
    },
    iconSize : {control:"text"}
  },
} as Meta;

const Template: Story<Igraphics> = (args) =><div style={{padding:"2rem"}}><Graphic {...args} /></div>

export const Primary = Template.bind({})
Primary.args = {
  graphicName : "icon-pod-logo",
  iconSize : "5rem"
}

export function iconExamples(){
  return(
      <article>
        <h1>Icons Examples</h1>
        <ul>
          <li>
            <div>
              <Graphic
                  graphicName="icon-favorite"
                  iconSize="5rem"
              />
              <p>Create favorite</p>
            </div>
          </li>
          <li>
            <Graphic
                graphicName="close"
                iconSize="5rem"
            />
            <p>Close or clear</p>
          </li>
        </ul>

      </article>
  )
}

export const IconGrid = () => {
  return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "1rem", padding: "2rem" }}>
        {iconsList.map((iconName) => (
            <div key={iconName}>
              <Graphic graphicName={iconName} iconSize="5rem" />
              <div>{iconName}</div>
            </div>
        ))}
      </div>
  );
};