
import { useState } from "react";
import SuggestionsCellStyled from "./suggestions-cell.styled";
import Image from "next/image";
import {iCellItem} from "../CellBasic/CellBase";


export type productSuggestionT = {
    brandName?: string;
    productName: string;
    productImage: string;
}

export const SuggestionsCell = (props: iCellItem) => {

    const [suggestions, setSuggestions] = useState<productSuggestionT[]>([
        {
            productName: "Pumpkin Spice Coffee",
            productImage: "https://www.keurig.com/medias/pumpkin-spice-coffee-k-cup-dd-SAVETODAY15-CC.png?context=bWFzdGVyfGltYWdlc3w2Mzc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g2Zi9oMDQvNjY4NTc2MDAzNTIyODYucG5nfGY2ODIyNTUwYWRiYzdlOTA2MGZkNWQ1MGQ3NDc2OGVjMjY1NmMyMDliNjVhZTkyZTIxYTA3YTMyMmQ1NzlkMzc"
        }
    ]);

    return (
        <SuggestionsCellStyled className="suggestions-cell">
            <div>

            </div>
            {
                suggestions.map((suggestion, index) => {
                    return(
                        <div className="suggestion" key={index}>
                            <Image src={suggestion.productImage} alt={suggestion.productName} width={200} height={200} />
                            {
                                suggestion.brandName &&
                                <p>
                                    {suggestion.brandName}
                                </p>
                            }
                            <h3>
                                {suggestion.productName}
                            </h3>
                        </div>
                    )
                })
            }
        </SuggestionsCellStyled>
    )
}