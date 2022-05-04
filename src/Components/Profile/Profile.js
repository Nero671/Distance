import React from "react";
import "./profile.css";
import Gift from "../../image/gift.svg";
import User from "../../image/user.svg";
import {UserInfoList} from "../UserInfoList/UserInfoList";
import {Friends} from "./Friends/Friends";

export const Profile = ({ friend }) => {
    let friendList = friend.map((item, index) => <Friends key={index} name={item.userName} />);
    return (
        <div className="user-wrapper">
            <div className="post">
                <div className="user-post">
                    <div className="user-post__item">
                        <div className="post-user__img-wrapper">
                            <img className="post-user__img" src={User} alt="User"/>
                        </div>
                    </div>
                    <div className="user-post__item">
                        <h1 className="user-post__name">
                            Stanislav Kachalko
                        </h1>
                        <ul className="user-info__list">
                            <UserInfoList/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="present">
                    <img src={Gift} alt="Gift"/>
                    <div className="pesent-text">
                        <a href="#" className="present-link">John Doe</a>’s birthday is today
                    </div>
                </div>
            </div>
            <div className="post">
                <h2 className="friend-title">
                    Friends
                </h2>
                <div className="friends-list">
                    {friendList}
                </div>
            </div>
        </div>
    )
}
