import React from "react";
import "./dialogs.css";
import User from "../../image/user.svg";
import {NavLink} from "react-router-dom";
import {DialogUserName} from "./DialogsItem/DialogsItem";


const Message = ({ name, message }) => {
    return (
        <div className="dialog-user">
            <div className="dialog-user__profile">
                <img src={User}  alt="uservAtar"/>
                <div className="user-name">
                    {name}
                </div>
            </div>
            <div className="dialog-user__text">
                {message}
            </div>
        </div>
    )
}


export const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Wanda'},
        {id: 2, name: 'Pietro'},
        {id: 3, name: 'Steven'},
        {id: 4, name: 'Peter'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi there, how are u?', userProfile: 'me'},
        {id: 2, message: 'Never been better! U?', userProfile: 'Wanda'},
        {id: 3, message: 'So so, have some personal troubles', userProfile: 'me'},
        {id: 4, message: 'Sound like shit....?', userProfile: 'Wanda'},
    ]

    let dialogsElements = dialogsData.map(item => <DialogUserName name={item.name} id={item.id} />)
    let messagesElements = messagesData.map(item => <Message name={item.userProfile} message={item.message} id={item.id}/>)

    return (
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
    )
}
