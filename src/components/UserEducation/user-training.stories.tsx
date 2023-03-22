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
                captions: [
                    {
                        startTime: 0,
                        endTime: 4,
                        text: 'Welcome to your order management in Keurig.com'
                    },
                    {
                        startTime : 4,
                        endTime : 8,
                        text: 'We\'ve made some changes to the way you view your Auto-Delivery orders '
                    },
                    {
                        startTime : 8,
                        endTime : 10,
                        text : 'so, let\'s get you up to speed'
                    },
                    {
                        startTime : 10,
                        endTime : 14,
                        text : 'Click or tap on \'View Details\' to see every aspect of your Auto-Delivery order'
                    },
                    {
                        startTime : 14,
                        endTime : 19,
                        text : 'how it\'s named, you can manage the frequency and quantity you receive with each shipment'
                    },
                    {
                        startTime : 19,
                        endTime : 23,
                        text : 'click on \'Order Details\' to see the shipping and billing information'
                    },
                    {
                        startTime : 23,
                        endTime : 28,
                        text : 'then click on \'Edit Shipping & Payment\' to manage your shipping addresses and payment methods'
                    },
                    {
                        startTime : 28,
                        endTime : 32,
                        text : 'if you\'re running low \'Ship Right Away\' and we\'ll ship it out to you right away'
                    },
                    {
                        startTime : 32,
                        endTime : 38,
                        text : 'if you have enough on hand, you can skip a shipment by clicking on the \'Skip Next Shipment\' button'
                    },
                    {
                        startTime : 38,
                        endTime : 100,
                        text : 'Keurig.com\'s Order Management System - putting you in full control of your Keurig beverage experience'
                    }
                ]
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
                captions: [
                    {
                        startTime: 0,
                        endTime: 5,
                        text: 'Here\'s how you can add an item into your existing recurring order'
                    },{
                        startTime: 5,
                        endTime: 10,
                        text: 'Hit the \"Add Item\" button, then browse or search for the product you\'d like to add'
                    },{
                        startTime: 10,
                        endTime: 15,
                        text: 'I\'m adding some hot chocolate for when my grandchildren come over to the house.'
                    },{
                        startTime: 15,
                        endTime: 18,
                        text: 'Now the shipment mode: one-time, or recurring'
                    },{
                        startTime: 18,
                        endTime: 21,
                        text: 'One-time: it\'ll just ship once with my next order'
                    },{
                        startTime: 21,
                        endTime: 24,
                        text: 'Recurring: will be included with every subsequent Auto-Delivery shipment'
                    },{
                        startTime: 24,
                        endTime: 31,
                        text: 'Now I\'m configuring the quantity how much I\'d like to receive with each shipment'
                    },{
                        startTime: 31,
                        endTime: 35,
                        text: 'This will make sure I have enough on hand, save me a trip to the grocery store and save a lot of money'
                    },{
                        startTime: 35,
                        endTime: 39,
                        text: 'Now we can see the hot chocolate is added to my order'
                    },{
                        startTime: 39,
                        endTime: 43,
                        text: 'I can see how exactly much I\'m going to be saving, and that I\'m getting free shipping'
                    },{
                        startTime: 43,
                        endTime: 47,
                        text: 'Here I can edit my shipping & payment details'
                    },{
                        startTime: 47,
                        endTime: 56,
                        text: 'There\'s the Keurig help line, Keurig people are very knowledgeable and friendly'
                    },{
                        startTime: 56,
                        endTime: 59,
                        text: 'They\'re ready to help you out, if you have any trouble'
                    },{
                        startTime : 59,
                        endTime : 100,
                        text : 'Keurig.com\'s Order Management System - putting you in full control of your Keurig beverage experience'
                    }

                ]

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
                captions: [
                    {
                        startTime: 0,
                        endTime: 5,
                        text: 'To make adjustments to an existing order, just click right on a beverage.'
                    },{
                        startTime: 5,
                        endTime: 8,
                        text: 'You can manage the quantity you receive with each shipment, or change the frequency of your order.'
                    },{
                        startTime: 9,
                        endTime: 16,
                        text: 'If you\'re going on vacation you can pause your shipments for the duration of your trip, and your shipments will resume automatically when you get back'
                    },{
                        startTime: 16,
                        endTime: 20,
                        text: 'If you\'re getting bored of this variety - swap it out with something different'
                    },{
                        startTime: 20,
                        endTime: 27,
                        text: 'You can set a backup product so  in the rare case that your product is out of stock, something you\'re gonna like will be sent in its place'
                    },{
                        startTime: 27,
                        endTime: 32,
                        text: 'You can easily edit your shipping and payment details'
                    },{
                        startTime: 32,
                        endTime: 38,
                        text: '...and through the \"Order Details\" button you can see what products you\'re getting, how much you\'re going to be saving'
                    },{
                        startTime : 38,
                        endTime : 100,
                        text : 'Keurig.com\'s Order Management System - putting you in full control of your Keurig beverage experience'
                    }
                ]
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
                captions: [
                    {
                        startTime: 0,
                        endTime: 5,
                        text: 'If you happen to own one of Keurig\'s line of SMART brewers...'
                    },{
                        startTime: 5,
                        endTime: 11,
                        text: 'There\'s a wonderful little feature where the coffee maker will order you some additional coffee when you start to run low.'
                    },{
                        startTime: 11,
                        endTime: 14,
                        text: 'You\'ll notice this option labeled \"Pods at home\"'
                    },{
                        startTime: 14,
                        endTime: 18,
                        text: 'This is the number of pods in this variety that you have already at home'
                    },{
                        startTime: 18,
                        endTime: 26,
                        text: 'Input this number so your coffee maker can keep track of how many you have and know when to order you more.'
                    },{
                        startTime: 26,
                        endTime: 29,
                        text: 'This is great for me because it\'s one less thing to worry about.'
                    },{
                        startTime: 29,
                        endTime: 33,
                        text: 'You can manage the quantity you receive in each shipment.'
                    },{
                        startTime: 33,
                        endTime: 40,
                        text: 'If you\'re going on vacation you can pause your shipments for the duration of your trip, and your shipments will resume automatically when you get back'
                    },{
                        startTime: 40,
                        endTime: 44,
                        text : 'if you\'re running low \'Ship Right Away\' and we\'ll ship it out to you right away'
                    },{
                        startTime: 44,
                        endTime: 48,
                        text: 'If you\'re getting bored of this variety - swap it out with something different'
                    },{
                        startTime: 48,
                        endTime: 56,
                        text: 'You can set a backup product so  in the rare case that your product is out of stock, something you\'re gonna like will be sent in its place'
                    },{
                        startTime: 56,
                        endTime: 60,
                        text: 'You can easily edit your shipping and payment details'
                    },{
                        startTime : 60,
                        endTime : 100,
                        text : 'Keurig.com\'s Order Management System - putting you in full control of your Keurig beverage experience'
                    }
                ]
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
                captions: [
                    {
                        startTime: 0,
                        endTime: 5,
                        text: 'Hey there! We wanted to let you know that we\'ve made some changes to the way you manage your Keurig beverage experience. Now, all your Scheduled + SMART Auto-Delivery orders will be displayed together on one tab. This means that you won\'t have to switch between different screens anymore to see all your orders. We hope it makes managing your orders even easier!'
                    },{
                        startTime : 38,
                        endTime : 100,
                        text : 'Keurig.com\'s Order Management System - putting you in full control of your Keurig beverage experience'
                    }

                ]
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
                captions: [
                    {
                        startTime: 0,
                        endTime: 8,
                        text: 'Click on \"View Details\" to see every aspect of your Auto-Delivery order'
                    },{
                        startTime: 8,
                        endTime: 12,
                        text: 'Click on \"Order Details\" to see the shipping & billing information.'
                    },{
                        startTime: 12,
                        endTime: 17,
                        text: 'From here click on \"Edit Shipping & Payment\" to edit shipping addresses and payment methods.'
                    },{
                        startTime : 17,
                        endTime : 100,
                        text : 'Keurig.com\'s Order Management System - putting you in full control of your Keurig beverage experience'
                    }

                ]
            }
        ],
        TabButtons: [
            'Quick Overview',
            'Adding New Beverages',
            'Updating Existing Orders',
            'Easier with SMART Auto-Delivery',
            'Pausing Your Orders',
            'Update Shipping & Payment Info'
        ]
    }
}