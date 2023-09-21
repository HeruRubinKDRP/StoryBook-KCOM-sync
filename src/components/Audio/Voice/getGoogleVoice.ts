import axios from "axios";

export const fetchVoiceAudio = async (text: string) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY; // Accessing the API key from environment variable

    if (!apiKey) {
        throw new Error("API key is not set in environment variables.");
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = {
        input: {
            text: text,
        },
        voice: {
            languageCode: 'en-US',
            name: 'en-US-Studio-O'
        },
        audioConfig: {
            audioEncoding: 'MP3',
            effectsProfileId: [
                "headphone-class-device"
            ],
            pitch: 0,
            speakingRate: 1.5
        },
    };

    const response = await axios.post(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        body,
        config
    );

    return response.data.audioContent;
};
