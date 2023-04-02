export const getContainerQuery = (widthX: number | undefined) => {
    if (!widthX) {
        console.log('widthX not', widthX)
        return 'default'
    }

    const sss = {
        largeDesktop: 1920,
        desktop: 1008,
        tablet: 641,
        mobile: 360,
        tinyEmbedded: 200
    }

    if (widthX >= sss.largeDesktop) {
        return 'extra-large-dimensions'
    } else if (widthX < sss.largeDesktop && widthX >= sss.desktop) {
        return 'large-dimensions'
    } else if (widthX < sss.desktop && widthX >= sss.tablet) {
        return 'medium-dimensions'
    } else if (widthX < sss.tablet && widthX >= sss.mobile) {
        return 'mobile-dimensions'
    } else if (widthX < sss.mobile && widthX) {
        return 'tinyEmbedded'
    }


    return 'default'
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
