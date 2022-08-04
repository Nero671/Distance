import React from "react";
import "./userInfoList.css";

export const UserGeneralInfo = () => {
    return (
        <ul className="user-info__list-general">
            <li className="user-info__list-text">Date of Birth: <span>12 September</span></li>
            <li className="user-info__list-text">City: <span>Minsk</span></li>
            <li className="user-info__list-text">Education: <span>BSU'20</span></li>
            <li className="user-info__list-text">Web Site: <span><a className="present-link" href="https://myportfolio-a3aa6.web.app/">myportfolio.web.app</a></span></li>
        </ul>
    )
}
