import React from "react";
import "./main.css";
import {Sidebar} from "../Sidebar/Sidebar";
import {Feed} from "../Feed/Feed";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const Main = () => {
    return (
        <BrowserRouter>
            <main id="content">
                <div className="container">
                    <div className="main-wrapper">
                        <Sidebar/>
                        <Routes>
                            <Route path="/messages/*" element={<Dialogs/>}/>
                            <Route path="/profile" element={<Feed/>}/>
                        </Routes>
                        <Profile/>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}
