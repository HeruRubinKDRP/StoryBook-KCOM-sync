import axios from 'axios';
import { NextApiRequest, NextApiResponse } from "next";

interface ChatRequestBody {
    userInput: string;
    conversation: Array<{ role: string; content: string }>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userInput, conversation } = req.body as ChatRequestBody;

    try {
        const messages = [
            ...conversation,
            { role: 'user', content: userInput }
        ];

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: messages
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        // Check if the expected response structure exists
        if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message && response.data.choices[0].message.content) {
            res.status(200).json({ result: response.data.choices[0].message.content });
        } else {
            res.status(500).json({ error: 'Unexpected response structure from OpenAI API.' });
        }

    } catch (error) {
        console.error("Error in OpenAI API call:", error);  // Log the error for debugging
        res.status(500).json({ error: 'An error occurred during your request.' });
    }
}
