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
                DesktopPath: '/tutorials/desktop/overview_sched_desktop.mp4',
                MobilePath : "/tutorials/mobile/sched_overview_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Quick Overview',
                MobileTitle: 'Quick Overview',
                DesktopDescription: `Hey there! We wanted to let you know that we've made some changes to the way you manage your Keurig beverage experience. Now, all your Scheduled + SMART Auto-Delivery orders will be displayed together on one tab. This means that you won't have to switch between different screens anymore to see all your orders. We hope it makes managing your orders even easier!`,
                MobileDescription: `Hey there! We wanted to let you know that we've made some changes to the way you manage your Keurig beverage experience. Now, all your Scheduled + SMART Auto-Delivery orders will be displayed together on one tab. This means that you won't have to switch between different screens anymore to see all your orders. We hope it makes managing your orders even easier!`,
            },
            {
                DesktopPath: '/tutorials/desktop/add_item_desktop.mp4',
                MobilePath : "/tutorials/mobile/add_items_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Adding New Beverages',
                MobileTitle: 'Adding New Beverages',
                DesktopDescription: `We know how important it is to have your favorite beverages delivered to you on a regular basis. That's why we've made it easy to add new beverages to your recurring orders! Simply log in to your account and navigate to the "Manage Orders" section. From there, you can browse our selection of beverages and add new ones to your existing orders. Plus, you'll have the flexibility to change your delivery frequency and quantity as needed. With just a few clicks, you can ensure that your beverage selection is always up-to-date and ready to be delivered straight to your doorstep!`,
                MobileDescription: `We know how important it is to have your favorite beverages delivered to you on a regular basis. That's why we've made it easy to add new beverages to your recurring orders! Simply log in to your account and navigate to the "Manage Orders" section. From there, you can browse our selection of beverages and add new ones to your existing orders. Plus, you'll have the flexibility to change your delivery frequency and quantity as needed. With just a few clicks, you can ensure that your beverage selection is always up-to-date and ready to be delivered straight to your doorstep!`,
            },
            {
                DesktopPath: '/tutorials/desktop/update_sched_desktop.mp4',
                MobilePath : "/tutorials/mobile/update_order_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Updating Existing Orders',
                MobileTitle: 'Updating Existing Orders',
                DesktopDescription: `We understand that your beverage preferences may change over time, which is why we've made it easy to update your existing recurring orders. Simply log in to your account and navigate to the "Manage Orders" section. From there, you can make changes to your delivery frequency, quantity, and even add or remove beverages from your order. Plus, you'll have the flexibility to skip a delivery or pause your order if needed. We want to make sure that you always have control over your orders and can make changes that work for you. With just a few clicks, you can update your recurring orders to match your current beverage preferences and never run out of your favorite drinks again!`,
                MobileDescription: `We understand that your beverage preferences may change over time, which is why we've made it easy to update your existing recurring orders. Simply log in to your account and navigate to the "Manage Orders" section. From there, you can make changes to your delivery frequency, quantity, and even add or remove beverages from your order. Plus, you'll have the flexibility to skip a delivery or pause your order if needed. We want to make sure that you always have control over your orders and can make changes that work for you. With just a few clicks, you can update your recurring orders to match your current beverage preferences and never run out of your favorite drinks again!`,
            },
            {
                DesktopPath: '/tutorials/desktop/smart_overview_desktop.mp4',
                MobilePath : "/tutorials/mobile/smart_overview_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Let Your SMART Brewer Do The Work',
                MobileTitle: 'Let Your SMART Brewer Do The Work',
                DesktopDescription: `If you have a SMART brewer, you have the option to let it do the work of reordering your coffee beverages for you! To enable this feature, first log in to your account and navigate to the "SMART Auto-Delivery" section. From there, you can select which beverages you want to be automatically reordered when you start to run low. You'll also be able to set your desired delivery frequency and quantity for each beverage. Once you've configured your SMART Auto-Delivery settings, your SMART brewer will automatically place orders for you, so you never have to worry about running out of your favorite drinks again! If you ever need to make changes to your SMART Auto-Delivery settings, simply log back in to your account and update your preferences.`,
                MobileDescription: `If you have a SMART brewer, you have the option to let it do the work of reordering your coffee beverages for you! To enable this feature, first log in to your account and navigate to the "SMART Auto-Delivery" section. From there, you can select which beverages you want to be automatically reordered when you start to run low. You'll also be able to set your desired delivery frequency and quantity for each beverage. Once you've configured your SMART Auto-Delivery settings, your SMART brewer will automatically place orders for you, so you never have to worry about running out of your favorite drinks again! If you ever need to make changes to your SMART Auto-Delivery settings, simply log back in to your account and update your preferences.`,
            },
            {
                DesktopPath: '/tutorials/desktop/pause_desktop.mp4',
                MobilePath : "/tutorials/mobile/pause_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Pausing Your Orders',
                MobileTitle: 'Pausing Your Orders',
                DesktopDescription: `We understand that you may need to take a break from your recurring shipments from time to time, especially if you're going on vacation. That's why we've made it easy to pause your shipments for a duration of your choosing. Simply log in to your account and navigate to the "Manage Orders" section. From there, you can select the order you want to pause and click on the "Pause" button. You'll be prompted to enter the date you want the pause to start and the date you want it to end. Once you've set your pause duration, your shipments will automatically resume on the specified date. If you need to extend or shorten your pause duration, simply log back in to your account and update your preferences. We want to make sure that you have complete control over your shipments and can make changes that work for you.`,
                MobileDescription: `We understand that you may need to take a break from your recurring shipments from time to time, especially if you're going on vacation. That's why we've made it easy to pause your shipments for a duration of your choosing. Simply log in to your account and navigate to the "Manage Orders" section. From there, you can select the order you want to pause and click on the "Pause" button. You'll be prompted to enter the date you want the pause to start and the date you want it to end. Once you've set your pause duration, your shipments will automatically resume on the specified date. If you need to extend or shorten your pause duration, simply log back in to your account and update your preferences. We want to make sure that you have complete control over your shipments and can make changes that work for you.`,
            },
            {
                DesktopPath: '/tutorials/desktop/shipping_desktop.mp4',
                MobilePath : "/tutorials/mobile/shipping_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Update Shipping & Payment Info',
                MobileTitle: 'Update Shipping & Payment Info',
                DesktopDescription: `Keeping your shipping and payment information up-to-date is important to ensure that your orders are processed smoothly. To update your shipping and payment information, log in to your account and navigate to the "Settings" section. From there, you can update your shipping address, add or update payment methods, and set your default shipping and payment preferences. You can also view your order history and track your shipments from this section. We want to make sure that you have complete control over your account and can make changes that work for you. `,
                MobileDescription: `Keeping your shipping and payment information up-to-date is important to ensure that your orders are processed smoothly. To update your shipping and payment information, log in to your account and navigate to the "Settings" section. From there, you can update your shipping address, add or update payment methods, and set your default shipping and payment preferences. You can also view your order history and track your shipments from this section. We want to make sure that you have complete control over your account and can make changes that work for you. `,
            }
        ],
        TabButtons: [
            'Quick Overview',
            'Adding New Beverages',
            'Updating Existing Orders',
            'Easier with SMART Order',
            'Pausing Your Orders',
            'Update Shipping & Payment Info'
        ]
    }
}