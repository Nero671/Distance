import React from "react";
import './login.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

export const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required'
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={loginFormSchema}
            >
            {({dirty, isValid}) => (
                <Form className="registration" action="index.html" method="post">
                    <label className="pure-material-textfield-outlined">
                        <Field type={"text"} name={"email"} placeholder=" " id="email" className="form__input" />
                        <span>Email</span>
                    </label>
                    <ErrorMessage name="email" component="div"/>
                    <label className="pure-material-textfield-outlined">
                        <Field  type={"password"} name={"password"} placeholder=" " id="password" className="form__input" />
                        <span>Password</span>
                    </label>
                    <ErrorMessage name="password" component="div"/>
                    <label className="pure-material-textfield-outlined">
                        <Field type={"password"} name={"confirmPassword"} placeholder=" " id="confirmPassword" className="form__input" />
                        <span>Confirm Password</span>
                    </label>
                    <ErrorMessage name="confirmPassword" component="div"/>
                    {/*<label className="pure-material-textfield-outlined hidden">*/}
                    {/*    <input type="password" name="email" placeholder=" " required id="email" className="form__input">*/}
                    {/*        <span>Password</span>*/}
                    {/*</label>*/}
                    <label>
                        <Field  type={"checkbox"} name={'rememberMe'} /> remember me
                    </label>

                    <button disabled={!dirty && !isValid} type="submit" name="button" className="form__btn">
                        Sign Up
                    </button>
                </Form>
            )}
        </Formik>

    )
}

export const Login = () => {
    return (
        <>
            <div>
                <h1 className="login">Distance</h1>
                <LoginForm />
            </div>
        </>
    );
}
