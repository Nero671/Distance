import React from "react";
import "./feed.css";
import Photo from "../../image/photo.svg";
import Friend from "../../image/tagFriend.svg";
import Feelings from "../../image/feelings.svg";
import Send from "../../image/send.svg";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/feedPageReducer";
import {HeaderPosts} from "./HeaderPosts";

export const HeaderPostsContainer = ({ newPostText, dispatch }) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        if (newPostText.trim() !== '') {
            dispatch(addPostActionCreator());
        } else {
            return false
        }
    }

    const onPostChange = (postValue) => {
        dispatch(updateNewPostActionCreator(postValue));
    }
    return (
        <HeaderPosts updateNewPost={onPostChange} addPost={addPost}/>
    )
}
