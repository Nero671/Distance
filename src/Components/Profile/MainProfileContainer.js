import React from "react";
import {connect} from "react-redux";
import {MainProfile} from "./MainProfile";

const MainProfileWrapper = (props) =>  {

    return (
        <MainProfile
            {...props}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export const MainProfileContainer = connect(mapStateToProps, {})
(MainProfileWrapper)
