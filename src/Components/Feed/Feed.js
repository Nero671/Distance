import React from "react";
import "./feed.css";
import {CreatePost} from "./CreatePost";
import {HeaderPostsContainer} from "./HeaderPostsContainer";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {Navigate} from "react-router-dom";


export const Feed = ({ posts, isAuth }) => {

    let postElements = posts.map((item, index) => <CreatePost key={index} message={item.message} likes={item.likesCount} />)

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <>
            <div className="main-feed">
                <HeaderPostsContainer />
                {postElements}
            </div>
        </>
    )
}
