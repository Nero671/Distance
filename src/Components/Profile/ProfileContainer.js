import React from "react";
import "./profile.css";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profilePageReducer";
import { useEffect } from "react";
import {useParams} from "react-router-dom";

export const ProfileContainerWrapper = (props) => {

    const param = useParams();

    // if (!param.id) {
    //     param.id = 2;
    // }
    //
    // console.log(param)

    useEffect(() => {



        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${param.id}`)

            .then(response => {
                props.setUserProfile(response.data)
            })

            .catch(err => {
                console.log(err);
            });
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
    setUserProfile
}) (ProfileContainerWrapper)
