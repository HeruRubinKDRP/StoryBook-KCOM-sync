import React from 'react';
import { ProductVariantColor, ColorVariantProps } from './simple-color-picker.interface';
import {ColorPickerButtonStyled, ColorPickerSimpleStyled} from "./color-picker-simple.styled";


const ColorVariantSelector: React.FC<ColorVariantProps> = ({ variants, onVariantClick }) => {
    const [selectedColor, setSelectedColor] = React.useState<number>(0);

    const handleVariantClick = (variant: ProductVariantColor, index :number) => {
        setSelectedColor(index);
        onVariantClick(variant.inStock, variant.colorValue, variant.colorName, index);

    }

    return (
        <ColorPickerSimpleStyled className="color-picker">
            {variants.map((variant, index) => (
                <ColorPickerButtonStyled
                    key={index}
                    colorValue={variant.colorValue}
                    inStock={variant.inStock}
                    onClick={() => handleVariantClick(variant, index)}
                    selected={selectedColor === index}
                />
            ))}
        </ColorPickerSimpleStyled>
    );
};

export default ColorVariantSelector;
