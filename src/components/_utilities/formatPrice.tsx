export const formattedPrice = ( activePrice : number)=>{
    // format price for cents
    if(activePrice === 0){
        return "FREE"}

    if(activePrice < 1 && activePrice > 0){
        return `${Math.round(activePrice * 100)}¢`
    }

    return `$${activePrice.toFixed(2)}`
};