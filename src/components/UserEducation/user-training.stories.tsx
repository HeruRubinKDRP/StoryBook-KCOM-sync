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
                DesktopPath: '/tutorials/desktop/Quick_Overview_Desktop.mp4',
                MobilePath : "/tutorials/mobile/overview_mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Quick Overview',
                MobileTitle: 'Quick Overview',
                DesktopDescription: `We've made some changes to the way you manage your Keurig.com beverage experience. Now, all your Scheduled + SMART Delivery orders will be displayed together on one tab. Now you won't have to switch between different screens to see all your orders, making it even easier for you! `,
                MobileDescription: `We've made some changes to the way you manage your Keurig.com beverage experience. Now, all your Scheduled + SMART Delivery orders will be displayed together on one tab. Now you won't have to switch between different screens to see all your orders, making it even easier for you! `,
                captions: [
                    {
                        startTime: 0,
                        endTime: 4,
                        text: 'We\'ve made some changes to the way you manage your Keurig.com beverage experience. '
                    },
                    {
                        startTime : 4.5,
                        endTime : 11,
                        text: 'Now, all your Scheduled + SMART Delivery orders will be displayed together on one tab. '
                    },
                    {
                        startTime : 11.5,
                        endTime : 19,
                        text : 'Now you won\'t have to switch between different screens to see all your orders, making it even easier for you! '
                    },
                    {
                        startTime : 21,
                        endTime : 26,
                        text : 'Exclusively on Keurig.com'
                    }
                ]
            },
            {
                DesktopPath: '/tutorials/desktop/Adding_New_Beverages_Desktop.mp4',
                MobilePath : "/tutorials/mobile/add_items_Mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Adding New Beverages',
                MobileTitle: 'Adding New Beverages',
                DesktopDescription: `We know how important it is to have your favorite beverages on hand. That's why we've made it easy to add new beverages to your orders! When you select “Add an Item” you can browse our selection of beverages and add new ones to your existing orders. Plus, you'll have the flexibility to change your delivery frequency and quantity as needed. With just a few clicks, you can ensure that your beverage selection is always up-to-date and ready to be delivered straight to your doorstep! `,
                MobileDescription: `We know how important it is to have your favorite beverages on hand. That's why we've made it easy to add new beverages to your orders! When you select “Add an Item” you can browse our selection of beverages and add new ones to your existing orders. Plus, you'll have the flexibility to change your delivery frequency and quantity as needed. With just a few clicks, you can ensure that your beverage selection is always up-to-date and ready to be delivered straight to your doorstep! `,
                captions: [
                    {
                        startTime: 0,
                        endTime: 8,
                        text: 'We know how important it is to have your favorite beverages on hand. That\'s why we\'ve made it easy to add new beverages to your orders! '
                    },{
                        startTime: 8.5,
                        endTime: 14,
                        text: 'When you select “Add an Item” you can browse our selection of beverages and add new ones to your existing orders.'
                    },{
                        startTime: 14.5,
                        endTime: 20,
                        text: 'Plus, you\'ll have the flexibility to change your delivery frequency and quantity as needed.'
                    },{
                        startTime: 20.5,
                        endTime: 31,
                        text: 'Exclusively on Keurig.com'
                    }

                ]

            },
            {
                DesktopPath: '/tutorials/desktop/Updating_Existing_Orders_Desktop.mp4',
                MobilePath : "/tutorials/mobile/update_order_Mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Updating Existing Orders',
                MobileTitle: 'Updating Existing Orders',
                DesktopDescription: `We understand that your beverage preferences may change over time, which is why we've made it easy to update your existing orders. You can make changes to your delivery frequency, quantity, and even add or remove beverages from your order. Plus, you'll have the flexibility to skip a delivery or pause your order if needed. We want to make sure that you always have control over your orders and can make changes that work for you. With just a few clicks, you can update your orders to match your beverage preferences so you never run out of your favorites again! `,
                MobileDescription: `We understand that your beverage preferences may change over time, which is why we've made it easy to update your existing orders. You can make changes to your delivery frequency, quantity, and even add or remove beverages from your order. Plus, you'll have the flexibility to skip a delivery or pause your order if needed. We want to make sure that you always have control over your orders and can make changes that work for you. With just a few clicks, you can update your orders to match your beverage preferences so you never run out of your favorites again! `,
                captions: [
                    {
                        startTime: 0,
                        endTime: 7,
                        text: 'We understand that your beverage preferences may change over time, which is why we\'ve made it easy to update your existing orders.'
                    },{
                        startTime: 7.5,
                        endTime: 14,
                        text: 'You can make changes to your delivery frequency, quantity, and even add or remove beverages from your order.'
                    },{
                        startTime: 14.5,
                        endTime: 19,
                        text: 'Plus, you\'ll have the flexibility to skip a delivery or pause your order if needed.'
                    },{
                        startTime: 19.5,
                        endTime: 26,
                        text: 'We want to make sure that you always have control over your orders and can make changes that work for you.'
                    },{
                        startTime: 26.5,
                        endTime: 32,
                        text: 'With just a few clicks, you can update your orders to match your beverage preferences so you never run out of your favorites again.'
                    },{
                        startTime : 34,
                        endTime : 100,
                        text : 'Exclusively on Keurig.com'
                    }
                ]
            },
            {
                DesktopPath: '/tutorials/desktop/Easier_with_SMART_Delivery_Desktop.mp4',
                MobilePath : "/tutorials/mobile/SMART_overview_Mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Easier with SMART Delivery',
                MobileTitle: 'Easier with SMART Delivery ',
                DesktopDescription: `If you have a SMART brewer, you have the option to let it do the work of reordering your beverages for you. To enable this feature, first make sure your brewer is connected.  Then, you can select which beverages you want to be automatically reordered when you start to run low. Once you've configured your SMART Delivery settings, your SMART brewer will automatically place orders for you, so you never have to worry about running out of your favorites again! If you ever need to make changes to your SMART Delivery settings, simply log back into your account and update your preferences. `,
                MobileDescription: `If you have a SMART brewer, you have the option to let it do the work of reordering your beverages for you. To enable this feature, first make sure your brewer is connected.  Then, you can select which beverages you want to be automatically reordered when you start to run low. Once you've configured your SMART Delivery settings, your SMART brewer will automatically place orders for you, so you never have to worry about running out of your favorites again! If you ever need to make changes to your SMART Delivery settings, simply log back into your account and update your preferences. `,
                captions: [
                    {
                        startTime: 0,
                        endTime: 6,
                        text: 'If you have a SMART brewer, you have the option to let it do the work of reordering your beverages for you! '
                    },{
                        startTime: 6.5,
                        endTime: 10,
                        text: 'To enable this feature, first make sure your brewer is connected.'
                    },{
                        startTime: 10.5,
                        endTime: 16,
                        text: 'Then, you can select which beverages you want to be automatically reordered when you start to run low.'
                    },{
                        startTime: 16.5,
                        endTime: 27,
                        text: 'Once you\'ve configured your SMART Delivery settings, your SMART brewer will automatically place orders for you, so you never have to worry about running out of your favorites again. '
                    },{
                        startTime: 27.5,
                        endTime: 33,
                        text: 'If you ever need to make changes to your SMART Delivery settings, simply log back into your account and update your preferences. '
                    },{
                        startTime: 35,
                        endTime: 44,
                        text: 'Exclusively on Keurig.com'
                    }
                ]
            },
            {
                DesktopPath: '/tutorials/desktop/update_shipping_Desktop.mp4',
                MobilePath : "/tutorials/mobile/update_shipping_Mobile.mp4",
                DesktopType: 'video',
                MobileType : "video",
                DesktopTitle: 'Update Shipping & Payment Info',
                MobileTitle: 'Update Shipping & Payment Info',
                DesktopDescription: `Keeping your shipping and payment information up-to-date is important to ensure that your orders are processed smoothly. To update your shipping and payment information, navigate to “Edit Shipping & Payment” within an item or an order. From there, you can update your shipping address, add or update payment methods, and set your default shipping and payment preferences.`,
                MobileDescription: `Keeping your shipping and payment information up-to-date is important to ensure that your orders are processed smoothly. To update your shipping and payment information, navigate to “Edit Shipping & Payment” within an item or an order. From there, you can update your shipping address, add or update payment methods, and set your default shipping and payment preferences. `,
                captions: [
                    {
                        startTime: 0,
                        endTime: 7,
                        text: 'Keeping your shipping and payment information up-to-date is important to ensure that your orders are processed smoothly.'
                    },{
                        startTime: 7.5,
                        endTime: 14,
                        text: 'To update your shipping and payment information, navigate to “Edit Shipping & Payment” within an item or an order.'
                    },{
                        startTime: 12,
                        endTime: 17,
                        text: 'From here click on \"Edit Shipping & Payment\" to edit shipping addresses and payment methods.'
                    },{
                        startTime : 17.5,
                        endTime : 22,
                        text : 'From there, you can update your shipping address, add or update payment methods, and set your default shipping and payment preferences.'
                    },{
                        startTime: 23,
                        endTime: 100,
                        text: 'Exclusively on Keurig.com'
                    }

                ]
            }
        ],
        TabButtons: [
            'Quick Overview',
            'Adding New Beverages',
            'Updating Existing Orders',
            'Easier with SMART Auto-Delivery',
            'Update Shipping & Payment Info'
        ]
    }
}