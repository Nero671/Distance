import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Wanda'},
                {id: 2, name: 'Pietro'},
                {id: 3, name: 'Steven'},
                {id: 4, name: 'Peter'},
            ],

            messagesData: [
                {id: 1, message: 'Hi there, how are u?', userProfile: 'me'},
                {id: 2, message: 'Never been better! U?', userProfile: 'Wanda'},
                {id: 3, message: 'So so, have some personal troubles', userProfile: 'me'},
                {id: 4, message: 'Sound like shit....?', userProfile: 'Wanda'},
            ],

            newMessageText: '',
        },

        feedPage: {
            postData: [
                {id: 1, message: 'Hi this my fist post. I decided to learn React and become a real pro in it!', likesCount: 33},
                {id: 2, message: 'My studies continua', likesCount: 22},
                {id: 3, message: 'Hi, everyone. React is Better then Vue :D', likesCount: 12},
            ],
            newPostText: ''
        },

        profilePage: {
            friendsData: [
                {id: 1, userName: 'Wanda'},
                {id: 2, userName: 'Pietro'},
                {id: 3, userName: 'Steven'},
                {id: 4, userName: 'Peter'},
            ],
        },
    },

    rerenderEntireTree() {
        console.log('State change')
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.feedPage.newPostText,
                likesCount: 0
            };

            this._state.feedPage.postData.push(newPost);
            this._state.feedPage.newPostText = '';
            rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.feedPage.newPostText = action.newText;
            rerenderEntireTree(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
                userProfile: 'me'
            };

            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            rerenderEntireTree(this._state);
        } else if (action.type = UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.messageText;
            rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (postValue) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: postValue });

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (messageText) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText});


const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.feedPage.postData}
                messages={state.dialogsPage.messagesData}
                dialog={state.dialogsPage.dialogsData}
                friend={state.profilePage.friendsData}
                newPostText={state.feedPage.newPostText}
                newMessageText={state.dialogsPage.newMessageText}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

