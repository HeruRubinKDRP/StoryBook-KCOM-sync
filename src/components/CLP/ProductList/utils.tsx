import {iProductInfoCardProps, tCardMode, tPresentationMode} from "../product-card.interfaces";
import {podItemT} from "../../../pages/myBrews";
import {iFlag} from "../../Flag/Flag";

export const flagInStock : iFlag = {
    flagColor:"medium-roast",
    flagLabel:"In-Stock Guarantee",
    flagStyle:"round-top",
    flagTextColorOverride:"white",
    font:{
        fontSize: 'Large',
        fontWeight: 'heavy-weight'
    }
};

const getFlag =(index:number)=>{

        if(index === 0 || index === 3 || index === 5 || index === 6 ){
            return flagInStock
        }

}

export const getRandomNum = (min:number, max:number, type: "float" | "integer") => {
    let value = (Math.random() * (max - min) + min).toFixed(1);
    if(type === "float"){
        return parseFloat( value );
    }

    return parseInt( value );

}

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


    if(!podLibrary[i].productPrices){return []}
        products.push({
            productType: podLibrary[i].productType ?? "pod",
            ratingVisible: true,
            flag: getFlag(i),
            prices: podLibrary[i].productPrices!.map((price, index) => {
                return {
                    price: price,
                    inStock: true,
                    variant: {
                        quantity: podLibrary[i].boxSizes![index] ?? 0,
                        variantName: "ct"
                    }
                }
            }),
            name: name,
            brand: brand,
            image: image ?? "",
            rating :{
                totalNumberOfStars: 5,
                totalNumberOfReviews: getRandomNum(minReviews, maxReviews, "float"),
                ratingNumber: randomInt
            },
            onClick: () => console.log(`Add to Cart clicked for ${name}`),
        });
    }

    console.log("product example:", products[0]);

    return products;
}
