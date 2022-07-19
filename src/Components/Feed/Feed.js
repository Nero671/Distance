import React from "react";
import "./feed.css";
import {CreatePost} from "./CreatePost";
import {HeaderPostsContainer} from "./HeaderPostsContainer";

export const Feed = ({ posts }) => {

    let postElements = posts.map((item, index) => <CreatePost key={index} message={item.message} likes={item.likesCount} />)

    return (
        <>
            <div className="main-feed">
                <HeaderPostsContainer />
                {postElements}
            </div>
        </>
    )
}
