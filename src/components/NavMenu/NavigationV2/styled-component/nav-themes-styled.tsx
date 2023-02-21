import {css} from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

//this handles color themes, i.e. the background colors of the hover nav.
// *** ONLY APPLIES TO DESKTOP ***

export const styledNavThemes = css`
//Handle themes
  //Just desktop
  &.large {
    .nav-sections-main {

      &.dark-roast {
        //rgb(71,48,54)
        background-color: ${colorNameToValue("dark-roast")};
      }

      &.faint-warm {
        //#0d8296
        background-color: ${colorNameToValue("faintWarm")};
      }

      &.light-roast {
        // #C2A38C
        background-color: ${colorNameToValue("light-roast")};
      }

      &.latte {
        //#EADECF
        background-color: ${colorNameToValue("latte")};
      }

      &.latte-med {
        //#f1e8de
        background-color: ${colorNameToValue("latteMed")};
      }

      &.medium-roast {
        //#947259
        background-color: ${colorNameToValue("medium-roast")};
      }

      &.sepia {
        //#EBE7E3
        background-color: ${colorNameToValue("sepia")};
      }

      &.medium-grey {
        //#848484
        background-color: ${colorNameToValue("medium-grey")};
      }

      &.light-grey {
        //#b8b2af
        background-color: ${colorNameToValue("light-grey")};
      }

      &.KSK {
        //##0d8296
        background-color: ${colorNameToValue("KSK")};
      }

      &.secondaryGold {
        //#f2c252
        background-color: ${colorNameToValue("secondaryGold")};
      }

      &.forest-green {
        //#0e4036
        background-color: ${colorNameToValue("forest-green")};
      }

      &.discount {
        //#0e4036
        background-color: ${colorNameToValue("forest-green")};
      }


      //High Contrast
      &.dark-roast, &.medium-roast, &.medium-grey, &.forest-green, &.discount {

        .base-nav-sections {
          .section-main {
            label {
              color: ${colorNameToValue("latte")};
            }


            .filled {
              fill: ${colorNameToValue("latte")}
            }
          }

          .nav-item-container {
            label {
              color: white;
            }

            .text-block {
              color: white !important;
            }

            .k-btn {
              background-color: white !important;

              label {
                color: ${colorNameToValue("dark-roast")} !important;
              }

              .filled {
                fill: ${colorNameToValue("dark-roast")} !important;;
              }
            }

            &:hover {

              .primary-text, .secondary-text {
                color: white !important;
              }

              a {
                .expander {
                  background-color: white !important;
                }

                .text-block {
                  color: white !important;
                }

                label {
                  color: ${colorNameToValue("dark-roast")};
                }
              }
            }

          }
        }

      }
    }
  }
    
    
`;