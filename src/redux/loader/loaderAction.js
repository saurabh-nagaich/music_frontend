import { LOADER_STOP, LOADER_START } from "./loaderType"

export const loader_Start=()=>{
    return {
        type:LOADER_START
    }
}
export const loader_Stop=()=>{
    return {
        type:LOADER_STOP
    }
}