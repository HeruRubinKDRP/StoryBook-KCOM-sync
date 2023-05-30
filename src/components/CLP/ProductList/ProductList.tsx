import React, {useState, useEffect, lazy, Suspense} from 'react';
import Fuse from 'fuse.js';
import ProductInfoCard, {filterDataItemT, iProductInfoCardProps} from '../SimpleCard/SimpleCard';
import {OuterMostCLP_Container, PaginationButton, PaginationWrapper, ProductListWrapper} from "./product-list.styles";
import {useResizeDetector} from "react-resize-detector";

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
import FuseResult = Fuse.FuseResult;
import {iCategoryItem} from "../../Filters/FiltersCenter/FiltersCenter";
import {CheckboxItem} from "../../Filters/filterableList/FilterableCheckboxList";

export interface ProductListProps {
    products: iProductInfoCardProps[];
    ratingVisible: boolean;
    columns?: number;
    promotionalContent?: React.ReactNode;
    pageSize?: number;
    columnsHugeScreen: number;
    columnsLargeScreen: number;
    columnsMediumScreen: number;
    columnsSmallScreen: number;
    stickyHeader: iStickyHeader;
    stickyHeaderMode: "slim" | "full";
    filters: JSX.Element;
    pageType: 'beverages' | 'brewer';
    filtersFunction: ()=>void;
    filtersDefinition: iCategoryItem[];
}

/*const Filters: React.FC<{ type: string, isVisible: boolean }> = ({ type, isVisible }) => {
    return type === 'beverages'
        ? <BeveragesFilters isVisible={isVisible}/>
        : <BrewerFilters isVisible={isVisible}/>;
};*/

interface iFiltersWrapper {
    type: string,
    isVisible: boolean,
    filtersFunction : (index: number, sectionIndex : number) => void;
    filtersDefinition : iCategoryItem[];
}

const Filters = (props:iFiltersWrapper) => {

    console.log("filters component")
    if (props.type === 'beverages') {
        return <BeveragesFilters isVisible={props.isVisible} filtersFunction={props.filtersFunction} />;
    } else if (props.type === 'brewer') {
        console.log("confirmed: brewer type is fired")
        return <BrewerFilters isVisible={props.isVisible} filtersDefiniton={props.filtersDefinition} filtersFunction={props.filtersFunction}/>;
    } else {
        return null;
    }
};


export type searchObject = {searchType : "filter" | "free-text" }

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
                                carousel={
                                    {
                                        slideImageURLs: [
                                            {
                                                path: props.products[selectedPod].image,
                                                altText: "",
                                                linkTo: ""
                                            }
                                        ]
                                    }
                                }
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
                                }}

                            />
                        </Suspense>
                    )
            }
        }

    }


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

        console.log("dynamic column setCurrentColumns");
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
        if(activeFilters.length > 0){
            let fuse: Fuse<iProductInfoCardProps> = new Fuse(productsFiltered, { keys: ['filterData.filterValues'] });

            productsFiltered = activeFilters.flatMap(activeFilter =>
                fuse.search(activeFilter).map((result: FuseResult<iProductInfoCardProps>) => result.item)
            );
        }
        console.log("productsFiltered", productsFiltered);


        const startIndex = currentPage * (props.pageSize || 0) * (props.columns || 0);
        const endIndex = startIndex + (props.pageSize || 0) * (props.columns || 0);
        return productsFiltered.slice(startIndex, endIndex);
    };

    const visibleProducts = getVisibleProducts();

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


    const handleClick = () => {
        setFiltersVisible(!filtersVisible)

        console.log("filter click", filtersVisible)
    }
    const getSnackBar = (open: boolean) => {
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
        setFilterItems(
            props.filtersDefinition.map(
                (item, index) => {
                return item
                }
            )
        )
        console.log("filterItems: ", filterItems);
    }, []);



    const [filterItems, setFilterItems] = useState<iCategoryItem[]>([]);

    useEffect(() => {
        console.log("filterItems: ", filterItems);
    },[filterItems]);

    const manageFilters =(index:number, sectionIndex : number)=> {
        createFilters(index, sectionIndex);
    }

    const createFilters = (index:number, sectionIndex : number) => {
        console.log("manageFilters zzz: ", index);
        console.log("sectionIndex zzz:", sectionIndex);

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
        console.log("filterItemsCopy: ", filterItemsCopy);
        setFilterItems(filterItemsCopy);
        setActiveFilters(activeFiltersCopy); // update activeFilters state
    }




    //render
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
                        iconStandard="icon-filters"
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
            <OuterMostCLP_Container  className={``}>

                    <FiltersContainerStyle>
                        <Filters
                            type={props.pageType}
                            isVisible={filtersVisible}
                            filtersFunction={manageFilters}
                            filtersDefinition={props.filtersDefinition}
                        />
                    </FiltersContainerStyle>

                <div className="right-part" ref={ref}>
                    <ComponentFilterStyle>
                        <div className={"ksk-toggle"}>Keurig Starter Kit <SaleToggle className={"sale-toggle"}/></div>
                        <div className={"filters"}>
                            <KButton
                                label="Filters"
                                buttonType="secondary"
                                buttonWidth="fit-to-content"
                                iconPlacement="after-label"
                                iconStandard="icon-filters"
                                transitionType="expand-bg"
                                onClick={handleClick}
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
                            dynamicStyles={getDynamicStyles(width || screen.width)} columns={currentColumns || 1}
                            rows={rows}>
                            {visibleProducts.map((product, index) => (
                                <CardFlip
                                    key={index}
                                    flipToBackButtonLabel="Features"
                                    flipToBackButtonIcon="icon-features"
                                    flipToFrontButtonLabel="Images"
                                    flipToFrontButtonIcon="icon-images"
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
                                                totalNumberOfStars: 5,
                                                totalNumberOfReviews: product.rating.totalNumberOfReviews || 100,
                                                ratingNumber: product.rating.ratingNumber || 4.6,
                                            }} onClick={() => manageQuickShop(true, index)}
                                        />
                                    }
                                    backContent={
                                        <CardBack name={product.name} description={product.productDescription}
                                                  imageSrc={product.siloImagePath}
                                                  features={product.productFeatures ?? []}/>
                                    }
                                    sideShowing="front"
                                    classes={product.productType == "brewer" ? "brewer-card" : "pod-card"}
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
