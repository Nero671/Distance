import React from "react";
import "./profile.css";
import {connect} from "react-redux";
import {Profile} from "./Profile";

let mapStateToProps = (state) => {
    return {
        friend: state.profilePage.friendsData
    }
}

export let ProfileContainer = connect(mapStateToProps) (Profile)
