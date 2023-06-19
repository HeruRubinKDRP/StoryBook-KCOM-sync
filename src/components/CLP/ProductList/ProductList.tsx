import React, {useState, useEffect, lazy, Suspense} from 'react';
import ProductInfoCard, {filterDataItemT} from '../SimpleCard/SimpleCard';
import {iProductInfoCardProps, tCardMode, tPresentationMode} from "../product-card.interfaces";
import {
    CLP_Page_Styled,
    OuterMostCLP_Container,
    PaginationButton,
    PaginationWrapper,
    ProductListWrapper
} from "./product-list.styles";
import {useResizeDetector} from "react-resize-detector";
import {ProductListProps, iFiltersWrapper, searchObject} from "./product-list.interfaces";

const BrewerQuickShop = lazy(() => import('../../Experimental/BrewerQuickShop/BrewerQuickShop'));
import {AddToCartJourneySmall} from "../../Experimental/Add-to-cart/small-version/AddToCartJourneySmall";
import {simplifiedPodItems} from "../../Experimental/Add-to-cart/AddToCartDemo";
import {podLibrary} from "../../../data/beverage-library";
import {iStickyHeader, StickyHeader} from "../../Sticky Header/StickyHeader";
import KButton from "../../Kbutton/KButton";
import {getContainerQuery} from "../../Experimental/Add-to-cart/reusable css/container-queries";
import {BeverageQuickShop} from "../Beverage_QuickShop/BeverageQuickShop";
import CardFlip from "../../Animated Effects/CardFlip/CardFlip";
import CardBack from "../SimpleCard/CardBack/CardBack";
import SaleToggle from 'components/SaleToggle/sale-toggle';
import Graphic from 'components/Graphic/Graphic';



import {
    ComponentFilterStyle,
    FiltersContainerStyle,
    SortSelect,
    SortSelectWrapper
} from '../CLP_exploration/Brewer-CLP-combine-styled';
import {Filters as BeveragesFilters} from '../CLP_exploration/Beverages-CLP-filters';
import {Filters as BrewerFilters} from '../CLP_exploration/Brewer-CLP-filters';
import {BrewerCLPStyled} from '../CLP_exploration/Brewer-CLP-grid-styled';
import {filterOptionsT} from "../../../data/brewer-library";
import {iCategoryItem} from "../../Filters/FiltersCenter/FiltersCenter";
import {CardAggregator} from "../CardAggregator";
import {ContentItem} from "../../ContentComponents/ContentComponent";

const Filters = (props:iFiltersWrapper) => {

    if (props.type === 'beverages') {
        return <BeveragesFilters isVisible={props.isVisible} filtersFunction={props.filtersFunction} />;
    } else if (props.type === 'brewer') {
        return <BrewerFilters isVisible={props.isVisible} filtersDefiniton={props.filtersDefinition} filtersFunction={props.filtersFunction}/>;
    } else {
        return null;
    }
};

