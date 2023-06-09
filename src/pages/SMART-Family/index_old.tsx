import React, {ReactElement, useCallback, useEffect, useState, useRef} from "react";
import {Kcarousel} from "../../components/Carousel/Kcarousel";
import {ContentItem, iContentItem} from "../../components/ContentComponents/ContentComponent";
import {ContentPage} from "../../components/ContentComponents/ContentPage";
import {ProductCard} from "../../components/ContentComponents/ProductCard/ProductCard";
import {ExpandCollapse} from "../../components/ExpandCollapse/expand-collapse";
import {PageNav} from "../../components/PageNav/PageNav";
import {KTable} from "../../components/Table/KTable";


export default function SMART_Family＿Content() {
  return (
    <div className="smart-family">
      <div className="background-filler"></div>
      <PageNav
        useGlass={true}
        backGroundOpacity={0.75}
        background="dark-roast"
        collapsedLabel="Features Menu"
        links={[
          {
            classes: '',
            label: 'BREWERS',
            linkTo: ''
          },
          {
            classes: '',
            label: 'TESTIMONIALS',
            linkTo: ''
          },
          {
            classes: '',
            label: 'FEATURES',
            linkTo: ''
          },
          {
            classes: '',
            label: 'KEURIG APP',
            linkTo: ''
          },
          {
            classes: '',
            label: 'BREW MATCH',
            linkTo: ''
          },
          {
            classes: 'highlighted',
            label: 'BUILD YOUR STARTER KIT',
            linkTo: ''
          }
        ]}
        classes=""
        navName=""/>
      <ContentItem
        backGroundType="movie"
        backgroundUrlPath="/video/SMART-sampling.webm"
        contrastBackground="dark"
        ctaLabel="Call to action"
        ctaLinkTo="www.google.com"
        hasCTA={false}
        hasTermsConditions={false}
        heightMethod="fit-content"
        heightOverride={
          {
            minHeight: "70vh",
            maxHeight: "90vh",
            overallHeight: "100%"
          }
        }
        mainMessage="A coffee experience perfectly personalized for you"
        mainMessageSize="Large"
        mainMessageWeight="heavy-weight"
        mainMessageColor={"white"}
        mainTextHasShadow
        messageTextAlignment="text-center"
        secondaryMessage=""
        sectionType="content-front-and-center"
        termsAndConditionsCTA={{
          termsAndConditionsCtaLabel: 'See Details',
          termsAndConditionsLabelDetail: 'Restrictions apply'
        }}
        termsAndConditionsFullText={{
          header: 'Lorem ipsum tolem set',
          termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet lectus, ac congue arcu ultricies eget. Curabitur id nunc quis sapien dictum iaculis. Fusce non faucibus eros. Etiam efficitur velit sit amet rutrum iaculis. Vivamus nec odio commodo, vestibulum nisl nec, aliquet nibh. Fusce finibus id lorem at commodo. Maecenas a varius velit. Nunc nunc enim, tempus a ultrices at, imperdiet quis mauris. Nulla faucibus, nibh quis lobortis convallis, velit metus porttitor metus, sed suscipit arcu leo id sapien. Curabitur varius laoreet urna non tincidunt. Nullam neque ex, luctus et ex sed, interdum vulputate leo. Nunc mollis pellentesque augue, pharetra suscipit nisl. Suspendisse ac dolor arcu. Vestibulum efficitur felis enim, non molestie diam rhoncus vitae. Mauris viverra vehicula diam, ut scelerisque nulla sollicitudin ut. Etiam dictum blandit ipsum, quis ultricies odio egestas quis.  Aenean ut dolor nulla. Proin semper in nisi id viverra. Quisque sed massa tristique, gravida orci id, lacinia enim. Quisque vestibulum nisl in dui suscipit, quis lobortis ex finibus. Nullam euismod, erat id viverra faucibus, magna tortor venenatis neque, tincidunt pharetra enim tellus ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed libero massa, convallis ut diam vitae, laoreet cursus ante. Mauris eleifend tellus lectus, ultricies porttitor lectus posuere ut. Aliquam et accumsan massa.'
        }}
        backgroundColor="sepia"

        component="content"
        hasFocalImage={false}
        sectionName=""/>
      <ContentItem
        hasFocalImage={false}
        mainTextHasShadow={false}
        backGroundType="solid-color"
        backgroundColor="white"
        backgroundUrlPath=""
        component="content"
        contrastBackground="none"
        hasCTA={false}
        ctaLabel=""
        ctaLinkTo=""
        ctaMode="button"
        heightMethod="fit-content"
        mainMessage="AS FEATURED IN"
        mainMessageColor="#3B2B2F"
        mainMessageSize="Tiny"
        messageTextAlignment="text-center"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionName=""
        sectionType="content-front-and-center"
        customClasses="featured"
      />
      <Kcarousel
        carouselType="slider"
        component="carousel"
        itemsPerSlide={5}
        navPosition="bottom"
        slides={[
          <div key="0" className="images-container logos">
            <img alt="" className="image-item" src="/logos/the-spoon.png"/>
            <img alt="" className="image-item" src="/logos/cnn.png"/>
            <img alt="" className="image-item" src="/logos/tikTok.png"/>
            <img alt="" className="image-item" src="/logos/mens-health.png"/>
            <img alt="" className="image-item" src="/logos/apartment-therapy.png"/>
            <img alt="" className="image-item" src="/logos/usa-today.png"/>
          </div>
        ]}
        keepNavButtons={false}
        navStyle="dots"
      />
      <ContentItem
        backGroundType="solid-color"
        backgroundColor="latte"
        backgroundUrlPath=""
        component="content"
        contrastBackground="none"
        ctaLabel=""
        ctaLinkTo=""
        ctaMode="button"
        heightMethod="fit-content"
        mainMessage="Discover BrewID™, the simplest way to personalize your cup to perfection. "
        mainMessageColor="#473036"
        mainMessageSize="Large"
        messageTextAlignment="text-center"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionName="BrewID_Intro"
        sectionType="content-front-and-center"
        hasCTA={false}
        hasFocalImage={false}
        mainTextHasShadow={false}
      />
      <ContentItem
        backGroundType="movie"
        backgroundColor="latte70"
        backgroundUrlPath="/video/sample_coffee_general.mp4"
        contrastBackground="dark"
        ctaLabel="Call to action"
        ctaLinkTo="www.google.com"
        hasCTA={false}
        hasTermsConditions={false}
        heightMethod="fit-content"
        mainMessage="Expert results without having to be an expert"
        mainMessageColor="#473036"
        mainMessageSize="Medium"
        mainMessageWeight="heavy-weight"
        messageTextAlignment="text-left"
        secondaryMessage="BrewID™ recognizes your K-Cup® pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. "
        secondaryMessageWeight="regular-weight"
        secondaryMessageSize="Small"
        sectionAppearance="inset-beveled"
        sectionType="content-right"
        component="content"
        hasFocalImage={false}
        mainTextHasShadow={false}
        sectionName=""
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
        mainMessage="3 ways to make amazing coffee with our most advanced brewing technology"
        mainMessageColor="#473036"
        mainMessageSize="Medium"
        messageTextAlignment="text-center"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionName="BrewID_Intro"
        sectionType="content-front-and-center"
        hasCTA={false}
        hasFocalImage={false}
        mainTextHasShadow={false}
      />
      <Kcarousel
        carouselType="slider"
        component="carousel"
        itemsPerSlide={3}
        keepNavButtons={false}
        navLabels={[
          'First Section',
          'Second Section',
          'Third Section'
        ]}
        navStyle="dots"
        slides={[
          <>
            <ProductCard key="0" colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]} hasCTA
                         hasLearMoreLink learnMoreLabel="Full Page" learnMoreLinkTo="#" priceFinal={89.99}
                         priceOriginal={139.99} primaryCtaButtonType="primary" primaryCtaLabel="Build your kit"
                         primarySlogan="When you build a Starter Kit" productColorValues={['black']}
                         productImagePath="/images/silos/KSPS/ksps.png" productName="K-Supreme® SMART Plus"
                         secondarySlogan="Stainless Steel Metal Wrap, 5 Brew Sizes" showPrice showProductColors/>,
            <ProductCard key="1" colorVariants={[{inStock: true, variantName: 'Black Stainless Steel'}]} hasCTA
                         hasLearMoreLink learnMoreLabel="Full Page" learnMoreLinkTo="#" priceFinal={99.99}
                         priceOriginal={199.99} primaryCtaButtonType="primary" primaryCtaLabel="Build your kit"
                         primarySlogan="When you build a Starter Kit" productColorValues={['black']}
                         productImagePath="/images/silos/KCS_AltImages_KCOM-01.png" productName="K-Café® SMART"
                         secondarySlogan="Fast & easy coffeehouse drinks, built-in milk frother" showPrice
                         showProductColors/>
          </>
        ]}

        navPosition="bottom"
      />
      <ExpandCollapse
        classes="comparison-chart"
        expanderStyle="button"
        isExpandedText={"View Less"}
        expandText={"Compare"}
        content={
          <KTable
            columnWidths={[
              '33%',
              '33%',
              '33%'
            ]}
            rows={[
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: 'K-Supreme® SMART',
                    cellType: 'header'
                  },
                  {
                    cellLabel: 'K-Supreme Plus® SMART',
                    cellType: 'header'
                  },
                  {
                    cellLabel: 'K-Café® SMART',
                    cellType: 'header'
                  }
                ],
                rowType: 'standard'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: 'Personalize your cup to perfection',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Personalize your cup to perfection + Award-winning design for your home',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Personalize your cup to perfection + Coffeehouse beverages just the way you like',
                    cellType: 'details'
                  }
                ],
                rowType: 'standard'
              },
              {
                fontColorOverride: '#473036',
                rowBackgroundColor: '#EADECF',
                rowCells: [
                  {
                    cellLabel: 'All SMART Brewers Include',
                    cellType: 'full-row-header'
                  }
                ],
                rowType: 'standard'
              },
              {
                fontColorOverride: '#473036',
                rowBackgroundColor: '#EADECF',
                rowCells: [
                  {
                    cellLabel: 'BrewID™',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Advanced features when connected to Keurig® App',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Signature Brew Settings',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Exclusive Coffeehouse Recipes in Keurig® App',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'SMART Delivery Enabled ',
                    cellType: 'details'
                  }
                ],
                rowType: 'stacked'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: 'Individual Brewer Features ',
                    cellType: 'full-row-header'
                  }
                ],
                rowType: 'standard'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: '5 Strength Settings and  6 Temperature Settings',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Multistream™ Technology',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Iced Setting',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Up to 10 Custom Favorite Settings',
                    cellType: 'details'
                  }
                ],
                rowType: 'stacked'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: 'Color/Finish',
                    cellType: 'full-row-header'
                  }
                ],
                rowType: 'standard'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: 'Black, Gray, White',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Premium Metal Wrap Black Stainless, Stainless',
                    cellType: 'details'
                  },
                  {
                    cellLabel: 'Black',
                    cellType: 'details'
                  }
                ],
                rowType: 'standard'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: 'Brew Sizes',
                    cellType: 'full-row-header'
                  }
                ],
                rowType: 'standard'
              },
              {
                rowBackgroundColor: '#EBE7E3',
                rowCells: [
                  {
                    cellLabel: '6, 8, 10, & 12 oz',
                    cellType: 'details'
                  },
                  {
                    cellLabel: '4, 6, 8, 10, & 12 oz',
                    cellType: 'details'
                  },
                  {
                    cellLabel: '6, 8, 10, & 12 oz + Single and Double Shots + for café-style beverages',
                    cellType: 'details'
                  }
                ],
                rowType: 'standard'
              }
            ]}
          />

        }/>
      <ContentItem
        backGroundType="solid-color"
        backgroundColor="dark-roast"
        backgroundUrlPath=""
        component="content"
        contrastBackground="none"
        ctaLabel="Build Your Kit"
        ctaLinkTo=""
        ctaMode="button"
        flag={{
          flagBackgroundColor: 'medium-roast',
          flagLabel: 'Keurig.com Exclusive Pricing',
          flagStyle: 'square',
          flagTextColor: 'white',
          useFlag: true
        }}
        hasCTA
        hasTermsConditions
        heightMethod="half-viewport"
        mainMessage="Get your SMART Brewer for up to 55% off"
        mainMessageColor="white"
        mainMessageSize="Large"
        mainTextHasShadow
        messageTextAlignment="text-center"
        secondaryMessage="Our Keurig® Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping."
        secondaryMessageSize="Medium"
        secondaryMessageWeight="heavy-weight"
        sectionName=""
        sectionType="content-front-and-center"
        termsAndConditionsCTA={{
          termsAndConditionsCtaLabel: 'See Details',
          termsAndConditionsLabelDetail: 'Restrictions apply'
        }}
        termsAndConditionsFullText={{
          header: 'Lorem ipsum tolem set',
          termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci.'
        }}
        termsAndConditionsMode="pop-up-mode"
       hasFocalImage={false}
      />
      <ContentItem
        backGroundType="movie"
        backgroundColor="white"
        backgroundUrlPath="/video/sample_coffee_general.mp4"
        contrastBackground="dark"
        ctaLabel="Call to action"
        ctaLinkTo="www.google.com"
        hasCTA={false}
        hasTermsConditions={false}
        heightOverride={{
          minHeight:"30rem",
          maxHeight : "70vh",
          overallHeight : "100%"
        }}
        heightMethod="fit-content"
        mainMessage="Delicious coffeehouse recipes in the palm of your hand"
        mainMessageColor="#473036"
        mainMessageSize="Medium"
        mainMessageWeight="heavy-weight"
        messageTextAlignment="text-left"
        secondaryMessage="Explore over 60 indulgent recipes in the Keurig® app with Café Creations. In minutes, you'll be enjoying an extra-foamy cappuccino or caramel latte precisely how you love them. "
        secondaryMessageWeight="regular-weight"
        secondaryMessageSize="Small"
        sectionAppearance="inset-beveled"
        sectionType="content-left"
        component="content"
        hasFocalImage={false}
        mainTextHasShadow={false}
        sectionName=""
      />

      <ContentItem
        customClasses="testimonial"
        backGroundType="image"
        backgroundUrlPath="/images/lifestyle/making-drinks.jpg"
        calloutPosition="left-top"
        ctaLabel="This is a CTA"
        ctaLinkTo="&quot;&quot;"
        heightOverride={{
          maxHeight : "100vh",
          minHeight : "80vh",
          overallHeight :"100%"
        }}
        mainMessage="“We love it. You can even brew your favorite cup of coffee from bed with the Wi-Fi technology and the App!” — Leah R ⭑ ⭑ ⭑ ⭑ ⭑"
        mainMessageColor="#473036"
        messageAsCallout
        messageTextAlignment="text-left"
        secondaryMessage=""
        sectionType="content-front-and-center"
        backgroundColor="sepia"
        component="content"
        contrastBackground="none"
        hasCTA={false}
        hasFocalImage={false}
        heightMethod="fit-content"
        mainTextHasShadow={false}
        sectionName=""/>
      <ContentItem
        backGroundType="solid-color"
        backgroundColor="dark-roast"
        backgroundUrlPath=""
        component="content"
        contrastBackground="none"
        ctaLabel=""
        ctaLinkTo=""
        ctaMode="button"
        heightMethod="fit-content"
        mainMessage="Wi-Fi® enabled coffee maker works with Alexa and Google Home. "
        mainMessageColor="white"
        mainMessageSize="Medium"
        messageTextAlignment="text-center"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionName="BrewID_Intro"
        sectionType="content-front-and-center"
        hasCTA={false}
        hasFocalImage={false}
        mainTextHasShadow={false}
      />
      <ContentItem
        backGroundType="movie"
        backgroundColor="white"
        backgroundUrlPath="/video/sample_coffee_general.mp4"
        contrastBackground="dark"
        ctaLabel="Call to action"
        ctaLinkTo="www.google.com"
        hasCTA={false}
        hasTermsConditions={false}
        heightMethod="fit-content"
        mainMessage="Brew from just about anywhere"
        mainMessageColor="#473036"
        mainMessageSize="Medium"
        heightOverride={{
          minHeight:"30rem",
          maxHeight : "70vh",
          overallHeight : "100%"
        }}
        mainMessageWeight="heavy-weight"
        messageTextAlignment="text-left"
        secondaryMessage="The possibilities are endless. Use the app to start your brew from bed or the car and have a hot cup ready and waiting for you."
        secondaryMessageWeight="regular-weight"
        secondaryMessageSize="Small"
        sectionAppearance="inset-beveled"
        sectionType="content-right"
        component="content"
        hasFocalImage={false}
        mainTextHasShadow={false}
        sectionName=""
      />
      <ContentItem
        hasFocalImage={false}
        mainTextHasShadow={false}
        backGroundType="solid-color"
        backgroundColor="white"
        backgroundUrlPath=""
        component="content"
        contrastBackground="none"
        hasCTA={false}
        ctaLabel=""
        ctaLinkTo=""
        ctaMode="button"
        heightMethod="fit-content"
        mainMessage="FIND YOUR MATCH"
        mainMessageColor="#3B2B2F"
        mainMessageSize="Tiny"
        messageTextAlignment="text-center"
        secondaryMessage=""
        secondaryMessageWeight="heavy-weight"
        sectionName=""
        sectionType="content-front-and-center"
        customClasses="featured"
      />

    </div>
  )
}
