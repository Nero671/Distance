import React from "react";
import {NavLink} from "react-router-dom";

export const DialogUserName = ({ name, id }) => {
    return (
        <li className="dialog-user-name">
            <NavLink to={"/messages/" + id}>{name}</NavLink>
        </li>
    )
}
