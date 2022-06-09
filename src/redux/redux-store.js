import {combineReducers, legacy_createStore} from "redux";
import feedPageReducer from "./feedPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducers from "./usersReducers";

let reducers = combineReducers({
    feedPage: feedPageReducer,
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersReducers
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
