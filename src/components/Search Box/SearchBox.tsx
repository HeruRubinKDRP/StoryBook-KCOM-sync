import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {SearchStyled} from "./search-box-styled";
import Graphic from "../Graphic/Graphic";



export interface iSearchInputProps {
    // onSearch: (searchTerm: string) => void;
    placeHolder?: string;
}

const SearchBox = (props: iSearchInputProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (event.target.value.length >= 3) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        setShowResults(false);
    };

    return (
        <SearchStyled>
            <div className="search-input-area">
                <input
                    className="search-input"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Graphic graphicName="icon-search" />
            </div>
            {searchTerm.length > 0 && (
                <button onClick={handleClear}>Clear</button>
            )}
            {showResults && (
                <div>
                    <div>Search term suggestions</div>
                    <div>Matching products</div>
                </div>
            )}
        </SearchStyled>
    );
};

export default SearchBox;
