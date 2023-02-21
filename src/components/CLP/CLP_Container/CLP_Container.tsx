import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfoCard, { ProductInfoCardProps } from '../SimpleCard/SimpleCard';
import {OuterMostCLP_Container, PaginationButton, PaginationWrapper, ProductListWrapper} from "./Styled_CLP_container";
import {useResizeDetector} from "react-resize-detector";
export interface ProductListProps {
    products: ProductInfoCardProps[];
    ratingVisible: boolean;
    columns?: number;
    promotionalContent?: React.ReactNode;
    pageSize?: number;
    columnsHugeScreen : number;
    columnsLargeScreen : number;
    columnsMediumScreen : number;
    columnsSmallScreen : number;
}


const ProductList: React.FC<ProductListProps> = (props : ProductListProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [rows, setRows] = useState(0);

    const [currentColumns, setCurrentColumns] = useState(0);

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

    return (
        <div style={{padding : "2%"}}>
            <OuterMostCLP_Container ref={ref} >
                {props.promotionalContent && <div>{props.promotionalContent}</div>}
                <ProductListWrapper dynamicStyles={getDynamicStyles(width || screen.width)} columns={currentColumns || 1} rows={rows}>
                    {visibleProducts.map((product, index) => (
                        <ProductInfoCard
                            key={index} {...product}
                            ratingVisible={props.ratingVisible}
                            rating={{
                                totalNumberOfStars : 5,
                                totalNumberOfReviews: product.rating.totalNumberOfReviews || 100,
                                ratingNumber: product.rating.ratingNumber || 4.6,

                            }} onClick={()=>{console.log(index)}} />
                    ))}
                </ProductListWrapper>
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
