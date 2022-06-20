import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    let AuthRedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to="/login"/>
        return <Component {...props } />
    }

    let mapStatetoPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth,
    })

    let ConnectedAuthRedirectComponent = connect(mapStatetoPropsForRedirect)(AuthRedirectComponent)

    return ConnectedAuthRedirectComponent;
}




