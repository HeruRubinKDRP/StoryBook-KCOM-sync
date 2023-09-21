import React, { useEffect } from 'react';
import {playAudio} from "./PlayAudio";
import {fetchVoiceAudio} from "../Voice/getGoogleVoice";

const GetAndPlayVoice = async (text: string) => {
    const audioData = await fetchVoiceAudio(text);
    playAudio(audioData);
};

export default GetAndPlayVoice;
