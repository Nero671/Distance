import React from "react";
import './login.css';
import {LoginFormContainer} from "./LoginForm";
import {Navigate} from "react-router-dom";



export const Login = (props) => {

    return (
        <>
            <div className={'loginWrapper'}>
                <h1 className="login">Distance</h1>
                <LoginFormContainer />
            </div>
        </>
    );
}

