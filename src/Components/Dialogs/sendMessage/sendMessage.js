import React from "react";
import AddFile from '../../../image/addFile.svg';
import Emoji from '../../../image/emoji.svg';
import Send from '../../../image/send.svg';

export const SendMessage = () => {
    let newMessage = React.createRef();

    const send = () => {
        const messageText = newMessage.current.value;
    }

    return (
        <div className="send-message">
            <div className="add-file">
                <img src={AddFile} alt="siteName" />
            </div>
            <div className="textarea-block">
                <textarea ref={newMessage} placeholder="Write a message..."></textarea>
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
