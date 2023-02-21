import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.example.com');

    const topContent = await page.$$('.top-content');

    if(!topContent) {
        return
    }else{
        for (const element of topContent) {
            if(!element){
                return
            }
            //check to make sure these aren't null
            const productName = await (await element.$('.product-name'))!.evaluate(node => node.textContent);
            const imageUrl = await (await element.$('.product-image'))!.evaluate(node => node.getAttribute('src'));
            console.log(`Product Name: ${productName}`);
            console.log(`Image Url: ${imageUrl}`);
        }
    }


    await browser.close();
})();