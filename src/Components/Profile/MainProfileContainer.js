import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import { useEffect } from "react";
import {setAuthUserData, setAuthUserDataSuccess} from "../../redux/auth-reducer";
import {MainProfile} from "./MainProfile";

class MainProfileWrapper extends React.Component  {

    componentDidMount()  {
        this.props.setAuthUserData();
    }

    render() {
        return (
            <MainProfile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export const MainProfileContainer = connect(mapStateToProps, {setAuthUserDataSuccess, setAuthUserData}) (MainProfileWrapper)
