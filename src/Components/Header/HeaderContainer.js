import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthUserData, logout, setAuthUserDataSuccess} from "../../redux/auth-reducer";

const HeaderContainerWrapper = (props) => {
    return (
        <Header
            {...props}
            profile={props.profile}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataSuccess, getAuthUserData, logout}) (HeaderContainerWrapper)
