import React, {ReactElement} from "react";
import CardFlip from "./CardFlip";

export interface iCardFlipContainer{
    frontContent: ReactElement;
    backContent: ReactElement;
}

const CardFlipContainer = (props : iCardFlipContainer) => {
    const [sideShowing, setSideShowing] = React.useState<"front" | "back">("front");

    const handleFlip = () => {
        setSideShowing((prev) => (prev === "front" ? "back" : "front"));
    };

    return (
        <>
            <CardFlip
                sideShowing={sideShowing}
                frontContent={props.frontContent}
                backContent={props.backContent}
            />
            <button className="flip-btn" onClick={handleFlip}>Flip Card</button>
        </>
    );
};

export default CardFlipContainer;
