import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import { useEffect } from "react";
import {setAuthUserData, setAuthUserDataSuccess} from "../../redux/auth-reducer";
import {MainProfile} from "./MainProfile";

const MainProfileWrapper = (props) => {

    useEffect(() => {
         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
             withCredentials: true
         })

             .then(response => {
                 if (response.data.resultCode === 0) {
                     let {id, email, login} = response.data.data;
                     props.setAuthUserDataSuccess(id, email, login)
                 }
             })
    })

    return (
        <MainProfile
            {...props}
            profile={props.profile}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export const MainProfileContainer = connect(mapStateToProps, {setAuthUserDataSuccess, setAuthUserData}) (MainProfileWrapper)
