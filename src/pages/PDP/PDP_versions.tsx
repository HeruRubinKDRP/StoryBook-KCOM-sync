import React from "react";
import {Kcarousel} from "../../components/Carousel/Kcarousel";
import {ContentItem} from "../../components/ContentComponents/ContentComponent";
import {FocalImageContent} from "../../components/ContentComponents/FocalImage/FocalImage";
import PdpFramework from "../../components/PDP_Related/PDP_FrameWork/PDP_FrameWork";
import {carousel_images_KCS, carousel_images_KSS, KCS_specs_data} from "./pdp-data";
import {navDemo} from "../../components/NavMenu/NavigationV2/navigation.stories";

export const KCS_PDP=(version : string | string[])=>{

  switch(version){
    default:
      return(
        <PdpFramework
            stickyHeader={
              {
                stickyHeaderMode: "slim",
                navigationRelated: {
                  sizingMode: "liquid-design",
                  loggedIn: false,
                  emailErrorMessage: "Please enter a valid email address",
                  emailSuccessMessage: "Thank you for subscribing!",
                  emailExplanationText: "Sign up for our newsletter to receive updates on new products and promotions.",
                  placeHolderText: "Enter your email address",
                  defaultActiveHoverIndex: -1,
                  submitButtonText: "Subscribe",
                  isNobo: false,
                  navItems: navDemo
                }
              }
            }
          carousel={{
            slideImageURLs: carousel_images_KCS
          }}
          productIdentity={{
            flag: {
              flagLabel: "New",
              flagStyle: "alternating-sharp-round",
            },
            productName: "K-Café® SMART",
            productNameExtended: "K-Café® SMART Single-Serve Coffee, Cappuccino and Latte Maker",
            tagline: "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations",

          }}
          specsArea={{
            contentArea: KCS_specs_data,
            mediaElementPath: "/video/kcs_pdp.webm",
            mediaType: "movie"
          }}
          addKSK={{
            hasKSK: true,
            kskData: {

              themeColor: "KSK",
              brewerImagePath: "/product-images/kcs/kcs-0.png",
              finePrint: "1 year, 16 box Auto-Delivery commitment",
              numberOfRequiredPods: 4,
              flag: {
                flagColor: 'KSK',
                flagLabel: 'Our Best Deal'
              },
              message: {
                primaryMessage: `You're saving $100`,
                secondaryMessage: 'with Keurig Starter Kit'
              },
              learnMore: {
                label: "Learn More",
                mode: "pop-up",
                articleTitle: "Benefits of Keurig® Starter Kit",
                articleContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ante vitae commodo mollis. Cras dui nunc, mollis venenatis nunc vel, condimentum dapibus ipsum. Quisque auctor lacus quam, quis dignissim nisl rutrum vel. Ut tristique ante sit amet diam placerat ultrices et hendrerit sem.",
              },
              price: {
                basePrice: 199.99,
                finalPrice: 99.99
              }
            }
          }}

          secondaryPurchaseOptions={{
            hasSecondaryPurchaseOptions: true,
            secondaryData: {
              basePrice: 199.99,
              couponDetails: "Coupon: 20% Off Select Brewers",
              mainActionLabel: "Brewer Only",
              mainAddToCartLabel: " Add to Cart",
              productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
              showStrikeThrough: false,
              upsellOptions: {
                comboBasePrice: 219.99,
                comboFinalPrice: 239.99,
                showStrikethrough: true,
                upsellSectionName: 'Better Together',
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
                  },

                ]
              },
              mainPurchaseOptionSettings: {
                basePrice: 199.99,
                finalPrice: 199.99,
                mainLabel: 'Just Brewer',
                productName: "K-Café® SMART",
                showStrikeThrough: false,
                learnMoreSettings: {
                  mode: "pop-up",
                  labelStandard: "Learn more",
                  articleTitle: "Offer Details",
                  articleCopy: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent"
                }
              },
              coupons: [
                {
                  couponActive: false,
                  couponLabel: 'Apply Coupon',
                  couponDetails: '20% Off Select Brewers.'
                }
              ]
            },

          }}

          freeShipping={{
            colorOverride: "dark-roast",
            messageText: "This item ships FREE",
            showFreeShipping: true,
            sizeOverride: "1.5rem"
          }}

          featureBullets={{
            SMART: {
              hasSMART: true,
              bullets: {
                featuresAreaName: "SMART Features",
                features: [
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
                ],
                height: "auto"
              }
            },
            features: {
              hasBullets: true,
              bullets: {
                featuresAreaName: "Brewer Features",
                features: [
                  {
                    featureDetails: 'Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app',
                    featureIcon: 'milk-frother',
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
                    featureIcon: 'icon-cup',
                    featureLabel: '4 Cup Sizes',
                    showChevron: true
                  },
                  {
                    featureDetails: 'Get just enough pods, just when you need them',
                    featureIcon: 'water-drop',
                    featureLabel: '65oz Removable Reservoir',
                    showChevron: true
                  },
                  {
                    featureDetails: 'Get just enough pods, just when you need them',
                    featureIcon: 'icon-iced-coffee',
                    featureLabel: 'Brew Over Ice',
                    showChevron: true
                  }
                ],
                height: "auto"
              }
            }
          }}

          flyAround={{
            hasFlyAround: true,
            flyAroundSettings: {
              duration: 8.5,
              mediaPath: "/360s/kcs7.webm",
              scrollDuration: 450,
              videoHeight: "100vh"
            }
          }}

          contentArea={
            <>
              <section>
                <ContentItem
                  customClasses="max-height"
                  backGroundType="movie"
                  backgroundUrlPath="/video/how_to_froth.webm"
                  contrastBackground="none"
                  ctaLabel="Call to action"
                  ctaLinkTo="www.google.com"
                  heightMethod="fit-content"
                  mainMessage="Perfectly Frothed Milk for Recipes"
                  mainMessageSize="Large"
                  mainMessageColor={"#473036"}
                  secondaryMessageSize="Medium"
                  secondaryMessage="With our delicious recipes and the built-in milk frother, it's easy to create creamy lattes, frothy cappuccinos and so much more using milk or your favorite dairy substitute. "
                  sectionType="content-left"
                  sectionAppearance="inset-beveled"
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
                  backgroundUrlPath="/PDP/2-smart.webp"
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
                  backgroundTileImagePath="/images/kcs-kit-bg.webp"
                  customClasses="duo-tiled"
                  backGroundType="image"
                  backgroundColor="none"
                  backgroundUrlPath="/images/kcs-kit.webp"
                  backgroundTilingMethod="repeat"
                  contrastBackground="dark"
                  ctaLabel="Build Your Kit"
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
              <Kcarousel
                heightOverride="100%"
                carouselType="slider"
                component="carousel"
                keepNavButtons={false}
                navLabels={[
                  'Why you need it',
                  'How it works',
                  '96 Free Pods'
                ]}

                navPosition="bottom"
                navStyle="dots"
                slides={[
                  <div className="slide-item" key={0}>
                    <FocalImageContent
                      calloutBG_Color="latte"
                      calloutHeader="Step-By-Step Guided Recipes"
                      calloutLabel="Barista Mode™"
                      calloutParagraph="Explore a curated menu of Café Creations for your pod. See one you like?  Barista Mode™ will walk you through it. Before you know it, you'll be sipping on an iced vanilla latte. "
                      focalImagePath="/app/App-RecipeScreenshot.png"
                      hasCTA
                      mainBG_Color="latte70"
                      mainBG_imageCover="/app/app-bg.svg"
                      primaryMessageHeading="Get Connected to Amazing Coffee"
                      primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                      useAppStoreCTA
                      useCallOut
                      messageSize="Large"
                    />
                  </div>,
                  <div key={1} className="slide-item">
                    <FocalImageContent
                      calloutBG_Color="latte"
                      calloutHeader="Take Charge of Your Pods"
                      calloutLabel="My Pantry"
                      calloutParagraph="Need to add, change or snooze an item? Just tap My Pantry and follow the easy directions. You can even adjust how many pods you have if you purchase some elsewhere. "
                      focalImagePath="/app/app-reorder.png"
                      hasCTA
                      mainBG_Color="latte70"
                      mainBG_imageCover="/app/app-bg.svg"
                      primaryMessageHeading="Get Connected to Amazing Coffee"
                      primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                      useAppStoreCTA
                      useCallOut
                      messageSize="Large"
                    />
                  </div>,
                  <div key={2} className="slide-item">
                    <FocalImageContent
                      calloutBG_Color="latte"
                      calloutHeader="Fine Tune in the App"
                      calloutLabel="Customize Your Cup"
                      calloutParagraph="With the app, your smart phone becomes a precision remote control that makes it easy to change your size, temperature and brew strength to perfection."
                      focalImagePath="/app/app-pod.png"
                      hasCTA
                      mainBG_Color="latte70"
                      mainBG_imageCover="/app/app-bg.svg"
                      primaryMessageHeading="Get Connected to Amazing Coffee"
                      primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                      useAppStoreCTA
                      useCallOut
                      messageSize="Large"
                    />
                  </div>,

                ]}

                itemsPerSlide={1}/>
            </>
          }

          testParams={{
            scrollToTop: true,
          }}/>
      )
  }

}

