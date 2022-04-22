import React from "react";
import "./feed.css";
import {HeaderPosts} from "./HeaderPosts";
import {CreatePost} from "./CreatePost";
// import {userName} from "../Components/Header/Header";

export const Feed = () => {

    let postData = [
        {id: 1, message: 'Hi this my fist post. I decided to learn React and become a real pro in it!', likesCount: 33},
        {id: 2, message: 'My studies continua', likesCount: 22},
        {id: 3, message: 'Hi, everyone. React is Better then Vue :D', likesCount: 12},
    ]

    let postElements = postData.map(item => <CreatePost message={item.message} likes={item.likesCount} />)

    return (
        <div className="main-feed">
            <HeaderPosts/>
            {postElements}
        </div>
    )
}
