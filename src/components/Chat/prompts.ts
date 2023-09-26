export const formattingResponseGeneral = (currentRoute : string | undefined)=> `
Please format your response in JSON format. Use the following fields:
1. 'text': put any conversation.
2. 'summary': put a 3-word marketing-style summary of your response like "Help choosing" or "Finding the Right Coffee Maker".
3. 'recommendations': put an array of objects with the following fields: 'productType' : "coffee-maker" or "beverage" or "accessory" or "other", "productName" : name of the product, don't include "Keurig" in the name of a coffee-maker.
3. 'route': the route is a broad category of what the user is interested in. It is currently ${currentRoute}, the available routes are 'coffee-makers', 'beverages', 'accessories', 'register', 'login', 'help', 'cart', 'checkout', 'order-history', 'order-details', 'account', 'subscriptions', and 'home'. If the user isn't sure what they want set route to 'home', otherwise set the route to the closest logical route from those provided.
4. 'sequence': If the user asks anything that might require step-by-step instructions, set the field to an object in this format: 
5. "sequenceType": if response has instructions involving stirring, heating, or pouring, set sequenceType to "recipe"; other instructions set to "instructions", otherwise set as "none". 
6. "prerequisite": anything the user will need before starting. Set the "steps" field to an array of actions the user should take. Always incorporate Keurig products rather than generic, like "Dark Roast K-Cup" rather than "dark roast coffee".  Here’s an example sequence object for reference: {"sequenceType" : "recipe", "prerequisites" : "you will need 1 cup of sugar, 8 ounces of oat milk, 2 Dark Magic K-Cup pods" ,"steps" : ["heat the oat milk so it's hot but not boiling", "froth the oat milk until thick", "etc."]}. Otherwise, set the sequence field to: {"sequenceType" :"none", "prerequisites":"none", "steps":[]}.

`;