import React from "react";
import "./feed.css";
import {HeaderPosts} from "./HeaderPosts";
import {CreatePost} from "./CreatePost";
// import {userName} from "../Components/Header/Header";

export const Feed = ({ posts, newPostText, dispatch, }) => {

    let postElements = posts.map((item, index) => <CreatePost key={index} message={item.message} likes={item.likesCount} />)

    return (
        <div className="main-feed">
            <HeaderPosts newPostText={newPostText} dispatch={dispatch} />
            {postElements}
        </div>
    )
}
