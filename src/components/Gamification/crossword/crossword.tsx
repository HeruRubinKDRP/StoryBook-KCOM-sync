import React, { useState } from 'react';

type CrosswordPuzzleProps = {
    words: string[];
};

const CrosswordPuzzle: React.FC<CrosswordPuzzleProps> = ({ words }) => {
    const [grid, setGrid] = useState<string[][]>([]);

    const buildGrid = () => {
        // Create an empty grid with enough rows and columns to fit all of the words
        const maxWordLength = Math.max(...words.map((word) => word.length));
        const gridRows = words.length;
        const gridCols = maxWordLength;
        const emptyGrid = Array.from(Array(gridRows), () =>
            Array(gridCols).fill(' ')
        );

        // Add each word to the grid, starting at the top-left corner
        words.forEach((word, rowIndex) => {
            for (let colIndex = 0; colIndex < word.length; colIndex += 1) {
                emptyGrid[rowIndex][colIndex] = word[colIndex];
            }
        });

        setGrid(emptyGrid);
    };

    return (
        <div>
            <button type="button" onClick={buildGrid}>
                Build Grid
            </button>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <span key={colIndex}>{col}</span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CrosswordPuzzle;
