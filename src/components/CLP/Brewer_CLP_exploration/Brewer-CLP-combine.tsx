import React, {useState} from 'react';
import {iCardProps} from './Brewer-CLP-grid';
import {Filters} from './Brewer-CLP-filters';
import {ProductCard} from './Brewer-CLP-grid';
import {BrewerCLPStyled} from "./Brewer-CLP-grid-styled"
import {BrewerCLPFiltersStyle} from "./Brewer-CLP-filters-styled";
import {CombinedComponentStyle, ComponentFilterStyle, FiltersContainerStyle} from "./Brewer-CLP-combine-styled"
import {iStickyHeader, StickyHeader} from 'components/Sticky Header/StickyHeader';
import KButton, {iButton} from 'components/Kbutton/KButton';

export interface iCombineComponent {
    stickyHeader: iStickyHeader;
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

            <CombinedComponentStyle>

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
