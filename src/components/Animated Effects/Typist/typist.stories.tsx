import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TypingEffect, { TypingEffectProps } from './Typist'

export default {
  title: 'Components/TypingEffect',
  component: TypingEffect,
  argTypes: {
    speed: { control: 'radio', options: ['slow', 'medium', 'fast'] },
    showCursor: { control: 'boolean' }
  }
}

const Template: StoryFn<TypingEffectProps> = (args) => <TypingEffect {...args} />

export const Default = Template.bind({})
Default.args = {
  message: "Hello, I'm typing!"
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  speed: 0.001,
  showCursor: true,
  message:
    'This is a custom message! Instructions: Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.\n' +
    'Query: ok, wait - I want @babel/preset-react - can you walk me through enabling that?'
}
