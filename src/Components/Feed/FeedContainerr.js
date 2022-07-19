import React from "react";
import "./feed.css";
import {connect} from "react-redux";
import {Feed} from "./Feed";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        posts: state.feedPage.postData,
        isAuth: state.auth.isAuth
    }
}

export const FeedContainer = compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Feed)
