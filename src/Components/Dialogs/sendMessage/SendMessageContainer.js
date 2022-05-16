import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsPageReducer";
import {SendMessage} from "./SendMessage";

export const SendMessageContainer = ({ store }) => {

    let state = store.getState();


    const send = () => {
        store.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (messageText) => {
        store.dispatch(updateNewMessageActionCreator(messageText));
    }

    return (
        <SendMessage sendMessage={send} updateMessageText={onMessageChange} newMessageText={state.dialogsPage.newMessageText} />
    )
}
