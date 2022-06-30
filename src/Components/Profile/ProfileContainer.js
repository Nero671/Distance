import React from "react";
import "./profile.css";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setStatus, setUserProfile, setUserProfileThunk} from "../../redux/profilePageReducer";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {profileAPI, usersAPI} from "../../api/Api";

export const ProfileContainerWrapper = (props) => {

    const param = useParams();

    // if (!param.id) {
    //     param.id = 2;
    // }
    //
    // console.log(param)

    useEffect(() => {

        profileAPI.getUserProfile(param.id)

            .then(response => {
                props.setUserProfile(response.data);
            })

        profileAPI.getStastus(param.id)
            .then(response => {
                props.setStatus(response.data);
            })
    })

    return (
        <Profile
            {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
    )

}

let mapStateToProps = (state) => {
    return {
        friend: state.profilePage.friendsData,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export let ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    setUserProfileThunk,
    setStatus,
}) (ProfileContainerWrapper)
