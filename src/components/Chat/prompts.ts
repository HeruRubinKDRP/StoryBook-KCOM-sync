export const formattingResponseGeneral = (currentRoute : string | undefined)=> `
Please format your response in JSON format. Use the following fields:
1. 'text': put any conversation.
2. 'cart-action' : set this to an object like this {"action" : "add", "productName" : "Keurig K-Elite", "quantity" : 1 } or {"action" : "remove", "productName" : "Keurig K-Elite", "quantity" : 0 } or {"action" : "adjust", "productName" : "Keurig K-Elite", "quantity" : 2 }.  
3. 'summary': put a 3-word marketing-style summary of your response like "Help choosing" or "Finding the Right Coffee Maker".
4. 'recommendations': when making recommendations don't include "Keurig" in the product name, put an array of objects with the following fields: 'productType' : "coffee-maker" or "beverage" or "accessory" or "other", "productName" : name of the product, don't include "Keurig" or "coffee maker" in the name of a coffee-maker in this array.
5. 'route': the route is a broad category of what the user is interested in. It is currently ${currentRoute}, the available routes are 'coffee-makers', 'beverages', 'accessories', 'register', 'login', 'help', 'cart', 'checkout', 'order-history', 'order-details', 'account', 'subscriptions', 'perks', 'perks-points', 'perks-redemption-link', 'contact-info', 'manage-payments' and 'home'. If the user isn't sure what they want set route to 'home', otherwise set the route to the closest logical route from those provided.
6. 'sequence': If the user asks anything that might require step-by-step instructions, set the field to an object in this format: 
6a. "sequenceType": if response has instructions involving stirring, heating, or pouring, set sequenceType to "recipe"; other instructions set to "instructions", otherwise set as "none". 
6b. "prerequisite": anything the user will need before starting. 
6c. "steps": field to an array of steps the user should take. Always incorporate Keurig products rather than generic, like "Dark Roast K-Cup" rather than "dark roast coffee".  
Here’s an example sequence object for reference: {"sequenceType" : "recipe", "prerequisites" : "you will need 1 cup of sugar, 8 ounces of oat milk, 2 Dark Magic K-Cup pods" ,"steps" : ["heat the oat milk so it's hot but not boiling", "froth the oat milk until thick", "etc."]}. 
another example sequence object: {"sequenceType" : "instructions", "prerequisites" : "Cleaning Your Keurig" ,"steps" : ["Unplug the brewer", "Descale with a Keurig cleaning pod", "Brew the rinse pod like you would a cup of coffee", "etc.]}.
Otherwise, set the sequence field to: {"sequenceType" :"none", "prerequisites":"none", "steps":[]}.

`;

export const explainStarterKit = `
Can be purchased as a Starter Kit, get a discount on the brewer when you by coffee with us
`

export const explainSingleServe : string = `
This is a single serve coffee maker, which means it brews one cup at a time using a K-Cup pod. This is also compatible Compatible with the My K-Cup® Universal Reusable Coffee Filter Brew your own ground coffee (sold separately).
`

export const featuresList : string = `
1. strong brew : Strong Brew for a bolder, more intense single cup.
2. 
`;

export const kduoFeaturesList : string = `
    1. strong brew : Strong Brew for a bolder, more intense single cup.
    2. 12-cup Glass Carafe & Heating Plate. The included 12-cup glass carafe with metallic handle and heating plate are perfect for keeping your coffee hot.
    3. Pause & Pour. Automatically pauses your coffee maker mid-brew for 20 seconds, allowing the carafe to be poured. No need to wait for the entire carafe to brew – the Keurig® K-Duo® Special Edition coffee maker can be paused mid-brew for 20 seconds, so you can pour fresh, hot coffee right away. 
    4. 12-cup Glass Carafe & Heating Plate
    5. programmable carafe auto-brew:  set your preferred brew time up to 24 hours in advance and enjoy a freshly brewed carafe right when you want it.
    6. 60 oz. Single Reservoir
    7. dimensions : 12.92" Height; X 10.94" Width; X 12.76" Depth 
`

