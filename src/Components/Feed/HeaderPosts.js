import React from "react";
import "./feed.css";
import Photo from "../../image/photo.svg";
import Friend from "../../image/tagFriend.svg";
import Feelings from "../../image/feelings.svg";
import Send from "../../image/send.svg";
import {addPost} from "../../index";

export const HeaderPosts = () => {
    let newPostElement = React.createRef();

    const addNewPost = () => {
        let postValue = newPostElement.current.value;
        if (postValue !== '') {
            addPost(postValue);
            newPostElement.current.value = ''
        } else {
            return false
        }


    }
    return (
        <div className="create-post">
            <div className="header-post">
                <h4 className="post-title">
                    Create post
                </h4>
            </div>
            <div className="body-post">
                <textarea ref={newPostElement} className="input-post" placeholder="What’s on your mind, Stanislav?"></textarea>
            </div>
            <div className="footer-post">
                <button className="tag">
                    <img src={Photo} alt="Add Photo"/>
                    <span className="button-text">
                          Photo/Video
                        </span>
                </button>
                <button className="tag">
                    <img src={Friend} alt="Tag Friend"/>
                    <span className="button-text">
                          Tag friends
                        </span>
                </button>
                <button className="tag">
                    <img src={Feelings} alt="Feellings"/>
                    <span className="button-text">
                          Feeling/Actv...
                    </span>
                </button>
                <button className="tag" onClick={addNewPost}>
                    <img src={Send} alt="Feellings"/>
                    <span className="button-text">
                      Send
                    </span>
                </button>
            </div>
        </div>
    )
}
