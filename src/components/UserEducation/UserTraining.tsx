import React, {createRef, useEffect, useRef, useState} from 'react'
import { iTabNav, Tabnav } from '../tabnav/tabnav'
import { useResizeDetector } from 'react-resize-detector'
import { UserTrainingStyled } from './UserTrainingStyled'
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";
import KButton from "../Kbutton/KButton";
import {Caption, Video} from "../VideoComponent/Video";
import {PopUp} from "../PopUp/PopUp";
import Image from "next/image";

export type mediaType = "video" | "image" | "text" | "audio" | "other";

export interface iUserTraining {
    Title: string
    content: {
        ContentItems: {
            MobilePath: string;
            MobileType: mediaType;
            MobileTitle: string
            MobileDescription: string
            DesktopPath: string;
            DesktopType: mediaType;
            DesktopTitle: string;
            DesktopDescription: string;
            captions: Caption[];
        }[]
        TabButtons: string[]

    }
}


export const UserTraining = (props: iUserTraining) => {
    const { width, height, ref } = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {},
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {
            return
        }
    })

    const [popUpIsOpen, setPopUpIsOpen] = useState(false);

    // this is to track what the index is inside the Tabnav, assuming starts at zero
    const [currentIndex, setCurrentIndex] = useState(0);
    // this is to manage externally modifying the tab control's index
    const [externalIndex, setExternalIndex] = useState(0);

    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const manageIsPlaying =()=>{
        setIsPlaying(!isPlaying)
    }

    const manageIsMuted =()=>{
        setIsMuted(!isMuted)
    }
    // Add a state variable to keep track of the current viewport width
    const [viewportWidth, setViewportWidth] = useState<number | undefined>(width)


    // Update the viewportWidth state variable whenever the viewport width changes
    if (width !== undefined && viewportWidth !== width) {
        setViewportWidth(width)
    }

    const CreateContentElements = (isDesktop : boolean) => {
        const ListOfElements = [];

        for (let i = 0; i < props.content.ContentItems.length; i++) {
            const contentItem = props.content.ContentItems[i]
            ListOfElements.push(
                <div className="user-training-content">
                    <div className="user-training-imagery-container">
                        {contentItem.DesktopType === 'video' ? (
                            <Video
                                key={i}
                                videoUrl={isDesktop? contentItem.DesktopPath : contentItem.MobilePath}
                                captions={contentItem.captions}
                                isPlaying={isPlaying}
                                manageIsPlaying={manageIsPlaying}
                                isMuted={isMuted}
                                manageIsMuted={manageIsMuted}
                            ></Video>
                        ) : (
                            <Image
                                className="user-training-imagery"
                                src={isDesktop? contentItem.DesktopPath : contentItem.MobilePath}
                                alt={isDesktop? contentItem.DesktopTitle : contentItem.MobileTitle}
                            />
                        )}
                    </div>
                    <div className="user-training-text">
                        <h1>{ isDesktop? props.content.ContentItems[i].DesktopTitle : props.content.ContentItems[i].MobileTitle }</h1>
                        <p>{ isDesktop? props.content.ContentItems[i].DesktopDescription : props.content.ContentItems[i].MobileDescription}</p>
                    </div>
                </div>
            )
        }
        return ListOfElements
    }

    const manageBackButton = () => {
        console.log("externalIndex in backbutton:", externalIndex);
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);
    };


    useEffect(() => {
        if (currentIndex === 0) {
            return;
        }
        setExternalIndex(currentIndex - 1);
    }, [currentIndex]);




    const manageCurrentTabIndex = (selectedIndex : number) => {
        setCurrentIndex(selectedIndex);
    }

    useEffect(() => {
        console.log("externalIndex changed:", externalIndex);
    }, [externalIndex]);

    return (
        <PopUp
            hasBackButton={true}
            backButtonFunc={manageBackButton}
            isOpen={true}
            hasHeader={true}
            windowTitle=""
            classes={`white-bg modal-${getContainerQuery(width)}`}
            hasVeil={false}

        >
            <UserTrainingStyled
                className={`user-training-overall-container ${getContainerQuery(viewportWidth)}`}
                ref={ref}
            >
                <Tabnav
                    shouldUpdateSelectedIndex={true}
                    selectedIndex={externalIndex}
                    getCurrentIndexFunction={manageCurrentTabIndex}
                    Title={props.Title}
                    ContentItems={CreateContentElements(viewportWidth !== undefined && viewportWidth > 768)}
                    TabButtons={props.content.TabButtons}
                />



            </UserTrainingStyled>
        </PopUp>
    )
}