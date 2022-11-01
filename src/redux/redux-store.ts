import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import feedPageReducer from "./feedPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducers from "./usersReducers";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
    feedPage: feedPageReducer,
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersReducers,
    auth: authReducer
});

type RootReducerType = typeof rootReducer; //создает тип на основе rootReducer
export type AppStateType = ReturnType<RootReducerType>; //определяет сам то, что возвращается


let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
