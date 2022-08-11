import React, {useEffect, useState} from "react";
import "./profile.css";
import {Contact} from "./Profile";
import {profileAPI} from "../../api/Api";

export const MainProfileInfo = ({profile, goToEditMode, profileInfo}) => {



    const contactsWrapper = React.createRef();

    const showContacts = () => {
        contactsWrapper.current.classList.toggle('active');
    }

    return (
        <ul className="user-info__list">
            <li>
                <button className={'btn-edit'} onClick={goToEditMode}>Edit</button>
            </li>
            <li className="about-user__info">
                {profileInfo.aboutMe ? <b>About me: <span>{profileInfo.aboutMe}</span></b> : ''}
            </li>
            <li className="about-user__work-info">
                {profileInfo.lookingForAJob ? <div className={'looking-job'}>
                    Looking for a job
                </div> : ''}
            </li>
            <li className="about-user__info about-user__work-info">
                {profileInfo.lookingForAJobDescription ? <b>My skills: <span>{profileInfo.lookingForAJobDescription}</span></b> : ''}
            </li>
            <li className="about-user__info about-user__contacts">
                <div className={'contacts'} onClick={showContacts}>Contacts</div>
                <div className={'contacts-wrapper'} ref={contactsWrapper}>
                    {Object.keys(profileInfo.contacts).map(key => {
                        if (profileInfo.contacts[key]) {
                            return <Contact key={key} contactTitle={key} contactValue={profileInfo.contacts[key]} />
                        }
                    })}
                </div>
            </li>
        </ul>
    )
}
