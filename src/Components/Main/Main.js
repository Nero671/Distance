import React, {useEffect, Suspense } from "react";
import "./main.css";
import {Sidebar} from "../Sidebar/Sidebar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {FeedContainer} from "../Feed/FeedContainerr";
import {DialogContainer} from "../Dialogs/DialogContainer";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {UsersContainer} from "../Users/UsersContainer";
import {MainProfileContainer} from "../Profile/MainProfileContainer";
import {Login} from "../Login/Login";
import Preloader from "../Common/Preloader/Preloader";
import {NotFound} from "../404/404";

// const MainProfileContainer = React.lazy(() => import('../Profile/MainProfileContainer'));

export const Main = ({isAuth, getAuthUserData}) => {

    useEffect(() => {
        getAuthUserData();
    })


    return (
        <BrowserRouter>
            <main id="content">
                <div className="container">
                    <div className="main-wrapper">
                        {!isAuth ? <Login /> :
                            <>
                                <Sidebar/>
                                <Suspense fallback={<div><Preloader /></div>}>
                                    <Routes>
                                        <Route path="/messages/*"
                                        element={<DialogContainer />}
                                        />
                                        <Route path="/profile/"
                                        element={<FeedContainer />}
                                        />
                                        <Route path="/profile/:id"
                                        element={<ProfileContainer />}
                                        />

                                        <Route path="/users"
                                        element={<UsersContainer />}
                                        />

                                        <Route path="/login"
                                               element={<Login />}
                                        />

                                        <Route path="*"
                                               element={<NotFound />}
                                        />
                                    </Routes>
                                </Suspense>
                                <MainProfileContainer />
                            </>
                        }
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}
