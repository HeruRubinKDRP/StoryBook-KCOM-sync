import {breakPoints} from "../../../NavMenu/NavigationV2/Navigation";



export const getContainerQuery = (widthX: number | undefined) => {

    if(!widthX){
        console.log("widthX not", widthX);
        return "default"
    }

    const viewportWidth = {
        largeDesktop: 1920,
        desktop: 1280,
        tablet: 768,
        mobile: 390,
        tinyEmbedded : 200
    }

    if(widthX >= viewportWidth.largeDesktop){
        return "extra-large-dimensions"
    }else if(widthX < viewportWidth.largeDesktop && widthX >= viewportWidth.desktop){
        return "large-dimensions";
    }else if(widthX < viewportWidth.desktop && widthX >= viewportWidth.tablet){
        return "medium-dimensions";
    }else if(widthX < viewportWidth.tablet ){
        return "small-dimensions";
    }else if(widthX < viewportWidth.mobile){
        return "mobile-dimensions";
    }

    // if(widthX >= breakPoints.largeDesktop){
    //     return "extra-large-dimensions"
    // }
    // else if (widthX >= breakPoints.desktop && widthX < breakPoints.largeDesktop) {
    //     return "large-dimensions";
    // }else if(widthX < breakPoints.desktop && widthX >= breakPoints.mobile){
    //     return "mobile-dimensions";
    // }
    // else if (widthX < breakPoints.tinyEmbedded){
    //     return "tiny-dimensions";
    // }

    return "default";

}