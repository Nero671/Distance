import React from "react";
import styles from "./users.module.css";
import UnknownUser from "../../image/user.svg";
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/Api";

export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className="create-post users-block">
            <div className="header-post">
                <h1 className="title">Users</h1>
            </div>
            <div className={styles.userList}>
                {props.users.map(item =>
                    <div key={item.id} className={styles.userListItem}>
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
                )}
            </div>
            <div>
                {pages.map(page => {
                    return <span
                        key={page}
                        className={props.currentPage === page && styles.selectedPage}
                        onClick={() => { props.onPageChanged(page) }}>
                                {page}
                        </span>
                })}
            </div>
            {props.isFetching ?
                <Preloader />
                : null}
        </div>
    )
}
