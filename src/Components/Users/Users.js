import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import UnknownUser from '../../image/user.svg';

export const Users = ({ users, follow, unfollow, setUsers }) => {
    let getUsers = () => {
        if(users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response.data.items.name)
                    setUsers(response.data.items)
                })
        }
    }



    return (
        <div className="create-post users-block">
            <div className="header-post">
                <h1 className="title">Users</h1>
            </div>
            <div className={styles.userList}>
                {users.map(item =>
                    <div key={item.id} className={styles.userListItem}>
                        <div className={styles.userInfo}>
                            <div className={styles.userAvatar}>
                                <img src={ item.photos.small != undefined ? item.photos.small : UnknownUser }/>
                            </div>
                            <div>
                                { item.followed ? <button onClick={() => {
                                        unfollow(item.id)
                                    }} className={styles.followBtn}>Unfollow</button> :
                                    <button onClick={() => {
                                        follow(item.id)
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
        </div>
    )
}
