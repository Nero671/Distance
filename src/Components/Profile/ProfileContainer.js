import React from "react";
import "./profile.css";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profilePageReducer";

class ProfileContainerWrapper extends React.Component {
    debugger;
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)

            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
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
