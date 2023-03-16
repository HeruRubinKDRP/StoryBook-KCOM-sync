import KButton from "../Kbutton/KButton";
import React, {useRef, useState} from "react";

export interface iVideo{
    videoUrl : string;
}

export const Video=(props:iVideo)=>{
    //video reference
    const videoRef = useRef<HTMLVideoElement>(null!);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    //track muted
    const [isMuted, setIsMuted] = useState(false);
    //toggle muted
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
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
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }

    };

    const handlePlayAgain = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsVideoEnded(false);
        }
    };

    return(
        <div className="video-container">
            <video
                ref={videoRef}
                className="user-training-imagery"
                src={props.videoUrl}
                preload="auto"
                autoPlay={true}
                loop={false}
                muted={false}
            />
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
                <KButton
                    label="Play Again"
                    classes={`${ isPlaying ? "playing" : "paused"} play-toggle-button play-again-button`}

                    buttonType="secondary"
                    iconStandard="icon-play"
                    iconPlacement="after-label"
                    actionFunc={()=>handlePlayAgain()}
                    buttonWidth="fit-to-content"
                />
            }


        </div>
    )
}