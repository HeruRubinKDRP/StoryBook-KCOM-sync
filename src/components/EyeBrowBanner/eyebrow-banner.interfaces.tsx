import {colorByNameType} from "../_utilities/color-name-to-value/colorNameToValue";

interface SlideContent {
    heading: string;
    paragraph: string;
    details? : string;
    finePrint?: string;
    hyperlink?: string;
    hyperlinkText? : string;
    color?: colorByNameType;
    ctaLink?: string;
    disclaimer : string;
}

export interface EyebrowBannerProps {
    contents: SlideContent[];
    overallHeight: string;
    displayMode : "dividers" | "chiclets";
    mainColor? : colorByNameType;
    mobileBreakPoint? : number;
    overrideBGColor? : string;
    overrideTextColor? : string;
}
