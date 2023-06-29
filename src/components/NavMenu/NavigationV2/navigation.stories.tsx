import { StoryFn, Meta } from "@storybook/react";
import {iNavContentGroup, iNavigation, Navigation} from "./Navigation";


export default{
  title: "Navigation Global",
  component: Navigation,
  argTypes:{
    sizeMode : {
      name : "Sizing Mode",
      description :"dfdfd df df",
      control:"radio",
      options:["full-bleed","fixed-small"]
    },
    emailErrorMessage : {control : "text"},
    emailSuccessMessage : {control : "text"},
    explanationText : {control : "text"},
    defaultActiveHoverIndex : {control : "number"},
    submitButtonText : {control : "text"},
    isNobo : {control : "boolean"},
    sizingMode : {control : "radio", options:["liquid-design","hardcoded"]},
  }
} as Meta;

const Template: StoryFn<iNavigation> = (args)=><Navigation {...args} />;

export const NavExample = Template.bind({});

export const JustLargeLinks = Template.bind({});
JustLargeLinks.args={
  emailErrorMessage : "Please enter a valid email address",
  emailSuccessMessage : "Thank you for subscribing!",
  emailExplanationText : "<span class='attention'>Save 15% On Your Next Order</span> Get news, deals and more in your inbox.",
  submitButtonText : "Subscribe",
  defaultActiveHoverIndex : 4,
  navItems:[
    {
      navLabel : "Beverages",
      image: "",
      linkTo : "",
      tagging:"",
      highlighted : "no-highlight",
      mobilePriority : "high",
      requiresLoggedIn : false,
      hoverMenu :[
        {
          sectionMode : "links-large",
          sectionLabel : "All Beverages",
          sectionLinkTo : "",
          highlighted : "no-highlight",
          sectionNavItems :[
            {
              mode: "large",
              label : "Just Arrived",
              highlighted: "no-highlight",
              linkTo: "https://www.keurig.com/beverages/coffee/new/c/new101?cm_sp=just-arrived-_-Top-Nav-_-new101",
              image : "https://images.keurig.com/is/image/keurig/oz-just-arrived?wid=276&fmt=jpg&qlt=90,1"
            },
            {
              mode: "large",
              label : "Seasonals",
              highlighted: "no-highlight",
              linkTo: "https://www.keurig.com/beverages/seasonal/c/seasonal101?cm_sp=seasonal-beverages-_-Top-Nav-_-seasonal101",
              image : "https://images.keurig.com/is/image/keurig/oz-seasonals?wid=276&fmt=jpg&qlt=90,1"
            },
            {
              mode: "large",
              label : "Best Sellers",
              highlighted: "no-highlight",
              linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
              image : "https://images.keurig.com/is/image/keurig/oz-best-saller?wid=276&fmt=jpg&qlt=90,1"
            },
            {
              mode: "large",
              label : "Flavored",
              highlighted: "no-highlight",
              linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
              image : "https://images.keurig.com/is/image/keurig/oz-flavored?wid=276&fmt=jpg&qlt=90,1"
            },
            {
              mode: "large",
              label : "Just Arrived",
              highlighted: "no-highlight",
              linkTo: "https://www.keurig.com/beverages/coffee/new/c/new101?cm_sp=just-arrived-_-Top-Nav-_-new101",
              image : "https://images.keurig.com/is/image/keurig/oz-just-arrived?wid=276&fmt=jpg&qlt=90,1"
            },
            {
              mode: "large",
              label : "Seasonals",
              highlighted: "no-highlight",
              linkTo: "https://www.keurig.com/beverages/seasonal/c/seasonal101?cm_sp=seasonal-beverages-_-Top-Nav-_-seasonal101",
              image : "https://images.keurig.com/is/image/keurig/oz-seasonals?wid=276&fmt=jpg&qlt=90,1"
            }
          ]
        }
      ]
    }
  ]
}

