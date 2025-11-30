import {legacy_createStore as createStore,applyMiddleware, combineReducers} from 'redux';
import {thunk} from "redux-thunk";
import { toggleReducer } from './toggleReducer';
import { userReducer } from './userReducer';


const rootReducer = combineReducers({
    toggleR : toggleReducer,
    userR : userReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));

