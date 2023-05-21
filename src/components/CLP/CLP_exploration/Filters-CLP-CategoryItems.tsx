import Graphic from 'components/Graphic/Graphic';
import React, { useEffect, useState } from 'react';
import { CategoryItemStyle } from './Filters-CLP-CategoryItems-styled';

interface iCategoryItem {
    title: string;
    subcategories: {
        name?: string;
        filterID:number;
        imageSrc?: string;
        className?: string;
        colorThumbnail?: string;
        checkbox?: boolean;
        groupTitle?: string;
        colors?: string[];
        description?: string;
        productnumber?: string;
    }[];
    defaultOpen?: boolean;
}

export const CategoryItem = ({ title, subcategories, defaultOpen = false }: iCategoryItem) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [rotateClass, setRotateClass] = useState('');
    const handleCheckboxChange = (index: number) => {
        setCheckedSubcategories({ ...checkedSubcategories, [index]: !checkedSubcategories[index] });
    };

    const [selectedColorIndexes, setSelectedColorIndexes] = useState<Record<number, number[]>>(
        subcategories.reduce((acc: Record<number, number[]>, _, index) => {
            acc[index] = [];
            return acc;
        }, {})
    );
    const [checkedSubcategories, setCheckedSubcategories] = useState<Record<number, boolean>>(
        subcategories.reduce((acc: Record<number, boolean>, subcategory, index) => {
            acc[index] = false;
            return acc;
        }, {})
    );

    const [checkedColorRows, setCheckedColorRows] = useState<Record<number, boolean>>(
        subcategories.reduce((acc: Record<number, boolean>, subcategory, index) => {
            acc[index] = false;
            return acc;
        }, {})
    );

    const handleSubcategoryClick = (subcategoryIndex: number, colorIndex: number) => {
        const newSelectedColorIndexes = { ...selectedColorIndexes };
        const subcategorySelectedIndexes = newSelectedColorIndexes[subcategoryIndex];

        if (subcategorySelectedIndexes.includes(colorIndex)) {
            newSelectedColorIndexes[subcategoryIndex] = subcategorySelectedIndexes.filter(
                (index) => index !== colorIndex
            );
        } else {
            newSelectedColorIndexes[subcategoryIndex] = [...subcategorySelectedIndexes, colorIndex];
        }

        setSelectedColorIndexes(newSelectedColorIndexes);
    };

    const handleColorCheckboxChange = (index: number) => {
        setCheckedColorRows({ ...checkedColorRows, [index]: !checkedColorRows[index] });
    };

    const isLightColor = (color: string): boolean => {
        if (color === "#fff" || color.toLowerCase() === "#ffffff") {
            return true;
        }
        const hexColor = color.replace("#", "");
        const r = parseInt(hexColor.substr(0, 2), 16);
        const g = parseInt(hexColor.substr(2, 2), 16);
        const b = parseInt(hexColor.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 200; // Keep the threshold at 200
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
                        <li key={index} className={subcategory.className || ''} onClick={() => !subcategory.colors && handleCheckboxChange(index)}>
                            {subcategory.groupTitle && (
                                <div className="group-title">
                                    <input
                                        type="checkbox"
                                        className="color-row-checkbox"
                                        id={`${title}-color-row-checkbox-${index}`}
                                        onChange={() => handleColorCheckboxChange(index)}
                                        checked={checkedColorRows[index]}
                                    />
                                    <label htmlFor={`${title}-color-row-checkbox-${index}`} className="checkbox-container"></label>
                                    {subcategory.groupTitle}
                                </div>
                            )}
                            {subcategory.colors && (
                                <ul className="color-group-list">
                                    {subcategory.colors.map((color, colorIndex) => (
                                        <li key={colorIndex}>
                                            <div
                                                className={`color-thumbnail ${isLightColor(color) ? 'light-background' : ''} ${selectedColorIndexes[index]?.includes(colorIndex) ? 'selected' : ''}`}
                                                style={{ backgroundColor: color }}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleSubcategoryClick(index, colorIndex);
                                                }}
                                            >
                                                {selectedColorIndexes[index]?.includes(colorIndex) && (
                                                    <div className="checkmark-container">
                                                        <Graphic
                                                            graphicName={"icon-checkmark"}
                                                            colorOverride={isLightColor(color) ? "#000" : "#fff"}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {!subcategory.groupTitle && !subcategory.colors && (
                                <React.Fragment>
                                    <div className="subcategory-content">
                                        {subcategory.checkbox && (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="subcategory-checkbox"
                                                    id={`${title}-subcategory-checkbox-${index}`}
                                                    checked={checkedSubcategories[index]}
                                                />
                                                <label htmlFor={`${title}-subcategory-checkbox-${index}`} className="checkbox-container"></label>
                                            </>
                                        )}
                                        <div className="subcategory-text">
                                            <div className={"name-number"}>
                                                {subcategory.name && (<div className="subcategory-name">{subcategory.name}</div>)}
                                                {subcategory.productnumber && (<div className="productnumber">{subcategory.productnumber}</div>)}
                                            </div>
                                            {subcategory.description && (
                                                <div className="subcategory-description">{subcategory.description}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={"image-container"}>
                                        {subcategory.imageSrc && (
                                            <img
                                                className="subcategory-image"
                                                src={subcategory.imageSrc}
                                                alt={subcategory.name}
                                            />
                                        )}
                                    </div>
                                </React.Fragment>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </CategoryItemStyle>
    );
};


