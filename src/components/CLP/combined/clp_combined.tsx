import {CLP_CombinedContainer_Styled} from "./Styled_CLP_Combined";
import {ClassicCardsContainer} from "../../Classic_components/cards/ClassicCardsContainer";
import {podItemT} from "../../../pages/myBrews";
import {podLibrary} from "../../../data/beverage-library";
import {useState} from "react";
import {BeverageQuickShop} from "../Beverage_QuickShop/BeverageQuickShop";
import {AddToCartJourneySmall} from "../../Experimental/Add-to-cart/small-version/AddToCartJourneySmall";
import {simplifiedPodItems} from "../../Experimental/Add-to-cart/AddToCartDemo";

export interface iCLP_Combined{
    podLibrary : podItemT[];
    cardsAlwaysShowCTA : boolean;
    edlpOffer : string;
    numberOfSuggestions : number;
    currentCartValue : number;
    freeShippingTarget : number;
}

export const CLP_Combined = (props: iCLP_Combined) => {

    const [quickShopOpen, setQuickShopOpen] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [selectedPod, setSelectedPod] = useState<number | 0>(0);


    const manageQuickShop = (open: boolean, index : number) => {
         setSelectedPod(index);
         setSnackBarOpen(false);
         setQuickShopOpen(open);
    }

    const manageAddToCart = () => {
        setQuickShopOpen(false);
        setSnackBarOpen(true);
    }

    const manageAddSuggestionToCart = (productID : number) => {
        setSelectedPod(productID);
        setSnackBarOpen(false);
        setQuickShopOpen(true);
    }

    const manageContinueShopping = () => {
        setQuickShopOpen(false);
        setSnackBarOpen(false);
    }

    const getModal = (open : boolean ) => {

        if (open) {
            return(
                    <BeverageQuickShop
                        productName={props.podLibrary[selectedPod].podName}
                        brand={props.podLibrary[selectedPod].brand}
                        productImageURL={props.podLibrary[selectedPod].productImagePrimaryPath ?? ""}
                        productPrices={props.podLibrary[selectedPod].productPrices ?? []}
                        boxSizes={props.podLibrary[selectedPod].boxSizes ?? []}
                        isSmartEligible={true}
                        edlpOffer={props.edlpOffer}
                        subscriptionVisible={true}
                        closeFunction={()=>setQuickShopOpen(false)}
                        addToCartFunction={()=>manageAddToCart()}
                    />
            )
        }
        return <></>
    }

    const getSnackBar= (open : boolean) => {
        if (open) {
            return(
                <AddToCartJourneySmall
                    selectedProduct={simplifiedPodItems( [podLibrary[selectedPod]] )[0]}
                    suggestedProducts={simplifiedPodItems(podLibrary.slice(0, 3))}
                    numberOfSuggestions={3}
                    currentCartTotal={props.numberOfSuggestions}
                    freeShippingTarget={props.currentCartValue}
                    closeFunc={()=>manageContinueShopping()}
                    addSuggestionToCartFunc={manageAddSuggestionToCart}
                />
            )
        }
        return <></>
    }

    return(
        <CLP_CombinedContainer_Styled>
                {getModal(quickShopOpen)}
                {getSnackBar(snackBarOpen)}
            <ClassicCardsContainer
                podLibrary={props.podLibrary}
                alwaysShowCTA={props.cardsAlwaysShowCTA}
                ctaAction={manageQuickShop}
            />
        </CLP_CombinedContainer_Styled>
    )
}