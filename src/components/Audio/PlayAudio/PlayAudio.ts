export const playAudio = (audioData: string) => {
    const audio = new Audio(`data:audio/mp3;base64,${audioData}`);
    audio.play();
};
