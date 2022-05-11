const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsPageReducer = (state, action) => {

    if  (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newMessageText,
            userProfile: 'me'
        };

        state.messagesData.push(newMessage);
        state.newMessageText = '';
    } else if (action.type = UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.messageText;
    }

    return state
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (messageText) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText});

export default dialogsPageReducer;
