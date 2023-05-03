import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import ProductInfoCard, { iProductInfoCardProps } from '../SimpleCard/SimpleCard';
import {OuterMostCLP_Container, PaginationButton, PaginationWrapper, ProductListWrapper} from "./product-list.styles";
import {useResizeDetector} from "react-resize-detector";

const BrewerQuickShop = lazy(() => import('../../Experimental/BrewerQuickShop/BrewerQuickShop'));
//import {BrewerQuickShop} from "../../Experimental/BrewerQuickShop/BrewerQuickShop";
import {AddToCartJourneySmall} from "../../Experimental/Add-to-cart/small-version/AddToCartJourneySmall";
import {simplifiedPodItems} from "../../Experimental/Add-to-cart/AddToCartDemo";
import {podLibrary} from "../../../pages/myBrews";
import {iStickyHeader, StickyHeader} from "../../Sticky Header/StickyHeader";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import KButton from "../../Kbutton/KButton";
import {getContainerQuery} from "../../Experimental/Add-to-cart/reusable css/container-queries";
import {BeverageQuickShop} from "../Beverage_QuickShop/BeverageQuickShop";
import CardFlipContainer from "../../Animated Effects/CardFlip/CardFlipContainer";
import CardFlip from "../../Animated Effects/CardFlip/CardFlip";
import { ComponentFilterStyle, FiltersContainerStyle } from '../Brewer_CLP_exploration/Brewer-CLP-combine-styled';
import { Filters } from '../Brewer_CLP_exploration/Brewer-CLP-filters';
import { BrewerCLPStyled } from '../Brewer_CLP_exploration/Brewer-CLP-grid-styled';

export interface ProductListProps {
    products: iProductInfoCardProps[];
    ratingVisible: boolean;
    columns?: number;
    promotionalContent?: React.ReactNode;
    pageSize?: number;
    columnsHugeScreen : number;
    columnsLargeScreen : number;
    columnsMediumScreen : number;
    columnsSmallScreen : number;
    stickyHeader: iStickyHeader;
    stickyHeaderMode: "slim" | "full";
    filters: JSX.Element;
}


