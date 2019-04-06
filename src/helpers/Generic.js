export const isMobile = () => {
    if(navigator.userAgent){
        if(navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) || 
            navigator.userAgent.match(/IEMobile/i)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const Generic = {
    isMobile
}

export default Generic;