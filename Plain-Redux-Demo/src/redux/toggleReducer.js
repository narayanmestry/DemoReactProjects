import {TOGGLE_COLOR} from "./action"

const initialState = {
    toggle:true
}
export const toggleReducer = (state=initialState,action) =>{
    switch(action.type){
        case TOGGLE_COLOR:
            return {...state,toggle : !state.toggle}
        default:
            return state
    }  
}
