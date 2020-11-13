import axios from "axios"

const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILER } = require("./sign_upType")

export const signUpRequest=()=>{
    return {
        type:SIGN_UP_REQUEST
    }
}

export const signUpSuccess = (data)=>{
    return {
        type : SIGN_UP_SUCCESS,
        payload:data
    }
}

export const signUpFailer = (error)=>{
    return {
        type:SIGN_UP_FAILER,
        payload:error
    }
}

export const createNewUser = (data)=>{
    return (dispatch)=>{
        dispatch(signUpRequest());
        axios.post("./signUPApi",{
            body:data
        })
        .then(res=>{
            const data= res.body
            dispatch(signUpSuccess(data))
        })
        .catch(err=>{
            const error = err.message
            dispatch(signUpFailer(error))
        })        
    }
}