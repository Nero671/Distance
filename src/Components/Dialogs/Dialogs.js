import React from "react";
import "./dialogs.css";
import {DialogUserName} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Message";
import {SendMessage} from "./sendMessage/sendMessage";

export const Dialogs = ({ messages, dialog, newMessageText, dispatch }) => {

    let dialogsElements = dialog.map((item, index) => <DialogUserName key={index} name={item.name} id={item.id} />)
    let messagesElements = messages.map((item, index) => <Message key={index} name={item.userProfile} message={item.message} id={item.id}/>)

    return (
        <div className="dialog-messages-block">
            <div className="post dialog-post">
                <h1 className="dialogs-title">
                    Dialogs
                </h1>
                <div className="dialogs-content">
                    <ul className="dialog-user-list">
                        {dialogsElements}
                    </ul>
                    <div className="dialog-messages">
                        {messagesElements}
                    </div>
                </div>
            </div>
            <div className="post">
                <SendMessage newMessageText={newMessageText} dispatch={dispatch} />
            </div>
        </div>
    )
}
