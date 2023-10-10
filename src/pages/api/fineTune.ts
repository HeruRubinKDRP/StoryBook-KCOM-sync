// pages/api/fineTune.js
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res : NextApiResponse) {
    // Initialize OpenAI client
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY || '', // Make sure to set this in your .env file
    });

    try {
        // You can use fs, File, or fetch based on your use case
        // Here, using fetch as an example
        const fileResponse = await fetch('/fine-tuning/keurig-shopping');
        const result = await openai.files.create({
            file: fileResponse,
            purpose: 'fine-tune',
        });

        // Send the result back as a response
        res.status(200).json(result);
    } catch (error) {
        console.error('Error creating file:', error);
        res.status(500).json({ error: 'Failed to create file' });
    }
}
