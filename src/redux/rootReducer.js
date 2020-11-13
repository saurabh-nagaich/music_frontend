import { combineReducers } from "redux"
import loaderReducer from "./loader/loaderReducer"
import logInReducer from "./login/loginReducer"
import signUpReducer from "./signUp/sign_upReducer"
import userReducer from "./userData/userReducer"

const rootReducer = combineReducers({
    user:userReducer,
    login:logInReducer,
    signup:signUpReducer,
    // loader:loaderReducer
})

export default rootReducer