const sourceCode : string = `
import React, {ReactElement, useState} from "react";
import {iNavItem, NavItem} from "./navItem";
import {NavigationStyled} from "./navigation-styled";


export interface iNavigation {
  navItems: {
    navLabel: string;
    linkTo: string;
    tagging: string;
    requiresLoggedIn: boolean;
    highlighted: boolean;
    image: string;
    hoverMenu: {
      sectionMode: "links" | "links-large" | "link-graveyard" | "footer";
      sectionLabel: string;
      sectionLinkTo: string;
      highlighted: boolean;
      sectionNavItems: iNavItem[]
    }[]
  }[]
}

export const Navigation = (props: iNavigation) => {
  const [currentHover, setCurrentHover] = useState(0);

  const getNav = () => {
    let menuNavItems: ReactElement[] = [];
    let sectionsForActiveHover: ReactElement[] = [];

    for (let i = 0; i < props.navItems.length; i++) {
      //create main nav items
      menuNavItems.push(
        <NavItem
          mode="main-nav"
          label={props.navItems[i].navLabel}
          linkTo={props.navItems[i].linkTo}
          highlighted={props.navItems[i].highlighted}
          image={props.navItems[i].image}
        />);

      if (i != currentHover) {
        continue;
      }
//Bucket for nav items that will go into each section

      for (let j = 0; j < props.navItems[i].hoverMenu.length; j++) {
        let navItemsForSection: ReactElement[] = [];
        for (let k = 0; k < props.navItems[i].hoverMenu[j].sectionNavItems.length; k++) {
          navItemsForSection.push(
            <NavItem
              mode={props.navItems[i].hoverMenu[j].sectionNavItems[k].mode}
              label={props.navItems[i].hoverMenu[j].sectionNavItems[k].label}
              linkTo={props.navItems[i].hoverMenu[j].sectionNavItems[k].linkTo}
              highlighted={props.navItems[i].hoverMenu[j].sectionNavItems[k].highlighted}
              image={props.navItems[i].hoverMenu[j].sectionNavItems[k].image}

            />
          )
//wrap items in section container
          if (k == props.navItems[i].hoverMenu[j].sectionNavItems.length - 1) {
            sectionsForActiveHover.push(
              <section className={\`section-container \${props.navItems[i].hoverMenu[j].sectionMode}\`}>
                <NavItem
                  mode="section-main"
                  label={props.navItems[i].hoverMenu[j].sectionLabel}
                  linkTo={props.navItems[i].hoverMenu[j].sectionLinkTo}
                  highlighted={props.navItems[i].hoverMenu[j].highlighted}
                />
                <div className="nav-items-area">
                  {navItemsForSection}
                </div>
              </section>
            )
          }
        }
      }
    }
    return (<>
        <nav>
          <div className="nav-item-container">
            {menuNavItems}
          </div>
          <div className="nav-sections">
            {sectionsForActiveHover}
          </div>
        </nav>

      </>
    )

  }

  return (
    <NavigationStyled>
      <div className="secondary-importance-items">

      </div>
      {getNav()}
    </NavigationStyled>
  )


}
`

NavExample.parameters ={
  docs :{
    source:{
      code: sourceCode,
      language: "typescript",
      type: "auto",
    }
  }
}

