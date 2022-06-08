import React from "react";
import {
    sendMessage,
    updateMessageText,
} from "../../../redux/dialogsPageReducer";
import {SendMessage} from "./SendMessage";
import {connect} from "react-redux";

// export const SendMessageContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//
//                     const send = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }
//
//                     const onMessageChange = (messageText) => {
//                         store.dispatch(updateNewMessageActionCreator(messageText));
//                     }
//
//                     return (
//                         <SendMessage sendMessage={send} updateMessageText={onMessageChange} newMessageText={state.dialogsPage.newMessageText} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateMessageText: (messageText) => {
//             dispatch(updateNewMessageActionCreator(messageText))
//         },
//         sendMessage: () => {
//             dispatch(addMessageActionCreator());
//         }
//     }
// }

export const SendMessageContainer = connect(mapStateToProps, {
    updateMessageText,
    sendMessage
})(SendMessage)
