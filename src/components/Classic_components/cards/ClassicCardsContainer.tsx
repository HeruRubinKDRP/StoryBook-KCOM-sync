import {ReactElement} from "react";
import {podItemT} from "../../../pages/myBrews";
import {ClassicCard, iClassicCard} from "./ClassicCard";
import {CardsContainerStyled} from "./CardsContainerStyled";
import {useResizeDetector} from "react-resize-detector";

export interface iClassicCardsContainer {
    podLibrary: podItemT[];
    alwaysShowCTA: boolean;
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
                    key={i}
                    productImage={props.podLibrary[i].productImagePrimaryPath}
                    productName={props.podLibrary[i].podName}
                    bannerType={"none"}
                    brandName={props.podLibrary[i].brand}
                    productPrices={[10.49, 16.99, 49.99, 53.96]}
                    alwaysShowCTA={props.alwaysShowCTA}
                    boxSizes={[12, 24, 72, 96]}
                    selectedProductOverride={1}
                />
            )
        }

        return cards;
    }

    const getContainerQueries=(width:number)=>{
        if(!width){return}

        if(width<1000 && width >= 400){
            return "mobile"
        }else if(width < 400){
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

