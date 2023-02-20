import {applyMiddleware, combineReducers, createStore} from "redux";
import profilepageReducer from "./profilepage-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReduce from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let  reducers=combineReducers({

    profilepageReducer,
    dialogsReducer,
    userPage:userReducer,
    auth:authReduce,
    form:formReducer
})


let store=createStore(reducers,applyMiddleware(thunkMiddleware));




window.store=store;

export default store;