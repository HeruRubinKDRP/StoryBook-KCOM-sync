import { ProductInfoCardProps } from '../SimpleCard/SimpleCard';
import {podItemT} from "../../../pages/myBrews";

export const generateProducts = (count: number): ProductInfoCardProps[] => {
    const products: ProductInfoCardProps[] = [];

    for (let i = 0; i < count; i++) {
        const price = parseFloat((Math.random() * 100).toFixed(2));
        const name = `Product ${i + 1}`;
        const brand = `Brand ${i + 1}`;
        const image = `https://picsum.photos/id/${i + 1}/300/200`;

        products.push({
            price: price,
            name: name,
            brand: brand,
            image: image,
            rating :{
                totalNumberOfStars: 5,
                totalNumberOfReviews: 0,
                ratingNumber: 0
            },
            onClick: () => console.log(`Add to Cart clicked for ${name}`),
        });
    }

    return products;
};

export const convertPodLibraryToProductInfoCardProps = (podLibrary: podItemT[]): ProductInfoCardProps[] => {
    const products: ProductInfoCardProps[] = [];

    for (let i = 0; i < podLibrary.length; i++) {
        const price = podLibrary[i].pricePerPod;
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
            price: price,
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

    return products;
}
