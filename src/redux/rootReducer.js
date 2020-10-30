import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer"
import  iceCreamReducer  from "./iceCream/iceCreameReducer"
import userReducer from "./userData/userReducer"

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCreame:iceCreamReducer,
    user:userReducer
})

export default rootReducer