import React from "react";
import "./dialogs.css";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapPropsToState = (state) => {
    return {
        messages: state.dialogsPage.messagesData,
        dialog: state.dialogsPage.dialogsData,
        isAuth: state.auth.isAuth
    }
}

export let DialogContainer = compose(
    connect(mapPropsToState),
    withAuthRedirect
)(Dialogs)

