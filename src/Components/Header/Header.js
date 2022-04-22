import React from "react";
import "./header.css";
import Search from "../../image/search.svg";
import User from "../../image/user.svg";

// export const userName = document.querySelector('.user-name').textContent;

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <form action="" className="search-form">
                        <input type="text" placeholder="Search" className="search-input" />
                        <button type="submit" className="search-btn"><img src={Search} alt="Search" /></button>
                    </form>
                    <div className="nav">
                        <div className="user">
                            <img src={User} alt="Avatar" className="user-avatar" />
                            <span className="user-name">
                              Stanislav
                            </span>
                        </div>
                        <div className="nav-menu">
                            <a href="#" className="nav-link">
                                Home
                            </a>
                            <a href="#" className="nav-link">
                                Create
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
