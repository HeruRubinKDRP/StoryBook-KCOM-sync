export const formattingResponseGeneral = (currentRoute : string | undefined)=> `
Please format your response in JSON format. Use the following fields:
1. 'text': put any conversation.
2. 'cart-action' : set this to an object like this {"action" : "add", "productName" : "Keurig K-Elite", "quantity" : 1 } or {"action" : "remove", "productName" : "Keurig K-Elite", "quantity" : 0 } or {"action" : "adjust", "productName" : "Keurig K-Elite", "quantity" : 2 }.  
3. 'summary': put a 3-word marketing-style summary of your response like "Help choosing" or "Finding the Right Coffee Maker".
4. 'recommendations': put an array of objects with the following fields: 'productType' : "coffee-maker" or "beverage" or "accessory" or "other", "productName" : name of the product, don't include "Keurig" or "coffee maker" in the name of a coffee-maker in this array.
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
                     Features List: 
                     50% off as part of a Keurig Starter Kit.
                        
                    2. name: K-Iced™
                        type: Single Serve coffee maker. 
                        description: Enjoy refreshingly delicious iced coffee and full-flavored hot coffee from one multitalented coffee maker. Brew the perfect coffee for any craving, mood, or moment. It's all in the new blue Brew Over Ice button. One push it adjusts the brew temperature, starting hotter to extract full flavor, then cooling down to minimize ice melt. All for a vibrant, balanced iced coffee that never tastes watered down. 
                        Comes in two colors: White and Arctic Grey. ${explainStarterKit}.
                    3. name: K-Café Barista Bar: 
                     type: Single Serve Coffee Maker and Frother
                     descrition: You can enjoy all your go-to coffeehouse beverages — without the go. Easily create hot or iced favorites like creamy lattes, rich cappuccinos, and more at home with the included frother, or enjoy full-flavored iced coffee at the touch of a button. All your hot and iced coffeehouse favorites — always simply made.  . Available in Black. ${explainStarterKit}.
                    4. K-Supreme Plus® SMART:
                    type:  Single Serve
                     description: This is a Wi-Fi connected SMART Brewer. With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless. Control your brewer with the Keurig app, set temperature, cup size and more. 
                     Available in two finishes: a Black Stainless Steel and a standard metallic Stainless Steel.  
                    5. K-Café®: SMART: With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations. Available in Black. ${explainStarterKit}. Specs: 12.5”H X 15.3”W X 11.7”D, 16.7”H (with handle open), 6.2”H mug clearance with drip tray (fits a 7.2” travel mug with drip tray removed), 30.0” Cord Length, 10.0lbs, 120V.
                    6. K-Café®: Special Edition. Single Serve Coffee Latte & Cappuccino Maker.With the K-Café® coffee maker you can brew your favorite coffee or make creamy lattes and frothy cappuccinos using any K-Cup pod.  Available in a Nickel finish. Build a Starter Kit & Save 50%.
                    7. K-Duo®: Special Edition. the perfect brewer for any occasion. This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties. The K-Duo® Special Edition coffee maker has sleek, silver finish that will compliment any kitchen and stand out on your countertop. Features list: 4 Brew Sizes for Single Cup & Carafe: 6, 8, 10, 12 oz. / cups. 60 oz. Single Reservoir. Build a Starter Kit & Save 50%.
                    8. K-Duo®: This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties. Build a Starter Kit & Save 50%.
                    9. K-Duo Plus® : the perfect brewer for any occasion. This versatile brewer is the best of both worlds, using both K-Cup® pods and ground coffee to brew a cup and a carafe of your favorite varieties. The included 12-cup thermal carafe is perfect for keeping your coffee warm for up to 2 hours, and the added convenience of the Pause & Pour feature makes serving a snap! Build a Starter Kit & Save 50%..
                    10. K-Slim®: Enjoy ease and great taste in little space with the new Keurig® K-Slim® single serve coffee maker.  At just 5” wide, the K-Slim® single serve coffee maker fits neatly on your countertop, making it the perfect choice for when space-saving and simplicity are important. features: ${commonFeaturesList.cupSize.three} ${explainSingleServe} ${kduoFeaturesList} ${explainStarterKit}. Brewer dimensions out of box 12.14” Height x 4.76” Width x 15.2” Depth, Height with handle open 17.28”, Brewer weight 6.22 pounds, Cord Length 29”, Voltage 120V.
                    11. K-Café® With the K-Café coffee maker you can brew your favorite coffee or make creamy lattes and frothy cappuccinos using any K-Cup pod.
                    12. K-Elite®: Sleek & Versatile Single Serve brewer. The Keurig® K-Elite™ blends a premium finish and programmable features to deliver both modern design and the ultimate in beverage customization. With a striking brushed finish and metal details, it’s a stylish addition to any kitchen. ${explainStarterKit} features: ${commonFeaturesList.cupSize.five}, ${commonFeaturesList.strongBrew}, ${commonFeaturesList.fastFresh}, ${commonFeaturesList.reservoirSize.large75}, ${commonFeaturesList.hotWaterOnDemand}, ${commonFeaturesList.simpleButtonControls},  ${commonFeaturesList.removableDripTray}  
                    13. K-Café® :  Brew. Froth. Enjoy. Single Serve Coffee Latte & Cappuccino Maker.With the K-Café® coffee maker you can brew your favorite coffee or make creamy lattes and frothy cappuccinos using any K-Cup pod.  Available in Black. Build a Starter Kit & Save 50%.
                    14.
                    15.
                    16.
                    17.
                    18.
                     

`