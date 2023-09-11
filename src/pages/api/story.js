const axios = require('axios');

export default async function (req, res) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo', // Replace with GPT-3.5 or GPT-4 identifier
                messages: [
                    {
                        role: 'system',
                        content: 'you are a customer service worker at a boutique that sells coffee machines and coffee makers. A customer comes in looking for a new coffee maker. Ask them a question to find out about how coffee fits into their life.'
                    },
                    {
                        role: 'user',
                        content: 'Hello, I\'m thinking about getting a new coffee maker but not sure which one.'
                    }
                ],
                temperature: 0.8, // Add temperature parameter here
                max_tokens: 300     // Add max_tokens parameter here
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );
        res.status(200).json({ result: response.data.choices[0].message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during your request.' });
    }
}
