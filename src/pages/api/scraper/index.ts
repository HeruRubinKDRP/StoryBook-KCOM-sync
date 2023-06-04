import { iProductInfoCardProps} from "../../../components/CLP/SimpleCard/SimpleCard";

const cheerio = require('cheerio');
const fs = require('fs');

// Read the HTML file
const html = fs.readFileSync('path/to/html/file.html', 'utf8');

// Load HTML into Cheerio
const $ = cheerio.load(html);

// Create an empty object to store the extracted data
let productInfo: iProductInfoCardProps = {
    id: 0,
    productType: "pod",
    image: "",
    brand: "",
    name: "",
    prices: [],
    ratingVisible: false,
    priceDescriptor: "",
    productDescription: "",
    siloImagePath: "",
    productFeatures : [],
    filterData: [],
    searchTerms: [],
    rating: {
        totalNumberOfStars: 5,
        totalNumberOfReviews: 0,
        ratingNumber: 5,
    },
    onClick: () => {},
    classes: "",
    flipFunction: () => {}

};

// Extract data from the HTML and populate the object
productInfo.productType = "pod";
productInfo.image = $('.product-image').attr('src');
productInfo.brand = $('.css-1m8z2kg').text();
productInfo.name = $('.css-xvw641').text();
productInfo.prices = [];
$('.count-item').each((index:number, element: any) => {
    productInfo.prices.push({
        price: $(element).parent().find('.price-group-ad span').text(),
        inStock: true,
        variant:{
            quantity: 0,
            variantName: $(element).find('.active .count-item').text(),
        }
    });
});
productInfo.ratingVisible = true;
productInfo.rating = {
    totalNumberOfStars: 5,
    totalNumberOfReviews: 10,
    ratingNumber: 4.5
};

// Convert the object to JSON
const json = JSON.stringify(productInfo, null, 2);

// Write the JSON to a file
fs.writeFileSync('./file.json', json);

console.log('JSON file created successfully!');