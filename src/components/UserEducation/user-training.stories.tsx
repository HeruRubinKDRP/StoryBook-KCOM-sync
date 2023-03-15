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
                DesktopPath: '/tutorials/desktop/desktop_intro_.mp4',
                MobilePath : "/tutorials/Mobile/mobile_intro_.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Welcome to the new ',
                MobileTitle: 'Smart + Scheduled Auto-Delivery Together',
                DesktopDescription: 'Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders. Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.',
                MobileDescription: 'Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders. Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.Scheduled + SMART Auto-Delivery orders are now shown together on one tab, so no more switching between screens to see all your orders.',
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