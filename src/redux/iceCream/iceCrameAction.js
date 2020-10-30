import {BUY_ICECREAM} from "./iceCreamType"

export const buyIceCream=(number)=>{
    return {
        type:BUY_ICECREAM,
        payload:number
    }
}