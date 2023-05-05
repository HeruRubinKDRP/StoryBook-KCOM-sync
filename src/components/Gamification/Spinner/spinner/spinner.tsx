// Spinner.tsx
import React, {useRef, useState, useEffect} from 'react';
import {Promotion, PromotionItem} from '../PromoItem/Promotion';
import {getRandomWeightedIndex} from '../gamification-utils';
import {gsap} from 'gsap';
import {Draggable} from 'gsap/Draggable';
import {SpinnerStyled} from "./spinner.styled";
import Graphic from "../../../Graphic/Graphic";
import PromoClaim from "../PromoClaim/PromoClaim";

export type spinnerModeType = "traditional" | "icons-first" | "vertical-text";
// traditional has the text all spelled out
// icons-first has the text hidden and a large icon until the wheel stops spinning

export interface SpinnerProps {
    promotions: Promotion[];
    onSpinEnd: (selectedPromo: Promotion) => void;
    wheelRadius : number;
    spinnerMode : spinnerModeType;
}

function getAbsoluteRotation(element: HTMLElement): number {
    let currentElement: HTMLElement | null = element;
    let totalRotation = 0;

    while (currentElement) {
        const style = window.getComputedStyle(currentElement);
        const transform = style.transform;
        const match = /rotate\(([^)]+)deg\)/.exec(transform);

        if (match) {
            totalRotation += parseFloat(match[1]);
        }

        currentElement = currentElement.parentElement;
    }

    return totalRotation;
}


const Spinner: React.FC<SpinnerProps> = ({promotions, onSpinEnd, wheelRadius, spinnerMode}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canSpin, setCanSpin] = useState(true);
    const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);
    const[spinState, setSpinState] = useState<"spinning" | "stopped" | "spin-complete">("stopped");

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.registerPlugin(Draggable);
        // Add the get it to finish line
        function calculateFinalRotation(currentRotation: number, selectedIndex: number) {
            const angle = 360 / promotions.length;
            const targetAngle = 270 - (selectedIndex * angle) + 90; // Adjust the target angle based on the selected index
            const currentAngle = currentRotation % 360;
            const diff = targetAngle - currentAngle;
            const rotations = Math.ceil((diff + 360) / 360);
            return currentRotation + diff + rotations * 360;
        }


        const draggable = Draggable.create(containerRef.current, {
            type: 'rotation',
            throwProps: true,
            onDragStart: () => {
                console.log('drag start');
                if (!canSpin) {
                    draggable[0].disable();
                }
            },
            onRelease: () => {
                if (!containerRef.current) return;
                draggable[0].disable();
                const selectedIndex = getRandomWeightedIndex(promotions);
                const angle = 360 / promotions.length;
                const targetRotation = selectedIndex * angle + angle / 2;

                gsap.to(containerRef.current, {
                    rotation: `+=${targetRotation + 360 * 12}`,
                    duration: 3,
                    ease: 'none',
                    onComplete: () => {
                        const currentRotation: number = gsap.getProperty(containerRef.current, 'rotation') as number;


                        const finalRotation = calculateFinalRotation( currentRotation , selectedIndex);

                        // Create an image counter rotation a GSAP timeline
                        const tl = gsap.timeline();

                        // Add the counter-rotation animation for each image element to the timeline
                        // Calculate and set the counter-rotation for the child images
                        promotions.forEach((_, index) => {
                            const sliceElement = containerRef.current!.querySelector(`[data-promo-index="${index}"]`) as HTMLDivElement;
                            const imageElement = sliceElement.querySelector('img');

                            if (sliceElement && imageElement) {
                                const parentAbsoluteRotation = getAbsoluteRotation(sliceElement);
                                const childAbsoluteRotation = getAbsoluteRotation(imageElement);
                                const counterRotation = childAbsoluteRotation - parentAbsoluteRotation;

                                imageElement.style.transform = `rotate(${counterRotation}deg)`;
                            }
                        });



                        // Add another GSAP animation to rotate the spinner to the final position
                        gsap.to(containerRef.current, {
                            rotation: finalRotation,
                            duration: 1, // Adjust the duration as needed
                            ease: 'power2.out',
                            onComplete: () => {
                                console.log("Final rotation", gsap.getProperty(containerRef.current, 'rotation'));
                                // Enable draggable again when the final rotation is completed
                                onSpinEnd(promotions[selectedIndex]);
                                setSelectedPromo(promotions[selectedIndex]);
                                setSpinState("spin-complete");
                                //draggable[0].enable();
                            },
                        });
                    },

                });
            },


        });



        return () => {
            draggable[0].kill();
        };
    }, [containerRef, promotions, canSpin, onSpinEnd]);

    return (
        <SpinnerStyled width={wheelRadius * 2} height={wheelRadius * 2} className={`${spinState}`}>
            <div className="inner-ring">
                <div className="center-dot"></div>
            </div>
            <div className="pointer">
                <Graphic graphicName="indicator-trapezoid" />
            </div>
            <div className="spinner-outer" ref={containerRef} style={{position: 'relative', width:  wheelRadius * 2 , height: wheelRadius * 2 }}>
                {promotions.map((promo, index) => {
                    const angle = (360 / promotions.length) * index;
                    const angleRad = (angle * Math.PI) / 180; // Convert angle to radians
                    const radius = wheelRadius * 0.5; // Adjust the radius value according to the desired positioning

                    // Calculate the left and top positions based on the container's dimensions and the radius
                    const leftPosition = (wheelRadius) + radius * Math.cos(angleRad);
                    const topPosition = (wheelRadius) + radius * Math.sin(angleRad);

                    //calculate the height of each promo item based on the circumference of the wheel
                    const circumference = 2 * Math.PI * wheelRadius;
                    const promoHeight = (circumference / promotions.length) * (1 + (1 - ((promotions.length / 100)* 10) ) );

                    return (
                        <div
                            key={index}
                            className={`promo-item promo${index}`}
                            data-promo-index={index}
                            style={{
                                position: 'absolute',
                                top: `${topPosition}px`, // Use 'px' instead of '%'
                                left: `${leftPosition}px`, // Use 'px' instead of '%'
                                width: `${wheelRadius}px`, // Set the width to half of the radius
                                height: `${promoHeight}px`, // Set the height to the circumference divided by the number of items
                                transform: `translate(-50%, -50%) rotate(${angle}deg)`, // Add translate(-50%, -50%) to adjust the rotation around the center of the item
                            }}>

                            <PromotionItem
                                name={promo.name}
                                link={promo.link}
                                weight={promo.weight}
                                componentType={promo.componentType}
                                promoMode={promo.promoMode}
                                highlightedText={promo.highlightedText}
                                backgroundTexture={promo.backgroundTexture}
                                highlightImage={promo.highlightImage}
                                spinnerMode={spinnerMode}
                                imageCounterRotation={angle}
                            />
                        </div>
                    );
                })}
            </div>
            {selectedPromo ? <PromoClaim promotion={selectedPromo} onClaim={()=>{}} /> : null}

        </SpinnerStyled>
    );



};

export default Spinner;
