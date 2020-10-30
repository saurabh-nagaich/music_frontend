import { BUY_ICECREAM } from "./iceCreamType"

const instialState = {
    numOfIceCream:14
}

const iceCreamReducer =(state=instialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCream:state.numOfIceCream-action.payload
        }
        default : return state
    }
}

export default iceCreamReducer