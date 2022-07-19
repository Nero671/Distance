import React from "react";
import styles from "./users.module.css";
import UnknownUser from "../../image/user.svg";
import {NavLink} from "react-router-dom";

export const User = (props) => {
    let item = props.users;
    return (
        <div className={styles.userListItem}>
            <div className={styles.userInfo}>
                <div className={styles.userAvatar}>
                    <NavLink to={'/profile/' + item.id}>
                        <img src={ item.photos.small != undefined ? item.photos.small : UnknownUser }/>
                    </NavLink>
                </div>
                <div>
                    { item.followed ?

                        <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                            props.unfollow(item.id)
                        }} className={styles.followBtn}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                            props.follow(item.id)
                        }} className={styles.followBtn}>Follow</button>
                    }

                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userInfoLeft}>
                    <div className={styles.userName}>
                        {item.name}
                    </div>
                    <div className={styles.userStatus}>
                        {item.status}
                    </div>
                </div>
                <div className={styles.userInfoRight}>
                    <div className="user-country">
                        {"item.location.country"}
                    </div>
                    <div className="user-city">
                        {"item.location.city"}
                    </div>
                </div>
            </div>
        </div>

    )
}
