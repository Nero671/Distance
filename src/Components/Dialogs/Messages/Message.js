import React from "react";
import User from "../../../image/user.svg";

export const Message = ({ name, message }) => {
    return (
        <div className="dialog-user">
            <div className="dialog-user__profile">
                <img src={User}  alt="userAvatar"/>
                <div className="user-name">
                    {name}
                </div>
            </div>
            <div className="dialog-user__text">
                {message}
            </div>
        </div>
    )
}