const ProductList: React.FC<ProductListProps> = (props : ProductListProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [rows, setRows] = useState(1);
    const [currentColumns, setCurrentColumns] = useState(1);

    const headerRef = React.createRef<HTMLDivElement>();

    const [quickShopOpen, setQuickShopOpen] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    // TODO refactor to be generic not selected pod but selected product
    const [selectedPod, setSelectedPod] = useState<number | 0>(0);


    const manageQuickShop = (open: boolean, index : number) => {
        setSelectedPod(index);
        setSnackBarOpen(false);
        setQuickShopOpen(open);
    }

    const manageAddToCart = () => {
        console.log("clicked add to cart");
        setQuickShopOpen(false);
        setSnackBarOpen(true);
    }

    const getModal = (open : boolean ) => {
        if(open){
            switch(props.products[selectedPod].productType){
                case "pod":
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <button className="zzz" onClick={()=>manageAddToCart()} />
                            <BeverageQuickShop
                                productName={props.products[selectedPod].name}
                                brand={props.products[selectedPod].name}
                                productImageURL={props.products[selectedPod].image}
                                productPrices={props.products[selectedPod].prices.map((price, index) => {return price.price})}
                                boxSizes={ props.products[selectedPod].prices.map((price, index) => {return Number(price.variant.quantity) }) }
                                isSmartEligible={true}
                                edlpOffer={""}
                                subscriptionVisible={true}
                                closeFunction={()=>setQuickShopOpen(false)}
                                addToCartFunction={()=>manageAddToCart()}
                            />
                        </Suspense>
                    )

                case "brewer":
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BrewerQuickShop
                                closeFunc={()=>setQuickShopOpen(false)}
                                productName={props.products[selectedPod].name}
                                productNameExtended={props.products[selectedPod].name}
                                hasKSK={true}
                                hasCoupon={true}
                                couponMessage={""}
                                couponAppliedMessage={""}
                                learnMoreMessaging={""}
                                addToCartFunction={()=>manageAddToCart()}
                                carousel={
                                    {
                                        slideImageURLs : [
                                            {
                                                path : props.products[selectedPod].image,
                                                altText : "",
                                                linkTo : ""
                                            }
                                        ]}
                                }
                                maxQuantityAllowed={5}
                                colorVariants={[

                                ]}

                                mainFlagColor="KSK"
                                mainFlagLabel="KSK"
                                KSK_BannerMessage="KSK"
                                portalTarget="root"
                                hasFreeShipping={true}
                                freeShippingMessage="Ships for free"
                                starRating={{
                                    ratingNumber : 4,
                                    totalNumberOfReviews : 20,
                                    totalNumberOfStars : 5
                                }}

                            />
                        </Suspense>
                    )
            }
        }

    }

    const {width, height, ref } = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false
        },
        onResize: () => {},
    });

    useEffect(() => {
        const totalRows = Math.ceil(props.products.length / (props.columns || 1));
        setRows(totalRows);
        setTotalPages(Math.ceil(totalRows / (props.pageSize || 1)));
        setCurrentPage(0);
    }, [props.products, props.columns, props.pageSize]);

    useEffect(() => {
        dynamicColumns(width || screen.width);
        console.log("dynamic column use effect");
    }, [width, props.columnsLargeScreen, props.columnsMediumScreen, props.columnsSmallScreen, props.columnsHugeScreen]);

    const dynamicColumns = (widthX : number)=>{
        if(widthX>1600){
            setCurrentColumns(props.columnsHugeScreen);
        }else if(widthX>800 && widthX<=1600){
            setCurrentColumns(props.columnsLargeScreen);
        }else if(widthX>420 && widthX<=800){
            setCurrentColumns(props.columnsMediumScreen);
        }else{
            setCurrentColumns(props.columnsSmallScreen);
        }

        console.log("dynamic column setCurrentColumns");
    }



    const handlePreviousPage = () => {
        setCurrentPage((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getVisibleProducts = () => {
        const startIndex = currentPage * (props.pageSize || 0) * (props.columns || 0);
        const endIndex = startIndex + (props.pageSize || 0) * (props.columns || 0);
        return props.products.slice(startIndex, endIndex);
    };

    const visibleProducts = getVisibleProducts();

    const getDynamicStyles=(widthX : number)=>{
        return `--overallWidth : ${widthX}px;`
    }

    const manageContinueShopping = () => {
        setQuickShopOpen(false);
        setSnackBarOpen(false);
    }

    const manageAddSuggestionToCart = (productID : number) => {
        setSelectedPod(productID);
        setSnackBarOpen(false);
        setQuickShopOpen(true);
    }

    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => {
        setIsVisible(!isVisible)
    }
    const getSnackBar= (open : boolean) => {
        if (open) {
            return(
                <AddToCartJourneySmall
                    selectedProduct={props.products[selectedPod]}
                    suggestedProducts={simplifiedPodItems(podLibrary.slice(0, 3))}
                    numberOfSuggestions={3}
                    currentCartTotal={3}
                    freeShippingTarget={35}
                    closeFunc={()=>manageContinueShopping()}
                    addSuggestionToCartFunc={manageAddSuggestionToCart}
                />
            )
        }
        return <></>
    }

    return (
        <div>
            <StickyHeader
                stickyHeaderMode={props.stickyHeaderMode}
                navigationRelated={{
                sizingMode: props.stickyHeader.navigationRelated.sizingMode,
                loggedIn: props.stickyHeader.navigationRelated.loggedIn,
                emailErrorMessage: props.stickyHeader.navigationRelated.emailErrorMessage,
                emailSuccessMessage: props.stickyHeader.navigationRelated.emailSuccessMessage,
                emailExplanationText: props.stickyHeader.navigationRelated.emailExplanationText,
                placeHolderText: props.stickyHeader.navigationRelated.placeHolderText,
                defaultActiveHoverIndex: -1,
                submitButtonText: props.stickyHeader.navigationRelated.submitButtonText,
                isNobo: props.stickyHeader.navigationRelated.isNobo,
                navItems: props.stickyHeader.navigationRelated.navItems
            }}
                headerRef={headerRef}
            >
                <div className="purchase-options-container">
                    <KButton
                        label="Filters"
                        buttonType="primary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard="chevron-down"
                        transitionType="expand-bg"
                        onClick={handleClick}
                    />
                    <KButton
                        classes="secondary-btn"
                        label=""
                        buttonType="text-icon-noBG"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard="icon-account"
                        transitionType="expand-bg"
                    />
                    <KButton
                        classes="secondary-btn"
                        label=""
                        buttonType="text-icon-noBG"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard="icon-cart"
                        transitionType="expand-bg"
                    />

                </div>
            </StickyHeader>
            {getModal(quickShopOpen)}
            {getSnackBar(snackBarOpen)}
            <OuterMostCLP_Container ref={ref} className={``} >
                <FiltersContainerStyle>
                    <Filters isVisible={isVisible}/>
                </FiltersContainerStyle>
                <div className="right-part">
                <ComponentFilterStyle>
                    <div className={"ksk-toggle"}>Keurig Starter Kit</div>
                    <button className="filters-button" onClick={handleClick}>
                        {isVisible ? 'Hide Filters' : 'Show Filters'}
                    </button>
                    <div className={"sort-by"}>Sort by
                        <div>Popularity (all time)</div>
                    </div>
                </ComponentFilterStyle>
                    <BrewerCLPStyled>
                {props.promotionalContent && <div>{props.promotionalContent}</div>}
                <ProductListWrapper
                    dynamicStyles={getDynamicStyles(width || screen.width)} columns={currentColumns || 1} rows={rows}>
                    {visibleProducts.map((product, index) => (
                        <CardFlip
                            frontContent={
                            <ProductInfoCard
                                key={index}
                                prices={product.prices}
                                priceDescriptor={product.priceDescriptor}
                                image={product.image}
                                brand={product.brand}
                                name={product.name}
                                productType={product.productType}
                                ratingVisible={props.ratingVisible}
                                classes={`${getContainerQuery(width)} in-clp`}
                                rating={{
                                    totalNumberOfStars : 5,
                                    totalNumberOfReviews: product.rating.totalNumberOfReviews || 100,
                                    ratingNumber: product.rating.ratingNumber || 4.6,
                                }} onClick={()=>manageQuickShop(true, index)}
                            />
                        }
                            backContent={<h1>Back</h1>}
                            sideShowing="front"
                            classes={ product.productType == "brewer" ? "brewer-card" : "pod-card"}
                        />


                    ))}
                </ProductListWrapper>
                    </BrewerCLPStyled>
                </div>
                {totalPages > 1 && (
                    <PaginationWrapper>
                        <PaginationButton disabled={currentPage === 0} onClick={handlePreviousPage}>
                            Previous
                        </PaginationButton>
                        {Array.from(Array(totalPages)).map((_, index) => (
                            <PaginationButton
                                key={index}
                                disabled={currentPage === index}
                                onClick={() => setCurrentPage(index)}
                            >
                                {index + 1}
                            </PaginationButton>
                        ))}
                        <PaginationButton
                            disabled={currentPage === totalPages - 1}
                            onClick={handleNextPage}
                        >
                            Next
                        </PaginationButton>
                    </PaginationWrapper>
                )}
                <div className="backing-main"></div>
            </OuterMostCLP_Container>
        </div>
    );
};

export default ProductList;
