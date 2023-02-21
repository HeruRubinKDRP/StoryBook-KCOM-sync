import React, {useState, useRef} from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

interface Props {
    slides: React.ReactElement[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlidesContainer = styled.div<{ translateX: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${props => props.translateX}px);
  transition: transform 0.5s ease-out;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const Carousel: React.FC<Props> = ({slides}) => {
    const [translateX, setTranslateX] = useState(0);
    const [dragStart, setDragStart] = useState(0);
    const [dragEnd, setDragEnd] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef<HTMLDivElement>(null);

    const handleLeftClick = () => {
        if (slideIndex === 0) return;

        setTranslateX(translateX + slidesRef.current!.offsetWidth);
        setSlideIndex(slideIndex - 1);
    };

    const handleRightClick = () => {
        if (slideIndex === slides.length - 1) return;

        setTranslateX(translateX - slidesRef.current!.offsetWidth);
        setSlideIndex(slideIndex + 1);
    };

    const handleDrag = (e: any, data: any) => {
        setTranslateX(data.x + translateX);
    };

    const handleDragStop = (e: any, data: any) => {
        setDragEnd(data.x);

        const offsetWidth = slidesRef.current!.offsetWidth;
        const dragDiff = dragEnd - dragStart;
        let newSlideIndex = slideIndex;

        if (dragDiff > offsetWidth / 2) {
            newSlideIndex = Math.max(slideIndex - 1, 0);
        } else if (dragDiff < -offsetWidth / 2) {
            newSlideIndex = Math.min(slideIndex + 1, slides.length - 1);
        }
        setTranslateX(-newSlideIndex * offsetWidth);
        setSlideIndex(newSlideIndex);
    };

    return (
        <CarouselContainer>
            <LeftButton onClick={handleLeftClick}>{"<"}</LeftButton>
            <RightButton onClick={handleRightClick}>{">"}</RightButton>
            <Draggable
                defaultPosition={{x: 0, y: 0}}
                axis="x"
                onStart={(e, data) => setDragStart(data.x)}
                onStop={handleDragStop}
                onDrag={handleDrag}
            >
                <SlidesContainer className="slides-container"  translateX={translateX} ref={slidesRef} style={{width : 576 * 3}}>
                    {slides.map((slide, index) => (
                        <Slide key={index}>{slide}</Slide>
                    ))}
                </SlidesContainer>
            </Draggable>
        </CarouselContainer>
    );
};

export default Carousel;
