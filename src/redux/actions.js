import { COMPLETE, DELETE } from "./actionTypes"

export const del=(id)=>{
    return {
        type:DELETE,
        payload:id
    }
}

export const comp=(id)=>{
    return {
        type:COMPLETE,
        payload:id
    }
}