import React from "react";
import "./profile.css";
import Gift from "../../image/gift.svg";
import User from "../../image/user.svg";
import {UserInfoList} from "../UserInfoList/UserInfoList";

export const Profile = () => {
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
        </div>
    )
}
