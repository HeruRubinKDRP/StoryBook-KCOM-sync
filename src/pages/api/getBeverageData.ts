import {NextApiRequest, NextApiResponse} from "next";
import type {Page} from 'puppeteer';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

interface ProductData {
    title?: string | null;
    brand?: string | null;
    imageUrl?: string | null;
    rating: {
        stars?: string | null;
        totalReviewsCount?: string | null;
    };
    price: {
        basePrice?: string | null;
        discountedPrice?: string | null;
    };
    productDetailsURLValue?: string | null;
    productDetails?: {
        productDescription?: string | null;
    };
}


export interface productDetailsItem {
    productDescription?: string | null;
}

async function extractBeverageData(page: Page, url: string) {
    console.log("extracting data from ", url);
    // Use a stricter check for invalid URLs
    if (!url || url.endsWith("null")) {
        console.log("Invalid URL: ", url);
        return {
            productDescription: "page not found"
        };
    }
    await page.goto(url, { waitUntil: ['networkidle2', 'domcontentloaded'] });

    console.log("details page: ", url)

    const productDetails = await page.evaluate(() => {
        const productDetailsContainer = document.getElementById('product_details');
        const productDetails = productDetailsContainer!.querySelector('div:nth-child(1) > div:nth-child(1) > p');
        return productDetails ? productDetails.textContent?.trim() : null;
    });
    const variantsData = await page.evaluate(() => {
        const variants = [];
        const variantElements = document.querySelectorAll('.variant-container li');
        for (const variantElement of variantElements) {
            const size = variantElement.querySelector('.css-9ttm')?.textContent?.trim() || '';
            const pricePerUnitElement = variantElement.querySelector('.css-1vstcys');
            const pricePerUnitText = pricePerUnitElement?.textContent || '';
            const pricePerUnit = parseFloat(pricePerUnitText.split('/')[0].replace('$', '').trim() || '0');
            const unit = pricePerUnitText.split('/')[1]?.trim() || '';

            // Initialize subscriptionPrice and basePrice as null
            let subscriptionPrice = null;
            let basePrice = null;

            // Find the price elements for this variant and extract the prices
            const pricesElement = variantElement.querySelector('[data-testid="ad-subscription-price"]');
            if (pricesElement) {
                const pricesSpans = pricesElement.querySelectorAll('span');
                if (pricesSpans.length >= 2) {
                    subscriptionPrice = parseFloat(pricesSpans[0].textContent?.replace('$', '').trim() || '0');
                    basePrice = parseFloat(pricesSpans[1].textContent?.replace('$', '').trim() || '0');
                }
            }

            variants.push({ size, pricePerUnit, unit, subscriptionPrice, basePrice });
        }
        return variants;
    });


    // Click each variant and get the updated price
    for (const variant of variantsData) {
        const variantElement = await page.$(`li[data-code="${variant.size}"]`);
        if (variantElement) {
            await variantElement.click();
            await page.waitForSelector('.radio-buttons');
            // Wait for the price to update, adjust timeout as needed
            await new Promise(resolve => setTimeout(resolve, 100));

            // Scrape the updated price
            const updatedPrice = await page.$eval('.productPrice .css-6grne4', el => parseFloat(el.textContent?.replace('$', '').trim() || '0'));
            variant.basePrice = updatedPrice;
        }
    }

    return {
        productDescription: productDetails
    };
}




