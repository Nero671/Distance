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

    const contactsWrapper = React.createRef();

    const showContacts = () => {
        contactsWrapper.current.classList.toggle('active');
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
                            <div className="about-user">
                                {status ? status : <span>Hi, I'm <b>{profile.fullName}.</b> Nice to meet you!</span>}
                            </div>
                        </div>
                    </div>
                    <ul className="user-info__list">
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

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={'contacts-item'}>
            <div className={'contacts-title'}>
                {contactTitle}:
            </div>
            <a href={contactValue} target="_blank" rel="noreferrer">
                {contactValue}
            </a>
        </div>
    )
}
