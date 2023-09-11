// pages/api/chat.ts

import axios from 'axios';
import {NextRequest} from "next/server";
import {NextApiRequest, NextApiResponse} from "next";
interface ChatRequestBody {
    userInput: string;
    conversation: Array<{ role: string; content: string }>;
}
export default async function handler(req : NextApiRequest, res : NextApiResponse ) {
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

        res.status(200).json({ result: response.data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during your request.' });
    }
}
