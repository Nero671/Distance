import React, {FC} from "react";
import styles from "./users.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";
import {UserType} from "../../type/type";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    isFetching: boolean
}

export const Users: FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={"create-post users-block"}>
            <div className={"header-post"}>
                <h1 className={"title"}>Users</h1>
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
