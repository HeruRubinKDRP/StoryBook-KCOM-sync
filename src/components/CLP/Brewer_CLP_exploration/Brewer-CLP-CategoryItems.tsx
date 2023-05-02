import Graphic from 'components/Graphic/Graphic';
import React, {useEffect, useState} from 'react';
import {CategoryItemStyle} from './Brewer-CLP-CategoryItems-styled';

interface iCategoryItem {
    title: string;
    subcategories: { name?: string; imageSrc?: string; className?: string; colorThumbnail?: string; checkbox?: boolean; groupTitle?:string; colors?: string[];}[];
    defaultOpen?: boolean;
}

export const CategoryItem = ({title, subcategories, defaultOpen = false}: iCategoryItem) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [rotateClass, setRotateClass] = useState('');
    const handleCheckboxChange = (index: number) => {
        // Handle the checkbox change event here
        console.log(`Checkbox for subcategory ${index} changed`);
    };

    const toggleSubcategories = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setRotateClass(isOpen ? 'rotate' : '');
    }, [isOpen]);
    return (
        <CategoryItemStyle>
            <div className="category-title" onClick={toggleSubcategories}>
                <span>{title}</span>
                <span className={`chevron-icon ${rotateClass}`}>
          <Graphic graphicName={"chevron-up"}></Graphic>
        </span>
            </div>
            {isOpen && (
                <ul className={`subcategory-list ${title === 'Color' ? 'color-grid' : ''}`}>
                    {subcategories.map((subcategory, index) => (
                        <li key={index} className={subcategory.className || ''}>
                            {subcategory.groupTitle && (
                                <div className="group-title">{subcategory.groupTitle}</div>
                            )}
                            {subcategory.colors && (
                                <ul className="color-group-list">
                                    {subcategory.colors.map((color, colorIndex) => (
                                        <li key={colorIndex}>
                                            <div
                                                className="color-thumbnail"
                                                style={{ backgroundColor: color }}
                                                onClick={() => handleSubcategoryClick(index)}
                                            ></div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {!subcategory.groupTitle && !subcategory.colors && (
                                <React.Fragment>
                                    <div className="subcategory-content">
                                        {subcategory.checkbox && (
                                            <input
                                                type="checkbox"
                                                className="subcategory-checkbox"
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        )}
                                        <div className="subcategory-text">{subcategory.name}</div>
                                    </div>
                                    {subcategory.imageSrc && (
                                        <img
                                            className="subcategory-image"
                                            src={subcategory.imageSrc}
                                            alt={subcategory.name}
                                        />
                                    )}
                                </React.Fragment>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </CategoryItemStyle>
    );
};
function handleSubcategoryClick(index: number): void {
    throw new Error('Function not implemented.');
}

