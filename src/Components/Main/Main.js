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

export const Main = () => {
    return (
        <BrowserRouter>
            <main id="content">
                <div className="container">
                    <div className="main-wrapper">
                        <Sidebar/>
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
                            {/*<Route path="/userProfile/*"*/}
                            {/*       element={<ProfileContainer />}*/}
                            {/*/>*/}
                        </Routes>
                        <MainProfileContainer />
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}
