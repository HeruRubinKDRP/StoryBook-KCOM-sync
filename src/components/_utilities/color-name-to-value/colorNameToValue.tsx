
export type colorByNameType = "none" |
  "dark-roast" |
  "light-roast" |
  "latte" |
  "latte70" |
  "latteMed" |
  "medium-roast" |
  "white" |
  "sepia" |
  "sepia70" |
  "text" |
  "discount" |
  "KSK" |
  "Bold-CTA" |
  "Primary-CTA" |
  "OK-Status" |
  "secondaryGold" |
  "medium-grey" |
  "transparent" |
  "faintWarm" |
  "sepia-light" |
  "light-grey" |
  "forest-green" |
    "milk-chocolate" |
    "perks-spiced-red" |
"perks-light-beige"
  ;

export const colorNamesList : colorByNameType[] = [
  "dark-roast" ,
  "light-roast" ,
  "latte" ,
  "latte70",
  "latteMed",
  "medium-roast" ,
  "white" ,
  "sepia" ,
  "sepia70" ,
  "text" ,
  "discount" ,
  "KSK",
  "Bold-CTA",
  "Primary-CTA",
  "OK-Status",
  "secondaryGold",
  "medium-grey",
  "transparent",
  "faintWarm",
  "sepia-light",
  "light-grey",
  "forest-green",
  "milk-chocolate",
  "perks-spiced-red",
    "perks-light-beige"

]

export const colorNameToValue =(colorName : colorByNameType | undefined, opacity? : number)=>{
if(!colorName){return ""}
  let opacityFin = 1;
  if(opacity){
    opacityFin = opacity;
  }
  switch(colorName){
    case "perks-light-beige":
      return "#f3e7db"

    case "faintWarm":
      return "#faf7f3";

    case "dark-roast":
      return `rgba(71,48,54,${opacityFin})`;

      case "perks-spiced-red":
        return `#E6431E`;

    case "KSK":
      return "#0d8296";

    case "light-roast":
      return "#C2A38C";

    case "latte":
      return "#EADECF";

    case "latteMed":
      return "#f1e8de"

    case "latte70":
      return "#faf7f3"

    case "medium-roast":
      return "#947259";

    case "milk-chocolate":
      return "#705043"

    case "text":
      return "#2c2c2c";

    case "discount":
      return "#d62e26"

    case "sepia":
      return "#EBE7E3";

    case "sepia70":
      return "#f7f6f4";

    case "sepia-light":
      return "#ece9e4"

    case "white":
      return "white";

    case "Primary-CTA":
      return  "#FDE89B"

    case "Bold-CTA":
      return "#f9c606";

    case "OK-Status":
      return "rgb(73, 132, 40)";

    case "secondaryGold":
      return "#f2c252"

    case "medium-grey":
      return "#848484"

    case "light-grey":
      return "#b8b2af";

    case "forest-green":
      return "#0e4036";

    default:
      return "none"
  }


}
