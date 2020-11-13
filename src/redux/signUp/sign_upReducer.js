const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILER } = require("./sign_upType")

const insitalState = {
    loading:false,
    data:[],
    error:""
}

const signUpReducer = (state=insitalState,action)=>{
    switch(action.type){
        case SIGN_UP_REQUEST:return {
            ...state,
            loading:true
        }
        case SIGN_UP_SUCCESS: return {
            ...state,
            loading:false,
            data:action.payload
        }
        case SIGN_UP_FAILER: return {
            ...state,
            loading:false,
            error:action.payload
        }
        default : return state
    }
}

export default signUpReducer ;