const ProductList = (props: ProductListProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [rows, setRows] = useState(1);
    const [currentColumns, setCurrentColumns] = useState(1);
    const headerRef = React.createRef<HTMLDivElement>();
    const [quickShopOpen, setQuickShopOpen] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    // TODO refactor to be generic not selected pod but selected product
    const [selectedPod, setSelectedPod] = useState<number | 0>(0);

    const [searchObjects, setSearchObjects] = useState<searchObject[]>([])
    const [filtersVisible, setFiltersVisible] = useState(false)
    const [visibleProducts, setVisibleProducts] = useState<iProductInfoCardProps[]>([]);

    const [activeFilters, setActiveFilters] = useState<filterOptionsT[]>([])
    const [sortBy, setSortBy] = useState("popularity");


    const {width, height, ref} = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 400,
        refreshOptions: {
            leading: true,
            trailing: true
        },
        onResize: () => {
        },
    });

    const manageQuickShop = (open: boolean, index: number) => {
        setSelectedPod(index);
        setSnackBarOpen(false);
        setQuickShopOpen(open);
    }

    useEffect(() => {
        const totalRows = Math.ceil(props.products.length / (props.columns || 1));
        setRows(totalRows);
        setTotalPages(Math.ceil(totalRows / (props.pageSize || 1)));
        setCurrentPage(0);
    }, [props.products, props.columns, props.pageSize]);

    useEffect(() => {
        dynamicColumns(width || screen.width);
    }, [width, props.columnsLargeScreen, props.columnsMediumScreen, props.columnsSmallScreen, props.columnsHugeScreen]);

    useEffect(() => {
        setVisibleProducts(getVisibleProducts());
    },[currentPage, sortBy, activeFilters, props.products]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    const manageAddToCart = () => {
        console.log("clicked add to cart");
        setQuickShopOpen(false);
        setSnackBarOpen(true);
    }
    const getModal = (open: boolean) => {
        if (open) {
            switch (props.products[selectedPod].productType) {
                case "pod":
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <button className="zzz" onClick={() => manageAddToCart()}/>
                            <BeverageQuickShop
                                productName={props.products[selectedPod].name}
                                brand={props.products[selectedPod].name}
                                productImageURL={props.products[selectedPod].image}
                                productPrices={props.products[selectedPod].prices.map((price, index) => {
                                    return price.price
                                })}
                                boxSizes={props.products[selectedPod].prices.map((price, index) => {
                                    return Number(price.variant.quantity)
                                })}
                                isSmartEligible={true}
                                edlpOffer={""}
                                subscriptionVisible={true}
                                closeFunction={() => setQuickShopOpen(false)}
                                addToCartFunction={() => manageAddToCart()}
                            />
                        </Suspense>
                    )

                case "brewer":
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BrewerQuickShop
                                closeFunc={() => setQuickShopOpen(false)}
                                productName={props.products[selectedPod].name}
                                productNameExtended={props.products[selectedPod].name}
                                hasKSK={true}
                                hasCoupon={true}
                                couponMessage={""}
                                couponAppliedMessage={""}
                                learnMoreMessaging={""}
                                addToCartFunction={() => manageAddToCart()}
                                carousel={{
                                    slideImageURLs: [
                                        {
                                            path: props.products[selectedPod].image,
                                            altText: "",
                                            linkTo: ""
                                        }
                                    ]
                                }}
                                maxQuantityAllowed={5}
                                colorVariants={[]}
                                mainFlagColor="KSK"
                                mainFlagLabel="KSK"
                                KSK_BannerMessage="KSK"
                                portalTarget="root"
                                hasFreeShipping={true}
                                freeShippingMessage="Ships for free"
                                starRating={{
                                    ratingNumber: 4,
                                    totalNumberOfReviews: 20,
                                    totalNumberOfStars: 5
                                }} learnMoreTitleKSK={'Why choose a Keurig Starter Kit?'} learnMoreTitleBrewerOnly={''} learnMoreMessagingKSK={''}
                                learnMoreMessagingBrewerOnly={''}
                            />
                        </Suspense>
                    )
            }
        }

    }

    const dynamicColumns = (widthX: number) => {
        if (widthX > 1800) {
            setCurrentColumns(props.columnsHugeScreen);
        } else if (widthX > 900 && widthX <= 1800) {
            setCurrentColumns(props.columnsLargeScreen);
        } else if (widthX > 420 && widthX <= 900) {
            setCurrentColumns(props.columnsMediumScreen);
        } else {
            setCurrentColumns(props.columnsSmallScreen);
        }
    }

    const handlePreviousPage = () => {
        setCurrentPage((prev) => prev - 1);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    //SEARCH
    const getVisibleProducts = () => {

        let productsFiltered = props.products;
        if (activeFilters.length > 0) {
            productsFiltered = productsFiltered.filter(product =>
                // If filterData does not exist, return false (exclude this product)
                product.filterData ?
                    activeFilters.every(activeFilter => {
                        // find a filterData in the product that includes the active filter
                        const filterDataItem = product.filterData!.find(data =>
                            data.filterValues.includes(activeFilter)
                        );
                        // if no such filterData was found, exclude this product
                        return Boolean(filterDataItem);
                    }) : false
            );
        }
        console.log("productsFiltered", productsFiltered);


        const startIndex = currentPage * (props.pageSize || 0) * (props.columns || 0);
        const endIndex = startIndex + (props.pageSize || 0) * (props.columns || 0);
        return productsFiltered.slice(startIndex, endIndex);
    };


    const getDynamicStyles = (widthX: number) => {
        return `--overallWidth : ${widthX}px;`
    }

    const manageContinueShopping = () => {
        setQuickShopOpen(false);
        setSnackBarOpen(false);
    }

    const manageAddSuggestionToCart = (productID: number) => {
        setSelectedPod(productID);
        setSnackBarOpen(false);
        setQuickShopOpen(true);
    }


    const handleFiltersVisibility = () => {
        setFiltersVisible(!filtersVisible)
    }
    const getSnackBar = (open: boolean)  => {
        if (open) {
            return (
                <AddToCartJourneySmall
                    selectedProduct={props.products[selectedPod]}
                    suggestedProducts={simplifiedPodItems(podLibrary.slice(0, 3))}
                    numberOfSuggestions={3}
                    currentCartTotal={3}
                    freeShippingTarget={35}
                    closeFunc={() => manageContinueShopping()}
                    addSuggestionToCartFunc={manageAddSuggestionToCart}
                />
            )
        }
        return <></>
    }


    // manage filters selection

    useEffect(() => {
        if (props.useFilters ) {
            setFilterItems(
                props.filtersDefinition.map(
                    (item, index) => {
                        return item
                    }
                )
            )
        }

    }, []);

    const [filterItems, setFilterItems] = useState<iCategoryItem[]>([]);

    useEffect(() => {

    },[filterItems]);

    const manageFilterss =(index:number, sectionIndex : number)=> {

        //createFilters(index, sectionIndex);
    }

    const manageFilters = (index:number, sectionIndex : number) => {

        console.log("manageFilters: ", index);
        let filterItemsCopy: iCategoryItem[] = [];
        const filtersReference: iCategoryItem[] = [...filterItems];
        let activeFiltersCopy: filterOptionsT[] = [...activeFilters]; // make a copy of activeFilters
        i: for (let i = 0; i < filtersReference.length; i++) {
            if (i === sectionIndex) {
                let filterItem = filtersReference[i];
                for (let j = 0; j < filtersReference[i].subcategories.length; j++) {
                    if (j === index) {
                        filterItem.subcategories[j].isChecked = !filterItem.subcategories[j].isChecked;
                        if (filterItem.subcategories[j].isChecked) {
                            // if checkbox is checked, add filterID to activeFilters
                            activeFiltersCopy.push(filterItem.subcategories[j].filterTerm ?? "not-found")
                        } else {
                            // if checkbox is unchecked, remove filterID from activeFilters
                            activeFiltersCopy = activeFiltersCopy.filter(filterID => filterID !== filterItem.subcategories[j].filterTerm);
                        }
                        filterItemsCopy.push(filterItem);
                        continue i;
                    }
                }
                filterItemsCopy.push(filterItem);
            }
            filterItemsCopy.push(filtersReference[i]);
        }

        setFilterItems(filterItemsCopy);
        setActiveFilters(activeFiltersCopy); // update activeFilters state
    }


//RENDER
    return (
        <CLP_Page_Styled>
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
                        iconStandard="icon-filters"
                        transitionType="expand-bg"
                        onClick={handleFiltersVisibility}
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
            {
                props.useBanner &&
                <div className="banner">
                    <ContentItem
                        backGroundType="image"
                        backgroundColor="latte"
                        backgroundUrlPath="/editorial/in-stock-guarantee.png"
                        component="content"
                        contrastBackground="dark"
                        ctaLabel="Call to action"
                        ctaLinkTo="www.google.com"
                        heightMethod="fit-content"
                        mainMessage="In-Stock Guarantee"
                        mainMessageColor="#3B2B2F"
                        mainMessageSize="Medium"
                        mainMessageWeight="heavy-weight"
                        messageTextAlignment="text-left"
                        secondaryMessage="Your coffee cravings have met their match! With our In-Stock Guarantee, your coffee dreams never run dry!  "
                        secondaryMessageSize="Small"
                        secondaryMessageWeight="regular-weight"
                        sectionAppearance="inset-beveled"
                        sectionName=""
                        sectionType="content-right"
                        hasCTA={false}
                        hasFocalImage={false}
                        mainTextHasShadow={false}
                    />
                </div>
            }
            <OuterMostCLP_Container  >


                {
                    props.useFilters &&
                    <FiltersContainerStyle>
                        <Filters
                            type={props.pageType}
                            isVisible={filtersVisible}
                            filtersFunction={manageFilters}
                            filtersDefinition={props.filtersDefinition}
                        />
                    </FiltersContainerStyle>
                }


                <div className="right-part" ref={ref}>
                    <ComponentFilterStyle>
                        {props.useKSKtoggle &&
                            <div className={"ksk-toggle"}>Keurig Starter Kit <SaleToggle className={"sale-toggle"}/></div>
                        }
                        <div className={"filters"}>
                            <KButton
                                label="Filters"
                                buttonType="secondary"
                                buttonWidth="fit-to-content"
                                iconPlacement="after-label"
                                iconStandard="icon-filters"
                                transitionType="expand-bg"
                                onClick={handleFiltersVisibility}
                            />
                        </div>
                        <div className={"sort-by"}>
                            Sort by
                            <SortSelectWrapper>
                                <SortSelect value={sortBy} onChange={handleSortChange}>
                                    <option value="popularity">Popularity (all time)</option>
                                    <option value="priceLowest">Price (lowest first)</option>
                                    <option value="priceHighest">Price (highest first)</option>
                                    <option value="nameAZ">Name (A-Z)</option>
                                    <option value="nameZA">Name (Z-A)</option>
                                </SortSelect>
                                <Graphic graphicName={"chevron-down"}></Graphic>
                            </SortSelectWrapper>
                        </div>
                    </ComponentFilterStyle>
                    <BrewerCLPStyled>
                        {props.promotionalContent && <div>{props.promotionalContent}</div>}
                        <ProductListWrapper
                            className={`${props.useFlags ? "has-flags" : "" }`}
                            dynamicStyles={getDynamicStyles(width || screen.width)} columns={currentColumns || 1}
                            rows={rows}>
                            {visibleProducts.map((product, index) => (
                                <CardAggregator
                                    key={index}
                                    flag={props.useFlags ? product.flag : undefined}
                                    product={product}
                                    cardPresentationMode={props.cardPresentationMode}
                                    cardMode={props.cardMode}
                                    index={index}
                                    ratingVisible={props.ratingVisible}
                                    quickShopFunction={() => manageQuickShop(true, index)}
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
        </CLP_Page_Styled>
    );
};

export default ProductList;
