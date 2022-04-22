import React from "react";
import "./sidebar.css";
import User from "../../image/user.svg";
import Profile from "../../image/profile.svg";
import Messages from "../../image/messages.svg";
import News from "../../image/news.svg";
import Music from "../../image/music.svg";
import Settings from "../../image/settings.svg";
import {NavLink} from "react-router-dom";

const MenuItem = ({ path, title, icon }) => {
    return (
        <NavLink to={path} className="group-link">
            <img src={icon} alt="user"/>
            <span className="group-text">
                {title}
            </span>
        </NavLink>
    )
}

export const Sidebar = () => {
    return (
        <div className="menu-sidebar">
            <div className="user">
                <img src={User} alt="Avatar" className="sidebar-avatar"/>
                <span className="user-name">
                  Kachalko Stanislav
                </span>
            </div>
            <nav className="nav-group">
                <MenuItem path={"/profile"} icon={Profile} title="Profile"/>
                <MenuItem path={"/messages"} icon={Messages} title="Messages"/>
                <MenuItem path={"/news"} icon={News} title="News"/>
                <MenuItem path={"/music"} icon={Music} title="Music"/>
                <MenuItem path={"/settings"} icon={Settings} title="Settings"/>
            </nav>
        </div>
    );

}
