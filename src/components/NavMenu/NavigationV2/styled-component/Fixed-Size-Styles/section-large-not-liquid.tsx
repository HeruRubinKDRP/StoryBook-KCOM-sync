import {css} from "styled-components";
import {colorNameToValue} from "../../../../_utilities/color-name-to-value/colorNameToValue";

export const sectionLargeLinksNotLiquid = css`
  // Large Links section 

  .section-container.links-large {
    .nav-item-container {
      &.large {
        .nav-item-image {
          transform: scale(1);
          transition: 0.25s transform ease-in;
        }

        .expander {
          width: 100%;
          transform: scale(0);
          bottom: 0;
          opacity: 0;
          transition: 0.25s transform ease-in, 0.5s opacity ease-in;
        }

        label {
          transition: 0.5s color ease-in;
        }

        &:hover {
          .expander {
            display: none;
          }
        }
      }

     
    }

  }

`;