import React, { useState } from 'react'
import { iTabNav, Tabnav } from '../tabnav/tabnav'
import { useResizeDetector } from 'react-resize-detector'
import { UserTrainingStyled } from './UserTrainingStyled'
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";

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

    // Add a state variable to keep track of the current viewport width
    const [viewportWidth, setViewportWidth] = useState<number | undefined>(width)

    // Update the viewportWidth state variable whenever the viewport width changes
    if (width !== undefined && viewportWidth !== width) {
        setViewportWidth(width)
    }

    const CreateContentElements = (isDesktop : boolean) => {
        const ListOfElements = []


        for (let i = 0; i < props.content.ContentItems.length; i++) {
            const contentItem = props.content.ContentItems[i]
            ListOfElements.push(
                <div className="user-training-content">
                    <div className="user-training-imagery-container">
                        {contentItem.DesktopType === 'video' ? (
                            <video
                                className="user-training-imagery"
                                src={isDesktop? contentItem.DesktopPath : contentItem.MobilePath}
                                preload="auto"
                                autoPlay={true}
                                loop={true}
                                muted={true}
                            ></video>
                        ) : (
                            <img
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
    return (
        <UserTrainingStyled
            className={`user-training-overall-container ${getContainerQuery(viewportWidth)}`}
            ref={ref}
        >
            <Tabnav
                Title={props.Title}
                ContentItems={CreateContentElements( viewportWidth !== undefined && viewportWidth > 768)}
                TabButtons={props.content.TabButtons}
            />
        </UserTrainingStyled>
    )
}