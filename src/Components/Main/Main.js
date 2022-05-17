import React from "react";
import "./main.css";
import {Sidebar} from "../Sidebar/Sidebar";
import {Feed} from "../Feed/Feed";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const Main = ({
                         posts,
                         messages,
                         dialog,
                         friend,
}) => {
    return (
        <BrowserRouter>
            <main id="content">
                <div className="container">
                    <div className="main-wrapper">
                        <Sidebar/>
                        <Routes>
                            <Route path="/messages/*"
                                   element={<Dialogs messages={messages}
                                                     dialog={dialog}
                                   />}
                            />
                            <Route path="/profile"
                                   element={<Feed posts={posts}
                                            />}
                            />
                        </Routes>
                        <Profile friend={friend}/>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}
