export default class UtilHelper {
    public static IsIOS(){
        if(!navigator)
            return true;

        return (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }
}