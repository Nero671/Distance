import React, {useEffect, useState} from "react";
import "./profile.css";
import {Contact} from "./Profile";

export const MainProfileInfo = ({profile, goToEditMode}) => {

    const contactsWrapper = React.createRef();

    const showContacts = () => {
        contactsWrapper.current.classList.toggle('active');
    }

    return (
        <ul className="user-info__list">
            <li>
                <button onClick={goToEditMode}>Edit</button>
            </li>
            <li className="about-user__info">
                {profile.aboutMe ? <b>About me: <span>{profile.aboutMe}</span></b> : ''}
            </li>
            <li className="about-user__work-info">
                {profile.lookingForAJob ? <div className={'looking-job'}>
                    Looking for a job
                </div> : ''}
            </li>
            <li className="about-user__info about-user__work-info">
                {profile.lookingForAJobDescription ? <b>Job description: <span>{profile.lookingForAJobDescription}</span></b> : ''}
            </li>
            <li className="about-user__info about-user__contacts">
                <div className={'contacts'} onClick={showContacts}>Contacts</div>
                <div className={'contacts-wrapper'} ref={contactsWrapper}>
                    {Object.keys(profile.contacts).map(key => {
                        if (profile.contacts[key]) {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        }
                    })}
                </div>
            </li>
        </ul>
    )
}
