import React from "react";
import "./feed.css";
import {connect} from "react-redux";
import {Feed} from "./Feed";

let mapStateToProps = (state) => {
    return {
        posts: state.feedPage.postData
    }
}

export const FeedContainer = connect(mapStateToProps) (Feed);
