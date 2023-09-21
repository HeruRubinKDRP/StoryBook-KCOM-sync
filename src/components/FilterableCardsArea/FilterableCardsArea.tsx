import React, {ReactElement, useEffect, useState, useCallback} from "react";
import {useResizeDetector} from "react-resize-detector";
import {ContentItem} from "../ContentComponents/ContentComponent";
import {ExpandCollapse} from "../ExpandCollapse/expand-collapse";
import KButton from "../Kbutton/KButton";
import {colorByNameType, colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {FilterableCardsStyled} from "./filterable-cards.styled";

export type filterableCardT = {
  cardName : string;
  filterTerms : string[],
  card : ReactElement
}

export type filterTermsObject ={
  filterText : string;
  isActive :boolean;
}

export interface iFilterableCardsArea{
  cards : filterableCardT[];
  filterTerms : string[];
  menuColorScheme : colorByNameType;
  headerArea? : {
    mainTitle : string;
    secondaryTitle : string;
    color? : colorByNameType
  }
  mode : "rows" | "carousel";
}

export const FilterableCardsArea=(props : iFilterableCardsArea)=>{
  const { width, height, ref } = useResizeDetector();
  const [filters, setFilterActiveStates] = useState<filterTermsObject[] | null>(null);
  const [allUnselected, setAllUnselected] = useState(true)

  useEffect(()=>{
    let filterTerms : filterTermsObject[] = [];
    for(let i=0; i < props.filterTerms.length; i++){
      filterTerms.push(
        {
          filterText : props.filterTerms[i],
          isActive : false
        }
      )
    }
    setFilterActiveStates(filterTerms);

  },[props.filterTerms]);


  const getContainerSize = (widthX : number | undefined)=>{
    if(!widthX){return "small-container"}
    if(widthX < 450){
      return "small-container"
    }else
    if(widthX < 700 && widthX >= 450){
      return "medium-container"
    }
    if(widthX < 900 && widthX >= 700){
      return "medium-large-container"
    }
    return "large-container"
  }
  const manageFilters=(index : number)=>{
    if(filters == null){return}
    console.log(index)

    const bla = JSON.parse(JSON.stringify(filters));
    bla[index].isActive = !filters[index].isActive;

    setFilterActiveStates(bla);
    console.log(filters)
  }

  const checkFilters = useCallback(():boolean=>{
    if(!filters){return true}

    let selectedCount = 0

    for(let i=0; i < filters.length; i++){
      if(filters[i].isActive){
        selectedCount++;
      }
    }

    if(selectedCount > 0){
      return false;
    }

    if(selectedCount == 0){
      return true;
    }
    //catch all
    return true;
  },[filters]);


  useEffect(()=>{
    checkFilters();
  }, [filters, checkFilters])

  const getFilterMenu=( )=>{
    if(!filters){return}
    let menuItems : ReactElement[] = [];
    const getActive =(isActive : boolean)=>{
      if(!isActive){return ""}
      return "active"
    }

    for(let i=0; i< filters.length; i++){
      menuItems.push(
        <KButton
          buttonType="secondary"
          buttonWidth="fit-to-content"
          iconPlacement="no-icon"
          iconStandard="none"
          transitionType="expand-bg"
          label={filters[i].filterText}
          actionFunc={()=>manageFilters(i)}
          classes={`${getActive(filters[i].isActive)}`}
        />
      );
    }

    return (
      <div className={`filters-menu-container ${props.menuColorScheme}`}>
        <label className="filter-label" style={{color : colorNameToValue(props.menuColorScheme)}}>Filter by:</label>
        {menuItems}
      </div>
    )
  }

  const getCards=(filterS : filterTermsObject[] | null)=>{
    if(!filterS || filterS == null){return}
    let cards : ReactElement[]=[];
    let cardsForLarger : ReactElement[]=[];
    const allUnselected : boolean =  checkFilters();
    let totalMatchingCards : number = 0;
    cards : for(let i=0; i < props.cards.length; i++){
      for(let j=0; j < filterS.length; j++){
       if(!filterS[j].isActive && !allUnselected){
          continue;
        }
        for(let k=0; k < props.cards[i].filterTerms.length; k++){
          if(filterS[j].filterText == props.cards[i].filterTerms[k] || allUnselected){
            if(totalMatchingCards < 8){
              cards.push(props.cards[i].card);
              totalMatchingCards++;
              continue cards;
            }else{
              cardsForLarger.push(props.cards[i].card);
              totalMatchingCards++;
              continue cards;
            }

          }
        }
      }
    }

    if(totalMatchingCards <= 8){
      return <>{cards}</>
    }


    return(
      <>
        {cards}
        <ExpandCollapse
          expanderStyle="button"
          expandText="View More"
          isExpandedText="View Less"
          buttonType="primary"
          content={<div className={`filterable-cards-area ${getContainerSize(width)}`}>{cardsForLarger}</div>}
        />
      </>
    )
  }

  const getHeaderArea=()=>{
    if(!props.headerArea){
      return;
    }
    return(
      <ContentItem
        customClasses="max-height "
        backGroundType="movie"
        backgroundUrlPath=""
        contrastBackground="none"
        ctaLabel=""
        ctaLinkTo=""
        heightMethod="fit-content"
        mainMessage={props.headerArea.mainTitle}
        mainMessageSize="Medium"
        mainMessageColor={"#473036"}
        secondaryMessageSize="Medium"
        secondaryMessage={props.headerArea.secondaryTitle}
        sectionType="content-front-and-center"
        backgroundColor="none"
        component="content"
        hasCTA={false}
        hasFocalImage={false}
        mainTextHasShadow={false}
        sectionName={"milk-frother-intro"}
      />
    )
  }

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "small-container"}
    if(widthX < 450){
      return "small-container"
    }else
      if(widthX < 768 && widthX >= 450){
        return "medium-container"
    }

    return "large-container"

  }

  return (
   <FilterableCardsStyled ref={ref} className={`filterable-cards-container ${getContainerQuery(width)}`}>
     {getFilterMenu()}
     {getHeaderArea()}
     <div ref={ref} className={`filterable-cards-area ${getContainerSize(width)}`}>
       {getCards(filters)}
     </div>
   </FilterableCardsStyled>
  )

}
