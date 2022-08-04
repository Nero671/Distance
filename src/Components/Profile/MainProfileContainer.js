import React, {useEffect} from "react";
import {connect} from "react-redux";
import {MainProfile} from "./MainProfile";
import {savePhoto, saveProfile} from "../../redux/profilePageReducer";
import {profileAPI} from "../../api/Api";

const MainProfileWrapper = (props) =>  {

    // useEffect(() => {
    //     profileAPI.getUserProfile(24359)
    //         .then(response => {
    //             console.log(response.data)
    //             props.getUserProfile(response.data);
    //         })
    // })

    return (
        <MainProfile
            {...props}
            savePhoto={props.savePhoto}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
});

export const MainProfileContainer = connect(mapStateToProps, {savePhoto, saveProfile})
(MainProfileWrapper)
