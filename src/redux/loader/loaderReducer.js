import { LOADER_START, LOADER_STOP } from "./loaderType"


const instialState={
    loader:false
}

const loaderReducer = (state=instialState,action)=>{
    switch(action.type){
        case LOADER_START : return {
            ...state,
            loader:true
        }
        case LOADER_STOP : return {
            ...state,
            loader:false
        }
        default :return {
            ...state
        }
    }
}


export default loaderReducer