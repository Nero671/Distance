import React from "react";
import "./profile.css";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile, setUserProfileThunk} from "../../redux/profilePageReducer";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/Api";

export const ProfileContainerWrapper = (props) => {

    const param = useParams();

    // if (!param.id) {
    //     param.id = 2;
    // }
    //
    // console.log(param)

    useEffect(() => {

        usersAPI.getUserProfile(param.id)

            .then(response => {
                props.setUserProfile(response.data);
            })
    })

    return (
        <Profile
            {...props}
            profile={props.profile}
        />
    )

}

let mapStateToProps = (state) => {
    return {
        friend: state.profilePage.friendsData,
        profile: state.profilePage.profile
    }
}

export let ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    setUserProfileThunk
}) (ProfileContainerWrapper)
