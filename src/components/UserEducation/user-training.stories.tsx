import { iUserTraining, UserTraining } from './UserTraining'
import { Meta, Story } from '@storybook/react'

export default {
    title: 'WIP /UserTraining',
    component: UserTraining,
    argTypes: {}
} as Meta

const Template: Story<iUserTraining> = (args) => <UserTraining {...args} />
export const UserTrainingExample = Template.bind({})
UserTrainingExample.args = {
    Title: "What's new!",
    content: {
        ContentItems: [
            {
                Path: '/videos/ScreenRecording_UE_01.mp4',
                Type: 'video',
                Title: 'Smart + Scheduled Auto-Delivery Together',
                Description:
                    'Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders. Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.'
            },
            {
                Path: 'https://images.keurig.com/is/content/keurig/app_use',
                Type: 'video',
                Title: 'Track your Progress',
                Description:
                    'You can easily track your Keurig® Starter Kit program progress.'
            },
            {
                Path: 'https://images.keurig.com/is/content/keurig/PDP/video/kcs_intro.mp4',
                Type: 'video',
                Title: 'How to Update Your Scheduled Order',
                Description:
                    'Pause, process, cancel, or change the frequency of your order in View Details.'
            },
            {
                Path: 'https://images.keurig.com/is/content/keurig/app_use',
                Type: 'video',
                Title: 'Edit Your SMART Order',
                Description:
                    'Click into a product to edit your pantry stock, change your payment details, cancel, or pause an item.'
            },
            {
                Path: 'https://images.ctfassets.net/wc3u8ir5o9hy/01t55RSKKFsBUvUcwuU1VN/c3724faedcb1916d8467fa9be7f23c83/coffee-house.jpg',
                Type: 'image',
                Title: 'How to Update Your Scheduled Order',
                Description:
                    'Easily add an item to your existing Scheduled orders), convert a Scheduled el, item to SMART, or subscribe to a new SMART item.'
            }
        ],
        TabButtons: [
            'Smart + Scheduled Auto-Delivery Together',
            'Track your Progress',
            'How to Update Your Scheduled Order',
            'Edit Your SMART Order',
            'How to Add items to Your Orders(s)'
        ]
    }
}