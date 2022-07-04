import React from "react";
import './login.css';

export const Login = () => {
    return (
        <>
            <div>
                <h1 className="login">Distance</h1>
                <form className="registration" action="index.html" method="post">
                    <label className="pure-material-textfield-outlined">
                        <input type="text" name="email" placeholder=" " required id="email" className="form__input" />
                            <span>Email</span>
                    </label>
                    <label className="pure-material-textfield-outlined">
                        <input type="password" name="email" placeholder=" " required id="email" className="form__input" />
                            <span>Password</span>
                    </label>
                    {/*<label className="pure-material-textfield-outlined hidden">*/}
                    {/*    <input type="password" name="email" placeholder=" " required id="email" className="form__input">*/}
                    {/*        <span>Password</span>*/}
                    {/*</label>*/}
                    <button type="submit" name="button" className="form__btn">
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    );
}
