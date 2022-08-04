import React, {useEffect, useState} from "react";
import "./profile.css";
import Gift from "../../image/gift.svg";
import User from "../../image/user.svg";
import {UserGeneralInfo} from "./UserInfoList/UserGeneralInfo";
import {MainProfileStatusContainer} from "./ProfileStatusContainer";
import {profileAPI} from "../../api/Api";
import {MainProfileFormData} from "./MainProfileFormData";
import {MainProfileInfo} from "./MainProfileInfo";

export const MainProfile = ({login, savePhoto, profile, saveProfile}) => {

    const [photo, setPhohto] = useState(User);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {

        profileAPI.getUserProfile(24359)
            .then(response => {
                setPhohto(response.data.photos.large)
            })
    });

    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            savePhoto(e.target.files[0]);
        }
    }


    return (
        <div className="user-wrapper">
            <div className="post">
                <div className="user-post">
                    <div className="user-post__item">
                        <div className="post-user__img-wrapper">
                            <img className="post-user__img" src={photo} alt="User"/>
                            <label className={'choose-photo__label'}>
                                <input type={'file'} className={'choose-photo'} onChange={onMainPhotoSelected} />
                            </label>
                        </div>
                    </div>
                    <div className="user-post__item">
                        <h1 className="user-post__name">
                            {login}
                        </h1>
                        <MainProfileStatusContainer />
                        <UserGeneralInfo />
                    </div>

                </div>

                {!profile ? '' : editMode ?
                    <MainProfileFormData saveProfile={saveProfile} profile={profile}/>
                    :
                    <MainProfileInfo goToEditMode={() => {setEditMode(true)}} profile={profile} />
                }

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

                </div>
            </div>
        </div>
    )
}

