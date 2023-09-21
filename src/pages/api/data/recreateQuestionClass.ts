import { NextApiRequest, NextApiResponse } from 'next';
import { ApiKey, WeaviateClient } from 'weaviate-ts-client';
import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'https',
    host: '2vwkvtx9qr65bbr97t8iha.c0.us-central1.gcp.weaviate.cloud',
    apiKey: new ApiKey(process.env.WEAVIATE_KEURIG as string),
    headers: { 'X-OpenAI-Api-Key': process.env.OPENAI_API_KEY as string }, // Add this line
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        // Delete the existing 'Question' class
        await client.schema.classDeleter().withClassName('Question').do();

        const questionClass = {
            class: 'Question',
            vectorizer: 'text2vec-cohere', // or any other vectorizer you want to use
            vectorIndexConfig: {
                distance: 'cosine',
            },
            properties: [
                {
                    name: 'answer',
                    dataType: ['string'],
                },
                {
                    name: 'question',
                    dataType: ['string'],
                },
                {
                    name: 'category',
                    dataType: ['string'],
                },
            ],
        };

        const result = await client.schema
            .classCreator()
            .withClass(questionClass)
            .do();

        console.log('Class created:', JSON.stringify(result, null, 2));
        res.status(200).json({ message: 'Class created successfully', result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to create class', error });
    }
}