export const commonFeaturesList  = {
    brewID : {
        featureName : "BrewID™",
        featureDescription : ""
    },
    brewsVariety:{
      featureName : "Brews a variety of beverages",
        featureDescription : "Brews coffee, tea, hot cocoa, specialty, and iced beverages"
    },
    brewOverIce : {
        featureName : "Brew Over Ice",
        featureDescription: "Brew hot over ice at the touch of a button for full-flavored, delicious iced coffee."
    },
    coffeeShot : {
        featureName : "Coffee Shot",
        featureDescription : "Coffee shot for specialty drinks: Press the SHOT button to brew a concentrated shot of coffee from your favorite K-Cup® pod to make delicious hot or iced lattes and cappuccinos."
    },
    cupSize : {
        one : "",
        two: "",
        three: "3 CUP SIZES: brew an 8, 10, or 12 oz. cup at the push of a button.",
        four : "",
        five : "BREWS MULTIPLE CUP SIZES: 4, 6, 8, 10, 12oz  Enjoy the most popular cup sizes."
    },
    energyEfficient : {
        featureName : "Energy Efficient",
        featureDescription : "Auto off feature turns off your coffee maker 5 minutes after the last brew, helping to save energy."
    },
    frother : {
        featureName : "Frother",
        featureDescription : "Dishwasher safe frother: Froth fresh milk, including skim, soy, and almond. The frother is dishwasher safe for easy clean up after use and also features a COLD setting for cold frothed milk."
    },
    fastFresh : {
        featureName : "Fast & Fresh-Brewed",
        featureDescription : "Delicious coffee made in minutes."
    },
    hotWaterOnDemand : {
        featureName : "Hot Water On Demand",
        featureDescription : "Dispense hot water instantly, perfect for instant soups or oatmeal."
    },
    lattesCappucinos : {
        featureName : "Lattes & Cappuccinos",
        featureDescription : "Use any K-Cup® pod to brew coffee, or make delicious lattes and cappuccinos."
    },
    myKCUP : {
        featureName : "My K-Cup®",
        featureDescription : "Compatible with the My K-Cup® Universal Coffee Filter: Brew your own ground coffee (sold separately)."
    },
    quietBrew : {
      featureName : "QUIET BREW TECHNOLOGY™",
        featureDescription : "Minimizes noise when the coffee maker is in use."
    },
    removableDripTray : {
        featureName : "Removable Drip Tray",
        featureDescription : "Accommodates travel mugs up to 7.2” tall and holds a full accidental brew for easy cleanup."
    },
    reservoirSize : {
      large75 : {
            featureName : "75 oz. Water Reservoir",
            featureDescription : "Allows you to brew 8 cups before having to refill, saving you time and simplifying your morning routine. Removable reservoir makes refilling easy."
      }
    },
    simpleButtonControls : {
        featureName : "Simple Button Controls",
        featureDescription : "Just insert a pod, select your desired cup size, and brew your perfect cup in under a minute"
    },
    strongBrew : {
        featureName : "Strong Brew",
        featureDescription : "Increases the strength and bold taste of your coffee’s flavor."
    },
    travelMugFriendly : {
        featureName : "Travel Mug Friendly",
        featureDescription : "Removable drip tray accommodates travel mugs up to 7.0” tall and holds a full accidental brew for easy cleanup."
    },
    brewerMaintenance : {
        featureName : "Brewer Maintenance Reminder",
        featureDescription : "Alerts you when it is time to descale your coffee maker. Descaling is an important process that removes built-up calcium deposits, ensuring the best-tasting brew possible."
    },

}


