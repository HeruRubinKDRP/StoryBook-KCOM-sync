import KButton from "../Kbutton/KButton";
import React, {useEffect, useRef, useState} from "react";
import {VideoStyled} from "./Video.styles";
export interface Caption {
    startTime: number;
    endTime: number;
    text: string;
}

export interface iVideo{
    videoUrl : string;
    captions : Caption[];
    isPlaying : boolean;
    manageIsPlaying? : () => void;
    isMuted : boolean;
    manageIsMuted? : () => void;
}

export const Video=(props:iVideo)=>{
    //video reference
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    //track muted
    const [isMuted, setIsMuted] = useState(props.isMuted);

    const [captionVisible, setCaptionVisible] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    // ******* CAPTIONS RELATED - start ********
    const [captionText, setCaptionText] = useState("");


    const handlePlay = () => {
        setCaptionVisible(true);
    }

    const handlePause = () => {
        setCaptionVisible(false);
    }

    useEffect(() => {
        const videoElement = videoRef.current; // Store the current value in a variable
        if (!videoElement) return;

        const handleTimeUpdate = () => {
            if (!videoElement) return;
            const currentCaption = props.captions.find(
                caption => caption.startTime <= videoElement.currentTime && caption.endTime > videoElement.currentTime
            );
            if (currentCaption) {
                setCaptionText(currentCaption.text);
            } else {
                setCaptionText("");
            }
        };

        videoElement.addEventListener("timeupdate", handleTimeUpdate);
        videoElement.addEventListener("play", handlePlay);
        videoElement.addEventListener("pause", handlePause);

        return () => {
            if (videoElement) { // Use the stored value in the cleanup function
                videoElement.removeEventListener("timeupdate", handleTimeUpdate);
                videoElement.removeEventListener("play", handlePlay);
                videoElement.removeEventListener("pause", handlePause);
            }
        };
    }, [props.captions]);


    // ******* CAPTIONS RELATED - end ********



    //toggle muted
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            if(props.manageIsPlaying){
                props.manageIsPlaying();
            }
            setIsMuted(videoRef.current.muted);
            if(props.manageIsMuted){
                props.manageIsMuted();
            }
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const toggleFullScreen = () => {
        if (videoRef.current) {

            setIsFullScreen(!isFullScreen);
        }
    };


    const handlePlayAgain = () => {
        if (videoRef.current) {
            setIsPlaying(true);
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsVideoEnded(false);
        }
    };

    const handleOverlayClick = () => {
        setShowOverlay(false);
        handlePlayAgain();
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setIsVideoEnded(true);
        setShowOverlay(true);
    };


    return(
        <VideoStyled className={`video-container${isFullScreen ? ' fullscreen' : ''}`}>
            <video
                ref={videoRef}
                className="user-training-imagery"
                src={props.videoUrl}
                preload="auto"
                autoPlay={true}
                loop={false}
                muted={isMuted}
                onEnded={handleVideoEnd}
            />
            {captionVisible && (
                <div className="caption-overlay">
                    TODO make GSAP Typist
                    {/*<Typist key={captionText} cursor={{show: false}} avgTypingDelay={20} stdTypingDelay={5}>{captionText}</Typist>*/}
                </div>)
            }
            <div className="video-controls">
                <KButton
                    label=""
                    classes={`${ isMuted ? "volume-off" : "volume-on"} volume-button`}
                    iconStandard={`${ isMuted ? "icon-volume-off" : "icon-volume-on"}`}
                    buttonType="secondary"
                    iconPlacement="after-label"
                    actionFunc={()=>toggleMute()}
                    buttonWidth="fit-to-content"
                />
                <KButton
                    label=""
                    classes={`${ captionVisible ? "captions-on" : "captions-off"} captions-button`}
                    iconStandard={`${ captionVisible ? "closed-captioning-icon" : "closed-captioning-off-icon"}`}
                    buttonType="secondary"
                    iconPlacement="after-label"
                    actionFunc={()=>setCaptionVisible(!captionVisible)}
                    buttonWidth="fit-to-content"
                />
                <KButton
                    label=""
                    classes={`full-button`}
                    iconStandard={`icon-expand`}
                    buttonType="secondary"
                    iconPlacement="after-label"
                    actionFunc={()=>toggleFullScreen()}
                    buttonWidth="fit-to-content"
                />
            </div>
            {
                !isVideoEnded &&
                <KButton
                    label=""
                    classes={`${ isPlaying ? "playing" : "paused"} play-toggle-button`}
                    iconStandard={`${ isPlaying ? "none" : "icon-pause"}`}
                    buttonType="secondary"
                    iconPlacement="after-label"
                    actionFunc={()=>togglePlay()}
                    buttonWidth="fit-to-content"
                />
            }
            {
                isVideoEnded &&
                isVideoEnded && (
                    <div className="video-overlay" onClick={handleOverlayClick}>
                        <KButton
                            label=""
                            classes={`${isPlaying ? "playing" : "paused"} play-toggle-button play-again-button`}
                            buttonType="secondary"
                            iconStandard="replay-icon"
                            iconPlacement="after-label"
                            buttonWidth="fit-to-content"
                            actionFunc={props.manageIsPlaying}
                        />
                    </div>
                )
            }

        </VideoStyled>
    )
}