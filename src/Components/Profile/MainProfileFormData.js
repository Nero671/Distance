import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import "./profile.css";
import {Contact} from "./Profile";

export const MainProfileFormData = ({profile, saveProfile}) => {

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
                                <button type={'submit'} name="button">Save</button>
                            </li>
                            <li className={"about-user__info"}>
                                {profile.aboutMe ? <b>About me: <span>{profile.aboutMe}</span></b> : ''}
                                <label className="pure-material-textfield-outlined">
                                    <Field type={"text"} name={"aboutMe"} placeholder=" " id="aboutMe" className="form__input" />
                                    <span>About</span>
                                </label>
                            </li>
                            <li className={"about-user__work-info"}>
                                {profile.lookingForAJob ? <div className={'looking-job'}>
                                    Looking for a job
                                </div> : ''}
                                <label>
                                    <Field  type={"checkbox"} name={'lookingForAJob'} /> Are u looking for a job?
                                </label>
                            </li>
                            <li className={"about-user__info about-user__work-info"}>
                                {profile.lookingForAJobDescription ? <b>Job description: <span>{profile.lookingForAJobDescription}</span></b> : ''}
                                <label className="pure-material-textfield-outlined">
                                    <Field type={"text"} name={"lookingForAJobDescription"} placeholder=" " id="lookingForAJobDescription" className="form__input" />
                                    <span>jobDescription</span>
                                </label>
                            </li>
                            <li className={"about-user__info about-user__work-info"}>
                                fullName
                                <label className="pure-material-textfield-outlined">
                                    <Field type={"text"} name={"fullName"} placeholder=" " id="fullName" className="form__input" />
                                    <span>jobDescription</span>
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


