import {NavLightStyled} from "./nav-light.styled";
import Graphic from "../Graphic/Graphic";

export interface NavLightProps{

}

export const NavLight: React.FC<NavLightProps> = (props: NavLightProps) => {

    return(
        <NavLightStyled data-v-b2ecc176="" id="header-wrapper">

                <Graphic graphicName={"logo"} />
                <Graphic graphicName={"icon-menu"} />

        </NavLightStyled>
)

}