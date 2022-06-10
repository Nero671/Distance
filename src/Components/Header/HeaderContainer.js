import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import { useEffect } from "react";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";

const HeaderContainerWrapper = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    props.setAuthUserData(id, email, login)
                }
            })

            .catch(err => {
                console.log(err);
            });
    })

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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData}) (HeaderContainerWrapper)
