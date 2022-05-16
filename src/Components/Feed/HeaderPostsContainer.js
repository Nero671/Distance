import React from "react";
import "./feed.css";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/feedPageReducer";
import {HeaderPosts} from "./HeaderPosts";

export const HeaderPostsContainer = ({ store }) => {

    let state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    const onPostChange = (postValue) => {
        store.dispatch(updateNewPostActionCreator(postValue));
    }

    return (
        <HeaderPosts updateNewPost={onPostChange} addPost={addPost} newPostText={state.feedPage.newPostText}/>
    )
}
