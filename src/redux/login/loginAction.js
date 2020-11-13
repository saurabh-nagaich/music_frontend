import axios from "axios"

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./loginType";


export const login_Request=()=>{
    return {
        type:LOGIN_REQUEST,
    }
}

export const login_Success = ({success_message,username})=>{
    return {
        type : LOGIN_SUCCESS,
        payload:{
            success_message,
            username
        }
    }
}
export const login_Error=(error)=>{
    return {
        type:LOGIN_FAILURE,
        payload:error
    }
}


export const login =(data)=>{
    return (dispatch)=> {
        dispatch(login_Request())
        axios.post('/login', {
            body:data
          })
            .then(res=>{
                const success_message = res.message
                dispatch(login_Success(success_message))
            })
            .catch(err=>{
                const error = err.message
                dispatch(login_Error(error))
            })
    }
}