export type ProductVariantColor = {
    inStock: boolean;
    colorValue: string;
    colorName: string;
};

export type ColorVariantProps = {
    variants: ProductVariantColor[];
    onVariantClick: (inStock: boolean, colorValue: string, colorName: string, index : number) => void
};