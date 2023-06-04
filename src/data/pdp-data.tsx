import React from "react";
import {imageItemType} from "../components/Carousel/SlideImages";
import {getElementType} from "../components/ContentComponents/getElements";

// specifications area
// ******** kcs
const KCS_specs_data : getElementType[]  = [
   {
     cardData: {
       colorScheme: 'dark-roast',
       headerAlignment: 'center',
       headerLabel: 'Brew Possibilities',
       headerStyle: 'line-through',
       hierarchyLevel: 3
     },
     cardType: 'header-area'
   },
   {
     cardData: {
       cards: [
         {
           cardType: 'simple',
           simpleCardData: {
             alignment: 'center',
             mainFocalImage: {
               cropStyle: 'circle',
               imagePath: '/editorial/hot.png'
             },
             mainImageSize: 'default-size',
             title: 'Hot',
             titlePosition: 'after-image'
           }
         },
         {
           cardType: 'simple',
           simpleCardData: {
             alignment: 'center',
             mainFocalImage: {
               cropStyle: 'circle',
               imagePath: '/editorial/iced.png'
             },
             mainImageSize: 'default-size',
             title: 'Iced',
             titlePosition: 'after-image'
           }
         },
         {
           cardType: 'simple',
           simpleCardData: {
             alignment: 'center',
             mainFocalImage: {
               cropStyle: 'circle',
               imagePath: '/editorial/Specialty.png'
             },
             mainImageSize: 'default-size',
             title: 'Specialty',
             titlePosition: 'after-image'
           }
         }
       ]
     },
     cardType: 'multi-card-presenter'
   },
   {
     cardData: {
       colorScheme: 'dark-roast',
       headerAlignment: 'center',
       headerLabel: 'Specifications',
       headerStyle: 'line-through',
       hierarchyLevel: 3
     },
     cardType: 'header-area'
   },
   {
     cardData: {
       colorScheme: 'dark-roast',
       headerAlignment: 'left',
       headerLabel: 'Dimensions',
       headerStyle: 'medium-light',
       hierarchyLevel: 3
     },
     cardType: 'header-area'
   },
   {
     cardData: {
       items: [
         {
           colorSchemes: 'dark-roast',
           layoutType: 'inline',
           primaryMessage: {
             label : 'Height:'
           },
           secondaryMessage: {
             label : '12.7"'
           }
         },
         {
           colorSchemes: 'dark-roast',
           layoutType: 'inline',
           primaryMessage: {
             label: 'Height when open:'
           },
           secondaryMessage: {
             label : '17.2"'
           }
         },
         {
           colorSchemes: 'dark-roast',
           layoutType: 'inline',
           primaryMessage: {
             label : 'Width:'
           },
           secondaryMessage: {
             label: '17.2"'
           }
         },
         {
           colorSchemes: 'dark-roast',
           layoutType: 'inline',
           primaryMessage: {
             label: 'Weight:'
           },
           secondaryMessage: {
             label : '8.1lbs"'
           }
         }
       ],
       layoutMode: 'inline'
     },
     cardType: 'multi-key-value-area'
   },
   {
     cardData: {
       cards: [
         {
           cardType: 'simple',
           simpleCardData: {
             customClasses : "dimensions-item",
             alignment: 'center',
             mainFocalImage: {
               cropStyle: 'no-crop',
               imagePath: '/product-images/kcs/kcs-dimensions.png'
             },
             mainImageSize: 'default-size',
             title: '',
             titlePosition: 'after-image'
           }
         }
       ]
     },
     cardType: 'multi-card-presenter'
   },
   {
     cardData: {
       items: [
         {
           colorSchemes: 'dark-roast',
           layoutType: 'stacked',
           primaryMessage: {
             label : 'Phone Compatability'
           },
           secondaryMessage: {
             label : 'The K-Café® SMART brewer is compatible with iOS 13 and higher and Android 8 or higher.'
           }
         },
         {
           colorSchemes: 'dark-roast',
           layoutType: 'stacked',
           primaryMessage: {
             label : 'Wi-Fi® Requirements'

           },
           secondaryMessage: {
             label : 'The K-Café® SMART is optimized for home 2.4 GHz Wi-Fi® networks, using WPA2-PSK security. It is not compatible with networks that require an additional username and/or password, a webpage click through to establish a connection or 5 GHz Wi-Fi® networks."'
           }
         },
         {
           colorSchemes: 'dark-roast',
           layoutType: 'stacked',
           primaryMessage: {
             label : 'Compatible with the My K-Cup® Universal Reusable Coffee Filter'
           },
           secondaryMessage: {
             label : 'Brew your own ground coffee (sold separately)'
           }
         }
       ],
       layoutMode: 'inline'
     },
     cardType: 'multi-key-value-area'
   }
 ]

export const carousel_images_KCS : imageItemType[] = [
  {
    path : "/product-images/kcs/kcs-0.png",
    altText : "",
    linkTo : ""
  },
  {
    path : "/product-images/kcs/kcs-open.png",
    altText : "",
    linkTo : ""
  },
  {
    path : "/product-images/kcs/kcs-mug.png",
    altText : "",
    linkTo : ""
  },
  {
    path : "/product-images/kcs/scene.jpg",
    altText : "",
    linkTo : ""
  },
  {
    path : "/product-images/kcs/kcs-open.png",
    altText : "",
    linkTo : ""
  },
  {
    path : "/product-images/kcs/kcs-0.png",
    altText : "",
    linkTo : ""
  },
]

export const carousel_images_KSS : imageItemType[] = [
  {
    path : "http://s7d4.scene7.com/is/image/keurig/KSS%2Dblack%2D01?$pdp%5Fgeneral%5Ftransparent$",
    altText : "",
    linkTo : ""
  },
  {
    path : "http://s7d4.scene7.com/is/image/keurig/KSS%2Dblack%2D06?$pdp%5Fgeneral$",
    altText : "",
    linkTo : ""
  },
  {
    path : "/product-images/kcs/kcs-mug.png",
    altText : "",
    linkTo : ""
  },
  {
    path : "http://s7d4.scene7.com/is/image/keurig/KSS%2Dblack%2D07?$pdp%5Fgeneral$",
    altText : "",
    linkTo : ""
  },
  {
    path : "http://s7d4.scene7.com/is/image/keurig/KSS%2Dblack%2D04?$pdp%5Fgeneral%5Ftransparent$",
    altText : "",
    linkTo : ""
  },
  {
    path : "http://s7d4.scene7.com/is/image/keurig/KSS%2Dblack%2D02?$pdp%5Fgeneral$",
    altText : "",
    linkTo : ""
  },
]




export default KCS_specs_data;
