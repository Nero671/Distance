import React from "react";
import "./dialogs.css";
import {DialogUserName} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Message";
import {SendMessageContainer} from "./sendMessage/SendMessageContainer";
import { Navigate } from "react-router-dom";

export const Dialogs = ({ messages, dialog, isAuth }) => {

    let dialogsElements = dialog.map((item, index) => <DialogUserName key={index} name={item.name} id={item.id} />)
    let messagesElements = messages.map((item, index) => <Message key={index} name={item.userProfile} message={item.message} id={item.id}/>)


    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className="dialog-messages-block">
            <div className="create-post dialog-post">
                <div className="header-post">
                    <h1 className="title dialogs-title">
                        Dialogs
                    </h1>
                </div>
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
                <SendMessageContainer />
            </div>
        </div>
    )
}
