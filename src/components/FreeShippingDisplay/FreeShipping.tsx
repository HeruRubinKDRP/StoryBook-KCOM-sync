import React, {useState, useEffect} from 'react';
import {StyledFreeShippingDisplay} from "./FreeShippingStyled";
import {useResizeDetector} from "react-resize-detector";

export interface iFreeShippingProps {
    targetPrice: number;
    currentPrice: number;
}

const FreeShippingIndicator: React.FC<iFreeShippingProps> = ({targetPrice, currentPrice}) => {
    const [progress, setProgress] = useState<number>(0);
    const [remainingSpend, setRemainingSpend] = useState<number>(0);
    const {width, height, ref} = useResizeDetector({
        handleHeight: false,
        refreshMode: 'debounce',
        refreshOptions: {},
        refreshRate: 100,
        skipOnMount: false,
        onResize: () => {
        }
    });
    useEffect(() => {
        const progress = ((currentPrice / targetPrice) * 100).toFixed(1);
        const Remaining = () => {
            const remaining = targetPrice - currentPrice;
            if (remaining < 0) {
                return 0;
            }
            return Number(remaining.toFixed(2));

        }
        setRemainingSpend(Remaining());
        setProgress(Number(progress));
    }, [currentPrice, targetPrice]);

    return (
        <StyledFreeShippingDisplay
            className="free-shipping-indicator"
            ref={ref}
            widthX={width ? width : 0}
            heightY={height ? height : 0}
            progressPercentage={progress}
        >
            <div className="status-text">
                ${remainingSpend} from Free Shipping
            </div>
            <div className="progress-container">
                <div className="progress-fill" style={{width: `${progress}%`}}/>
            </div>
        </StyledFreeShippingDisplay>
    );
};

export default FreeShippingIndicator;
