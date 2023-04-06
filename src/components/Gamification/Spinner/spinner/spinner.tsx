// Spinner.tsx
import React, {useRef, useState, useEffect} from 'react';
import {Promotion} from '../Promotion';
import {getRandomWeightedIndex} from '../gamification-utils';
import {gsap} from 'gsap';
import {Draggable} from 'gsap/Draggable';
import {SpinnerStyled} from "./spinner.styled";

export interface SpinnerProps {
    promotions: Promotion[];
    onSpinEnd: (selectedPromo: Promotion) => void;
    wheelRadius : number;
}

const Spinner: React.FC<SpinnerProps> = ({promotions, onSpinEnd, wheelRadius}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canSpin, setCanSpin] = useState(true);
    const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.registerPlugin(Draggable);
        // Add the get it to finish line
        function calculateFinalRotation(currentRotation: number, selectedIndex: number) {
            const angle = 360 / promotions.length;
            const targetAngle = 270 - (selectedIndex * angle); // Adjust the target angle based on the selected index
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
                    duration: 5,
                    ease: 'none',
                    onComplete: () => {
                        setSelectedPromo(promotions[selectedIndex]);
                        onSpinEnd(promotions[selectedIndex]);
                        const currentRotation: string = (gsap.getProperty(containerRef.current, 'rotation')).toString();
                        const finalRotation = calculateFinalRotation(parseInt(currentRotation), selectedIndex);

                        // Add another GSAP animation to rotate the spinner to the final position
                        gsap.to(containerRef.current, {
                            rotation: finalRotation,
                            duration: 2.5, // Adjust the duration as needed
                            ease: 'power2.out',
                            onComplete: () => {
                                console.log("Final rotation", gsap.getProperty(containerRef.current, 'rotation'));
                                // Enable draggable again when the final rotation is completed
                                draggable[0].enable();
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
        <SpinnerStyled width={wheelRadius} height={wheelRadius}>
            <div className="spinner-outer" ref={containerRef} style={{position: 'relative', width: '300px', height: '300px'}}>
                {promotions.map((promo, index) => {
                    const angle = (360 / promotions.length) * index;
                    const angleRad = (angle * Math.PI) / 180; // Convert angle to radians
                    const radius = wheelRadius - 50; // Adjust the radius value according to the desired positioning

                    // Calculate the left and top positions based on the container's dimensions and the radius
                    const leftPosition = (wheelRadius) + radius * Math.cos(angleRad);
                    const topPosition = (wheelRadius) + radius * Math.sin(angleRad);

                    return (
                        <div
                            key={index}
                            className="promo-item"
                            style={{
                                position: 'absolute',
                                top: `${topPosition}px`, // Use 'px' instead of '%'
                                left: `${leftPosition}px`, // Use 'px' instead of '%'
                                width: '100px',
                                height: 'auto',
                                transform: `translate(-50%, -50%) rotate(${angle}deg)`, // Add translate(-50%, -50%) to adjust the rotation around the center of the item
                            }} >
                            <div className="promo-contents">
                                <h3>{promo.name}</h3>
                                <img
                                    key={promo.name}
                                    src={promo.link}
                                    alt={promo.name}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <h2>{selectedPromo?.name}</h2>
        </SpinnerStyled>
    );



};

export default Spinner;
