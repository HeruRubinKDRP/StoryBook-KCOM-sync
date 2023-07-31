interface SlideContent {
    heading: string;
    paragraph: string;
    details? : string;
    finePrint: string;
    hyperlink: string;
}

export interface EyebrowBannerProps {
    contents: SlideContent[];
    height: string;
}
