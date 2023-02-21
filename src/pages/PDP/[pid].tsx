import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router'
import React, {ReactElement, useCallback, useEffect, useState, useRef, useLayoutEffect} from "react";
import {useResizeDetector} from "react-resize-detector";
import {Kcarousel} from "../../components/Carousel/Kcarousel";
import {ContentItem} from "../../components/ContentComponents/ContentComponent";
import {FeatureBulletsArea} from "../../components/FeatureBullets/FeatureBulletsArea/FeatureBulletsArea";
import {AddKSK} from "../../components/PDP_Related/AddKSK";
import {FreeShipping} from "../../components/PDP_Related/FreeShipping/FreeShipping";
import {ProductIdentity} from "../../components/PDP_Related/ProductIdentity/ProductIdentityArea";
import {SecondaryPurchaseOptions} from "../../components/PDP_Related/SecondaryPurchaseOptions/SecondaryPurchaseOptions";
import {ScrubVideo} from "../../components/ScrubVideo/ScrubVideo";
import {SpecificationsArea} from "../../components/SpecificationsArea/SpecificationsArea";
import {KToggle} from "../../components/Toggle/Toggle";
import {ColorPicker, productVariantColor} from "../../components/colorPicker/colorPicker";
import {KSS_IN, KSS_OOS, KSS_Variants, KSupreme_ProductVariants} from "../../data/product-data";

