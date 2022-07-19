import React from "react";
import styles from "./users.module.css";
import UnknownUser from "../../image/user.svg";
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

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
                    <User
                        key={item.id}
                        users={item}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )}
            </div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
            {props.isFetching ?
                <Preloader />
                : null}
        </div>
    )
}
