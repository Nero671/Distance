import React from "react";
import styles from "./users.module.css";

export const Users = ({ users, follow, unfollow, setUsers }) => {

    if(users.length === 0) {
        setUsers([
            {
                id: 1,
                followed: false,
                userName: 'Felix',
                userAvatar: 'https://wvw.db1223.com/gallery/pp.userapi.com/oDtb_Vta6W3wx9ERnFuZ9m0L2Q9AJbq8DGOZBQ/OPeBASU6vaY.jpg',
                userStatus: 'Im looking for a job',
                location: {
                    city: 'Buenos Aires',
                    country: 'Argentina,'
                }
            },
            {
                id: 2,
                followed: true,
                userName: 'Tatiana',
                userAvatar: 'https://wvw.db1223.com/gallery/pp.userapi.com/oDtb_Vta6W3wx9ERnFuZ9m0L2Q9AJbq8DGOZBQ/OPeBASU6vaY.jpg',
                userStatus: 'Infinity happiness',
                location: {
                    city: 'Minsk',
                    country: 'Belarus,'
                }
            },
            {
                id: 3,
                followed: true,
                userName: 'Volodimir',
                userAvatar: 'https://wvw.db1223.com/gallery/pp.userapi.com/oDtb_Vta6W3wx9ERnFuZ9m0L2Q9AJbq8DGOZBQ/OPeBASU6vaY.jpg',
                userStatus: 'Trying something new',
                location: {
                    city: 'Warsaw',
                    country: 'Poland,'
                }
            },
        ])
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
                                <img src={item.userAvatar}/>
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
                                    {item.userName}
                                </div>
                                <div className={styles.userStatus}>
                                    {item.userStatus}
                                </div>
                            </div>
                            <div className={styles.userInfoRight}>
                                <div className="user-country">
                                    {item.location.country}
                                </div>
                                <div className="user-city">
                                    {item.location.city}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
