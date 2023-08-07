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




async function extractProductData(page: Page, url: string) {
    console.log("extracting data from ", url);
    // Use a stricter check for invalid URLs
    if (!url || url.endsWith("null")) {
        console.log("Invalid URL: ", url);
        return {
            productDescription: ""
        };
    }
    await page.goto(url, { waitUntil: ['networkidle2', 'domcontentloaded'] });

    const productDetails = await page.evaluate(() => {
        const productDetailsContainer = document.getElementById('product_details');
        const productDetails = productDetailsContainer!.querySelector('div:nth-child(1) > div:nth-child(1) > p');
        return productDetails ? productDetails.textContent?.trim() : null;
    });


    return {
        productDescription: productDetails
    };
}


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    try {
        // Define where and under which name to save the file
        const debugOutputPath = path.join(process.cwd(), './public/data/debug.json');

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

// wait for  network to be idel and all resources to be loaded
        await page.goto('https://www.keurig.com/beverages/c/beverages101?sort=recommended-for-you&cm_sp=All-Beverages-_-Top-Nav-_-beverages101', {waitUntil: ['networkidle0', 'domcontentloaded']});
        await page.setViewport({ width: 1920, height: 2080, deviceScaleFactor: 2 });


        const screenshotPath = path.join(process.cwd(), './screenshots'); // Adding process.cwd() to get the current directory
        const screenshotFile = 'test.png';
        const fullPath = path.join(screenshotPath, screenshotFile);

        // Check if the directory exists, if not, create it
        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath, { recursive: true });
        }

        await page.screenshot({ path: fullPath });

        let hasNextPage = true;
        const allProductsData = [];



        while (hasNextPage) {
            // get cards data

            const productsBasicData: ProductData[] = [];
            const cards = await page.$$('.clp-product-tile-wapper > div');  // This will return an array of ElementHandles
            for (const card of cards) {
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

                productsBasicData.push(basicData);
            }

            // Now iterate over the products and navigate directly to the detail pages
            for (const product of productsBasicData) {
                if(!product.productDetailsURLValue || product.productDetailsURLValue.endsWith("null")) {
                    product.productDetails = { productDescription: "" }; // Default empty details
                    continue;
                }
                product.productDetails = await extractProductData(page, product.productDetailsURLValue!);
            }

            // After extracting data from the current page, store it into the allProductsData array
            allProductsData.push(...productsBasicData); // Using spread to concatenate arrays

            // Check for the next page button/link
            const nextPageHref = await page.evaluate(() => {
                const nextPageEl = document.querySelector('.next .pagination-prev');
                return nextPageEl ? nextPageEl.getAttribute('href') : null;
            });

            if (nextPageHref) {
                fs.writeFile(debugOutputPath, nextPageHref, 'utf8', (err) => {
                    if (err) {
                        console.error("An error occurred:", err);
                        return res.status(500).json({ message: "Failed to save the data to a JSON file." });
                    }
                    return res.status(200).json({ message: "Data successfully saved to products.json!" });
                });
            }


            if (nextPageHref && nextPageHref !== 'null' && nextPageHref !== 'undefined') {
                await page.goto(`https://www.keurig.com${nextPageHref}`);
            } else {
                hasNextPage = false;
            }
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
