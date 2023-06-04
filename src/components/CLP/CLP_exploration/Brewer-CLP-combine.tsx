import React, {useState} from 'react';
import {iCardProps} from './Brewer-CLP-grid';
import {Filters} from './Brewer-CLP-filters';
import {ProductCard} from './Brewer-CLP-grid';
import {BrewerCLPStyled} from "./Brewer-CLP-grid-styled"
import {BrewerCLPFiltersStyle} from "./Brewer-CLP-filters-styled";
import {CombinedComponentStyle, ComponentFilterStyle, FiltersContainerStyle, SortSelect, SortSelectWrapper} from "./Brewer-CLP-combine-styled"
import {iStickyHeader, StickyHeader} from 'components/Sticky Header/StickyHeader';
import KButton, {iButton} from 'components/Kbutton/KButton';
import SaleToggle from 'components/SaleToggle/sale-toggle';
import Graphic from 'components/Graphic/Graphic';
import {iCategoryItem} from "../../Filters/FiltersCenter/FiltersCenter";

export interface iCombineComponent {
    stickyHeader: iStickyHeader;
    filtersDefinitions : iCategoryItem[];
    stickyHeaderMode: "slim" | "full";
    products: iCardProps[];
    filters: JSX.Element;
    headerRef: React.RefObject<HTMLDivElement>;
}

function CombinedComponent(props: iCombineComponent) {
    const headerRef = React.createRef<HTMLDivElement>();
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => {
        setIsVisible(!isVisible)
    }
    const [sortBy, setSortBy] = useState("popularity");
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    return (
        <>
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
            <CombinedComponentStyle>

                <FiltersContainerStyle>
                    <Filters
                        filtersDefiniton={props.filtersDefinitions}
                        isVisible={isVisible}
                        filtersFunction={()=>{}}
                    />
                </FiltersContainerStyle>
                <div className="right-part">
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

                        {props.products.map((product, index) => (
                            <ProductCard
                                key={index}
                                name={product.name}
                                kskprice={product.kskprice}
                                onetimeprice={product.onetimeprice}
                                imageUrl={product.imageUrl}
                                hoverUrl={product.hoverUrl}
                            />
                        ))}
                    </BrewerCLPStyled>
                </div>
            </CombinedComponentStyle>
        </>


    );
}

export default CombinedComponent;