export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    try {
        // Define where and under which name to save the file
            console.log("starting")
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.on('console', msg => {
            for (let i = 0; i < msg.args().length; ++i) {
                console.log(`${i}: ${msg.args()[i]}`);
            }
        });

        //keep track of current page
        let currentPage = 0;
        let hasNextPage = true;

        //go to the first page
        // wait for  network to be idle and all resources to be loaded
        try {
            await page.goto(`https://www.keurig.com/beverages/c/beverages101?sort=recommended-for-you&cm_sp=All-Beverages-_-Top-Nav-_-beverages101&currentPage=${currentPage}`, {waitUntil: ['networkidle0', 'domcontentloaded']});
        } catch (error) {
            console.log(`Failed to navigate to page ${currentPage}. Stopping.`);
            hasNextPage = false;
        }

        await page.setViewport({ width: 1920, height: 6080, deviceScaleFactor: 2 });


        const screenshotPath = path.join(process.cwd(), './screenshots'); // Adding process.cwd() to get the current directory
        const screenshotFile = 'test.png';
        const fullPath = path.join(screenshotPath, screenshotFile);

        // Check if the directory exists, if not, create it
        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath, { recursive: true });
        }

        await page.screenshot({ path: fullPath });

        const allProductsData: ProductData[] = [];

        const productsBasicData: ProductData[] = [];

        while (hasNextPage && currentPage < 22) {
            // check if there is a next page
            const hasProducts = await page.$$('.clp-product-tile-wapper > div'); // Check for product cards or any other unique feature of product pages
            if (!hasProducts.length) {
                hasNextPage = false;
            }



            // get cards data
            const cards = await page.$$('.clp-product-tile-wapper > div');  // This will return an array of ElementHandles
            for (const card of cards) {
                // @ts-ignore - TS doesn't know about the check for valid ProductData before pushing
                const basicData : ProductData = await page.evaluate(card => {
                    // Your existing code to extract basic product data
                    // but don't include the extractProductData call
                    // Just return the product details URL and other basic details
                    if(!card){return}
                    const productName = card.querySelector('.brand-name > div');
                    const productImage = card.querySelector('.top-content img');

                    const productDetailsURL = card.querySelector('.top-content a:nth-child(1)');


                    // getFullURL logic, make sure it's a correct url:
                    let productDetailsURLValue;
                    if (productDetailsURL) {
                        const hrefValue = productDetailsURL.getAttribute('href');
                        if (hrefValue!.startsWith('http')) {
                            productDetailsURLValue = hrefValue;
                        } else {
                            productDetailsURLValue = "https://www.keurig.com" + hrefValue;
                        }
                    }

                    const brandName = card.querySelector('.front-top > div:nth-child(4)');
                    const rating = card.querySelector('.front-top > a:nth-child(8) > div:nth-child(2) > span:nth-child(1)');
                    const ratingsCount = card.querySelector('.front-top > a:nth-child(8) > div:nth-child(2) > span:nth-child(3)');
                    const basePrice = card.querySelector('.front-top > div:nth-child(7) a:nth-child(2) ');

                    const discountedPrice = card.querySelector('.front-top > div:nth-child(7) a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span ');

                    const title = productName ? productName.textContent?.trim() : null;
                    const imageUrl = productImage ? productImage.getAttribute('src') : null;
                    const brand = brandName ? brandName.textContent?.trim() : null;

                    const productRating = rating ? rating : null;
                    const totalReviews = ratingsCount ? ratingsCount.textContent?.trim() : null;

                    const basePriceValue = basePrice ? basePrice.textContent?.trim() : null;
                    const discountedPriceValue = discountedPrice ? discountedPrice.textContent?.trim() : null;

                    return  {
                        title,
                        brand,
                        imageUrl,
                        rating:{
                            stars : productRating ? productRating.textContent!.trim() : "null",
                            totalReviewsCount : totalReviews ? totalReviews!.replace(")", "").replace("(", "") : "null"
                        },
                        price : {
                            basePrice : basePriceValue ? basePriceValue!.trim().replace("$", "") : "null",
                            discountedPrice : discountedPriceValue ? discountedPriceValue!.trim().replace("$", "") : "null"
                        },
                        productDetails: {
                            productDescription: ""
                        },
                        productDetailsURLValue : productDetailsURLValue,

                    };

                }, card); // Note: card is an ElementHandle, so we pass it as the second argument to page.evaluate

                //we only push it if it's valid data so no undefined
                if (basicData) {
                    productsBasicData.push(basicData);
                }

            }

            // After extracting data from the current page, store it into the allProductsData array
            allProductsData.push(...productsBasicData); // Using spread to concatenate arrays

            productsBasicData.length = 0; // Clear the array for the next page
            currentPage++;
            console.log(`Navigating to page ${currentPage}`);
        }

        // Now iterate over the products and navigate directly to the detail pages
        let productsDetailsAll : productDetailsItem[] = [];

        for (const product of allProductsData) {
            console.log("getting details")
            if(!product.productDetailsURLValue || product.productDetailsURLValue.endsWith("null")) {
                product.productDetails = { productDescription: "" }; // Default empty details
                continue;
            }

            const productDetails = await extractBeverageData(page, product.productDetailsURLValue!);
            productsDetailsAll.push(productDetails);
        }


        //Save data to json file
        const jsonData = JSON.stringify(allProductsData, null, 4); // 4 spaces for indentation
        // Define where and under which name to save the file
        const outputPath = path.join(process.cwd(), './public/data/productsData.json');

        // Write the data to the file
        fs.writeFile(outputPath, jsonData, 'utf8', (err) => {
            if (err) {
                console.error("An error occurred:", err);
                return res.status(500).json({ message: "Failed to save the data to a JSON file." });

            }
            return res.status(200).json({ message: "Data successfully saved to products.json!" });
        });


        console.log("productCardsData", allProductsData);

        await browser.close();

        // Sending response

    } catch (error) {
        // If there's an error, send an error response
        return res.status(500).json({message: "Internal Server Error", error: error instanceof Error ? error.message : "An error occurred"});

    }
}
