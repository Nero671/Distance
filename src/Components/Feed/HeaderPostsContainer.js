import React from "react";
import "./feed.css";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/feedPageReducer";
import {HeaderPosts} from "./HeaderPosts";
import StoreContext from "../../StoreContext";

export const HeaderPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (postValue) => {
                        store.dispatch(updateNewPostActionCreator(postValue));
                    }
                    return (
                        <HeaderPosts
                            updateNewPost={onPostChange}
                            addPost={addPost}
                            newPostText={state.feedPage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}
