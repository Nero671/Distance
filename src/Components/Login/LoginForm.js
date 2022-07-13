import {ErrorMessage, Field, Form, Formik} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const LoginForm = ({login, isAuth}) => {

    if (isAuth) {
        return <Navigate to="/profile"/>
    }

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
            onSubmit={(values, {setSubmitting, setStatus}) => {
                console.log(setStatus)
                login(values.email, values.password, values.rememberMe, setStatus);
                setSubmitting(false);
            }}
            validationSchema={loginFormSchema}
        >
            {({dirty, isValid, status}) => (
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
                    <div>
                        {status}
                    </div>

                    {/*<label className="pure-material-textfield-outlined">*/}
                    {/*    <Field type={"password"} name={"confirmPassword"} placeholder=" " id="confirmPassword" className="form__input" />*/}
                    {/*    <span>Confirm Password</span>*/}
                    {/*</label>*/}
                    {/*<ErrorMessage name="confirmPassword" component="div"/>*/}
                    <label>
                        <Field  type={"checkbox"} name={'rememberMe'} /> remember me
                    </label>

                    <button disabled={!dirty && !isValid} type={"submit"} name="button" className="form__btn">
                        Sign Up
                    </button>
                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const LoginFormContainer = connect(mapStateToProps, {login}) (LoginForm)
