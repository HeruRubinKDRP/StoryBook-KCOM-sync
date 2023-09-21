// pages/api/populate-class-question
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiKey, ObjectsBatcher, WeaviateClient } from 'weaviate-ts-client';
import weaviate from 'weaviate-ts-client';

async function getJsonData() {
    const file = await fetch('https://raw.githubusercontent.com/weaviate-tutorials/quickstart/main/data/jeopardy_tiny.json');
    return file.json();
}

const client = weaviate.client({
    scheme: 'https',
    host: '2vwkvtx9qr65bbr97t8iha.c0.us-central1.gcp.weaviate.cloud',
    apiKey: new ApiKey(process.env.WEAVIATE_KEURIG as string),
    headers: { 'X-OpenAI-Api-Key': process.env.OPENAI_API_KEY as string }, // Add this line
});

async function importQuestions() {
    try {
        const data = await getJsonData();

        let batcher: ObjectsBatcher = client.batch.objectsBatcher();
        let counter = 0;
        const batchSize = 100;

        for (const question of data) {
            const obj = {
                class: 'Test',
                properties: {
                    answer: question.Answer,
                    question: question.Question,
                    category: question.Category,
                },
            };

            batcher = batcher.withObject(obj);

            if (counter++ >= batchSize) {
                const res = await batcher.do();
                console.log('Full response:', JSON.stringify(res, null, 2));

                // @ts-ignore
                if (res && res.result.status === 'FAILED') {
                    // @ts-ignore
                    console.log('Failed to create object:', res.result);
                }
               // console.log("Batch inserted:", res);

                counter = 0;
                batcher = client.batch.objectsBatcher();
            }
        }

        // Flush the remaining objects
        if (counter > 0) {
            const res = await batcher.do();
            //console.log("Final batch inserted:", res);

            // @ts-ignore
            if (res ) {
                // @ts-ignore
                console.log('Failed to create object:', JSON.stringify(res, null, 2));
            }
        }
    } catch (error) {
        console.error("Error during import:", error);
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await importQuestions();
    res.status(200).json({ message: 'Import completed' });
}
