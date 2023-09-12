import React, {useState, useCallback, useEffect} from 'react';
import Fuse from 'fuse.js';
import {SearchStyled} from "./search-box-styled";
import Graphic from "../Graphic/Graphic";
import KButton from "../Kbutton/KButton";
import {brewerLibrary} from "../../data/brewer-library";



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

    const getResults = useCallback(() => {
        let fuse : Fuse<any> = new Fuse(brewerLibrary, { keys:
                ['name', 'productFeatures.featureDetails', 'productFeatures.featureLabel'],
            shouldSort: true,
            includeScore: true,
            findAllMatches: true,
            threshold : 0.2,
            minMatchCharLength : 3,
            ignoreLocation:true
        });
        let result = fuse.search(searchTerm);
        console.log(searchTerm)
        console.log(result)
    }, [searchTerm]);


    useEffect(()=>{
        getResults()
    },[searchTerm, getResults]);

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
                {searchTerm.length > 0 && (
                    <KButton
                        actionFunc={handleClear}
                        label={""}
                        classes={"clear-btn"}
                        buttonType={"text-icon-noBG"}
                        iconStandard={"close"}
                        iconPlacement="after-label"
                        buttonWidth="fit-to-content"
                    />
                )}
            </div>

            {showResults && (
                <div className="search-results-area">
                    <div>Search term suggestions</div>
                    <div>Matching products</div>
                </div>
            )}
        </SearchStyled>
    );
};

export default SearchBox;
