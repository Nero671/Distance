import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

// let store = {
//     _state: {
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Wanda'},
//                 {id: 2, name: 'Pietro'},
//                 {id: 3, name: 'Steven'},
//                 {id: 4, name: 'Peter'},
//             ],
//
//             messagesData: [
//                 {id: 1, message: 'Hi there, how are u?', userProfile: 'me'},
//                 {id: 2, message: 'Never been better! U?', userProfile: 'Wanda'},
//                 {id: 3, message: 'So so, have some personal troubles', userProfile: 'me'},
//                 {id: 4, message: 'Sound like shit....?', userProfile: 'Wanda'},
//             ],
//
//             newMessageText: '',
//         },
//
//         feedPage: {
//             postData: [
//                 {id: 1, message: 'Hi this my fist post. I decided to learn React and become a real pro in it!', likesCount: 33},
//                 {id: 2, message: 'My studies continua', likesCount: 22},
//                 {id: 3, message: 'Hi, everyone. React is Better then Vue :D', likesCount: 12},
//             ],
//             newPostText: ''
//         },
//
//         profilePage: {
//             friendsData: [
//                 {id: 1, userName: 'Wanda'},
//                 {id: 2, userName: 'Pietro'},
//                 {id: 3, userName: 'Steven'},
//                 {id: 4, userName: 'Peter'},
//             ],
//         },
//     },
//
//     rerenderEntireTree() {
//         console.log('State change')
//     },
//
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//         this._state.feedPage = feedPageReducer(this._state.feedPage, action);
//         this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
//         this._state.profilePage = profilePageReducer(this._state.profilePage, action);
//
//         rerenderEntireTree(this._state);
//     }
// }


const rerenderEntireTree = () => {
    ReactDOM.render(
        // <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>,
        // </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

