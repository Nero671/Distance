import React from "react";
import './login.css';
import {LoginFormContainer} from "./LoginForm";

export const Login = () => {
    return (
        <>
            <div className={'loginWrapper'}>
                <h1 className="login">Distance</h1>
                <LoginFormContainer />
            </div>
        </>
    );
}

