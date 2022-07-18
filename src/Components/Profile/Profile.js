import React from "react";
import "./profile.css";
import User from "../../image/user.svg";
import {Friends} from "./Friends/Friends";
import Preloader from "../Common/Preloader/Preloader";
import {FeedContainer} from "../Feed/FeedContainerr";

export const Profile = ({ friend, profile, posts, status }) => {
    let friendList = friend.map((item, index) => <Friends key={index} name={item.userName} />);

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className="user-page__container">
            <div className="user-wrapper user-profile__wrapper">
                <div className="post user-page__post">
                    <div className="user-post user-page__post">
                        <div className="user-post__item">
                            <div className="post-user__img-wrapper">
                                <img className="post-user__img" src={profile.photos.large ? profile.photos.large : User} alt="User"/>
                            </div>
                        </div>
                        <div className="user-post__item">
                            <h1 className="user-post__name">
                                {profile.fullName}
                            </h1>
                            <ul className="user-info__list">
                                <li className="about-user">
                                    {status ? status : <span>Hi, I'm <b>{profile.fullName}.</b> Nice to meet you!</span>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post user-page__post">
                    <h2 className="friend-title">
                        Friends
                    </h2>
                    <div className="friends-list">
                        {friendList}
                    </div>
                </div>
            </div>
            <FeedContainer posts={posts}/>
        </div>
    )
}
