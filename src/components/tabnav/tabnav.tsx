import React, {ReactElement, useEffect, useState} from 'react'
import {TabNavStyles} from './tabnavstyle'
import KButton from "../Kbutton/KButton";
import Graphic, {iconType} from '../Graphic/Graphic'

export interface iTabNav {
    TabButtons: string[]
    ContentItems: ReactElement[]
    Title?: string
    //pass in a function in case you want something
    getCurrentIndexFunction?: (selectedIndex: number) => void;
    selectedIndex?: number;
    shouldUpdateSelectedIndex?: boolean;
}


export const Tabnav = (props: iTabNav) => {
    const [selectedIndex, SetSelectedIndex] = useState<number>(props.selectedIndex ? props.selectedIndex : 0)
    const [ExpandMenuOpened, SetExpandMenuOpened] = useState(false)

    useEffect(() => {
        if (props.selectedIndex === undefined) {
            return;
        }
        SetSelectedIndex(props.selectedIndex);
    }, [props.selectedIndex]);


    const SelectedStateClass = (CurrentIndex: number) => {
        if (CurrentIndex == selectedIndex) {
            return 'selected'
        }
        return ''
    }

    const createButton = () => {
        const buttons: ReactElement[] = []
        for (let i = 0; i < props.TabButtons.length; i++) {
            buttons.push(
                <KButton
                    label={props.TabButtons[i]}
                    buttonType="secondary"
                    buttonWidth="fit-width"
                    transitionType="expand-bg"
                    classes={`tab-button ${SelectedStateClass(i)} button01 anim01`}
                    actionFunc={() => {
                        SetSelectedIndex(i)
                        SetExpandMenuOpened(false)
                        props.getCurrentIndexFunction && props.getCurrentIndexFunction(props.shouldUpdateSelectedIndex ? i+1 : i)
                    }}

                />
            )
        }
        return buttons
    }


    const createContent = () => {
        const content: ReactElement[] = []
        for (let i = 0; i < props.TabButtons.length; i++) {
            if (i == selectedIndex) {
                content.push(<>{props.ContentItems[i]}</>)
            }
        }
        return content
    }
    const navigate = () => {
        let UpdatedSelectedIndex = 0
        if (selectedIndex != props.ContentItems.length - 1) {
            UpdatedSelectedIndex = selectedIndex + 1
        }
        SetSelectedIndex(UpdatedSelectedIndex)
        SetExpandMenuOpened(false)
        props.getCurrentIndexFunction && props.getCurrentIndexFunction(UpdatedSelectedIndex)
    }


    return (
        <TabNavStyles className={'tab-nav-container'}>
            <div className="buttons-container">
                <div className="Title">{props.Title}</div>
                <div
                    className={`expand-menu-container ${ExpandMenuOpened ? 'open' : ''}`}
                >
                    <div className="menu-contents">{createButton()}</div>
                </div>
                <div className="TabCta">
                    <KButton
                        buttonType="primary"
                        buttonWidth="fit-width"
                        transitionType="expand-bg"
                        classes={`contents-menu-btn ExpandMenu`}
                        actionFunc={() => SetExpandMenuOpened(!ExpandMenuOpened)}
                        label={props.TabButtons[selectedIndex]}
                        iconPlacement="before-label"
                        iconStandard={ExpandMenuOpened ? 'chevron-down' : 'chevron-up'}
                    />
                    <KButton
                        classes="NextCTA"
                        label="Next"
                        buttonType="secondary"
                        iconStandard="chevron-right"
                        iconPlacement="after-label"
                        transitionType="expand-bg"
                        actionFunc={() => navigate()}
                    />
                </div>
            </div>
            {createContent()}
        </TabNavStyles>
    )
}