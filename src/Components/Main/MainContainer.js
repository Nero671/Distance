import React from "react";
import "./main.css";
import {Sidebar} from "../Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FeedContainer} from "../Feed/FeedContainerr";
import {DialogContainer} from "../Dialogs/DialogContainer";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {UsersContainer} from "../Users/UsersContainer";
import {MainProfile} from "../Profile/MainProfile";
import {MainProfileContainer} from "../Profile/MainProfileContainer";
import {Login} from "../Login/Login";
import {Main} from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const MainContainer = connect(mapStateToProps) (Main);
