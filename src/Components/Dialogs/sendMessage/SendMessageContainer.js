import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsPageReducer";
import {SendMessage} from "./SendMessage";
import StoreContext from "../../../StoreContext";

export const SendMessageContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
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
            }
        </StoreContext.Consumer>
    )
}