export const navDemo : iNavContentGroup[] = [
  {
    navLabel : "Keurig® Starter Kit",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "highlight-bubble",
    mobilePriority : "high",
    requiresLoggedIn : false,
    hoverMenu :[
      {
        sectionMode : "hero-gallery",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "product-hero",
            label : "50% off SMART Coffee Makers",
            secondaryText : "Cancellation fees & restrictions apply.",
            secondaryLinkLabel : "",
            textBlock: `<ul>
                    <li>Up to $125 off SMART Brewer</li>
                    <li>Your first 4 boxes (96 pods) of your 16-box commitment are FREE*</li>
                    <li>25% off pods with SMART Delivery</li>
                    <li>BrewID™ for flavorful coffee and delicious café beverages</li>
                </ul>`,
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            ctaLinkLabel : "GET STARTED",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/Nav-KSPS-withWifi?hie=264&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "product-hero",
            label : "50% or More off Coffee Makers",
            secondaryText : "Cancellation fees & restrictions apply.",
            secondaryLinkLabel : "",
            textBlock: `<ul>
                    <li>Up to $115 off Brewer + 25% off pods with Scheduled Auto-Delivery</li>
                    <li>16-box annual commitment</li>
                    <li>9 top selling brewers to choose from</li> 
                </ul>`,
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            ctaLinkLabel : "GET STARTED",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-ksk2?hie=256&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "product-hero",
            label : "FREE Coffee Makers",
            secondaryText : "Cancellation fees & restrictions apply.",
            secondaryLinkLabel : "",
            textBlock: `<ul>
                    <li>Up to $115 off Brewer + 25% off pods with Scheduled Auto-Delivery</li>
                    <li>16-box annual commitment</li>
                    <li>9 top selling brewers to choose from</li> 
                </ul>`,
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            ctaLinkLabel : "GET STARTED",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-ksk2?hie=256&fmt=png-alpha&qlt=90,1"
          },{
            mode: "product-hero",
            label : "50% off Coffee Makers For Your Business",
            secondaryText : "Cancellation fees & restrictions apply.",
            secondaryLinkLabel : "",
            textBlock: `<ul>
                    <li>Up to $115 off Brewer + 25% off pods with Scheduled Auto-Delivery</li>
                    <li>16-box annual commitment</li>
                    <li>9 top selling brewers to choose from</li> 
                </ul>`,
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            ctaLinkLabel : "GET STARTED",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-ksk3?hie=274&fmt=png-alpha&qlt=90,1"
          },
        ]
      }


    ]
  },
  {
    navLabel : "Start Auto-Delivery",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    mobilePriority : "high",
    requiresLoggedIn : false,
    hoverMenu :[
      {
        sectionMode : "hero-gallery",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "promo",
            label : "Coffee Subscription",
            secondaryText : "All the beverages you love on your schedule.",
            highlighted: "no-highlight",
            textBlock :"All the beverages you love on your schedule.<br>You set your delivery schedule<br> for ultimate control. Save 25%. <br>No Fees. Cancel Anytime.",
            ctaLinkLabel : "Learn More",
            finePrint : "Restrictions apply.",
            linkTo: "   ",
            image : "/nav/auto-delivery/sched-bg.svg",
          },
          {
            mode: "promo",
            label : "SMART Coffee Subscription",
            textBlock : "With BrewID™, we only send more pods when <br> you need them for ultimate convenience.<br> Save 25%. No Fees. Cancel Anytime.",
            secondaryText : "Just enough pods, just in time.",
            highlighted: "no-highlight",
            ctaLinkLabel : "Learn More",
            linkTo: " ",
            finePrint : "SMART brewer required. Restrictions apply.",
            image : "/nav/auto-delivery/smart-bg.svg"
          }
        ]
      }
    ]
  },
  {
    navLabel : "SMART Family",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    mobilePriority : "high",
    requiresLoggedIn : false,
    hoverMenu :[
      {
        sectionMode : "hero-gallery",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "product-hero",
            label : "K-Supreme® SMART",
            textBlock : "3 Sleek Colors <br>4 Brew Sizes",
            secondaryLinkLabel : "Build Your Kit",
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            ctaLinkLabel : "Learn More",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/K-Supreme-SMART-Coffee-Maker_5000367509?fmt=png-alpha&wid=575"
          },
          {
            mode: "product-hero",
            label : "K-Supreme® Plus SMART",
            ctaLinkLabel : "Learn More",
            textBlock : "Stainless Steel Metal Wrap <br> 5 Brew Sizes",
            secondaryLinkLabel : "Build Your Kit",
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000365542?fmt=png-alpha&wid=575"
          },
          {
            mode: "product-hero",
            label : "K-Café® SMART",
            ctaLinkLabel : "Learn More",
            textBlock : "Fast & Easy Coffeehouse Drinks<br> Built-In Milk Frother",
            secondaryLinkLabel : "Build Your Kit",
            secondaryLinkTo : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/nav-sf-3?wid=292&fmt=jpg&qlt=90,1"
          }
        ]
      },
      {
        sectionMode : "link-graveyard",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "article-large",
            label : "A coffee experience perfectly personalized for you",
            highlighted: "no-highlight",
            linkTo: "",
            image : "/nav/smart-fam.png",
            icon : "none"
          },
          {
            mode: "promo",
            label : "Select Coffee Makers<br> 50% Off or Free",
            secondaryText: "With Our Exclusive Starter Kit",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },


        ]
      },
    ]
  },
  {
    navLabel : "Beverages",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    mobilePriority : "high",
    requiresLoggedIn : false,
    sectionBackgroundColor : "white",
    hoverMenu :[
      {
        sectionMode : "links-large",
        sectionLabel : "All Beverages",
        sectionLinkTo : " ",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "large",
            label : "Just Arrived",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/new/c/new101?cm_sp=just-arrived-_-Top-Nav-_-new101",
            image : "https://images.keurig.com/is/image/keurig/oz-just-arrived?wid=276&fmt=jpg&qlt=90,1"
          },
          {
            mode: "large",
            label : "Seasonals",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/seasonal/c/seasonal101?cm_sp=seasonal-beverages-_-Top-Nav-_-seasonal101",
            image : "https://images.keurig.com/is/image/keurig/oz-seasonals?wid=276&fmt=jpg&qlt=90,1"
          },
          {
            mode: "large",
            label : "Best Sellers",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
            image : "https://images.keurig.com/is/image/keurig/oz-best-saller?wid=276&fmt=jpg&qlt=90,1"
          },
          {
            mode: "large",
            label : "Flavored",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "https://images.keurig.com/is/image/keurig/oz-flavored?wid=276&fmt=jpg&qlt=90,1"
          }
        ]
      },
      {
        sectionMode : "links",
        sectionLabel : "Coffee",
        sectionLinkTo : "ss ",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "medium",
            label : "Dark Roast & Expresso",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/dark+roast/c/darkRoast?cm_sp=dark-roast-_-Top-Nav-_-darkroast101",
            image : "https://images.keurig.com/is/image/keurig/oz-dark-rosted1?wid=80&fmt=jpg&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Medium Roast",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/medium+roast/c/mediumRoast?cm_sp=medium-roast-_-Top-Nav-_-mediumroast101",
            image : "https://images.keurig.com/is/image/keurig/oz-medium-rosted-2?wid=80&fmt=jpg&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Light Roast",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/light+roast/c/lightRoast?cm_sp=light-roast-_-Top-Nav-_-lightroast101",
            image : "https://images.keurig.com/is/image/keurig/oz-light-rosted1?wid=80&fmt=jpg&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Decaf",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/decaf/c/decaf101?cm_sp=decaf-_-Top-Nav-_-decaf101",
            image : "https://images.keurig.com/is/image/keurig/oz-decaf1?wid=80&fmt=jpg&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Brew Over Ice",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/c/beverages101?q=BeverageType:Iced+Beverages:brand:GREEN_MOUNTAIN_COFFEE_ROASTERS&cm_sp=iced-_-Top-Nav-_-brew+over+ice",
            image : "https://images.keurig.com/is/image/keurig/oz-brew-ice1?wid=80&fmt=jpg&qlt=90,1"
          }
        ]
      },
      {
        sectionMode : "links",
        sectionLabel : "Specialty Shop",
        sectionLinkTo : "dd",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "medium",
            label : "Hot Cocoa",
            highlighted: "no-highlight",
            linkTo: " ",
            image : ""
          },
          {
            mode: "medium",
            label : "Latte's & More",
            highlighted: "no-highlight",
            linkTo: " ",
            image : ""
          }
        ]
      },
      {
        sectionMode : "links",
        sectionLabel : "Tea",
        sectionLinkTo : "dd ",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "medium",
            label : "Black Tea",
            highlighted: "no-highlight",
            linkTo: "",
            image : ""
          },
          {
            mode: "medium",
            label : "Green Tea",
            highlighted: "no-highlight",
            linkTo: "",
            image : ""
          },
          {
            mode: "medium",
            label : "Chai Tea",
            highlighted: "no-highlight",
            linkTo: "",
            image : ""
          },
          {
            mode: "medium",
            label : "Iced Tea",
            highlighted: "no-highlight",
            linkTo: "",
            image : ""
          }
        ]
      },
      {
        sectionMode : "link-graveyard",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "small",
            label : "Deal of the Day",
            highlighted: "highlight-by-color",
            linkTo: " ",
            image : "",
            icon : "icon-deal-tag"
          },
          {
            mode: "small",
            label : "Shop Gifts",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "K-Cup® Pods",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "K-Cup Pods",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Easy-Peel Lids",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Variety Packs",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Bagged Coffee",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Canned Coffee",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Beverage Bundles",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Custom Variety Packs",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },{
            mode: "small",
            label : "Learn About Recyclable K-Cup Pods",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },{
            mode: "small",
            label : "Find your perfect cup",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "",
            icon : "none"
          },

        ]
      },
      {
        sectionMode: "footer",
        sectionLabel : "Favorite Brands",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "large",
            label : "",
            highlighted: "highlight-by-color",
            linkTo: "google.com",
            image : "https://images.keurig.com/is/image/keurig/oz-greenMountain-flyout?wid=144&fmt=png-alpha&qlt=90,1",
            icon : "icon-deal-tag"
          },
          {
            mode: "large",
            label : "",
            highlighted: "no-highlight",
            linkTo: "google.com",
            image : "https://images.keurig.com/is/image/keurig/oz-tods-flyout?wid=144&fmt=png-alpha&qlt=90,1",
            icon : "none"
          },
          {
            mode: "large",
            label : "",
            highlighted: "no-highlight",
            linkTo: "google.com",
            image : "https://images.keurig.com/is/image/keurig/oz-mccafe-flyout?wid=144&fmt=png-alpha&qlt=90,1",
            icon : "none"
          },
          {
            mode: "large",
            label : "",
            highlighted: "no-highlight",
            linkTo: "google.com",
            image : "https://images.keurig.com/is/image/keurig/oz-stb-flyout?wid=144&fmt=png-alpha&qlt=90,1",
            icon : "none"
          },
          {
            mode: "large",
            label : "",
            highlighted: "no-highlight",
            linkTo: "google.com",
            image : "https://images.keurig.com/is/image/keurig/oz-dunkin-flyout?wid=144&fmt=png-alpha&qlt=90,1",
            icon : "none"
          },
          {
            mode: "promo",
            label : "25% Off Every Delivery",
            secondaryText : "Coffee when you want it with no commitment",
            highlighted: "no-highlight",
            linkTo: "google.com",
            image : "/nav/box.png",
            icon : "none"
          }
        ]
      }
    ]
  },
  {
    navLabel : "Coffee Makers",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    mobilePriority : "high",
    requiresLoggedIn : false,
    hoverMenu :[
      {
        sectionMode: "nobo",
        sectionLabel : "NOBO",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems: [
          {
            mode: "nobo",
            label : "Warranty Replacement Brewers",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/warranty+replacement/c/warrantyreplacements101",
            image : ""
          },{
            mode: "nobo",
            label : "OOW Brewer Replacements",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/warranty+replacement/c/warrantyreplacements201",
            image : ""
          }
        ]
      },
      {
        sectionMode : "links-large",
        sectionLabel : "All Coffee Makers",
        sectionLinkTo : "  ",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "promo",
            label : "Select Coffee Makers 50% Off or Free",
            secondaryText: "With our exclusive starter kit",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : ""
          },
          {
            mode: "product-large",
            label : "SMART Wi‑Fi® Enabled",
            highlighted: "no-highlight",
            linkTo: "https://images.keurig.com/is/image/keurig/oz-nav-brewer2?hie=248&fmt=png-alpha&qlt=90,1",
            image : "/nav/brewers/SMART.webp"
          },
          {
            mode: "product-large",
            label : "Single-Serve Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/seasonal/c/seasonal101?cm_sp=seasonal-beverages-_-Top-Nav-_-seasonal101",
            image : "/nav/brewers/single-serve.webp"
          },
          {
            mode: "product-large",
            label : "Coffeehouse Beverages at Home",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
            image : "/nav/brewers/coffee-house.webp"
          },
          {
            mode: "product-large",
            label : "Dual Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
            image : "/nav/brewers/dual.webp"
          },
          {
            mode: "product-large",
            label : "Brew Over Ice Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "/nav/brewers/ice.webp"
          }
        ]
      },
      {
        sectionMode : "link-graveyard",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "small",
            label : "Deal of the Day",
            highlighted: "highlight-by-color",
            linkTo: "",
            image : "",
            icon : "icon-deal-tag"
          },
          {
            mode: "small",
            label : "Register Your Coffee Maker",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Budget Friendly Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Space Saver Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Colorful Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Coffee Makers Made with Recycled Plastic",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "How to Descale Your Coffee Makers",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Keurig for Business",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },

        ]
      },
      {
        sectionMode: "footer",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "promo",
            label : "Coffee Maker Bundles",
            secondaryText : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/coffee-setup.png",
            icon : "none"
          },
          {
            mode: "promo",
            label : "",
            secondaryText : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/business-bg.svg",
            icon : "none"
          },
          {
            mode: "promo",
            label : "Customize a coffee maker",
            textLook : "light-on-dark-bg",
            secondaryText : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/custom.png",
            icon : "none"
          },
          {
            mode: "promo",
            label : "TAKE THE QUIZ",
            textLook : "dark-on-light-bg",
            secondaryText : "Which coffee maker best suits my needs?",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/quiz-bg.png",
            icon : "none"
          }


        ]
      }
    ]
  },
  {
    navLabel : "Accessories",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    requiresLoggedIn : false,
    mobilePriority : "high",
    hoverMenu :[
      {
        sectionMode : "links-large",
        sectionLabel : "Even Better With Accessories",
        sectionLinkTo : " ",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "large",
            label : "Cleaning & Maintenance",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/new/c/new101?cm_sp=just-arrived-_-Top-Nav-_-new101",
            image : "https://images.keurig.com/is/image/keurig/oz-accessories1?hie=240&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "large",
            label : "Travel Mugs & Insulated Tumblers",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/seasonal/c/seasonal101?cm_sp=seasonal-beverages-_-Top-Nav-_-seasonal101",
            image : "https://images.keurig.com/is/image/keurig/oz-accessories2?hie=240&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "large",
            label : "Milk Frother",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
            image : "https://images.keurig.com/is/image/keurig/oz-accessories3?hie=240&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "large",
            label : "Iced Essentials",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
            image : "https://images.keurig.com/is/image/keurig/oz-accessories4?hie=240&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "large",
            label : "Pod Storage",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "https://images.keurig.com/is/image/keurig/oz-accessories5?hie=240&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "large",
            label : "Limited Edition Italian Design",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "https://images.keurig.com/is/image/keurig/oz-flavored?wid=276&fmt=jpg&qlt=90,1"
          },
        ]
      },
      {
        sectionMode : "link-graveyard",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "small",
            label : "Deal of the Day",
            highlighted: "highlight-by-color",
            linkTo: "",
            image : "",
            icon : "icon-deal-tag"
          },
          {
            mode: "small",
            label : "Shop Gifts",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Shop Gifts",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "K-Cup Pods",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Easy-Peel Lids",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Variety Packs",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },
          {
            mode: "small",
            label : "Bagged Coffee",
            highlighted: "no-highlight",
            linkTo: "",
            image : "",
            icon : "none"
          },

        ]
      },
      {
        sectionMode: "footer",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[

          {
            mode: "promo",
            label : "Reusable Filters",
            secondaryText : " ",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/accessories/reusable.png",
            icon : "none"
          },
          {
            mode: "promo",
            label : "3 Month Care Kit",
            secondaryText : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/accessories/care-kit.png",
            icon : "none"
          },
          {
            mode: "promo",
            label : "How to Descale Your Coffee Maker",
            textLook : "dark-on-light-bg",
            secondaryText : "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/accessories/descale.png",
            icon : "none"
          },
          {
            mode: "promo",
            label : "20% Off Cleaning Supplies",
            textLook : "dark-on-light-bg",
            secondaryText : " ",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/accessories/cleaning-products.png",
            icon : "none"
          }


        ]
      }
    ]
  },
  {
    navLabel : "Deals",
    icon : "icon-deal-tag",
    highlighted : "highlight-by-color",
    image: "",
    linkTo : "google.com",
    tagging:"",
    mobilePriority : "medium",
    requiresLoggedIn : false,
    hoverMenu :[
      // {
      //   sectionMode : "links",
      //   sectionLabel : "",
      //   sectionLinkTo : "",
      //   highlighted : "no-highlight",
      //   sectionNavItems :[
      //     {
      //       mode: "content-max",
      //       label : "Keurig® Deals & Coupons",
      //       secondaryText: "Check this page often to find the latest sales and sweepstakes on your favorite Keurig® products",
      //       highlighted: "no-highlight",
      //       textBlock : "",
      //       ctaLinkLabel : "Learn More",
      //       linkTo: "   ",
      //       image : "https://www.keurig.com/medias/bg-desktop-bf-frother-current-deals.jpg?context=bWFzdGVyfEJsYWNrLUZyaWRheS0yMDIyLUltYWdlc3wxMTYyMDR8aW1hZ2UvanBlZ3xCbGFjay1GcmlkYXktMjAyMi1JbWFnZXMvaGE5L2gxZi82NTc0MDE0OTI2MDMxOC5qcGd8MDBiNDliNmRhMGVmYjNhOTQ5Yjg1ZjE1ZGI2MDM1NDYwOGUwOTUyZGY3YzY5N2Y3M2NlNGZlZTMzYzk2ZjY1MA"
      //     }
      //
      //   ]
      // }
    ]
  },
  {
    navLabel : "Recipes & More",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    mobilePriority : "medium",
    requiresLoggedIn : false,
    hoverMenu :[
      {
        sectionMode : "links-large",
        sectionLabel : "Featured Recipes",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "article-large",
            label : "Peppermint Mocha Latte",
            secondaryText: "HOT COFFEE",
            highlighted: "no-highlight",
            linkTo: "   ",
            image : "https://images.keurig.com/is/image/keurig/oz-pepper-mocha?hie=504&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "article-small",
            label : "Iced Caramel Latte",
            secondaryText: "ICED COFFEE",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/oz-iced-caramel-latte?hie=236&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "article-small",
            label : "Cappuccino",
            secondaryText: "HOT COFFEE",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FR-3?hie=236&fmt=png-alpha&qlt=90,1"
          },

        ]
      },
      {
        sectionMode : "links",
        sectionLabel : "Recipes By Type",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "medium",
            label : "Hot Coffee",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/new/c/new101?cm_sp=just-arrived-_-Top-Nav-_-new101",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FT-1?hie=180&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Iced Coffees",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/seasonal/c/seasonal101?cm_sp=seasonal-beverages-_-Top-Nav-_-seasonal101",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FT-3?hie=180&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Hot Teas",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/coffee/promotions/c/promotions101?cm_sp=best-sellers-_-Top-Nav-_-bestsellers101",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FT-2?hie=180&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Iced Teas",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FT-4?hie=180&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Desserts & More",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FT-6?hie=180&fmt=png-alpha&qlt=90,1"
          },
          {
            mode: "medium",
            label : "Trending Now",
            highlighted: "no-highlight",
            linkTo: "https://www.keurig.com/beverages/flavored/c/flavored101?cm_sp=flavored-beverages-_-Top-Nav-_-flavored101",
            image : "https://images.keurig.com/is/image/keurig/oz-nav-FT-5-trending-1?hie=180&fmt=png-alpha&qlt=90,1"
          }
        ]
      },
      {
        sectionMode : "link-graveyard",
        sectionLabel : "Recipes People Are Loving",
        sectionLinkTo : "  ",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "article-large",
            label : "",
            highlighted: "highlight-by-color",
            linkTo: "www.google.com",
            image : "/nav/recipes/tik-tok.svg",
            icon : "none"
          },


        ]
      },
      {
        sectionMode: "footer",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "promo",
            label : " ",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/recipes/coffee-talk-logo.svg",
            icon : "none"
          },{
            mode: "article-small",
            label : "Frothing 101: How to Froth Any Kind of Milk",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/recipes/article-how-to-froth.png"
          },
          {
            mode: "article-small",
            label : "Five Reasons You Need a Single-Serve Coffee Maker",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/recipes/article-5-reasons.png"
          },
          {
            mode: "article-small",
            label : "How to Descale your Keurig® Coffee Maker",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/recipes/article-descale.png"
          },
          {
            mode: "article-small",
            label : "Two Easy Ways to Make Iced Coffee",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : "/nav/recipes/article-easy-iced-coffee.png"
          },{
            mode: "small",
            label : "Sustainability",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : ""
          },{
            mode: "small",
            label : "Lifestyle",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : ""
          },{
            mode: "small",
            label : "Support",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : ""
          },{
            mode: "small",
            label : "Read More",
            secondaryText: "",
            highlighted: "no-highlight",
            linkTo: " ",
            image : ""
          }

        ]
      }
    ]
  },
  {
    navLabel : "Sustainability",
    sectionBackgroundColor:"forest-green",
    image: "",
    linkTo : "google.com",
    tagging:"",
    highlighted : "no-highlight",
    mobilePriority : "medium",
    requiresLoggedIn : false,
    hoverMenu :[
      {
        sectionMode : "links",
        sectionLabel : "",
        sectionLinkTo : "",
        highlighted : "no-highlight",
        sectionNavItems :[
          {
            mode: "content-max",
            label : "Sustainability",
            secondaryText: "For the Love of Coffee, and Planet Earth",
            highlighted: "no-highlight",
            textBlock : "We love coffee. It’s what we do. That’s why we’re always building on our sustainability efforts – from bean to cup. In addition to our recycling initiatives, we’re focused on areas like responsible sourcing, the use of recyclable materials, and sustaining coffee growing communities. We do it for people who love our planet, and coffee, as much as we do – so we all can enjoy it for generations to come.",
            ctaLinkLabel : "Learn More",
            linkTo: "   ",
            image : "/nav/sustainability/sustainability.svg"
          }

        ]
      }
    ]
  }
]

