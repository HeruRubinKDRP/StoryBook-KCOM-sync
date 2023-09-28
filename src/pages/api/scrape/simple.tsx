import puppeteer from 'puppeteer';
import {NextApiRequest, NextApiResponse} from "next";
import type {Page} from 'puppeteer';
export default async function handler(req : NextApiRequest, res :NextApiResponse    ) {
    try {
        console.log("Launching browser");
        const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        console.log("Browser launched");

        console.log("Opening new page");
        const page = await browser.newPage();
        console.log("New page opened");

        await browser.close();
        return res.status(200).json({ message: "Success!" });
    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error instanceof Error ? error.message : "An error occurred" });
    }
}
