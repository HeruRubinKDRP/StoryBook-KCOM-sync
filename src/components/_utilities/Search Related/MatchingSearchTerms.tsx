export function suggestWords(chars: string, words: string[]): string[] {
    // Convert the characters to a Set for easier lookup
    const charSet = new Set(chars);

    // Use the filter method to return a list of words that contain all the characters
    return words.filter(word => {
        // Convert the word 98
        // to a Set for easier lookup
        const wordSet = new Set(word);

        //create an array from the Set to make TS happy
        const charArray = Array.from(charSet);
        // Check if all the characters in the charSet are in the wordSet
        return [...charArray].every(char => wordSet.has(char));
    });
}