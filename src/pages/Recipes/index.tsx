import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import React, {ReactElement, useCallback, useEffect, useState, useRef, useLayoutEffect} from "react";
import {ContentItem} from "../../components/ContentComponents/ContentComponent";
import {MultiCardPresenter} from "../../components/ContentComponents/MultiCardContainer/MultiCardPresenter";
import {SimpleHighlightCard} from "../../components/ContentComponents/SimpleHighlightCard/SimpleHighlightCard";
import {FilterableCardsArea} from "../../components/FilterableCardsArea/FilterableCardsArea";


export function Recipes() {

  return(
    <div>
      <ContentItem
        backGroundType="movie"
        backgroundUrlPath="/video/barista-mode.mp4"
        contrastBackground="none"
        ctaLabel=""
        ctaLinkTo=""
        hasCTA={false}
        hasTermsConditions
        heightMethod="stretch-to-parent"
        mainMessage="Coffeehouse favorites in 5 minutes or less "
        mainMessageSize="Large"
        mainMessageWeight="heavy-weight"
        mainMessageColor="white"
        mainTextHasShadow
        messageTextAlignment="text-left"
        secondaryMessage=""
        sectionType="content-front-and-center"
        backgroundColor="white"
        component="content"
        hasFocalImage={false}
        sectionName="intro"
         customClasses="hero-image"
      />
      <ContentItem
        backGroundType="solid-color"
        backgroundColor="white"
        backgroundUrlPath=""
        component="content"
        contrastBackground="none"
        ctaLabel=""
        ctaLinkTo=""
        ctaMode="button"
        heightMethod="fit-content"
        mainMessage="What would you like to brew today?"
        mainMessageColor="#473036"
        mainMessageSize="Medium"
        mainMessageWeight="medium-weight"
        messageTextAlignment="text-center"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionName="BrewID_Intro"
        sectionType="content-front-and-center"
        hasCTA={false}
        hasFocalImage={false}
        mainTextHasShadow={false}
        customClasses="no-padding-bottom"
      />
      <MultiCardPresenter
        cards={[
          {
            cardType: 'simple',
            simpleCardData: {
              alignment: 'center',
              mainFocalImage: {
                cropStyle: 'circle',
                imagePath: '/recipes/representative/hot-coffees.webp'
              },
              mainImageSize: 'default-size',
              title: 'Hot Coffees',
              titlePosition: 'after-image'
            }
          },
          {
            cardType: 'simple',
            simpleCardData: {
              alignment: 'center',
              mainFocalImage: {
                cropStyle: 'circle',
                imagePath: '/recipes/representative/hot-teas.webp'
              },
              mainImageSize: 'default-size',
              title: 'Hot Teas',
              titlePosition: 'after-image'
            }
          },
          {
            cardType: 'simple',
            simpleCardData: {
              alignment: 'center',
              mainFocalImage: {
                cropStyle: 'circle',
                imagePath: '/recipes/representative/iced-coffees.webp'
              },
              mainImageSize: 'default-size',
              title: 'Iced Coffees',
              titlePosition: 'after-image'
            }
          },
          {
            cardType: 'simple',
            simpleCardData: {
              alignment: 'center',
              mainFocalImage: {
                cropStyle: 'circle',
                imagePath: '/recipes/representative/iced-teas.webp'
              },
              mainImageSize: 'default-size',
              title: 'Iced Teas',
              titlePosition: 'after-image'
            }
          },
          {
            cardType: 'simple',
            simpleCardData: {
              alignment: 'center',
              mainFocalImage: {
                cropStyle: 'circle',
                imagePath: '/recipes/representative/cocoa-cider-more.webp'
              },
              mainImageSize: 'default-size',
              title: 'Cocoa, Cider & More',
              titlePosition: 'after-image'
            }
          },{
            cardType: 'simple',
            simpleCardData: {
              alignment: 'center',
              mainFocalImage: {
                cropStyle: 'circle',
                imagePath: '/recipes/representative/dessert-smoothie.webp'
              },
              mainImageSize: 'default-size',
              title: 'Desserts & Smoothies',
              titlePosition: 'after-image'
            }
          },
        ]}
      />
      <ContentItem
        backGroundType="image"
        backgroundColor="sepia"
        backgroundUrlPath="/recipes/hero-iced-caramel-latte.webp"
        contrastBackground="dark"
        ctaLabel="Call to action"
        ctaLinkTo="www.google.com"
        ctaButtonType="primary"
        hasCTA={true}
        hasTermsConditions={false}
        heightMethod="fit-content"
        mainMessage="Caramel Frozen Blended Coffee"
        mainMessageColor="#473036"
        mainMessageSize="Medium"
        mainMessageWeight="heavy-weight"
        messageTextAlignment="text-left"
        secondaryMessage="Caramel sauce adds a hint of sweetness to this luscious coffee treat. The perfect refreshment for your next virtual watch party."
        secondaryMessageWeight="regular-weight"
        sectionAppearance="default"
        sectionType="content-left"
        termsAndConditionsMode="slide-down-mode"
        component="content"
        hasFocalImage={false}
        mainTextHasShadow={false}
        sectionName="featured"/>
      <div className="spacer" style={{height:"4rem"}}></div>
        <FilterableCardsArea
          mode="rows"
          cards={[
            {
              card: <SimpleHighlightCard key="1" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-oak-milk-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Oak Milk Latte" titlePosition="after-image"/>,
              cardName: 'OatMilkLatte',
              filterTerms: [
                'hot',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="2" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cappuccino" titlePosition="after-image"/>,
              cardName: 'Cappuccino',
              filterTerms: [
                'hot',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="3" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-iced-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'ICED COFFEE', size: 'Small'}} title="Iced Cappuccino" titlePosition="after-image"/>,
              cardName: 'IcedCappuccino',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="4" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-london-fog-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT TEA', size: 'Small'}} title="London Fog Latte" titlePosition="after-image"/>,
              cardName: 'LondonFogLatte',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="5" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'sepia', icon: 'frother-icon', iconPosition: 'before', label: 'No Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cinnamon-macchiato.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cinnamon Macchiato" titlePosition="after-image"/>,
              cardName: 'Cinnamon Macchiato',
              filterTerms: [
                'iced',
                'no frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="1" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-oak-milk-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Oak Milk Latte" titlePosition="after-image"/>,
              cardName: 'OatMilkLatte',
              filterTerms: [
                'hot',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="2" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cappuccino" titlePosition="after-image"/>,
              cardName: 'Cappuccino',
              filterTerms: [
                'hot',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="3" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-iced-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'ICED COFFEE', size: 'Small'}} title="Iced Cappuccino" titlePosition="after-image"/>,
              cardName: 'IcedCappuccino',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="4" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-london-fog-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT TEA', size: 'Small'}} title="London Fog Latte" titlePosition="after-image"/>,
              cardName: 'LondonFogLatte',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="5" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'sepia', icon: 'frother-icon', iconPosition: 'before', label: 'No Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cinnamon-macchiato.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cinnamon Macchiato" titlePosition="after-image"/>,
              cardName: 'Cinnamon Macchiato',
              filterTerms: [
                'iced',
                'no frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="1" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-oak-milk-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Oak Milk Latte" titlePosition="after-image"/>,
              cardName: 'OatMilkLatte',
              filterTerms: [
                'hot',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="2" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cappuccino" titlePosition="after-image"/>,
              cardName: 'Cappuccino',
              filterTerms: [
                'hot',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="3" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-iced-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'ICED COFFEE', size: 'Small'}} title="Iced Cappuccino" titlePosition="after-image"/>,
              cardName: 'IcedCappuccino',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="4" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-london-fog-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT TEA', size: 'Small'}} title="London Fog Latte" titlePosition="after-image"/>,
              cardName: 'LondonFogLatte',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="5" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'sepia', icon: 'frother-icon', iconPosition: 'before', label: 'No Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cinnamon-macchiato.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cinnamon Macchiato" titlePosition="after-image"/>,
              cardName: 'Cinnamon Macchiato',
              filterTerms: [
                'iced',
                'no frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="1" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-oak-milk-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Oak Milk Latte" titlePosition="after-image"/>,
              cardName: 'OatMilkLatte',
              filterTerms: [
                'hot'
              ]
            },
            {
              card: <SimpleHighlightCard key="2" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'sepia', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cappuccino" titlePosition="after-image"/>,
              cardName: 'Lorem Ipsum',
              filterTerms: [
                'hot',
                'no frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="3" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'sepia', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-iced-cappuccino.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'ICED COFFEE', size: 'Small'}} title="Iced Cappuccino" titlePosition="after-image"/>,
              cardName: 'IcedCappuccino',
              filterTerms: [
                'iced',
                'no frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="4" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'frother-icon', iconPosition: 'before', label: 'Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: 'recipes/recipe-london-fog-latte.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT TEA', size: 'Small'}} title="London Fog Latte" titlePosition="after-image"/>,
              cardName: 'LondonFogLatte',
              filterTerms: [
                'iced',
                'frother'
              ]
            },
            {
              card: <SimpleHighlightCard key="5" alignment="left" featuresList={[{layoutType: 'inline', primaryMessage: {color: 'secondaryGold', icon: 'clock-icon', iconPosition: 'before', label: '3 minutes'}}, {layoutType: 'inline', primaryMessage: {color: 'sepia', icon: 'frother-icon', iconPosition: 'before', label: 'No Frother Required'}}]} mainFocalImage={{cropStyle: 'rounded-rectangle', imagePath: '/recipes/recipe-cinnamon-macchiato.webp'}} mainImageSize="fit-parent" mainMessageSize="Large" maxSize="50%" secondaryMessage={{color: 'medium-roast', label: 'HOT COFFEE', size: 'Small'}} title="Cinnamon Macchiato" titlePosition="after-image"/>,
              cardName: 'Cinnamon Macchiato',
              filterTerms: [
                'iced',
                'no frother'
              ]
            }
          ]}
          filterTerms={[
            'hot',
            'iced',
            'frother',
            'no frother'
          ]}
          headerArea={{
            mainTitle: 'Café Creations, the coffeehouse experience',
            secondaryTitle: 'Simple and delicious coffee recipes to make at home.'
          }}
          menuColorScheme="medium-roast"
        />
        <div className="spacer" style={{height:"4rem"}}></div>
        <ContentItem
          backGroundType="image"
          backgroundColor="none"
          backgroundUrlPath="/recipes/desert-hero.webp"
          ctaLabel="Download Now"
          ctaLinkTo="&quot;&quot;"
          ctaMode="button"
          hasCTA
          heightMethod="fit-content"
          mainMessage="Explore over 60 delicious indulgences in the Keurig® App"
          mainMessageColor="white"
          mainMessageSize="Medium"
          mainMessageWeight="heavy-weight"
          mainTextHasShadow
          messageTextAlignment="text-center"
          secondaryMessage=""
          secondaryMessageWeight="heavy-weight"
          sectionType="content-front-and-center"
          component="content"
          contrastBackground="dark"
          hasFocalImage={false}
          sectionName="downloadNow"
        />



    </div>
  )
}

export default Recipes;
