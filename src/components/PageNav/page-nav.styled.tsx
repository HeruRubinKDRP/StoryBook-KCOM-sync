import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";

export const PageNavStyled = styled.nav`

  ${ctaColorStyles};

  .links > .menu-horz {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    .k-btn {
      .icon.chevron-down, .icon.chevron-up {
        margin-left: 0.25rem;
      }

      &.light {
        border: solid var(--colorText) 1px;

        .icon {
          .filled {
            fill: white;
          }
        }
      }

      &:hover {
        .icon {
          .filled {
            fill: var(--colorText);
          }
        }

        .expander {
          color: var(--colorText);
          border: 0 !important;
        }
      }

      &.highlighted {
        margin-left: 0.5rem;
        margin-right: 0.5rem;

        label {
          &:first-child {
            margin: 0 1.75rem;
          }

        }

        &.light {
          background-color: white !important;
          color: var(--colorDarkRoast) !important;

          &.main-action {
            border: 1px var(--colorDarkRoast) solid !important;

            .filled {
              fill: var(--colorDarkRoast) !important;
            }
          }
        }

        &.dark {
          background-color: var(--colorDarkRoast) !important;
          color: white !important;

          &.main-action {
            border: 1px white solid !important;

            .icon {
              .filled {
                fill: white !important;
              }
            }
          }
        }
      }

      font-size: 0.75rem;
      flex-grow: 0;
      padding: 1.5rem 1rem;
    }


    .measure-menu {
      height: 1px;
      display: flex;
      flex-wrap: nowrap;
      background-color: green;
      overflow: hidden;
      position: absolute;
      visibility: hidden;
      top: 0;

      label {
        font-size: 0.75rem;
      }
    }

    .sub-nav-container {
      position: relative;

      .sub-nav-positioner {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
      }
    }

    .page-level-nav {
      position: sticky;
      display: flex;
      top: 0;
      z-index: 900;
      align-items: flex-end;
      justify-content: flex-end;
    }

    @keyframes slideFromTop {
      from {
        transform: translateY(-100%)
      }
      to {
        transform: translateY(0)
      }
    }

    @keyframes menuAdjust {
      from {
        margin-top: -2rem
      }
      to {
        margin-top: 0
      }
    }

    .page-level-nav {
      .mobile-menu {
        display: flex;
        flex-direction: column;
        align-content: center;
        width: 100%;
        padding-right: 0.5rem;

        .animation-container {
          overflow: hidden;
          animation: menuAdjust forwards 1s;
          z-index: 0;
        }

        .mobile-links {
          animation: slideFromTop 1s;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: auto;
        }

        .k-btn {
          z-index: 2;

          &.light {
            &:last-child {
              margin-bottom: 0.5rem;
            }

            &.opener {
              margin-top: 0.5rem;
            }

            &.closer {
              border: 1px solid white !important;
              margin-top: 0.5rem;
            }

            &.highlighted {
              background-color: white !important;
              color: var(--colorText) !important;
            }

            margin: 0;

            .icon {
              .filled {
                fill: white;
              }
            }


          }
        }


        label {
          font-size: 0.75rem;
        }

        overflow-y: auto;

        .closer {
          border: 1px solid var(--colorDarkRoast) !important;
          margin-bottom: 1rem;
        }

        .k-btn {
          width: 100%;
          margin: 0 0 0.5rem 0;

          &.highlighted {
            border: 0;
          }
        }
      }
    }


`;