NavExample.args={
  sizingMode : "hardcoded",
  emailErrorMessage : "Please enter a valid email address",
  emailSuccessMessage : "Thank you for subscribing!",
  emailExplanationText : "<span class='attention'>Save 15%</span> On Your Next Order. Get news, deals and more in your inbox.",
  placeHolderText : "Email address",
  submitButtonText : "Subscribe",
  isNobo : false,
  mobileSpecialMenu : [
    {
      sectionMode : "link-graveyard",
      sectionLabel : "",
      sectionLinkTo : "",
      highlighted : "no-highlight",
      sectionNavItems :[
        {
          mode: "small",
          label : "Deal of the Day",
          highlighted: "highlight-by-color",
          linkTo: " ",
          image : "",
          icon : "icon-deal-tag"
        },
        {
          mode: "small",
          label : "Register Coffee Maker",
          highlighted: "no-highlight",
          linkTo: " ",
          image : "",
          icon : "none"
        },
        {
          mode: "small",
          label : "Support",
          highlighted: "no-highlight",
          linkTo: " ",
          image : "",
          icon : "none"
        },
        {
          mode: "small",
          label : "Quick Reorder",
          highlighted: "no-highlight",
          linkTo: " ",
          image : "",
          icon : "none"
        },
        {
          mode: "small",
          label : "Cart",
          highlighted: "no-highlight",
          linkTo: " ",
          image : "",
          icon : "none"
        },
        {
          mode: "small",
          label : "Sign Out",
          highlighted: "no-highlight",
          linkTo: " ",
          image : "",
          icon : "none"
        }

      ]
    },
  ],
  navItems: navDemo
}


