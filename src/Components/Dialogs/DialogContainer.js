import React from "react";
import "./dialogs.css";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

let mapPropsToState = (state) => {
    return {
        messages: state.dialogsPage.messagesData,
        dialog: state.dialogsPage.dialogsData
    }
}

export let DialogContainer = connect(mapPropsToState) (Dialogs)