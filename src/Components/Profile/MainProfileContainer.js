import React from "react";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserDataSuccess} from "../../redux/auth-reducer";
import {MainProfile} from "./MainProfile";
import {getStatusThunk, updateStatusThunk} from "../../redux/profilePageReducer";

class MainProfileWrapper extends React.Component  {

    componentDidMount()  {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <MainProfile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    status: state.profilePage.status
});

export const MainProfileContainer = connect(mapStateToProps,
    {
        setAuthUserDataSuccess,
        getAuthUserData,
        getStatusThunk,
        updateStatusThunk
    })
(MainProfileWrapper)
