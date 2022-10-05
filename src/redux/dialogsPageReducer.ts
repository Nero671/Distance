const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type DialogType = {
    id: number,
    name: string,
}

type MessageType = {
    id: number,
    message: string,
    userProfile: string,
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Wanda'},
        {id: 2, name: 'Pietro'},
        {id: 3, name: 'Steven'},
        {id: 4, name: 'Peter'},
    ] as Array<DialogType>,

    messagesData: [
        {id: 1, message: 'Hi there, how are u?', userProfile: 'me'},
        {id: 2, message: 'Never been better! U?', userProfile: 'Wanda'},
        {id: 3, message: 'So so, have some personal troubles', userProfile: 'me'},
        {id: 4, message: 'Sound like shit....?', userProfile: 'Wanda'},
    ] as Array<MessageType>,

    newMessageText: '',
}

export type initialStateType = typeof initialState;

const dialogsPageReducer = (state = initialState, action: any): initialStateType  => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                userProfile: 'me'
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.messageText
            };
        }
        default:
            return state
    }
}

type sendMessageActionType = {
    type: typeof ADD_MESSAGE,
}

type updateMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    messageText: string,
}

export const sendMessage = (): sendMessageActionType => ({ type: ADD_MESSAGE });

export const updateMessageText = (messageText: string): updateMessageTextActionType =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText });

export default dialogsPageReducer;
