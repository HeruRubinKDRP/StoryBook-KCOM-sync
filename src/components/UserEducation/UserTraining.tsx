import React, { useState } from 'react'
import { iTabNav, Tabnav } from '../tabnav/tabnav'
import { useResizeDetector } from 'react-resize-detector'
import { UserTrainingStyled } from './UserTrainingStyled'
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";

export interface iUserTraining {
    Title: string
    content: {
        ContentItems: {
            Path: string
            Type: 'video' | 'image'
            Title: string
            Description: string
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

    const CreateElements = () => {
        const ListOfElements = []
        for (let i = 0; i < props.content.ContentItems.length; i++) {
            const contentItem = props.content.ContentItems[i]
            ListOfElements.push(
                <div className="user-training-content">
                    <div className="user-training-imagery-container">
                        {contentItem.Type === 'video' ? (
                            <video
                                className="user-training-imagery"
                                src={contentItem.Path}
                                preload="auto"
                                autoPlay={true}
                                loop={true}
                                muted={true}
                            ></video>
                        ) : (
                            <img
                                className="user-training-imagery"
                                src={contentItem.Path}
                                alt={contentItem.Title}
                            />
                        )}
                    </div>
                    <div className="user-training-text">
                        <h1>{props.content.ContentItems[i].Title}</h1>
                        <p>{props.content.ContentItems[i].Description}</p>
                    </div>
                </div>
            )
        }
        return ListOfElements
    }
    return (
        <UserTrainingStyled
            className={`user-training-overall-container ${getContainerQuery(
                viewportWidth
            )}`}
            ref={ref}
        >
            {/*<p>{viewportWidth}</p>*/}
            <Tabnav
                Title={props.Title}
                ContentItems={CreateElements()}
                TabButtons={props.content.TabButtons}
            />
        </UserTrainingStyled>
    )
}