export const KSS_PDP=(version : string | string[])=>{
  switch (version){
    default:
      return(
        <PdpFramework
            testParams={{
                scrollToTop: true,
            }}
            stickyHeader={{
              stickyHeaderMode : "slim",
              navigationRelated : {
              sizingMode : "liquid-design",
              loggedIn : false,
              emailErrorMessage : "Please enter a valid email address",
              emailSuccessMessage : "Thank you for subscribing!",
              emailExplanationText : "Sign up for our newsletter to receive updates on new products and promotions.",
              placeHolderText : "Enter your email address",
              defaultActiveHoverIndex : -1,
              submitButtonText : "Subscribe",
              isNobo : false,
              navItems : navDemo
            }}
            }
          carousel={{
            slideImageURLs: carousel_images_KSS
          }}
          productIdentity={{
            flag:{
              flagLabel: "New",
              flagStyle: "alternating-sharp-round",
            },
            productName: "Keurig K-Supreme SMART",
            productNameExtended: "K-Supreme SMART Single-Serve Coffee Maker",
            tagline: "With BrewID™, enjoying a rich, full-flavored cup of coffee brewed just the way you like it is effortless. ",

          }}
          specsArea={{
            contentArea: KCS_specs_data,
            mediaElementPath: "/video/kcs_pdp.webm",
            mediaType: "movie"
          }}
          addKSK={{
            hasKSK: true,
            kskData: {

              themeColor: "KSK",
              brewerImagePath: "/product-images/kcs/kcs-0.png",
              finePrint: "1 year, 16 box Auto-Delivery commitment",
              numberOfRequiredPods: 4,
              flag: {
                flagColor: 'KSK',
                flagLabel: 'Our Best Deal'
              },
              message: {
                primaryMessage: `You're saving $100`,
                secondaryMessage: 'with Keurig Starter Kit'
              },
              learnMore: {
                label: "Learn More",
                mode: "pop-up",
                articleTitle: "Benefits of Keurig® Starter Kit",
                articleContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ante vitae commodo mollis. Cras dui nunc, mollis venenatis nunc vel, condimentum dapibus ipsum. Quisque auctor lacus quam, quis dignissim nisl rutrum vel. Ut tristique ante sit amet diam placerat ultrices et hendrerit sem.",
              },
              price: {
                basePrice: 199.99,
                finalPrice: 99.99
              }
            }
          }}

          secondaryPurchaseOptions={{
            hasSecondaryPurchaseOptions: true,
            secondaryData: {
              basePrice: 199.99,
              couponDetails: "Coupon: 20% Off Select Brewers",
              mainActionLabel: "Brewer Only",
              mainAddToCartLabel: " Add to Cart",
              productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
              showStrikeThrough: false,
              upsellOptions: {
                comboBasePrice: 219.99,
                comboFinalPrice: 239.99,
                showStrikethrough: true,
                upsellSectionName: 'Better Together',
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
                  },

                ]
              },
              mainPurchaseOptionSettings: {
                basePrice: 199.99,
                finalPrice: 199.99,
                mainLabel: 'Just Brewer',
                productName: "K-Café® SMART",
                showStrikeThrough: false,
                learnMoreSettings: {
                  mode: "pop-up",
                  labelStandard: "Learn more",
                  articleTitle: "Offer Details",
                  articleCopy: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent"
                }
              },
              coupons: [
                {
                  couponActive: false,
                  couponLabel: 'Apply Coupon',
                  couponDetails: '20% Off Select Brewers.'
                }
              ]
            },

          }}

          freeShipping={{
            colorOverride: "dark-roast",
            messageText: "This item ships FREE",
            showFreeShipping: true,
            sizeOverride: "1.5rem"
          }}

          featureBullets={{
            SMART: {
              hasSMART: true,
              bullets: {
                featuresAreaName: "SMART Features",
                features: [
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
                ],
                height: "auto"
              }
            },
            features: {
              hasBullets: true,
              bullets: {
                featuresAreaName: "Brewer Features",
                features: [
                  {
                    featureDetails: 'Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app',
                    featureIcon: 'milk-frother',
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
                    featureIcon: 'icon-cup',
                    featureLabel: '4 Cup Sizes',
                    showChevron: true
                  },
                  {
                    featureDetails: 'Get just enough pods, just when you need them',
                    featureIcon: 'water-drop',
                    featureLabel: '65oz Removable Reservoir',
                    showChevron: true
                  },
                  {
                    featureDetails: 'Get just enough pods, just when you need them',
                    featureIcon: 'icon-iced-coffee',
                    featureLabel: 'Brew Over Ice',
                    showChevron: true
                  }
                ],
                height: "auto"
              }
            }
          }}

          flyAround={{
            hasFlyAround: true,
            flyAroundSettings: {
              duration: 8.5,
              mediaPath: "/360s/kcs7.webm",
              scrollDuration: 450,
              videoHeight: "100vh"
            }
          }}

          contentArea={
            <>
              <section>
                <ContentItem
                  customClasses="max-height"
                  backGroundType="movie"
                  backgroundUrlPath="/video/how_to_froth.webm"
                  contrastBackground="none"
                  ctaLabel="Call to action"
                  ctaLinkTo="www.google.com"
                  heightMethod="fit-content"
                  mainMessage="Perfectly Frothed Milk for Recipes"
                  mainMessageSize="Large"
                  mainMessageColor={"#473036"}
                  secondaryMessageSize="Medium"
                  secondaryMessage="With our delicious recipes and the built-in milk frother, it's easy to create creamy lattes, frothy cappuccinos and so much more using milk or your favorite dairy substitute. "
                  sectionType="content-left"
                  sectionAppearance="inset-beveled"
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
                  hasCTA={false}
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
                  backgroundUrlPath="/PDP/2-smart.webp"
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
                  backgroundTileImagePath="/images/kcs-kit-bg.webp"
                  customClasses="duo-tiled"
                  backGroundType="image"
                  backgroundColor="none"
                  backgroundUrlPath="/images/kcs-kit.webp"
                  backgroundTilingMethod="repeat"
                  contrastBackground="dark"
                  ctaLabel="Build Your Kit"
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
                  secondaryMessage="Includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping"
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
              <Kcarousel
                heightOverride="100%"
                carouselType="slider"
                component="carousel"
                keepNavButtons={false}
                navLabels={[
                  'Why you need it',
                  'How it works',
                  '96 Free Pods'
                ]}

                navPosition="bottom"
                navStyle="dots"
                slides={[
                  <div className="slide-item" key={0}>
                    <FocalImageContent
                      calloutBG_Color="latte"
                      calloutHeader="Step-By-Step Guided Recipes"
                      calloutLabel="Barista Mode™"
                      calloutParagraph="Explore a curated menu of Café Creations for your pod. See one you like?  Barista Mode™ will walk you through it. Before you know it, you'll be sipping on an iced vanilla latte. "
                      focalImagePath="/app/App-RecipeScreenshot.png"
                      hasCTA
                      mainBG_Color="latte70"
                      mainBG_imageCover="/app/app-bg.svg"
                      primaryMessageHeading="Get Connected to Amazing Coffee"
                      primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                      useAppStoreCTA
                      useCallOut
                      messageSize="Large"
                    />
                  </div>,
                  <div key={1} className="slide-item">
                    <FocalImageContent
                      calloutBG_Color="latte"
                      calloutHeader="Take Charge of Your Pods"
                      calloutLabel="My Pantry"
                      calloutParagraph="Need to add, change or snooze an item? Just tap My Pantry and follow the easy directions. You can even adjust how many pods you have if you purchase some elsewhere. "
                      focalImagePath="/app/app-reorder.png"
                      hasCTA
                      mainBG_Color="latte70"
                      mainBG_imageCover="/app/app-bg.svg"
                      primaryMessageHeading="Get Connected to Amazing Coffee"
                      primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                      useAppStoreCTA
                      useCallOut
                      messageSize="Large"
                    />
                  </div>,
                  <div key={2} className="slide-item">
                    <FocalImageContent
                      calloutBG_Color="latte"
                      calloutHeader="Fine Tune in the App"
                      calloutLabel="Customize Your Cup"
                      calloutParagraph="With the app, your smart phone becomes a precision remote control that makes it easy to change your size, temperature and brew strength to perfection."
                      focalImagePath="/app/app-pod.png"
                      hasCTA
                      mainBG_Color="latte70"
                      mainBG_imageCover="/app/app-bg.svg"
                      primaryMessageHeading="Get Connected to Amazing Coffee"
                      primaryMessageParagraph="Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. "
                      useAppStoreCTA
                      useCallOut
                      messageSize="Large"
                    />
                  </div>,

                ]}

                itemsPerSlide={1}/>
            </>
          }

        />
      )
  }
}
