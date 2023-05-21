import React, { ReactElement } from "react";
import { CardInner, Front, Back, CardContainer } from "./card-flip.styled";
import {useResizeDetector} from "react-resize-detector";
import KButton from "../../Kbutton/KButton";
import {iconType, Igraphics} from "../../Graphic/Graphic";

interface CardProps {
    sideShowing: "front" | "back";
    frontContent: ReactElement;
    backContent: ReactElement;
    classes? : string;
    flipToBackButtonLabel? : string;
    flipToBackButtonIcon? : iconType;
    flipToFrontButtonLabel? : string;
    flipToFrontButtonIcon? : iconType;

}


const CardFlip: React.FC<CardProps> = ({
                                           flipToBackButtonLabel,
                                           flipToBackButtonIcon,
                                           flipToFrontButtonLabel,
                                           flipToFrontButtonIcon,
                                           sideShowing,
                                           frontContent, backContent,
                                           classes }) => {
    const [isInitialized, setIsInitialized] = React.useState(false);
    const [isFlipped, setIsFlipped] = React.useState<"front" | "back">(sideShowing);

    const {width, height, ref }=useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {},
    });

    React.useEffect(() => {
        setIsInitialized(true);
    }, []);

    React.useEffect(() => {
        if (isInitialized) {
            setIsFlipped(sideShowing);
        }
    }, [sideShowing, isInitialized]);

    const handleFlip = () => {
        setIsFlipped((prev) => (prev === "front" ? "back" : "front"));
    };



    return (
        <CardContainer ref={ref} className={`product-card ${classes}`} overallWidth={width ?? 0} overallHeight={height ?? 0}>
            <CardInner isFlipped={isFlipped !== "front"}>
                <Front className="card-front">
                    {frontContent}
                    <div className="cta-container">
                        <KButton
                            transitionType="expand-bg"
                            classes={`flip-btn`}
                            buttonWidth="fit-to-content"
                            label={ flipToBackButtonLabel ?? "Features"}
                            iconStandard={flipToBackButtonIcon ?? "info-icon"}
                            iconPlacement="after-label"
                            buttonType="primary"
                            actionFunc={ handleFlip}
                        />
                    </div>
                </Front>
                <Back className="card-back">
                    {backContent}
                    <div className="cta-container">
                        <KButton
                            transitionType="expand-bg"
                            classes={`flip-btn`}
                            buttonWidth="fit-to-content"
                            label={ flipToFrontButtonLabel ?? "Back"}
                            iconStandard={flipToFrontButtonIcon ?? "chevron-right"}
                            iconPlacement="after-label"
                            buttonType="primary"
                            actionFunc={ handleFlip  }
                        />
                    </div>
                </Back>
            </CardInner>
        </CardContainer>
    );
};

export default CardFlip;
