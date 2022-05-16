import React from "react";
import AddFile from '../../../image/addFile.svg';
import Emoji from '../../../image/emoji.svg';
import Send from '../../../image/send.svg';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsPageReducer";

export const SendMessage = ({ newMessageText, sendMessage, updateMessageText }) => {

    let newMessage = React.createRef();

    const send = () => {
        if(newMessageText.trim() !== '') {
            sendMessage();
        } else {
            return false
        }
    }

    const onMessageChange = () => {
        let messageText = newMessage.current.value;
        updateMessageText(messageText);
    }

    return (
        <div className="send-message">
            <div className="add-file">
                <img src={AddFile} alt="siteName" />
            </div>
            <div className="textarea-block">
                <textarea ref={newMessage} onChange={onMessageChange} value={newMessageText} placeholder="Write a message..." />
            </div>
            <div className="send-message">
                <button className="message-btn smile-button">
                    <img src={Emoji} alt="siteName" />
                </button>
                <button className="message-btn send-btn" onClick={send}>
                    <img src={Send} alt="siteName" />
                </button>
            </div>
        </div>
    )
}
