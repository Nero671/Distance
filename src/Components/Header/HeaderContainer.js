import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import { useEffect } from "react";
import {Header} from "./Header";
import {setAuthUserData, setAuthUserDataSuccess} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/Api";

const HeaderContainerWrapper = (props) => {

    useEffect(() => {
        setAuthUserData();
    });

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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataSuccess, setAuthUserData}) (HeaderContainerWrapper)
