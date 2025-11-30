import { LOADING,SUCCESS,ERROR } from "./action";

const initialState = {
    loading:false,
    users:[],
    error:null
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOADING : 
            return {...state, loading:true}
        case SUCCESS :
            return {...state, users:action.payload}
        case ERROR :
            return {...state, error:action.payload}
        default:
            return state
    }
}