export const coffeeMakerBasicInfo = `
these are the high level description of the coffee makers you will be selling:
                    1.  name: K-Supreme SMART
                        type: single serve coffee maker 
                        description: this is a stylish coffee maker that will look amazing on your counter. It has an onboard computer that gives it SMART capabilities. You can use your cell phone with the Keurig app to control the brewer, set the temperature of your beverage. 
                        colors: black, grey, and white. 
                        Dimensions: Height when open: 16.9", Height 12.2", Width 7.9", Weight 5.8lbs" 
                        features: 
                            
                        starter kit: 50% off as part of a Keurig Starter Kit.
                        
                    2. name: K-Iced™
                        type: Single Serve coffee maker. 
                        description: Enjoy refreshingly delicious iced coffee and full-flavored hot coffee from one multitalented coffee maker. Brew the perfect coffee for any craving, mood, or moment. It's all in the new blue Brew Over Ice button. One push it adjusts the brew temperature, starting hotter to extract full flavor, then cooling down to minimize ice melt. All for a vibrant, balanced iced coffee that never tastes watered down. 
                        features:
                                • BREW OVER ICE: Automatically adjusts brew temperature — starting hotter to help extract full flavor, then cooling down for less ice melt.
                                • STRONG BREW: Brew a stronger, more intense hot coffee.
                                • 3 CUP SIZES: 8, 10, and 12oz (for iced coffee, includes ice).
                                • 42oz REMOVABLE RESERVOIR: Allows you to brew up to 4 cups between refills.
                                • FAST & FRESH-BREWED: Delicious iced coffee and hot coffee made in minutes.
                                • ICED TUMBLER FRIENDLY: Removable drip tray accommodates tumblers and travel mugs up to 7" tall and holds a full accidental brew for easy cleanup.
                                • ENERGY EFFICIENT: Auto off feature turns off your coffee maker 5 minutes after the last brew, helping to save energy.
                                • COMPATIBLE WITH THE MY K-CUP® UNIVERSAL COFFEE FILTER: Brew using your own ground coffee (sold separately).
                        colors: available White and Arctic Grey. 
                        
                    3. name: K-Café Barista Bar: 
                        type: Single Serve Coffee Maker and Frother
                        description: You can enjoy all your go-to coffeehouse beverages — without the go. Easily create hot or iced favorites like creamy lattes, rich cappuccinos, and more at home with the included frother, or enjoy full-flavored iced coffee at the touch of a button. All your hot and iced coffeehouse favorites — always simply made.  
                        features: 
                            • Coffee, Lattes & Cappuccinos, Brew full-flavored coffee and make delicious coffeehouse beverages using any K-Cup® pod.
                            • Hot & Cold Milk Frother, Froth fresh milk, including skim, soy, and almond. The frother is dishwasher safe for easy clean up after use and also features a COLD setting for cold frothed milk.
                            • 3 cup sizes, 8oz, 10oz, 12oz
                            • Brew over ice, Brew your favorite beverages Over Ice: Brews hot coffee extra strong to reduce ice melting and beverage dilution
                            • 42oz Removable Reservoir, Allows you to brew up to 7 cups before having to refill, saving you time
                            • Strong Brew, For a Bolder, More Intense Single Cup 
                            • ICED TUMBLER FRIENDLY: Removable drip tray accommodates tumblers and travel mugs up to 7” tall and holds a full accidental brew for easy cleanup.
                            • ENERGY EFFICIENT: Auto off feature turns off your coffee maker 5 minutes after the last brew, helping to save energy.
                            • COMPATIBLE WITH THE MY K-CUP® UNIVERSAL COFFEE FILTER: Brew using your own ground coffee (sold separately).
                            
                            
                        color: Available in a black finish. 
                    
                    4. name: K-Supreme Plus® SMART:
                        type:  Single Serve
                        description: This is a Wi-Fi connected SMART Brewer. With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless. Control your brewer with the Keurig app, set temperature, cup size and more. 
                        features: 
                         • Brew ID, Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app
                         • Connected Convenience, Brew from anywhere, get personalized recommendations, manage your favorites
                         • Barista mode, Get easy step-by-step directions in the Keurig® app to make lattes, cappuccinos, or your favorite Café Creations
                         • SMART Delivery, Get just enough pods, just when you need them
                         • Brew Points, Every cup brewed with a qualifying pod while connected earns you 1 point toward free coffee.
                         • Ultimate Customization, Dial your brew strength up or down with 5 settings from Balanced to Intense, plus choose the perfect temperature with 6 settings from Warm to Max Hot
                         • Multistream technology, Saturates the coffee grounds more evenly to extract full flavor and aroma* vs Keurig® leading K-Classic® brewer with The Original Donut Shop® Coffee K-Cup® pod
                         • 5 cup sizes, 4oz, 6oz, 8oz, 10oz, 12oz
                         • 78oz removable reservoir, Removable reservoir makes refilling easy
                         • Brewer features, Brew your favorite beverages Over Ice Brews hot coffee extra strong to reduce ice melting and beverage dilution 
                         • Bre hot or Iced coffee
                        colors: available in a Black Stainless Steel and a standard metallic Stainless Steel. 
                      
                    5. name: K-Café® SMART: 
                        type: Single Serve Coffee Maker with Frother and SMART capabilities.
                        description: With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations.  
                        features: 
                        dimensions: 12.5”H X 15.3”W X 11.7”D, 16.7”H (with handle open), 6.2”H mug clearance with drip tray (fits a 7.2” travel mug with drip tray removed), 30.0” Cord Length, 10.0lbs, 120V.
                        
                    6. name: K-Café® Special Edition:
                        type: Single Serve Coffee Latte & Cappuccino Maker.
                        description: With the K-Café® coffee maker you can brew your favorite coffee or make creamy lattes and frothy cappuccinos using any K-Cup pod.  
                        colors: Available in a Nickel finish.
                        features: 
                            • SILVER FINISH will compliment any kitchen 
                            • BREW A CUP AND A CARAFE: Use both ground coffee and K-Cup® pods. 
                            • STRONG BREW: Brew a stronger, more intense single cup. 
                            • MULTIPLE BREW SIZES: Brew a 6, 8, 10, or 12-cup carafe and a 6, 8, 10, or 12 oz. cup. 
                            • LARGE 60 oz. WATER RESERVOIR: The 60 oz. water reservoir is shared between the single serve and carafe brewing, saving you time and simplifying your morning routine. Removable reservoir makes refilling easy.
                            • 12-CUP GLASS CARAFE: with metallic handle and heating plate included to keep your coffee hot.
                            • PROGRAMMABLE CARAFE AUTO-BREW: Program your coffee maker to automatically brew a carafe up to 24 hours in advance.
                            • PAUSE & POUR: Automatically pauses your coffee maker mid-brew for 20 seconds, allowing the carafe to be poured.
                            • SMART START: Your coffee maker heats, then brews in one simple process. No need to wait for it to heat before selecting your cup size.
                            • ENERGY EFFICIENT: Auto off feature for both your brewer and your heating plate:
                            • Turns your brewer off 5 minutes after the last single cup brew
                            • Turns your heating plate off 2 hours after the last carafe brew
                            • TRAVEL MUG FRIENDLY: Accommodates travel mugs up to 7.0” tall.
                            • COMPATIBLE WITH THE MY K-CUP® UNIVERSAL REUSABLE COFFEE FILTER: Brew your own ground coffee (sold separately).
                            • COMPATIBLE WITH KEURIG® *GOLD TONE MESH FILTER ACCESSORY: A reusable coffee filter you can use to brew your perfect carafe (sold separately).
                            • *only compatible with the K-Duo™ and K-Duo Essentials™ brewers; not compatible with the K-Duo Plus™ brewer
                            • SIMPLE BUTTON CONTROLS: Just insert any K-Cup® pod or ground coffee and use the button controls to brew a delicious cup and carafe.
                        starter kit: Build a Starter Kit & Save 50%. 
                        
                    7. name: K-Duo® Special Edition. 
                        type: Single Serve and Carafe Coffee Maker.
                        description: The perfect brewer for any occasion. This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties. The K-Duo® Special Edition coffee maker has sleek, silver finish that will compliment any kitchen and stand out on your countertop. 
                        features list: 4 Brew Sizes for Single Cup & Carafe: 6, 8, 10, 12 oz. / cups. 60 oz. Single Reservoir.
                        colors: SILVER FINISH will compliment any kitchen. 
                        features: 
                        starter kit: Build a Starter Kit & Save 50%
                        
                    8. name: K-Duo®
                        description: This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties. 
                        type: Single Serve and Carafe Coffee Maker.
                        colors: Black.
                        features: 
                            •BREW A CUP AND A CARAFE: Use both ground coffee and K-Cup® pods.
                            •STRONG BREW: Brew a stronger, more intense single cup.
                            •MULTIPLE BREW SIZES: Brew a 6, 8, 10, or 12-cup carafe and a 6, 8, 10, or 12 oz. cup.
                            •LARGE 60 oz. WATER RESERVOIR: The 60 oz. water reservoir is shared between the single serve and carafe brewing, saving you time and simplifying your morning routine. Removable reservoir makes refilling easy.
                            •12-CUP GLASS CARAFE: Included with your brewer along with a heating plate to keep coffee hot.
                            •PROGRAMMABLE CARAFE AUTO-BREW: Program your coffee maker to automatically brew a carafe up to 24 hours in advance.
                            •PAUSE & POUR: Automatically pauses your coffee maker mid-brew for 20 seconds, allowing the carafe to be poured.
                            •SMART START: Your coffee maker heats, then brews in one simple process. No need to wait for it to heat before selecting your cup size.
                            •ENERGY EFFICIENT: Auto off feature for both your brewer and your heating plate: Turns your brewer off 5 minutes after the last single cup brew, Turns your heating plate off 2 hours after the last carafe brew
                            •TRAVEL MUG FRIENDLY: Accommodates travel mugs up to 7.0” tall.
                            •COMPATIBLE WITH THE MY K-CUP® UNIVERSAL REUSABLE COFFEE FILTER: Brew your own ground coffee (sold separately).
                            •COMPATIBLE WITH KEURIG® *GOLD TONE MESH FILTER ACCESSORY: A reusable coffee filter you can use to brew your perfect carafe (sold separately). *only compatible with the K-Duo™ and K-Duo Essentials™ brewers; not compatible with the K-Duo Plus™ brewer
                            •SIMPLE BUTTON CONTROLS: Just insert any K-Cup® pod or ground coffee and use the button controls to brew a delicious cup and carafe.
                        starter kit: Build a Starter Kit & Save 50%
                        
                    9. name: K-Duo Plus® 
                        description:the perfect brewer for any occasion. This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties. The included 12-cup thermal carafe is perfect for keeping your coffee warm for up to 2 hours, and the added convenience of the Pause & Pour feature makes serving a snap! 
                        type: Single Serve and Carafe Coffee Maker.
                        features: 
                            •BREW A CUP AND A CARAFE: Use both ground coffee and K-Cup® pods.    
                            •STRONG BREW: Brew a stronger, more intense single cup and carafe.   
                            •MULTIPLE BREW SIZES: Brew a 6, 8, 10, or 12-cup carafe and an 6, 8, 10, or 12 oz. cup.  
                            •MULTI-POSITION 60 oz. WATER RESERVOIR: Can be positioned to the right, left, or along the back of the brewer to optimize counter space. Removable reservoir makes refilling easy.
                            •12-CUP THERMAL CARAFE: Included with your brewer and keeps coffee warm for up to 2 hours.
                            •PROGRAMMABLE CARAFE AUTO-BREW: Program your coffee maker to automatically brew a carafe up to 24 hours in advance.
                            •PAUSE & POUR: Automatically pauses your coffee maker mid-brew for 20 seconds, allowing the carafe to be poured.
                            •SMART START: Your coffee maker heats, then brews in one simple process. No need to wait for it to heat before selecting your cup size.
                            •ENERGY EFFICIENT: Auto off feature turns your brewer off 5 minutes after the last brew to save energy.
                            •TRAVEL MUG FRIENDLY: Accommodates travel mugs up to 8.0” tall.
                            •COMPATIBLE WITH THE MY K-CUP® UNIVERSAL REUSABLE COFFEE FILTER: Brew your own ground coffee (sold separately).
                            •GOLD TONE MESH FILTER: A reusable coffee filter you can use to brew your perfect carafe. Included with your K-Duo Plus™ coffee maker.
                            •SIMPLE BUTTON CONTROLS: Just insert any K-Cup® pod or ground coffee and use the button controls to brew a delicious cup and carafe.
                        starter kit: Build a Starter Kit & Save 50%
                    
                    10. name: K-Slim®
                        type: Single Serve and Carafe Coffee Maker.
                        description: Enjoy ease and great taste in little space with the new Keurig® K-Slim® single serve coffee maker.  At just 5” wide, the K-Slim® single serve coffee maker fits neatly on your countertop, making it the perfect choice for when space-saving and simplicity are important. 
                        dimensions: Brewer dimensions out of box 12.14” Height x 4.76” Width x 15.2” Depth, Height with handle open 17.28”, Brewer weight 6.22 pounds, Cord Length 29”, Voltage 120V.
                        features: 
                            •MULTISTREAM TECHNOLOGY™: Extracts more flavor and aroma* in every brew *vs Keurig® leading K-Classic® brewer with The Original Donut Shop® Coffee K-Cup® pod
                            •FITS ANYWHERE: Less than 5” wide, fits neatly on your countertop.   
                            •MULTIPLE-CUP WATER RESERVOIR: Removable 46 oz. reservoir lets you brew up to *4 cups before refilling.  (*8 oz. cup size)
                            •3 CUP SIZES: brew an 8, 10, or 12 oz. cup at the push of a button.
                            •FAST & FRESH-BREWED: Delicious coffee made in minutes.  
                            •TRAVEL MUG FRIENDLY: Removable drip tray accommodates travel mugs up to 7.0” tall and holds a full accidental brew for easy cleanup.
                            •ENERGY EFFICIENT: Auto off feature turns off your coffee maker 5 minutes after the last brew, helping to save energy.
                            •COMPATIBLE WITH THE MY K-CUP® UNIVERSAL COFFEE FILTER: Brew your own ground coffee (sold separately).
                            
                        starter kit: Build a Starter Kit & Save 50%
                    
                    11. name: K-Elite® 
                        description: Sleek & Versatile Single Serve brewer. The Keurig® K-Elite™ blends a premium finish and programmable features to deliver both modern design and the ultimate in beverage customization. With a striking brushed finish and metal details, it’s a stylish addition to any kitchen.
                        colors: Brushed gold, brushed silver, brushed slate
                        dimensions: 13.1” High x 9.9” Wide x 12.7” Deep (16.5” High with bale open). Weighs 8.0 lbs.
                        features: 
                            • BREWS MULTIPLE CUP SIZES: 4, 6, 8, 10, 12oz  Enjoy the most popular cup sizes.
                            • STRONG BREW: Increases the strength and bold taste of your coffee’s flavor.
                            • ICED SETTING: Brew hot over ice at the touch of a button for full-flavored, delicious iced coffee.
                            • COFFEE IN NO TIME: Brews K-Cup® pods in under a minute. 
                            • LARGE 75oz WATER RESERVOIR: Allows you to brew 8 cups before having to refill, saving you time and simplifying your morning routine. Removable reservoir makes refilling easy.
                            • HOT WATER ON DEMAND: Perfect for instant soups or oatmeal.
                            • SIMPLE BUTTON CONTROLS: Just insert a pod, select your desired cup size, and brew your perfect cup in under a minute.
                            • REMOVABLE DRIP TRAY: Accommodates travel mugs up to 7.2” tall and holds a full accidental brew for easy cleanup.
                            • BREWER MAINTENANCE REMINDER: Alerts you when it is time to descale your coffee maker. Descaling is an important process that removes built-up calcium deposits, ensuring the best-tasting brew possible.
                            • QUIET BREW TECHNOLOGY™: Minimizes noise when the coffee maker is in use.
                            • Brews coffee, tea, hot cocoa, specialty, and iced beverages.
                            • Compatible with the My K-Cup® Universal Reusable Coffee Filter, allowing you to brew with your own ground coffee. 
                        starter kit: Build a Starter Kit & Save 50%
                        
                    12. name: K-Select® Coffee Maker
                        type: single serve coffee maker
                        description: The Keurig® K-Select™ combines sleek design and simple button controls to help you brew your perfect cup every time. For coffee lovers that enjoy a bold brew, the Strong Brew button increases coffee's strength and intensity and the 52-ounce water reservoir means you can brew 5 cups before refilling. Four cup sizes allow you to make 6, 8, 10, or 12 ounces of your favorite beverages in under a minute, while the Quiet Brew Technology™ feature minimizes noise during use. Just pop in a pod and select your brew size to enjoy a perfect brew every time                       
                        colors: Matte Black, Vintage Red, Oasis, Sandstone, Matte Navy, Matte White
                        dimensions: 12.5" High x 9.2" Wide x 11.6" Deep (17" high with bale open)
                        features:
                             • Strong Brew for a stronger, more intense cup
                             • Brews 6, 8, 10, and 12 oz. sizes
                             • 52-ounce removable side water reservoir
                             • Programmable auto off
                             • Removable drip tray accommodates travel mugs
                             • Quiet Brew Technology™ Feature
                             • Made from fingerprint resistant materials
                             • Descale maintenance reminder 
                             • High altitude setting
                             • Brews in under a minute
                             • Compatible with the My K-Cup® Universal Reusable Coffee Filter
                        starter kit: Build a Starter Kit & Save 50%
                    
                    13. name: K-Supreme Plus®
                        type: single serve coffee maker
                        description: Experience the next level of coffee brewing with the Keurig® K-Supreme Plus® Single Serve coffee maker, the first to introduce MultiStream Technology™ for a richer flavor. Customize your brew with 3 strength and temperature settings, and save preferences for up to 3 users. Whether you prefer coffee, tea, or cocoa, choose from 4 to 12 oz. cups, brewed swiftly from a variety of K-Cup® pods or your own grounds. Its travel-friendly design, large 78 oz. reservoir, and sleek stainless-steel finish make it a kitchen essential.                        
                        colors: stainless steel
                        dimensions: Brewer dimensions out of box: Length 13.35” x Width 8.31” x H: 12.24”, Height with handle open: 16.93”, Brewer weight: 7.5 lbs, Cord Length: ~34.65”, Voltage 120V
                        features:
                            •MULTISTREAM TECHNOLOGY™: Extracts more flavor and aroma* in every brew. vs Keurig® leading K-Classic® brewer with The Original Donut Shop® Coffee K-Cup® pod
                            •PROGRAMMABLE FAVORITES: Save individual brewing preferences for up to 3 users.  
                            •CUSTOMIZE YOUR CUP: Brew a stronger cup, or brew hot over ice for refreshing iced coffee. Choose from 3 strength and 3 temperature settings.
                            •MULTIPLE BREW SIZES: Brew a 4, 6, 8, 10, or 12 oz. cup.     
                            •78 oz. REMOVABLE RESERVOIR: Allows you to brew up to 9 cups before having to refill, saving you time.
                            •STAINLESS STEEL METAL WRAP: Premium finish for a sleek, modern look.    
                            •FAST & FRESH-BREWED: Coffee made in minutes.
                            •BACK-TO-BACK BREWING: Immediately brew a second cup, no need to wait for reheating.
                            •SIMPLE BUTTON CONTROLS: Just insert any K-Cup® pod and use the button controls to brew a delicious cup.
                            •TRAVEL MUG FRIENDLY: Accommodates travel mugs up to 7” tall.
                            •DIGITAL DISPLAY SCREEN: Just insert any K-Cup® pod or ground coffee and use the simple interface to brew a delicious cup.
                            •MAINTENANCE ALERT: Reminds you to descale after every 250 brews.
                            •COMPATIBLE WITH THE MY K-CUP® UNIVERSAL REUSABLE COFFEE FILTER: Brew your own ground coffee (sold separately).
                        starter kit: Build a Starter Kit & Save 50%
                    
                    14. name: K-Supreme®  
                        type: single serve coffee maker
                        description:                        
                        colors: Farmhouse white, silver sage, Gray, Black, White
                        dimensions: Brewer dimensions out of box, Water reservoir on side 12.15” 455 x 7.85” (W) x 12.02” (L), Water reservoir in rear 12.15” (H) x 6.36” (W) x 15.11” (L), Height with handle open 16.94”, Brewer weight 5.78 lb, Cord Length 28.74”, Voltage 120V
                        features: 
                            •MULTISTREAM TECHNOLOGY™: Extracts more flavor and aroma* in every brew. compared to Keurig® leading K-Classic® brewer with The Original Donut Shop® Coffee K-Cup® pod
                            •CUSTOMIZE YOUR CUP: Brew a stronger cup, or brew hot over ice for refreshing iced coffee.
                            •MULTIPLE BREW SIZES: Brew a 6, 8, 10, or 12 oz. cup.
                            •66 oz. DUAL-POSITION RESERVOIR: Choose the perfect position for optimal counter space. Removable reservoir makes refilling easy.
                            •FAST & FRESH-BREWED: Coffee made in minutes.
                            •BACK-TO-BACK BREWING: Immediately brew a second cup, no need to wait for reheating.
                            •TRAVEL MUG FRIENDLY: Accommodates travel mugs up to 7” tall.
                            •SIMPLE BUTTON CONTROLS: Just insert any K-Cup® pod and use the button controls to brew a delicious cup.
                            •MAINTENANCE ALERT: Reminds you to descale after every 250 brews.
                            •COMPATIBLE WITH THE MY K-CUP® UNIVERSAL REUSABLE COFFEE FILTER: Brew your own ground coffee (sold separately).
                        starter kit: Build a Starter Kit & Save 50%
                    
                    15. name: K-Mini®  
                        type: single serve coffee maker
                        description:The Keurig® K-Mini® coffee maker is now built with more planet-conscious materials. The K-Mini® brewer family has reduced the amount of virgin plastic used by over 1 million pounds since 2020. By committing to reducing the amount of new, or “virgin” plastic in our brewers, Keurig is ensuring there is now less plastic entering the system. That makes the K-Mini® brewer Keurig’s most environmentally minded coffee maker. That’s just another reason to love the K-mini® brewer, our slimmest brewer yet. At less than 5" wide, the incredibly slim and easy to use K-Mini® single serve coffee maker makes anywhere perfect for great coffee. The Keurig® K-Mini® brewer combines sleek design with space-saving convenience in a portable, stylish package that delivers fresh brewed, delicious coffee from your favorite K-Cup® pods in minutes.                    
                        colors: matte black, studio gray, chill green, dusty rose (pink), matte black custom, oasis, poppy red, evergreen
                        dimensions: 12.1” High (16.8” high with handle open) x 4.5” Wide x 11.3” Deep. Weighs 4.6 lbs, 120V
                        features: 
                            •OUR ENVIRONMENTALLY MINDED: The K-Mini® brewer family has reduced the amount of virgin plastic used by over 1 million pounds since 2020. 
                            •FITS ANYWHERE: Less than 5 inches wide, perfect for small spaces. 
                            •YOUR PERFECT AMOUNT: Brew any cup size between 6-12oz. 
                            •ONE CUP RESERVOIR: Just add fresh water for each brew. 
                            •FAST & FRESH-BREWED: Coffee made in minutes. 
                            •CORD STORAGE: For easy transport and tidy countertops.
                            •MATTE FINISH: Sleek simplicity meets modern style - the K-Mini® coffee maker is available in a variety of matte-finish colors.
                        starter kit: Build a Starter Kit & Save 50%
                    
                    16. name: K-Mini Plus®
                        type: single serve coffee maker
                        description: Say hello to our slimmest brewer yet.                        
                        colors: matte black, cardinal red, studio gray, evening teal, matte white, cool aqua, misty green
                        dimensions: The Keurig® K-Mini Plus® coffee maker is now built with more planet-conscious materials. The K-Mini® brewer family has reduced the amount of virgin plastic used by over 1 million pounds since 2020. By committing to reducing the amount of new, or “virgin” plastic in our brewers, Keurig is ensuring there is now less plastic entering the system. That makes the K-Mini Plus® brewer Keurig’s most environmentally minded coffee maker. That’s just another reason to love the K-Mini Plus® brewer, our slimmest brewer yet. At less than 5" wide, the incredibly slim and easy to use K-Mini Plus® single serve coffee maker makes anywhere perfect for great coffee. The Keurig® K-Mini Plus® brewer combines sleek design with space-saving convenience in a portable, stylish package that delivers fresh brewed, delicious coffee from your favorite K-Cup® pods in minutes.
                        features: 
                            •MORE ENVIRONMENTALLY MINDED: The K-Mini® brewer family has reduced the amount of virgin plastic used by over 1 million pounds since 2020.
                            •FITS ANYWHERE: Less than 5 inches wide, perfect for small spaces. 
                            •YOUR PERFECT AMOUNT: Brew any cup size between 6-12oz with Keurig® K-Cup® pods. 
                            •ONE CUP RESERVOIR: Just add fresh water for each brew. Removable reservoir makes for easy cleaning and filling. 
                            •FAST & FRESH-BREWED: Coffee made in minutes. 
                            •CORD STORAGE: For easy transport and tidy counter tops.
                        starter kit: Build a Starter Kit & Save 50%
                    
                    17. name: K-Classic® 
                        type: single serve coffee maker
                        description:                        
                        colors: black, rhubarb (red), patriot blue
                        dimensions: 13.0" High x 9.8" Wide x 13.3" Deep
                        features:   
                                    • Brews coffee, tea, hot cocoa, specialty, and iced beverages
                                    • Brews 6 oz., 8 oz., and 10 oz. sizes
                                    • Always ready and brews in under a minute
                                    • Removable 48 oz. Water Reservoir
                                    • Programmable Auto Off feature
                                    • Indicator lights
                                    • Removable Drip Tray
                                    • Compatible with My K-Cup® Reusable Coffee Filter
                        starter kit: Build a Starter Kit & Save 50%
                        
                    
                     

`