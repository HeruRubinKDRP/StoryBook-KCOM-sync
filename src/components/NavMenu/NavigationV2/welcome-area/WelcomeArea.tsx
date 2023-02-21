import {WelcomeAreaStyled} from "./welcome-area-styled";
import KButton from "../../../Kbutton/KButton";

export interface iWelcome{

}

export const WelcomeArea=(props:iWelcome)=>{
    return(
        <WelcomeAreaStyled className="welcome-area">
            <div className="welcome-area-text">
                <h2>Welcome</h2>
            </div>
            <div className="welcome-area-menu">
               <div>
                   <KButton label="Login" buttonType="text-icon-noBG" buttonWidth="fit-to-content"/>
                   <KButton label="Create Account" buttonType="text-icon-noBG" buttonWidth="fit-to-content"/>
               </div>
                <KButton classes="no-link" label="Free Shipping $35+" buttonType="text-icon-noBG" buttonWidth="fit-to-content"/>
            </div>
        </WelcomeAreaStyled>
    )
}