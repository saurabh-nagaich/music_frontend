const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = require("./loginType")


const insitalState = {
    loading:false,
    loged_in:false,
    username:"",
    error:"",
    success_data:"",
}

const logInReducer=(state=insitalState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:return {
            ...state,
            loading:true,
            loged_in:false,
            username:"",
            error:"",
            success_data:""
        }
        case LOGIN_SUCCESS : return {
            ...state,
            loading:false,
            success_message:action.payload.success_message,
            username:action.payload.username,
            loged_in:true
        }
        case LOGIN_FAILURE:return {
            ...state,
            loading:false,
            loged_in:false,
            error:action.payload
        }
        default :return state
    }
}

export default logInReducer;