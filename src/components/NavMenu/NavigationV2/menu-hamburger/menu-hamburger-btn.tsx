import {MenuButtonStyled} from "./hamburger-styled";

export interface iMenuButton{
    actionFunc : Function;
    isOpen : boolean;
}

export const MenuButton =(props : iMenuButton)=>{

    const getIsOpenClass=(openState : boolean)=>{
        if(!props.isOpen){return "is-closed"}
        return "is-opened"
    }

    const handleActionFunc=()=>{
        props.actionFunc()
        console.log("action function");
    }

    return(
        <MenuButtonStyled className={`${getIsOpenClass(props.isOpen)} menu-btn`} onClick={()=>handleActionFunc()}>
            <div className="top h-line"/>
            <div className="middle h-line"/>
            <div className="bottom h-line"/>
            {props.isOpen}
        </MenuButtonStyled>
    )
}