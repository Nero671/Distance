import React from "react";
import "./main.css";
import {Main} from "./Main";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const MainContainer = connect(mapStateToProps, {getAuthUserData}) (Main);
