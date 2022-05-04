import React from "react";
import User from "../../../image/user.svg";

export const Friends = ({ name }) => {
    return (
        <div className="friends-item">
            <div className="friends-logo">
                <img src={User}  alt="Friend logo" />
            </div>
            <div className="friend-name">
                {name}
            </div>
        </div>
    )
}
