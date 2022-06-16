import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import feedPageReducer from "./feedPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducers from "./usersReducers";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    feedPage: feedPageReducer,
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersReducers,
    auth: authReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
