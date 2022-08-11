import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import "./profile.css";
import {Contact} from "./Profile";

export const MainProfileFormData = ({profile, saveProfile, profileInfo}) => {

    console.log(profileInfo)
    const contactsWrapper = React.createRef();

    const showContacts = () => {
        contactsWrapper.current.classList.toggle('active');
    }

    return (
        <>
            <Formik
                initialValues={{aboutMe: '', lookingForAJobDescription: '', lookingForAJob: false, fullName: ''}}
                onSubmit={(values) => {
                    saveProfile(values)
                    console.log(values)
                }}
            >
                {() => (
                    <Form className="registration" action="index.html" method="post">
                        <ul className={"user-info__list"}>
                            <li>
                                <button type={'submit'} name="button" className={'btn-edit btn-save'}>Save</button>
                            </li>
                            <li className={"about-user__info about-user__work-info"}>
                                {profileInfo.fullName ? <b>Your name: <span>{profileInfo.fullName}</span></b> : ''}
                                <label className="pure-material-textfield-outlined">
                                    <Field type={"text"} name={"fullName"} placeholder=" " id="fullName" className="form__input edit-form__input" />
                                    <span className={'after-input__span'}>Full Name</span>
                                </label>
                            </li>
                            <li className={"about-user__info"}>
                                {profileInfo.aboutMe ? <b>About me: <span>{profileInfo.aboutMe}</span></b> : ''}
                                <label className="pure-material-textfield-outlined">
                                    <Field type={"text"} name={"aboutMe"} placeholder=" " id="aboutMe" className=" edit-form__input" />
                                    <span className={'after-input__span'}>About me</span>
                                </label>
                            </li>
                            <li className={"about-user__work-info"}>
                                {profileInfo.lookingForAJob ? <div className={'looking-job'}>
                                    Looking for a job
                                </div> : ''}
                                <label>
                                    <Field  type={"checkbox"} name={'lookingForAJob'} /> Are u looking for a job?
                                </label>
                            </li>
                            <li className={"about-user__info about-user__work-info"}>
                                {profileInfo.lookingForAJobDescription ? <b>Your job skills: <span>{profileInfo.lookingForAJobDescription}</span></b> : ''}
                                <label className="pure-material-textfield-outlined">
                                    <Field type={"text"} name={"lookingForAJobDescription"} placeholder=" " id="lookingForAJobDescription" className="form__input edit-form__input" />
                                    <span className={'after-input__span'}>My skills</span>
                                </label>
                            </li>
                            {/*<li className={"about-user__info about-user__contacts"}>*/}
                            {/*    <div className={'contacts'} onClick={showContacts}>Contacts</div>*/}
                            {/*    <div className={'contacts-wrapper'} ref={contactsWrapper}>*/}
                            {/*        {Object.keys(profile.contacts).map(key => {*/}
                            {/*            if (profile.contacts[key]) {*/}
                            {/*                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />*/}
                            {/*            }*/}
                            {/*        })}*/}
                            {/*        <label className="pure-material-textfield-outlined">*/}
                            {/*            <Field type={"text"} name={"contacts"} placeholder=" " id="contacts" className="form__input" />*/}
                            {/*            <span>Contacts</span>*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </Form>
                )}
            </Formik>
        </>

    )
}

