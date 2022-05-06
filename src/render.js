import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.feedPage.postData}
                messages={state.dialogsPage.messagesData}
                dialog={state.dialogsPage.dialogsData}
                friend={state.profilePage.friendsData}
                newPostText={state.feedPage.newPostText}
                newMessageText={state.dialogsPage.newMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reportWebVitals();
