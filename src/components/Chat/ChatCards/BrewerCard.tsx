import {ChatBrewerCardStyled} from "./chat-brewer-card.styled";
import Image from "next/image";
import KButton from "../../Kbutton/KButton";

export interface iChatBrewerCardProps {
    productName : string;
    productImage : string;
    hasKSK? : boolean;
}

export const ChatBrewerCard: React.FC<iChatBrewerCardProps> = (props : iChatBrewerCardProps) => {
    return (
        <ChatBrewerCardStyled className="chat-card brewer" >

           <h2>{props.productName}</h2>
           <div className="">
               <Image width={1024} height={1102}   src={props.productImage} alt={props.productName} />
           </div>
            <KButton
                label="Details"
                buttonType="secondary"
                buttonWidth="fit-width"
                iconPlacement="after-label"
                iconStandard="action-arrow"
                transitionType="expand-bg"
            />
        </ChatBrewerCardStyled>
    )
}