export function KSS() {
  function onResize() {
    ScrollTrigger.refresh()
  }

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000,
    skipOnMount : false,
    onResize
  });
  const carouselRef = useRef<HTMLDivElement>(null)
  const mediaContainerRef = useRef<HTMLDivElement>(null)
  const endPin = useRef<HTMLDivElement>(null)

  const router = useRouter();
  const { pid } = router.query;

  console.log(router.query)

  useEffect(()=>{
    if(!carouselRef.current || !mediaContainerRef.current){return}

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create(
      {
        trigger: mediaContainerRef.current,
        start: "top top",
        end: `bottom bottom`,
        pin : carouselRef.current,
        pinSpacing : false,
        scrub: false,
        onUpdate:function (self){
          console.log("scrolled by: ",self.scroll())
        },
        onEnter:function (item:ScrollTrigger){
          console.log("trigger enter", item.start)
        },
        onLeave:function (item:ScrollTrigger){
          console.log("leave", item.end)
        }
      }
    )

    ScrollTrigger.refresh()

  },[width])

  const getContainerQuery=(widthX : number | undefined)=>{
    if(!widthX){return "mobile no-w"}
    if(widthX >660){
      return "desktop";
    }else {
      return "mobile";
    }
  }

  const onExpandBuyingOptions=()=>{
    ScrollTrigger.refresh();
  }

  const getWidth=(widthX : number | undefined)=>{
    if(!widthX){return "100%"}
    return "500px"
  }

  const getOOS=():productVariantColor[]=>{
    if(!router.query.oos){
      console.log("getOOS false")
      return KSS_IN;
    }
    if(router.query.oos == "false"){
      return KSS_IN;
    }else if(router.query.oos == "true"){
      return KSS_OOS;
    }
    return KSS_IN;
  }

  return(
    <div ref={ref} className={`${getContainerQuery(width)} pdp-outer`} >
      <div className="background-fader"></div>
      <div  className="main-pdp-section">
        <div ref={carouselRef} className="media-area" >
          <div >
            <Kcarousel
              carouselType="slider"
              component="carousel"
              itemsPerSlide={1}
              keepNavButtons={true}
              navPosition="bottom"
              navStyle="thumbnails"
              slides={[
                <div key="0" className="image-item-container"><img alt="" className="image-item" src="/product-images/kss/kss-0.webp" title=""/></div>,
                <div key="1" className="image-item-container"><img alt="" className="image-item" src="/product-images/kcs/kcs-open.png" title=""/></div>,
                <div key="2" className="image-item-container"><img alt="" className="image-item" src="/product-images/kcs/kcs-mug.png" title=""/></div>,
                <div key="3" className="image-item-container"><img alt="" className="image-item" src="/product-images/kcs/scene.jpg" title=""/></div>,
                <div key="4" className="image-item-container"><img alt="" className="image-item" src="/product-images/kcs/kcs-open.png" title=""/></div>,
                <div key="5" className="image-item-container"><img alt="" className="image-item" src="/product-images/kcs/kcs-mug.png" title=""/></div>
              ]}
            />
          </div>
        </div>

        <div ref={mediaContainerRef} className="product-details">
          <ProductIdentity
            productName="K-Supreme® SMART"
            productNameExtended="K-Supreme® SMART Single-Serve Coffee Maker"
            rating={{
              height: 1,
              ratingNumber: 4.2,
              scrollToTargetID: 'Ratings',
              totalNumberOfReviews: 1431,
              totalNumberOfStars: 5
            }}
            tagline="With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless. "
          />
          <KToggle

            toggleOptions={[
              {
                imagePath: '/product-selection/kss-thumb.webp',
                label: 'K-Supreme® SMART'
              },
              {
                imagePath: '/product-selection/ksps-thumb.webp',
                label: 'K-Supreme® Plus SMART'
              }
            ]}
            toggleType="side-by-side"
            selectedCaratPosition="top"
            toggleStyle="spaced-out"
          />
          <ColorPicker
            colorVariants={getOOS()}
            showProductColors={true}
          />
          <AddKSK
            brewerImagePath="/product-images/kss/kss-0.webp"
            finePrint="1 year, 16 box Auto-Delivery commitment"
            numberOfRequiredPods={4}
            flag={{
              flagColor: 'KSK',
              flagLabel: 'Our Best Deal'
            }}
            message={{
              primaryMessage: `You're saving $100`,
              secondaryMessage: 'with Keurig Starter Kit'
            }}
            learnMore={{
              label : "Learn More",
              mode : "pop-up",
              articleTitle : "Benefits of Keurig® Starter Kit",
              articleContent : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ante vitae commodo mollis. Cras dui nunc, mollis venenatis nunc vel, condimentum dapibus ipsum. Quisque auctor lacus quam, quis dignissim nisl rutrum vel. Ut tristique ante sit amet diam placerat ultrices et hendrerit sem.",
            }}
            price={{
              basePrice: 199.99,
              finalPrice: 99.99
            }}
            themeColor="KSK"
          />
          <SecondaryPurchaseOptions
            onExpandAction={()=>onExpandBuyingOptions()}
            basePrice={199.99}
            couponDetails="Coupon: 20% Off Select Brewers"
            coupons={[
              {
                couponActive: false,
                couponLabel: 'Apply Coupon',
                couponDetails : "20% Off Select Brewers. "
              }
            ]}
            mainActionLabel="Brewer Only"
            mainAddToCartLabel=" Add to Cart"
            mainPurchaseOptionSettings={{
              basePrice: 199.99,
              finalPrice: 199.99,
              mainLabel: 'Just Brewer',
              productName: 'K-Café® SMART',
              showStrikeThrough: false,
              learnMoreSettings :{
                mode : "pop-up",
                labelStandard : "Learn more",
                articleTitle : "Offer Details",
                articleCopy : "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend velit sem, auctor rutrum ipsum consequat sed. Duis tortor dui, eleifend nec blandit a, scelerisque in neque. Duis et metus quis neque facilisis iaculis vitae nec est."
              }
            }}
            productImagePath="/images/silos/KCS_AltImages_KCOM-small.png"
            upsellOptions={{
              comboBasePrice: 219.99,
              comboFinalPrice: 239.99,
              products: [
                {
                  basePrice: 39.99,
                  brand: 'Keurig®',
                  finalPrice: 19.99,
                  productImagePath: '/images/silos/KCS_AltImages_KCOM-small.png',
                  productName: 'K-Cafe SMART Coffee Maker',
                  showStrikeThrough: false
                },
                {
                  basePrice: 39.99,
                  brand: 'HyperChiller®',
                  finalPrice: 19.99,
                  productImagePath: '/product-images/HyperChiller.webp',
                  productName: 'HyperChiller',
                  showStrikeThrough: false
                }
              ],
              showStrikethrough: true,
              upsellSectionName: 'Better Together',
            }}
            showStrikeThrough={true}/>
          <FreeShipping
            colorOverride="dark-roast"
            messageText="This item ships FREE"
            showFreeShipping
            sizeOverride="1.5rem"
          />
          <FeatureBulletsArea
            height="auto"
            features={[
              {
                featureDetails: 'Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app',
                featureIcon: 'brew-id',
                featureLabel: 'BrewId™',
                showChevron: true
              },
              {
                featureDetails: 'Brew from anywhere, get personalized recommendations, manage your favorites',
                featureIcon: 'icon-wifi',
                featureLabel: 'Connected Convenience',
                showChevron: true
              },
              {
                featureDetails: 'Get easy step-by-step directions in the Keurig® app to make lattes, cappuccinos, or your favorite Café Creations',
                featureIcon: 'barista-mode',
                featureLabel: 'Barista Mode™',
                showChevron: true
              },
              {
                featureDetails: 'Get just enough pods, just when you need them',
                featureIcon: 'icon-shipping-truck',
                featureLabel: 'Smart Auto-Delivery',
                showChevron: true
              }
            ]}
            featuresAreaName="SMART Features"
          />
          <FeatureBulletsArea
            height="auto"
            features={[
              {
                featureDetails: 'Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app',
                featureIcon: 'brew-id',
                featureLabel: 'Hot & Cold Milk Frother',
                showChevron: true
              },
              {
                featureDetails: 'Brew from anywhere, get personalized recommendations, manage your favorites',
                featureIcon: 'ultimate-customization',
                featureLabel: 'Ultimate Customization',
                showChevron: true
              },
              {
                featureDetails: 'Get easy step-by-step directions in the Keurig® app to make lattes, cappuccinos, or your favorite Café Creations',
                featureIcon: 'multistream',
                featureLabel: 'MultiStream™ Technology',
                showChevron: true
              },
              {
                featureDetails: 'Get just enough pods, just when you need them',
                featureIcon: 'icon-shipping-truck',
                featureLabel: '4 Cup Sizes',
                showChevron: true
              },
              {
                featureDetails: 'Get just enough pods, just when you need them',
                featureIcon: 'icon-shipping-truck',
                featureLabel: '65oz Removable Reservoir',
                showChevron: true
              },
              {
                featureDetails: 'Get just enough pods, just when you need them',
                featureIcon: 'icon-shipping-truck',
                featureLabel: 'Brew Over Ice',
                showChevron: true
              }
            ]}
            featuresAreaName="Brewer Features"
          />
        </div>
      </div>
      <div ref={endPin} className="end-pin" />
      <SpecificationsArea
        contentStack={[
          {
            cardData: {
              colorScheme: 'dark-roast',
              headerAlignment: 'center',
              headerLabel: 'Brew Possibilities',
              headerStyle: 'line-through',
              hierarchyLevel: 3
            },
            cardType: 'header-area'
          },
          {
            cardData: {
              cards: [
                {
                  cardType: 'simple',
                  simpleCardData: {
                    alignment: 'center',
                    mainFocalImage: {
                      cropStyle: 'circle',
                      imagePath: '/editorial/hot.png'
                    },
                    mainImageSize: 'default-size',
                    title: 'Hot',
                    titlePosition: 'after-image'
                  }
                },
                {
                  cardType: 'simple',
                  simpleCardData: {
                    alignment: 'center',
                    mainFocalImage: {
                      cropStyle: 'circle',
                      imagePath: '/editorial/iced.png'
                    },
                    mainImageSize: 'default-size',
                    title: 'Iced',
                    titlePosition: 'after-image'
                  }
                },
                {
                  cardType: 'simple',
                  simpleCardData: {
                    alignment: 'center',
                    mainFocalImage: {
                      cropStyle: 'circle',
                      imagePath: '/editorial/Specialty.png'
                    },
                    mainImageSize: 'default-size',
                    title: 'Specialty',
                    titlePosition: 'after-image'
                  }
                }
              ]
            },
            cardType: 'multi-card-presenter'
          },
          {
            cardData: {
              colorScheme: 'dark-roast',
              headerAlignment: 'center',
              headerLabel: 'Specifications',
              headerStyle: 'line-through',
              hierarchyLevel: 3
            },
            cardType: 'header-area'
          },
          {
            cardData: {
              colorScheme: 'dark-roast',
              headerAlignment: 'left',
              headerLabel: 'Dimensions',
              headerStyle: 'medium-light',
              hierarchyLevel: 3
            },
            cardType: 'header-area'
          },
          {
            cardData: {
              items: [
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'inline',
                  primaryMessage: {
                    label : 'Height:'
                  },
                  secondaryMessage: {
                    label : '12.7"'
                  }
                },
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'inline',
                  primaryMessage: {
                    label: 'Height when open:'
                  },
                  secondaryMessage: {
                    label : '17.2"'
                  }
                },
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'inline',
                  primaryMessage: {
                    label : 'Width:'
                  },
                  secondaryMessage: {
                    label: '17.2"'
                  }
                },
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'inline',
                  primaryMessage: {
                    label: 'Weight:'
                  },
                  secondaryMessage: {
                    label : '8.1lbs"'
                  }
                }
              ],
              layoutMode: 'inline'
            },
            cardType: 'multi-key-value-area'
          },
          {
            cardData: {
              cards: [
                {
                  cardType: 'simple',
                  simpleCardData: {
                    customClasses : 'full-width',
                    alignment: 'center',
                    mainFocalImage: {
                      cropStyle: 'no-crop',
                      imagePath: '/product-images/kcs/kcs-dimensions.png'
                    },
                    mainImageSize: 'full-width',
                    title: '',
                    titlePosition: 'after-image'
                  }
                }
              ]
            },
            cardType: 'multi-card-presenter'
          },
          {
            cardData: {
              items: [
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'stacked',
                  primaryMessage: {
                    label : 'Phone Compatability'
                  },
                  secondaryMessage: {
                    label : 'The K-Café® SMART brewer is compatible with iOS 13 and higher and Android 8 or higher.'
                  }
                },
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'stacked',
                  primaryMessage: {
                    label : 'Wi-Fi® Requirements'

                  },
                  secondaryMessage: {
                    label : 'The K-Café® SMART is optimized for home 2.4 GHz Wi-Fi® networks, using WPA2-PSK security. It is not compatible with networks that require an additional username and/or password, a webpage click through to establish a connection or 5 GHz Wi-Fi® networks."'
                  }
                },
                {
                  colorSchemes: 'dark-roast',
                  layoutType: 'stacked',
                  primaryMessage: {
                    label : 'Compatible with the My K-Cup® Universal Reusable Coffee Filter'
                  },
                  secondaryMessage: {
                    label : 'Brew your own ground coffee (sold separately)'
                  }
                }
              ],
              layoutMode: 'inline'
            },
            cardType: 'multi-key-value-area'
          }
        ]}
        mediaElementPath="/video/kcs_pdp.webm"
        mediaType="movie"
      />
      <ScrubVideo
        duration={8.5}
        mediaPath="/360s/kcs7.webm"
        scrollDuration={450}
        videoHeight="100vh"
      />
      <section>
        <ContentItem
          customClasses="max-height"
          backGroundType="movie"
          backgroundUrlPath="/video/frother-pour.mp4"
          contrastBackground="none"
          ctaLabel="Call to action"
          ctaLinkTo="www.google.com"
          heightMethod="fit-content"
          mainMessage="Perfectly frothed milk"
          mainMessageSize="Large"
          mainMessageColor={"#473036"}
          secondaryMessageSize="Medium"
          secondaryMessage="Create creamy lattes, frothy cappuccinos and so much more using milk or your favorite dairy substitute and K-Café®’s built-in milk frother"
          sectionType="content-front-and-center"
          backgroundColor="none"
          component="content"
          hasCTA={false}
          hasFocalImage={false}
          mainTextHasShadow={false}
          sectionName={"milk-frother-intro"}
        />
      </section>
      <section className="connected">
        <ContentItem
          backgroundColor="white"
          backgroundUrlPath="/product-images/kcs/connected-convenience.jpg"
          contrastBackground="light"
          ctaLabel="Get the Keurig® App"
          ctaLinkTo=""
          hasCTA={true}
          ctaButtonType="primary"

          heightMethod="fit-content"
          mainMessage="“Alexa, tell Keurig® to brew me a single shot.”"
          mainMessageSize={"Large"}
          mainMessageColor="#473036"
          mainMessageWeight="heavy-weight"
          mainTextHasShadow

          messageAlignment="left"
          secondaryMessageSize="Medium"
          secondaryMessage="Connect your SMART brewer to Wi-Fi® and brew from anywhere — even bed — with a simple Alexa or Google Home voice routine"
          sectionType="content-left"
          backGroundType={"image"}
          component="content"
          sectionName="connected_con"
          hasFocalImage={true}
          focalImageIcon="none"
          focalImagePath="/images/app-stores.png"
          focalImagePosition="bottom"
          focalImageSize="auto"
        />
      </section>
      <section>
        <ContentItem
          backGroundType="image"
          backgroundColor="medium-roast"
          backgroundUrlPath="/images/SMART-fam.png"
          component="content"
          contrastBackground="none"
          ctaButtonType="primary"
          ctaLabel="Learn More"
          ctaLinkTo=""
          ctaMode="button"
          hasCTA
          heightMethod="fit-content"
          mainMessage="Meet the Whole SMART Family"
          mainMessageColor="#473036"
          messageTextAlignment="text-center"
          mainMessageSize="Large"
          secondaryMessage=""
          secondaryMessageWeight="heavy-weight"
          sectionName="meetSmart"
          sectionType="content-front-and-center"
          hasFocalImage={false}
          mainTextHasShadow={false}
          customClasses="message-upper"
        />
      </section>
      <section>
        <ContentItem
          customClasses="duo-tiled"
          backGroundType="image"
          backgroundColor="none"
          backgroundUrlPath="/images/kcs-kit.webp"
          contrastBackground="dark"
          ctaLabel="Call to action"
          ctaLinkTo="www.google.com"
          ctaButtonType="primary"
          hasCTA
          hasTermsConditions
          heightMethod="fit-content"
          mainMessage="Get Your K-Cafe® SMART for 50% Off"
          mainMessageColor="#473036"
          mainMessageSize="Medium"
          mainMessageWeight="heavy-weight"
          messageTextAlignment="text-left"
          secondaryMessage="Includes SMART Deliver with up to 96 FREE Pods, 25% Off Beverages & Free Shipping"
          secondaryMessageWeight="heavy-weight"
          secondaryMessageSize="Small"
          sectionAppearance="default"
          sectionType="content-right"
          termsAndConditionsCTA={{
            termsAndConditionsCtaLabel: 'See Details',
            termsAndConditionsLabelDetail: 'Restrictions apply'
          }}
          termsAndConditionsFullText={{
            header: 'Lorem ipsum tolem set',
            termsAndConditionsDetailCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet.'
          }}
          termsAndConditionsMode="slide-down-mode"
          component="content"
          hasFocalImage={false}
          mainTextHasShadow={false}
          sectionName="kcsKit"/>
      </section>
    </div>
  )
}

export default KSS;
