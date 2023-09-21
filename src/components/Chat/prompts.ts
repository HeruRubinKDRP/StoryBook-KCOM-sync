export const formattingResponseGeneral = (currentRoute : string | undefined)=> `
Please format your response in JSON format with conversation in a 'text' field, a summary 
field put a 3 word marketing style summary of your response like "Help choosing" or "Finding the Right Coffee Maker", 
a 'route' field which is ${currentRoute || "Not Found"}, and a 'recommendations' field. If you have enough info to make a recommendation then make array of product suggestions like this and omit the Keurig brand name from machine recommendations: [{"productType" : "machine", "name": "K-Mini"}, {"productType" : "machine" , "name", "K-Elite"}, {"productType" : "beverage", "name" : "French Vanilla"}], otherwise return an empty array like this: []  

`;