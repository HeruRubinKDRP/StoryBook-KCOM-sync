import { iProductInfoCardProps } from '../SimpleCard/SimpleCard';
import {podItemT} from "../../../pages/myBrews";



export const convertPodLibraryToProductInfoCardProps = (podLibrary: podItemT[]): iProductInfoCardProps[] => {
    const products: iProductInfoCardProps[] = [];

    for (let i = 0; i < podLibrary.length; i++) {

        const name = podLibrary[i].podName;
        const brand = podLibrary[i].brand;
        const image = podLibrary[i].productImagePrimaryPath;

        let minReviews = 400;
        let maxReviews = 1623;
        let randomInt = Math.floor(Math.random() * (maxReviews - minReviews + 1)) + minReviews;

        let min = 3.9;
        let max = 4.9;
        let randomNum = parseFloat( (Math.random() * (max - min) + min).toFixed(1) );


        products.push({
            productType: podLibrary[i].productType,
            ratingVisible: true,
            prices: podLibrary[i].productPrices.map((price, index) => {
                return {
                    price: price,
                    inStock: true,
                    variant: podLibrary[i].boxSizes[index].toString()
                }
            }),
            name: name,
            brand: brand,
            image: image,
            rating :{
                totalNumberOfStars: 5,
                totalNumberOfReviews: randomNum,
                ratingNumber: randomInt
            },
            onClick: () => console.log(`Add to Cart clicked for ${name}`),
        });
    }

    console.log("product example:", products[0]);

    return products;
}
