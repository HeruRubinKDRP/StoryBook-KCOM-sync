import KButton from "../../Kbutton/KButton";
import {QuickShopStyled} from "./QuickShopStyled";
import Image from "next/image";

export interface iQuickShop {

}

export const QuickShop = () => {
  return (
    <QuickShopStyled className="modal-dialog modal-width modal-dialog-centered">
      <div className="modal-content">
        <div className="show-grid modal-body">
          <button
            className="close-button remodal-close"
            type="button"
            data-selector="ADCloseLnk"
            tabIndex={0}
            title="Close"
          />
          <KButton
            label={""}
            buttonType={"text-icon-noBG"}
            iconPlacement={"after-label"}
            iconStandard={"close"} />

          <div className="quick-shop-view beverage css-akd7ye">
            <div tabIndex={0} className="picture-box css-n5c6hl">
              <div className="new css-jomxx0">
                <div>NEW EASY—PEEL LID-PEEL LID</div>
              </div>
              <div className="picture-box-content css-j4piwo" tabIndex={0}>
                <a className="brand-name css-6bd3o6"
                   href="/beverages/light+roast/c/lightRoast?q=:relevance&amp;terms=:brand:Green Mountain Coffee Roasters®"
                >
                  <h2 className="name">Green Mountain Coffee Roasters®</h2>
                </a>
                <h1 className="product-heading css-qmmu3b">
                <a className="product-name">Breakfast Blend Coffee</a>
              </h1><a
                href="/Beverages/Light-Roast/Breakfast-Blend-Coffee/p/Breakfast-Blend-Coffee-K-Cup-Green-Mountain:24_CT"
                className="css-d60him">
                <Image
                src="https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?wid=272&amp;hei=202&amp;fmt=png-alpha&amp;qlt=75,1&amp;op_sharpen=0&amp;resMode=bicub&amp;op_usm=1,1,6,0&amp;iccEmbed=0&amp;printRes=72&amp;extend=0,250,0,0"
                className="product-image" alt="Breakfast Blend Coffee" tabIndex={0}/>
              </a>
                <div className="product-brand css-4fyeb" tabIndex={0}>Green Mountain Coffee Roasters®</div>
                <a className="product-name css-46md3l"
                   href="/Beverages/Light-Roast/Breakfast-Blend-Coffee/p/Breakfast-Blend-Coffee-K-Cup-Green-Mountain:24_CT"
                   tabIndex={0}>Breakfast Blend Coffee</a>
                <div className="css-t2aa9g">
                  <div className=" css-1xfgmd8">Roast Profile</div>
                  <div className="css-ku8zew">
                    <div className=" css-1lhbof9"><span className="profile-variation variation-left ">Light</span>
                      <div className="css-bcg8e9">
                        <Image
                        src="https://images.keurig.com/is/image/keurig/roast-profile2?fmt=png-alpha" alt="Light Roast"
                        />
                      </div>
                      <span className="profile-variation variation-right ">Dark</span>
                      <div className="css-bcg8e9">
                        <div className="pos-2  css-1ndm0sm"><span>Light&nbsp;Roast</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-box css-15sqqxt">
              <div className="detail-box-content more-height css-rrmse5">
                <div className="css-rkn508">BOX SIZE</div>
                <div data-selector="ADBoxSection" className="css-166zpm2">
                  <div className="variant-count false   css-1fbwtui" tabIndex={0}>12 Count</div>
                  <div className="variant-count active   css-1fbwtui" tabIndex={0}>24 Count</div>
                  <div className="variant-count false   css-1fbwtui" tabIndex={0}>72 Count</div>
                  <div className="variant-count false   css-1fbwtui" tabIndex={0}>96 Count</div>
                </div>
                <div className="css-rkn508"><span></span></div>
                <div className="css-o8h985">
                  <div className="purchase-item">
                    <div className="subscription active css-lozgsi" tabIndex={0}>
                      <div className="css-1a9cnxy">
                        <div className="mb-3 css-1yc6xyv">
                          <div className="subscription-radio form-check form-check-inline">
                            <input
                            name="quantity-checkbox"
                            tabIndex={0} type="radio"
                            className="form-check-input"
                            checked={false} />
                              <label title="" className="form-check-label">Subscription</label></div>
                        </div>
                        <div className=" css-1cp51o6">
                          <div className="product-disc-price css-1qojh5d"
                               data-selector="ADAddItemDiscountPrice">$12.74
                          </div>
                        </div>
                      </div>
                      <div className="brew-based-toggler css-1n237mh">
                        <div className="css-1bhmiil"><span className="save-label">Save</span>&nbsp;<span
                          data-optly-63b46386-b910-4477-a028-13a3994e029b="">25%. No Fees. Cancel Anytime</span><a
                          className="view-benefits-link css-rixw0s"></a></div>
                        <div className="ReactCollapse--collapse" aria-hidden="false"
                             style={{height: "auto", overflow: "initial"}}>
                          <div className="ReactCollapse--content">
                            <div className="action-button">
                              <div className="subscription-action-button css-f0s7q7">
                                <div className="mb-3 add-to-cart-wrapper input-group">
                                  <div className="sub-menu-container css-bki863">
                                    <li className="add-to-cart-placeholder">
                                      <span className="qty-dropdown"><label
                                      htmlFor="bmsm-select">qty</label>
                                      <input placeholder=""
                                             id="bmsm-select"
                                             inputMode="none"
                                             readOnly={false}
                                             maxLength={4}
                                             autoComplete="off"
                                             value="1"
                                      />
                                      </span>
                                    </li>
                                    <div className="subMenuWrapper"></div>
                                  </div>
                                  <button data-selector="ADAddToAllRadio" type="button"
                                          className="add-to-cart-button btn btn-primary">CREATE AUTO-DELIVERY
                                  </button>
                                </div>
                                <div className="simple-link css-jightj" role="link" tabIndex={0}>Add to existing
                                  auto-delivery
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="otp css-lozgsi"
                       tabIndex={0}
                    />
                      <div className="css-1a9cnxy">
                        <div className="mb-3 css-1yc6xyv">
                          <div className="one-time-radio form-check form-check-inline">
                            <input
                              name="quantity-checkbox"
                               tabIndex={0}
                              type="radio"
                              className="form-check-input"
                            />
                              <label
                            title="" className="form-check-label">One Time Purchase</label></div>
                        </div>
                        <div className=" css-1cp51o6">
                          <div className="product-disc-price css-1qojh5d" data-selector="ADAddItemDiscountPrice"><span
                            className="">$16.99</span></div>
                        </div>
                      </div>
                      <div className="ReactCollapse--collapse" aria-hidden="true" style={{height: 0, overflow: "hidden"}}
                           data-optly-455a0ca1-ad12-4482-a810-8f898bc38cfc="">
                        <div className="oz-edlp-msg" data-optly-455a0ca1-ad12-4482-a810-8f898bc38cfc="">Save 20% when
                          you buy 5 or more boxes
                        </div>
                        <div className="ReactCollapse--content">
                          <div className="action-button">
                            <div className="beverage-otp-atc-container css-1n237mh">
                              <div className="one-time-purchase-action css-f0s7q7">
                                <div className="mb-3 add-to-cart-wrapper input-group">
                                  <div className="sub-menu-container css-bki863">
                                    <li className="add-to-cart-placeholder"><span className="qty-dropdown"><label
                                      htmlFor="bmsm-select">qty</label>
                                      <input placeholder=""
                                             id="bmsm-select"
                                             inputMode="none"
                                             readOnly={true}
                                             maxLength={4}
                                             autoComplete="off"
                                             value="1"
                                      />
                                      </span></li>
                                    <div className="subMenuWrapper"></div>
                                  </div>
                                  <button data-selector="ADAddOnceRadio" type="button"
                                          className="add-to-cart-button btn btn-primary">Add To Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                  <div className=" css-1imlv0m">
                    <Image
                      title="Shipping-icon"
                      alt="Shipping-icon"
                      src="https://images.keurig.com/is/image/keurig/shipping-icon?fmt=png-alpha"
                    />
                    <span className="shippingMsgAway"><
                      span>You are <b>$35.00 </b>away from <b>FREE SHIPPING</b></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QuickShopStyled>

)
}
