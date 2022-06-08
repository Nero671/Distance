import React from "react";
import "./feed.css";
import {addPost, updateNewPost} from "../../redux/feedPageReducer";
import {HeaderPosts} from "./HeaderPosts";
import {connect} from "react-redux";

// export const HeaderPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     const onPostChange = (postValue) => {
//                         store.dispatch(updateNewPostActionCreator(postValue));
//                     }
//                     return (
//                         <HeaderPosts
//                             updateNewPost={onPostChange}
//                             addPost={addPost}
//                             newPostText={state.feedPage.newPostText}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.feedPage.newPostText
    }
}

export const HeaderPostsContainer = connect(mapStateToProps, {
    updateNewPost,
    addPost
}) (HeaderPosts)
