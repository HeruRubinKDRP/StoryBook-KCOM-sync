import {Dispatch, ReactElement, SetStateAction} from "react";
import {podItemT} from "../../../pages/myBrews";
import {ClassicCard, iClassicCard} from "./ClassicCard";
import {CardsContainerStyled} from "./CardsContainerStyled";
import {useResizeDetector} from "react-resize-detector";

export interface iClassicCardsContainer {
    podLibrary: podItemT[];
    alwaysShowCTA: boolean;
    ctaAction : (open: boolean, index: number) => (void);
    classes?   : string;
}

export const ClassicCardsContainer = (props: iClassicCardsContainer) => {

    const {width, height, ref} = useResizeDetector({
        refreshMode: "throttle",
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false
        }, onResize: () => {
        },

    })



    const getCards = () => {
        let cards: ReactElement[] = [];
        for (let i = 0; i < props.podLibrary.length; i++) {
            cards.push(
                <ClassicCard
                    productIndex={i}
                    key={i}
                    productImage={props.podLibrary[i].productImagePrimaryPath ?? ""}
                    productName={props.podLibrary[i].podName}
                    bannerType={"none"}
                    brandName={props.podLibrary[i].brand}
                    productPrices={props.podLibrary[i].productPrices ?? []}
                    alwaysShowCTA={props.alwaysShowCTA}
                    boxSizes={props.podLibrary[i].boxSizes ?? []}
                    selectedProductOverride={1}
                    ctaAction={props.ctaAction}
                />
            )
        }

        return cards;
    }

    const getContainerQueries=(width:number)=>{
        if(!width){return}

        if(width<1000 && width >= 400){
            return "mobile"
        }else if(width < 440){
            return "small mobile"
        } 

        return "desktop"

    }


    return (
        <CardsContainerStyled ref={ref} className={`${getContainerQueries(width || 0)}`}>
            <div className="inner-container">
                {getCards()}
            </div>
        </CardsContainerStyled>
    )
}

