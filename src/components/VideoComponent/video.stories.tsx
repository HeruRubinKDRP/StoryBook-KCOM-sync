// components/Video.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Video, iVideo } from './Video'; // adjust the import path to where your Video component is located

export default {
    title: 'Components/Video',
    component: Video,
} as Meta;

const Template: Story<iVideo> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
    videoUrl: 'https://sample-videos.com/video123.mp4',
    captions: [
        {
            startTime: 0,
            endTime: 10,
            text: 'Caption 1',
        },
        {
            startTime: 11,
            endTime: 20,
            text: 'Caption 2',
        },
    ],
    isPlaying: true,
    isMuted: false,
};
