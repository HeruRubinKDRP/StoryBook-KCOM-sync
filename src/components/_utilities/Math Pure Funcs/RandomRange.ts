export const randomRange = (high : number, negative : boolean)=>{
    let num = Math.floor(Math.random()*high) + 1; // this will get a number between 1 and 99;
    if( negative == true){
        num *= Math.round(Math.random()) ? 1 : -1;
    }
    return num;
}

