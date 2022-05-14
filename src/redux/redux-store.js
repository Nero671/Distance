import {combineReducers, legacy_createStore} from "redux";
import feedPageReducer from "./feedPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    feedPage: feedPageReducer,
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer
});

let store = legacy_createStore(reducers);

export default store;
