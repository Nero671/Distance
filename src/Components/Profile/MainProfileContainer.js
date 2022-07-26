import React from "react";
import {connect} from "react-redux";
import {MainProfile} from "./MainProfile";
import {savePhoto} from "../../redux/profilePageReducer";

const MainProfileWrapper = (props) =>  {

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

export const MainProfileContainer = connect(mapStateToProps, {savePhoto})
(MainProfileWrapper)
