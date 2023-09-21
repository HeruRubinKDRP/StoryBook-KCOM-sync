// pages/api/queryQuestions.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { WeaviateClient, ApiKey } from 'weaviate-ts-client';
import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'https',
    host: '2vwkvtx9qr65bbr97t8iha.c0.us-central1.gcp.weaviate.cloud',
    apiKey: new ApiKey(process.env.WEAVIATE_KEURIG as string)
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await client.graphql
            .get()
            .withClassName('Test')
            .withFields('question')
            .do();

        res.status(200).json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred during your request.' });
    }
}
