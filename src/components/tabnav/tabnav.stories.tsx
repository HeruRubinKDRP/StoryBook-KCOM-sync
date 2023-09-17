import { StoryFn, Meta } from '@storybook/react'
import { iTabNav, Tabnav } from './tabnav'

export default {
    title: 'Molecule /TabNavStyles',
    component: Tabnav,
    argTypes: {
        ButtonLabel: { control: 'text' },
        ImagesPath: { control: 'text' },
        TabButtons: { control: 'object' }
    }
} as Meta

export const Template: StoryFn = (args) => <Tabnav {...(args as iTabNav)} />

Template.args = {
    TabButtons: ['string', 'one', 'two', 'three'],
    ContentItems: ['text1', 'text2', 'text3', 'text4']
}